import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="policy-container">
      <div className="policy-header">
        <h1>TBYT Privacy Policy</h1>
        <p className="last-updated">Last Updated: February 05, 2026</p>
      </div>

      <div className="policy-content">
        <section className="policy-section">
          <p className="intro">
            TBYT is your intelligent voice dictation companion, designed to help you capture, transcribe, 
            and organize your ideas with ease. Record audio, generate AI-powered transcriptions and summaries, 
            and manage your voice notes securely across sessions. We respect your privacy and are committed to 
            ensuring the security of your information.
          </p>
        </section>

        <section className="policy-section">
          <h2>Collecting and Using Your Personal Data</h2>
          <p>
            We do not collect, store, or share any personal data with third parties.
          </p>
          <p>
            All information you enter in the app remains on your device and is never transmitted to our servers 
            or any external service.
          </p>
        </section>

        <section className="policy-section">
          <h2>Permissions</h2>
          <p>Our app does not request unnecessary permissions.</p>
          <p>
            We do not access your microphone, camera, or any media unless you explicitly trigger these features 
            (e.g., tapping the mic button or opening the camera).
          </p>
          <p>
            Any data captured through these features stays on your device and is not shared with third-party applications.
          </p>
        </section>

        <section className="policy-section">
          <h2>Children's Privacy</h2>
          <p>Our application is not intended for anyone under the age of 13.</p>
          <p>We do not knowingly collect personal information from children.</p>
        </section>

        <section className="policy-section">
          <h2>Security</h2>
          <p>
            Since we do not collect or transmit data, your information remains secure on your device.
          </p>
          <p>
            We recommend using your device's built-in security features (such as screen lock) to protect your data.
          </p>
        </section>

        <section className="policy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="contact-email">
            Email: <a href="mailto:voicedictation007@gmail.com">voicedictation007@gmail.com</a>
          </p>
          <p>
            We may update our Privacy Policy from time to time. Any changes will be communicated by posting 
            the revised Privacy Policy on this page.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
