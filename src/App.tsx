import React, { ReactNode, useEffect, useState } from 'react';
import axios from 'axios';

import { IUser } from './types';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';

import './App.css';


function App () {
  const [users, setUsers] = useState<IUser[]>([])

  function onClick (e: React.MouseEvent<ReactNode>, title: string) {
    console.log('card', title, e);
  }

  const fetchUsers = async () => {
    const result = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    setUsers(result?.data || [])
  }

  useEffect( () => {
    fetchUsers()
  }, [])

  return (
      <div className="App">
        App
        <Card variant={CardVariant.primary} onClick={(e, title) => onClick(e, title)} title="overwrite">
          Inner
        </Card>
        <br />
        <hr />
        <UserList name={0} users={users} />
      </div>
  );
}

export default App;
