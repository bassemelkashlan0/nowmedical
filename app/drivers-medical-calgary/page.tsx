import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, MapPin, CheckCircle, Car, Truck, CheckIcon } from "lucide-react";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { 
  FindUsSection
} from "@/sections";

export const metadata: Metadata = {
  title: "Driver's Medical Calgary | Class 1-6 Driver Exams | Walk In or Call",
  description: "Walk in for driver's medical exams in Calgary. Class 1-6 commercial driver exams. Open daily until 11 PM. Call 587-391-8188.",
  keywords: ["drivers medical calgary", "class 1 driver medical", "commercial driver medical", "driver exam calgary", "cdl medical exam"],
  alternates: {
    canonical: "https://nowmedical.ca/drivers-medical-calgary"
  }
};

export default function DriversMedialPage() {
  const whyChooseItems = [
    { text: "Open 7 Days a Week — Until 11 PM" },
    { text: "Walk-Ins Welcome (no appointment required)" },
    { text: "Experienced Family Doctors familiar with Class 1–6 medicals" },
    { text: "Same-Day Completion of Alberta Transportation forms" },
    { text: "Convenient Calgary location with free parking" }
  ];

  const faqSchema = generateFAQSchema([
    {
      question: "Do you offer driver's medical exams in Calgary?",
      answer: "Yes! We provide driver's medical exams for all classes (1-6) including commercial drivers. Walk in or call 587-391-8188."
    },
    {
      question: "How much does a driver's medical exam cost?",
      answer: "Please call us at 587-391-8188 for current pricing. Driver's medical exams are not covered by Alberta Health Care."
    },
    {
      question: "How long does the driver's medical take?",
      answer: "Most driver's medical exams take 15-30 minutes depending on your medical history."
    },
    {
      question: "Can I walk in for a driver's medical?",
      answer: "Yes, walk-ins are welcome! We're open 7 days a week until 11 PM. We recommend calling ahead at 587-391-8188."
    }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Driver's medical exams in Calgary for Class 1-6 licenses. Walk-in or call. Open until 11 PM daily."
  });

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={faqSchema} />
      
      <div className="flex min-h-screen flex-col">
        <Header />
        
        {/* Live Status Banner */}
        <div className="bg-[#C8E6E0] border-b border-[#299470]/20">
          <div className="container py-3">
            <div className="flex items-center justify-center gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#299470] animate-pulse" />
                <span className="font-semibold text-[#1A5F56]">Walk-in Live Status</span>
              </div>
              <span className="font-bold text-[#1A5F56]">OPEN NOW</span>
              <div className="hidden sm:block h-4 w-px bg-[#299470]/30" />
              <span className="hidden sm:inline text-[#1A5F56]">Walk-in is OPEN NOW</span>
            </div>
          </div>
        </div>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-[#F1F9F4] to-white py-16 lg:py-16">
            <div className="container">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl mb-6">
                    <span className="text-[#299470]">Driver's Medical Exams in</span>
                    <br />
                    <span className="text-foreground">Calgary Walk In or Call Today</span>
                  </h1>
                  <p className="text-base text-foreground mb-4">
                    Need your <b>Driver's Medical Certificate</b> renewed?<br/><b>At Now Medical Clinic,</b> we make it simple — <b>just walk in 7 days a week until 11 PM.</b><br/>Our doctors provide <b>Class 1, 2, 3, 4, and 6 commercial driver medical exams</b> for Alberta licensing.
                  </p>
                  <p className="text-lg text-foreground mb-8">
                    No appointment needed. Fast, friendly, and fully licensed for <b>Transport Canada and Alberta Transportation</b> requirements.
                  </p>
                </div>

                <div className="relative">
                  <div className="relative">
                    <img
                      src="/images/driver-medical/driver-medical-banner.png"
                      alt="Driver's Medical Exams in Calgary"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>


        {/* Why Choose Us */}
        <section className="py-16 px-4 md:px-8">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-18 items-center">
              <div className="relative overflow-hidden">
                <img
                  src="/images/driver-medical/why-us.png"
                  alt="Why choose Now Medical Clinic for driver's medical exams in Calgary"
                  className="w-full h-[532px] object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-5xl font-bold mb-6">
                Why Drivers Choose  <br/> <span className="text-[#299470]">Now Medical Clinic</span>
                </h2>

                <ul className="space-y-4 mb-7">
                  {whyChooseItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 font-semibold text-lg text-foreground">
                      <CheckIcon className="w-6 h-6 text-[#299470] flex-shrink-0 mt-1" />
                      <span className="text-lg">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white text-lg" asChild>
                    <Link href="tel:587-391-8188"><img src="/images/driver-medical/walking-outline.svg" alt="Register as a new patient" className="w-5 h-5" />Walk In for Driver's Medical</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg"
                    asChild
                  >
                    <Link href="/services"> <img src="/images/driver-medical/phone.svg" alt="Call to Book Now" className="w-5 h-5" />Call to Book Now</Link>
                  </Button>
                  </div>
              </div>
            </div>
          </div>
        </section>


        {/* Find Us Section */}
        <FindUsSection />

        {/* Bottom Call to Action */}
        <section className="bg-[#195A44] max-w-[1240px] mx-auto rounded-[16px] p-12 my-[60px]">
          <div className="mx-auto">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
            Driver’s Medical Calgary | Class 1, 2, 3, 4, 6 <br/>Exams | Walk In or Call
            </h2>

            <p className="text-white text-base md:text-lg">
            Need a driver’s medical in Calgary? Walk in 7 days until 11 PM. Class 1–6 commercial driver exams. Fast, same-day forms. Call 587-391-8188.
            </p>
          </div>
        </section>

        </main>

        <Footer />
      </div>
    </>
  );
}

