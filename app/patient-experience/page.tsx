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
      image: "/placeholder-user.jpg",
      quote: "Finally a clinic open late that actually cares about patients."
    },
    {
      name: "Jenny Wilson",
      image: "/placeholder-user.jpg",
      quote: "Friendly staff, short wait times, and doctors who listen."
    },
    {
      name: "Cameron Williamson",
      image: "/placeholder-user.jpg",
      quote: "This clinic makes it easy for families — especially on weekends and holidays."
    },
    {
      name: "Bessie Cooper",
      image: "/placeholder-user.jpg",
      quote: "Finally a clinic open late that actually cares about patients."
    },
    {
      name: "Jenny Wilson",
      image: "/placeholder-user.jpg",
      quote: "Friendly staff, short wait times, and doctors who listen."
    },
    {
      name: "Cameron Williamson",
      image: "/placeholder-user.jpg",
      quote: "This clinic makes it easy for families — especially on weekends and holidays."
    },
    {
      name: "Bessie Cooper",
      image: "/placeholder-user.jpg",
      quote: "Finally a clinic open late that actually cares about patients."
    },
    {
      name: "Jenny Wilson",
      image: "/placeholder-user.jpg",
      quote: "Friendly staff, short wait times, and doctors who listen."
    },
    {
      name: "Cameron Williamson",
      image: "/placeholder-user.jpg",
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
        <section className="bg-gradient-to-b from-[#E8F5F3] to-white py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                What <span className="text-[#299470]">Patients Say</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Hear directly from our patients about their experiences at Now Medical Clinic. Real stories from real people in the Calgary community.
              </p>
            </div>
          </div>
        </section>

        {/* Video Testimonials Grid */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {videoTestimonials.map((testimonial, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative aspect-video bg-gray-100">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#299470] hover:bg-[#2D7B6F] transition-colors cursor-pointer">
                          <Play className="h-8 w-8 text-white fill-white ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
          </div>
        </section>

        {/* Written Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                More <span className="text-[#299470]">Patient Stories</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Read what other patients have to say about their experience at our clinic
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="/images/placeholder-user.jpg"
                      alt="Sanny Cooper"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Sanny Cooper</h4>
                      <div className="flex text-yellow-400">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Really good experience at this walk-in clinic. I was in and out in about 1.5 hours. The clinic runs smoothly, staff were friendly, and it's very convenient to have the pharmacy on-site."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="/images/placeholder-user.jpg"
                      alt="Bill Grabovac"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Bill Grabovac</h4>
                      <div className="flex text-yellow-400">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Fast service! Well managed medical clinic! Got to see a medical Dr after a 5 minute wait at 7:50pm. The Dr was knowledgeable with the medical condition we experienced. Very Happy with the service we received. A+"
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="/images/placeholder-user.jpg"
                      alt="Jetta Lush"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Jetta Lush</h4>
                      <div className="flex text-yellow-400">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "This place was awesome!!! Hours are wonderful, worked so well for me and my specific situation (working single parent), employees were warm and welcoming. Super fast efficient, doctor was warm and thorough."
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white">
                Read All Reviews
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CTABannerSection
          title="Experience quality healthcare yourself. Walk in today or call to book an appointment."
          primaryButtonText="Call 587-391-8188"
          primaryButtonLink="tel:587-391-8188"
        />
      </main>

        <Footer />
      </div>
    </>
  );
}

