/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import { MessagesWrapper, SingleMessage, StyledUserChat } from './PublicChat.styles';
import { client } from '@/utils/client';
import { formatDate } from '@/utils/formatDate';
import type { Messages } from '@/types/types';
import type { Message } from '@/utils/client';

const PublicChat = ({ messageFontSize }: Messages) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesRef = useRef(null);
  useEffect(() => {
    const updateMessages = (message: Message) => {
      setMessages([...messages, message]);
      if (messagesRef.current) {
        (messagesRef.current as HTMLDivElement).scrollIntoView({ block: 'end', behavior: 'smooth' });
      }
    };

    const getMessages = (prevMessages: Message[]) => {
      setMessages(prevMessages);
    };
    const clearMessages = () => {
      setMessages([]);
    };
    client.service('messagesService').on('publicMessage', updateMessages);
    client.service('channelsService').on('joined', getMessages);
    client.service('usersService').on('kicked', clearMessages);

    return () => {
      client.service('messagesService').removeListener('publicMessage', updateMessages);
      client.service('channelsService').removeListener('joined', getMessages);
      client.service('usersService').removeListener('kicked', clearMessages);
    };
  }, [messages]);
  return (
    <StyledUserChat $messageFontSize={messageFontSize}>
      <MessagesWrapper ref={messagesRef}>
        {messages.map((message) => {
          return <SingleMessage key={message._id}>
            {message.avatarUrl
              ? <img src={message.avatarUrl} alt='Avatar' width='25px' height='25px' />
              : <img src="" style={{ background: 'gray' }} alt='' width='25px' height='25px' />
            }
            <span >{message.username}</span>
            <span >{message.text}</span>
            <span>{formatDate(message.createdAt)}</span>
          </SingleMessage>;
        })}
      </MessagesWrapper>

    </StyledUserChat>
  );
};

export default PublicChat;
