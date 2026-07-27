import type React from "react"
import type { Metadata } from "next"
import { Sora } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { GlobalChatbot } from "@/components/global-chatbot"
import "../styles/globals.css"

const sora = Sora({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
})

const fsJoey = localFont({
  src: [
    {
      path: "../public/font/FS Joey-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/FS Joey-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/font/FS Joey-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/FS Joey-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/font/FS Joey-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/FS Joey-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/font/FS Joey-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/FS Joey-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/font/FS Joey-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/font/FS Joey-HeavyItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-fs-joey",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nowmedical.ca'),
  title: {
    default: "Walk-In Clinic Calgary | Open 7 Days Until 11 PM | Now Medical Clinic",
    template: "%s | Now Medical Clinic"
  },
  icons: {
    icon: "/fevicon.png",
  },

  description: "Calgary's trusted walk-in clinic. Real doctors, open daily until 11 PM. Walk-ins welcome — no appointment needed.",
  keywords: ["walk-in clinic calgary", "family doctor calgary", "urgent care calgary", "clinic near me", "open late clinic", "weekend walk-in clinic"],
  authors: [{ name: "Now Medical Clinic" }],
  creator: "Now Medical Clinic",
  publisher: "Now Medical Clinic",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://nowmedical.ca",
    title: "Walk-In Clinic Calgary | Open 7 Days Until 11 PM | Now Medical Clinic",
    description: "Calgary's trusted walk-in clinic. Real doctors, open daily until 11 PM. Walk-ins welcome — no appointment needed.",
    siteName: "Now Medical Clinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Walk-In Clinic Calgary | Open 7 Days Until 11 PM | Now Medical Clinic",
    description: "Calgary's trusted walk-in clinic. Real doctors, open daily until 11 PM. Walk-ins welcome — no appointment needed.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "AidnHmuErYZJwn9izLxLIYD-flhpMD63ls7Qyt_KrpY",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KL2LLBZZ');`,
          }}
        />
        {/* End Google Tag Manager */}
        <meta name="google-site-verification" content="AidnHmuErYZJwn9izLxLIYD-flhpMD63ls7Qyt_KrpY" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11186441600" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-11186441600');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `gtag('config', 'AW-11186441600/-XO-CJuj7eIZEICbjtYp', {
'phone_conversion_number': '587-391-8188'
});`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Now Medical Clinic",
              url: "https://nowmedical.ca/",
              logo: "https://nowmedical.ca/fevicon.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-587-391-8188",
                contactType: "customer service",
                areaServed: "CA",
                availableLanguage: "en",
              },
              sameAs: "https://nowmedical.ca/",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Now Medical Clinic",
              image: "https://nowmedical.ca/img/logo.svg",
              url: "https://nowmedical.ca/",
              telephone: "+1-587-391-8188",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2520 23 ST NE #19",
                addressLocality: "Calgary",
                addressRegion: "AB",
                postalCode: "T2E 8L2",
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 51.067117,
                longitude: -114.116798,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "07:30",
                closes: "23:00",
              },
              sameAs: "https://nowmedical.ca/",
            }),
          }}
        />
      </head>
      <body className={`${fsJoey.variable} ${sora.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KL2LLBZZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <GlobalChatbot />
        <Analytics />
      </body>
    </html>
  )
}
