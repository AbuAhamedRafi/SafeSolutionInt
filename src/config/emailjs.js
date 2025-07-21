// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values below

export const emailConfig = {
  serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  templateId: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
};

// Example EmailJS template variables you can use:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{phone}} - Phone number
// {{company}} - Company name
// {{message}} - Message content
// {{to_email}} - Your email (recipient)
// {{reply_to}} - Reply-to email
// {{timestamp}} - When the form was submitted

// Sample template:
/*
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Message:
{{message}}

Submitted on: {{timestamp}}

Best regards,
Your Website Contact Form
*/
