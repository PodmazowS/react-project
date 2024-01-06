import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginpage/LoginPage'; 
import Home from './pages/home/Home';
import UserProfilePage from './pages/UserProfilePage/UserProfile'; 

const MainComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user/:userID" element={<UserProfilePage />} /> 
      </Routes>
    </Router>
  );
};

export default MainComponent;
