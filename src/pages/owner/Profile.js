
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Profile.css';


const Profile = () => {
  return (
    <Container className="profile-container">
      <Card className="profile-card">
        <Row>
          <Col md="4" className="profile-image-col">
            <Card.Img variant="top" src={require('../../assets/images/rohit.jpg')} className="profile-image" />
          </Col>
          <Col md="8" className="profile-details">
            <Card.Body>
              <Card.Title className="profile-name">Rohit</Card.Title>
              <Card.Text className="profile-email">rohitardalkar2312@gmail.com</Card.Text>
              <Card.Text className="profile-phone">9561907813</Card.Text>
              <Button variant="info" className="profile-button">Update</Button>
              {/* <Button variant="danger" className="profile-button">Delete</Button> */}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Profile;
