import AddChannel from '@/components/AddChannel/AddChannel';
import ChannelsPanel from '@/components/ChannelsPanel/ChannelsPanel';
import { channelAtom } from '@/components/ChannelsPanel/SingleChannel';
import EditChannel from '@/components/EditChannel/EditChannel';
import { userAtom } from '@/components/Layout';
import { StyledMain } from '@/styles/index.styles';
import type { Meta, StoryObj } from '@storybook/react';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
const meta: Meta<typeof ChannelsPanel> = {
  title: 'Components/ChannelsPanel',
  component: ChannelsPanel,
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

const channelList = [{
  _id: '1', name: 'Channel 1', protected: false, password: ''
}, {
  _id: '2', name: 'Channel 2', protected: false, password: ''
}, {
  _id: '3', name: 'Another channel', protected: false, password: ''
}, {
  _id: '4', name: 'One more', protected: false, password: ''
}];
const channelListProtected = [{
  _id: '1', name: 'Channel 1', protected: false, password: ''
}, {
  _id: '2', name: 'Channel 2', protected: true, password: ''
}, {
  _id: '3', name: 'Another channel', protected: false, password: ''
}, {
  _id: '4', name: 'One more', protected: true, password: ''
}];

const channelListOverflow = [{
  _id: '1', name: 'Channel 1', protected: false, password: ''
}, {
  _id: '2', name: 'Channel 2', protected: true, password: ''
}, {
  _id: '3', name: 'Another channel', protected: false, password: ''
}, {
  _id: '4', name: 'One more', protected: true, password: ''
},
{
  _id: '5', name: 'Channel 1', protected: false, password: ''
}, {
  _id: '6', name: 'Channel 2', protected: true, password: ''
}, {
  _id: '7', name: 'Another channel', protected: false, password: ''
}, {
  _id: '8', name: 'One more', protected: true, password: ''
},
{
  _id: '9', name: 'Channel 1', protected: false, password: ''
}, {
  _id: '10', name: 'Channel 2', protected: true, password: ''
}, {
  _id: '11', name: 'Another channel', protected: false, password: ''
}, {
  _id: '12', name: 'One more', protected: true, password: ''
},
{
  _id: '13', name: 'Channel 1', protected: false, password: ''
}, {
  _id: '14', name: 'Channel 2', protected: true, password: ''
}, {
  _id: '15', name: 'Another channel', protected: false, password: ''
}, {
  _id: '16', name: 'One more', protected: true, password: ''
}, {
  _id: '17', name: 'Channel 1', protected: false, password: ''
}, {
  _id: '18', name: 'Channel 2', protected: true, password: ''
}, {
  _id: '19', name: 'Another channel', protected: false, password: ''
}, {
  _id: '20', name: 'One more', protected: true, password: ''
}, {
  _id: '13', name: 'Channel 1', protected: false, password: ''
}, {
  _id: '14', name: 'Channel 2', protected: true, password: ''
}, {
  _id: '15', name: 'Another channel', protected: false, password: ''
}, {
  _id: '16', name: 'One more', protected: true, password: ''
}, {
  _id: '17', name: 'Channel 1', protected: false, password: ''
}, {
  _id: '18', name: 'Channel 2', protected: true, password: ''
}, {
  _id: '19', name: 'Another channel', protected: false, password: ''
}, {
  _id: '20', name: 'One more', protected: true, password: ''
}, {
  _id: '19', name: 'Another channel', protected: false, password: ''
}, {
  _id: '1', name: 'Channel 1', protected: false, password: ''
}, {
  _id: '2', name: 'Channel 2', protected: true, password: ''
}, {
  _id: '3', name: 'Another channel', protected: false, password: ''
}, {
  _id: '4', name: 'One more', protected: true, password: ''
}, {
  _id: '5', name: 'Channel 1', protected: false, password: ''
}, {
  _id: '6', name: 'Channel 2', protected: true, password: ''
}, {
  _id: '7', name: 'Another channel', protected: false, password: ''
}, {
  _id: '8', name: 'One more', protected: true, password: ''
}, {
  _id: '9', name: 'Channel 1', protected: false, password: ''
}, {
  _id: '10', name: 'Channel 2', protected: true, password: ''
}, {
  _id: '11', name: 'Another channel', protected: false, password: ''
}, {
  _id: '12', name: 'One more', protected: true, password: ''
}, {
  _id: '13', name: 'Channel 1', protected: false, password: ''
}, {
  _id: '14', name: 'Channel 2', protected: true, password: ''
}, {
  _id: '15', name: 'Another channel', protected: false, password: ''
}, {
  _id: '16', name: 'One more', protected: true, password: ''
}, {
  _id: '17', name: 'Channel 1', protected: false, password: ''
}, {
  _id: '18', name: 'Channel 2', protected: true, password: ''
}, {
  _id: '19', name: 'Another channel', protected: false, password: ''
}, {
  _id: '20', name: 'One more', protected: true, password: ''
}, {
  _id: '13', name: 'Channel 1', protected: false, password: ''
}, {
  _id: '14', name: 'Channel 2', protected: true, password: ''
}, {
  _id: '15', name: 'Another channel', protected: false, password: ''
}, {
  _id: '16', name: 'One more', protected: true, password: ''
}, {
  _id: '17', name: 'Channel 1', protected: false, password: ''
}, {
  _id: '18', name: 'Channel 2', protected: true, password: ''
}, {
  _id: '19', name: 'Another channel', protected: false, password: ''
}, {
  _id: '20', name: 'One more', protected: true, password: ''
}, {
  _id: '19', name: 'Another channel', protected: false, password: ''
}
];

export default meta;
type Story = StoryObj<typeof ChannelsPanel>;

export const Default: Story = {
  decorators: [(Story) => {
    const [, setActive] = useAtom(channelAtom);
    const [, setUser] = useAtom(userAtom);

    useEffect(() => {
      setActive('1');
      setUser({
        email: 'Test', role: 'user', _id: 'string', avatarUrl: '', authorizedChannels: []
      });
    }, [setActive, setUser]);

    return (
      <Story />
    );
  }],

  args: {
    channelList: channelList
  }
};

export const ActiveChannel: Story = {
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
  }],
  args: {
    channelList: channelList
  }
};

export const ProtectedChannel: Story = {
  decorators: [(Story) => {
    const [, setActive] = useAtom(channelAtom);
    const [, setUser] = useAtom(userAtom);

    useEffect(() => {
      setActive('');
      setUser({
        email: 'Test', role: 'user', _id: 'string', avatarUrl: '', authorizedChannels: []
      });
    }, [setActive, setUser]);
    return (
      <Story />
    );
  }],
  args: {
    channelList: channelListProtected
  }
};

export const OverflowY: Story = {
  decorators: [(Story) => {
    const [, setActive] = useAtom(channelAtom);
    const [, setUser] = useAtom(userAtom);

    useEffect(() => {
      setActive('');
      setUser({
        email: 'Test', role: 'user', _id: 'string', avatarUrl: '', authorizedChannels: []
      });
    }, [setActive, setUser]);
    return (
      <Story />
    );
  }],
  args: {
    channelList: channelListOverflow
  }
};

export const OverflowX: Story = {
  decorators: [(Story) => {
    const [, setActive] = useAtom(channelAtom);
    const [, setUser] = useAtom(userAtom);

    useEffect(() => {
      setActive('');
      setUser({
        email: 'Test', role: 'user', _id: 'string', avatarUrl: '', authorizedChannels: []
      });
    }, [setActive, setUser]);
    return (
      <Story />
    );
  }],
  args: {
    channelList: [{
      _id: '20', name: 'One moreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', protected: true, password: ''
    }]
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
    channelList: channelList
  }
};

export const EditChannelOptions: Story = {
  render: () => {
    return <EditChannel channelId='testChannel' channelName='Test Channel' closeEditOptions={() => ''} />;
  }
};

export const AddChannelOptions: Story = {
  render: () => {
    return <AddChannel closeAddChannel={() => ''} />;
  }
};
