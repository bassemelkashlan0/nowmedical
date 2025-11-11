import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import bg_img from "@/public/images/walkin-sub/late-night-treat.png"
import whyChoose_img from "@/public/images/walkin-sub/late-night-why-choose.png"
import { FindUsSection, WhyChooseSection } from "@/sections";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import { LiveStatusBanner } from "@/components/live-status-banner";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Late-Night Clinic Calgary | Walk-In Medical Care Until 11 PM',
  description: 'Need medical care late at night? Visit our Calgary clinic open until 11 PM. Walk-ins welcome—no appointment needed for evening care.'
}

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
          <section className="bg-[#F1F9F4] to-white py-[54px] ">
            <div className="container">
              <div className="grid gap-4 lg:grid-cols-2 lg:gap-12 items-center  ">
                <div>
                  <h1 className=" font-bold text-[#303030] tracking-tight lg:text-6xl mb-[21px]  ">
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

                <div className="flex justify-center items-center ml-8 ">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/cyZfzJUXe8o?rel=0&modestbranding=1&showinfo=0"
                    title="YouTube Shorts Video"
                    frameborder="0"
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                  </iframe>

                </div>
              </div>
            </div>
          </section>

          {/* why choose  */}
          <WhyChooseSection
            py=' py-[69px] '
            title="Why Choose"
            subtitle="Our Late-Night Clinic"
            items={whyChoose}
            image={whyChoose_img.src}
          />


          {/* What we Treat */}
          <WhyChooseSection
            title="What We Treat"
            subtitle="After Hours"
            para={
              <>
                Our doctors are ready to help with most <b>concerns,</b>  including:
              </>
            }
            items={whatWeTreat}
            image={bg_img.src}
            h2_color_1='text-[#299470]'
            h2_sub_color='text-[#303030]'
            order="order-first"
            bg_color="bg-[#F1F9F4] "
            py=" py-[149px] "
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
                  <Link href="https://share.google/CkrlunWzewWZjaPmv" target="_blank" rel="noopener noreferrer">
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

