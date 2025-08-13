import React, { useState } from 'react';
import { sendContactEmail } from './sendgridService.js';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message:
            'Thank you! Your message has been sent successfully. We will get back to you soon.',
        });
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Failed to send message. Please try again later.',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-header">
        <h2>Contact JusterNet</h2>
        <p>Get in touch with us. We'd love to hear from you!</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className={`form-input ${errors.fullName ? 'error' : ''}`}
            placeholder="Enter your full name"
            disabled={isSubmitting}
          />
          {errors.fullName && <span className="error-message">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="Enter your email address"
            disabled={isSubmitting}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={`form-input ${errors.subject ? 'error' : ''}`}
            placeholder="Enter the subject of your message"
            disabled={isSubmitting}
          />
          {errors.subject && <span className="error-message">{errors.subject}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className={`form-textarea ${errors.message ? 'error' : ''}`}
            placeholder="Enter your message (minimum 10 characters)"
            rows="6"
            disabled={isSubmitting}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
          <div className="character-count">{formData.message.length} characters</div>
        </div>

        {submitStatus && (
          <div className={`status-message ${submitStatus.type}`}>{submitStatus.message}</div>
        )}

        <button
          type="submit"
          className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>

      <div className="contact-info">
        <h3>Other Ways to Reach Us</h3>
        <div className="contact-details">
          <div className="contact-item">
            <strong>Email:</strong> contact@justernet.com
          </div>
          <div className="contact-item">
            <strong>Website:</strong> justernet.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
