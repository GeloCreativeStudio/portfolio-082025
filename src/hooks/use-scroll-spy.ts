'use client';

import { useState, useEffect } from 'react';

/**
 * Tracks which section is currently in view based on scroll position.
 *
 * Computes the active section id from an ordered list of section element ids
 * and an optional offset to trigger activation earlier or later.
 *
 * @param sectionIds Ordered list of section ids to observe.
 * @param offset Pixel offset added to `window.scrollY` when determining the active section. Defaults to 100.
 * @returns The id of the active section, or an empty string when none match.
 */
export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find the current section
      let currentSection = '';

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // If no section is found, default to the first one if we're at the top
      if (!currentSection && window.scrollY < 100) {
        currentSection = sectionIds[0];
      }

      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
