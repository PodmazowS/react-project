import {FC} from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header,Footer } from './components';
import { PrivateRoute } from './hoc';
import { AlbumPage, HomePage,LoginPage, NotFoundPage, PostPage, UserProfilePage, UsersPage } from './pages';
import './App.css';
import './index.css';


const MainComponent:FC = () => {
  return (<>
    <Header/>
    <div className="content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<PrivateRoute><UsersPage /></PrivateRoute>} /> 
        <Route path="/user/:id" element={<PrivateRoute><UserProfilePage /></PrivateRoute>} />
        <Route path="/user/:userId/album/:albumId" element={<PrivateRoute><AlbumPage/></PrivateRoute>} />
        <Route path="/post/:postId" element={<PrivateRoute><PostPage/></PrivateRoute>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>
    <Footer />
    </>
  );
};

export default MainComponent;
