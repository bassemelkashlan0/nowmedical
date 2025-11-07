import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";
import hero_img from "@/public/images/walkin-sub/argent-case-hero.png"
import whyChoose_img from "@/public/images/walkin-sub/clinic-calgery-why-choose.png"
import bg_img from "@/public/images/walkin-sub/clinic-calgery-treat.png"
import { FindUsSection, WhyChooseSection } from "@/sections";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import { Button } from "@/components/ui/button";
import { LiveStatusBanner } from "@/components/live-status-banner";



export const metadata: Metadata = {
  title: "Urgent Care Calgary | Walk-In Non-Emergency Clinic",
  description: "Avoid ER wait times. Walk in for same-day urgent care, open until 11 PM daily. Calgary's trusted non-emergency medical clinic.",
  keywords: ["urgent care calgary", "non emergency clinic calgary", "urgent care walk in", "same day medical care", "calgary urgent care"],
  alternates: {
    canonical: "https://nowmedical.ca/urgent-care-calgary"
  },
  openGraph: {
    title: "Urgent Care Calgary | Walk-In Non-Emergency Clinic",
    description: "Avoid ER wait times. Walk in for same-day urgent care, open until 11 PM daily. Calgary's trusted non-emergency medical clinic.",
    url: "https://nowmedical.ca/urgent-care-calgary",
    siteName: "Now Medical Clinic",
    images: [
      {
        url: "https://nowmedical.ca/images/modern-medical-clinic-interior-waiting-room.jpg",
        width: 1200,
        height: 630,
        alt: "Now Medical Clinic - Urgent Care Calgary"
      }
    ],
    locale: "en_CA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Urgent Care Calgary | Walk-In Non-Emergency Clinic",
    description: "Avoid ER wait times. Walk in for same-day urgent care, open until 11 PM daily.",
    images: ["https://nowmedical.ca/images/modern-medical-clinic-interior-waiting-room.jpg"]
  }
};

export default function UrgentCarePage() {
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
  ]
  const whyChoose = [
    {
      text: "Real family doctors on-site — not virtual visits"
    },
    {
      text: "Open late — until 11 PM 7 days/week"
    },
    {
      text: "Shorter wait times than ER or urgent care centres"
    },
    {
      text: "Free parking & Easy for all Calgary"
    },
    {
      text: " Serving all of Calgary — adults & children"
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
                    <span className="text-[#299470] " >Urgent Care in Calgary </span> <br />
                    Walk-In Clinic Open <br />
                    Late 7 Days a Week
                  </h1>

                  <p className="text-base  text-[#303030] mb-4">
                    Need medical care now? <br />
                    Skip long hospital waits — visit <b>Now Medical Clinic,</b> Calgary’s trusted <b>urgent care alternative,</b> <br />
                    <b>open daily until 11 PM,</b> including <b>weekends and holidays.</b>
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
            title="What"
            title_2="We Treat"
            subtitle=""
            items={whatWeTreat}
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

          {/* Bottom Call to Action */}
          <section className="bg-[#195A44] max-w-[1240px] mx-auto rounded-[16px] p-12 my-[60px]">
            <div className="mx-auto">
              <h2 className="text-2xl md:text-5xl font-bold text-white mb-3">
                Near the Hospital? We’re a Fast Option
              </h2>

              <p className="text-white text-base md:text-lg">
                Coming from a hospital area and don’t need the ER? Walk in for same-day care with shorter waits <b>open late, 7 days a week</b>.
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-12">
              <Button
                size="lg"
                className="bg-[#299470] hover:bg-[#2E8B57]/90 text-white font-bold text-lg px-6 py-6 flex items-center gap-2"
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
                className="border border-white text-white hover:bg-transparent bg-transparent font-bold text-lg px-6 py-6 flex items-center gap-2"
                asChild
              >
                <Link href="tel:587-391-8188">
                  <img
                    src="/images/walk-in/solar_phone.svg"
                    alt=""
                    className="w-5 h-5"
                  />
                  587-391-8188
                </Link>

              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-white text-white hover:bg-transparent bg-transparent font-bold text-lg px-6 py-6 flex items-center gap-2"
                asChild
              >
                <Link href="/contact">
                  <img
                    src="/images/walk-in/flowbite_map-pin-outline.svg"
                    alt=""
                    className="w-5 h-5"
                  />
                  Get Direction
                </Link>
              </Button>
            </div>
          </section>

          {/* Map Section */}
          <FindUsSection
          />
          <div className="mt-15"></div>
          {/* CTA Banner */}
          <BottomCallAction
            title='Hospital Wait Times Calgary | Skip the Line | '
            title_2="Walk-In Clinic Open Until 11 PM"
            description="Tired of long hospital wait times in Calgary? Walk in to Now Medical Clinic — open 7 days until 11 PM. Real doctors, no appointment needed."
          />


        </main>

        <Footer />
      </div>
    </>
  );
}

