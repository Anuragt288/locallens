// src/components/Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaHome, FaUsers, FaCog, FaUser, FaSignOutAlt, FaListUl } from 'react-icons/fa';

const Sidebar = () => (
  <div className="sidebar">
    <Nav className="flex-column">
      <LinkContainer to="/owner/dashboard">
        <Nav.Link><FaHome /> Dashboard</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/owner/members">
        <Nav.Link><FaUsers /> Bookings</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/owner/manage-account">
        <Nav.Link><FaCog /> Manage PG</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/owner/manage-mess">
        <Nav.Link><FaCog /> Manage Mess</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/owner/foodmenu">
        <Nav.Link><FaListUl /> Update Food Menu</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/owner/profile">
        <Nav.Link><FaUser /> Profile</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/logout">
        <Nav.Link><FaSignOutAlt /> Logout</Nav.Link>
      </LinkContainer>
    </Nav>
  </div>
);

export default Sidebar;
