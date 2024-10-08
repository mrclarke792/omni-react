import React, { useState } from 'react';
import Title from '../common/title';

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(event.target); // Get form data
        setLoading(true); // Show loading spinner
        setSuccess(true); // Show success message immediately
        setError(null); // Reset error state

        // Directly submit the form
        fetch(event.target.action, {
            method: event.target.method,
            body: formData,
            headers: {
                'Accept': 'application/json',
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        })
        .catch((error) => {
            setError(error.message); // Show error message
            setSuccess(false); // Hide success message on error
        })
        .finally(() => {
            setLoading(false); // Hide loading spinner
            event.target.reset(); // Reset form fields after submission
        });
    };

    return (
        <div className="contact-form-area pb-75">
            <div className="container">
                <Title sectionName={"Send Us A Message"} sectionTitle={"Get in Touch With Us Today."} />

                <div className="contact-form-info" data-cue="slideInUp">
                    <form 
                        target="_blank" 
                        action="https://formsubmit.co/khamareclarke@gmail.com" 
                        method="POST" 
                        className="contact-form" 
                        id="contact" 
                        onSubmit={handleSubmit}
                    >
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" placeholder="Name" required />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" name="phone" className="form-control" placeholder="Phone" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea name="comments" className="form-control textarea" placeholder="Enter Your Comments" rows="3" required></textarea>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" required id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                I agree to the terms & conditions
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Send A Message</button>
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="your-thank-you-page.html" /> {/* Optional: Redirect to a thank you page */}

                        <div id="submissionResult" style={{ display: 'block', marginTop: '20px' }}>
                            {success && <span id="successMessage" style={{ color: 'green' }}>✔ Thanks for submitting!</span>}
                            {error && <span style={{ color: 'red' }}>🚫 {error}</span>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
