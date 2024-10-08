import React, { useState } from 'react';
import { motion } from "framer-motion";
import { PricingData } from '../../utlits/fackData/pricingData'; 
import { Link } from 'react-router-dom';
import { slideUp } from '../../utlits/slideUp';
import Title from '../common/title';

const PricingGrid = () => {
  const [activeCategory, setActiveCategory] = useState('website');
  const [currency, setCurrency] = useState('GBP');

  const priceMap = {
    USD: {
      350: 450,
      525: 675,
      950: 1200,
      700: 900,
      1219: 950,
      2500: 3200,
      300: 450,
      600: 770,
      1200: 1540,
      500: 649,
      900: 1159,
      1500: 1929,
    },
    GBP: {
      450: 350,
      675: 525,
      1200: 950,
      900: 700,
      950: 1219,
      3200: 2500,
      450: 300,
      770: 600,
      1540: 1200,
      649: 500,
      1159: 900,
      1929: 1500,
    }
  };

  const updatePrices = (targetCurrency) => {
    return PricingData.map((plan) => ({
      ...plan,
      price: priceMap[targetCurrency][plan.price] || plan.price,
    }));
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleCurrencyToggle = () => {
    setCurrency((prevCurrency) => (prevCurrency === 'GBP' ? 'USD' : 'GBP'));
  };

  const filteredPricingData = updatePrices(currency);

  return (
    <div className="pricing-area pt-100 pb-75">
      <div className="container">
        

        <div className="category-toggle-buttons">
          <button className={`category-toggle-btn ${activeCategory === 'website' ? 'active' : ''}`} onClick={() => handleCategoryChange('website')}>Website Packages</button>
          <button className={`category-toggle-btn ${activeCategory === 'app' ? 'active' : ''}`} onClick={() => handleCategoryChange('app')}>App Packages</button>
          <button className={`category-toggle-btn ${activeCategory === 'ads' ? 'active' : ''}`} onClick={() => handleCategoryChange('ads')}>Ads Services</button>
          <button className={`category-toggle-btn ${activeCategory === 'business' ? 'active' : ''}`} onClick={() => handleCategoryChange('business')}>Business Autopilot</button>
        </div>

        <button className="pricing-currency-toggle" onClick={handleCurrencyToggle}>
          View Prices in {currency === 'GBP' ? '$US Dollars' : '£GBP Pounds'}
        </button>

        <motion.div className="row justify-content-center"
          initial="offscreen"
          whileInView="onscreen"
          variants={slideUp(1)}
          viewport={{ once: true, amount: 0.4 }}
        >
          {filteredPricingData.filter((plan) => plan.category === activeCategory).map(({ id, plan_name, plan_details, price, time, link, features }) => (
            <div key={id} className="col-lg-4 col-md-6">
              <div className="single-pricing-card">
                <h3>{plan_name}</h3>
                <p>{plan_details}</p>
                <h1>
                  {currency === 'GBP' ? '£' : '$'}
                  {price} <sub>/ {time}</sub>
                </h1>
                <ul className="list-unstyled ps-0 list">
                  {features.map((feature, index) => (
                    <li key={index} className="d-flex align-items-center">
                      <i className="ri-check-double-fill"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link className="demo text-decoration-none" to={link}>
                  <i className="ri-arrow-right-line"></i>
                  Get Started Today
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PricingGrid;
