// src/layouts/OwnerLayout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const OwnerLayout = () => (
  <Container fluid>
    <Row>
      <Col md={2}>
        <Sidebar />
      </Col>
      <Col md={10}>
        <Outlet />
      </Col>
    </Row>
  </Container>
);

export default OwnerLayout;
