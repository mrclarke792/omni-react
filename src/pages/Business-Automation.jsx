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

const BusinessAutomation = () => {
  return (
    <>
      <PageTitle link="/Business-Automation" pageName="Business Automation Services" />
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
                <h1>Streamline Your Operations with Our Business Automation Services</h1>
                <p>
                  At <strong>Omni Digital Solutions</strong>, we specialize in implementing cutting-edge business automation solutions that enhance efficiency and drive productivity. Our goal is to help you automate repetitive tasks, allowing you to focus on what matters most—growing your business.
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
                  <h1>Why Choose Our Business Automation Services?</h1>
                  <p>
                    We provide tailored automation solutions to meet your specific needs. Here’s how we can help:
                  </p>
                  <ul>
                    <li><strong>Needs Assessment:</strong> We start with a thorough analysis of your existing processes to identify automation opportunities that will save you time and resources.</li>
                    <li><strong>Custom Automation Solutions:</strong> Our team develops bespoke automation systems that integrate seamlessly with your workflows and tools.</li>
                    <li><strong>Improved Efficiency:</strong> By automating repetitive tasks, we help reduce human error and increase operational efficiency.</li>
                    <li><strong>Data-Driven Insights:</strong> Our automation solutions provide real-time analytics to help you make informed decisions based on accurate data.</li>
                    <li><strong>Ongoing Support:</strong> We offer continuous support to ensure your automation systems run smoothly and effectively.</li>
                  </ul>
                </div>

                <div className="processing-cards">
                  <h1>Our Business Automation Solutions</h1>
                  <p>
                    From automating marketing processes to streamlining sales workflows, our solutions can transform your business. Here are some of our services:
                  </p>
                  <ul>
                    <li><strong>Marketing Automation:</strong> We implement systems that automate your marketing campaigns, lead nurturing, and customer communications.</li>
                    <li><strong>Sales Process Automation:</strong> Our solutions help streamline your sales processes, from lead generation to closing deals.</li>
                    <li><strong>Customer Relationship Management:</strong> We offer custom CRM solutions that automate customer interactions and improve relationships.</li>
                    <li><strong>Workflow Automation:</strong> Our team can help you automate internal workflows, improving collaboration and productivity.</li>
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
                  <h2>Let’s Optimize Your Business Processes Together</h2>
                  <p>
                    Are you ready to enhance your operational efficiency with our business automation solutions? Let’s discuss how we can tailor our services to meet your needs!
                  </p>
                  <p>
                    Don’t miss the chance to revolutionize your business operations! Our customized automation solutions can streamline your processes and drive growth. Let’s unlock your business potential together!
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

export default BusinessAutomation;
