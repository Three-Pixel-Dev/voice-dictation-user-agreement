# TBYT User Agreement Website

This is a React application that displays the Privacy Policy and Terms & Conditions for the TBYT voice dictation mobile application.

## Features

- Privacy Policy page
- Terms and Conditions page
- Account Deletion Request page (with EmailJS integration)
- Responsive design
- Clean, modern UI

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables for EmailJS:
   - Create a `.env` file in the root directory
   - Add the following variables:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   - Get these values from [EmailJS](https://www.emailjs.com/) after signing up

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
voice-dictation-user-agreement/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── PrivacyPolicy.tsx
│   │   ├── PrivacyPolicy.css
│   │   ├── TermsAndConditions.tsx
│   │   └── TermsAndConditions.css
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.css
├── package.json
└── tsconfig.json
```

## Pages

- `/` or `/privacy-policy` - Privacy Policy page
- `/terms-and-conditions` - Terms and Conditions page
- `/delete-account` - Account Deletion Request page

## EmailJS Setup

The Account Deletion page uses EmailJS to send deletion requests via email. To set it up:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with these variables:
   - `{{to_email}}` - Recipient email
   - `{{from_email}}` - User's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Full message
   - `{{user_email}}` - User's email
   - `{{deletion_reason}}` - Reason for deletion
4. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
5. Add them to your `.env` file (see Installation section)

## Technologies Used

- React 18
- TypeScript
- React Router DOM
- EmailJS (@emailjs/browser)
- CSS3

## License

Private - All rights reserved.
