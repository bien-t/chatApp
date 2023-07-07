import type { Meta, StoryObj } from '@storybook/react';
import GenericInput from '@/components/GenericInput/GenericInput';

const meta: Meta<typeof GenericInput> = {
  title: 'Components/Input',
  component: GenericInput,
  tags: ['autodocs'],
  argTypes: {
    $styleSize: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    type: {
      options: ['text', 'email', 'password'],
      control: { type: 'select' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof GenericInput>;

export const Default: Story = {
  args: {
    value: 'Default'
  }
};

export const Large: Story = {
  args: {
    $styleSize: 'large',
    value: 'Some text'

  }
};

export const Small: Story = {
  args: {
    $styleSize: 'small',
    value: 'Some text'

  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Some text'
  }
};

export const InvalidEmail: Story = {
  args: {
    value: 'email.com',
    type: 'email'
  }
};

export const Placeholder: Story = {
  args: {
    placeholder: 'Placeholder text'
  }
};

export const Password: Story = {
  args: {
    placeholder: 'Password',
    type: 'password'
  }
};
