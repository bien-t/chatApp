// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication';

import { hooks as schemaHooks } from '@feathersjs/schema';

import {
  privateChatDataValidator,
  privateChatPatchValidator,
  privateChatQueryValidator,
  privateChatResolver,
  privateChatExternalResolver,
  privateChatDataResolver,
  privateChatPatchResolver,
  privateChatQueryResolver
} from './privateChats.schema';

import type { Application } from '../../declarations';
import { PrivateChatService, getOptions } from './privateChats.class';
import { privateChatPath, privateChatMethods } from './privateChats.shared';

export * from './privateChats.class';
export * from './privateChats.schema';

// A configure function that registers the service and its hooks via `app.configure`
export const privateChat = (app: Application) => {
  // Register our service on the Feathers application
  app.use(privateChatPath, new PrivateChatService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: privateChatMethods,
    // You can add additional custom events to be sent to clients here
    events: ['joinedChat', 'sendMessages']
  });
  // Initialize hooks
  app.service(privateChatPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(privateChatExternalResolver),
        schemaHooks.resolveResult(privateChatResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(privateChatQueryValidator),
        schemaHooks.resolveQuery(privateChatQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(privateChatDataValidator),
        schemaHooks.resolveData(privateChatDataResolver)
      ],
      patch: [
        schemaHooks.validateData(privateChatPatchValidator),
        schemaHooks.resolveData(privateChatPatchResolver)
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  });
};

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [privateChatPath]: PrivateChatService
  }
}
