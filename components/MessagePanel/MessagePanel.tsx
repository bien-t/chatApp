import GenericInput from '@/components/GenericInput/GenericInput';
import GenericButton from '@/components/GenericButton/GenericButton';
import { IoMdSend } from 'react-icons/io';
import { MessageWrapper, StyledMessagePanel } from './MessagePanel.styles';
import type { KeyboardEvent } from 'react';
import { useFormInput } from '@/utils/useFormInput';
import { client } from '@/utils/client';

const MessagePanel = ({ privateChatId }:{ privateChatId?:string}) => {
  const message = useFormInput();

  const sendMessage = async () => {
    await client.service('messagesService').create({ text: message.value, privateChatId: privateChatId }).catch((error)=>console.log(error.data.channelId));
    message.setValue('');
  };

  const pressedKey = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && Boolean(message.value)) {
      sendMessage();
    }
  };

  return (
    <StyledMessagePanel>
      <MessageWrapper>
        <GenericInput id={message.inputId} name='message input' type='text' value={message.value} $styleSize='large' onChange={message.changeValue} onKeyDown={pressedKey}
        placeholder="Enter your message..." />
        <GenericButton type="submit" onClick={sendMessage} aria-label='Send message' title="Send" disabled={!message.value} >
          <IoMdSend />
        </GenericButton>
      </MessageWrapper>
    </StyledMessagePanel>
  );
};

export default MessagePanel;
