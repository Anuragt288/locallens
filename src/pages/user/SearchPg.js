import React, { useState } from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SearchPg.css'; // Optional: Custom CSS for styling

function SearchPG() {
    const [location, setLocation] = useState('');
    const [pgList, setPgList] = useState([]);
    const [selectedPg, setSelectedPg] = useState(null);
    const [show, setShow] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({ userId: '', pgId: '', ownerUserId: '' });
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleSearchChange = (e) => {
        setLocation(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/pg/searchByLoc', { location })
            .then(response => setPgList(response.data))
            .catch(error => console.error('Error fetching PGs:', error));
    };

    const handleBook = (pg) => {
      // Check if the PG is fully booked
      if (pg.roomCount === pg.bookedCount) {
          setAlertMessage('Rooms are full. No available rooms to book.');
          setAlertType('danger');
          setShow(false);  // Ensure the booking modal does not open
      } else {
          setSelectedPg(pg);
          setBookingDetails({ userId: pg.userId, pgId: pg.pgId, ownerUserId: pg.ownerUserId });
          setShow(true);  // Open the booking modal if rooms are available
      }
  };
  

    const handleBookingSubmit = () => {
      console.log(bookingDetails);
        axios.post('http://localhost:8081/pg/bookPg', bookingDetails)
            .then(response => {
                setAlertMessage('PG booked successfully!');
                setAlertType('success');
                setShow(false);

                // Redirect to the dummy payment gateway page
                navigate('/user/payment');
            })
            .catch(error => {
                setAlertMessage('Failed to book PG. Please try again.');
                setAlertType('danger');
            });
    };

    return (
      <div className="container mt-4">
          <h1 className="text-center mb-4">Search PG by Location</h1>
  
          {/* Display Alert Message if any */}
          {alertMessage && (
              <div className={`alert alert-${alertType}`} role="alert">
                  {alertMessage}
              </div>
          )}
  
          {/* Search Form */}
          <form onSubmit={handleSearch}>
              <Row className="mb-4">
                  <Col md="12">
                      <Form.Group controlId="location">
                          <Form.Label>Location</Form.Label>
                          <Form.Control
                              type="text"
                              value={location}
                              onChange={handleSearchChange}
                              placeholder="Enter Location"
                          />
                      </Form.Group>
                  </Col>
              </Row>
              <Button type="submit" variant="primary" className="w-100">Search</Button>
          </form>
  
          {/* PG List Display */}
          <div className="mt-4">
              {pgList.length > 0 ? (
                  pgList.map(pg => (
                      <div key={pg.pgId} className="pg-info-container mb-4">
                          <Row className="rowclass">
                              <Col md="4">
                                  <img src={pg.image} alt="PG" className="pg-image" />
                              </Col>
                              <Col md="8" className="pg-details">
                                  <h2>{pg.pgName}</h2>
                                  <p>{pg.pgId} PG ID</p>
                                  <p>{pg.location}</p>
                                  <p className="price">₹{pg.price}/mo*</p>
                                  <p>{pg.description}</p>
                                  <p>{pg.roomCount} Rooms Available</p>
                                  <p>{pg.bookedCount} Rooms Booked</p>
                                  <Button variant="success" onClick={() => handleBook(pg)}>
                                      Book
                                  </Button>
                              </Col>
                          </Row>
                      </div>
                  ))
              ) : (
                  <p className="text-center">No PGs found.</p>
              )}
          </div>
  
          {/* Booking Modal */}
          <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                  <Modal.Title>Book PG</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Form>
                      <Form.Group controlId="userId">
                          <Form.Label>User ID</Form.Label>
                          <Form.Control type="text" value={bookingDetails.userId} readOnly/>
                      </Form.Group>
                      <Form.Group controlId="pgId" className="mt-3">
                          <Form.Label>PG ID</Form.Label>
                          <Form.Control type="text" value={bookingDetails.pgId} readOnly/>
                      </Form.Group>
                      <Form.Group controlId="ownerUserId" className="mt-3">
                          <Form.Label>Owner User ID</Form.Label>
                          <Form.Control type="text" value={bookingDetails.ownerUserId} readOnly/>
                      </Form.Group>
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
                  <Button variant="primary" onClick={handleBookingSubmit}>Done</Button>
              </Modal.Footer>
          </Modal>
      </div>
  );
  
}

export default SearchPG;
