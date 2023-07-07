import { useEffect, useRef, useState } from 'react';
import { MessagesWrapper, SingleMessage, StyledUserChat } from '../PublicChat/PublicChat.styles';
import { client } from '@/utils/client';
import { formatDate } from '@/utils/formatDate';
import type { PrivateMessages } from '@/types/types';
import type { Message } from '@/utils/client';

const PrivateChatMessages = ({ messageFontSize, privateChatId }:PrivateMessages) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesRef = useRef(null);

  useEffect(()=>{
    const updateMessages = (message:Message)=>{
      if (privateChatId === message.privateChatId) {
        setMessages([...messages, message]);
      }
      if (messagesRef.current) {
        (messagesRef.current as HTMLDivElement).scrollIntoView({ block: 'end', behavior: 'smooth' });
      }
    };
    const getMessages = (prevMessages:Message[])=>{
      if (privateChatId === prevMessages[0]?.privateChatId) {
        setMessages(prevMessages);
      }
    };
    client.service('messagesService').on('privateMessage', updateMessages);
    client.service('privateChatsService').on('sendMessages', getMessages);

    return () => {
      client.service('messagesService').removeListener('privateMessage', updateMessages);
      client.service('privateChatsService').removeListener('sendMessages', getMessages);
    };
  }, [messages, privateChatId]);
  return (
    <StyledUserChat $messageFontSize={messageFontSize}>
      <MessagesWrapper ref={messagesRef}>
        {messages.map((message) => {
          return <SingleMessage key={message._id}>
            <span >{message.username}</span>
            <span >{message.text}</span>
            <span>{formatDate(message.createdAt)}</span>
          </SingleMessage>;
        })}
      </MessagesWrapper>
    </StyledUserChat>
  );
};

export default PrivateChatMessages;
