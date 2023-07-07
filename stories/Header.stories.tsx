import type { Meta, StoryObj } from '@storybook/react';
import Header from '../components/Header/Header';
import { userAtom } from '@/components/Layout';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
  decorators: [(Story) => {
    const [, setUser] = useAtom(userAtom);
    useEffect(() => {
      setUser({
        email: 'Test', role: 'user', _id: 'string', avatarUrl: '', authorizedChannels: []
      });
    }, [setUser]);

    return (
      <Story />
    );
  }]
};

export const LoggedOut: Story = {
  decorators: [(Story) => {
    const [, setUser] = useAtom(userAtom);
    useEffect(() => {
      setUser(null);
    }, [setUser]);

    return (
      <Story />
    );
  }]
};
