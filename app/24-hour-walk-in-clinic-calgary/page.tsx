import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";
import { FindUsSection, WhyChooseSection } from "@/sections";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import bg_img from "@/public/images/walkin-sub/24-hour-when-visit.png";
import whyChoose_img from "@/public/images/walkin-sub/24-hour-why-choose.png";

export const metadata: Metadata = {
  title: "24-Hour Walk-In Clinic Calgary | Open Late Medical Care",
  description: "Open 24 hours for urgent medical care in Calgary. Walk-ins welcome anytime—no appointment needed. Professional care when you need it.",
  keywords: ["24 hour walk-in clinic calgary", "clinic open late", "after hours doctor", "extended hours clinic calgary"],

};

export default function TwentyFourHourClinicPage() {

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



  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <LiveStatusBanner />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-[#F1F9F4] to-white py-10 lg:py-[54px] " >
            <div className="container">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center  ">
                <div>
                  <h1 className="text-4xl text-[#303030] lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 lg:mb-[21px] ">
                    <span className="text-[#299470] " >24-Hour Walk-In Clinic Calgary </span>
                    (Open Until 11 PM Daily)
                  </h1>

                  <p className="text-base mb-4 text-[#303030]">
                    Looking for a <b>24-hour walk-in clinic in Calgary?</b><br />Now Medical Clinic is one of <b>Calgary's latest-open medical clinics — 7:30 AM to 11 PM, every day including weekends and holidays.</b><br /> We're your trusted <b>after-hours alternative to 24-hour clinics,</b> offering <b>real doctors, shorter waits, and free parking.</b>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white text-base font-bold" asChild>
                      <Link href="tel:587-391-8188" className="flex items-center gap-2">
                        <img src="/icons/btn_phone-outline-icon.svg" alt="Phone" className="w-5 h-5 brightness-0 invert" />
                        Call: 587-391-8188
                      </Link>
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#299470] border-1 text-[#299470] hover:bg-[#299470]/10 bg-transparent text-base font-bold"
                      asChild
                    >
                      <Link href="/walk-in-clinic" className="flex items-center gap-2">
                        <img src="/icons/btn-walking-outline-icon.svg" alt="Walk In" className="w-5 h-5" />
                        Walk In Now
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center items-center lg:pl-8 ">

                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/zeArmG81bAE?rel=0&modestbranding=1&showinfo=0"
                    title="YouTube Shorts Video"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            </div>
          </section>

          {/* What we Treat */}
          <WhyChooseSection
            py=' py-10 lg:py-[69px] '
            title="When to"
            title_2="Visit Now"
            subtitle="Medical Clinic"
            items={whatWeTreat}
            image={bg_img.src}
            h2_color_1='text-[#299470]'
            h2_color_2='text-[#303030]'
            h2_sub_color='text-[#299470]'
            para_after={<>We're here 7 days a week — perfect for anyone searching for <b>"24-hour urgent care"</b> or <b>"after-hours medical clinic."</b></>}
            both_btn="flex pt-7"
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Walk In Now"
            btn_2_link="/walk-in-clinic"
            btn_2_icon="/icons/btn-walking-outline-icon.svg"
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
            py=" py-10 lg:py-[149px] "
            both_btn="flex pt-7"
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Walk In Now"
            btn_2_link="/walk-in-clinic"
            btn_2_icon="/icons/btn-walking-outline-icon.svg"
          />

          {/* Map Section */}
          <FindUsSection
            bgColor="bg-white"
            customButtons={
              <>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-[#299470] hover:bg-[#256358] text-white font-bold text-lg"
                  asChild
                >
                  <Link href="/walk-in-clinic" className="flex items-center gap-2">
                    <img src="/icons/solar_walking-outline.svg" alt="Phone" className="w-5 h-5" />
                    Walk In Now
                  </Link>
                </Button>
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
                  variant="outline"
                  size="lg"
                  className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg font-bold"
                  asChild
                >
                  <Link
                    href="https://share.google/CkrlunWzewWZjaPmv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <img src="/icons/pin-outline-icon.svg" alt="" className="w-5 h-5 " />
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
            description={<>Searching for a 24-hour walk-in clinic in Calgary? We're open until 11 PM daily — real<br /> doctors, short waits, open weekends & holidays. Call 587-391-8188.</>}
          />


        </main>

        <Footer />
      </div>
    </>
  );
}

