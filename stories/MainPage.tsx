import Head from 'next/head';

import React, { useEffect } from 'react';
import PublicChat from '@/components/PublicChat/PublicChat';
import UsersPanel from '@/components/UsersPanel/UsersPanel';
import MessagePanel from '@/components/MessagePanel/MessagePanel';
import ChannelsPanel from '@/components/ChannelsPanel/ChannelsPanel';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { userAtom } from '@/components/Layout';
import { StyledMain } from '@/styles/index.styles';

const channelListProtected = [{
  _id: '1', name: 'Channel 1', protected: false, password: ''
}, {
  _id: '2', name: 'Channel 2', protected: true, password: ''
}, {
  _id: '3', name: 'Another channel', protected: false, password: ''
}, {
  _id: '4', name: 'One more', protected: true, password: ''
}];
const usersDefault = [{
  _id: '1', username: 'User 1', imageUrl: '', email: '', avatarUrl: '', authorizedChannels: []
}, {
  _id: '2', username: 'User 2', imageUrl: '', email: '', avatarUrl: '', authorizedChannels: []
}, {
  _id: '3', username: 'Another user', imageUrl: '', email: '', avatarUrl: '', authorizedChannels: []
}, {
  _id: '4', username: 'One more', imageUrl: '', email: '', avatarUrl: '', authorizedChannels: []
}];
export default function Home() {
  const [user] = useAtom(userAtom);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push('/signin');
    }
  }, [router, user]);
  return (
    <>
      {user
        && <>
          <Head>
            <title>Chat App</title>
            <meta name="description" content="Chat application" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <StyledMain>
            <ChannelsPanel channelList={channelListProtected} />
            <PublicChat messageFontSize={'1.5'} />
            <MessagePanel />
            <UsersPanel userList={usersDefault} />
          </StyledMain>
        </>
      }
    </>
  );
}
