import Header from './Header/Header';
import { useAtom, atom } from 'jotai';
import { useEffect } from 'react';
import { client } from '@/utils/client';
import type { PropsWithChildren } from 'react';
import type { User } from '@/types/types';

export const userAtom = atom<User | null>(null);

const Layout = ({ children }: PropsWithChildren) => {
  const [, setUser] = useAtom(userAtom);

  useEffect(() => {
    client.on('login', ({ user }: { user: User }) => {
      setUser(user);
    });
    client.on('logout', () => setUser(null));
    const reAuthenticate = async () => {
      try {
        await client.reAuthenticate();
      } catch (error) {
        setUser(null);
      }
    };
    reAuthenticate();
  }, [setUser]);

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
