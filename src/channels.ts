// For more information about this file see https://dove.feathersjs.com/guides/cli/channels.html
import type { RealTimeConnection, Params } from '@feathersjs/feathers';
import type { AuthenticationResult } from '@feathersjs/authentication';
import '@feathersjs/transport-commons';
import type { Application, HookContext } from './declarations';
import { logger } from './logger';
export const channels = (app: Application) => {
  logger.warn(
    'Publishing all events to all authenticated users. See `channels.ts` and https://dove.feathersjs.com/api/channels.html for more information.'
  );

  app.on('connection', (connection: RealTimeConnection) => {
    // On a new real-time connection, add it to the anonymous channel
    app.channel('anonymous').join(connection);
  });

  app.on('login', (authResult: AuthenticationResult, { connection }: Params) => {
    // connection can be undefined if there is no
    // real-time connection, e.g. when logging in via REST
    if (connection) {
      // The connection is no longer anonymous, remove it
      app.channel('anonymous').leave(connection);

      // Add it to the authenticated user channel
      app.channel('authenticated').join(connection);
    }
  });

  /* Channel service start */
  // send a new channel info to all authenticated users
  app.service('channelsService').publish('created', () => {
    return app.channel('authenticated');
  });

  // send channel updates to all authenticated users
  app.service('channelsService').publish('patched', () => {
    return app.channel('authenticated');
  });

  // after the user joins the channel, send previous messages to him
  app.service('channelsService').publish('joined', async (data, context: HookContext) => {
    const messages = await app.service('messagesService').find({
      query: {
        channelId: data.activeChannel,
        $limit: 50,
        $sort: {
          createdAt: -1
        }

      }
    });
    const reversedMessages = [...messages.data].reverse();
    context.dispatch = reversedMessages;
    return app.channel(data.activeChannel).filter((connection) => {
      return connection.user._id.toString() === data.userId.toString();
    });
  });
  /* Channel service end */

  /* User service start */
  // update the user list on the previous channel after the user changes the channel
  app.service('usersService').publish('left', (data, context: HookContext) => {
    const users = app.channel(data.previousChannel).connections.map(connection => {
      return {
        _id: connection.user._id,
        username: connection.user.username,
        avatarUrl: connection.user.avatarUrl
      };
    });
    context.dispatch = { users: users };

    return app.channel(data.previousChannel);
  });

  // update the user list if someone is kicked

  app.service('usersService').publish('kicked', async (data, context: HookContext) => {
    app.channel(data.currentChannel).leave((connection: RealTimeConnection) => {
      return connection.user._id.toString() === data.userId;
    });
    app.service('usersService').emit('left', { previousChannel: data.currentChannel });
    const user = await app.service('usersService').get(data.userId);

    context.dispatch = user.authorizedChannels;

    return app.channel('authenticated').filter((connection: RealTimeConnection) => {
      return connection.user._id.toString() === data.userId;
    });
  });
  // join the channel
  app.service('usersService').publish('channelUpdated', async (data, context: HookContext) => {
    const user = await app.service('usersService').get(data.userId);
    // eslint-disable-next-line no-param-reassign
    data.connection.user = user;
    app.channel(data.activeChannel).join(data.connection);

    app.service('channelsService').emit('joined', { activeChannel: data.activeChannel, userId: data.userId });

    const users = app.channel(data.activeChannel).connections.map(connection => {
      return {
        _id: connection.user._id,
        username: connection.user.username,
        avatarUrl: connection.user.avatarUrl
      };
    });
    if (data.previousChannel) {
      app.channel(data.previousChannel).leave((connection: RealTimeConnection) => {
        return connection.user._id.toString() === data.userId.toString();
      });
      app.service('usersService').emit('left', { previousChannel: data.previousChannel });
    }

    context.dispatch = { activeChannel: data.activeChannel, users: users };
    return app.channel(data.activeChannel);
  });
  // update the user's authorized channel list
  app.service('usersService').publish('authChannelsUpdated', (data, context) => {
    context.dispatch = data.authorizedChannels;
    return app.channel('authenticated').filter((connection) => {
      return connection.user._id.toString() === data.myId.toString();
    });
  });
  /* User service end */

  /* Message service start */
  app.service('messagesService').publish('created', (data) => {
    if (Boolean(data.privateChatId) === true && data.channelId === undefined) {
      app.service('messagesService').emit('privateMessage', data);
    }

    if (data.privateChatId === undefined && Boolean(data.channelId) === true) {
      app.service('messagesService').emit('publicMessage', data);
    }
  });

  app.service('messagesService').publish('privateMessage', async (data, context: HookContext) => {
    context.dispatch = data;
    return app.channel(data.privateChatId);
  });

  app.service('messagesService').publish('publicMessage', (data, context: HookContext) => {
    context.dispatch = data;
    return app.channel(data.channelId);
  });
  /* Message service end */

  /* Private chat service start */
  // join the private chat and connect the recipient to the channel
  app.service('privateChatsService').publish('joinedChat', (data) => {
    app.channel(data.privateChatId).join(data.connection);
    const userConnection = app.channel('authenticated').connections.filter((connection) => {
      return connection.user._id.toString() === data.userId;
    });
    app.channel(data.privateChatId).join(userConnection[0]);
  });

  // send previous messages from private chat to the user
  app.service('privateChatsService').publish('sendMessages', async (data, context) => {
    const messages = await app.service('messagesService').find({
      query: {
        privateChatId: data.privateChatId,
        $limit: 50,
        $sort: {
          createdAt: -1
        }
      }
    });
    const reversedMessages = [...messages.data].reverse();

    context.dispatch = reversedMessages;
    return app.channel(data.privateChatId).filter((connection) => {
      return connection.user._id.toString() === data.myId;
    });
  });
  /* Private chat service end */

  // when the user disconnects, update the user list for the last channel
  app.on('disconnect', async (connection: RealTimeConnection) => {
    if (connection?.user?._id) {
      const user = await app.service('usersService').get(connection.user._id);
      await app.service('usersService').patch(user._id, { activeChannel: '' });
      app.service('usersService').emit('left', { previousChannel: user.activeChannel });
    }
  });
};
