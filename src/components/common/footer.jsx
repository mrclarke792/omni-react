import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import logo from "../../assets/images/white-logo.png";
import Subscribe from './subscribe';
import { slideUp } from '../../utlits/slideUp';

const Footer = () => {
  const footerLink = [
    {
      id: 1,
      name: "Quick Links",
      links: [
        { id: 1, link: "/about", label: "About Us" },
        { id: 2, link: "/services", label: "Our Services" },
        { id: 3, link: "/testimonial", label: "Testimonials" },
        { id: 4, link: "/blog-details", label: "Our Blog" },
      ]
    },
    {
      id: 2,
      name: "Resources",
      links: [
        { id: 1, link: "/faq", label: "FAQs" },
        { id: 2, link: "/privacy-policy", label: "Privacy Policy" },
        { id: 3, link: "/terms-conditions", label: "Terms & Conditions" },
        { id: 4, link: "/contact", label: "Contact Us" },
      ]
    },
  ];

  return (
    <footer>
      <Subscribe />
      <div className="footer-area">
        <div className="container">
          <motion.div className="footer-info-area"
            initial="offscreen"
            whileInView="onscreen"
            variants={slideUp(1)}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="row">
              <div className="col-lg-4">
                <div className="single-footer-info ms-0">
                  <Link className="text-decoration-none logo" to="/">
                    <img src={logo} alt="Omni Digital Solutions Logo" />
                  </Link>
                  <p>At Omni Digital Solutions, we know that navigating the digital landscape can be challenging. Our mission is to simplify your journey by providing expert web and app development, cutting-edge SEO solutions, and effective paid advertising strategies that drive your business's online success.</p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6 col-md-4">
                    <div className="single-footer-info">
                      <h3>Contact Us</h3>
                      <ul className="list-unstyled ps-0 mb-0">
                        <li><strong>Address:</strong> 521684 Majadra Street, Victoria Road, New York</li>
                        <li><strong>Email:</strong> <a className="text-decoration-none" href="mailto:info@omnidigitalsolutions.ai">info@omnidigitalsolutions.ai</a></li>
                        <li><strong>Phone:</strong> <a className="text-decoration-none" href="tel:+555472543526">+44 747 3255 886</a></li>
                      </ul>
                    </div>
                  </div>
                  {
                    footerLink.map(({ id, links, name }) => (
                      <div key={id} className="col-lg-4 col-sm-6 col-md-4">
                        <div className="single-footer-info">
                          <h3>{name}</h3>
                          <ul className="list-unstyled ps-0 mb-0">
                            {
                              links.map(({ id, label, link }) => (
                                <li key={id}>
                                  <Link className="text-decoration-none" to={link}>{label}</Link>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-content text-center" data-cue="slideInUp">
            <p>Copyright © 2024 <strong>Omni Digital Solutions</strong>. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
