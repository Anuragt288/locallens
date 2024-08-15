import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Importing the CSS file

const Signup = () => {
  const [userName, setUserName] = useState('');  
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [isAdmin, setIsAdmin] = useState(0); // Default to 0 (not admin)
  const navigate = useNavigate();

  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/user/creatUser', {
        userName,
        password,
        contactNumber,
        isAdmin
      });
      navigate('/signin');
    } catch (error) {
      console.error('Error signing up:', error);
      setAlertMessage('Failed to create New User. Please try again.');
      setAlertType('danger');
    }
  };

  return (
    <div className="container mt-5 signup-container">
    {/* Alert Message */}
 {alertMessage && (
                <div className={`alert alert-${alertType}`} role="alert">
                    {alertMessage}
                </div>
            )}
      <h2 className="text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters"
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
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters"
          />
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            className="form-control"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
            pattern="[6789][0-9]{9}" 
            title="Must be a valid 10-digit mobile number"
          />
        </div>

        <div className="form-group">
          <label>User Type</label>
          <select
            className="form-control"
            value={isAdmin}
            onChange={(e) => setIsAdmin(e.target.value === 'admin' ? 1 : 0)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary btn-block mt-3">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
