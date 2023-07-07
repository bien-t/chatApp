// For more information about this file see https://dove.feathersjs.com/guides/cli/log-error.html
import { BadRequest } from '@feathersjs/errors';
import type { HookContext, NextFunction } from '../declarations';
import { User } from '../client';
const bcrypt = require('bcryptjs');
export const verifyChannelPassword = async (context: HookContext, next: NextFunction) => {
  let runNext = false;

  if (context.data.activeChannel) {
    const channel = await context.app.service('channelsService').get(context.data.activeChannel);
    if (channel.password) {
      const isChannelAuthorized = (context.params.user as User).authorizedChannels.filter(channel => channel === context.data.activeChannel);
      if (isChannelAuthorized.length === 1) {
        runNext = true;
      }
      if (context.data.channelPassword && isChannelAuthorized.length === 0) {
        const comparedPassword = await bcrypt.compare(context.data.channelPassword, channel.password);
        if (comparedPassword) {
          const patchedUser = await context.app.service('usersService').patch((context.params.user._id), {
            authorizedChannels: [...context.params.user.authorizedChannels, context.data.activeChannel]
          });
          // @ts-ignore
          context.app.service('usersService').emit('authChannelsUpdated', { myId: context.params.user._id, authorizedChannels: patchedUser.authorizedChannels });
          runNext = true;
        }
      }
    } else {
      runNext = true;
    }
  } else {
    runNext = true;
  }

  if (runNext) {
    await next();
  } else {
    throw new BadRequest("You can't join");
  }
};
