'use client';

import dynamic from 'next/dynamic';

const SmoothScrollLazy = dynamic(() => import('./smooth-scroll'), { ssr: false });

export default function SmoothScrollClient() {
  return <SmoothScrollLazy />;
}
