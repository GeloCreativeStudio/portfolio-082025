import React from 'react';
import { Html, Head, Heading, Hr, Preview, Text, Link } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import { personalInfo } from '@/lib/data/contact';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

/**
 * React-email template for contact form submissions.
 *
 * Renders a simple, branded message including sender name, email, and message
 * body. Tailwind classes are applied via `@react-email/tailwind` and minimal
 * inline styles are used for link coloring to ensure broad client support.
 *
 * @param props.name Sender display name
 * @param props.email Sender reply-to email
 * @param props.message Message body content
 * @returns An email-ready HTML React tree.
 */
export default function ContactFormEmail({
  name,
  email,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head>
        <style>{`
          .link-style {
            color: #2563eb;
            text-decoration: underline;
          }
        `}</style>
      </Head>
      <Preview>New message from your portfolio: {name}</Preview>
      <Tailwind>
        <Heading className="text-2xl font-bold text-gray-800 mb-6 text-center">
          New message
        </Heading>
        <Hr className="border-t border-gray-300 my-6" />
        <Text className="text-gray-700 mb-4">
          <strong className="text-gray-900">From:</strong> {name}
        </Text>
        <Text className="text-gray-700 mb-4">
          <strong className="text-gray-900">Email:</strong> {email}
        </Text>
        <Text className="text-gray-700 mb-2">
          <strong className="text-gray-900">Message:</strong>
        </Text>
        <Text className="text-gray-600 bg-gray-50 p-4 rounded-md mb-6 whitespace-pre-wrap text-sm leading-relaxed">
          {message}
        </Text>
        <Hr className="border-t border-gray-300 my-6" />
        <Text className="text-xs text-gray-500 text-center mb-2">
          This message was sent via the contact form at{' '}
          <Link href={personalInfo.website} className="link-style">
            {personalInfo.website.replace('https://', '')}
          </Link>
        </Text>
        <Text className="text-xs text-gray-500 text-center">
          {new Date().getFullYear()} {personalInfo.name}
        </Text>
      </Tailwind>
    </Html>
  );
}
