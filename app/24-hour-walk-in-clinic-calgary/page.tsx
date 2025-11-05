import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Phone, MapPin, AlertCircle, Check } from "lucide-react";
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
  title: "24-Hour Walk-In Clinic Calgary | Open Late Until 11 PM",
  description: "Open until 11 PM every day for after-hours care. Real doctors, no appointment needed. Calgary's extended-hours walk-in clinic.",
  keywords: ["24 hour walk-in clinic calgary", "clinic open late", "after hours doctor", "extended hours clinic calgary"],
  alternates: {
    canonical: "https://nowmedical.ca/24-hour-walk-in-clinic-calgary"
  }
};

export default function TwentyFourHourClinicPage() {
  const extendedHoursBenefits = [
    "Open 7:30 AM - 11:00 PM (extended hours)",
    "Open 7 days a week including holidays",
    "No appointment needed — walk-ins welcome",
    "Real family doctors on-site",
    "Shorter wait times than emergency rooms",
    "Convenient NE Calgary location with free parking"
  ];

  const whatWeTreat = [
    {
      text: 'Cold, flu, sore throat, fever'
    },
    {
      text: 'UTIs, rashes, ear or sinus infections'
    },
    {
      text: "Sprains, minor injuries, muscle pain"
    },
    {
      text: "Cuts, burns, or insect bites"
    },
    {
      text: "Prescription renewals and follow-ups"
    },
  ];

  const whyChoose = [
    {
      text: "Open 7:30 AM – 11 PM, 7 days a week"
    },
    {
      text: "Open on weekends and holidays"
    },
    {
      text: "Real family doctors on-site"
    },
    {
      text: "Shorter waits than hospitals or urgent care centres"
    },
    {
      text: "Free parking & easy to All Calgary areas."
    }
  ];

  const faqSchema = generateFAQSchema([
    {
      question: "Is it truly 24 hours?",
      answer: "We're open extended hours from 7:30 AM to 11:00 PM every day of the week, including weekends and holidays. This gives you 15.5 hours of daily access — much longer than regular clinics."
    },
    {
      question: "Can I walk in without an appointment?",
      answer: "Yes! No appointment needed. Walk in anytime during our extended hours 7:30 AM to 11:00 PM."
    },
    {
      question: "Are you open on weekends and holidays?",
      answer: "Yes, we're open every single day including weekends and statutory holidays with the same extended hours."
    }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Extended hours walk-in clinic in Calgary. Open 7:30 AM to 11 PM daily. Real doctors, no appointment needed."
  });

  return (
    <>
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
                    <span className="text-[#299470] " >24-Hour Walk-In Clinic Calgary </span>
                    (Open Until 11 PM Daily)
                  </h1>

                  <p className="text-base  text-foreground mb-4">
                    Looking for a <b>24-hour walk-in clinic in Calgary?</b><br />Now Medical Clinic is one of <b>Calgary’s latest-open medical clinics — 7:30 AM to 11 PM, every day including weekends and holidays.</b><br /> We’re your trusted <b>after-hours alternative to 24-hour clinics,</b> offering <b>real doctors, shorter waits, and free parking.</b>
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

          {/* What we Treat */}
          <WhyChooseSection
            title="When to"
            title_2="Visit Now"
            subtitle="Medical Clinic"
            items={whatWeTreat}
            image={bg_img.src}
            h2_color_1='text-[#299470]'
            h2_color_2='text-[#000000]'
            h2_sub_color='text-[#299470]'
            para_after={<>We're here 7 days a week — perfect for anyone searching for <b>"24-hour urgent care"</b> or <b>"after-hours medical clinic."</b></>}
          />

          {/* why choose  */}
          <WhyChooseSection
            title="Why Patients"
            subtitle=""
            title_2="Choose Us"
            items={whyChoose}
            image={whyChoose_img.src}
            h2_color_1='text-[#299470]'
            h2_color_2='text-[#303030]'
            order="order-first"
            bg_color="bg-[#F1F9F4] "
            py=" pt-30 pb-22"
          />

          {/* Map Section */}
          <FindUsSection
            bgColor="bg-white"
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
            title='24-Hour Walk-In Clinic Calgary | Open Late 7 '
            title_2="Days a Week"
            description={<>Searching for a 24-hour walk-in clinic in Calgary? We're open until 11 PM daily — real<br/> doctors, short waits, open weekends & holidays. Call 587-391-8188.</>}
          />


        </main>

        <Footer />
      </div>
    </>
  );
}

