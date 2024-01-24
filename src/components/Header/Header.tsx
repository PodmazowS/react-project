import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; 
import { useAuth } from '../../Hooks/useAuth/useAuth';

export const Header: React.FC = () => {

  const {logout,isAuthenticated}=useAuth();

 const navigate= useNavigate();


const manageLogin=()=>{
  if(isAuthenticated()){
    logout();
  }
  navigate("/login");
}


  return (
    <header className="header">
      <div className="logo">
        <Link to="/">SocialNet</Link> 
      </div>
      <nav className="navigation">
        <ul>
          <li><a onClick={manageLogin}>{isAuthenticated()?"Log Out":"Log In"}</a></li> 
        </ul>
      </nav>
    </header>
  );
};


