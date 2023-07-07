// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication';

import { hooks as schemaHooks } from '@feathersjs/schema';

import {
  channelDataValidator,
  channelPatchValidator,
  channelQueryValidator,
  channelResolver,
  channelExternalResolver,
  channelDataResolver,
  channelPatchResolver,
  channelQueryResolver
} from './channels.schema';

import type { Application } from '../../declarations';
import { ChannelService, getOptions } from './channels.class';
import { channelPath, channelMethods } from './channels.shared';
import { isAdmin } from '../../hooks/isAdmin';

export * from './channels.class';
export * from './channels.schema';

// A configure function that registers the service and its hooks via `app.configure`
export const channel = (app: Application) => {
  // Register our service on the Feathers application
  app.use(channelPath, new ChannelService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: channelMethods,
    // You can add additional custom events to be sent to clients here
    events: ['joined', 'notAuthorized']
  });
  // Initialize hooks
  app.service(channelPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(channelExternalResolver),
        schemaHooks.resolveResult(channelResolver)
      ],
      find: [authenticate('jwt')],
      get: [authenticate('jwt')],
      create: [authenticate('jwt'), isAdmin],
      update: [authenticate('jwt'), isAdmin],
      patch: [authenticate('jwt'), isAdmin],
      remove: [authenticate('jwt'), isAdmin]
    },
    before: {
      all: [schemaHooks.validateQuery(channelQueryValidator), schemaHooks.resolveQuery(channelQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(channelDataValidator), schemaHooks.resolveData(channelDataResolver)],
      patch: [schemaHooks.validateData(channelPatchValidator), schemaHooks.resolveData(channelPatchResolver)],
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
    [channelPath]: ChannelService
  }
}
