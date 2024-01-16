import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css'; 
import { useAuth } from '../../../Hooks/useAuth/useAuth';

const Header: React.FC = () => {

  const {logout,isAuthenticated}=useAuth();

 const navigate= useNavigate();

const logoutClick=()=>{
  logout();

 navigate("/login")
}

const loginClick=()=>{
  navigate("/login");
}


  return (
    <header className="header">
      <div className="logo">
        <Link to="/home">SocialNet</Link> 
      </div>
      <nav className="navigation">
        <ul>
          
          {!isAuthenticated()?
          <li><a onClick={loginClick}>Log In</a></li>
          :
          <>
          <li><Link to="/user/1">Profile</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/upload">Upload Photo</Link></li>
          <li><a onClick={logoutClick}>Log Out</a></li>
          </>
            }
        
        </ul>
      </nav>
    </header>
  );
};

export default Header;

