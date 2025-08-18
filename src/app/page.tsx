import { Header } from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import TechnicalSkills from '@/components/sections/technical-skills';
import AboutMe from '@/components/sections/about-me';
import FeaturedProjects from '@/components/sections/featured-projects';
import FeaturedDesigns from '@/components/sections/featured-designs';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import SmoothScrollClient from '@/components/common/smooth-scroll-client';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <SmoothScrollClient />
      </Suspense>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutMe />
        <FeaturedProjects />
        <FeaturedDesigns />
        <TechnicalSkills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}