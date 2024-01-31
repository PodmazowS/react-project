import React, { useEffect, useState } from 'react';
import { userService } from '../../api/userService';
import { Link } from 'react-router-dom';
import './UsersPage.css';

interface User {
  id: number;
  name: string;
  email: string;
  // Add other user properties as needed
}

export const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    userService.getAll().then(setUsers);
  }, []);

  return (
    <div className="m-10">
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id} className='p-2'>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <Link to={`/user/${user.id}`} className="profile-link">View Profile</Link>
          {/* Display other user properties as needed */}
        </div>
      ))}
    </div>
  );
};

export default UsersPage;