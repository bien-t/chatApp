import { userAtom } from '@/components/Layout';
import UsersPanel from '@/components/UsersPanel/UsersPanel';
import { StyledMain } from '@/styles/index.styles';
import type { Meta, StoryObj } from '@storybook/react';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

const meta: Meta<typeof UsersPanel> = {
  title: 'Components/UsersPanel',
  component: UsersPanel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [(Story) => {
    return (
      <div id="__next">
        <StyledMain>
          <Story />
        </StyledMain>
      </div>
    );
  }]
};
const usersDefault = [{
  _id: '1', username: 'User 1', avatarUrl: '', authorizedChannels: []
}, {
  _id: '2', username: 'User 2', avatarUrl: '', authorizedChannels: []
}, {
  _id: '3', username: 'Another user', avatarUrl: '', authorizedChannels: []
}, {
  _id: '4', username: 'One more', avatarUrl: '', authorizedChannels: []
}];
const userListOverflow = [{
  _id: '1', username: 'User 1', avatarUrl: '', authorizedChannels: []
}, {
  _id: '2', username: 'User 2', avatarUrl: '', authorizedChannels: []
}, {
  _id: '3', username: 'Another user', avatarUrl: '', authorizedChannels: []
}, {
  _id: '4', username: 'One more', avatarUrl: '', authorizedChannels: []
}, {
  _id: '1', username: 'User 1', avatarUrl: '', authorizedChannels: []
}, {
  _id: '2', username: 'User 2', avatarUrl: '', authorizedChannels: []
}, {
  _id: '3', username: 'Another user', avatarUrl: '', authorizedChannels: []
}, {
  _id: '4', username: 'One more', avatarUrl: '', authorizedChannels: []
}, {
  _id: '1', username: 'User 1', avatarUrl: '', authorizedChannels: []
}, {
  _id: '2', username: 'User 2', avatarUrl: '', authorizedChannels: []
}, {
  _id: '3', username: 'Another user', avatarUrl: '', authorizedChannels: []
}, {
  _id: '4', username: 'One more', avatarUrl: '', authorizedChannels: []
}, {
  _id: '1', username: 'User 1', avatarUrl: '', authorizedChannels: []
}, {
  _id: '2', username: 'User 2', avatarUrl: '', authorizedChannels: []
}, {
  _id: '3', username: 'Another user', avatarUrl: '', authorizedChannels: []
}, {
  _id: '4', username: 'One more', avatarUrl: '', authorizedChannels: []
}, {
  _id: '1', username: 'User 1', avatarUrl: '', authorizedChannels: []
}, {
  _id: '2', username: 'User 2', avatarUrl: '', authorizedChannels: []
}, {
  _id: '3', username: 'Another user', avatarUrl: '', authorizedChannels: []
}, {
  _id: '4', username: 'One more', avatarUrl: '', authorizedChannels: []
}, {
  _id: '1', username: 'User 1', avatarUrl: '', authorizedChannels: []
}, {
  _id: '2', username: 'User 2', avatarUrl: '', authorizedChannels: []
}, {
  _id: '3', username: 'Another user', avatarUrl: '', authorizedChannels: []
}, {
  _id: '4', username: 'One more', avatarUrl: '', authorizedChannels: []
}, {
  _id: '1', username: 'User 1', avatarUrl: '', authorizedChannels: []
}, {
  _id: '2', username: 'User 2', avatarUrl: '', authorizedChannels: []
}, {
  _id: '3', username: 'Another user', avatarUrl: '', authorizedChannels: []
}, {
  _id: '4', username: 'One more', avatarUrl: '', authorizedChannels: []
}];

export default meta;
type Story = StoryObj<typeof UsersPanel>;

export const Default: Story = {
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
  }],
  args: {
    userList: usersDefault
  }
};

export const OverflowX: Story = {
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
  }],
  args: {
    userList: [{
      _id: '5', username: 'Channellooooooooooooooooooooooooooooooooooooooooooooooooooooooong 1', avatarUrl: ''
    }]
  }
};
export const OverflowY: Story = {
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
  }],
  args: {
    userList: userListOverflow
  }
};

export const AdminOptions: Story = {
  decorators: [(Story) => {
    const [, setUser] = useAtom(userAtom);
    useEffect(() => {
      setUser({
        email: 'Test', role: 'admin', _id: 'string', avatarUrl: '', authorizedChannels: []
      });
    }, [setUser]);

    return (
      <Story />
    );
  }],
  args: {
    userList: usersDefault
  }
};
