// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type {
  Channel, ChannelData, ChannelPatch, ChannelQuery, ChannelService
} from './channels.class';

export type {
  Channel, ChannelData, ChannelPatch, ChannelQuery
};

export const channelPath = 'channelsService';

export const channelMethods = ['find', 'get', 'create', 'patch', 'remove'] as const;
export type ChannelClientService = Pick<ChannelService<Params<ChannelQuery>>, (typeof channelMethods)[number]>

export const channelClient = (client: ClientApplication) => {
  const connection = client.get('connection');

  client.use(channelPath, connection.service(channelPath), {
    methods: channelMethods
  });
};

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [channelPath]: ChannelClientService
  }
}
