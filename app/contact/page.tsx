"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { 
  ContactInfoSection,
  WalkInBookSection,
  ComingFromHospitalSection,
  FindUsSection,
  SocialConnectSection
} from "@/sections";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Banner */}
        <section className="relative bg-[#D4EDE7] overflow-hidden">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-xl">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  Contact <span className="text-[#2D7B6F]">Now</span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  Medical Clinic in Calgary
                </h2>
                <p className="text-xl md:text-2xl font-semibold mb-4">
                  Open 7 Days Until 11 PM
                </p>
                <p className="text-base text-gray-700">
                  Have a quick doctor to see, a concern about your provider, or a medication refill you may need?{" "}
                  <strong>Call us to book</strong>, including weekends and holidays.
                </p>
              </div>
              
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/images/contact/banner-image.png"
                  alt="Calgary walk-in clinic doctor ready to provide medical care to patients"
                  fill
                  className="object-contain object-right"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <ContactInfoSection />

        {/* Find Us on the Map */}
        <FindUsSection />

        {/* Walk In or Book Section */}
        <WalkInBookSection />

        {/* Coming from Hospital Section */}
        <ComingFromHospitalSection />

        {/* Social Connect */}
        <SocialConnectSection />

        {/* Bottom Call to Action */}
        <section className="bg-[#195A44] max-w-[1240px] mx-auto rounded-[16px] p-12 mb-[50px]">
          <div className="mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
              Now Medical Clinic Calgary's Walk-In &
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
              Family Doctor Clinic Open Late Every Day.
            </h3>
            <p className="text-white text-base md:text-lg">
              Early or evening care Late hours you can depend on!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
