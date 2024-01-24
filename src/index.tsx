import {createRoot} from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './Hooks/useAuth/useAuth';
import App from './App'; 

const root = createRoot(document.getElementById("root") as HTMLElement);


root.render(
  <BrowserRouter>
  <AuthProvider>
    <App />
  </AuthProvider>
   </BrowserRouter>
);
