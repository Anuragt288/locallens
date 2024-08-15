// src/pages/UserDashboard.js
import React from 'react';
import { Container } from 'react-bootstrap';
import './UserDashboard.css';

const bookings = [
  {
    id: 1,
    name: 'Santa Pg',
    location: 'Shivaji nagar',
    price: '₹4500/mo',
    image: '/images/boulder-house.jpg',
  },
];

const UserDashboard = () => {
  return (
    <Container>
      <h1>Your Booking</h1>
      <div className="bookings-container">
        {bookings.map((booking) => (
          <div className="booking-card" key={booking.id}>
            <div className="booking-image-container">
              <img src={booking.image} alt={booking.name} className="booking-image" />
            </div>
            <div className="booking-info">
              <h2>{booking.name}</h2>
              <p>{booking.location}</p>
              <p>{booking.price}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default UserDashboard;
