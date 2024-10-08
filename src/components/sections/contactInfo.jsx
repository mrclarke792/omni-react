import React from 'react';

const ContactInfo = () => {
    return (
        <div className="contact-area pages-style pt-100 pb-75">
            <div className="container">
                <div className="row justify-content-center" data-cues="fadeIn">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-contact-card text-center">
                            <div className="icon">
                                <i className="ri-map-pin-line"></i>
                            </div>
                            <h3>Our Address:</h3>
                            <p>521684 Majadra Street, Stoke-on-Trent, England.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-contact-card text-center">
                            <div className="icon">
                                <i className="ri-phone-line"></i>
                            </div>
                            <h3>Contact Info:</h3>
                            <ul className="list-unstyled ps-0 mb-0">
                                <li>
                                    <a className="text-decoration-none" href="tel:+441234567890">+44 747 325 5886</a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-contact-card text-center">
                            <div className="icon">
                                <i className="ri-mail-open-line"></i>
                            </div>
                            <h3>Email:</h3>
                            <ul className="list-unstyled ps-0 mb-0">
                                <li>
                                    <a className="text-decoration-none" href="mailto:support@omnidigitalsolutions.com">support@omnidigitalsolutions.ai</a>
                                </li>
                                <li>
                                    <a className="text-decoration-none" href="mailto:info@omnidigitalsolutions.com">info@omnidigitalsolutions.ai</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
