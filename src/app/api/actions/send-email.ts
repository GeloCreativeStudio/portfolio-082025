'use server';
/**
 * send-email.ts (Server Action)
 * --------------------------------------------------------------
 * Validates incoming contact form data then dispatches an email via Resend.
 * All validation errors are normalized; honeypot guard prevents trivial bot spam.
 * Returns a discriminated union enabling precise UI handling.
 */

import { Resend } from 'resend';
import ContactFormEmail from '@/app/emails/contact-form-email';
import { personalInfo } from '@/lib/data/contact';
import { validateContactForm } from '@/lib/contact-form-validation';

export type SendEmailResult =
  | { success: true; data: unknown }
  | { success: false; message?: string; error?: string };

/**
 * Server action that validates form input and sends a contact email via Resend.
 *
 * - Verifies required environment configuration
 * - Validates and normalizes inputs, returning the first error message
 * - Applies a honeypot check to reduce spam
 * - Sends a React-based email template using Resend
 *
 * @param formData FormData captured from the contact form submission.
 * @returns A discriminated result for success or failure with details.
 */
export const sendEmail = async (formData: FormData): Promise<SendEmailResult> => {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured.');
    return {
      success: false,
      message: 'Server configuration error. Please try again later.',
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const parsed = validateContactForm(formData);
  if (!parsed.success) {
    // Return first error message for simplicity
    const first: string =
      (Object.values(parsed.error.flatten().fieldErrors).flat()[0] as string) ||
      'Invalid form data.';
    return { success: false, error: first };
  }
  const { name, email, message, website } = parsed.data;
  if (website) {
    return { success: false, error: 'Invalid submission.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: personalInfo.email,
      subject: `Message from ${name}`,
      replyTo: email,
      react: ContactFormEmail({
        name,
        email,
        message,
      }),
    });

    if (error) {
      console.error('[SEND_EMAIL_ERROR] Resend API Error:', error);
      return { success: false, message: 'Failed to send email due to Resend API error.' };
    }

    return { success: true, data };
  } catch (error: unknown) {
    console.error('[SEND_EMAIL_ERROR] Unexpected Error:', error);
    // Add more specific error message if possible, or keep generic for security
    return {
      success: false,
      message: 'An unexpected error occurred while sending the email.',
    };
  }
};
