import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Navigation, Check } from "lucide-react";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Walk-In Clinic Near Foothills Hospital | Open 7 Days Until 11 PM",
  description: "Non-emergency care near Foothills Hospital. Walk in anytime — open 7 days until 11 PM. Avoid ER wait times.",
  keywords: ["walk in clinic near foothills hospital", "clinic near foothills", "non emergency clinic calgary northwest"],
  alternates: {
    canonical: "https://nowmedical.ca/walk-in-clinic-near-foothills-hospital"
  }
};

export default function FoothillsHospitalPage() {
  const benefits = [
    "Convenient to Foothills Medical Centre area",
    "Walk-in service — no appointment needed",
    "Average wait time under 30 minutes",
    "Open until 11 PM every day",
    "Free parking available",
    "Experienced family doctors"
  ];

  const faqSchema = generateFAQSchema([
    {
      question: "Where are you located relative to Foothills Hospital?",
      answer: "We're located at 2520 23 St NE #19 in Calgary. We serve patients from all areas including those near Foothills Medical Centre."
    },
    {
      question: "Should I go to walk-in or Foothills ER?",
      answer: "For non-emergency conditions, our walk-in clinic offers much shorter wait times than the Foothills ER. Visit the ER for life-threatening emergencies only."
    }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Walk-in clinic serving Calgary including Foothills area. Non-emergency care, open until 11 PM daily."
  });

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={faqSchema} />
      
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="bg-gradient-to-b from-[#E8F5F3] to-white py-16">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <MapPin className="h-4 w-4" />
                  Serving Foothills Area
                </div>
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
                  <span className="text-foreground">Walk-In Clinic Near</span>
                  <br />
                  <span className="text-[#299470]">Foothills Hospital</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  <strong>Skip the hospital ER wait.</strong> Walk in for non-emergency care — open 7 days until 11 PM.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F]" asChild>
                    <Link href="/contact"><Navigation className="mr-2 h-5 w-5" />Get Directions</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-[#299470] text-[#299470]" asChild>
                    <a href="tel:587-391-8188"><Phone className="mr-2 h-5 w-5" />587-391-8188</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Clinic?</h2>
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

          <section className="py-16 bg-[#299470] text-white">
            <div className="container text-center">
              <h2 className="text-3xl font-bold mb-4">Visit Us Today</h2>
              <p className="text-lg mb-8">Walk in anytime — no appointment needed. Open until 11 PM daily.</p>
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:587-391-8188"><Phone className="mr-2 h-5 w-5" />Call 587-391-8188</a>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

