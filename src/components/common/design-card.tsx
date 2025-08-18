import React from 'react';
import Image from 'next/image';

interface DesignCardProps {
  imageSrc: string;
  imageAlt: string;
}

/**
 * Simple design showcase card.
 *
 * Renders a fixed-aspect thumbnail using Next/Image for responsive loading and
 * automatic optimization.
 */
export default function DesignCard({ imageSrc, imageAlt }: DesignCardProps) {
  return (
    <div className="group relative aspect-[4/5] w-48 lg:w-64 xl:w-72 overflow-hidden rounded-md bg-muted">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(min-width: 1280px) 18rem, (min-width: 1024px) 16rem, 12rem"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
