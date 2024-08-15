// src/pages/owner/FoodMenu.js
import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Button, Modal, Form, Table } from 'react-bootstrap';
import './FoodMenu.css';
import axios from 'axios';
//import messImage from '../../public/images/mess-image.jpg'; // Importing image from public/images folder

const FoodMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //display mess
  const [mss, getMess] = useState([]);

   // State for Mess form
   const [men, setMenu] = useState({
        menuId: '',
        menuName: ''
});

// State for Mess form
const [mess, setMess] = useState({
  messName: '',
      location: '',
      description: '',
      menuList: [{ menuName: '' }],
      image: '',
      userId: '',  
      price: ''
});



 useEffect(() => {
     // Fetch Mess added by a particular user (replace userId with actual user ID or handle it appropriately)
     axios.get('http://localhost:8081/mess/user/2')
         .then(response => getMess(response.data))
         .catch(error => console.error('Error fetching Mess:', error));
 }, []);


 //Display Mess

 const [menu, getMenu] = useState([]);

 useEffect(() => {
     // Fetch Mess Menu
     axios.get('http://localhost:8081/mess/menu/2')
         .then(response => getMenu(response.data))
         .catch(error => console.error('Error fetching Mess:', error));
 }, []);


  return (
    <Container className="food-menu-container">

      {/* Mess Information Display */}

      <div className="container mt-4">
            <h1 className="text-center mb-4">Your Mess</h1>
            {mss.length > 0 ? (
              mss.map(ms => (
                    <div key={ms.id} className="pg-info-container mb-4">
                        <Row className="rowclass">
                            <Col md="4">
                                <img src={ms.image} alt="MessImage" className="pg-image" />
                            </Col>
                            <Col md="8" className="pg-details">
                                <h2>{ms.messName}</h2>
                                <p>{ms.location}</p>
                                <p>{ms.description}</p>
                                <p className="price">₹{ms.price}/mo*</p>
                                <Row className="pg-actions">
                                    <Col sm="6">
                                        <Button
                                            variant="success"
                                            className="w-100"
                                            onClick={handleShow}
                                        >
                                            Add Menu
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                ))
            ) : (
                <p className="text-center">No Mess found.</p>
            )}
        </div>

      {/* Menu List Table */}
      <div className="menu-list-container">
        <h2>Menu List</h2>
        {menu.length > 0 ? (
          menu.map(mn => (
        <Table key={mn.id} striped bordered hover className="menu-list-table">
          <thead >
            <tr>
              <th>Sr No</th>
              <th>Menu</th>
              {/* <th>Price</th>
              <th>Description</th> */}
              {/* <th>Update</th>
              <th>Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {/* Sample data */}
            <tr>
              <td>{mn.menuId}</td>
              <td>{mn.menuName}</td>
              {/* <td>₹250</td>
              <td>Delicious chicken biryani with raita</td> */}
              {/* <td><Button variant="info">Update</Button></td>
              <td><Button variant="danger">Delete</Button></td> */}
            </tr>
          
          </tbody>
        </Table>
          ))
        ) : (
                <p className="text-center">No Mess found.</p>
            )}
      </div>

      {/* Add Menu Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="menuName" className="mb-3">
              <Form.Label>Menu Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Menu Name" />
            </Form.Group>

            {/* <Form.Group controlId="price" className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Enter Price" />
            </Form.Group>

            <Form.Group controlId="description" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter Description" />
            </Form.Group>

            <Form.Group controlId="image" className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group> */}

            <Button variant="success" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default FoodMenu;
