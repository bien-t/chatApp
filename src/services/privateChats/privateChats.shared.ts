// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type {
  PrivateChat,
  PrivateChatData,
  PrivateChatPatch,
  PrivateChatQuery,
  PrivateChatService
} from './privateChats.class';

export type {
  PrivateChat, PrivateChatData, PrivateChatPatch, PrivateChatQuery
};

export const privateChatPath = 'privateChatsService';

export const privateChatMethods = ['find', 'get', 'create', 'patch', 'remove', 'joinChat'] as const;
export type PrivateChatClientService = Pick<
  PrivateChatService<Params<PrivateChatQuery>>,
  (typeof privateChatMethods)[number]
>
export const privateChatClient = (client: ClientApplication) => {
  const connection = client.get('connection');

  client.use(privateChatPath, connection.service(privateChatPath), {
    methods: privateChatMethods
  });
};

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [privateChatPath]: PrivateChatClientService
  }
}
