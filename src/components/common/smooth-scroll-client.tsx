'use client';

import dynamic from 'next/dynamic';

const SmoothScrollLazy = dynamic(() => import('./smooth-scroll'), {
  ssr: false,
});

/**
 * Client wrapper that defers loading of the Lenis/GSAP smooth scrolling logic
 * to the client only. This avoids SSR mismatches and keeps initial HTML clean.
 */
export default function SmoothScrollClient() {
  return <SmoothScrollLazy />;
}