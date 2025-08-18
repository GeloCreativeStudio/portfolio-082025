'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavigationDotProps {
  isActive: boolean;
  sectionId: string;
}

/**
 * Small square-shaped anchor used in the scroll spy navigation.
 *
 * Reflects the active state visually and includes an accessible label for
 * screen readers.
 */
export function NavigationDot({ isActive, sectionId }: NavigationDotProps) {
  return (
    <Link
      href={`#${sectionId}`}
      className={cn(
        'w-2 h-2 rounded-sm transition-all duration-300 ease-in-out hover:scale-110 block',
        isActive
          ? 'bg-foreground scale-110'
          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
      )}
      aria-label={`Navigate to ${sectionId} section`}
    >
      <span className="sr-only">Navigate to {sectionId}</span>
    </Link>
  );
}
