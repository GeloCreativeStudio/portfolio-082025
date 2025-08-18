import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ReactNode } from 'react';

/**
 * About section describing background and interests with simple feature cards.
 */
export default function AboutMe() {
  return (
    <section id="about" className="py-30 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-center text-4xl font-semibold lg:text-5xl">About Me</h1>
        <h2 className="mt-4 text-center">My interests and focus.</h2>
        <div className="mx-auto mt-12 grid gap-4 sm:gap-6 md:gap-8 lg:grid-cols-2">
          <FeatureCard className="p-4 sm:p-6 lg:col-span-2">
            <p className="mx-auto mt-4 max-w-3xl text-center text-pretty">
              I&rsquo;m currently studying at{' '}
              <a
                href="https://www.feutech.edu.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                <strong>FEU Institute of Technology</strong>
              </a>{' '}
              while creating apps that combine visual aesthetics, technical precision, and
              the power of AI. I started in graphic design, moved into frontend
              development, and now focuses on exploring the possibilities of artificial
              intelligence.
            </p>

            <div className="flex justify-center gap-2 sm:gap-3 md:gap-6 overflow-hidden flex-wrap">
              <InterestIcon icon="/assets/interests/purpose.svg" label="DESIGN" />
              <InterestIcon icon="/assets/interests/precision.svg" label="DEV" />
              <InterestIcon icon="/assets/interests/curiosity.svg" label="AI" />
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

interface InterestIconProps {
  icon: string;
  label: string;
}

/** Displays a single interest icon with label using masked SVG. */
const InterestIcon = ({ icon, label }: InterestIconProps) => (
  <div className="flex flex-col items-center gap-1.5">
    <div className="bg-linear-to-b from-border size-fit rounded-lg to-transparent p-px">
      <div className="bg-linear-to-b from-background to-muted/25 relative flex aspect-square size-16 items-center justify-center rounded-md p-4">
        <Image
          src={icon}
          alt={label}
          width={32}
          height={32}
          className="dark:invert object-contain h-8 w-8"
        />
      </div>
    </div>
    <span className="text-muted-foreground text-center text-sm">{label}</span>
  </div>
);

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
}

/** Simple card wrapper with decorative corner accents. */
const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card className={cn('group relative rounded-none shadow-zinc-950/5', className)}>
    <CardDecorator />
    {children}
  </Card>
);

/** Draws the four corner accents for `FeatureCard`. */
const CardDecorator = () => (
  <>
    <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
    <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
    <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
    <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
  </>
);
