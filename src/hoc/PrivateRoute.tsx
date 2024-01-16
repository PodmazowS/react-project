import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth/useAuth'; 
import { FC } from 'react';

interface Props {
    children: React.ReactNode;
}

const PrivateRoute:FC<Props> = ({ children }): any => {
    const auth = useAuth();
console.log(auth.isAuthenticated())
    if(auth.isAuthenticated()){
        return children
    }else{
        return <Navigate to="/" />
    }
};

export default PrivateRoute;