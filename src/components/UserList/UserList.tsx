import React from 'react';
import { useGetUsersQuery } from '../../store/api/usersApi';
import UserItem from './UserItem';

const UserList = () => {
  const { data: users, isLoading, isError, refetch } = useGetUsersQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading users</div>;

  return (
    <div>
      <h2>Users List</h2>
      <button className="TabButton" onClick={refetch}>Uppdatera lista</button> {/* "Uppdatera lista" knapp som triggar en ny hämtning av data */}
      <ul>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
