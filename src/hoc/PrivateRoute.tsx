import { Navigate } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth/useAuth'; 
import { FC } from 'react';

interface Props {
    children: React.ReactNode;
}

export const PrivateRoute:FC<Props> = ({ children }): any => {
    const auth = useAuth();


    if(auth.isAuthenticated()){
        return children
    }else{
        return <Navigate to="/" />
    }
};