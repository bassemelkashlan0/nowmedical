import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";
import { FindUsSection, WhyChooseSection } from "@/sections";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import bg_img from "@/public/images/walkin-sub/weekend-visit.png";
import whyChoose_img from "@/public/images/walkin-sub/weekend-why-choose.png";

export const metadata: Metadata = {
  title: "Weekend Walk-In Clinic Calgary | Open Saturdays & Sundays",
  description: "Need medical care on weekends or holidays? Visit our Calgary walk-in clinic open 7 days a week. No appointment needed—walk-ins welcome.",
  keywords: ["walk in clinic open sunday calgary", "weekend clinic", "open holidays clinic", "saturday walk-in clinic calgary"],
};

export default function WeekendClinicPage() {
  const whyChooseWeekend = [
    {
      text: "Open 7 Days a Week Including Stat Holidays"
    },
    {
      text: "Open Late Until 11 PM Every Night"
    },
    {
      text: "Real Family Doctors on Site"
    },
    {
      text: "Short Wait Times & Free Parking"
    }
  ];

  const commonReasons = [
    {
      text: "Colds, flu, sore throat, fever"
    },
    {
      text: "Ear or sinus infections, allergies, asthma"
    },
    {
      text: "UTIs, rashes, or minor skin issues"
    },
    {
      text: "Sprains, back pain, muscle aches"
    },
    {
      text: "Prescription renewals or medical forms"
    }
  ];

  const faqSchema = generateFAQSchema([
    {
      question: "Are you open on Saturdays and Sundays?",
      answer: "Yes! We're open every Saturday and Sunday from 7:30 AM to 11:00 PM with the same services as weekdays."
    },
    {
      question: "What about statutory holidays?",
      answer: "Yes, we're open on all statutory holidays including Christmas, New Year's, and other Canadian holidays."
    },
    {
      question: "Do I need an appointment on weekends?",
      answer: "No appointment needed! Walk-ins are welcome on weekends and holidays."
    }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Weekend walk-in clinic in Calgary. Open Saturdays, Sundays, and holidays until 11 PM. No appointment needed."
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
          <section className="bg-[#F1F9F4] to-white py-10 md:py-[54px] ">
            <div className="container">
              <div className="grid gap-4 lg:grid-cols-2 lg:gap-12 items-center  ">
                <div>
                  <h1 className=" font-bold text-[#303030] tracking-tight lg:text-6xl mb-4">
                    <span className="text-[#299470] " >Weekend Walk-In Clinic Calgary </span>
                    Open Saturdays, Sundays & Holidays
                  </h1>

                  <p className="text-lg  text-[#050505] font-bold mb-4">
                    Need to see a doctor this weekend?
                  </p>
                  <p className="text-base  text-[#303030] mb-4">
                    At <b>Now Medical Clinic,</b> we're here when most clinics are closed. We're <b>open every Saturday, Sunday, and even on holidays until 11 PM.</b> <br />

                    Whether it's a cold that just won't go away or you need a prescription renewal before Monday, walk in today no appointment needed.  </p>

                  <p className="text-lg  text-[#050505] font-bold" >
                    Skip the hospital wait. See a real doctor this weekend.
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
                      <Link href="tel:587-391-8188" className="flex items-center gap-2">
                        <img src="/icons/btn-walking-outline-icon.svg" alt="Walk In" className="w-5 h-5" />
                        Walk In Now
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center items-center md:ml-8 ">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/IpTEkX4lRWQ?rel=0&modestbranding=1&showinfo=0"
                    title="YouTube Shorts Video"
                    frameborder="0"
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                  </iframe>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Our Weekend Clinic */}
          <WhyChooseSection
            title="Why Choose"
            subtitle="Our Weekend Clinic"
            title_2=""
            items={whyChooseWeekend}
            image={whyChoose_img.src}
            h2_color_1='text-[#303030]'
            h2_color_2='text-[#299470]'
            order="order-last"
            both_btn="flex pt-7"
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Walk In Now"
            btn_2_link="tel:587-391-8188"
            btn_2_icon="/icons/btn-walking-outline-icon.svg"
          />

          {/* Common Reasons Patients Visit on Weekends */}
          <WhyChooseSection
            title="Common Reasons Patients"
            title_2="Visit on Weekends"
            subtitle=""
            para="Our weekend doctors treat most medical conditions, including:"
            items={commonReasons}
            image={bg_img.src}
            h2_color_1='text-[#303030]'
            h2_color_2='text-[#299470]'
            h2_sub_color='text-[#299470]'
            IsDot={true}
            bg_color="bg-[#F1F9F4]"
            order="order-first"
            both_btn="flex pt-7"
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Walk In Now"
            btn_2_link="tel:587-391-8188"
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
                  className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg font-bold"
                  asChild
                >
                  <Link href="tel:587-391-8188" className="flex items-center gap-2">
                    <img src="/icons/solar_phone-outline.svg" alt="Phone" className="w-5 h-5" />
                    Call: 587-391-8188
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-[#299470] hover:bg-[#256358] text-white font-bold text-lg"
                  asChild
                >
                  <Link
                    href="https://share.google/CkrlunWzewWZjaPmv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Get Direction on Google Map
                    <img src="/icons/uil-arrow-up-right.svg" alt="" className="w-5 h-5 brightness-0 invert" />
                  </Link>
                </Button>
              </>
            }
          />


          <div className="mt-15"></div>
          {/* CTA Banner */}
          <BottomCallAction
            title='Weekend Walk-In Clinic Calgary | Open '
            title_2=" Saturdays, Sundays & Holidays Until 11 PM "
            description={<>Need a weekend doctor in Calgary? We're open Saturdays, Sundays & holidays until 11 PM, Real family doctors, short waits, free parking. Call 587-391-8188.</>}
          />


        </main>

        <Footer />
      </div>
    </>
  );
}

