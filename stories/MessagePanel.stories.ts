import type { Meta, StoryObj } from '@storybook/react';
import MessagePanel from '@/components/MessagePanel/MessagePanel';

const meta: Meta<typeof MessagePanel> = {
  title: 'Components/MessagePanel',
  component: MessagePanel,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof MessagePanel>;

export const Default: Story = {

};
