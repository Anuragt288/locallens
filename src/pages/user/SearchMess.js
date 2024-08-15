// src/pages/SearchMess.js
import React, { useState } from 'react';
import './SearchMess.css';
import { Container } from 'react-bootstrap';

const availableMesses = [
  {
    id: 1,
    name: 'Annapurna Mess',
    location: 'Gokhalenagar',
    type: 'Veg/Non-Veg',
    image: '/images/ms2.jpeg',
    menu: [
      { id: 1, name: 'Veg Thali', price: 150, description: 'Rice, Dal, Sabzi, Roti' },
      { id: 2, name: 'Paneer Butter Masala', price: 120, description: 'Paneer in buttery gravy' },
      { id: 3, name: 'Aloo Paratha', price: 50, description: 'Stuffed Paratha with Curd' },
      { id: 4, name: 'Chicken Biryani', price: 180, description: 'Basmati rice with chicken' },
    ],
  },
  {
    id: 2,
    name: 'Indrayani Mess',
    location: 'Gokhalenagar',
    type: 'Veg',
    image: '/images/ms4.jpeg',
    menu: [
        { id: 1, name: 'Veg Thali', price: 150, description: 'Rice, Dal, Sabzi, Roti' },
        { id: 2, name: 'Paneer Butter Masala', price: 120, description: 'Paneer in buttery gravy' },
        { id: 3, name: 'Aloo Paratha', price: 50, description: 'Stuffed Paratha with Curd' },
    ],
  },
];

const SearchMess = () => {
  const [location, setLocation] = useState('');
  const [selectedMess, setSelectedMess] = useState(null);

  const handleSearch = () => {
    // Logic to filter messes based on location
  };

  const handleViewMenuClick = (mess) => {
    setSelectedMess(mess);
  };

  return (
    <Container>
      <h1 style={{marginTop:'10px'}}>View Mess & Menu</h1>
      {/* <div className="search-container">
        <div className="dropdown-container">
          <label htmlFor="location">Search by Location:</label>
          <select id="location" value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">Choose...</option>
            <option value="gokhalenagar">Gokhalenagar</option>
            <option value="shivajinagar">Shivajinagar</option>
            <option value="modelcolony">Model Colony</option>
            <option value="karvenagar">Karvenagar</option>
          </select>
        </div>
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div> */}
      <div className="mess-list-container">
        {availableMesses.map((mess) => (
          <div className="mess-card" key={mess.id}>
            <div className="mess-image-container">
              <img src={mess.image} alt={mess.name} className="mess-image" />
            </div>
            <div className="mess-info">
              <h2>{mess.name}</h2>
              <p>{mess.location}</p>
              <p>Description: {mess.type}</p>
              <button className="view-menu-button" onClick={() => handleViewMenuClick(mess)}>View Menu</button>
            </div>
          </div>
        ))}
      </div>

      {selectedMess && (
        <div className="menu-list-container">
          <h2>Menu for {selectedMess.name}</h2>
          <table className="menu-table">
            <thead>
              <tr>
                <th>Sr-No</th>
                <th>Menu Name</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {selectedMess.menu.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Container>
  );
};

export default SearchMess;
