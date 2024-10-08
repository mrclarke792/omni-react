import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { slideUp } from '../../utlits/slideUp';

const services = [
    {
        id: 1,
        link: "/services/web-development",
        service: "Web Development"
    },
    {
        id: 2,
        link: "/services/app-development",
        service: "App Development"
    },
    {
        id: 3,
        link: "/services/seo",
        service: "Search Engine Optimization"
    },
    {
        id: 4,
        link: "/services/digital-marketing",
        service: "Digital Marketing"
    },
    {
        id: 5,
        link: "/services/consulting",
        service: "Consulting"
    },
    {
        id: 6,
        link: "/services/ecommerce",
        service: "E-commerce Solutions"
    },
];

const SideBar = () => {
    return (
        <div className="blog-details-left-sidebar">
            <motion.div className="single-pages-widget form"
                initial="offscreen"
                whileInView="onscreen"
                variants={slideUp(1)}
                viewport={{ once: true, amount: 0 }}
            >
                <h3>Search Here</h3>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Searching..." />
                        <button type="submit"><i className="ri-search-2-line"></i></button>
                    </div>
                </form>
            </motion.div>

            <motion.div className="single-pages-widget services"
                initial="offscreen"
                whileInView="onscreen"
                variants={slideUp(1)}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h3>Our Services</h3>
                <ul className="list-unstyled ps-0 mb-0">
                    {
                        services.map(({ service, id, link }) => (
                            <li key={id}>
                                <Link className="text-decoration-none" to={link}>{service}</Link>
                            </li>
                        ))
                    }
                </ul>
            </motion.div>

            <div className="single-pages-widget text-center questions" data-cue="slideInUp">
                <h4>Any Questions?</h4>
                <a href="#">Let’s Talk</a>
            </div>
        </div>
    );
}

export default SideBar;
