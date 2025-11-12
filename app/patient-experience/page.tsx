import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StructuredData, generateVideoObjectSchema } from "@/lib/structured-data";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";
import { YouTubeVideosGrid } from "@/components/youtube-videos-grid";

export const metadata: Metadata = {
  title: "Patient Testimonials & Reviews | Now Medical Clinic Calgary",
  description: "Watch and read real patient testimonials from Now Medical Clinic Calgary. See what patients say about our walk-in clinic and family doctors.",
  keywords: ["patient testimonials", "medical clinic reviews", "patient experience", "calgary clinic reviews", "doctor reviews"],
  alternates: {
    canonical: "https://nowmedical.ca/patient-experience"
  }
};

export default function PatientExperiencePage() {
  // Note: Video schemas will be generated dynamically from YouTube videos
  // For now, we'll use a basic schema
  const videoSchemas = [
    generateVideoObjectSchema({
      name: "Patient Testimonials - Now Medical Clinic",
      description: "Watch real patient testimonials from Now Medical Clinic Calgary",
      thumbnailUrl: "https://nowmedical.ca/images/patient-testimonials.jpg",
      uploadDate: new Date().toISOString().split('T')[0]
    })
  ];

  return (
    <>
      {videoSchemas.map((schema, index) => (
        <StructuredData key={index} data={schema} />
      ))}

      <div className="flex min-h-screen flex-col">
        {/* Header */}
        <Header />
        {/* Live Status Bar */}
        <LiveStatusBanner />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-[#F1F9F4] py-17">
            <div className="container">
              <div className="text-start">
                <h1 className="text-6xl text-[#303030] font-bold ">
                  What <span className="text-[#299470]">Patients Say</span>
                </h1>
              </div>
            </div>
          </section>

          {/* YouTube Videos Grid */}
          <YouTubeVideosGrid maxResults={50} />

        </main>

        <Footer />
      </div>
    </>
  );
}