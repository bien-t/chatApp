// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';
import { BadRequest } from '@feathersjs/errors';

import type { Application } from '../../declarations';
import type {
  User, UserData, UserPatch, UserQuery
} from './users.schema';
import { app } from '../../app';

export type {
  User, UserData, UserPatch, UserQuery
};

export interface UserParams extends MongoDBAdapterParams<UserQuery> { }

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class UserService<ServiceParams extends Params = UserParams> extends MongoDBService<
  User,
  UserData,
  UserParams,
  UserPatch
> {
  // eslint-disable-next-line class-methods-use-this
  async channel(data: any, params?: Params) {
    if (params?.user) {
      if (data.activeChannel === params.user.activeChannel) {
        return { activeChannel: data.activeChannel };
      }
      await app.service('usersService').patch(params.user._id, { activeChannel: data.activeChannel, previousChannel: params.user.activeChannel });
      app.service('usersService').emit('channelUpdated', {
        activeChannel: data.activeChannel, userId: params.user._id, previousChannel: params.user.activeChannel, connection: params.connection
      });
      return { activeChannel: data.activeChannel };
    }
    return {};
  }

  // eslint-disable-next-line class-methods-use-this
  async patchEmail(data: any, params?: Params) {
    const checkEmail = await app.service('usersService').find({ query: { email: data.email } });
    if (params?.user) {
      if (checkEmail.data.length > 0) {
        throw new BadRequest('This email is already in use.');
      }
      const user = await app.service('usersService').patch(params.user._id, { email: data.email });
      return { _id: user._id, email: user.email, role: user.role };
    }
    return {};
  }

  // eslint-disable-next-line class-methods-use-this
  async kickUser(data: any) {
    const user = await app.service('usersService').get(data.userId);
    if (user.authorizedChannels.includes(user.activeChannel)) {
      const filteredAuthChannels = user.authorizedChannels.filter((channel) => channel !== user.activeChannel);
      await app.service('usersService').patch(data.userId, { authorizedChannels: filteredAuthChannels, activeChannel: '' });
    }

    app.service('usersService').emit('kicked', { currentChannel: user.activeChannel, userId: data.userId });

    return {};
  }
}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('users'))
  };
};
