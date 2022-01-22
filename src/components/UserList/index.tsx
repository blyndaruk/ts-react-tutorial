import React, { FC } from 'react';
import { IUser } from '../../types';
import UserItem from '../UserItem';
import List from '../List';

interface UserListProps {
  name: number,
  users: IUser[]
}

const UserList: FC<UserListProps> = ({name, users}) => {
  return (
      <div>
        User
        <div>
          {name}
        </div>
        <div>
          <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
        </div>
      </div>
  );
};

export default UserList;
