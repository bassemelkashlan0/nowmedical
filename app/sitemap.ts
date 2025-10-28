import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nowmedical.ca'
  
  // Define all routes with their priorities and change frequencies
  const routes = [
    // High priority pages
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/walk-in-clinic-calgary', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/urgent-care-calgary', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/family-doctors-accepting-new-patients', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    
    // SEO Landing Pages
    { url: '/best-walk-in-clinic-calgary', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/female-family-doctor-calgary', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/late-night-clinic', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/24-hour-walk-in-clinic-calgary', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/walk-in-clinic-weekends', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/drivers-medical-calgary', priority: 0.7, changeFrequency: 'monthly' as const },
    
    // Hospital Proximity Pages
    { url: '/walk-in-clinic-near-peter-lougheed-hospital', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-near-foothills-hospital', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-near-rockyview-hospital', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-near-alberta-childrens-hospital', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-near-south-health-campus', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/walk-in-clinic-near-sheldon-m-chumir-health-centre', priority: 0.7, changeFrequency: 'monthly' as const },
    
    // Core Pages
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/services', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/meet-our-doctors', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/reviews', priority: 0.6, changeFrequency: 'weekly' as const },
    { url: '/patient-experience', priority: 0.6, changeFrequency: 'monthly' as const },
    
    // Legacy/Additional Pages
    { url: '/hospital-wait-times', priority: 0.6, changeFrequency: 'weekly' as const },
    { url: '/near-hospital', priority: 0.6, changeFrequency: 'monthly' as const },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}

