# Training Program Waitlist — Email Integration Setup

## Overview
The waitlist page is live at `/training.html` and ready for email integration.

## Email Service Integration

### Option 1: ConvertKit (Recommended)

1. **Create a Form in ConvertKit:**
   - Log into ConvertKit
   - Go to Forms → New Form
   - Choose "Embed" form type
   - Create a tag called "Training Program Waitlist"

2. **Get Your Form ID:**
   - In ConvertKit, go to your form settings
   - Copy the Form ID (it will be a number)

3. **Update the HTML:**
   - Open `training.html`
   - Find this line (around line 78):
     ```html
     <form class="waitlist-form" action="https://app.convertkit.com/forms/YOUR_FORM_ID/subscriptions" method="post">
     ```
   - Replace `YOUR_FORM_ID` with your actual ConvertKit form ID

4. **Set Up Confirmation Email:**
   - In ConvertKit, go to your form's "Incentive" settings
   - Add a simple confirmation message like:
     ```
     Subject: You're on the waitlist
     
     You're officially on the waitlist for my upcoming training program.
     
     You'll be the first to know when enrollment opens, and I'll share 
     program details before anyone else.
     
     No spam. No obligation.
     
     — Kayleigh
     ```

### Option 2: MailerLite

1. **Create a Form in MailerLite:**
   - Log into MailerLite
   - Go to Forms → Create Form → Embedded Form
   - Add fields: First Name, Email
   - Create a group called "Training Program Waitlist"

2. **Get Embed Code:**
   - MailerLite will provide an embed code
   - Copy the form `action` URL from the code

3. **Update the HTML:**
   - Replace the ConvertKit URL in `training.html` with the MailerLite action URL
   - Adjust field names if needed (MailerLite uses different field name formats)

4. **Set Up Automation:**
   - Create a welcome automation that sends immediately after subscription
   - Use a simple confirmation message (see ConvertKit example above)

## Testing

Before going live:
1. Submit a test email using your own address
2. Verify the confirmation email arrives
3. Check that the subscriber is tagged correctly
4. Test on mobile and desktop

## Future Evolution Path

The page structure is designed to evolve:

**Phase 1 (Current):** Waitlist collection only  
**Phase 2:** Add program details section above form  
**Phase 3:** Replace waitlist with enrollment link or redirect to shop

## Page Location
- **URL:** `/training.html`
- **Direct link:** `https://yourdomain.com/training.html`

## Notes
- No navigation link added yet (standalone page as requested)
- Design matches existing site aesthetic
- Form is text-forward, no animations
- Mobile responsive
- Can be easily updated as program develops
