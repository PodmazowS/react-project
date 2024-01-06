import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Hooks/auth/Auth'; 
import './LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isAuthenticated = login(username, password);
        if (isAuthenticated) {
            navigate('/home'); 
        }
    };
    

    return (
        <div className="login-container"> 
            <h2 className="login-title">Login</h2> 
            <form onSubmit={handleSubmit} className="login-form"> 
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username:</label> 
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password:</label> 
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input" 
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default LoginPage;

export {};