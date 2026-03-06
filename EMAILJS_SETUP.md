# EmailJS Setup Guide

## Step 1: Install Dependencies

After updating `package.json`, run:
```bash
npm install
```

## Step 2: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 3: Create Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy the **Service ID** (e.g., `service_xxxxxxx`)

## Step 4: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:**
```
Account Deletion Request - TBYT
```

**Content:**
```
Account Deletion Request

User Email: {{user_email}}
Reason: {{deletion_reason}}

Full Message:
{{message}}

---
This is an automated request from the TBYT account deletion form.
```

4. Save the template
5. Copy the **Template ID** (e.g., `template_xxxxxxx`)

## Step 5: Get Public Key

1. Go to **Account** → **General**
2. Find **Public Key** section
3. Copy your **Public Key** (e.g., `xxxxxxxxxxxxx`)

## Step 6: Create .env File

Create a `.env` file in the root directory with:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## Step 7: Restart Development Server

After creating the `.env` file, restart your development server:

```bash
npm start
```

## Testing

1. Navigate to `/delete-account` page
2. Fill in the form with a test email and reason
3. Submit the form
4. Check your email inbox for the deletion request

## Troubleshooting

- **"Email service is not configured"**: Make sure your `.env` file exists and contains all three variables
- **"Failed to send request"**: Check that your EmailJS credentials are correct and the service is active
- **Environment variables not loading**: Make sure variable names start with `REACT_APP_` prefix
- **Restart required**: After creating/updating `.env` file, restart the development server
