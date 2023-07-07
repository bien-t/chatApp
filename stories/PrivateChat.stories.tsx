import type { Meta, StoryObj } from '@storybook/react';
import PrivateChat from '@/components/PrivateChat/PrivateChat';
import { ChatWrapper, Header, StyledPrivateChat } from '@/components/PrivateChat/PrivateChat.styles';
import { formatDate } from '@/utils/formatDate';
import { IoCloseSharp } from 'react-icons/io5';
import { MessagesWrapper, SingleMessage, StyledUserChat } from '@/components/PublicChat/PublicChat.styles';
import MessagePanel from '@/components/MessagePanel/MessagePanel';

const meta: Meta<typeof PrivateChat> = {
  title: 'Components/PrivateChat',
  component: PrivateChat,
  tags: ['autodocs'],
  argTypes: {

  }
};
const messages = [{
  _id: '1',
  username: 'User1',
  text: 'Some random text',
  createdAt: new Date().valueOf()
},
{
  _id: '2',
  username: 'User2',
  text: 'Some random text',
  createdAt: new Date().valueOf()

},
{
  _id: '1',
  username: 'User1',
  text: 'Some random text',
  createdAt: new Date().valueOf()
},
{
  _id: '2',
  username: 'User2',
  text: 'Some random text',
  createdAt: new Date().valueOf()

}];
export default meta;
type Story = StoryObj<typeof PrivateChat>;

export const Default: Story = {
  name: 'Default - moveable',
  args: {
    closeChat: ()=>''
  }
};

export const WithData: Story = {
  name: 'With data - static',
  render: ()=>{
    return (
        <StyledPrivateChat position={{ top: 0, left: 0 }} onClick={()=>''}>
        <Header>
            <span>{'Username'}</span><IoCloseSharp />
        </Header>
        <ChatWrapper>
            <StyledUserChat $messageFontSize={'1.2'}>
            <MessagesWrapper>
                {messages.map((message) => {
                  return <SingleMessage key={message._id}>
                    <span >{message.username}</span>
                    <span >{message.text}</span>
                    <span>{formatDate(message.createdAt)}</span>
                </SingleMessage>;
                })}
            </MessagesWrapper>
            </StyledUserChat>
        </ChatWrapper>
        <MessagePanel privateChatId={'123'} />
        </StyledPrivateChat>
    );
  }
};
