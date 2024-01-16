import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; 
import { useAuth } from '../../Hooks/useAuth/useAuth';

const LoginPage = () => {
    const navigate = useNavigate(); 
    const {login}=useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isAuthenticated = login(username, password);
        if (isAuthenticated) {
            navigate('/'); 
        } else {
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <div className="login-page">
        <div className="card-container">
            {errorMessage && (
                <div className="alert alert-danger">
                    <span><b>Sorry!</b> - {errorMessage}</span>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input id="username" type="text" className="form-control" placeholder="Email address" required autoFocus value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <input id="password" type="password" className="form-control" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Log in</button>
            </form>
            <a href="/signup" className="sign-up">Don't have an account? — Sign Up</a>
        </div>
    </div>
    );
};

export default LoginPage;
