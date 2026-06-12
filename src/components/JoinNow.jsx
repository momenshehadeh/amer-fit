import { React, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, ChevronRight, Check } from 'lucide-react';
import './JoinNow.css';




const JoinNow = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSubmitting(true);

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    plan: formData.get("plan"),
    training: formData.get("training"),
    injuries: formData.get("injuries"),
  };

  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbxtNfaWQJhqw-d3rg4CQMojP-Isd2sUOKIt6Sq0Oij1fpVq28KnszJ9gFdRUfLbXHV0/exec",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    if (res.ok) {
      alert("✅ Application sent successfully!");
      form.reset();
    } else {
      alert("❌ Failed to send application!");
    }

  } catch (error) {
    console.error(error);
    alert("❌ Something went wrong!");
  }

  setIsSubmitting(false);
};



  return (
    <section className="join-section" id="contact">
      {/* Background Silhouette */}
      <div className="join-bg-overlay"></div>
      <div className="join-bg-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop)' }}></div>

      <div className="join-container">
        <div className="join-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="join-text"
          >
            <span className="join-tag">START YOUR JOURNEY</span>
            <h2 className="join-title">BECOME A <br /><span>STRONGER</span></h2>
            <p className="join-desc">
              Your transformation begins here. Join our elite community and experience world-class training designed for results.
            </p>

            <div className="join-info">
              <div className="info-item">
                <div className="info-icon">01</div>
                <div className="info-text">
                  <h4>Choose Your Plan</h4>
                  <p>Select a membership that fits your lifestyle.</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">02</div>
                <div className="info-text">
                  <h4>Meet Your Coach</h4>
                  <p>Get a personalized assessment from our experts.</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">03</div>
                <div className="info-text">
                  <h4>Start Training</h4>
                  <p>Access our elite equipment and community.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="join-form-wrapper"
          >
            <form className="join-form" onSubmit={handleSubmit}>

              <div className="form-row">
                <div className="form-group">
                  <label><User size={14} /> Full Name</label>
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>

                <div className="form-group">
                  <label><Mail size={14} /> Email Address</label>
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label><Phone size={14} /> Phone Number</label>
                  <input type="tel" name="phone" placeholder="962 7XXXXXXXX" required />
                </div>

                <div className="form-group">
                  <label>Select Plan</label>
                  <select name="plan" required>
                    <option value="">Choose a membership</option>
                    <option value="starter">Starter (1 Month)</option>
                    <option value="standard">Standard (3 Months)</option>
                    <option value="elite">Elite (6 Months)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Are you training?</label>

                <div className="radio-row">
                  <label>
                    <input type="radio" name="training" value="yes" required />
                    Yes
                  </label>

                  <label>
                    <input type="radio" name="training" value="no" />
                    No
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Do you have any injuries?</label>

                <div className="radio-row">
                  <label>
                    <input type="radio" name="injuries" value="yes" required />
                    Yes
                  </label>

                  <label>
                    <input type="radio" name="injuries" value="no" />
                    No
                  </label>
                </div>
              </div>

              <div className="form-footer">
                <button
                  type="submit"
                  className={`submit-btn ${isSubmitting ? "sending" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Send size={18} className="send-icon" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      SEND APPLICATION <Send size={18} />
                    </>
                  )}
                </button>
                <p className="trust-copy">
                  No spam. Response within 24 hours.
                </p>
              </div>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinNow;
