import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/components/common/theme-provider';
import { ScrollSpyNavigation } from '@/components/common/scroll-spy-navigation';
import { ScrambleH1 } from '@/components/common/scramble-h1';
import './globals.css';

/**
 * App root layout and global metadata configuration.
 *
 * - Defines SEO metadata (Open Graph, Twitter, robots) with absolute URLs based
 *   on `NEXT_PUBLIC_SITE_URL`.
 * - Exposes viewport hints for theming.
 * - Wraps all routes with providers and persistent UI elements.
 */

/** Site-wide metadata used by Next.js to generate head tags and social cards. */
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Angelo Manalo | Portfolio',
    template: '%s | Angelo Manalo',
  },
  description:
    'Angelo Manalo — BSCS AI student at Far Eastern University Institute of Technology. Portfolio showcasing projects, development, and design work.',
  keywords: [
    // Primary name/brand and intent
    'angelo manalo',
    'angelo lopez manalo',
    'angelo manalo portfolio',
    'angelo manalo feu',
    'angelo manalo ai',
    'feu tech',
    'bscs ai student',
    // Skills and focuses
    'web development',
    'frontend developer',
    'react',
    'next.js',
    'tailwind css',
    'typescript',
    'shadcn ui',
    'ui design',
    'graphic design',
    'ai projects',
    // Long-tail & discovery
    'philippines frontend developer',
    'student developer portfolio',
    'next.js portfolio',
    'react portfolio',
  ],
  authors: [{ name: 'Angelo Manalo' }],
  creator: 'Angelo Manalo',
  applicationName: 'Angelo Manalo | Portfolio',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Angelo Manalo | Portfolio',
    siteName: 'Angelo Manalo',
    description:
      'Portfolio of Angelo Manalo, BSCS AI student at FEU Tech — design, code, and AI.',
    images: [
      {
        url: '/avatar-light-mode.jpg',
        width: 1200,
        height: 630,
        alt: 'Angelo Manalo — Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angelo Manalo | Portfolio',
    description:
      'Portfolio of Angelo Manalo, BSCS AI student at FEU Tech — design, code, and AI.',
    images: ['/avatar-light-mode.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Angelo Manalo',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  manifest: '/site.webmanifest',
};

/** Viewport hints for supported browsers. */
export const viewport: Viewport = {
  themeColor: '#000000',
};

/**
 * Root layout that renders the <html> and <body> shells for every route.
 *
 * Injects JSON-LD for basic SEO, the theme provider, and persistent UI chrome
 * (animated title and scroll spy navigation).
 *
 * @param children React nodes for the current route segment.
 * @returns The global HTML document layout.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Absolute URLs for social cards */}
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/avatar-light-mode.jpg`}
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/avatar-light-mode.jpg`}
        />
        {/* JSON-LD: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Angelo Manalo',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
            }),
          }}
        />
        {/* JSON-LD: Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Angelo Manalo',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
              jobTitle: 'BSCS AI Student',
              worksFor: {
                '@type': 'CollegeOrUniversity',
                name: 'Far Eastern University Institute of Technology',
              },
              sameAs: [],
            }),
          }}
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ScrambleH1 />
          <ScrollSpyNavigation />
        </ThemeProvider>
      </body>
    </html>
  );
}
