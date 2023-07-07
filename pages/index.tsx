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
            <ChannelsPanel />
            <PublicChat messageFontSize={'1.5'} />
            <MessagePanel />
            <UsersPanel />
          </StyledMain>
        </>
      }
    </>
  );
}
