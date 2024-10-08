import React from 'react';
import { motion } from "framer-motion";
import PageTitle from '../components/common/pageTitle';
import { Link, ScrollRestoration } from 'react-router-dom';
import { slideUp } from '../utlits/slideUp';

const PrivacyPolicy = () => {
  return (
    <>
      <PageTitle link={"Privacy Policy"} pageName={"Privacy Policy"} />
      <div className="privacy-policy-area pt-100 pb-75">
        <div className="container">
          <motion.div className="privacy-policy-content"
            initial="offscreen"
            whileInView="onscreen"
            variants={slideUp(1)}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="title">
              <h3>Our Website</h3>
              <p>Our website address is: <Link to="/"> https://omnidigitalsolutions.com/</Link></p>
            </div>
            <div className="title">
              <h3>Intellectual Property</h3>
              <p>All content, logos, and materials on this website are the intellectual property of Omni Digital Solutions. Unauthorized use is strictly prohibited.</p>
            </div>
            <div className="title">
              <h3>Information We Collect</h3>
              <p>We collect personal identification information from users in various ways, including when users visit our site, subscribe to newsletters, fill out forms, and engage with other services available on our site. Users may be asked for their name, email address, phone number, and other relevant details. We will collect this information only if voluntarily provided. Users can choose not to provide personally identifiable information, but this may prevent them from engaging in certain site-related activities.</p>
            </div>
            <div className="title">
              <h3>Use of Information</h3>
              <p>This site is provided by <strong>Omni Digital Solutions</strong>. We collect information in several ways to improve our services:</p>
              <ul className="list-unstyled ps-0 mb-0 use-of-info">
                <li><strong>1.</strong> Enhance user experience through tailored services.</li>
                <li><strong>2.</strong> Provide personalized content and advertising.</li>
                <li><strong>3.</strong> Communicate about our services and promotions.</li>
                <li><strong>4.</strong> Process transactions efficiently.</li>
                <li><strong>5.</strong> Conduct market research to improve our offerings.</li>
              </ul>
            </div>
            <div className="title">
              <h3>Links to Other Sites</h3>
              <p>Our site may contain links to external sites. Omni Digital Solutions is not responsible for the content or privacy practices of those sites. We encourage you to read the privacy policies of any linked sites.</p>
            </div>
            <div className="title">
              <h3>Confidential Information</h3>
              <p><strong>Omni Digital Solutions</strong> accepts the following payment methods:</p>
              <ul className="list-unstyled ps-0 mb-0 payment-methods">
                <li>Credit Card: Visa, MasterCard, American Express. Your card will be charged upon completion of your order.</li>
                <li><strong>Omni Digital Solutions</strong> features a secure checkout option that allows you to save your payment details for future transactions.</li>
                <li>PayPal: Easily complete purchases without entering your card information on our site. Your account will be charged upon order completion. For more information, visit <a href="https://www.paypal.com">paypal.com</a>.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
}

export default PrivacyPolicy;
