// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema';
import { Type, getValidator, querySyntax } from '@feathersjs/typebox';
import { dataValidator, queryValidator } from '../../validators';
import { BadRequest } from '@feathersjs/errors';
import type { HookContext } from '../../declarations';
import type { Static } from '@feathersjs/typebox';

// Main data model schema
export const messageSchema = Type.Object(
  {
    _id: Type.String({ objectid: true }),
    text: Type.String(),
    createdAt: Type.Number(),
    userId: Type.String(),
    channelId: Type.String(),
    username: Type.String(),
    privateChatId: Type.Optional(Type.String()),
    avatarUrl: Type.String()
  },
  { $id: 'Message', additionalProperties: false }
);
export type Message = Static<typeof messageSchema>
export const messageValidator = getValidator(messageSchema, dataValidator);
export const messageResolver = resolve<Message, HookContext>({
  username: virtual(async (message, context) => {
    // Associate the user that sent the message
    return (await context.app.service('usersService').get(message.userId)).username;
  }),
  avatarUrl: virtual(async (message, context) => {
    return (await context.app.service('usersService').get(message.userId)).avatarUrl;
  })

});

export const messageExternalResolver = resolve<Message, HookContext>({});

// Schema for creating new entries
export const messageDataSchema = Type.Pick(messageSchema, ['text', 'privateChatId'], {
  $id: 'MessageData'
});
export type MessageData = Static<typeof messageDataSchema>
export const messageDataValidator = getValidator(messageDataSchema, dataValidator);
export const messageDataResolver = resolve<Message, HookContext>({
  userId: async (_value, _message, context) => {
    // Associate the record with the id of the authenticated user
    return context.params.user._id;
  },
  createdAt: async () => {
    return Date.now();
  },
  channelId: async (value, message, context)=>{
    if (context.data.privateChatId) {
      return undefined;
    }
    if (!context.params.user.activeChannel) {
      throw new BadRequest('You have to join the channel first');
    }
    return context.params.user.activeChannel;
  }

});

// Schema for updating existing entries
export const messagePatchSchema = Type.Partial(messageSchema, {
  $id: 'MessagePatch'
});
export type MessagePatch = Static<typeof messagePatchSchema>
export const messagePatchValidator = getValidator(messagePatchSchema, dataValidator);
export const messagePatchResolver = resolve<Message, HookContext>({});

// Schema for allowed query properties
export const messageQueryProperties = Type.Pick(messageSchema, ['_id', 'text', 'createdAt', 'userId', 'channelId', 'privateChatId']);
export const messageQuerySchema = Type.Intersect(
  [
    querySyntax(messageQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
);
export type MessageQuery = Static<typeof messageQuerySchema>
export const messageQueryValidator = getValidator(messageQuerySchema, queryValidator);
export const messageQueryResolver = resolve<MessageQuery, HookContext>({});
