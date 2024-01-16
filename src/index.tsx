import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './Hooks/useAuth/useAuth';
import App from './App'; 
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <AuthProvider>
    <App />
  </AuthProvider>
   </BrowserRouter>,
  document.getElementById('root')
);
