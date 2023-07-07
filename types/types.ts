/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }] */

import type {
  ButtonHTMLAttributes, InputHTMLAttributes, PropsWithChildren
} from 'react';
import type { Channel } from '@/utils/client';

export type User = {
    _id: string
    email: string
    role: 'user' | 'admin'
    authorizedChannels:string[]
    avatarUrl: string
};

// GenericButton
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren { }

// GenericInput
export interface StyledInputProps {
    $styleSize?: 'small' | 'medium' | 'large';
}
export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, StyledInputProps { }

// GenericMessage
export interface StyledMessageProps {
    type: 'error' | 'success'

}

export interface MessageProps extends StyledMessageProps {
    text: string
}

// AddChannel

export interface AddChannelProps {
    closeAddChannel: () => void
}

// ChannelsPanel

export interface ChannelProps {
    channel: Channel
}

// EditChannel

export interface EditChannelProps {
    closeEditOptions: (_value: boolean) => void
    channelId: string
    channelName: string
}

// PrivateChat
export interface PrivateChatData {
    username: string
}
export interface PrivateChatProps extends PrivateChatData {
    closeChat: (_check: boolean) => void
    privateChatId: string
}

export interface PrivateMessages {
    messageFontSize: string,
    privateChatId: string
}

// SignPanel
export interface SignPanelProps {
    signType: 'signin' | 'signup',
    panelTitle: string
}

// PublicChat
export interface Messages {
    messageFontSize: string
}
export type Message = {
    name:string
    text:string
}

// UsersPanel
export interface SingleUserProps {
    _id: string
    username: string
    avatarUrl: string
}
export interface UsersData {
    activeChannel: string,
    users:SingleUserProps[]
}
