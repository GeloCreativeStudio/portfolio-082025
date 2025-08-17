'use client';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';

export type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [measureRef, { width, height }] = useMeasure();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const axis = direction === 'horizontal' ? 'x' : 'y';
    const size = direction === 'horizontal' ? width : height;
    if (!containerRef.current || !size) return;

    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / speed;

    // Kill any existing tween before creating a new one
    tweenRef.current?.kill();

    // Set initial position
    gsap.set(containerRef.current, { [axis]: from } as unknown as gsap.TweenVars);

    // Create looping tween
    tweenRef.current = gsap.to(containerRef.current, {
      [axis]: to,
      duration,
      ease: 'none',
      repeat: -1,
      onRepeat: () => {
        if (containerRef.current) {
          gsap.set(containerRef.current, { [axis]: from } as unknown as gsap.TweenVars);
        }
      },
    } as unknown as gsap.TweenVars);

    return () => {
      tweenRef.current?.kill();
      tweenRef.current = null;
    };
  }, [width, height, gap, direction, reverse, speed]);

  const handleMouseEnter = () => {
    if (!speedOnHover || !tweenRef.current) return;
    tweenRef.current.timeScale(speedOnHover / speed);
  };

  const handleMouseLeave = () => {
    if (!speedOnHover || !tweenRef.current) return;
    tweenRef.current.timeScale(1);
  };

  return (
    <div className={cn('overflow-hidden', className)}>
      <div
        className="flex w-max"
        style={{
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={(node) => {
          containerRef.current = node;
          measureRef(node);
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
