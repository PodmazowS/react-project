import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginpage/LoginPage'; 
import Header from './components/common/Header/header';
import Home from './pages/home/Home';
import UserProfilePage from './pages/UserProfilePage/UserProfile';
import PageNotFound from './pages/pagenotfound/PageNotFound';
import Footer from './components/common/Footer/footer';
import PostsPage from './pages/postpage/PostPage';
import PrivateRoute from './hoc/PrivateRoute';
import WelcomePage from './pages/welcomepage/welcomepage';
import './App.css';


const MainComponent = () => {
  return (<>
    <Header/>
    <div className="content">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/:userID" element={<PrivateRoute><UserProfilePage /></PrivateRoute>} /> 
        <Route path="/posts" element={<PrivateRoute><PostsPage /></PrivateRoute>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
      

    <Footer />
    </>
  );
};

export default MainComponent;
