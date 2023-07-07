import { privateChat } from './privateChats/privateChats';
import { channel } from './channels/channels';
import { message } from './messages/messages';
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations';
import { user } from './users/users';

export const services = (app: Application) => {
  app.configure(privateChat);
  app.configure(channel);
  app.configure(message);
  app.configure(user);
  // All services will be registered here
};
