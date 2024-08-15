// src/pages/UserProfile.js
import React from 'react';
import './UserProfile.css';
import { Container } from 'react-bootstrap';

const UserProfile = () => {
  return (
    <Container>
      <div className="user-profile-container">
        <h1>User Profile</h1>
        <div className="profile-card">
          <div className="profile-image-container">
            <img
              src="/images/profile.jpg" 
              alt="User"
              className="profile-image"
            />
          </div>
          <div className="profile-info">
            <h2>Anurag Thakre</h2> 
            <p><strong>Mobile No:</strong> 8545761235</p> 
            <p><strong>Email ID:</strong> anurag123@gmail.com</p> 
            <div className="button-container">
              <button className="update-button">Update</button>
              {/* <button className="delete-button">Delete</button> */}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserProfile;
