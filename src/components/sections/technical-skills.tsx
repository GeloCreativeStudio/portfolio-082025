import React from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { skillsData } from '@/lib/data/technical-skills';

// Individual skill icon component with responsive sizing
function SkillIcon({ src, alt }: { src: string; alt: string }) {
  // Use CSS mask and background color for SVG icons
  return (
    <div
      className="flex items-center justify-center h-6 sm:h-7 md:h-9 w-auto"
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        backgroundColor: 'var(--foreground)',
        width: '36px',
      }}
      aria-label={alt}
      role="img"
    />
  );
}

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-30 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-center text-4xl font-semibold lg:text-5xl">
          Technical Skills
        </h1>
        <h2 className="mt-4 text-center">
          I use a variety of technologies for development and design.
        </h2>

        <div className="mt-12 flex flex-col items-center md:flex-row">
          <div className="mb-8 md:mb-0 md:max-w-44 md:border-r md:border-border md:pr-6">
            <p className="text-center text-sm text-muted-foreground md:text-end">
              Solution stack
            </p>
          </div>

          <div className="relative w-full py-6 md:w-[calc(100%-11rem)] md:pl-6">
            <InfiniteSlider
              speedOnHover={20}
              speed={100}
              reverse={true}
              gap={48}
              className="sm:gap-16 md:gap-20"
            >
              {skillsData.map((skill, index) => (
                <SkillIcon key={index} src={skill.src} alt={skill.alt} />
              ))}
            </InfiniteSlider>

            {/* Progressive blur overlays for smooth edge effect */}
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-16 md:w-20"
              direction="left"
              blurIntensity={1}
              blurLayers={6}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-16 md:w-20"
              direction="right"
              blurIntensity={1}
              blurLayers={6}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
