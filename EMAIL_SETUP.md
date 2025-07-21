# EmailJS Setup Guide for Safe Solution International

## Overview
This contact form uses EmailJS to send emails directly from the frontend without requiring a backend server. It includes multiple security measures to prevent spam and abuse.

## Security Features Implemented

### 1. **Rate Limiting**
- Maximum 3 submissions per hour per user
- 1-hour cooldown period after reaching the limit

### 2. **Bot Detection**
- Honeypot field (invisible to humans, visible to bots)
- Minimum form filling time (3 seconds)
- Fast submission detection

### 3. **Input Validation & Sanitization**
- XSS protection (removes script tags and javascript)
- Input length limits
- Character validation for names and phone numbers
- Email format validation

### 4. **Spam Protection**
- Pattern detection for common spam phrases
- Repeated character detection
- URL spam detection

### 5. **User Experience**
- Loading states during submission
- Success/error feedback
- Form reset after successful submission

## EmailJS Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
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
```

4. Set the "To Email" to: info@safesolutionint.com
5. Set the "Reply To" to: {{reply_to}}
6. Save and note down your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**
3. Copy it

### Step 5: Update Configuration
Edit the file `src/config/emailjs.js` and replace:

```javascript
export const emailConfig = {
  serviceId: 'YOUR_ACTUAL_SERVICE_ID',
  templateId: 'YOUR_ACTUAL_TEMPLATE_ID', 
  publicKey: 'YOUR_ACTUAL_PUBLIC_KEY',
};
```

### Step 6: Test the Form
1. Fill out the contact form on your website
2. Check your email for the message
3. Verify all fields are populated correctly

## Security Considerations

### What This Protects Against:
- ✅ Spam submissions
- ✅ Bot attacks
- ✅ XSS attacks
- ✅ Rate limiting abuse
- ✅ Fast/automated submissions

### What You Should Also Consider:
- 🔔 **CAPTCHA**: For additional bot protection, consider adding Google reCAPTCHA
- 🔔 **Server-side validation**: For production apps, validate on the server too
- 🔔 **Email filtering**: Set up email filters for additional spam protection
- 🔔 **Monitoring**: Monitor EmailJS usage to detect abuse

## Monitoring & Limits

### EmailJS Free Tier Limits:
- 200 emails per month
- 50 requests per hour
- Basic support

### Upgrade if needed:
- If you receive more than 200 contacts per month
- For higher rate limits
- For premium support

## Troubleshooting

### Common Issues:

1. **Emails not sending**
   - Check EmailJS service is properly connected
   - Verify template ID and service ID are correct
   - Check browser console for errors

2. **Emails in spam folder**
   - Add your domain to EmailJS allowed domains
   - Set up SPF/DKIM records for your domain
   - Use a professional email address as sender

3. **Rate limiting too strict**
   - Adjust `MAX_SUBMISSIONS_PER_HOUR` in ContactPage.jsx
   - Modify `RATE_LIMIT_COOLDOWN` time

4. **Form validation too strict**
   - Adjust validation patterns in the `validate()` function
   - Modify input length limits

## Support

For EmailJS specific issues: [EmailJS Documentation](https://www.emailjs.com/docs/)
For this implementation: Check the comments in `ContactPage.jsx`
