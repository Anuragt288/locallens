import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
  const [userName, setUserName] = useState('');  
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user'); // Check if the user is already signed in
    if (loggedInUser) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/user/login', {
        userName,
        password
      });

      const { isAdmin } = response.data;
      localStorage.setItem('user', JSON.stringify(response.data)); // Save user details in local storage
      setIsAuthenticated(true);

      if (isAdmin) {
        navigate('/owner');
      } else {
        navigate('/user');
      }
    } catch (error) {
      setErrorMessage('Invalid username or password');
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('user'); // Remove user details from local storage
    setIsAuthenticated(false);
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="container mt-5 signin-container">
      <h2 className="text-center">{isAuthenticated ? 'Welcome Back' : 'Sign In'}</h2>
      {isAuthenticated ? (
        <button onClick={handleSignOut} className="btn btn-danger btn-block mt-3">
          Sign Out
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="signin-form">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorMessage && (
            <div className="alert alert-danger mt-3" role="alert">
              {errorMessage}
            </div>
          )}

          <button type="submit" className="btn btn-primary btn-block mt-3">
            Sign In
          </button>
        </form>
      )}
    </div>
  );
};

export default Signin;
