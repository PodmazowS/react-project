import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../Hooks';


export const HomePage: React.FC = () => {

  const {isAuthenticated}=useAuth();

  return (
    <div>
      <h1>Welcome to our website!</h1>
      <p>We're glad to have you here.</p>

      {isAuthenticated() && <Link to="/users">Let`s start with users</Link>}
    </div>
  );
};

