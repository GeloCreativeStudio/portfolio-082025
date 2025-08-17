import { z } from 'zod';

/**
 * Contact form validation schema using Zod
 * Includes honeypot field to prevent spam
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  message: z
    .string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  website: z.string().optional(), // Honeypot field
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Validates contact form data from FormData
 */
export function validateContactForm(formData: FormData) {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
    website: formData.get('website'),
  };

  return contactFormSchema.safeParse(data);
}
