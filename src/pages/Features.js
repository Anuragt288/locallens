// src/pages/Features.js
import React from 'react';
import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css"
import '../Features.css'

const Features = () => (
  <Container>
     <>
             <section id="features" className="w-100">
        <div className="row col-10 mx-auto text-center">
            <h3 className="display-3 fst-italic mb-1" id="id1" >Features</h3>
            <p className="mt-1 border-top border-success pt-3" id="id2">At PG and Mess Finder, we offer a range of services to help you find the perfect PG or hostel and Mess. Whether you're a student, working professional, or just looking for temporary accommodation, we've got you covered.</p>
        </div>

        <hr className="bg-dark-subtle" />

        <div className="d-flex justify-content-evenly column-gap-4 px-4 flex-wrap" id="id3">
            <div className="card shadow-lg m-4 border-0" id="id4" >
                <div className="card-header bg-transparent border-dark-subtle text-primary">
                    {/* <i className="fa-solid fa-magnifying-glass" id="id5"></i> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" style={{color:"#4FE1BD"}}>
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>

                </div>
                <div className="card-body">
                    <h4>Accommodation search:</h4>
                    <p>Our user-friendly platform allows you to search for PGs and hostels and Mess (Gokhalenagar) in Pune city, filter your search results based on your preferences, and book your accommodation with ease.</p>
                </div>
            </div>
            <div className="card shadow-lg m-4 border-0" id="id6">
                <div className="card-header bg-transparent border-dark-subtle text-primary">
                    {/* <i className="fa-solid fa-money-bill" id="id7"></i> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-journal-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0" style={{color:"#4FE1BD"}}/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" style={{color:"#4FE1BD"}}/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" style={{color:"#4FE1BD"}}/>
</svg>

                </div>
                <div className="card-body">
                    <h4>Accommodation booking:</h4>
                    <p>We offer a hassle-free booking process, allowing users to book their accommodation with just a few clicks. Users can view pictures, read reviews from other users, and compare prices before making their booking.</p>
                </div>
            </div>
            {/* <div className="card shadow-lg m-4 border-0" id="id8">
                <div className="card-header bg-transparent border-dark-subtle text-primary">
                    <i className="fa-solid fa-phone" id="id9"></i>
                </div>
                <div className="card-body">
                    <h4>24/7 customer support:</h4>
                    <p>Our team is available round the clock to answer your queries, resolve any issues you may face, and ensure that your stay is comfortable and memorable.</p>
                </div>
            </div> */}
            <div className="card shadow-lg m-4 border-0" id="id10">
                <div className="card-header bg-transparent border-dark-subtle text-primary">
                    {/* <i className="fa-regular fa-circle-check" id="id11"></i> */}

                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-check" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" style={{color:"#4FE1BD"}}/>
  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" style={{color:"#4FE1BD"}}/>
</svg>
                </div>
                <div className="card-body">
                    <h4>Verified listings:</h4>
                    <p>We only list verified and reliable PGs and hostels on our platform, ensuring that you have a safe and secure stay wherever you choose to stay.</p>
                </div>
            </div>
        </div>
    </section>
        </>
  </Container>
);

export default Features;
