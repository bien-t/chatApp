// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema';
import { Type, getValidator, querySyntax } from '@feathersjs/typebox';
import type { Static } from '@feathersjs/typebox';

import type { HookContext } from '../../declarations';
import { dataValidator, queryValidator } from '../../validators';
const bcryptjs = require('bcryptjs');

// Main data model schema
export const channelSchema = Type.Object(
  {
    _id: Type.String({ objectid: true }),
    name: Type.String(),
    password: (Type.String()),
    protected: Type.Optional(Type.Boolean())
  },
  { $id: 'Channel', additionalProperties: false }
);
export type Channel = Static<typeof channelSchema>
export const channelValidator = getValidator(channelSchema, dataValidator);
export const channelResolver = resolve<Channel, HookContext>({});

export const channelExternalResolver = resolve<Channel, HookContext>({
  password: async () => undefined
});

// Schema for creating new entries
export const channelDataSchema = Type.Pick(channelSchema, ['name', 'password'], {
  $id: 'ChannelData'
});
export type ChannelData = Static<typeof channelDataSchema>
export const channelDataValidator = getValidator(channelDataSchema, dataValidator);
export const channelDataResolver = resolve<Channel, HookContext>({
  password: async (value, user, context) => {
    if (context.data.password) {
      return bcryptjs.hash(context.data.password, 10);
    }
    return '';
  },
  protected: async (_value, _user, context) => {
    if (context.data.password) {
      return true;
    }
    return false;
  }
});

// Schema for updating existing entries
export const channelPatchSchema = Type.Partial(channelSchema, {
  $id: 'ChannelPatch'
});
export type ChannelPatch = Static<typeof channelPatchSchema>
export const channelPatchValidator = getValidator(channelPatchSchema, dataValidator);
export const channelPatchResolver = resolve<Channel, HookContext>({
  password: async (value, user, context) => {
    if (context.data.name) {
      return undefined;
    }
    if (context.data.password) {
      return bcryptjs.hash(context.data.password, 10);
    }
    return '';
  },
  protected: async (_value, _user, context) => {
    if (context.data.name) {
      return undefined;
    }
    if (context.data.password) {
      return true;
    }
    return false;
  }
});

// Schema for allowed query properties
export const channelQueryProperties = Type.Pick(channelSchema, ['_id', 'name']);
export const channelQuerySchema = Type.Intersect(
  [
    querySyntax(channelQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
);
export type ChannelQuery = Static<typeof channelQuerySchema>
export const channelQueryValidator = getValidator(channelQuerySchema, queryValidator);
export const channelQueryResolver = resolve<ChannelQuery, HookContext>({});
