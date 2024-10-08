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

const SEOServices = () => {
  return (
    <>
      <PageTitle link="/seo-services" pageName="SEO Services" />
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
                <h1>Boost Your Online Visibility with Expert SEO Services</h1>
                <p>
                  At <strong>Omni Digital Solutions</strong>, we specialize in creating powerful SEO strategies designed to increase your website's visibility and drive organic traffic. Our team is dedicated to helping your business reach its full online potential through effective search engine optimization.
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
                  <h1>Why Choose Our SEO Services?</h1>
                  <p>
                    We take a comprehensive approach to SEO, ensuring that every aspect of your website is optimized for success:
                  </p>
                  <ul>
                    <li><strong>SEO Audit:</strong> We start with an in-depth analysis of your website to identify strengths, weaknesses, and opportunities for improvement.</li>
                    <li><strong>Keyword Research:</strong> Our experts conduct thorough research to find the best keywords that align with your business goals and target audience.</li>
                    <li><strong>On-Page Optimization:</strong> We optimize your website's content, structure, and meta tags to improve search engine rankings and user experience.</li>
                    <li><strong>Content Creation:</strong> Engaging and informative content is key. We create high-quality blog posts, articles, and website copy that resonate with your audience.</li>
                    <li><strong>Link Building:</strong> Our team develops a robust backlink strategy to enhance your site's authority and drive referral traffic.</li>
                  </ul>
                </div>

                <div className="processing-cards">
                  <h1>Our Comprehensive SEO Solutions</h1>
                  <p>
                    Whether you're a local business or an eCommerce giant, our SEO services are tailored to fit your needs. Here are some of the solutions we offer:
                  </p>
                  <ul>
                    <li><strong>Local SEO:</strong> Target your local audience effectively with strategies that boost your visibility in local search results.</li>
                    <li><strong>eCommerce SEO:</strong> Drive traffic to your online store with specialized tactics that improve product visibility and conversions.</li>
                    <li><strong>SEO Maintenance:</strong> We offer ongoing maintenance services to ensure your website stays optimized and up to date with the latest SEO trends.</li>
                    <li><strong>Analytics & Reporting:</strong> Our team provides detailed reports on your website’s performance, helping you understand the impact of our SEO efforts.</li>
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
                  <h2>Let’s Enhance Your Online Presence Together</h2>
                  <p>
                    Are you ready to improve your website’s visibility and attract more customers? Let’s discuss your SEO project! Our commitment to excellence ensures that we create tailored strategies to achieve your goals.
                  </p>
                  <p>
                    Don’t let your competitors outshine you! Our expert SEO solutions can elevate your brand visibility, increase organic traffic, and drive conversions. Together, we can unlock your online potential!
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

export default SEOServices;