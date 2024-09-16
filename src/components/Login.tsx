import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "../styledComponents/Login.css"


const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate(); 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    
    if (username === '' || password === '') {
      setError('Please fill in all fields.');
      return;
    }

    if (username === 'admin' && password === 'admin') {
      console.log('Login successful:', { username, password });

      
      navigate('/home'); 

    
      setUsername('');
      setPassword('');
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-card">
      <div className="card-header">
        <div className="log">Login</div>
      </div>
      <div className="card-body">
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              required
              name="username"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              required
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
