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
    { url: '/walk-in-clinicweekends', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/patient-experience', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/all-services', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/hospital-peter-lougheed', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinicnear-foothills-hospital', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinicnear-rockyview-hospital', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinicnear-alberta-childrens-hospital', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinicnear-south-health-campus', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinicnear-sheldon-Childrens-health-centre', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/hospital-wait-times', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/family-doctors-accepting-new-patients', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/female-family-doctor-calgary', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/driver-medical-exam', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/best-walk-in-clinic-calgary', priority: 1.0, changeFrequency: 'weekly' as const },
  ]

  // Fixed date matching the XML sitemap
  const fixedDate = new Date('2025-11-22T10:50:56+01:00')
  
  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: fixedDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}

