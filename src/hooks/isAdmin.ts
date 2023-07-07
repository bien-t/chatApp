// For more information about this file see https://dove.feathersjs.com/guides/cli/log-error.html
import { NotAuthenticated } from '@feathersjs/errors';
import type { HookContext, NextFunction } from '../declarations';

export const isAdmin = async (context: HookContext, next: NextFunction) => {
  const userRole = context.params.user.role;

  if (userRole === 'admin') {
    await next();
  } else {
    throw new NotAuthenticated("You aren't authenticated for this action.");
  }
};
