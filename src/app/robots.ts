import type { MetadataRoute } from 'next';

/**
 * Robots.txt generator.
 *
 * Uses `NEXT_PUBLIC_SITE_URL` to emit consistent absolute URLs for sitemap and
 * host directives. Allows all crawlers by default.
 */
export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
