import React from 'react';
import { motion } from "framer-motion";
import about_image from "../../../assets/images/about/about-7.png";
import { Link } from 'react-router-dom';
import { slideUp } from '../../../utlits/slideUp';

const AboutFour = () => {
    return (
        <div className="about-area pt-100 pb-75">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <motion.div className="about-image"
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={slideUp(1)}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <img src={about_image} alt="About Omni Digital Solutions" />
                        </motion.div>
                    </div>
                    <div className="col-lg-6">
                        <motion.div className="about-content about-style"
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={slideUp(2)}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <div className="title">
                                <span className="d-block">About Omni Digital Solutions</span>
                                <h2>Your Partner in Digital Transformation</h2>
                                <p>At Omni Digital Solutions, we empower businesses to thrive in the digital landscape. Our expertise in web and app development, SEO, and digital marketing ensures that your online presence is not only visible but impactful. We are committed to delivering innovative solutions tailored to your unique needs, driving success in every project we undertake.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="about-item">
                                        <div className="point">
                                            200+
                                        </div>
                                        <h3>Global Clients</h3>
                                        <p>We have successfully partnered with over 200 clients across various industries, helping them navigate their digital journeys.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="about-item">
                                        <div className="point">
                                            95%
                                        </div>
                                        <h3>Client Satisfaction</h3>
                                        <p>Our commitment to excellence is reflected in our 95% client satisfaction rate, showcasing our dedication to quality and service.</p>
                                    </div>
                                </div>
                            </div>
                            <Link className="demo text-decoration-none" to="/contact">Request a Quote</Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutFour;
