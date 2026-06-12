import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Side: Images & Floating Elements */}
        <div className="about-visuals">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="main-subject-container"
          >
            <img
              src="/about.png"
              alt="Fitness Club"
              className="main-subject-img"
            />

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span></span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="secondary-image-card"
          >
            <img
              src="https://images.unsplash.com/photo-1574673139732-1fd3de17e8b5?q=80&w=2070&auto=format&fit=crop"
              alt="Gym Equipment"
            />
          </motion.div>
        </div>

        {/* Right Side: Text Content */}
        <div className="about-content">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-title"
          >
            Explore Our <br />
            <span>Fitness Club</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="about-text"
          >
            A dedicated athlete and member of the Jordan National Athletics Team, with experience in athletics, weightlifting, and cardio training. Known for discipline, strength, and perseverance, always striving for improvement and representing Jordan with pride.
          </motion.p>

          <Link to="/about-details" className="read-more-btn">
            <div className="btn-shape"></div>
            <span>Read More</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
