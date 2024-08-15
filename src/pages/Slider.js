import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

export default function Slider(){
    return(
        <>
        <div className="container">
            <div id="carouselExampleInterval" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="./images/back1.jpg" className="d-block w-100" alt="..." style={{height:"700px"}}/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="./images/sl2.webp" className="d-block w-100" alt="..." style={{height:"700px"}}/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="./images/sl3.jpg" className="d-block w-100 img-fluid" alt="..." style={{height:"700px"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
        </>
    );
}