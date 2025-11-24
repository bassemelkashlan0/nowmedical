import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Navigation, Check } from "lucide-react";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Walk-In Clinic Near Peter Lougheed Hospital | Open 7 Days Until 11 PM",
  description: "Non-emergency care near Peter Lougheed Hospital. Walk in anytime — open 7 days until 11 PM. Avoid ER wait times.",
  keywords: ["walk in clinic near peter lougheed hospital", "clinic near peter lougheed", "non emergency clinic calgary"],
  alternates: {
    canonical: "https://nowmedical.ca/walk-in-clinicnear-peter-lougheed-hospital"
  }
};

export default function PeterLougheedHospitalPage() {
  const benefits = [
    "Just minutes from Peter Lougheed Hospital",
    "Walk-in service — no appointment needed",
    "Average wait time under 30 minutes",
    "Open until 11 PM every day",
    "Free parking available",
    "Real family doctors (not residents)"
  ];

  const faqSchema = generateFAQSchema([
    {
      question: "Where are you located near Peter Lougheed Hospital?",
      answer: "We're located at 2520 23 St NE #19, just minutes from Peter Lougheed Hospital. Easy to access with free parking."
    },
    {
      question: "Should I go to the walk-in clinic or Peter Lougheed ER?",
      answer: "For non-emergency conditions like minor injuries, infections, or illness, our walk-in clinic offers much shorter wait times. Visit Peter Lougheed ER for life-threatening emergencies only."
    },
    {
      question: "What are your hours near Peter Lougheed?",
      answer: "We're open 7:30 AM to 11:00 PM every day, including weekends and holidays."
    }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Walk-in clinic near Peter Lougheed Hospital. Non-emergency care, short wait times. Open until 11 PM daily."
  });

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={faqSchema} />
      
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-[#E8F5F3] to-white py-16">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <MapPin className="h-4 w-4" />
                    Near Peter Lougheed Hospital
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
                    <span className="text-foreground">Walk-In Clinic Near</span>
                    <br />
                    <span className="text-[#299470]">Peter Lougheed Hospital</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-4">
                    <strong>Skip the hospital ER wait.</strong> Walk in for non-emergency care — open 7 days until 11 PM.
                  </p>
                  <p className="text-base text-muted-foreground mb-8">
                    Located just minutes from Peter Lougheed Centre. Faster service for non-emergency conditions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white" asChild>
                      <Link href="/contact">
                        <Navigation className="mr-2 h-5 w-5" />
                        Get Directions
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#299470] text-[#299470] hover:bg-[#299470]/10"
                      asChild
                    >
                      <a href="tel:587-391-8188">
                        <Phone className="mr-2 h-5 w-5" />
                        587-391-8188
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-white">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Why Choose Our Clinic Over the ER?</h2>
                  <p className="text-lg text-muted-foreground">
                    Faster service for non-emergency medical conditions.
                  </p>
                </div>

                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex items-center gap-3">
                        <Check className="h-5 w-5 text-[#299470] flex-shrink-0" />
                        <span className="font-medium">{benefit}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Location & Directions */}
          <section className="py-16 bg-gray-50">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Location & Directions</h2>
                
                <Card>
                  <CardContent className="p-8">
                    <div className="grid gap-6 md:grid-cols-2 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <MapPin className="h-5 w-5 text-[#299470]" />
                          <h3 className="font-semibold">Now Medical Clinic</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">2520 23 St NE #19</p>
                        <p className="text-sm text-muted-foreground">Calgary, AB T2E 8L2</p>
                        <p className="text-sm text-[#299470] mt-2">Just minutes from Peter Lougheed Hospital</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <Clock className="h-5 w-5 text-[#299470]" />
                          <h3 className="font-semibold">Hours</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">7 Days a Week</p>
                        <p className="text-sm font-medium">7:30 AM - 11:00 PM</p>
                        <p className="text-sm text-[#299470] mt-1">Including weekends & holidays</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button className="bg-[#299470] hover:bg-[#2D7B6F]" asChild>
                          <Link href="/contact">
                            <Navigation className="mr-2 h-4 w-4" />
                            Get Directions
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href="tel:587-391-8188">
                            <Phone className="mr-2 h-4 w-4" />
                            Call 587-391-8188
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-[#299470] text-white">
            <div className="container text-center">
              <h2 className="text-3xl font-bold mb-4">
                Near Peter Lougheed Hospital? Visit Us Today
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Walk in anytime — no appointment needed. Open until 11 PM daily.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:587-391-8188">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 587-391-8188
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#299470]" asChild>
                  <Link href="/urgent-care-calgary">Urgent Care →</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

