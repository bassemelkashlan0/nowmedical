import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TestimonialsSection, FindUsSection, CTABannerSection } from "@/sections";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Phone, Award, Users, Clock, Shield, Heart } from "lucide-react";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateAggregateRatingSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Walk-In Clinic Calgary | Top-Rated Clinic Open 7 Days Until 11 PM",
  description: "Now Medical Clinic — Top-Rated Walk-In Clinic in Calgary. 4.8⭐ Google Reviews. Real doctors, open 7 days until 11 PM.",
  keywords: ["best walk in clinic calgary", "top rated medical clinic calgary", "4.8 star clinic", "best doctor calgary"],
  alternates: {
    canonical: "https://nowmedical.ca/best-walk-in-clinic-calgary"
  }
};

export default function BestClinicPage() {
  const awards = [
    { icon: <Star className="w-6 h-6" />, title: "4.8★ Google Rating", description: "Based on 250+ reviews" },
    { icon: <Users className="w-6 h-6" />, title: "Trusted by Thousands", description: "Serving Calgary families since 2015" },
    { icon: <Clock className="w-6 h-6" />, title: "Extended Hours", description: "Open 7 days until 11 PM" },
    { icon: <Shield className="w-6 h-6" />, title: "Experienced Doctors", description: "Board-certified physicians" }
  ];

  const whyBest = [
    "Real family doctors (not residents or nurse practitioners)",
    "Shortest wait times in Calgary (average < 30 min)",
    "Open 7 days a week until 11 PM",
    "Free parking with convenient location",
    "Same-day appointments available",
    "Comprehensive medical services under one roof",
    "Friendly, professional staff",
    "Modern, clean facilities"
  ];

  const testimonials = [
    {
      name: "Sanny Cooper",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Really good experience at this walk-in clinic. I was in and out in about 1.5 hours, and most of that wait was for the pharmacy inside (they're a little slow). The clinic itself runs smoothly, staff were friendly, and it's very convenient to have the pharmacy on-site."
    },
    {
      name: "Bill Grabovac",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Fast service! Well managed medical clinic! Got to see a medical Dr after a 5 minute wait at 7:50pm. There was a small fee as we did not have an Alberta Health Care Number. The Dr was knowledgeable with the medical condition we experienced. Very Happy with the service we received. A+"
    },
    {
      name: "Jetta Lush",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "This place was awesome!!! Hours are wonderful, worked so well for me and my specific situation (working single parent), employees were warm and welcoming. Super fast efficient, doctor was warm, welcoming and super thorough. Great experience overall."
    },
    {
      name: "Maria S.",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Best walk-in clinic in Calgary! The doctors actually listen and take time with each patient. Never felt rushed."
    }
  ];

  const aggregateRatingSchema = generateAggregateRatingSchema({
    ratingValue: 4.8,
    reviewCount: 250
  });

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Calgary's top-rated walk-in clinic. 4.8★ Google rating. Real doctors, open 7 days until 11 PM."
  });

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={aggregateRatingSchema} />
      
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-[#E8F5F3] to-white py-16">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Award className="h-4 w-4" />
                  Top-Rated Clinic in Calgary
                </div>
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
                  <span className="text-foreground">Calgary's</span>
                  <br />
                  <span className="text-[#299470]">Best Walk-In Clinic</span>
                </h1>
                
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold">4.8</span>
                  <span className="text-muted-foreground">(250+ Reviews)</span>
                </div>

                <p className="text-lg text-muted-foreground mb-4">
                  <strong>Calgary's most trusted walk-in clinic.</strong> Real doctors, exceptional care, open 7 days until 11 PM.
                </p>
                <p className="text-base text-muted-foreground mb-8">
                  Rated #1 for quality care, short wait times, and patient satisfaction.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white" asChild>
                    <Link href="tel:587-391-8188" className="flex items-center gap-2">
                      <img src="/icons/btn_phone-outline-icon.svg" alt="Phone" className="w-5 h-5 brightness-0 invert" />
                      Call: 587-391-8188
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent"
                    asChild
                  >
                    <Link href="tel:587-391-8188" className="flex items-center gap-2">
                      <img src="/icons/btn-walking-outline-icon.svg" alt="Walk In" className="w-5 h-5" />
                      Walk In Today
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Awards & Recognition */}
          <section className="py-16 bg-white">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why We're Rated <span className="text-[#299470]">The Best</span></h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Recognized for excellence in patient care and service.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {awards.map((award, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-[#E8F5F3] flex items-center justify-center text-[#299470]">
                          {award.icon}
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{award.title}</h3>
                      <p className="text-sm text-muted-foreground">{award.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Why We're the Best */}
          <section className="py-16 bg-gray-50">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">What Makes Us <span className="text-[#299470]">The Best?</span></h2>
                </div>

                <div className="grid gap-4">
                  {whyBest.map((reason, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-[#E8F5F3] flex items-center justify-center flex-shrink-0">
                          <Heart className="h-5 w-5 text-[#299470]" />
                        </div>
                        <span className="font-medium">{reason}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Patient Reviews */}
          <TestimonialsSection
            title="What Our Patients Say"
            testimonials={testimonials}
          />

          {/* Find Us */}
          <FindUsSection
            customButtons={
              <>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg font-bold"
                  asChild
                >
                  <Link href="tel:587-391-8188" className="flex items-center gap-2">
                    <img src="/icons/solar_phone-outline.svg" alt="Phone" className="w-5 h-5" />
                    Call: 587-391-8188
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-[#299470] hover:bg-[#256358] text-white font-bold text-lg"
                  asChild
                >
                  <Link
                    href="https://share.google/CkrlunWzewWZjaPmv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Get Direction on Google Map
                    <img src="/icons/uil-arrow-up-right.svg" alt="" className="w-5 h-5 brightness-0 invert" />
                  </Link>
                </Button>
              </>
            }
          />

          {/* CTA */}
          <CTABannerSection
            title="Experience Calgary's Best Walk-In Clinic. Visit us today!"
            primaryButtonText="Walk In Today"
            primaryButtonLink="/walk-in-clinic"
          />
        </main>

        <Footer />
      </div>
    </>
  );
}

