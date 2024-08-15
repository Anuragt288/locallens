// src/pages/About.js
import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from './Slider';

const About = () => (
  <Container>
    <h1>About Us</h1>
    <p>
      We help you find the best PG and Mess facilities in your area. Our platform connects users with reliable and quality services, ensuring a comfortable stay.
    </p>
    <Slider/>
  </Container>
  
);

export default About;
