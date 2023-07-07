import GenericButton from '../GenericButton/GenericButton';
import AddChannel from '../AddChannel/AddChannel';
import { useEffect, useState } from 'react';
import { useMedia } from '@/utils/useMedia';
import { HeaderWrapper, StyledChannelsPanel } from './ChannelsPanel.styles';
import { useAtom } from 'jotai';
import { userAtom } from '../Layout';
import SingleChannel from './SingleChannel';
import { client, Channel } from '@/utils/client';

const ChannelsPanel = ({ channelList }: { channelList?: Channel[] }) => {
  const media = useMedia();
  const [showChannels, setShowChannels] = useState(false);
  const [showAddChannel, setAddChannel] = useState(false);

  const [user] = useAtom(userAtom);
  const [channels, setChannels] = useState<Channel[]>(channelList ?? []);
  useEffect(() => {
    if (window.innerWidth >= 800 && media === false) {
      setShowChannels(true);
    } else if (window.innerWidth < 800 && media === true) {
      setShowChannels(false);
    }
  }, [media]);

  useEffect(() => {
    const getChannels = async () => {
      const channels = await client.service('channelsService').find({ paginate: false });
      setChannels(channels);
    };

    const addChannel = (channel: Channel) => {
      setChannels((channels) => [...channels, channel]);
    };
    const updateChannel = (channel: Channel) => {
      setChannels((state) => {
        const updatedChannels = state.map((singleChannel) => {
          if (singleChannel._id === channel._id) {
            return { ...singleChannel, name: channel.name, protected: channel.protected };
          }
          return singleChannel;
        });
        return updatedChannels;
      });
    };
    client.service('channelsService').on('created', addChannel);
    client.service('channelsService').on('patched', updateChannel);

    getChannels();
    return () => {
      client.service('channelsService').removeListener('created', addChannel);
      client.service('channelsService').removeListener('patched', updateChannel);
    };
  }, [user]);

  return (
    <StyledChannelsPanel>
      <HeaderWrapper $showBorder={showChannels}>
        {media && <button onClick={() => setShowChannels(!showChannels)}>{!showChannels ? '+' : '-'}</button>}
        <h2>Channel list</h2>
      </HeaderWrapper>

      {channels && (
        <>
          {showChannels && (
            <>
              <ul>
                {channels.map((channel) => {
                  return <SingleChannel channel={channel} key={channel._id} />;
                })}
              </ul>
              {user?.role === 'admin' && (
                <>
                  <GenericButton type="button" onClick={() => setAddChannel(true)}>
                    Add channel
                  </GenericButton>

                  {showAddChannel && <AddChannel closeAddChannel={() => setAddChannel(false)} />}
                </>
              )}
            </>
          )}
        </>
      )}
    </StyledChannelsPanel>
  );
};

export default ChannelsPanel;
