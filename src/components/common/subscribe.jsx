import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '../../utlits/slideUp';

const Subscribe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);
    setFormError(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formsubmit.co/khamareclarke@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset(); // Reset form fields on success
      } else {
        const data = await response.json();
        setFormError(`There was a problem submitting your form: ${JSON.stringify(data.errors)}`);
      }
    } catch (error) {
      setFormError(`There was a problem submitting your form: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-area">
      <div className="container">
        <div className="contact-info-area">
          <motion.div
            className="row align-items-center"
            initial="offscreen"
            whileInView="onscreen"
            variants={slideUp()}
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* Left column: Contact Info */}
            <div className="col-lg-3 col-sm-6 pe-0">
              <div className="single-contact-info">
                <div className="contact-call d-flex align-items-center">
                  <div className="icon">{   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <g clipPath="url(#clip0_288_89)">
                                                <path d="M13.5416 1.04162C13.5416 0.765354 13.6514 0.500402 13.8467 0.305052C14.0421 0.109701 14.307 -4.54765e-05 14.5833 -4.54765e-05C17.345 0.00298744 19.9928 1.10143 21.9456 3.05428C23.8985 5.00712 24.9969 7.65488 24.9999 10.4166C24.9999 10.6929 24.8902 10.9578 24.6948 11.1532C24.4995 11.3485 24.2345 11.4583 23.9583 11.4583C23.682 11.4583 23.4171 11.3485 23.2217 11.1532C23.0264 10.9578 22.9166 10.6929 22.9166 10.4166C22.9141 8.20725 22.0354 6.08907 20.4731 4.5268C18.9108 2.96454 16.7927 2.08577 14.5833 2.08329C14.307 2.08329 14.0421 1.97354 13.8467 1.77819C13.6514 1.58284 13.5416 1.31789 13.5416 1.04162ZM14.5833 6.24995C15.6883 6.24995 16.7482 6.68894 17.5296 7.47034C18.311 8.25174 18.7499 9.31155 18.7499 10.4166C18.7499 10.6929 18.8597 10.9578 19.055 11.1532C19.2504 11.3485 19.5153 11.4583 19.7916 11.4583C20.0679 11.4583 20.3328 11.3485 20.5282 11.1532C20.7235 10.9578 20.8333 10.6929 20.8333 10.4166C20.8316 8.75953 20.1726 7.17077 19.0009 5.99903C17.8291 4.82729 16.2404 4.16828 14.5833 4.16662C14.307 4.16662 14.0421 4.27637 13.8467 4.47172C13.6514 4.66707 13.5416 4.93202 13.5416 5.20829C13.5416 5.48455 13.6514 5.74951 13.8467 5.94486C14.0421 6.14021 14.307 6.24995 14.5833 6.24995ZM24.0552 17.4364C24.6588 18.0417 24.9978 18.8617 24.9978 19.7166C24.9978 20.5715 24.6588 21.3915 24.0552 21.9968L23.1072 23.0895C14.576 31.2572 -6.18443 10.502 1.85724 1.9437L3.05515 0.902038C3.66116 0.315243 4.47383 -0.00936935 5.31734 -0.00157168C6.16086 0.00622599 6.96739 0.345807 7.56245 0.943705C7.59474 0.975996 9.52495 3.48329 9.52495 3.48329C10.0977 4.08498 10.4165 4.88426 10.4152 5.71496C10.4138 6.54566 10.0924 7.34388 9.51765 7.9437L8.3114 9.46037C8.97895 11.0824 9.96043 12.5565 11.1994 13.798C12.4384 15.0395 13.9106 16.0239 15.5312 16.6947L17.0572 15.4812C17.6571 14.9069 18.4552 14.5859 19.2857 14.5847C20.1161 14.5836 20.9151 14.9024 21.5166 15.475C21.5166 15.475 24.0229 17.4041 24.0552 17.4364ZM22.6218 18.951C22.6218 18.951 20.1291 17.0333 20.0968 17.001C19.8822 16.7882 19.5923 16.6688 19.29 16.6688C18.9878 16.6688 18.6979 16.7882 18.4833 17.001C18.4552 17.0302 16.3541 18.7041 16.3541 18.7041C16.2125 18.8168 16.044 18.8907 15.8652 18.9185C15.6864 18.9462 15.5034 18.9269 15.3343 18.8625C13.2348 18.0808 11.3278 16.857 9.74248 15.274C8.15717 13.691 6.93057 11.7858 6.14578 9.68746C6.07619 9.51605 6.05351 9.32921 6.08005 9.14614C6.1066 8.96307 6.18142 8.79037 6.29682 8.64579C6.29682 8.64579 7.97078 6.5437 7.9989 6.51662C8.21168 6.30202 8.33107 6.01205 8.33107 5.70985C8.33107 5.40765 8.21168 5.11768 7.9989 4.90308C7.96661 4.87183 6.0489 2.37704 6.0489 2.37704C5.83109 2.18173 5.54682 2.07714 5.25437 2.08469C4.96192 2.09224 4.68343 2.21137 4.47599 2.41766L3.27807 3.45933C-2.59901 10.526 15.3916 27.5187 21.5843 21.6666L22.5333 20.5729C22.7557 20.3669 22.8892 20.0825 22.9057 19.7799C22.9223 19.4772 22.8204 19.18 22.6218 18.951Z" fill="#6600FC" />
                                            </g>
                                        </svg>
}</div>
                  <div className="content">
                    <h3>Give Us A Call</h3>
                    <a className="text-decoration-none" href="tel:+447473255886">+447-4732-55886</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Center column: Social Links */}
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="single-contact-info">
                <div className="contact-social">
                  <ul className="list-unstyled ps-0 mb-0 list">
                    <li className="d-inline-block">
                      <a
                        className="text-decoration-none"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/OmniDigitalSolutionssAI"
                      >
                        <i className="ri-facebook-circle-line"></i>
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a
                        className="text-decoration-none"
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/"
                      >
                        <i className="ri-twitter-x-line"></i>
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a
                        className="text-decoration-none"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com//omnidigitalsolutions/"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a
                        className="text-decoration-none"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/"
                      >
                        <i className="ri-linkedin-line"></i>
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a
                        className="text-decoration-none"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.google.com/business/"
                      >
                        <i className="ri-google-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right column: Form */}
            <div className="col-lg-6">
              <div className="single-contact-info">
                <div className="contact-submit d-flex align-items-center justify-content-between">
                  <h3>Join Our Newsletter</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        required
                        className="form-control"
                        placeholder="Enter Your Email"
                      />
                      <button type="submit">
                        {isSubmitting ? (
                          <span>⏳ Submitting...</span>
                        ) : (
                          <>
                            <i className="ri-send-plane-fill"></i> Submit Now
                          </>
                        )}
                      </button>
                    </div>

                    <div id="submissionResult" style={{ display: isSubmitted || formError ? 'block' : 'none' }}>
                      {isSubmitted && (
                        <span id="successMessage" style={{ color: 'green' }}>✔ Thanks for submitting!</span>
                      )}
                      {formError && (
                        <span id="errorMessage" style={{ color: 'red' }}>{formError}</span>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;