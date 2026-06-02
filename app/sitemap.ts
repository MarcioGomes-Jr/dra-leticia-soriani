import type { MetadataRoute } from 'next'

const siteUrl = 'https://www.draleticiasoriani.com.br'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date('2026-06-02'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
