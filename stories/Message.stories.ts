import type { Meta, StoryObj } from '@storybook/react';
import GenericMessage from '@/components/GenericMessage/GenericMessage';

const meta: Meta<typeof GenericMessage> = {
  title: 'Components/Message',
  component: GenericMessage,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['error', 'success'],
      control: { type: 'select' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof GenericMessage>;

export const Default: Story = {
  args: {
    text: 'Default'
  }
};

export const ErrorMessage: Story = {
  name: 'Error',
  args: {
    text: 'Error',
    type: 'error'
  }
};

export const Success: Story = {
  args: {
    text: 'Success',
    type: 'success'
  }
};
