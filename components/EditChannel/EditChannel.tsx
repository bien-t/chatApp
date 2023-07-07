import { useId } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import GenericButton from '../GenericButton/GenericButton';
import GenericInput from '../GenericInput/GenericInput';
import { Header, RowWrapper, StyledEditChannel } from './EditChannel.styles';
import type { EditChannelProps } from '@/types/types';
import { client } from '@/utils/client';
import { useFormInput } from '@/utils/useFormInput';

const EditChannel = ({ closeEditOptions, channelName, channelId }: EditChannelProps) => {
  const password = useFormInput();
  const name = useFormInput();
  const channelNameId = useId();
  const passwordId = useId();
  const sendNameChange = async ()=>{
    await client.service('channelsService').patch(channelId, { name: name.value });
    name.setValue('');
  };
  const sendPasswordChange = async ()=>{
    await client.service('channelsService').patch(channelId, { password: password.value });
    password.setValue('');
  };
  return (
    <StyledEditChannel>
        <Header>
            <h2>Edit channel - {channelName}</h2>
            <IoCloseSharp onClick={() => closeEditOptions(false)} title='Close' aria-label='Close modal' />
        </Header>
        <RowWrapper>
            <div>
                <label htmlFor={passwordId}>Set/Change password:</label>
                <GenericInput type="password" id={passwordId} name="password" value={password.value} placeholder="Password"
                onChange={password.changeValue} />
            </div>
            <GenericButton type="button" onClick={sendPasswordChange}>Submit</GenericButton>
        </RowWrapper>
        <RowWrapper>
            <div>
                <label htmlFor={channelNameId}>Change channel name:</label>
                <GenericInput type="text" id={channelNameId} name="channelName" value={name.value} placeholder="Channel name"
                onChange={name.changeValue} />
            </div>
            <GenericButton type="button" onClick={sendNameChange}>Submit</GenericButton>
        </RowWrapper>
    </StyledEditChannel>
  );
};

export default EditChannel;
