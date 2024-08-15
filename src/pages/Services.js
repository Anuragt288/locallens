import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import '../Features.css'
import axios from "axios";

export default function Service(){

  const [pgs,setPgs] = useState([]);
  const [mess,setMess] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8081/pg/findAll')
    .then(response => setPgs(response.data))
    .catch(error => console.error('Error',error));
  }, []);


  useEffect(()=> {
    axios.get('http://localhost:8081/mess/findAll')
    .then(response => setMess(response.data))
    .catch(error => console.error('Error',error))
  }, []);

    return(
        <>
{/* Display Pgs  */}
<div className="container mt-4">
            <h1 className="text-center mb-4">Available PGs</h1>
            <div className="row">
                {pgs.map(pg => (
                    <div key={pg.pgId} className="col-md-4">
                        <div className="card mb-4 pg-card" style={{width:'350px'}}>
                            <img src={pg.image} className="card-img-top" alt={pg.pgName} />
                            <div className="card-body">
                                <h5 className="card-title">{pg.pgName}</h5>
                                <p className="card-text">{pg.description}</p>
                                <p className="card-text"><strong>Location:</strong> {pg.location}</p>
                                <p className="card-text"><strong>Price:</strong> ${pg.price}</p>
                                <p className="card-text"><strong>Rooms:</strong> {pg.roomCount}</p>
                                <a href="#sigup" className="btn btn-primary">Book Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

{/* Display Mess */}
<div className="container mt-4">
            <h1 className="text-center mb-4">Available Mess</h1>
            <div className="row">
                {mess.map(ms => (
                    <div key={ms.messId} className="col-md-4">
                        <div className="card mb-4 pg-card" style={{width:'350px'}}>
                            <img src={ms.image} className="card-img-top" alt={ms.messName} />
                            <div className="card-body">
                                <h5 className="card-title">{ms.messName}</h5>
                                <p className="card-text">{ms.description}</p>
                                <p className="card-text"><strong>Location:</strong> {ms.location}</p>
                                <a href="#sigup" className="btn btn-primary">Search</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>



        </>
    );
}