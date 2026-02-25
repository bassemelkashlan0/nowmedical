import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nowmedical.ca'
  
  // Routes derived directly from the provided XML sitemap
  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/reviews', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/walk-in-clinic', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/meet-our-doctors', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-ne-calgary', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-nw-calgary', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-sw-calgary', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-se-calgary', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-downtown-calgary', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/urgent-care-calgary', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/late-night-clinic', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/24-hour-walk-in-clinic-calgary', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/walk-in-clinic-weekends', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/driver-medical-exam', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/patient-experience', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/all-services', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/family-doctors-accepting-new-patients', priority: 0.64, changeFrequency: 'weekly' as const },
  ]

  // Fixed date matching the XML sitemap export
  const fixedDate = new Date('2026-02-25T05:37:36+00:00')
  
  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: fixedDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}

