'use client';

import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { NavigationDot } from './navigation-dot';

const sections = ['hero', 'about', 'projects', 'designs', 'skills', 'contact'];

export function ScrollSpyNavigation() {
  const activeSection = useScrollSpy(sections);

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:block"
      aria-label="Section navigation"
    >
      <div className="flex flex-col gap-3">
        {sections.map((sectionId) => (
          <NavigationDot
            key={sectionId}
            sectionId={sectionId}
            isActive={activeSection === sectionId}
          />
        ))}
      </div>
    </nav>
  );
}
