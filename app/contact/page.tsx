"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import hero_img from "@/public/images/contact/doctor-patient-consultation.png";
import coming_img from "@/public/images/contact/modern-medical-clinic-exterior-building.png";
import book_visit from "@/public/images/contact/modern-medical-clinic-interior-waiting-room.png";
import {
  ContactInfoSection,
  WhyChooseSection,
  WalkInBookSection,
  ComingFromHospitalSection,
  FindUsSection,
  SocialConnectSection,
} from "@/sections";
import { Phone, Users, Clock, Activity, Stethoscope, Brain, Heart, Baby, Shield } from "lucide-react";
import Image from "next/image";
import BottomCallAction from "@/components/ui/bottom-call-acction";

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
      <div className="bg-[#A7D3C4] ">
        <div className="container py-7">
          <div className="flex items-center justify-center gap-[24px] text-sm">
            <div className="flex items-center  gap-[24px]">
              <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#4DA688] rounded-full">
                <div className="h-[22px] w-[22px]  rounded-full bg-[#195A44] animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold block text-3xl text-[#050505]">Walk-in Live Status</span>
                <span className="hidden block sm:inline text-base text-[#050505]">Walk-in is OPEN NOW</span>
              </div>
            </div>

            {/* <span className="font-bold text-[#1A5F56]">OPEN NOW</span> */}
            <div className="flex items-center  gap-[24px]">

              <div className="flex flex-col">
                <span className="font-semibold block text-3xl text-[#050505]">03:40 PM</span>
                <span className="hidden block sm:inline text-base text-[#050505]">17-10-2025</span>
              </div>
            </div>          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section with Banner */}
        <section className="bg-[#F1F9F4] to-white py-16">
          <div className="container">
            <div className="grid gap-4 lg:grid-cols-2 lg:gap-4 items-center ">
              <div>
                <h1 className="text-[#299470] font-bold tracking-tight lg:text-6xl mb-6">
                  Contact Now
                  <br />
                  <span className="text-[#303030]">Medical Clinic in Calgary <br /> Open 7 Days Until 11 PM</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Need a doctor today? Have a question about your prescription or registration? <br />We’re here <b>7 days a week, including weekends and holidays.</b>
                </p>

              </div>

              <div>
                <img
                  src={hero_img.src}
                  alt="Now Medical Clinic Calgary doctor"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <ContactInfoSection />

        {/* Find Us on the Map */}
        {/* <FindUsSection /> */}
        <section className={"py-14 "}>
          <div className="container mx-auto ">
            <h2 className="text-5xl font-bold text-center mb-12">
              <span className="text-[#299470]">Find Us</span> &amp; Hours
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
        />
        {/* Coming from Hospital Section */}
        <WhyChooseSection
          title="Coming from a Hospital Area?"
          subtitle=""
          items={whyChooseItems_1}
          para=' If your are looking for a walk in for faster care and see a family doctor today? We’re open evenings, weekends & holidays until 11:00 pm - 7 days a week'
          image={coming_img.src}
          btn_1_text="Call 587-391-8188"
          btn_1_link="tel:587-391-8188"
          btn_1_icon="/icons/btn_phone-outline-icon.svg"
          btn_2_text="Start Direction"
          btn_2_link="https://goo.gl/maps/NowMedicalClinicCalgary"
          btn_2_icon="/icons/pin-outline-icon.svg"
          both_btn="flex"
          bg_color="bg-[#F1F9F4]"
          // order="order-First"
          py=" pb-14 "

        />


        {/* <section className="py-16 bg-[#F1F9F4]">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-5xl font-bold mb-4 text-[#303930]">
                  Walk-In or  <span className="text-[#299470]">Book a Visit</span>
                </h2>
                <div className="space-y-4 text-foreground">
                  <p>
                    Whether you need a quick walk-in visit or want to register as a new patient, you can reach us by:
                  </p>

                  <ul className="list-none space-y-3">
                    <li className="flex items-start gap-3">
                      <img src={check_icon.src} alt="Check Icon" className="w-6 h-6 mt-1" />
                      <b className="text-lg" >Calling 587-391-8188 for fast service.</b>
                    </li>
                    <li className="flex items-start gap-3">
                      <img src={check_icon.src} alt="Check Icon" className="w-6 h-6 mt-1" />
                      <b className="text-lg" >Walking in any time — no appointment needed.</b>
                    </li>
                    <li className="flex items-start gap-3">
                      <img src={check_icon.src} alt="Check Icon" className="w-6 h-6 mt-1" />
                      <b className="text-lg" > Emailing clinic@nowmedical.ca for general inquiries (non-urgent).</b>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <img
                  src="/images/landing/our-promise.png"
                  alt="Our Promise"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section> */}


        {/* Walk In or Book Section */}
        {/* <WalkInBookSection /> */}

        {/* Coming from Hospital Section */}
        {/* <ComingFromHospitalSection /> */}

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
