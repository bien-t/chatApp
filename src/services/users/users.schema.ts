// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema';
import {
  StringEnum, Type, getValidator, querySyntax
} from '@feathersjs/typebox';
import type { Static } from '@feathersjs/typebox';
import { passwordHash } from '@feathersjs/authentication-local';

import type { HookContext } from '../../declarations';
import { dataValidator, queryValidator } from '../../validators';
import { BadRequest } from '@feathersjs/errors';

// Main data model schema
export const userSchema = Type.Object(
  {
    _id: Type.String({ objectid: true }),
    email: Type.String({ format: 'email' }),
    password: Type.String(),
    passwordConfirm: Type.String(),
    avatarUrl: Type.Optional(Type.String()),
    channelPassword: Type.Optional(Type.String()),
    role: StringEnum(['user', 'admin']),
    activeChannel: Type.String(),
    previousChannel: Type.String(),
    authorizedChannels: Type.Array(Type.String()),
    privateChats: Type.Array(Type.Object({ userId: Type.String(), privateChatId: Type.String() })),
    username: Type.String({ maxLength: 30 })
  },
  { $id: 'User', additionalProperties: false }
);
export type User = Static<typeof userSchema>
export const userValidator = getValidator(userSchema, dataValidator);
export const userResolver = resolve<User, HookContext>({

});

export const userExternalResolver = resolve<User, HookContext>({
  // The password should never be visible externally
  password: async () => undefined
});

// Schema for creating new users
export const userDataSchema = Type.Pick(userSchema, ['email', 'password', 'passwordConfirm', 'username'], {
  $id: 'UserData',
  additionalProperties: false
});

export type UserData = Static<typeof userDataSchema>
export const userDataValidator = getValidator(userDataSchema, dataValidator);
export const userDataResolver = resolve<User, HookContext>({
  password: passwordHash({ strategy: 'local' }),
  passwordConfirm: async () => undefined,
  email: async (value, user, context) => {
    const checkEmail = await context.app.service('usersService').find({ query: { email: value } });
    if (checkEmail.data.length > 0) {
      throw new BadRequest('This email is already in use. Just sign in.');
    }
    return value;
  },
  authorizedChannels: async () => {
    return [];
  },
  role: async () => 'user',
  privateChats: async () => {
    return [];
  }
});

// Schema for updating existing users
export const userPatchSchema = Type.Partial(userSchema, {
  $id: 'UserPatch'
});
export type UserPatch = Static<typeof userPatchSchema>
export const userPatchValidator = getValidator(userPatchSchema, dataValidator);
export const userPatchResolver = resolve<User, HookContext>({
  password: passwordHash({ strategy: 'local' }),

  passwordConfirm: async () => undefined,

  channelPassword: async () => undefined

});

// Schema for allowed query properties
export const userQueryProperties = Type.Pick(userSchema, ['_id', 'email']);
export const userQuerySchema = Type.Intersect(
  [
    querySyntax(userQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
);
export type UserQuery = Static<typeof userQuerySchema>
export const userQueryValidator = getValidator(userQuerySchema, queryValidator);
export const userQueryResolver = resolve<UserQuery, HookContext>({
  // If there is a user (e.g. with authentication), they are only allowed to see their own data
  _id: async (value, user, context) => {
    if (context.params.user) {
      return context.params.user._id;
    }

    return value;
  }
});
