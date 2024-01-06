export const isAuthenticated = () => {
    
    const token = localStorage.getItem('token');
  
    if (token) {
      return true;
    }
  
    return false;
  };
  
  export const login = (username: string, password: string) => {
    if (username === 'admin' && password === 'password') {
      
      localStorage.setItem('token', '1234567890');
  
      return true;
    }
    return false;
  };
  export const logout = () => {
    localStorage.removeItem('token');
  };

  export{}