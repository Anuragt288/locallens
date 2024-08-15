import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import './ManageAccount.css';

const ManageAccount = () => {
    const [pg, setPgs] = useState({
        pgName: '',
        location: '',
        description: '',
        price: 0,
        roomCount: 0,
        bookedCount: 0,
        image: '',
        userId: ''
    });

    const [pgss, getPgs] = useState([]);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    // New states for handling update modal
    const [showModal, setShowModal] = useState(false);
    const [selectedPg, setSelectedPg] = useState(null);

    const handleChange = (e) => {
        setPgs({ ...pg, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/pg/addPg', pg)
            .then(response => {
                setAlertMessage('PG created successfully!');
                setAlertType('success');
            })
            .catch(error => {
                setAlertMessage('Failed to create PG. Please try again.');
                setAlertType('danger');
            });
    };

    useEffect(() => {
        axios.get('http://localhost:8081/pg/user/1')
            .then(response => getPgs(response.data))
            .catch(error => console.error('Error fetching PGs:', error));
    }, []);

    const handleUpdate = (pg) => {
        setSelectedPg(pg);
        setShowModal(true);
    };

    const handleDelete = (pgId) => {
        axios.delete(`http://localhost:8081/pg/${pgId}`)
            .then(response => {
                getPgs(pgss.filter(pg => pg.id !== pgId));
                console.log('PG deleted successfully');
            })
            .catch(error => console.error('Error deleting PG:', error));
    };

    const handleModalChange = (e) => {
        setSelectedPg({ ...selectedPg, [e.target.name]: e.target.value });
    };

    const handleModalSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8081/pg/updatePg`, selectedPg)
            .then(response => {
                setAlertMessage('PG updated successfully!');
                setAlertType('success');
                setShowModal(false);
                // Refresh the PG list after update
                getPgs(pgss.map(pg => (pg.id === selectedPg.id ? selectedPg : pg)));
            })
            .catch(error => {
                setAlertMessage('Failed to update PG. Please try again.');
                setAlertType('danger');
            });
    };

    return (
        <Container className="manage-account-container">
            <h1>Manage Account</h1>

            {/* Alert Message */}
            {alertMessage && (
                <div className={`alert alert-${alertType}`} role="alert">
                    {alertMessage}
                </div>
            )}

            <Form className="manage-account-form" onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="pgName" className="mb-3">
          <Form.Label column sm="2">
            PG Name
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter PG Name" name="pgName" value={pg.pgName} onChange={handleChange} required/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="location" className="mb-3">
          <Form.Label column sm="2">
            PG Location
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter PG Location" name="location" value={pg.location} onChange={handleChange} required/>
          </Col>
        </Form.Group>

        {/* <Form.Group as={Row} controlId="location" className="mb-3">
          <Form.Label column sm="2">
            Location
          </Form.Label>
          <Col sm="10">
            <Form.Control as="select" name="location" value={pg.location} onChange={handleChange}>
              <option>Gokhalenagar</option>
              <option>Model Colony</option>
              <option>Shivaji Nagar</option>
              <option>Karve Nagar</option>
            </Form.Control>
          </Col>
        </Form.Group> */}

        <Form.Group as={Row} controlId="description" className="mb-3">
          <Form.Label column sm="2">
            Description
          </Form.Label>
          <Col sm="10">
            <Form.Control as="textarea" rows={3} placeholder="Enter Description" name="description" value={pg.description} onChange={handleChange} required/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="price" className="mb-3">
          <Form.Label column sm="2">
            Price
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" placeholder="Enter Price" name="price" value={pg.price} onChange={handleChange} required/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="totalBeds" className="mb-3">
          <Form.Label column sm="2">
            Total Beds
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" placeholder="Enter Total Beds" name="roomCount" value={pg.roomCount} onChange={handleChange} required/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="bookedCount" className="mb-3">
          <Form.Label column sm="2">
          booked Count
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" placeholder="Enter Total Beds Booked" name="bookedCount" value={pg.bookedCount} onChange={handleChange} required/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="photos" className="mb-3">
          <Form.Label column sm="2">
            Add Photos
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" name="image" value={pg.image} onChange={handleChange} required/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="photos" className="mb-3">
          <Form.Label column sm="2">
            UserId
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" name="userId" value={pg.userId} onChange={handleChange} required/>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Create PG</Button>
          </Col>
        </Form.Group>
      </Form>

            {/* PG Information Display */}
            <div className="container mt-4">
                <h1 className="text-center mb-4">Your PGs</h1>
                {pgss.length > 0 ? (
                    pgss.map(pg => (
                        <div key={pg.id} className="pg-info-container mb-4">
                            <Row className="rowclass">
                                <Col md="4">
                                    <img src={pg.image} alt="PG" className="pg-image" />
                                </Col>
                                <Col md="8" className="pg-details">
                                    <h2>{pg.pgName}</h2>
                                    <p>{pg.location}</p>
                                    <p>{pg.description}</p>
                                    <p className="price">₹{pg.price}/mo*</p>
                                    <p>{pg.roomCount} Rooms Available</p>
                                    <Row className="pg-actions">
                                        <Col sm="6">
                                            <Button
                                                variant="success"
                                                className="w-100"
                                                onClick={() => handleUpdate(pg)}
                                            >
                                                Update
                                            </Button>
                                        </Col>
                                        <Col sm="6">
                                            <Button
                                                variant="outline-success"
                                                className="w-100"
                                                onClick={() => handleDelete(pg.id)}
                                            >
                                                Delete
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No PGs found.</p>
                )}
            </div>

            {/* Update PG Modal */}
            {selectedPg && (
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update PG</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleModalSubmit}>
                            <Form.Group as={Row} controlId="pgName" className="mb-3">
                                <Form.Label column sm="2">PG Name</Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        name="pgName"
                                        value={selectedPg.pgName}
                                        onChange={handleModalChange}
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="location" className="mb-3">
                                <Form.Label column sm="2">Location</Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        name="location"
                                        value={selectedPg.location}
                                        onChange={handleModalChange}
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="description" className="mb-3">
                                <Form.Label column sm="2">Description</Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        as="textarea"
                                        name="description"
                                        rows={3}
                                        value={selectedPg.description}
                                        onChange={handleModalChange}
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="price" className="mb-3">
                                <Form.Label column sm="2">Price</Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="number"
                                        name="price"
                                        value={selectedPg.price}
                                        onChange={handleModalChange}
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="roomCount" className="mb-3">
                                <Form.Label column sm="2">Room Count</Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="number"
                                        name="roomCount"
                                        value={selectedPg.roomCount}
                                        onChange={handleModalChange}
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="bookedCount" className="mb-3">
                                <Form.Label column sm="2">Booked Count</Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="number"
                                        name="bookedCount"
                                        value={selectedPg.bookedCount}
                                        onChange={handleModalChange}
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="image" className="mb-3">
                                <Form.Label column sm="2">Image URL</Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        name="image"
                                        value={selectedPg.image}
                                        onChange={handleModalChange}
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Update PG
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            )}
        </Container>
    );
};

export default ManageAccount;
