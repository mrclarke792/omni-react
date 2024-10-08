import React from 'react'; 
import { motion } from 'framer-motion';
import ServiceCardFour from '../components/sections/services/serviceCardFour';
import service_bg from '../assets/images/services/services-5.jpg';
import SideBar from '../components/sections/sideBar';
import PageTitle from '../components/common/pageTitle';
import { ScrollRestoration } from 'react-router-dom';
import { zoomIn } from '../utlits/zoomIn';
import { slideUp } from '../utlits/slideUp';
import { servicesDataFour } from '../utlits/fackData/servicesDataFour';

const PaidAdvertising = () => {
  return (
    <>
      <PageTitle link="/Paid-Advertising" pageName="Paid-Advertising" />
      <div className="services-details-area pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <SideBar dActive={false} />
            </div>
            <div className="col-lg-8">
              <motion.div
                className="services-details-right-sidebar"
                initial="offscreen"
                whileInView="onscreen"
                variants={slideUp(1)}
                viewport={{ once: true, amount: 0 }}
              >
                <h1>Supercharge Your Growth with Expert Paid Ads Services</h1>
                <p>
                  At <strong>Omni Digital Solutions</strong>, we specialize in crafting targeted paid advertising campaigns that can transform your business in as little as three weeks. Our team leverages data-driven strategies to maximize your ROI and drive significant traffic to your website.
                </p>

                <motion.div
                  className="image"
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={zoomIn(1)}
                  viewport={{ once: true, amount: 0 }}
                >
                  <img src={service_bg} alt="services-image" />
                </motion.div>

                <div className="processing">
                  <h1>Why Choose Our Paid Ads Services?</h1>
                  <p>We take a strategic approach to paid advertising. Here’s how we do it:</p>
                  <ul>
                    <li><strong>Targeted Campaigns:</strong> We create ads that reach your specific audience, ensuring your message resonates with potential customers.</li>
                    <li><strong>Comprehensive Analysis:</strong> Our team conducts thorough market research to identify the best platforms and strategies for your business.</li>
                    <li><strong>Creative Ad Design:</strong> We design eye-catching ads that grab attention and drive clicks, all while maintaining your brand identity.</li>
                    <li><strong>Performance Tracking:</strong> We continuously monitor and optimize your campaigns, making data-driven adjustments to improve performance.</li>
                    <li><strong>Rapid Results:</strong> Our targeted strategies can produce measurable results within three weeks, giving your business a quick boost in visibility and sales.</li>
                  </ul>
                </div>

                <div className="processing-cards">
                  <h1>Our Comprehensive Paid Ads Solutions</h1>
                  <p>
                    Whether you need Google Ads, social media campaigns, or retargeting strategies, we have the expertise to drive results. Here are some of our services:
                  </p>
                  <ul>
                    <li><strong>Google Ads Management:</strong> We optimize your Google Ads to ensure you're getting the most out of your budget, driving qualified traffic to your site.</li>
                    <li><strong>Social Media Advertising:</strong> We create engaging ads on platforms like Facebook, Instagram, and LinkedIn to connect with your audience where they spend their time.</li>
                    <li><strong>Retargeting Campaigns:</strong> Bring back visitors who didn't convert the first time with strategic retargeting ads that encourage them to return.</li>
                    <li><strong>Analytics & Reporting:</strong> Our detailed reports provide insights into your campaign performance, helping you understand the impact of our efforts.</li>
                  </ul>
                  <div className="row">
                    {servicesDataFour.map(({ id, link, service_details, service_name }) => (
                      <div key={id} className="col-lg-6 col-md-6">
                        <div className="service-details">
                          <ServiceCardFour
                            id={id}
                            link={link}
                            service_details={service_details}
                            service_name={service_name}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="call-to-action">
                  <h2>Let’s Drive Your Business Forward Together</h2>
                  <p>
                    Are you ready to elevate your marketing efforts and see tangible results? Let’s talk about your paid ads project! We are committed to helping you achieve your business goals through effective advertising strategies.
                  </p>
                  <p>
                    Don’t miss out on the opportunity to enhance your brand visibility and drive conversions! Our tailored paid ads solutions can unlock your online potential and deliver rapid results.
                  </p>
                  <a href="/contact" className="btn btn-primary">Get in Touch</a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
};

export default PaidAdvertising;