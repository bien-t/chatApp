import { atom, useAtom } from 'jotai';
import { userAtom } from '../Layout';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { ChannelProps } from '@/types/types';
import { MdEdit } from 'react-icons/md';
import EditChannel from '../EditChannel/EditChannel';
import { PasswordWrapper, StyledLi } from './ChannelsPanel.styles';
import { client } from '@/utils/client';
import GenericInput from '../GenericInput/GenericInput';
import GenericButton from '../GenericButton/GenericButton';
import { useFormInput } from '@/utils/useFormInput';
import { IoMdSend } from 'react-icons/io';

export const channelAtom = atom('');
const SingleChannel = ({ channel }: ChannelProps) => {
  const [user] = useAtom(userAtom);
  const [localAuthChannels, setLocalAuthChannels] = useState<string[]>([]);
  const [active, setActive] = useAtom(channelAtom);
  const [showEditChannel, setShowEditChannel] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const channelPassword = useFormInput();
  useEffect(()=>{
    if (user) {
      setLocalAuthChannels([...user.authorizedChannels]);
    }
    const updatedUser = (authChannels:string[])=>{
      setLocalAuthChannels(authChannels);
    };
    const kickedUserUpdate = (authChannels:string[])=>{
      updatedUser(authChannels);
      setActive('');
    };
    client.service('usersService').on('authChannelsUpdated', updatedUser);
    client.service('usersService').on('kicked', kickedUserUpdate);

    return () => {
      client.service('usersService').removeListener('authChannelsUpdated', updatedUser);
      client.service('usersService').removeListener('kicked', kickedUserUpdate);
    };
  }, [setActive, user]);
  const joinProtectedChannel = async () => {
    try {
      const patchReturn = await client.service('usersService').channel({ activeChannel: channel._id, channelPassword: channelPassword.value });
      if (patchReturn) {
        setActive(patchReturn.activeChannel);
      }
      setShowPassword(false);
    } catch (error: any) {
      console.log(error.message);
    }
    channelPassword.setValue('');
  };
  const joinChannel = async () => {
    if (channel.protected && !localAuthChannels.includes(channel._id)) {
      setShowPassword(!showPassword);
    } else {
      try {
        const patchReturn = await client.service('usersService').channel({ activeChannel: channel._id });
        if (patchReturn) {
          setActive(patchReturn.activeChannel);
        }
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };

  return (
    <StyledLi className={`${active === channel._id ? 'active' : ''} ${channel.protected && active !== channel._id ? 'protected' : ''}`} >
      {(user && user.role === 'admin')
        && <MdEdit title='Edit channel' aria-label='Edit channel' onClick={() => setShowEditChannel(true)} />
      }
      <span onClick={joinChannel}>{channel.name}</span>
      {user?.role === 'admin' && showEditChannel
        && createPortal(<EditChannel channelName={channel.name} channelId={channel._id} closeEditOptions={setShowEditChannel} />, document.body)
      }
      {
        showPassword
        && <PasswordWrapper>
          <GenericInput onChange={channelPassword.changeValue} value={channelPassword.value} type='password' placeholder='Enter the channel password' />
          <GenericButton type="button" onClick={joinProtectedChannel} aria-label='Join the protected channel' title="Send">
            <IoMdSend />
          </GenericButton>
        </PasswordWrapper>
      }

    </StyledLi>
  );
};

export default SingleChannel;
