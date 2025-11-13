"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import hero_img from "@/public/images/contact/doctor-patient-consultation.png";
import coming_img from "@/public/images/contact/modern-medical-clinic-exterior-building.png";
import book_visit from "@/public/images/contact/modern-medical-clinic-interior-waiting-room.png";
import {
  ContactInfoSection,
  WhyChooseSection,
  SocialConnectSection,
} from "@/sections";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import { LiveStatusBanner } from "@/components/live-status-banner";

export default function ContactPage() {
  const mapEmbedUrl = "https://maps.google.com/maps?q=2520%2023%20St%20NE%20%2319,%20Calgary,%20AB%20T2E%208L2&t=&z=15&ie=UTF8&iwloc=&output=embed"


  const whyChooseItems_1 = [
    {
      text: "Calling 587-391-8188 for fast service."
    },
    {
      text: "Walking in any time — no appointment needed.",
    },
    {
      text: " Emailing clinic@nowmedical.ca for general inquiries (non-urgent).",
    }
  ];


  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* Live Status Banner */}

      <LiveStatusBanner />

      <main className="flex-1">
        {/* Hero Section with Banner */}
        <section className="bg-[#F1F9F4] to-white py-[54px] ">
          <div className="container">
            <div className="grid gap-4 lg:grid-cols-[55%_44%] lg:gap-4 items-center ">
              <div>
                <h1 className="text-[#299470] font-bold tracking-tight lg:text-6xl mb-[21px] ">
                  Contact Now
                  <br />
                  <span className="text-[#303030]">Medical Clinic in Calgary <br /> Open 7 Days Until 11 PM</span>
                </h1>
                <p className="text-lg text-[#303030] mb-6">
                  Need a doctor today? Have a question about your prescription or registration? <br />We're here <b>7 days a week, including weekends and holidays.</b>
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white text-lg font-bold" asChild>
                    <Link href="tel:587-391-8188" className="flex items-center gap-2">
                      <img src="/icons/btn_phone-outline-icon.svg" alt="Phone" className="w-5 h-5 brightness-0 invert" />
                      Call: 587-391-8188
                    </Link>
                  </Button>
                </div>
              </div>

              <div>
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/zeArmG81bAE?rel=0&modestbranding=1&showinfo=0"
                  title="YouTube Shorts Video"
                  frameborder="0"
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <ContactInfoSection />

        {/* <FindUsSection /> */}
        <section className={"py-[54px] "}>
          <div className="container mx-auto ">
            <h2 className="text-5xl font-bold text-[#303030] text-center mb-8 ">
              <span className="text-[#299470]">Find Us</span> &amp; On the Map
            </h2>
            <div className="flex  items-center">
              {/* Map */}
              <div className="w-full  mx-auto md:mx-0">
                <div className="overflow-hidden shadow-sm">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="500"
                    style={{ minHeight: 320, border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Now Medical Clinic Location Map"
                  />
                </div>
              </div>
            </div>
            <p className="text-[#303030] mt-4 text-center ">
              <b className="text-lg">Free Parking Available</b> | Convenient Calgary Location
            </p>
            <div className="flex justify-center mt-6">
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
            </div>
          </div>
        </section>


        {/* Why Choose Us Section */}
        <WhyChooseSection
          title="Walk-In or"
          title_2=" Book a Visit"
          subtitle=""
          items={whyChooseItems_1}
          para="Whether you need a quick walk-in visit or want to register as a new patient, you can reach us by:"
          image={book_visit.src}
          bg_color="bg-[#F1F9F4]"
          order="order-first"
          h2_py=' mb-6 '
          py=" pt-[54px] pb-10 "
          singleButton={true}
          btn_1_text="Call: 587-391-8188"
          btn_1_link="tel:587-391-8188"
          btn_1_icon="/icons/solar_phone-outline.svg"
        />
        {/* Coming from Hospital Section */}
        <WhyChooseSection
          title="Coming from a Hospital Area?"
          subtitle=""
          items={whyChooseItems_1}
          para=' If your are looking for a walk in for faster care and see a family doctor today? We’re open evenings, weekends & holidays until 11:00 pm - 7 days a week'
          image={coming_img.src}
          btn_1_text="Call: 587-391-8188"
          btn_1_link="tel:587-391-8188"
          btn_1_icon="/icons/btn_phone-outline-icon.svg"
          btn_2_text="Start Direction"
          btn_2_link="https://share.google/CkrlunWzewWZjaPmv"
          btn_2_icon="/icons/pin-outline-icon.svg"
          both_btn="flex"
          bg_color="bg-[#F1F9F4] "
          // order="order-First"
          py=' pb-[54px] '
          col_gap=" gap-14 "

        />

        {/* Social Connect */}
        <SocialConnectSection />

        {/* Bottom Call to Action */}
        <BottomCallAction
          title="Now Medical Clinic Calgary’s Walk-In &"
          title_2="Family Doctor Clinic Open Late Every Day."
          description="Fast, professional care when you need it most.."
        />
      </main>

      <Footer />
    </div>
  );
}
