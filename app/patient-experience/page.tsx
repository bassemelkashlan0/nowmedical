import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTABannerSection } from "@/sections";
import { Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StructuredData, generateVideoObjectSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Testimonials & Reviews | Now Medical Clinic Calgary",
  description: "Watch and read real patient testimonials from Now Medical Clinic Calgary. See what patients say about our walk-in clinic and family doctors.",
  keywords: ["patient testimonials", "medical clinic reviews", "patient experience", "calgary clinic reviews", "doctor reviews"],
  alternates: {
    canonical: "https://nowmedical.ca/patient-experience"
  }
};

export default function PatientExperiencePage() {
  const videoTestimonials = [
    {
      name: "Bessie Cooper",
      image: "/images/about-us/bessie-cooper.png",
      quote: "Finally a clinic open late that actually cares about patients."
    },
    {
      name: "Jenny Wilson",
      image: "/images/about-us/jenny-wilson.png",
      quote: "Friendly staff, short wait times, and doctors who listen."
    },
    {
      name: "Cameron Williamson",
      image: "/images/about-us/cameron-williamson.png",
      quote: "This clinic makes it easy for families — especially on weekends and holidays."
    },
    {
      name: "Bessie Cooper",
      image: "/images/about-us/bessie-cooper.png",
      quote: "Finally a clinic open late that actually cares about patients."
    },
    {
      name: "Jenny Wilson",
      image: "/images/about-us/jenny-wilson.png",
      quote: "Friendly staff, short wait times, and doctors who listen."
    },
    {
      name: "Cameron Williamson",
      image: "/images/about-us/cameron-williamson.png",
      quote: "This clinic makes it easy for families — especially on weekends and holidays."
    },
    {
      name: "Bessie Cooper",
      image: "/images/about-us/bessie-cooper.png",
      quote: "Finally a clinic open late that actually cares about patients."
    },
    {
      name: "Jenny Wilson",
      image: "/images/about-us/jenny-wilson.png",
      quote: "Friendly staff, short wait times, and doctors who listen."
    },
    {
      name: "Cameron Williamson",
      image: "/images/about-us/cameron-williamson.png",
      quote: "This clinic makes it easy for families — especially on weekends and holidays."
    }
  ];

  // Generate VideoObject schemas for each video testimonial
  const videoSchemas = videoTestimonials.slice(0, 3).map((testimonial, index) => 
    generateVideoObjectSchema({
      name: `Patient Testimonial - ${testimonial.name}`,
      description: testimonial.quote,
      thumbnailUrl: `https://nowmedical.ca${testimonial.image}`,
      uploadDate: new Date().toISOString().split('T')[0]
    })
  );

  return (
    <>
      {videoSchemas.map((schema, index) => (
        <StructuredData key={index} data={schema} />
      ))}
      
      <div className="flex min-h-screen flex-col">
        <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#F1F9F4] py-16">
          <div className="container">
            <div className="text-start">
              <h1 className="text-6xl font-bold mb-4">
                What <span className="text-[#299470]">Patients Say</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Video Testimonials Grid */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {videoTestimonials.map((testimonial, index) => (
                <Card key={index} className="p-0 overflow-hidden rounded hover:shadow-lg transition-shadow border-1 border-[#83C1AC] hover:bg-[#EAF4F1]">
                  <CardContent className="p-0">
                    <div className="relative aspect-video bg-gray-100">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-[290px] object-cover"
                      />
                    </div>
                    <div className="py-4 px-4">
                      <h3 className="font-semibold text-lg mb-2">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
        <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-[#299470] text-[#299470] hover:bg-[#299470]/10"
              >
                Show Less
              </Button>
            </div>
        </section>

      </main>

        <Footer />
      </div>
    </>
  );
}

