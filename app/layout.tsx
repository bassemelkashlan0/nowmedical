import type React from "react"
import type { Metadata } from "next"
import { Sora } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

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
  title: "Walk-In Clinic Calgary | Open 7 Days Until 11 PM | Now Medical Clinic",
  description:
    "Calgary's trusted walk-in clinic. Real doctors, open daily until 11 PM. Walk-ins welcome — no appointment needed.",
  generator: "nowmedical.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${fsJoey.variable} ${sora.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
