import { Header } from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import TechnicalSkills from '@/components/sections/technical-skills';
import AboutMe from '@/components/sections/about-me';
import FeaturedProjects from '@/components/sections/featured-projects';
import FeaturedDesigns from '@/components/sections/featured-designs';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import SmoothScroll from '@/components/common/smooth-scroll';

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <HeroSection />
      <AboutMe />
      <FeaturedProjects />
      <FeaturedDesigns />
      <TechnicalSkills />
      <Contact />
      <Footer />
    </>
  );
}
