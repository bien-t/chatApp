import MessagePanel from '../MessagePanel/MessagePanel';
import { IoCloseSharp } from 'react-icons/io5';
import { memo, useRef, useState } from 'react';
import { ChatWrapper, Header, StyledPrivateChat } from './PrivateChat.styles';
import PrivateChatMessages from './PrivateChatMessages';
import type { DragEvent } from 'react';
import type { PrivateChatProps } from '@/types/types';

const PrivateChat = ({ closeChat, username, privateChatId }: PrivateChatProps) => {
  const randomPosition = {
    positionTop: Math.random() * (window.innerHeight - 410),
    positionLeft: Math.random() * (window.innerWidth - 500 < 0 ? window.innerWidth - 280 : window.innerWidth - 500)
  };
  const [position, setPosition] = useState({ top: randomPosition.positionTop, left: randomPosition.positionLeft });
  const [startPosition, setStartPosition] = useState<{ x: number, y: number }>();
  const chatRef = useRef<null | HTMLDivElement>(null);
  const onDragEnd = (event: DragEvent) => {
    const offset = {
      x: (event.target as HTMLElement).parentElement!.offsetLeft,
      y: (event.target as HTMLElement).parentElement!.offsetTop,
      parentWidth: (event.target as HTMLElement).parentElement!.offsetWidth
    };
    setPosition(() => {
      let newX;
      let newY;
      if (event.clientX > startPosition!.x) {
        newX = offset.x + (event.clientX - startPosition!.x);
        newX = newX + offset.parentWidth > window.innerWidth
          ? window.innerWidth - offset.parentWidth : newX;
      } else {
        newX = offset.x - (startPosition!.x - event.clientX);
        newX = newX < 0 ? 0 : newX;
      }

      if (event.clientY > startPosition!.y) {
        newY = offset.y + (event.clientY - startPosition!.y);
      } else {
        newY = offset.y - (startPosition!.y - event.clientY);
        newY = newY < 0 ? 0 : newY;
      }

      return { top: newY, left: newX };
    });
  };
  const onDragStart = (event: DragEvent) => {
    setStartPosition({ x: event.clientX, y: event.clientY });
  };
  const setActiveChat = () => {
    const firstClass = chatRef.current ? chatRef.current.classList[0] : '';
    const secondClass = chatRef.current ? chatRef.current.classList[1] : '';

    const allChats = document.getElementsByClassName(firstClass);
    [...allChats].forEach(element => {
      // eslint-disable-next-line no-param-reassign
      (element as HTMLDivElement).style.zIndex = '9998';
    });
    const clickedChat = document.getElementsByClassName(secondClass);
    (clickedChat[0] as HTMLDivElement).style.zIndex = '9999';
  };

  return (
    <StyledPrivateChat position={position} ref={chatRef}
      onClick={setActiveChat}
    >
      <Header draggable onDragStart={onDragStart} onDragEnd={onDragEnd} >
        <span>{username}</span><IoCloseSharp onClick={() => closeChat(false)} />
      </Header>
      <ChatWrapper>
        <PrivateChatMessages messageFontSize="1.2" privateChatId={privateChatId} />
      </ChatWrapper>
      <MessagePanel privateChatId={privateChatId} />
    </StyledPrivateChat>
  );
};

const Memo = memo(PrivateChat);
export default Memo;
