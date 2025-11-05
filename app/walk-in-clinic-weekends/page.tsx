import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Phone, MapPin, Calendar, Check } from "lucide-react";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";
import { FindUsSection, WhyChooseSection } from "@/sections";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import hero_img from "@/public/images/urgent-case-hero.png";
import bg_img from "@/public/images/color-img.png";
import whyChoose_img from "@/public/images/whyChoose.png";

export const metadata: Metadata = {
  title: "Weekend Walk-In Clinic Calgary | Open Holidays Until 11 PM",
  description: "Open Saturdays, Sundays, and holidays until 11 PM. Walk in anytime — no appointment needed. Calgary's trusted weekend clinic.",
  keywords: ["walk in clinic open sunday calgary", "weekend clinic", "open holidays clinic", "saturday walk-in clinic calgary"],
  alternates: {
    canonical: "https://nowmedical.ca/walk-in-clinic-weekends"
  }
};

export default function WeekendClinicPage() {
  const whyChooseWeekend = [
    {
      text: "Open 7 Days a Week Including Stat Holidays"
    },
    {
      text: "Open Late Until 11 PM Every Night"
    },
    {
      text: "Real Family Doctors on Site"
    },
    {
      text: "Short Wait Times & Free Parking"
    }
  ];

  const commonReasons = [
    {
      text: "Colds, flu, sore throat, fever"
    },
    {
      text: "Ear or sinus infections, allergies, asthma"
    },
    {
      text: "UTIs, rashes, or minor skin issues"
    },
    {
      text: "Sprains, back pain, muscle aches"
    },
    {
      text: "Prescription renewals or medical forms"
    }
  ];

  const faqSchema = generateFAQSchema([
    {
      question: "Are you open on Saturdays and Sundays?",
      answer: "Yes! We're open every Saturday and Sunday from 7:30 AM to 11:00 PM with the same services as weekdays."
    },
    {
      question: "What about statutory holidays?",
      answer: "Yes, we're open on all statutory holidays including Christmas, New Year's, and other Canadian holidays."
    },
    {
      question: "Do I need an appointment on weekends?",
      answer: "No appointment needed! Walk-ins are welcome on weekends and holidays."
    }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Weekend walk-in clinic in Calgary. Open Saturdays, Sundays, and holidays until 11 PM. No appointment needed."
  });

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={faqSchema} />
      <div className="flex min-h-screen flex-col">
        <Header />
        <LiveStatusBanner />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-[#F1F9F4] to-white pt-8 pb-14">
            <div className="container">
              <div className="grid gap-4 lg:grid-cols-2 lg:gap-4 items-center  ">
                <div>
                  <h1 className=" font-bold tracking-tight lg:text-6xl mb-4">
                    <span className="text-[#299470] " >Weekend Walk-In Clinic Calgary </span>
                    Open Saturdays, Sundays & Holidays
                  </h1>

                  <p className="text-base  text-foreground mb-4">
                    Need to see a doctor this weekend? At Now Medical Clinic, we're here when most clinics are closed. We're open every Saturday, Sunday, and even on holidays until 11 PM. Whether it's a cold that just won't go away or you need a prescription renewal before Monday, walk in today no appointment needed. Skip the hospital wait. See a real doctor this weekend.
                  </p>


                </div>

                <div className="flex justify-center items-center">
                  <img
                    src={hero_img.src}
                    alt="Now Medical Clinic Calgary doctor"
                    className="rounded-lg  "
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Our Weekend Clinic */}
          <WhyChooseSection
            title="Why Choose"
            subtitle="Our Weekend Clinic"
            title_2=""
            items={whyChooseWeekend}
            image={whyChoose_img.src}
            h2_color_1='text-[#303030]'
            h2_color_2='text-[#299470]'
            py=" pt-30 pb-22"
            order="order-last"
          />

          {/* Common Reasons Patients Visit on Weekends */}
          <WhyChooseSection
            title="Common Reasons Patients"
            title_2="Visit on Weekends"
            subtitle=""
            para="Our weekend doctors treat most medical conditions, including:"
            items={commonReasons}
            image={bg_img.src}
            h2_color_1='text-[#303030]'
            h2_color_2='text-[#299470]'
            h2_sub_color='text-[#299470]'
            IsDot={true}
            bg_color="bg-[#F1F9F4]"
            order="order-first"
          />

          {/* Map Section */}
          <FindUsSection
            bgColor="bg-white"
            showFreeParking={true}
            customButtons={
              <>
                <Button
                  size="lg"
                  className="border border-[#299470] bg-[#299470] hover:bg-[#2E8B57]/90 text-white font-bold text-lg px-[16px] py-[11px] flex items-center gap-[10px] cursor-pointer"
                  asChild
                >
                  <Link href="/services">
                    <img
                      src="/icons/solar_walking-outline.svg"
                      alt=""
                      className="w-5 h-5"
                    />
                    Walk In Now
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-white font-bold text-lg px-[16px] py-[11px] flex items-center gap-[10px] cursor-pointer"
                  asChild
                >
                  <Link href="tel:587-391-8188">
                    <img
                      src="/icons/solar_phone-outline.svg"
                      alt=""
                      className="w-5 h-5"
                    />
                    587-391-8188
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-white font-bold text-lg px-[16px] py-[11px] flex items-center gap-[10px] cursor-pointer"
                  asChild
                >
                  <Link href="https://maps.google.com/maps?q=2520%2023%20St%20NE%20%2319,%20Calgary,%20AB%20T2E%208L2" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/icons/pin-outline-icon.svg"
                      alt=""
                      className="w-5 h-5"
                    />
                    Get Direction
                  </Link>
                </Button>
              </>
            }
          />
          <div className="mt-15"></div>
          {/* CTA Banner */}
          <BottomCallAction
            title='Weekend Walk-In Clinic Calgary | Open Saturdays, Sundays & Holidays Until 11 PM'
            title_2=""
            description={<>Need a weekend doctor in Calgary? We're open Saturdays, Sundays & holidays until 11 PM, Real family doctors, short waits, free parking. Call 587-391-8188.</>}
          />


        </main>

        <Footer />
      </div>
    </>
  );
}

