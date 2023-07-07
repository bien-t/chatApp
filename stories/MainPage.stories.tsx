import type { Meta, StoryObj } from '@storybook/react';

import Home from './MainPage';
import Header from '@/components/Header/Header';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { channelAtom } from '@/components/ChannelsPanel/SingleChannel';
import { userAtom } from '@/components/Layout';

const meta: Meta<typeof Home> = {
  title: 'Pages/MainPage',
  component: Home,
  decorators: [(Story) => {
    return (
      <div id="__next">
        <Header />
        <Story />
      </div>
    );
  }],
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Default: Story = {
  decorators: [(Story) => {
    const [, setActive] = useAtom(channelAtom);
    const [, setUser] = useAtom(userAtom);

    useEffect(() => {
      setActive('3');
      setUser({
        email: 'Test', role: 'user', _id: 'string', avatarUrl: '', authorizedChannels: []
      });
    }, [setActive, setUser]);

    return (
      <Story />
    );
  }]
};

export const Admin: Story = {
  decorators: [(Story) => {
    const [, setActive] = useAtom(channelAtom);
    const [, setUser] = useAtom(userAtom);

    useEffect(() => {
      setActive('3');
      setUser({
        email: 'Test', role: 'admin', _id: 'string', avatarUrl: '', authorizedChannels: []
      });
    }, [setActive, setUser]);

    return (
      <Story />
    );
  }]
};
