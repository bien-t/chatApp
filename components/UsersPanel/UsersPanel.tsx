import React, { useEffect, useState } from 'react';
import { useMedia } from '@/utils/useMedia';
import { HeaderWrapper, StyledUsersPanel } from './UsersPanel.styles';
import SingleUser from './SingleUser';
import { client } from '@/utils/client';
import { UsersData, SingleUserProps } from '@/types/types';

const UsersPanel = ({ userList }: { userList?: SingleUserProps[] }) => {
  const media = useMedia();
  const [showUsers, setShowUsers] = useState(false);
  const [users, setUsers] = useState<SingleUserProps[]>(userList ?? []);
  useEffect(() => {
    if (window.innerWidth >= 800 && media === false) {
      setShowUsers(true);
    } else if (window.innerWidth < 800 && media === true) {
      setShowUsers(false);
    }
  }, [media]);
  useEffect(() => {
    const updateUsers = (data: UsersData) => {
      setUsers(data.users);
    };
    const clearUserList = () => {
      setUsers([]);
    };

    client.service('usersService').on('channelUpdated', updateUsers);
    client.service('usersService').on('left', updateUsers);
    client.service('usersService').on('kicked', clearUserList);

    return () => {
      client.service('usersService').removeListener('channelUpdated', updateUsers);
      client.service('usersService').removeListener('left', updateUsers);
      client.service('usersService').removeListener('kicked', clearUserList);
    };
  }, [users]);
  return (
    <>
      <StyledUsersPanel >
        <HeaderWrapper $showBorder={showUsers}>
          {
            media
            && <button onClick={() => setShowUsers(!showUsers)}>{!showUsers ? '+' : '-'}</button>
          }
          <h2>Users on the channel</h2>
        </HeaderWrapper>
        {users
          && <>
            {showUsers
              && <ul>
                {users.map((singleUser, index) => {
                  return <SingleUser singleUser={singleUser} key={singleUser._id} index={index} />;
                })}

              </ul>
            }
          </>
        }

      </StyledUsersPanel>
    </>

  );
};

export default UsersPanel;
