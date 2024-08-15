
import React, { useState,useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import './ManageAccount.css';
import axios from 'axios';
//import pgImage from '../../public/images/pg-image.jpg'; // Importing image from public/images folder

const ManageMess = () => {

   // State for Mess form
   const [mess, setMess] = useState({
    messName: '',
        location: '',
        description: '',
        menuList: [{ menuName: '' }],
        image: '',
        userId: '',  // Assuming the user ID is 2 for this example
        price: ''
});

const [alertMessage, setAlertMessage] = useState('');
const [alertType, setAlertType] = useState('');

// Handle input changes
const handleChange = (e) => {
    setMess({ ...mess, [e.target.name]: e.target.value });
};


const handleMenuChange = (index, e) => {
  const newMenuList = mess.menuList.map((menuItem, i) => {
      if (i === index) {
          return { ...menuItem, menuName: e.target.value };
      }
      return menuItem;
  });
  setMess({ ...mess, menuList: newMenuList });
};

const addMenuItem = () => {
  setMess({ ...mess, menuList: [...mess.menuList, { menuName: '' }] });
};

const removeMenuItem = (index) => {
  const newMenuList = mess.menuList.filter((_, i) => i !== index);
  setMess({ ...mess, menuList: newMenuList });
};


// Handle form submission
const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/mess/addMess', mess)
    .then(response => {
      setAlertMessage('Mess created successfully!');
      setAlertType('success');
  })
  .catch(error => {
      setAlertMessage('Failed to create Mess. Please try again.');
      setAlertType('danger');
  });
};


 //Display Mess

 const [mss, getMess] = useState([]);

 useEffect(() => {
     // Fetch Mess added by a particular user (replace userId with actual user ID or handle it appropriately)
     axios.get('http://localhost:8081/mess/user/3')
         .then(response => getMess(response.data))
         .catch(error => console.error('Error fetching Mess:', error));
 }, []);

 const handleUpdate = (messId) => {
     // Handle update action (e.g., navigate to an update form)
     console.log('Update Mess with ID:', messId);
 };

 const handleDelete = (messId) => {
     // Handle delete action
     axios.delete(``)
         .then(response => {
             // Remove deleted Mess from the list
             getMess(mss.filter(ms => ms.id !== messId));
             console.log('Mess deleted successfully');
         })
         .catch(error => console.error('Error deleting Mess:', error));
 };


  return (
    <Container className="manage-account-container">
      <h1>Manage Mess</h1>

 {/* Alert Message */}
 {alertMessage && (
                <div className={`alert alert-${alertType}`} role="alert">
                    {alertMessage}
                </div>
            )}

      <Form onSubmit={handleSubmit} className="manage-account-form">
        <Form.Group as={Row} controlId="pgName" className="mb-3">
          <Form.Label column sm="2">
            Mess Name
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter Mess Name" name="messName" value={mess.messName} onChange={handleChange} required/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="location" className="mb-3">
          <Form.Label column sm="2">
            Mess Location
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter Mess Location" name="location" value={mess.location} onChange={handleChange} required/>
          </Col>
        </Form.Group>



{/* 
        <Form.Group as={Row} controlId="location" className="mb-3">
          <Form.Label column sm="2">
            Location
          </Form.Label>
          <Col sm="10">
            <Form.Control as="select">
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
            <Form.Control as="textarea" rows={3} placeholder="Enter Description" name="description" value={mess.description} onChange={handleChange} required/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="price" className="mb-3">
          <Form.Label column sm="2">
            Monthly Price-One time
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" placeholder="Enter Price" name="price" value={mess.price} onChange={handleChange} required/>
          </Col>
        </Form.Group>


        <Form.Group as={Row} controlId="photos" className="mb-3">
          <Form.Label column sm="2">
            Add Photos URL
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter Image URL" name="image" value={mess.image} onChange={handleChange} required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="userId" className="mb-3">
          <Form.Label column sm="2">
            UserId
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter userId" name="userId" value={mess.userId} onChange={handleChange} required/>
          </Col>
        </Form.Group>

      <div className="mb-3">
                    <label className="form-label">Menu List</label>
                    {mess.menuList.map((menuItem, index) => (
                        <div key={index} className="d-flex mb-2">
                            <input
                                type="text"
                                className="form-control me-2"
                                value={menuItem.menuName}
                                onChange={(e) => handleMenuChange(index, e)}
                                placeholder={`Menu Item ${index + 1}`}
                                required
                            />
                            {index > 0 && (
                                <Button variant="danger" onClick={() => removeMenuItem(index)}>
                                    Remove
                                </Button>
                            )}
                        </div>
                    ))}
                    <Button variant="primary" onClick={addMenuItem} style={{width:'150px',background:'#0059FF'}}>
                        Add Menu Item
                    </Button>
                </div>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 1 }}>
            <Button type="submit">Create Mess</Button>
          </Col>
        </Form.Group>
      </Form>


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
                                <h2>{ms.menuName}</h2>
                                <p>{ms.location}</p>
                                <p>{ms.description}</p>
                                <p className="price">₹{ms.price}/mo*</p>
                                <Row className="pg-actions">
                                    <Col sm="6">
                                        <Button
                                            variant="success"
                                            className="w-100"
                                            onClick={() => handleUpdate(ms.id)}
                                        >
                                            Update
                                        </Button>
                                    </Col>
                                    <Col sm="6">
                                        <Button
                                            variant="outline-success"
                                            className="w-100"
                                            onClick={() => handleDelete(ms.id)}
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
                <p className="text-center">No Mess found.</p>
            )}
        </div>
    </Container>
  );
};

export default ManageMess;
