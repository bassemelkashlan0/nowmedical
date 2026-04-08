import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nowmedical.ca'
  
  // Public routes (exclude /admin and /api)
  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/all-services', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/arabic', priority: 0.5, changeFrequency: 'monthly' as const },
    { url: '/spanish', priority: 0.5, changeFrequency: 'monthly' as const },
    { url: '/best-walk-in-clinic-calgary', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/driver-medical-exam', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/drivers-medical-calgary', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/family-doctors-accepting-new-patients', priority: 0.64, changeFrequency: 'weekly' as const },
    { url: '/faq', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/female-family-doctor-calgary', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/hospital-peter-lougheed', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/hospital-wait-times', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/late-night-clinic', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/meet-our-doctors', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/near-hospital', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/after-hours-walk-in-clinic', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/patient-experience', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/reviews', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/services', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/urgent-care-calgary', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/walk-in-clinic', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/24-hour-walk-in-clinic-calgary', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/walk-in-clinic-downtown-calgary', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-ne-calgary', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-nw-calgary', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-se-calgary', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-sw-calgary', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-weekends', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/walk-in-clinic-near-alberta-childrens-hospital', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-near-foothills-hospital', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-near-peter-lougheed-hospital', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-near-rockyview-hospital', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-near-sheldon-Childrens-health-centre', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-near-south-health-campus', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  const lastModified = new Date()
  
  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}

