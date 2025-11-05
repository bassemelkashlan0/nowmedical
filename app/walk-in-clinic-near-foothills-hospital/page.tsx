import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Navigation, Check } from "lucide-react";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";
import { FindUsSection, WhyChooseSection } from "@/sections";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import hero_img from "@/public/images/urgent-case-hero.png";
import bg_img from "@/public/images/color-img.png";
import whyChoose_img from "@/public/images/whyChoose.png";
import phone_icon from "@/public/icons/solar_phone-outline.svg";
import walk_icon from "@/public/icons/solar_walking-outline.svg";
import location_icon from "@/public/icons/pin-outline-icon.svg";

export const metadata: Metadata = {
  title: "Walk-In Clinic Near Foothills Hospital | Open 7 Days Until 11 PM",
  description: "Non-emergency care near Foothills Hospital. Walk in anytime — open 7 days until 11 PM. Avoid ER wait times.",
  keywords: ["walk in clinic near foothills hospital", "clinic near foothills", "non emergency clinic calgary northwest"],
  alternates: {
    canonical: "https://nowmedical.ca/walk-in-clinic-near-foothills-hospital"
  }
};

export default function FoothillsHospitalPage() {
  const whyChooseItems = [
    {
      text: "Open evenings, weekends & holidays"
    },
    {
      text: "Short wait times"
    },
    {
      text: "Family doctors on-site for adults & children"
    },
    {
      text: "Free parking, quick in-and-out"
    }
  ];

  const commonConditions = [
    {
      text: "Flu, fever, cough, sore throat, ear & sinus infections"
    },
    {
      text: "UTIs, rashes, skin concerns, pink eye"
    },
    {
      text: "Prescription renewals, work/school notes"
    }
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
        <LiveStatusBanner />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-[#F1F9F4] to-white pt-8 pb-14">
            <div className="container">
              <div className="grid gap-4 lg:grid-cols-2 lg:gap-4 items-center  ">
                <div>
                  <h1 className=" font-bold tracking-tight lg:text-6xl mb-4">
                    Walk-In Clinic Near <br /><span className="text-[#299470]">Foothills Medical Centre</span> <br />Open 7 Days Until 11 PM
                  </h1>

                  <p className="text-base  text-foreground mb-4">
                    Need medical care and want to skip long ER waits? Walk in and see a real family doctor today <strong>No Appointment needed.</strong>
                  </p>
                  <div className="flex flex-col pt-9 sm:flex-row gap-4">
                    <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white text-base font-bold" asChild>
                      <Link href="/walk-in-clinic-calgary"> <img src={walk_icon.src} alt="Register as a new patient" className="w-5 h-5" /> Walk In Now </Link>
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#299470] border-1 text-[#299470] hover:bg-[#299470]/10 bg-transparent text-base font-bold"
                      asChild
                    >
                      <Link href="tel:587-391-8188"> <img src={phone_icon.src} alt="Walk In Now" className="w-5 h-5" /> 587-391-8188 </Link>
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#299470] border-1 text-[#299470] hover:bg-[#299470]/10 bg-transparent text-base font-bold"
                      asChild
                    >
                      <Link href="#"> <img src={location_icon.src} alt="Walk In Now" className="w-5 h-5" /> Get Direction </Link>
                    </Button>
                  </div>

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

          {/* Why we're a great alternative to ER waits */}
          <WhyChooseSection
            title="Why we're a great"
            title_2=""
            subtitle="alternative to ER waits"
            items={whyChooseItems}
            image={whyChoose_img.src}
            h2_color_1='text-[#299470]'
            h2_color_2='text-[#303030]'
            h2_sub_color='text-[#303030]'
            py=" pt-30 pb-22"
            order="order-last"
            IsDot={true}
          />

          {/* Common medical conditions and more */}
          <WhyChooseSection
            title="Common medical conditions"
            title_2="and more"
            subtitle=""
            items={commonConditions}
            image={bg_img.src}
            h2_color_1='text-[#299470]'
            h2_color_2='text-[#303030]'
            h2_sub_color='text-[#303030]'
            IsDot={true}
            bg_color="bg-[#F1F9F4]"
            order="order-first"
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
                  <Link href="/walk-in-clinic-calgary">
                    <img
                      src="/icons/solar_walking-outline.svg"
                      alt=""
                      className="w-5 h-5"
                    />
                    Walk In Today
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
            title='Walk-In Clinic Near Foothills Hospital I Open 7 Days Until 11 PM'
            title_2=""
            description=""
          />


        </main>

        <Footer />
      </div>
    </>
  );
}

