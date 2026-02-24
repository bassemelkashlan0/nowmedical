import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nowmedical.ca'
  
  // Define all routes matching the XML sitemap exactly
  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/reviews', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/meet-our-doctors', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/urgent-care-calgary', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/late-night-clinic', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/24-hour-walk-in-clinic-calgary', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/walk-in-clinic-weekends', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/patient-experience', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/all-services', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/hospital-peter-lougheed', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-near-foothills-hospital', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-near-rockyview-hospital', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-near-alberta-childrens-hospital', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-near-south-health-campus', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-near-sheldon-Childrens-health-centre', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/hospital-wait-times', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/family-doctors-accepting-new-patients', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/female-family-doctor-calgary', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/driver-medical-exam', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/best-walk-in-clinic-calgary', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/walk-in-clinic-downtown-calgary', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-ne-calgary', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-nw-calgary', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-se-calgary', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-sw-calgary', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  // Fixed date matching the XML sitemap
  const fixedDate = new Date('2025-11-21T18:49:12+01:00')
  
  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: fixedDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}

