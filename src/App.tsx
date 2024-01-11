import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginpage/LoginPage'; 
import Header from './components/common/Header/header';
import Home from './pages/home/Home';
import UserProfilePage from './pages/UserProfilePage/UserProfile';
import PageNotFound from './pages/pagenotfound/PageNotFound';
import Footer from './components/common/Footer/footer';


const MainComponent = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />}  />
        <Route path="/user/:userID" element={<UserProfilePage />} /> 
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default MainComponent;
