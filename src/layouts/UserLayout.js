// src/layouts/OwnerLayout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserSidebar from '../components/UserSidebar';
import { Outlet } from 'react-router-dom';

const UserLayout = () => (
  <Container fluid>
    <Row>
      <Col md={2}>
        <UserSidebar />
      </Col>
      <Col md={10}>
        <Outlet />
      </Col>
    </Row>
  </Container>
);

export default UserLayout;
