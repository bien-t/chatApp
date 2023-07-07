import GenericButton from '@/components/GenericButton/GenericButton';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMedia } from '@/utils/useMedia';
import { userAtom } from '@/components/Layout';
import { useAtom } from 'jotai';

import { client } from '@/utils/client';
import { StyledHeader, Wrapper } from './Header.styles';

const onLogout = async () => {
  await client.logout();
};

const Header = () => {
  const router = useRouter();
  const media = useMedia();
  const [user] = useAtom(userAtom);

  return (
    <StyledHeader>
      <h1><Link href={'/'} >Chat App</Link></h1>
      <Wrapper>
        {user ? (
          <>
            {!media
              && <span>
                Welcome, <b>{user.email}</b>!
              </span>
            }
            <Link href={'/profile'} aria-label='Navigate to profile page' ><CgProfile size={'3rem'} title="Profile" cursor={'pointer'} /></Link>
            <GenericButton onClick={onLogout} type='button'>Sign out</GenericButton>
          </>
        ) : (
          <>
            <GenericButton onClick={() => { router.push('/signup'); }} type='button'>Sign up</GenericButton>
            <GenericButton onClick={() => { router.push('/signin'); }} type='button'>Sign in</GenericButton>
          </>
        )}
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
