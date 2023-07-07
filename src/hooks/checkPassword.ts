// For more information about this file see https://dove.feathersjs.com/guides/cli/log-error.html
import { BadRequest } from '@feathersjs/errors';
import type { HookContext, NextFunction } from '../declarations';

export const checkPassword = async (context: HookContext, next: NextFunction) => {
  if (context.data.password === context.data.passwordConfirm) {
    await next();
  } else {
    throw new BadRequest('Passwords are different');
  }
};
