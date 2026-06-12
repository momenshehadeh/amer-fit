import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const plans = [
  {
    name: 'Starter',
    duration: '1 MONTH',
    price: '100',
    description: 'Perfect for those just starting their journey.',
    benefits: [
      'Detailed explanation of exercises wit correct technique',
      '24-hour follow-up',
      '3 phone calls',
      'Nutrition advice',
    ],
    isPopular: false
  },
  {
    name: 'Standard',
    duration: '3 MONTHS',
    price: '250',
    description: 'Most popular choice for consistent results.',
    benefits: [
      'Detailed Exercise Explanation with Correct Technique',
      '24-Hour Follow-up',
      'Weekly Phone Call',
      'Nutrition Advice',
      'Opportunity to Learn Sports Skills'
    ],
    isPopular: true
  },
  {
    name: 'Elite',
    duration: '6 MONTHS',
    price: '450',
    description: 'Ultimate commitment for ultimate transformation.',
    benefits: [
      'Detailed exercise instructions',
      '24-hour follow-up',
      'Weekly phone call',
      'Assessment of your physical condition',
      'Goal development',
      'Meal planning',
      'Improvement of your physical abilities'
    ],
    isPopular: false
  }
];

const Pricing = () => {
  return (
    <section className="pricing-section" id="membership">
      <div className="pricing-header">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-tag"
        >
          MEMBERSHIP PLANS
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          CHOOSE YOUR <span>TRANSFORMATION</span>
        </motion.h2>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}
          >
            {plan.isPopular && <div className="popular-tag">MOST POPULAR</div>}
            
            <div className="card-header">
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-duration">{plan.duration}</div>
              <div className="plan-price">
                <span className="currency">$$</span>
                {plan.price}
              </div>
            </div>

            <p className="plan-desc">{plan.description}</p>

            <div className="plan-benefits">
              {plan.benefits.map((benefit, i) => (
                <div key={i} className="benefit-item">
                  <Check size={18} className="check-icon" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <Link to="/join">
            <button className="plan-btn">GET STARTED</button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
