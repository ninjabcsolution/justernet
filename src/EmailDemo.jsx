import React from 'react';
import ContactForm from './ContactForm';
import JusterNetLogo from './JusterNetLogo';
import './EmailDemo.css';

const EmailDemo = () => {
  return (
    <div className="email-demo">
      <div className="demo-header">
        <JusterNetLogo variant="default" size="large" />
        <h1>Email Component Demo</h1>
        <p>Test the JusterNet contact form and SendGrid email integration</p>
      </div>

      <div className="demo-content">
        <div className="demo-section">
          <h2>📧 Contact Form</h2>
          <p>
            This form demonstrates the complete email workflow including form validation, SendGrid
            integration, and professional email templates.
          </p>

          <div className="features-list">
            <div className="feature">
              <span className="feature-icon">✅</span>
              <span>Real-time form validation</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📨</span>
              <span>SendGrid email delivery</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🎨</span>
              <span>Professional email templates</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📱</span>
              <span>Responsive design</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🔒</span>
              <span>Secure API integration</span>
            </div>
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <span>Fast loading states</span>
            </div>
          </div>
        </div>

        <div className="form-container">
          <ContactForm />
        </div>

        <div className="demo-info">
          <h3>🔧 Setup Required</h3>
          <div className="setup-steps">
            <div className="step">
              <strong>1. SendGrid Account:</strong> Create a free SendGrid account and get your API
              key
            </div>
            <div className="step">
              <strong>2. Environment Variables:</strong> Copy <code>.env.example</code> to{' '}
              <code>.env</code> and configure
            </div>
            <div className="step">
              <strong>3. Logo Hosting:</strong> Upload your logo and update the URL in email
              templates
            </div>
            <div className="step">
              <strong>4. Sender Verification:</strong> Verify your sender email address in SendGrid
            </div>
          </div>

          <div className="demo-note">
            <p>
              <strong>Note:</strong> Without proper SendGrid configuration, the form will show a
              simulated success message. Check the browser console for detailed logs and setup
              instructions.
            </p>
          </div>
        </div>

        <div className="email-preview">
          <h3>📧 Email Templates Preview</h3>
          <p>The system sends two types of emails:</p>

          <div className="email-types">
            <div className="email-type">
              <h4>Company Notification Email</h4>
              <ul>
                <li>Sent to your business email</li>
                <li>Contains all form submission details</li>
                <li>Includes sender's contact information</li>
                <li>Professional formatting with company branding</li>
              </ul>
            </div>

            <div className="email-type">
              <h4>User Confirmation Email</h4>
              <ul>
                <li>Sent to the person who submitted the form</li>
                <li>Confirms receipt of their message</li>
                <li>Includes your contact information</li>
                <li>Professional thank you message</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="technical-details">
          <h3>⚙️ Technical Implementation</h3>
          <div className="tech-grid">
            <div className="tech-item">
              <h4>React Email</h4>
              <p>
                Professional email templates built with React components for optimal email client
                compatibility
              </p>
            </div>
            <div className="tech-item">
              <h4>SendGrid API</h4>
              <p>
                Reliable email delivery service with high deliverability rates and detailed
                analytics
              </p>
            </div>
            <div className="tech-item">
              <h4>Form Validation</h4>
              <p>Client-side validation with real-time feedback and comprehensive error handling</p>
            </div>
            <div className="tech-item">
              <h4>Responsive Design</h4>
              <p>Mobile-first design that works perfectly on all devices and screen sizes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailDemo;
