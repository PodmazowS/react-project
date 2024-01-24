import { useContext, createContext, ReactNode } from 'react';

type AuthContextType = {
  isAuthenticated: () => boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

interface Props{
    children:ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider: React.FC<Props> = ({ children }) => {
  const auth = {
    isAuthenticated: () => {
      const token = localStorage.getItem('token');
    
      return !!token;
    },
    login: (username: string, password: string):boolean => {
      if (username === 'admin' && password === 'password') {
        localStorage.setItem('token', '1234567890');
        return true;
      }
      return false;
    },
    logout: () => {
      localStorage.removeItem('token');
    },
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}