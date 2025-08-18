'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const DURATION_MS = 1200;
const SCRAMBLE_CHARS = '.';

/**
 * Animate the last word of every visible <h1> with a brief scramble effect.
 *
 * On first intersection, replaces the last word with a span and animates
 * through pseudo-random characters before resolving to the final text. Cleans
 * up IntersectionObserver and pending RAF callbacks on unmount or route change.
 */
function runScramble(element: HTMLElement, finalText: string) {
  const length = finalText.length;
  if (length === 0) return () => {};

  let rafId = 0;
  const startAt = performance.now();

  const step = (now: number) => {
    const t = Math.min(1, (now - startAt) / DURATION_MS);
    const revealCount = Math.floor(t * length);

    let next = finalText.slice(0, revealCount);
    for (let i = revealCount; i < length; i++) {
      const idx = Math.floor(Math.random() * SCRAMBLE_CHARS.length);
      const rand = SCRAMBLE_CHARS[idx] ?? '';
      next += i === revealCount ? rand.toUpperCase() : rand.toLowerCase();
    }

    element.textContent = next;

    if (t < 1) {
      rafId = requestAnimationFrame(step);
    } else {
      element.textContent = finalText;
    }
  };

  rafId = requestAnimationFrame(step);
  return () => cancelAnimationFrame(rafId);
}

function wrapLastWordInSpan(root: HTMLElement): HTMLElement | null {
  const existing = root.querySelector(
    'span[data-scramble-target="true"]'
  ) as HTMLElement | null;
  if (existing) return existing;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let lastText: Text | null = null;
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const text = (node as Text).nodeValue || '';
    if (text.trim().length > 0) lastText = node as Text;
  }
  if (!lastText || !lastText.nodeValue) return null;

  const value = lastText.nodeValue;
  const match = value.match(/(\S+)(\s*)$/);
  if (!match) return null;

  const word = match[1];
  const trailing = match[2] ?? '';
  const before = value.slice(0, value.length - match[0].length);

  const parent = lastText.parentNode as Node;
  if (!parent) return null;

  if (before) parent.insertBefore(document.createTextNode(before), lastText);

  const span = document.createElement('span');
  span.dataset.scrambleTarget = 'true';
  span.textContent = word;
  parent.insertBefore(span, lastText);

  if (trailing) parent.insertBefore(document.createTextNode(trailing), lastText);

  parent.removeChild(lastText);
  return span as HTMLElement;
}

export function ScrambleH1() {
  const pathname = usePathname();

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('h1')) as HTMLElement[];
    const cleanups: Array<() => void> = [];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const element = entry.target as HTMLElement;
          if (
            entry.isIntersecting &&
            element &&
            element.dataset.scrambleInit !== 'true'
          ) {
            element.dataset.scrambleInit = 'true';
            const targetSpan = wrapLastWordInSpan(element);
            if (targetSpan) {
              const finalText = targetSpan.textContent ?? '';
              cleanups.push(runScramble(targetSpan, finalText));
            }
            observer.unobserve(element);
          }
        }
      },
      { root: null, threshold: 0.25 }
    );

    headings.forEach((h) => observer.observe(h));

    return () => {
      observer.disconnect();
      for (const dispose of cleanups) dispose();
    };
  }, [pathname]);

  return null;
}
