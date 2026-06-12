import React, { useEffect } from 'react';
import { Scale, ShieldAlert, CreditCard, Dumbbell, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './TermsOfService.css';

const TermsOfService = () => {
  // لضمان فتح الصفحة من الأعلى تلقائياً
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page">
      <div className="terms-container">
        
        {/* الهيدر العلوي */}
        <header className="terms-header">
          <Scale className="scale-icon" size={48} />
          <h1>TERMS OF SERVICE</h1>
          <p className="effective-date">Last Updated: June 5, 2026</p>
          <p className="terms-intro">
            Welcome to <strong>AMER FIT</strong>. By accessing our website, purchasing memberships, 
            or using our training programs, you agree to comply with and be bound by the following terms.
          </p>
        </header>

        <hr className="terms-divider" />

        {/* محتوى الشروط */}
        <main className="terms-content">
          
          {/* 1. شروط الأهلية والحساب */}
          <section className="terms-section">
            <div className="section-title">
              <Scale className="section-icon" size={24} />
              <h2>1. Eligibility & Account Responsibilities</h2>
            </div>
            <p>
              By signing up, you confirm that you are at least 18 years of age or have parental consent 
              to engage in physical training programs. You are responsible for maintaining the confidentiality 
              of your account and password.
            </p>
          </section>

          {/* 2. إخلاء المسؤولية الطبية والإصابات (مهم جداً للرياضة) */}
          <section className="terms-section medical-disclaimer-box">
            <div className="section-title">
              <ShieldAlert className="section-icon-alert" size={24} />
              <h2>2. Physical Activity & Medical Disclaimer</h2>
            </div>
            <p>
              <strong>AMER FIT</strong> strongly recommends that you consult with a physician before beginning any 
              exercise program. You should be in good physical condition and be able to participate in the exercises.
            </p>
            <ul>
              <li>
                <strong>Assumption of Risk:</strong> You agree that you are participating in these physical activities 
                voluntarily and assume all risk of injury, illness, or damage to yourself.
              </li>
              <li>
                <strong>Accurate Information:</strong> You are strictly obligated to declare any 
                <strong> current physical injuries or medical conditions</strong> accurately in your application form. 
                AMER FIT is not liable for injuries resulting from omitted or false health information.
              </li>
            </ul>
          </section>

          {/* 3. الدفع والاشتراكات */}
          <section className="terms-section">
            <div className="section-title">
              <CreditCard className="section-icon" size={24} />
              <h2>3. Memberships, Billing & Refunds</h2>
            </div>
            <p>
              Certain areas of our services require payment (such as custom fitness plans and club memberships):
            </p>
            <ul>
              <li>All payments are processed securely. You agree to provide current, complete, and accurate purchase information.</li>
              <li><strong>Refund Policy:</strong> Due to the digital and personalized nature of fitness coaching, all membership sales and custom training plan fees are <strong>non-refundable</strong> unless stated otherwise.</li>
            </ul>
          </section>

          {/* 4. السلوك العام والقواعد */}
          <section className="terms-section">
            <div className="section-title">
              <Dumbbell className="section-icon" size={24} />
              <h2>4. Code of Conduct</h2>
            </div>
            <p>
              As a member of the AMER FIT elite community, you agree to use our digital programs and physical spaces 
              respectfully. We reserve the right to terminate your access or membership immediately without a refund 
              if you engage in abusive behavior, harassment, or violate community safety standards.
            </p>
          </section>

          {/* 5. التعديلات والتواصل */}
          <section className="terms-section">
            <div className="section-title">
              <Mail className="section-icon" size={24} />
              <h2>5. Changes to Terms & Contact</h2>
            </div>
            <p>
              We reserve the right to update these terms at any time. Your continued use of the platform after updates 
              signifies your acceptance of the new terms. If you have any questions, contact us:
            </p>
            <div className="contact-box">
              <p><strong>Email:</strong> amerabuawwad955@yahoo.com</p>
              <p><strong>Location:</strong> Project01 & Circle, Amman, Jordan</p>
            </div>
          </section>

        </main>

        {/* زر العودة */}
        <footer className="terms-page-footer">
          <Link to="/" className="back-btn">Back to Home</Link>
        </footer>

      </div>
    </div>
  );
};

export default TermsOfService;