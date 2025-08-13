# JusterNet Email Component Setup Guide

This guide explains how to set up and use the SendGrid email components for JusterNet's contact form.

## 📧 Components Overview

### 1. Email Templates (`src/Email.jsx`)

- **ContactEmail**: Template for emails sent to your company
- **WelcomeEmail**: Confirmation template sent to users
- Built with `@react-email/components` for optimal email client compatibility
- Includes JusterNet branding and logo

### 2. SendGrid Service (`src/sendgridService.js`)

- Handles email sending via SendGrid API
- Renders React email templates to HTML
- Sends both company notification and user confirmation emails
- Includes logo attachment support

### 3. Contact Form (`src/ContactForm.jsx`)

- Complete contact form with validation
- Professional UI with JusterNet branding
- Real-time form validation
- Loading states and success/error messages

## 🚀 Setup Instructions

### Step 1: SendGrid Account Setup

1. **Create a SendGrid Account**
   - Go to [SendGrid](https://sendgrid.com/)
   - Sign up for a free account (100 emails/day free tier)

2. **Get Your API Key**
   - Navigate to Settings → API Keys
   - Click "Create API Key"
   - Choose "Restricted Access" and enable "Mail Send" permissions
   - Copy your API key (keep it secure!)

3. **Verify Your Sender Identity**
   - Go to Settings → Sender Authentication
   - Verify your domain or single sender email address
   - This is required to send emails

### Step 2: Environment Configuration

1. **Copy the environment template**

   ```bash
   cp .env.example .env
   ```

2. **Configure your environment variables**

   ```env
   # Your SendGrid API key
   VITE_SENDGRID_API_KEY=SG.your_actual_api_key_here

   # Email that receives contact form submissions
   VITE_TO_EMAIL=contact@justernet.com

   # Email used as sender (must be verified in SendGrid)
   VITE_FROM_EMAIL=noreply@justernet.com

   # Your domain for logo hosting
   VITE_DOMAIN=https://justernet.com
   ```

### Step 3: Logo Setup

1. **Host your logo**
   - Upload `justernet_logo.ico` to your web server
   - Or use a CDN like Cloudinary, AWS S3, etc.

2. **Update logo URL in email templates**
   - Edit `src/Email.jsx`
   - Replace `https://your-domain.com/justernet_logo.ico` with your actual logo URL

3. **Convert logo to base64 (optional)**
   - For better email client compatibility
   - Use the `imageToBase64` utility in `sendgridService.js`

## 📝 Usage Examples

### Basic Contact Form Integration

```jsx
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <ContactForm />
    </div>
  );
}
```

### Custom Email Template Usage

```jsx
import { ContactEmail, WelcomeEmail } from './Email';
import { render } from '@react-email/render';

// Render email to HTML
const emailHtml = render(
  <ContactEmail
    fullName="John Doe"
    email="john@example.com"
    subject="Website Inquiry"
    message="I'm interested in your services..."
  />
);
```

### Direct SendGrid Service Usage

```jsx
import { sendContactEmail } from './sendgridService';

const handleFormSubmit = async (formData) => {
  const result = await sendContactEmail({
    fullName: 'John Doe',
    email: 'john@example.com',
    subject: 'Website Inquiry',
    message: 'Hello, I would like to know more about your services.',
  });

  if (result.success) {
    console.log('Email sent successfully!');
  } else {
    console.error('Failed to send email:', result.error);
  }
};
```

## 🎨 Customization

### Email Template Styling

- Modify styles in `src/Email.jsx`
- Use inline styles for better email client compatibility
- Test with different email clients (Gmail, Outlook, etc.)

### Contact Form Styling

- Edit `src/ContactForm.css`
- Follows JusterNet brand colors and design system
- Fully responsive design included

### Form Validation

- Customize validation rules in `ContactForm.jsx`
- Add/remove required fields as needed
- Modify error messages

## 🔧 Advanced Configuration

### Custom Email Templates

Create additional email templates:

```jsx
export function CustomEmail({ data }) {
  return (
    <Html>
      <Head />
      <Preview>Your custom email preview</Preview>
      <Body style={main}>{/* Your custom email content */}</Body>
    </Html>
  );
}
```

### Multiple Recipients

Modify `sendgridService.js` to send to multiple recipients:

```javascript
const companyEmail = {
  to: ['contact@justernet.com', 'sales@justernet.com'],
  from: FROM_EMAIL,
  subject: `Contact Form: ${subject}`,
  html: emailHtml,
};
```

### Email Attachments

Add file attachments to emails:

```javascript
const emailWithAttachment = {
  to: TO_EMAIL,
  from: FROM_EMAIL,
  subject: 'Email with attachment',
  html: emailHtml,
  attachments: [
    {
      filename: 'document.pdf',
      content: base64Content,
      type: 'application/pdf',
      disposition: 'attachment',
    },
  ],
};
```

## 🧪 Testing

### Development Testing

```bash
# Start development server
npm run dev

# Test the contact form at http://localhost:3000
```

### Email Template Testing

```bash
# Install React Email CLI (optional)
npm install -g @react-email/cli

# Preview email templates
npx react-email dev
```

### SendGrid Testing

- Use SendGrid's Email Activity feed to monitor sent emails
- Test with different email addresses
- Check spam folders during testing

## 🚨 Important Security Notes

1. **Never commit your API key to version control**
   - Always use environment variables
   - Add `.env` to your `.gitignore`

2. **Validate and sanitize user input**
   - The form includes basic validation
   - Consider additional server-side validation

3. **Rate limiting**
   - Implement rate limiting to prevent spam
   - SendGrid has built-in rate limiting

4. **CORS Configuration**
   - Configure CORS properly for production
   - SendGrid API calls should be made server-side in production

## 📊 Monitoring and Analytics

### SendGrid Dashboard

- Monitor email delivery rates
- Track opens and clicks
- View bounce and spam reports

### Error Handling

- Check browser console for errors
- Monitor SendGrid webhook events
- Set up alerts for failed deliveries

## 🔄 Production Deployment

### Environment Variables

Set these in your production environment:

- `VITE_SENDGRID_API_KEY`
- `VITE_TO_EMAIL`
- `VITE_FROM_EMAIL`
- `VITE_DOMAIN`

### Server-Side Considerations

For production, consider moving SendGrid API calls to your backend:

- Keeps API keys secure
- Better error handling
- Rate limiting
- Request validation

### Domain Authentication

- Set up domain authentication in SendGrid
- Improves deliverability
- Reduces spam likelihood

## 📞 Support

If you encounter issues:

1. Check SendGrid's status page
2. Review SendGrid documentation
3. Check email activity logs in SendGrid dashboard
4. Verify sender authentication setup

## 📚 Additional Resources

- [SendGrid Documentation](https://docs.sendgrid.com/)
- [React Email Documentation](https://react.email/)
- [Email Client Testing Tools](https://www.emailonacid.com/)
- [Email Deliverability Best Practices](https://sendgrid.com/blog/email-deliverability-best-practices/)
