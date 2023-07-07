import type { Meta, StoryObj } from '@storybook/react';
import PublicChat from '@/components/PublicChat/PublicChat';
import { MessagesWrapper, SingleMessage, StyledUserChat } from '@/components/PublicChat/PublicChat.styles';
import { formatDate } from '@/utils/formatDate';

const meta: Meta<typeof PublicChat> = {
  title: 'Components/PublicChat',
  component: PublicChat,
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
  _id: '3',
  username: 'User3',
  text: 'Some random text',
  createdAt: new Date().valueOf()

},
{
  _id: '4',
  username: 'User4',
  text: 'Some random text',
  createdAt: new Date().valueOf()

}];
export default meta;
type Story = StoryObj<typeof PublicChat>;

export const Default: Story = {
  args: {
    messageFontSize: '1.5'
  },
  render: ({ ...args })=>{
    return (

        <StyledUserChat $messageFontSize={args.messageFontSize}>
        <MessagesWrapper>
        {messages.map((message) => {
          return <SingleMessage key={message._id}>
            <img style={{ backgroundColor: 'gray' }} width='25px' height='25px' />
            <span >{message.username}</span>
            <span >{message.text}</span>
            <span>{formatDate(message.createdAt)}</span>
            </SingleMessage>;
        })}
        </MessagesWrapper>

        </StyledUserChat>
    );
  }
};
