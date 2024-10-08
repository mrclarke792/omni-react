import React from 'react';
import { motion } from "framer-motion";
import Memory from '../../assets/icons/memory';
import Lock from '../../assets/icons/lock';
import Security from '../../assets/icons/security';
import { Link } from 'react-router-dom';
import { zoomIn } from '../../utlits/zoomIn';
import Title from '../common/title';

const SecurityTwo = () => {
    const services = [
        {
            id: 1,
            icon: <Memory />,
            service_name: "Web Development",
            details: "Building responsive and optimized websites tailored to meet business needs.",
            link: "/services/web-development"
        },
        {
            id: 2,
            icon: <Lock />,
            service_name: "SEO Services",
            details: "Enhancing online visibility with comprehensive search engine optimization strategies.",
            link: "/services/seo"
        },
        {
            id: 3,
            icon: <Security />,
            service_name: "Digital Marketing",
            details: "Driving traffic and generating leads through data-driven marketing campaigns.",
            link: "/services/digital-marketing"
        },
    ];

    return (
        <section className="security-area pt-100 pb-75">
            <div className="container">
                <Title sectionName={"What We Do"} sectionTitle={"Introducing Our Professional Services."} />

                <div className="row justify-content-center" data-cues="fadeIn">
                    {
                        services.map(({ id, details, icon, link, service_name }) => {
                            return (
                                <motion.div key={id} className="col-lg-4 col-sm-6"
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    variants={zoomIn(id)}
                                    viewport={{ once: true, amount: 0.4 }}
                                >
                                    <div className="single-security-card text-center">
                                        <div className="icon">
                                            {icon}
                                        </div>
                                        <h3>{service_name}</h3>
                                        <p>{details}</p>
                                        <Link className="read-more text-decoration-none" to={link}>
                                            Read More
                                            <i className="ri-arrow-right-line"></i>
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default SecurityTwo;
