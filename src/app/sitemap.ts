import type { MetadataRoute } from 'next';

/**
 * Sitemap.xml generator for the portfolio.
 *
 * Emits a small set of static routes. If the site grows, consider expanding
 * this to include dynamic content sources and last-modified timestamps per
 * entity.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Static routes in this portfolio
  const routes: MetadataRoute.Sitemap = [
    {
      url: new URL('/', siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  return routes;
}
