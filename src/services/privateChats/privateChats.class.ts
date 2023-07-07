// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';

import type { Application } from '../../declarations';
import type {
  PrivateChat, PrivateChatData, PrivateChatPatch, PrivateChatQuery
} from './privateChats.schema';
import { BadRequest } from '@feathersjs/errors';
import { app } from '../../app';

export type {
  PrivateChat, PrivateChatData, PrivateChatPatch, PrivateChatQuery
};

export interface PrivateChatParams extends MongoDBAdapterParams<PrivateChatQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class PrivateChatService<ServiceParams extends Params = PrivateChatParams> extends MongoDBService<
  PrivateChat,
  PrivateChatData,
  PrivateChatParams,
  PrivateChatPatch
> {
  // eslint-disable-next-line class-methods-use-this
  async joinChat(data:any, params?: Params) {
    let privateChatId;
    if (params?.user) {
      if (data.userId === params.user._id.toString()) {
        throw new BadRequest("You can't chat with yourself.");
      }
      const filteredChat = params.user.privateChats.filter((singleChat)=>{
        return singleChat.userId === data.userId;
      });
      if (filteredChat.length === 0) {
        privateChatId = (await app.service('privateChatsService').create({ users: [data.userId, params.user._id.toString()] }))._id.toString();
        await app.service('usersService').patch(params.user._id, { privateChats: [...params.user.privateChats, { userId: data.userId, privateChatId: privateChatId }] });
        const userData = await app.service('usersService').get(data.userId);
        await app.service('usersService').patch(data.userId, { privateChats: [...userData.privateChats, { userId: params.user._id.toString(), privateChatId: privateChatId }] });
        app.service('privateChatsService').emit('joinedChat', { privateChatId: privateChatId, connection: params.connection, userId: data.userId });
        app.service('privateChatsService').emit('sendMessages', { privateChatId: privateChatId, myId: params.user._id.toString() });
      } else {
        privateChatId = filteredChat[0].privateChatId;
        app.service('privateChatsService').emit('joinedChat', { privateChatId: privateChatId, connection: params.connection, userId: data.userId });
        app.service('privateChatsService').emit('sendMessages', { privateChatId: privateChatId, myId: params.user._id.toString() });
      }
    }
    return {
      chatId: privateChatId
    };
  }
}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('private-chats'))
  };
};
