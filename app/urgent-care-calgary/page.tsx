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
  title: "Urgent Care Calgary | Immediate Medical Attention Without Appointment",
  description: "Need urgent care in Calgary? Get immediate medical attention for non-life-threatening emergencies. Walk-ins welcome, no appointment needed.",
  keywords: ["urgent care calgary", "non emergency clinic calgary", "urgent care walk in", "same day medical care", "calgary urgent care"],

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
          <section className="bg-[#F1F9F4] to-white py-10 py-[54px] ">
            <div className="container">
              <div className="grid gap-4 lg:grid-cols-[53%_46%] lg:gap-4 items-center  ">
                <div>
                  <h1 className=" font-bold tracking-tight lg:text-6xl mb-[21px] ">
                    <span className="text-[#299470] " >Urgent Care in Calgary </span> <br />
                    Walk-In Clinic Open <br />
                    Late 7 Days a Week
                  </h1>

                  <p className="text-base  text-[#000000] mb-4">
                    Need medical care now? <br />
                    Skip long hospital waits — visit <b>Now Medical Clinic,</b> Calgary’s trusted <b>urgent care alternative,</b> <br />
                    <b>open daily until 11 PM,</b> including <b>weekends and holidays.</b>
                  </p>


                </div>

                <div className="flex justify-center items-center">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/X0BcuE-6Kuw?rel=0&modestbranding=1&showinfo=0"
                    title="YouTube Shorts Video"
                    frameborder="0"
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                  </iframe>
                </div>
              </div>
            </div>
          </section>

          {/* What we Treat */}
          <WhyChooseSection
            title="What"
            title_2="We Treat"
            subtitle=""
            py=" py-[69px] "
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
                <Link href="tel:587-391-8188">
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
                <Link href="https://share.google/CkrlunWzewWZjaPmv">
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
            title='Urgent Care Calgary | Walk-In Clinic '
            title_2="Open Late 7 Days"
            description={
              <>
                Need urgent care in Calgary? Skip ER waits — walk in today 7:30 AM–11 PM with real  <br /> doctors. Open weekends & holidays. Call 587-391-8188
              </>
            }
          />


        </main>

        <Footer />
      </div>
    </>
  );
}

