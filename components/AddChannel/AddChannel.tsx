import { IoCloseSharp } from 'react-icons/io5';
import GenericButton from '../GenericButton/GenericButton';
import GenericInput from '../GenericInput/GenericInput';
import { Header, RowWrapper, StyledAddChannel } from './AddChannel.styles';
import type { AddChannelProps } from '@/types/types';
import { client } from '@/utils/client';
import { useFormInput } from '@/utils/useFormInput';

const AddChannel = ({ closeAddChannel }: AddChannelProps) => {
  const password = useFormInput();
  const channelName = useFormInput();

  const addChannel = async () => {
    await client.service('channelsService').create({ name: channelName.value, password: password.value });
  };
  return (
    <StyledAddChannel>
      <Header>
        <h2>Add channel</h2>
        <IoCloseSharp onClick={closeAddChannel} title='Close' aria-label='Close modal' />
      </Header>
      <RowWrapper>
        <label htmlFor={channelName.inputId}>Channel name:</label>
        <GenericInput type="text" id={channelName.inputId} name="channel name" value={channelName.value}
          placeholder="Channel name" onChange={channelName.changeValue} />
      </RowWrapper>
      <RowWrapper>
        <label htmlFor={password.inputId}>Channel password:</label>
        <span>Leave the field empty if the channel is public.</span>
        <GenericInput type="password" id={password.inputId} name="password" value={password.value}
          placeholder="Password" onChange={password.changeValue} />
      </RowWrapper>
      <GenericButton type="submit" onClick={addChannel}>Add</GenericButton>
    </StyledAddChannel>
  );
};

export default AddChannel;
