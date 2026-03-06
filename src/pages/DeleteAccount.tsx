import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './DeleteAccount.css';

const DeleteAccount: React.FC = () => {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // EmailJS configuration from environment variables
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      setSubmitStatus('error');
      return;
    }

    if (!reason.trim()) {
      setErrorMessage('Please provide a reason for account deletion');
      setSubmitStatus('error');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address');
      setSubmitStatus('error');
      return;
    }

    // Check if EmailJS credentials are configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setErrorMessage('Email service is not configured. Please contact us directly at voicedictation007@gmail.com');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Initialize EmailJS
      emailjs.init(PUBLIC_KEY);

      // Send email using EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        to_email: 'voicedictation007@gmail.com', // Your email address
        from_email: email,
        subject: 'Account Deletion Request - TBYT',
        message: `Account Deletion Request

Email: ${email}
Reason: ${reason}

This is an automated request from the TBYT account deletion form.`,
        user_email: email,
        deletion_reason: reason,
      });

      setSubmitStatus('success');
      setEmail('');
      setReason('');
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send request. Please try again or contact us directly at voicedictation007@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="delete-account-container">
      <div className="delete-account-header">
        <h1>Request Account Deletion</h1>
        <p className="subtitle">
          To request deletion of your TBYT account and associated data, please fill out the form below.
        </p>
      </div>

      <div className="delete-account-content">
        <div className="info-section">
          <h2>What will be deleted?</h2>
          <p>
            When you request account deletion, the following data will be permanently removed from our systems:
          </p>
          <ul>
            <li>Your account information (email address, password)</li>
            <li>All audio files you have uploaded</li>
            <li>All transcriptions and summaries</li>
            <li>All rewritten content</li>
            <li>Your usage history and preferences</li>
          </ul>
          <p className="retention-notice">
            <strong>Data Retention:</strong> We will delete your personal data, audio files, and transcriptions 
            within 30 days of receiving your request, except where we are required to retain certain information 
            for legal or regulatory purposes.
          </p>
        </div>

        <form className="delete-account-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your registered email address"
              required
              disabled={isSubmitting}
              className={submitStatus === 'error' && !email.trim() ? 'error' : ''}
            />
          </div>

          <div className="form-group">
            <label htmlFor="reason">Reason for Deletion *</label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Please tell us why you want to delete your account (optional but helpful)"
              rows={6}
              required
              disabled={isSubmitting}
              className={submitStatus === 'error' && !reason.trim() ? 'error' : ''}
            />
          </div>

          {submitStatus === 'error' && errorMessage && (
            <div className="error-message">
              {errorMessage}
            </div>
          )}

          {submitStatus === 'success' && (
            <div className="success-message">
              <strong>Request Submitted Successfully!</strong>
              <p>
                We have received your account deletion request. We will process your request within 30 days 
                and send a confirmation email to {email} once your account and data have been deleted.
              </p>
            </div>
          )}

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending Request...' : 'Send Deletion Request'}
          </button>

          <p className="form-footer">
            By submitting this form, you confirm that you want to permanently delete your TBYT account 
            and all associated data. This action cannot be undone.
          </p>
        </form>

        <div className="contact-section">
          <h3>Need Help?</h3>
          <p>
            If you have questions or concerns about account deletion, please contact us at:
          </p>
          <p className="contact-email">
            <a href="mailto:voicedictation007@gmail.com">voicedictation007@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
