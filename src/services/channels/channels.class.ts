// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';

import type { Application } from '../../declarations';
import type {
  Channel, ChannelData, ChannelPatch, ChannelQuery
} from './channels.schema';

export type {
  Channel, ChannelData, ChannelPatch, ChannelQuery
};

export interface ChannelParams extends MongoDBAdapterParams<ChannelQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class ChannelService<ServiceParams extends Params = ChannelParams> extends MongoDBService<
  Channel,
  ChannelData,
  ChannelParams,
  ChannelPatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    // paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('channels'))
  };
};
