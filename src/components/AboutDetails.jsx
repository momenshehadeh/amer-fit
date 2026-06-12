import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const AboutDetails = () => {
  return (
    <section id="read-more" className="about-details-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-details-content"
        >
          <span className="section-subtitle">My Journey</span>

          <h2 className="section-title">
            Dedicated Athlete Representing Jordan
          </h2>

          <p className="details-text">
            Dedicated athlete and member of the Jordan National Athletics Team, with experience in athletics, weightlifting, and cardio training.
          </p>

          <p className="details-text">
            Competed in national and international events with multiple achievements.
          </p>

          <p className="details-text">
            Focused on discipline, strength, and continuous improvement in sports and performance.
          </p>

          <div className="achievement-grid">
            <div className="achievement-card">
              <h3>National Team</h3>
              <p>Jordan National Athletics Team Member.</p>
            </div>

            <div className="achievement-card">
              <h3>Championships</h3>
              <p>Multiple achievements in competitions.</p>
            </div>

            <div className="achievement-card">
              <h3>Weightlifting</h3>
              <p>Strength and power training experience.</p>
            </div>

            <div className="achievement-card">
              <h3>Cardio</h3>
              <p>High endurance and fitness performance.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDetails;