// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema';
import {
  Type, getValidator, querySyntax, ObjectIdSchema
} from '@feathersjs/typebox';
import type { Static } from '@feathersjs/typebox';

import type { HookContext } from '../../declarations';
import { dataValidator, queryValidator } from '../../validators';

// Main data model schema
export const privateChatSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    users: Type.Array(Type.String())
  },
  { $id: 'PrivateChat', additionalProperties: false }
);
export type PrivateChat = Static<typeof privateChatSchema>
export const privateChatValidator = getValidator(privateChatSchema, dataValidator);
export const privateChatResolver = resolve<PrivateChat, HookContext>({});

export const privateChatExternalResolver = resolve<PrivateChat, HookContext>({});

// Schema for creating new entries
export const privateChatDataSchema = Type.Pick(privateChatSchema, ['users'], {
  $id: 'PrivateChatData'
});
export type PrivateChatData = Static<typeof privateChatDataSchema>
export const privateChatDataValidator = getValidator(privateChatDataSchema, dataValidator);
export const privateChatDataResolver = resolve<PrivateChat, HookContext>({});

// Schema for updating existing entries
export const privateChatPatchSchema = Type.Partial(privateChatSchema, {
  $id: 'PrivateChatPatch'
});
export type PrivateChatPatch = Static<typeof privateChatPatchSchema>
export const privateChatPatchValidator = getValidator(privateChatPatchSchema, dataValidator);
export const privateChatPatchResolver = resolve<PrivateChat, HookContext>({});

// Schema for allowed query properties
export const privateChatQueryProperties = Type.Pick(privateChatSchema, ['_id']);
export const privateChatQuerySchema = Type.Intersect(
  [
    querySyntax(privateChatQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
);
export type PrivateChatQuery = Static<typeof privateChatQuerySchema>
export const privateChatQueryValidator = getValidator(privateChatQuerySchema, queryValidator);
export const privateChatQueryResolver = resolve<PrivateChatQuery, HookContext>({});
