import React from 'react'
import { motion } from "framer-motion"

import ServiceCardFour from '../components/sections/services/serviceCardFour'
import service_image from "../assets/images/services/services-5.jpg"
import SideBar from '../components/sections/sideBar'
import PageTitle from '../components/common/pageTitle'
import { ScrollRestoration } from 'react-router-dom'
import { zoomIn } from '../utlits/zoomIn'
import { slideUp } from '../utlits/slideUp'
import { servicesDataFour } from '../utlits/fackData/servicesDataFour'

const ServiceDetails = () => {
  return (
    <>
      <PageTitle link={"Service Details"} pageName={"Service Details"} />
      <div className="services-details-area pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <SideBar dActive={false} />
            </div>
            <div className="col-lg-8">
              <motion.div className="services-details-right-sidebar"
                initial="offscreen"
                whileInView="onscreen"
                variants={slideUp(1)}
                viewport={{ once: true, amount: 0 }}
              >
                <h1>Empowering Your Digital Landscape with Our Services.</h1>
                <p>At Omni Digital Solutions, we offer a comprehensive range of services tailored to meet your unique business needs. From full-stack web development to digital marketing, we ensure your brand thrives in the digital space.</p>

                <motion.div className="image"
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={zoomIn(1)}
                  viewport={{ once: true, amount: 0 }}
                >
                  <img src={service_image} alt="services-image" />
                </motion.div>

                <div className="processing">
                  <h1>Our Process: Delivering Excellence Every Step of the Way</h1>
                  <p>We follow a structured approach to ensure the success of our projects:</p>
                  <ul>
                    <li><strong>Consultation:</strong> Understanding your requirements and objectives.</li>
                    <li><strong>Strategy Development:</strong> Crafting a tailored plan for your business.</li>
                    <li><strong>Implementation:</strong> Executing our strategy with precision and expertise.</li>
                    <li><strong>Feedback and Iteration:</strong> Continuously improving based on your input.</li>
                    <li><strong>Support:</strong> Providing ongoing assistance and optimization.</li>
                  </ul>
                </div>

                <div className="processing-cards">
                  <h1>Our Services</h1>
                  <div className="row">
                    {
                      servicesDataFour.map(({ id, link, service_details, service_name }) => {
                        return (
                          <div key={id} className="col-lg-6 col-md-6">
                            <div className='service-details'>
                              <ServiceCardFour id={id} link={link} service_details={service_details} service_name={service_name} />
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>

                <div className="call-to-action">
                  <h2>Ready to Elevate Your Digital Presence?</h2>
                  <p>Contact us today to discuss how we can help your business thrive online. Whether you need a new website, SEO services, or digital marketing strategies, we’re here to assist you!</p>
                  <a href="/contact" className="btn btn-primary">Get in Touch</a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  )
}

export default ServiceDetails;
