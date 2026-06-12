import React, { useEffect } from 'react';
import { Shield, Lock, HeartPulse, UserCheck, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  // للتأكد من أن الصفحة تبدأ من الأعلى عند فتحها
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-container">
        
        {/* الهيدر العلوي */}
        <header className="privacy-header">
          <Shield className="shield-icon" size={48} />
          <h1>PRIVACY POLICY</h1>
          <p className="effective-date">Effective Date: June 5, 2026</p>
          <p className="privacy-intro">
            At <strong>AMER FIT</strong>, we value your trust. This Privacy Policy outlines how we collect, 
            use, and protect your personal, fitness, and health-related data.
          </p>
        </header>

        <hr className="privacy-divider" />

        {/* محتوى السياسة */}
        <main className="privacy-content">
          
          {/* القسم الأول: جمع البيانات */}
          <section className="privacy-section">
            <div className="section-title">
              <UserCheck className="section-icon" size={24} />
              <h2>1. Information We Collect</h2>
            </div>
            <p>To provide you with tailored fitness plans and ensure your safety during training, we collect:</p>
            <ul>
              <li><strong>Personal Metrics:</strong> Name, email address, phone number, and account details.</li>
              <li>
                <strong>Fitness & Health Data:</strong> Information you voluntarily share with us regarding your 
                training history, physical goals, and <strong>existing physical injuries or medical conditions</strong>.
              </li>
              <li><strong>Payment Data:</strong> Billing details processed securely via our trusted payment gateways.</li>
            </ul>
          </section>

          {/* القسم الثاني: استخدام البيانات */}
          <section className="privacy-section">
            <div className="section-title">
              <HeartPulse className="section-icon" size={24} />
              <h2>2. How We Use Your Information</h2>
            </div>
            <p>Your fitness and health data are utilized strictly to enhance your experience:</p>
            <ul>
              <li>To customize workout schedules and monitor your membership status.</li>
              <li>
                To protect your physical well-being by adapting exercise recommendations based on your reported 
                <strong> injuries or medical limitations</strong>.
              </li>
              <li>To contact you regarding your application status or updates to our services.</li>
            </ul>
          </section>

          {/* القسم الثالث: حماية البيانات */}
          <section className="privacy-section">
            <div className="section-title">
              <Lock className="section-icon" size={24} />
              <h2>3. Data Protection & Safety</h2>
            </div>
            <p>
              We implement industry-standard security measures to safeguard your sensitive physical metrics. 
              <strong> AMER FIT will never sell, rent, or lease your personal health history</strong> to third-party 
              marketing agencies. Your data is accessed only by authorized trainers assisting with your fitness plan.
            </p>
          </section>

          {/* القسم الرابع: إخلاء المسؤولية */}
          <section className="privacy-section disclaimer-box">
            <h2>4. Health Disclaimer</h2>
            <p>
              By submitting your injury and training information, you acknowledge that coaching recommendations 
              from AMER FIT are designed for lifestyle and fitness improvement. They do not substitute professional 
              medical advice, diagnosis, or treatment. You are solely responsible for providing accurate health information.
            </p>
          </section>

          {/* القسم الخامس: التواصل */}
          <section className="privacy-section">
            <div className="section-title">
              <Mail className="section-icon" size={24} />
              <h2>5. Contact Us & Your Rights</h2>
            </div>
            <p>
              You have the right to review, update, or request the deletion of your personal fitness data at any time. 
              For any privacy concerns, reach out directly to us:
            </p>
            <div className="contact-box">
              <p><strong>Email:</strong> amerabuawwad955@yahoo.com</p>
              <p><strong>Location:</strong> Project01 & Circle, Amman, Jordan</p>
            </div>
          </section>

        </main>

        {/* زر العودة للرئيسية */}
        <footer className="privacy-page-footer">
          <Link to="/" className="back-btn">Back to Home</Link>
        </footer>

      </div>
    </div>
  );
};

export default PrivacyPolicy;