/**
 * Structured Data (JSON-LD) Utilities for SEO
 * 
 * This file contains functions to generate structured data for different schema types
 * to help search engines better understand the content on the website.
 */

export interface LocalBusinessSchema {
  name: string;
  description: string;
  url: string;
  telephone: string[];
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  priceRange?: string;
  acceptsReservations?: boolean;
}

export interface PhysicianSchema {
  name: string;
  specialty: string;
  medicalSpecialty: string;
  gender?: string;
  description?: string;
  telephone: string;
  worksFor: {
    name: string;
    url: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AggregateRatingSchema {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

export interface VideoObjectSchema {
  name: string;
  description: string;
  thumbnailUrl?: string;
  uploadDate?: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
}

/**
 * Generate LocalBusiness + MedicalBusiness Schema
 */
export function generateLocalBusinessSchema(data: LocalBusinessSchema) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness", "MedicalClinic"],
    "name": data.name,
    "description": data.description,
    "url": data.url,
    "telephone": data.telephone[0],
    "email": data.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data.address.streetAddress,
      "addressLocality": data.address.addressLocality,
      "addressRegion": data.address.addressRegion,
      "postalCode": data.address.postalCode,
      "addressCountry": data.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": data.geo.latitude,
      "longitude": data.geo.longitude
    },
    "openingHoursSpecification": data.openingHours.map(hours => {
      const [days, time] = hours.split(": ");
      const [open, close] = time.split("-").map(t => t.trim());
      
      let dayOfWeek: string[] = [];
      if (days.includes("Monday-Sunday")) {
        dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      } else if (days.includes("Monday-Friday")) {
        dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
      }

      return {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": dayOfWeek,
        "opens": open,
        "closes": close
      };
    }),
    "priceRange": data.priceRange || "$$",
    "acceptsReservations": data.acceptsReservations ?? false,
    "medicalSpecialty": ["Family Medicine", "Walk-in Clinic", "Urgent Care"],
    "availableService": [
      {
        "@type": "MedicalService",
        "name": "Walk-in Clinic",
        "description": "No appointment needed walk-in medical services"
      },
      {
        "@type": "MedicalService",
        "name": "Family Medicine",
        "description": "Comprehensive family doctor services"
      },
      {
        "@type": "MedicalService",
        "name": "Urgent Care",
        "description": "Non-emergency urgent medical care"
      }
    ]
  };
}

/**
 * Generate Physician Schema
 */
export function generatePhysicianSchema(data: PhysicianSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": data.name,
    "medicalSpecialty": data.medicalSpecialty,
    "specialty": data.specialty,
    "gender": data.gender,
    "description": data.description,
    "telephone": data.telephone,
    "worksFor": {
      "@type": "MedicalClinic",
      "name": data.worksFor.name,
      "url": data.worksFor.url
    }
  };
}

/**
 * Generate FAQPage Schema
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generate AggregateRating Schema
 */
export function generateAggregateRatingSchema(data: AggregateRatingSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Now Medical Clinic",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": data.ratingValue,
      "reviewCount": data.reviewCount,
      "bestRating": data.bestRating || 5,
      "worstRating": data.worstRating || 1
    }
  };
}

/**
 * Generate Organization Schema
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Now Medical Clinic",
    "alternateName": "Now Medical",
    "url": "https://nowmedical.ca",
    "logo": "https://nowmedical.ca/logo.png",
    "description": "Calgary's trusted walk-in clinic and family doctor practice. Open 7 days a week until 11 PM.",
    "telephone": "587-391-8188",
    "email": "clinic@nowmedical.ca",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2520 23 St NE #19",
      "addressLocality": "Calgary",
      "addressRegion": "AB",
      "postalCode": "T2E 8L2",
      "addressCountry": "CA"
    },
    "sameAs": [
      "https://www.facebook.com/nowmedicalclinic",
      "https://www.instagram.com/nowmedicalclinic"
    ]
  };
}

/**
 * Generate Breadcrumb Schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * Generate VideoObject Schema
 */
export function generateVideoObjectSchema(data: VideoObjectSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": data.name,
    "description": data.description,
    "thumbnailUrl": data.thumbnailUrl,
    "uploadDate": data.uploadDate,
    "duration": data.duration,
    "contentUrl": data.contentUrl,
    "embedUrl": data.embedUrl
  };
}

/**
 * Generate Place Schema (for contact page with map location)
 */
export function generatePlaceSchema(data: LocalBusinessSchema) {
  return {
    "@context": "https://schema.org",
    "@type": ["Place", "MedicalClinic"],
    "name": data.name,
    "description": data.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data.address.streetAddress,
      "addressLocality": data.address.addressLocality,
      "addressRegion": data.address.addressRegion,
      "postalCode": data.address.postalCode,
      "addressCountry": data.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": data.geo.latitude,
      "longitude": data.geo.longitude
    },
    "telephone": data.telephone[0],
    "url": data.url,
    "hasMap": "https://www.google.com/maps/place/Now+Medical+Clinic"
  };
}

/**
 * Component to render structured data in the page head
 */
export function StructuredData({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Default clinic data for reuse across pages
 */
export const CLINIC_DATA = {
  name: "Now Medical Clinic",
  description: "Calgary's trusted walk-in clinic. Real doctors, open daily until 11 PM. Walk-ins welcome — no appointment needed.",
  url: "https://nowmedical.ca",
  telephone: ["587-391-8188", "587-387-7254"],
  email: "clinic@nowmedical.ca",
  address: {
    streetAddress: "2520 23 St NE #19",
    addressLocality: "Calgary",
    addressRegion: "AB",
    postalCode: "T2E 8L2",
    addressCountry: "CA"
  },
  geo: {
    latitude: 51.0800,
    longitude: -113.9760
  },
  openingHours: [
    "Monday-Sunday: 7:30 AM - 11:00 PM"
  ],
  priceRange: "$$",
  acceptsReservations: false
};

