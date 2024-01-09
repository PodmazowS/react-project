import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginpage/LoginPage'; 
import Header from './components/common/Header/header';
import Home from './pages/home/Home';
import UserProfilePage from './pages/UserProfilePage/UserProfile';
import PageNotFound from './pages/pagenotfound/PageNotFound';


const MainComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user/:userID" element={<UserProfilePage />} /> 
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default MainComponent;
