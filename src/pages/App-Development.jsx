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


const AppDevelopment = () => {
  return (
    <>
      <PageTitle link="/app-development" pageName="App Development Services" />
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
                <h1>Revolutionize Your Business with Custom App Development</h1>
                <p>
                  At <strong>Omni Digital Solutions</strong>, we specialize in creating innovative mobile and web applications that drive engagement and elevate user experiences. Our skilled team develops scalable and robust applications tailored to your business needs.
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
                  <h1>Why Choose Our App Development Services?</h1>
                  <p>
                    We take a customer-centric approach to app development. Here’s how we do it:
                  </p>
                  <ul>
                    <li><strong>Understanding Your Needs:</strong> We collaborate closely with you to understand your vision, goals, and target audience, ensuring your app meets your expectations.</li>
                    <li><strong>Custom Solutions:</strong> Our developers craft unique applications that cater to your specific requirements, providing an exceptional user experience.</li>
                    <li><strong>Cross-Platform Compatibility:</strong> We build apps that work seamlessly across all devices and platforms, ensuring maximum reach for your business.</li>
                    <li><strong>Intuitive UI/UX Design:</strong> We focus on creating user-friendly interfaces that enhance usability and keep users engaged.</li>
                    <li><strong>Post-Launch Support:</strong> Our support doesn’t stop at launch; we offer ongoing maintenance and updates to ensure your app remains relevant and functional.</li>
                  </ul>
                </div>

                <div className="processing-cards">
                  <h1>Our Comprehensive App Development Solutions</h1>
                  <p>
                    From native mobile applications to web apps, our expertise can help bring your ideas to life. Here are some of our services:
                  </p>
                  <ul>
                    <li><strong>Mobile App Development:</strong> We create feature-rich mobile applications for iOS and Android that enhance user engagement.</li>
                    <li><strong>Web Application Development:</strong> Our team builds powerful web apps designed to streamline your business operations and improve user interactions.</li>
                    <li><strong>App Maintenance and Support:</strong> We provide continuous support and maintenance to keep your app running smoothly and up to date.</li>
                    <li><strong>App Integration Services:</strong> Our solutions ensure seamless integration with existing systems and third-party APIs for a cohesive user experience.</li>
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
                  <h2>Let’s Create Exceptional Apps Together</h2>
                  <p>
                    Are you ready to transform your business with a custom app that meets your unique needs? Let’s discuss your app development project! We're committed to delivering outstanding solutions that propel your business forward.
                  </p>
                  <p>
                    Don't miss the opportunity to enhance user engagement and drive growth with our tailored app solutions. Let’s unlock your app's potential together!
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

export default AppDevelopment;
