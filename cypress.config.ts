import { defineConfig } from 'cypress';
import { app } from './src/app';
import {
  channels, messages, users, privateChats
} from './cypress/mongo/seedData';
export default defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack'
    }
  },

  viewportWidth: 1300,
  hideXHRInCommandLog: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        'defaults:db': async () => {
          await Promise.all([
            app.get('mongodbClient').then((db) => db.collection('channels').drop()),
            app.get('mongodbClient').then((db) => db.collection('messages').drop()),
            app.get('mongodbClient').then((db) => db.collection('users').drop()),
            app.get('mongodbClient').then((db) => db.collection('private-chats').drop())
          ]).catch(error => console.log('errror', error));
          Promise.all(
            [
              app.get('mongodbClient').then((db) => db.collection('channels').insertMany(channels)),
              app.get('mongodbClient').then((db) => db.collection('messages').insertMany(messages)),
              app.get('mongodbClient').then((db) => db.collection('users').insertMany(users)),
              app.get('mongodbClient').then((db) => db.collection('private-chats').insertMany(privateChats))

            ]
          ).catch(error => console.log('errror', error));
          return null;
        }
      });
    }
  }
});
