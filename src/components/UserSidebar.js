// src/components/Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaHome,FaSearchLocation, FaSignOutAlt,FaUserCog } from 'react-icons/fa';

const UserSidebar = () => (
  <div className="sidebar">
    <Nav className="flex-column">
      <LinkContainer to="/user/dashboard">
        <Nav.Link><FaHome /> Dashboard</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/user/searchpg">
        <Nav.Link><FaSearchLocation /> Search Pg</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/user/searchmess">
        <Nav.Link><FaSearchLocation /> Search Mess</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/user/profile">
        <Nav.Link><FaUserCog /> Profile</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/logout">
        <Nav.Link><FaSignOutAlt /> Logout</Nav.Link>
      </LinkContainer>
    </Nav>
  </div>
);

export default UserSidebar;
