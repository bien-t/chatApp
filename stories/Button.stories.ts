import type { Meta, StoryObj } from '@storybook/react';
import GenericButton from '@/components/GenericButton/GenericButton';

const meta: Meta<typeof GenericButton> = {
  title: 'Components/Button',
  component: GenericButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['button', 'submit'],
      control: { type: 'select' }
    },
    children: {
      name: 'Button text'
    },
    disabled: {
      type: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof GenericButton>;

export const Default: Story = {
  args: {
    children: 'Button'
  }
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true
  }
};
