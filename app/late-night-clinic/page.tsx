import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";
import hero_img from "@/public/images/urgent-case-hero.png"
import bg_img from "@/public/images/color-img.png"
import whyChoose_img from "@/public/images/whyChoose.png"
import { FindUsSection, WhyChooseSection } from "@/sections";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import { Button } from "@/components/ui/button";
import { LiveStatusBanner } from "@/components/live-status-banner";
import { text } from "stream/consumers";


export default function LateNightClinicPage() {

  const whatWeTreat = [
    {
      text: 'Cold, flu, sore throat, fever'
    },
    {
      text: "Ear or sinus infections, allergies, or asthma"
    },
    {
      text: "Urinary tract infections (UTIs)"
    },
    {
      text: "Rashes, minor skin conditions, or insect bites"
    },
    {
      text: "Sprains, strains, back or joint pain"
    },
    {
      text: " Prescription renewals or medical notes"
    }
  ]
  const whyChoose = [
    {
      text: "Open Late Every Day — until 11 PM, even on weekends & holidays"
    },
    {
      text: "Real Family Doctors"
    },
    {
      text: "Short Wait Times —"
    },
    {
      text: "Convenient Location — free parking, easy to all Calgary areas"
    }
  ]

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
                    <span className="text-[#299470] " >Late-Night Walk-In Clinic in Calgary </span>
                    Open Until 11 PM, 7 Days a Week
                  </h1>

                  <p className="text-base  text-[#303030] mb-4">
                    Need to see a <b>doctor tonight</b> but don’t want to wait hours in the hospital? <br />At <b>Now Medical Clinic,</b> we’re one of Calgary’s <b>latest-open medical clinics,</b> with <b>real family doctors</b> available until <b>11 PM every night,</b> including <b>weekends and holidays.</b> No appointment needed — just walk in.
                  </p>
                  
                  <p className="text-base font-bold">
                    Skip the wait. See a real doctor tonight.
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
            title="Why Choose"
            subtitle="Our Late-Night Clinic"
            items={whyChoose}
            image={bg_img.src}
          />

          {/* why choose  */}
          <WhyChooseSection
            title="Why Choose"
            subtitle=""
            title_2="Us for Urgent Care"
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
          bgColor=" "
          />
          <div className="mt-15"></div>
          {/* CTA Banner */}
          <BottomCallAction
            title=' Late-Night Walk-In Clinic Calgary | Open Until  '
            title_2="11 PM Daily"
            description="Looking for a late-night clinic in Calgary? We’re open until 11 PM every day, including weekends & holidays. Real doctors, short waits. Call 587-391-8188."
          />


        </main>

        <Footer />
      </div>
    </>
  );

}

