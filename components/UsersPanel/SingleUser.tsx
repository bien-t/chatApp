/* eslint-disable @next/next/no-img-element */
import { useAtom } from 'jotai';
import { userAtom } from '../Layout';
import type { SingleUserProps } from '@/types/types';
import { IconsWrapper, StyledLi } from './UsersPanel.styles';
import { RiMessage2Fill } from 'react-icons/ri';
import { FaBan } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import PrivateChat from '../PrivateChat/PrivateChat';
import { createPortal } from 'react-dom';
import { client } from '@/utils/client';
import type { Message } from '@/utils/client';

const SingleUser = ({ singleUser, index }: { singleUser: SingleUserProps, index: number }) => {
  const [user] = useAtom(userAtom);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showChat, setShowChat] = useState(false);
  const [privateChatId, setPrivateChatId] = useState('');
  const [newMessage, setNewMessage] = useState(false);

  const clicked = async () => {
    const chatId = await client.service('privateChatsService').joinChat({ userId: singleUser._id });
    if (chatId.chatId) {
      setPrivateChatId(chatId.chatId);
    }
    setShowChat(true);
    setNewMessage(false);
  };
  useEffect(() => {
    const updateMessages = (message: Message) => {
      if (singleUser._id === message.userId && showChat === false) {
        setNewMessage(true);
      }
    };
    client.service('messagesService').on('privateMessage', updateMessages);

    return () => {
      client.service('messagesService').removeListener('privateMessage', updateMessages);
    };
  }, [showChat, singleUser._id]);

  const kickUser = async () => {
    await client.service('usersService').kickUser({ userId: singleUser._id });
  };
  return (
    <StyledLi index={activeIndex}>
      {singleUser.avatarUrl
        ? <img src={singleUser.avatarUrl} alt='Avatar' width='20px' height='20px' />
        : <img src="" style={{ background: 'gray' }} alt='' width='20px' height='20px' />
      }
      <span>{singleUser.username}</span>

      <IconsWrapper onMouseEnter={() => setActiveIndex(index + 1)}
        onMouseLeave={() => setActiveIndex(0)}>
        {user?._id !== singleUser._id
          && <RiMessage2Fill title='Private chat' aria-label='Start private chat' onClick={clicked} color={newMessage === true ? '#fb7185' : ''} />
        }
        {user?.role === 'admin'
          && <>
            <FaBan title='Kick' aria-label='Kick out the user' onClick={kickUser} />

          </>

        }
      </IconsWrapper>
      {showChat
        && createPortal(
          <PrivateChat
            closeChat={setShowChat}
            username={singleUser.username}
            privateChatId={privateChatId}
          />,
          document.body
        )}
    </StyledLi>
  );
};

export default SingleUser;
