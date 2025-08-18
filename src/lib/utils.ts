import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind class names intelligently with conditional support.
 *
 * A thin wrapper combining `clsx` and `tailwind-merge` to avoid conflicting
 * utility classes while keeping ergonomic conditional composition.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
