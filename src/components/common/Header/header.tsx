import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; 

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">SocialNet</Link> 
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/upload">Upload Photo</Link></li>
          <li><Link to="/user/1">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

export{};