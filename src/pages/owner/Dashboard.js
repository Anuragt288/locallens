
import React from 'react';
import { Container } from 'react-bootstrap';
import TopCards from './TopCards';
import ProjectTables from './ProjectTable';
import 'bootstrap/dist/css/bootstrap.css'

import { Col, Row } from "reactstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
//import { FaUsers } from "react-icons/fa";
import './style.css'


const Dashboard = () => (
  <Container>
    <h1>Dashboard</h1>
    <p>Welcome to the Owner Dashboard.</p>

    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="Total Members"
            earning="6"
            icon="bi bi-people-fill"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Refunds"
            subtitle="This Month"
            earning="1"
            icon="bi bi-people-fill"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Total Rooms"
            earning="8"
            icon="bi bi-house-add-fill"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Booked Rooms"
            earning="6"
            icon="bi bi-house-check-fill"
          />
        </Col>
      </Row>


      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>
    </div>

  </Container>
);

export default Dashboard;
