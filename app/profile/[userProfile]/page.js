'use client'

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '@/redux/apiUsers';

const UserPage = ({ params }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const { userProfile } = params;
  const user = users.find((user) => user.id === userProfile);

  return (
    <div>
      <h1>User Profile</h1>
      {user && (
        <div>
          <h2>{user.first} {user.last}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      )}
    </div>
  );
};

export default UserPage;