import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import hero_bg from "../../../assets/images/hero/hero-2.png";
import shap_2 from "../../../assets/images/shape/shape-2.png";
import { slideUp } from '../../../utlits/slideUp';
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";
import { Link } from 'react-router-dom';

const BannerOne = () => {
    const [isOpen, setOpen] = useState(false);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    const messages = [
        "Boost Your Online Presence🚀",
        "Professional Websites🖥️",
        "Cutting-Edge Mobile Apps📱",
        "Ignite Your SEO🔥",
        "Achieve Converting Ads📈",
        "Automate Your Business🤖"
    ];

    useEffect(() => {
        const handleType = () => {
            const currentMessage = messages[loopNum % messages.length];
            const updatedText = isDeleting 
                ? currentMessage.substring(0, text.length - 1) 
                : currentMessage.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === currentMessage) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }

            setTypingSpeed(isDeleting ? 50 : 100);
        };

        const timer = setTimeout(handleType, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum]);

    return (
        <section className="banner-area">
            <div className="container-fluid">
                <motion.div className="row align-items-center"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp(1)}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <div className="title">
                                <p>Get Your Business Flourish with </p> {/* Intro text */}
                                <h1 id="typewriter">{text}</h1> {/* Typewriter effect */}
                             
                            </div>
                            <div className="banner-button d-flex align-items-center">
                                <Link className="demo text-decoration-none" to="/contact">Request a Free Consultation Today!</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-image">
                            <img src={hero_bg} alt="banner-image" />
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="shape">
                <div className="shape-2">
                    <img src={shap_2} alt="shape" />
                </div>
            </div>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="0O2aH4XLbto"
                onClose={() => setOpen(false)}
            />
        </section>
    );
};

export default BannerOne;