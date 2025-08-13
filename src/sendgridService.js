import sgMail from '@sendgrid/mail';
import { render } from '@react-email/render';
import { ContactEmail, WelcomeEmail } from './Email.jsx';

// Initialize SendGrid with your API key
// You should set this in your environment variables
const SENDGRID_API_KEY = "";
const FROM_EMAIL = 'Naina@JusterNet.com';
const TO_EMAIL = 'contact@justernet.com';

if (SENDGRID_API_KEY) {
    sgMail.setApiKey(SENDGRID_API_KEY);
}

export const sendContactEmail = async (formData) => {
    try {
        const { fullName, email, subject, message } = formData;

        // Render the email template to HTML
        const emailHtml = render(
            ContactEmail({
                fullName,
                email,
                subject,
                message,
            })
        );

        // Email to your company
        const companyEmail = {
            to: TO_EMAIL,
            from: FROM_EMAIL,
            subject: `Contact Form: ${subject}`,
            html: emailHtml,
            // Add the logo as an attachment for email clients that support it
            attachments: [
                {
                    filename: 'justernet_logo.ico',
                    content: 'base64-encoded-logo-content', // You'll need to convert your logo to base64
                    type: 'image/x-icon',
                    disposition: 'inline',
                    contentId: 'justernet_logo',
                },
            ],
        };

        // Confirmation email to the user
        const confirmationHtml = render(
            WelcomeEmail({
                fullName,
                email,
            })
        );

        const confirmationEmail = {
            to: email,
            from: FROM_EMAIL,
            subject: 'Thank you for contacting JusterNet',
            html: confirmationHtml,
            attachments: [
                {
                    filename: 'justernet_logo.ico',
                    content: 'base64-encoded-logo-content', // You'll need to convert your logo to base64
                    type: 'image/x-icon',
                    disposition: 'inline',
                    contentId: 'justernet_logo',
                },
            ],
        };

        // Send both emails
        const results = await Promise.all([
            sgMail.send(companyEmail),
            sgMail.send(confirmationEmail),
        ]);

        return {
            success: true,
            message: 'Emails sent successfully',
            results,
        };
    } catch (error) {
        console.error('SendGrid Error:', error);

        if (error.response) {
            console.error('SendGrid Response Body:', error.response.body);
        }

        return {
            success: false,
            message: 'Failed to send email',
            error: error.message,
        };
    }
};

// Function to convert image to base64 (you can use this utility)
export const imageToBase64 = (imagePath) => {
    // This would typically be done server-side
    // For client-side, you might need to fetch the image and convert it
    return new Promise((resolve, reject) => {
        fetch(imagePath)
            .then(response => response.blob())
            .then(blob => {
                const reader = new FileReader();
                reader.onload = () => {
                    const base64 = reader.result.split(',')[1]; // Remove data:image/... prefix
                    resolve(base64);
                };
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            })
            .catch(reject);
    });
};

// Alternative function for server-side usage (Node.js)
export const serverImageToBase64 = (imagePath) => {
    const fs = require('fs');
    const imageBuffer = fs.readFileSync(imagePath);
    return imageBuffer.toString('base64');
};
