import GenericButton from '@/components/GenericButton/GenericButton';
import {
  useEffect
} from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '@/components/Layout';
import { useRouter } from 'next/router';
import { StyledProfile } from '@/styles/profile.styles';
import EmailForm from '@/components/Profile/EmailForm';
import PasswordForm from '@/components/Profile/PasswordForm';
import {
  Panel, TabList, TabPanels, Tabs
} from '@/components/Profile/Tabs';
import UsernameForm from '@/components/Profile/UsernameForm';
import { client } from '@/utils/client';
import AvatarForm from '@/components/Profile/AvatarForm';
import { channelAtom } from '@/components/ChannelsPanel/SingleChannel';

const Profile = () => {
  const [user] = useAtom(userAtom);
  const router = useRouter();
  const [, setActive] = useAtom(channelAtom);

  useEffect(() => {
    if (!user) {
      router.push('/signin');
    }
    if (user) {
      client.service('usersService').channel({ activeChannel: '' });
      setActive('');
    }
  }, [router, setActive, user]);
  return (
    <>
      {user
        && <>
          <StyledProfile>
            <h2>Change your data</h2>
            <Tabs>
              <TabList>
                <GenericButton type="button">Email</GenericButton>
                <GenericButton type="button">Password</GenericButton>
                <GenericButton type="button">Username</GenericButton>
                <GenericButton type="button">Avatar</GenericButton>
              </TabList>
              <TabPanels>
                <Panel>
                  <EmailForm />
                </Panel>
                <Panel>
                  <PasswordForm />
                </Panel>
                <Panel>
                  <UsernameForm />
                </Panel>
                <Panel>
                  <AvatarForm />
                </Panel>
              </TabPanels>
            </Tabs>
          </StyledProfile>
        </>
      }
    </>
  );
};

export default Profile;
