import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <main className="overflow-x-hidden">
      <section id="hero" className="hero min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 py-24">
          <div className="content max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/avatar-light-mode.jpg"
                alt="Angelo Manalo"
                width={150}
                height={150}
                sizes="150px"
                className="rounded-full mx-auto border-4 border-border dark:hidden"
                priority
              />
              <Image
                src="/avatar-dark-mode.jpg"
                alt="Angelo Manalo"
                width={150}
                height={150}
                sizes="150px"
                className="rounded-full mx-auto border-4 border-border hidden dark:block"
                priority
              />
            </div>
            <h1 className="text-5xl font-medium md:text-6xl xl:text-7xl text-balance">
              Angelo Manalo
            </h1>

            {/* <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <Badge variant="outline">Graphic Designer</Badge>
              <Badge variant="outline">Frontend Developer</Badge>
              <Badge variant="outline">AI-Focused Innovator</Badge>
            </div> */}

            <div className="mt-8 max-w-2xl mx-auto">
              <p className="text-lg italic text-pretty">
                &ldquo;I design with purpose, develop with precision, and explore AI with
                curiosity.&rdquo;
              </p>
            </div>

            {/* Action buttons */}
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="px-5 text-base">
                <Link
                  href="https://flowcv.com/resume/3b7s6mssund3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-nowrap">View resume</span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="px-5 text-base">
                <Link href="#contact">
                  <span className="text-nowrap">Contact me</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
