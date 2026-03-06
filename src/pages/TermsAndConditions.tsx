import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>TBYT Terms and Conditions</h1>
        <p className="last-updated">Last Updated: February 05, 2026</p>
      </div>

      <div className="terms-content">
        <section className="terms-section">
          <p className="intro">
            By accessing and using the TBYT application, you agree to be bound by the following terms. 
            Please read them carefully to understand your rights and obligations as a user of our AI-powered 
            voice dictation services.
          </p>
        </section>

        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the App, you accept and agree to be bound by the terms and provision of 
            this agreement. If you do not agree, please discontinue use of the service immediately.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Description of Service</h2>
          <p>
            TBYT provides voice recording, high-accuracy AI transcription, and intelligent summarization services. 
            We utilize cloud-based technology to process your audio notes into actionable text data.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. User Conduct</h2>
          <p>You agree to use the App only for lawful purposes. Prohibited actions include:</p>
          <ul>
            <li>Transmitting illegal, harmful, or offensive content</li>
            <li>Attempting to disrupt or gain unauthorized access to AI servers</li>
            <li>Reverse engineering the application binary or code</li>
            <li>Unauthorized use of automated scraping or monitoring systems</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>4. Subscription & Billing</h2>
          <p>
            Access to tiered features (Silver, Gold, Platinum) require a valid paid subscription. Fees are 
            billed in advance and are non-refundable for partially used periods. You may manage or cancel 
            your plan through the settings dashboard.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. Intellectual Property</h2>
          <p>
            All content, features, and functionality of the App, including but not limited to text, graphics, 
            logos, and software, are the property of TBYT and are protected by copyright, trademark, and other 
            intellectual property laws.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Limitation of Liability</h2>
          <p>
            TBYT shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
            or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, 
            use, goodwill, or other intangible losses.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <p className="contact-email">
            Email: <a href="mailto:voicedictation007@gmail.com">voicedictation007@gmail.com</a>
          </p>
          <p>
            We may update our Terms and Conditions from time to time. Any changes will be communicated by 
            posting the revised Terms and Conditions on this page.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
