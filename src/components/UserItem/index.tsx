import React, { FC } from 'react';
import { IUser } from '../../types';

interface UserItemProps {
  user: IUser
}

const UserItem: FC<UserItemProps> =  ({user}) => {
  return (
      <div>
        <div>{user.name} - {user.email}</div>
        <address>
          {user.address.city} - {user.address.street}
        </address>
        <hr/>
      </div>
  );
};

export default UserItem;
