'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { sendEmail, type SendEmailResult } from '@/app/api/actions/send-email';

/**
 * Contact section with server-action powered form submission.
 *
 * - Includes a hidden honeypot field for basic bot mitigation
 * - Uses `useTransition` for non-blocking server action calls
 * - Displays success or error feedback from the action result
 */
export default function Contact() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<SendEmailResult | null>(null);

  const handleSubmit = async (formData: FormData) => {
    setResult(null);

    startTransition(async () => {
      const result = await sendEmail(formData);
      setResult(result);

      // Clear form on success
      if (result.success) {
        const form = document.getElementById('contact-form') as HTMLFormElement;
        form?.reset();
      }
    });
  };

  return (
    <section id="contact" className="py-30 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-center text-4xl font-semibold lg:text-5xl">
          Let&rsquo;s Connect
        </h1>
        <h2 className="mt-4 text-center">
          Have a project in mind or want to chat? Feel free to reach out.
        </h2>

        <Card className="group relative mx-auto mt-12 max-w-lg rounded-none p-8 shadow-zinc-950/5 sm:p-16">
          <CardDecorator />

          <form
            id="contact-form"
            action={handleSubmit}
            className="**:[&>label]:block space-y-6 *:space-y-3"
          >
            {/* Honeypot field - hidden from users but visible to bots */}
            <input
              type="text"
              name="website"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <Label htmlFor="name">Full name</Label>
              <Input type="text" id="name" name="name" required disabled={isPending} />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                disabled={isPending}
                suppressHydrationWarning={true}
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={3}
                required
                disabled={isPending}
              />
            </div>

            {/* Error/Success Messages */}
            {result && (
              <div
                className={`text-sm ${result.success ? 'text-green-600' : 'text-red-600'}`}
              >
                {result.success
                  ? "Message sent successfully! I'll get back to you soon."
                  : result.error ||
                    result.message ||
                    'Failed to send message. Please try again.'}
              </div>
            )}

            <Button type="submit" disabled={isPending}>
              {isPending ? 'Sending...' : 'Submit'}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}

const CardDecorator = () => (
  <>
    <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
    <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
    <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
    <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
  </>
);
