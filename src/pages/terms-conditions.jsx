import React from 'react';
import { motion } from "framer-motion";
import PageTitle from '../components/common/pageTitle';
import { Link, ScrollRestoration } from 'react-router-dom';
import { slideUp } from '../utlits/slideUp';

const TermsConditions = () => {
  return (
    <>
      <PageTitle link={"Terms & Conditions"} pageName={"Terms & Conditions"} />
      <div className="terms-conditions-area pt-100 pb-75">
        <div className="container">
          <motion.div className="terms-conditions-content"
            initial="offscreen"
            whileInView="onscreen"
            variants={slideUp(1)}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="title">
              <h3>Omni Digital Solutions Overview</h3>
              <p>At Omni Digital Solutions, we may collect personal identification information from users in various ways, including when users visit our site, subscribe to our newsletter, fill out a form, or engage in other activities, services, or resources we provide on our site. Users may be asked for their name, email address, mailing address, phone number, and company name. We will collect personal <strong>identification</strong> information only if users voluntarily provide such information to us. Users can always refuse to provide personally identifiable information, although it may prevent them from engaging in certain site-related activities.</p>
            </div>
            <div className="title">
              <h3>General Permission to Use and Access Limitations</h3>
              <p>This site is operated by <strong>Omni Digital Solutions</strong>. We collect information in several ways from different parts of this site.</p>
              <ul className="list-unstyled ps-0 mb-0 general ">
                <li>
                  <strong>1.</strong>
                  Complimentary consultation for new clients.
                </li>
                <li>
                  <strong>2.</strong>
                  Access to resources and tools for project management.
                </li>
                <li>
                  <strong>3.</strong>
                  Regular updates and insights on industry trends.
                </li>
                <li>
                  <strong>4.</strong>
                  User-friendly support channels for customer inquiries.
                </li>
                <li>
                  <strong>5.</strong>
                  All services are designed to align with best practices in digital marketing and web development.
                </li>
              </ul>
            </div>
            <div className="title">
              <h3>Confidential Information</h3>
              <p><strong>Omni Digital Solutions</strong> accepts the following payment methods:</p>
              <ul className="list-unstyled ps-0 mb-0 confidential">
                <li>Credit Card: Visa, MasterCard, Discover, American Express. The total will be charged to your card upon completion of the service.</li>
                <li><strong>Omni Digital Solutions</strong> features secure payment gateways to ensure the safety of your transactions.</li>
                <li>PayPal: Use your PayPal account for a hassle-free payment process. Your account will be charged once the service is confirmed. To register for a PayPal account, visit <a href="https://www.paypal.com">paypal.com</a>.</li>
              </ul>
            </div>
            <div className="title">
              <h3>Linking to this Site</h3>
              <p>We encourage links to our site, provided they are done in a way that is fair and legal and does not damage our reputation or take advantage of it. Any links must comply with the following conditions:</p>
              <ul className="list-unstyled ps-0 mb-0">
                <li>Links should not suggest any form of association, approval, or endorsement on our part where none exists.</li>
                <li>Links must be from websites that are appropriate and not offensive or objectionable.</li>
              </ul>
            </div>
            <div className="title">
              <h3>Intellectual Property</h3>
              <p>All content and materials on this site, including text, graphics, logos, and software, are the property of <strong>Omni Digital Solutions</strong> or its content suppliers and are protected by applicable copyright, trademark, and other intellectual property laws. Unauthorized use of any materials on this site may violate copyright, trademark, and other laws.</p>
            </div>
            <div className="title">
              <h3>Our Website</h3>
              <p>Our website address is: <Link to="/">https://OmniDigitalSolutions.ai/</Link></p>
            </div>
          </motion.div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
}

export default TermsConditions;
