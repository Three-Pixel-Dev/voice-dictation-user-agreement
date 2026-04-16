import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './DeleteAccount.css';

const DeleteAccount: React.FC = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [otpMessage, setOtpMessage] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // EmailJS configuration from environment variables
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.expn-ai.com';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = () => {
    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      setSubmitStatus('error');
      return false;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address');
      setSubmitStatus('error');
      return false;
    }

    return true;
  };

  const callOtpApi = async (endpoint: string, payload: Record<string, string>) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json().catch(() => ({}));

    if (!response.ok) {
      const apiMessage = responseData?.message;
      throw new Error(apiMessage || 'Unable to complete OTP request.');
    }

    return responseData?.message || responseData?.data?.message || 'Request completed successfully.';
  };

  const handleSendOtp = async () => {
    setSubmitStatus('idle');
    setErrorMessage('');
    setOtpMessage('');

    if (!validateEmail()) {
      return;
    }

    setIsSendingOtp(true);
    try {
      const message = await callOtpApi('/api/auth/delete-account-send-otp', { email: email.trim() });
      setIsOtpSent(true);
      setIsOtpVerified(false);
      setOtp('');
      setOtpMessage(message || 'OTP sent to your email.');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to send OTP. Please try again.';
      setSubmitStatus('error');
      setErrorMessage(message);
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleVerifyOtp = async () => {
    setSubmitStatus('idle');
    setErrorMessage('');
    setOtpMessage('');

    if (!validateEmail()) {
      return;
    }

    if (!otp.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please enter the OTP sent to your email');
      return;
    }

    setIsVerifyingOtp(true);
    try {
      const message = await callOtpApi('/api/auth/delete-account-verify-otp', {
        email: email.trim(),
        otp: otp.trim(),
      });
      setIsOtpVerified(true);
      setOtpMessage(message || 'OTP verified successfully.');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'OTP verification failed. Please try again.';
      setSubmitStatus('error');
      setErrorMessage(message);
      setIsOtpVerified(false);
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setIsOtpSent(false);
    setIsOtpVerified(false);
    setOtp('');
    setOtpMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail()) {
      return;
    }

    if (!isOtpVerified) {
      setErrorMessage('Please verify OTP before submitting your deletion request');
      setSubmitStatus('error');
      return;
    }

    if (!reason.trim()) {
      setErrorMessage('Please provide a reason for account deletion');
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
      setSubmittedEmail(email);
      setEmail('');
      setOtp('');
      setReason('');
      setIsOtpSent(false);
      setIsOtpVerified(false);
      setOtpMessage('');
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
            <div className="email-otp-row">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder="Enter your registered email address"
                required
                disabled={isSubmitting || isSendingOtp || isVerifyingOtp}
                className={submitStatus === 'error' && !email.trim() ? 'error' : ''}
              />
              <button
                type="button"
                className="inline-button"
                onClick={handleSendOtp}
                disabled={isSubmitting || isSendingOtp || isVerifyingOtp}
              >
                {isSendingOtp ? 'Sending...' : 'Send OTP'}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="otp">OTP *</label>
            <div className="email-otp-row">
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit OTP"
                required
                disabled={!isOtpSent || isSubmitting || isVerifyingOtp}
                className={submitStatus === 'error' && !otp.trim() ? 'error' : ''}
              />
              <button
                type="button"
                className="inline-button"
                onClick={handleVerifyOtp}
                disabled={!isOtpSent || isSubmitting || isSendingOtp || isVerifyingOtp}
              >
                {isVerifyingOtp ? 'Verifying...' : 'Verify OTP'}
              </button>
            </div>
            {otpMessage && (
              <p className={`otp-message ${isOtpVerified ? 'success' : ''}`}>
                {otpMessage}
              </p>
            )}
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
                and send a confirmation email to {submittedEmail} once your account and data have been deleted.
              </p>
            </div>
          )}

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting || !isOtpVerified}
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
