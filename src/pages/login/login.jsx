import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setErrorMessage('Please Enter a Valid username or password.');
    } else {
      // Perform login action (e.g., API call)
      console.log('Username:', username);
      console.log('Password:', password);
      navigate('/home');
      // Navigate to the home page or perform other actions
    }
  };

  return (
    <div className="container my-5">
    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Login
        </button>
      </form>
      <div className="member">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
