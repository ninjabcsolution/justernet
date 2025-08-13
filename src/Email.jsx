import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Img,
  Hr,
  Link,
  Preview,
} from '@react-email/components';

// Contact Form Email Template for SendGrid
export function ContactEmail({ fullName, email, subject, message }) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {fullName}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header Section with Logo */}
          <Section style={header}>
            <Row>
              <Column align="center">
                <Img
                  src="https://justernet.com/justernet_logo.ico"
                  width="80"
                  height="80"
                  alt="JusterNet Logo"
                  style={logo}
                />
                <Heading style={companyName}>JusterNet</Heading>
                <Text style={tagline}>Corporation</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          {/* Main Content */}
          <Section style={content}>
            <Heading style={heading}>New Contact Form Submission</Heading>

            <Section style={infoSection}>
              <Row>
                <Column style={labelColumn}>
                  <Text style={label}>From:</Text>
                </Column>
                <Column>
                  <Text style={value}>{fullName}</Text>
                </Column>
              </Row>

              <Row>
                <Column style={labelColumn}>
                  <Text style={label}>Email:</Text>
                </Column>
                <Column>
                  <Link href={`mailto:${email}`} style={emailLink}>
                    {email}
                  </Link>
                </Column>
              </Row>

              <Row>
                <Column style={labelColumn}>
                  <Text style={label}>Subject:</Text>
                </Column>
                <Column>
                  <Text style={value}>{subject}</Text>
                </Column>
              </Row>
            </Section>

            <Hr style={hr} />

            {/* Message Section */}
            <Section style={messageSection}>
              <Heading style={messageHeading}>Message:</Heading>
              <Text style={messageText}>{message}</Text>
            </Section>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>This email was sent from the JusterNet contact form.</Text>
            <Text style={footerText}>© 2025 JusterNet Corporation. All rights reserved.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Welcome/Confirmation Email Template
export function WelcomeEmail({ fullName, email }) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting JusterNet</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header Section with Logo */}
          <Section style={header}>
            <Row>
              <Column align="center">
                <Img
                  src="https://your-domain.com/justernet_logo.ico"
                  width="80"
                  height="80"
                  alt="JusterNet Logo"
                  style={logo}
                />
                <Heading style={companyName}>JusterNet</Heading>
                <Text style={tagline}>Corporation</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          {/* Main Content */}
          <Section style={content}>
            <Heading style={heading}>Thank You for Contacting Us!</Heading>

            <Text style={welcomeText}>Dear {fullName},</Text>

            <Text style={welcomeText}>
              Thank you for reaching out to JusterNet. We have received your message and will get
              back to you within 24 hours.
            </Text>

            <Text style={welcomeText}>
              Our team is committed to providing you with the best possible service and support. We
              appreciate your interest in our services.
            </Text>

            <Section style={contactInfo}>
              <Heading style={contactHeading}>Contact Information</Heading>
              <Text style={contactText}>
                Email:{' '}
                <Link href="mailto:contact@justernet.com" style={emailLink}>
                  contact@justernet.com
                </Link>
              </Text>
              <Text style={contactText}>
                Website:{' '}
                <Link href="https://justernet.com" style={emailLink}>
                  justernet.com
                </Link>
              </Text>
            </Section>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Best regards,
              <br />
              The JusterNet Team
            </Text>
            <Text style={footerText}>© 2025 JusterNet Corporation. All rights reserved.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Default export for the main contact email
export default ContactEmail;

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const header = {
  padding: '32px 24px',
  textAlign: 'center',
  backgroundColor: '#ffffff',
};

const logo = {
  margin: '0 auto 16px',
  borderRadius: '8px',
};

const companyName = {
  color: '#1f2937',
  fontSize: '32px',
  fontWeight: '800',
  letterSpacing: '1px',
  margin: '8px 0 4px',
  textAlign: 'center',
};

const tagline = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '400',
  letterSpacing: '0.5px',
  margin: '0',
  textAlign: 'center',
};

const content = {
  padding: '0 24px',
};

const heading = {
  color: '#1f2937',
  fontSize: '24px',
  fontWeight: '700',
  margin: '32px 0 24px',
  textAlign: 'center',
};

const infoSection = {
  margin: '24px 0',
};

const labelColumn = {
  width: '100px',
  verticalAlign: 'top',
};

const label = {
  color: '#374151',
  fontSize: '16px',
  fontWeight: '600',
  margin: '8px 0',
};

const value = {
  color: '#1f2937',
  fontSize: '16px',
  fontWeight: '400',
  margin: '8px 0',
};

const emailLink = {
  color: '#3b82f6',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: '400',
};

const messageSection = {
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  padding: '24px',
  margin: '24px 0',
  border: '1px solid #e5e7eb',
};

const messageHeading = {
  color: '#1f2937',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 16px',
};

const messageText = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0',
  whiteSpace: 'pre-wrap',
};

const welcomeText = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '16px 0',
};

const contactInfo = {
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  padding: '24px',
  margin: '32px 0',
  border: '1px solid #e5e7eb',
};

const contactHeading = {
  color: '#1f2937',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 16px',
};

const contactText = {
  color: '#374151',
  fontSize: '16px',
  margin: '8px 0',
};

const footer = {
  padding: '24px',
  textAlign: 'center',
  backgroundColor: '#f8fafc',
  borderTop: '1px solid #e5e7eb',
};

const footerText = {
  color: '#6b7280',
  fontSize: '14px',
  margin: '8px 0',
  textAlign: 'center',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '20px 0',
};
