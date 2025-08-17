/**
 * Personal information and contact details
 */
export const personalInfo = {
  name: 'Angelo Manalo', //Replace with your name
  email: 'angelomanalo@proton.me', // Replace with your email
  website: 'https://www.angelomanalo.me', // Replace with your website
} as const;

export type PersonalInfo = typeof personalInfo;
