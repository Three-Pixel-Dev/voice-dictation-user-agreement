import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="policy-container">
      <div className="policy-header">
        <h1>TBYT Privacy Policy</h1>
        <p className="last-updated">Last Updated: March 07, 2026</p>
      </div>

      <div className="policy-content">
        <section className="policy-section">
          <p className="intro">
            TBYT is your intelligent voice dictation companion, designed to transform your spoken words into accurate text with ease and precision. 
            Seamlessly record your voice, transcribe audio to text, generate intelligent summaries in various styles (formal, informal, narrative, bullet points), 
            and rewrite content—all powered by advanced AI technology. With secure cloud storage, you can access your transcriptions from anywhere while keeping your data protected. 
            Generate professional text documents, discover smart content insights, and make your voice heard in written form. 
            Your voice, simplified. We respect your privacy and are committed to ensuring the security of your information.
          </p>
        </section>

        <section className="policy-section">
          <h2>Collecting and Using Your Personal Data</h2>
          
          <div className="subsection">
            <h3>Account Information</h3>
            <p>
              When you create an account, we collect your email address and password (stored securely using encryption) 
              to provide you with access to your transcriptions across devices.
            </p>
          </div>

          <div className="subsection">
            <h3>Voice Recordings and Audio Files</h3>
            <p>
              When you record audio or upload audio files, these files are uploaded to our secure cloud storage 
              for processing and long-term storage. Audio files are stored permanently to allow you to access and process them at any time. 
              Audio files are processed using industry-leading AI models for transcription and summarization. 
              You can delete your recordings and transcriptions at any time through the app, which will remove them from our systems.
            </p>
          </div>

          <div className="subsection">
            <h3>Transcription Data</h3>
            <p>
              Your transcriptions, summaries (in various styles: formal, informal, narrative, bullet points), and rewritten content are stored securely 
              in our cloud database to allow you to access them from multiple devices. This data is encrypted in transit and at rest. 
              You retain full control over your data and can delete it at any time. You can also process existing audio files for transcription 
              or summarization at any time after upload.
            </p>
          </div>

          <div className="subsection">
            <h3>Usage Information</h3>
            <p>
              We collect basic usage information such as the number of transcriptions processed and app features used 
              to improve our services and provide customer support. This information is anonymized and aggregated where possible.
            </p>
          </div>

          <div className="subsection">
            <h3>API Key Information</h3>
            <p>
              If you choose to use your own API key instead of our default service, we store your API key securely (encrypted) 
              to process your audio files. Your API key is only used for processing your own audio files and is never shared with other users or third parties.
            </p>
          </div>
        </section>

        <section className="policy-section">
          <h2>Permissions</h2>
          
          <div className="subsection">
            <h3>Microphone Access</h3>
            <p>
              Our app requires microphone permission to record your voice for transcription. 
              The microphone is only accessed when you explicitly tap the record button or initiate a recording session. 
              We do not access your microphone in the background without your explicit action.
            </p>
          </div>

          <div className="subsection">
            <h3>Audio Settings</h3>
            <p>
              We request permission to modify audio settings to ensure optimal recording quality. 
              This permission allows the app to adjust audio input levels and settings during recording sessions only.
            </p>
          </div>

          <div className="subsection">
            <h3>Storage Access</h3>
            <p>
              The app may request access to your device storage to allow you to upload existing audio files 
              for transcription. Audio files you select are only accessed when you explicitly choose to upload them.
            </p>
          </div>
        </section>

        <section className="policy-section">
          <h2>Data Sharing and Third Parties</h2>
          <p>
            We do not sell your personal data to third parties. Your audio recordings and transcriptions are processed 
            using secure AI services for transcription and summarization purposes. 
            These services process your data according to their privacy policies and our data processing agreements. 
            Audio files are stored in cloud storage services which provide secure, 
            encrypted storage infrastructure. We do not share your personal information with advertisers or marketing companies.
          </p>
        </section>

        <section className="policy-section">
          <h2>Children's Privacy</h2>
          <p>
            Our application is not intended for anyone under the age of 13. We do not knowingly collect personal 
            information from children under 13. If you are a parent or guardian and believe your child has provided 
            us with personal information, please contact us immediately, and we will delete such information from our systems.
          </p>
        </section>

        <section className="policy-section">
          <h2>Security</h2>
          <p>
            We implement industry-standard security measures to protect your data:
          </p>
          <ul className="security-list">
            <li>All data transmitted between your device and our servers is encrypted using HTTPS/TLS protocols</li>
            <li>Passwords are hashed using secure cryptographic algorithms</li>
            <li>Audio files are stored in encrypted cloud storage</li>
            <li>Transcriptions and user data are stored in encrypted databases</li>
            <li>API keys (if you provide your own) are encrypted before storage</li>
            <li>Access to your account requires authentication tokens (JWT)</li>
            <li>We regularly update our security practices to address emerging threats</li>
          </ul>
          <p>
            While we take extensive measures to protect your data, no method of transmission over the internet 
            or electronic storage is 100% secure. We recommend using strong, unique passwords and enabling 
            your device's built-in security features (such as screen lock and biometric authentication) 
            to protect access to the app on your device.
          </p>
        </section>

        <section className="policy-section">
          <h2>Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul className="rights-list">
            <li>Access your personal data, audio files, and transcriptions</li>
            <li>Request deletion of your account and all associated data (audio files, transcriptions, etc.)</li>
            <li>Export your transcriptions and data</li>
            <li>Correct any inaccurate information</li>
            <li>Opt out of certain data processing activities</li>
            <li>Delete individual audio files or transcriptions at any time</li>
            <li>Choose to use your own API key or our default service</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in the Contact Us section below.
          </p>
        </section>

        <section className="policy-section">
          <h2>Data Retention</h2>
          <p>
            We retain your account information, audio files, and transcriptions for as long as your account is active or as needed 
            to provide you services. Audio files are stored permanently in cloud storage to allow you to access and process them 
            at any time. If you delete your account, we will delete your personal data, audio files, and transcriptions 
            within 30 days, except where we are required to retain certain information for legal or regulatory purposes.
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
        </section>

        <section className="policy-section">
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Any changes will be communicated by posting the revised 
            Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy 
            Policy periodically to stay informed about how we protect your information.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
