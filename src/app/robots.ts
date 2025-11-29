import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [],
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [],
        crawlDelay: 0,
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow: [],
        crawlDelay: 0,
      },
    ],
    sitemap: [
      'https://www.falconmedya.com/sitemap.xml',
      'https://www.falconmedya.com/sitemap-0.xml',
    ],
    host: 'https://www.falconmedya.com',
  }
}

