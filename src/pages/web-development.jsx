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

const WebDevelopment = () => {
  return (
    <>
      <PageTitle link="/web-development" pageName="Web Development Services" />
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
                <h1>Transform Your Business with Professional Web Development</h1>
                <p>
                  At <strong>Omni Digital Solutions</strong>, we specialize in delivering cutting-edge web development services that elevate your digital presence. Our team builds fast, secure, and scalable websites tailored to meet your business needs, ensuring optimal user experience and performance.
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
                  <h1>Why Choose Our Web Development Services?</h1>
                  <p>
                    We take a personalized approach to web development. Here’s how we do it:
                  </p>
                  <ul>
                    <li><strong>Initial Consultation:</strong> We begin by diving deep into your vision, goals, and target audience. Understanding what you want is key to creating a successful website.</li>
                    <li><strong>Custom Development:</strong> Our talented developers create bespoke websites that not only look stunning but also engage users effectively.</li>
                    <li><strong>Responsive Design:</strong> In today's mobile-first world, we ensure your site looks great on every device, from desktops to smartphones.</li>
                    <li><strong>SEO Optimization:</strong> Our websites are built with SEO best practices in mind, helping you rank higher on search engines and reach more potential customers.</li>
                    <li><strong>Post-Launch Support:</strong> Our relationship doesn’t end once your site goes live. We provide ongoing support to keep everything running smoothly and make necessary adjustments.</li>
                  </ul>
                </div>

                <div className="processing-cards">
                  <h1>Our Web Development Solutions</h1>
                  <p>
                    Whether you need a simple landing page or a complex web application, we’ve got the expertise to make it happen. Here are some of our solutions:
                  </p>
                  <ul>
                    <li><strong>eCommerce Development:</strong> Ready to sell online? We create online stores that deliver fantastic shopping experiences for your customers.</li>
                    <li><strong>Content Management Systems:</strong> Our custom CMS solutions make managing your content effortless, so you can focus on what you do best.</li>
                    <li><strong>Website Maintenance:</strong> We offer ongoing maintenance services to keep your site updated, secure, and performing at its best.</li>
                    <li><strong>Web Applications:</strong> Looking to build powerful web applications? Our team specializes in creating solutions that streamline operations and boost productivity.</li>
                  </ul>
                  <div className="row">
                    {servicesDataFour.map(({ id, link, service_details, service_name }) => {
                      return (
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
                      );
                    })}
                  </div>
                </div>

                <div className="call-to-action">
                  <h2>Let’s Build Your Digital Future Together</h2>
                  <p>
                    Are you ready to elevate your online presence with a stunning, high-performance website? Let’s talk about your web development project! We're committed to creating exceptional digital experiences tailored to your needs.
                  </p>
                  <p>
                    Don’t miss out on this opportunity! Our tailored web solutions can enhance your brand visibility, improve user engagement, and drive conversions. Let’s unlock your online potential together!
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

export default WebDevelopment;
