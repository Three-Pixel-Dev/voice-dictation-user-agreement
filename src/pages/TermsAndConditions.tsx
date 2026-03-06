import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>TBYT Terms and Conditions</h1>
        <p className="last-updated">Last Updated: {currentDate}</p>
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
            TBYT provides comprehensive voice dictation and AI-powered text processing services, including:
          </p>
          <ul>
            <li><strong>Voice Recording:</strong> Record audio directly through the app or upload existing audio files</li>
            <li><strong>Audio Transcription:</strong> Convert audio recordings to accurate text transcriptions using AI</li>
            <li><strong>Audio Summarization:</strong> Generate intelligent summaries in various styles (formal, informal, narrative, bullet points)</li>
            <li><strong>Text Rewriting:</strong> Rewrite existing transcriptions to improve clarity and style</li>
            <li><strong>Text Summarization:</strong> Summarize existing text transcriptions in different styles</li>
            <li><strong>Audio Storage:</strong> Store audio files in secure cloud storage for future processing</li>
            <li><strong>Multi-device Access:</strong> Access your transcriptions and audio files from multiple devices</li>
          </ul>
          <p>
            We utilize cloud-based technology (Google Cloud Storage or Supabase) and AI services (Google Gemini API) 
            to process your audio notes into actionable text data. Audio files are stored permanently in cloud storage 
            to allow you to access and process them at any time.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. User Accounts</h2>
          <p>
            To use the service, you need to create an account with your email address and password.
          </p>
          <p>
            <strong>Optional API Key:</strong> You may optionally choose to use your own Google Gemini API key instead of our default service. 
            If you choose to use your own API key, you are responsible for managing your API key quotas and costs. 
            Your API key is stored securely and only used for processing your own audio files.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. User Conduct</h2>
          <p>You agree to use the App only for lawful purposes. Prohibited actions include:</p>
          <ul>
            <li>Transmitting illegal, harmful, offensive, or copyrighted content without authorization</li>
            <li>Attempting to disrupt or gain unauthorized access to our servers or AI services</li>
            <li>Reverse engineering the application binary or code</li>
            <li>Unauthorized use of automated scraping or monitoring systems</li>
            <li>Sharing your account credentials with others</li>
            <li>Using the service to violate any applicable laws or regulations</li>
            <li>Attempting to bypass service restrictions or abuse the service</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>5. Data and Content Ownership</h2>
          <p>
            You retain full ownership of all audio files, transcriptions, and content you create using TBYT. 
            You grant TBYT a limited license to store, process, and transmit your content solely for the purpose 
            of providing the service. You can delete your content at any time, and we will remove it from our systems 
            within 30 days of deletion.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Intellectual Property</h2>
          <p>
            All content, features, and functionality of the App, including but not limited to text, graphics, 
            logos, and software, are the property of TBYT and are protected by copyright, trademark, and other 
            intellectual property laws. You may not copy, modify, distribute, or create derivative works based on 
            the App without our express written permission.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Service Availability and Limitations</h2>
          <p>
            While we strive to provide reliable service, we do not guarantee:
          </p>
          <ul>
            <li>Uninterrupted or error-free service</li>
            <li>100% accuracy in transcriptions or summaries</li>
            <li>Availability of the service at all times</li>
            <li>Processing of all audio formats or file sizes</li>
          </ul>
          <p>
            We reserve the right to limit, suspend, or terminate your access if you violate these terms or 
            if we detect suspicious activity on your account.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. Limitation of Liability</h2>
          <p>
            TBYT shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
            or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, 
            use, goodwill, or other intangible losses.
          </p>
        </section>

        <section className="terms-section">
          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. We will notify users of 
            significant changes by updating the "Last Updated" date on this page. Your continued use of the 
            service after changes are posted constitutes acceptance of the modified terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <p className="contact-email">
            Email: <a href="mailto:naveenchaudhary103@gmail.com">naveenchaudhary103@gmail.com</a>
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
