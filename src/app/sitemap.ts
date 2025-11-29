import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.falconmedya.com'
  const currentDate = new Date()
  const yesterdayDate = new Date(currentDate.setDate(currentDate.getDate() - 1))
  
  return [
    // Ana Sayfa - En Yüksek Öncelik
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1.0,
      alternates: {
        languages: {
          tr: baseUrl,
        },
      },
    },
    
    // Hizmetler Sayfaları - Çok Yüksek Öncelik
    {
      url: `${baseUrl}/hizmetler`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
      alternates: {
        languages: {
          tr: `${baseUrl}/hizmetler`,
        },
      },
    },
    {
      url: `${baseUrl}/kiralik-hacker`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
      alternates: {
        languages: {
          tr: `${baseUrl}/kiralik-hacker`,
        },
      },
    },
    {
      url: `${baseUrl}/hacker-bul`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
      alternates: {
        languages: {
          tr: `${baseUrl}/hacker-bul`,
        },
      },
    },
    
    // Hakkımızda
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: yesterdayDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          tr: `${baseUrl}/hakkimizda`,
        },
      },
    },
    
    // Yasal Sayfalar
    {
      url: `${baseUrl}/gizlilik-politikasi`,
      lastModified: yesterdayDate,
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: {
          tr: `${baseUrl}/gizlilik-politikasi`,
        },
      },
    },
    {
      url: `${baseUrl}/kvkk`,
      lastModified: yesterdayDate,
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: {
          tr: `${baseUrl}/kvkk`,
        },
      },
    },
    {
      url: `${baseUrl}/kullanim-kosullari`,
      lastModified: yesterdayDate,
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: {
          tr: `${baseUrl}/kullanim-kosullari`,
        },
      },
    },
  ]
}

