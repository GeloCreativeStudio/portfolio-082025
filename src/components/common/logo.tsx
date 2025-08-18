'use client';

import { cn } from '../../lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'h-6', // 24px - compact/mobile
  md: 'h-8', // 32px - standard header
  lg: 'h-10', // 40px - large header/hero
  xl: 'h-12', // 48px - footer/prominent display
};

/**
 * SVG logomark component.
 *
 * Uses `currentColor` and inherits from CSS `--foreground` via className for
 * theme-aware coloring. Exposes size presets while allowing additional classes.
 */
export const Logo = ({ className, size = 'md' }: LogoProps) => {
  // Always use CSS foreground variable for fill color
  return (
    <svg
      viewBox="0 0 641 641"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-auto', sizeClasses[size], className, 'text-[var(--foreground)]')}
      fill="currentColor"
    >
      <polygon points="183.12 225.91 214.35 225.91 214.35 333.84 143.26 333.84 143.26 265.32 183.12 265.32 183.12 225.91" />
      <path d="M0,0V641H641V0ZM264.85,465.7H214.36V384.45H143.27v79.72H94V254.57h40.3V215.16h40.3V175.3h49.27v37.92h41ZM547,463.8H498.19V264.93H466.85v78.82H426.09V463.33H377.27V343.75H345.18v122h-50.5V213.22h50.5v41h40.61v79.71h31.34V254.18h40.75V214.32h49.27v39.86H547Z" />
    </svg>
  );
};
