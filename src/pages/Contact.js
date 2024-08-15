import React from "react";
import "bootstrap/dist/css/bootstrap.css"

export default function Contact(){
    return(
    <>
        
    <section style={{minHeight: "60vh",fontFamily:"sans-serif"}} id="help">
        <h3 className="display-3 text-center fst-italic" style={{marginTop: "8rem"}}>Contact Us</h3>
        
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-5">
            <div className="col-lg-5">
                <img className="img-fluid" src="/images/contact.svg" alt="Contact Us" style={{width: "100%"}} />
            </div>
            <form id='contact-form' action="https://api.web3forms.com/submit" method="POST" className="col-lg-5 validation-required" novalidate>
                <div className="form-group">
                <input type="hidden" name="access_key" value="a65a96e5-a1bc-42af-8d45-c66cf4e91cc5" />
                    <label for="email" className="col-4 col-form-label">Email</label>
                    <div className="col-12">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                {/* <div className="input-group-text">
                                    <i className="fa fa-address-card"></i>
                                </div> */}
                            </div>
                            <input id="email" name="email" placeholder="Enter email" type="email" className="form-control" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="subject" className="col-4 col-form-label">Subject</label>
                    <div className="col-12">
                        <input id="subject" name="subject" placeholder="Enter subject" type="text" minlength="3" maxlength="100" className="form-control" required />
                    </div>
                </div>
                <div className="form-group">
                    <label for="content" className="col-4 col-form-label">Message</label>
                    <div className="col-12">
                        <textarea id="content" name="content" placeholder="Enter Message" minlength="20" maxlength="1000" className="form-control" rows="6" required></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="d-flex justify-content-center">
                        <button name="submit" type="submit" className="btn btn-success">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </section>

    </>
    );
}