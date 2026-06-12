import React from 'react';
import { Instagram, Mail, MapPin, Phone, Heart, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo">
              AMER<span>FIT</span>
            </Link>
            <p className="brand-desc">
              Pushing you beyond your limits. Join the elite community of fitness enthusiasts and transform your life today.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/amerabuawwad0" target="_blank"><Instagram size={20} /></a>
              <a href="https://www.youtube.com/@amerthehulk" target="_blank"><Youtube size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><Link to="/join">Join Now</Link></li>
              <li><a href="#membership">Membership</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>CONTACT US</h4>
            <ul>
              <li><MapPin size={18} /> Project01 & Circle, Amman, Jordan</li>
              <li><Phone size={18} /> +962 79088 0238</li>
              <li><Mail size={18} /> amerabuawwad955@yahoo.com</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 AMER FIT. ALL RIGHTS RESERVED.</p>
          
          <div className="watermark-tag">
            POWERED BY <a href="https://www.instagram.com/momenzaid_" target="_blank" rel="noopener noreferrer">Momen</a>
          </div>

          <div className="legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
