import React from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import DesignCard from '../common/design-card';
import { designs } from '@/lib/data/featured-designs';

/**
 * Section showcasing selected designs in a horizontally scrolling gallery.
 */
export default function FeaturedDesigns() {
  return (
    <section id="designs" className="py-30 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-center text-4xl font-semibold lg:text-5xl">
          Featured Designs
        </h1>
        <h2 className="mt-4 text-center">A gallery of my designs.</h2>
      </div>

      <div className="mt-12">
        <div className="relative overflow-hidden">
          <InfiniteSlider speedOnHover={20} speed={100} gap={16}>
            {designs.map((design) => (
              <DesignCard
                key={design.id}
                imageSrc={design.imageSrc}
                imageAlt={design.imageAlt}
              />
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}
