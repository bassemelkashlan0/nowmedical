import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";
import { FindUsSection, WhyChooseSection } from "@/sections";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import bg_img from "@/public/images/major-sub/foothill-comman-madical.png";
import whyChoose_img from "@/public/images/major-sub/foothill-why-great.png";

export const metadata: Metadata = {
  title: "Walk-In Clinic Near Sheldon Children's Health Centre | Open 7 Days",
  description: "Now Medical walk-in clinic near Sheldon Children's Health Centre. Quick access to medical care—no appointment needed.",
  keywords: ["walk in clinic near sheldon childrens health centre", "clinic near childrens hospital", "non emergency clinic calgary downtown"],
};

export default function SheldonChildrensHealthCentrePage() {
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
    },
    {
      text: "Convenient for patients from downtown Calgary"
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
      question: "Where are you located relative to Sheldon Children's Health Centre?",
      answer: "We're located at 2520 23 St NE #19 in Calgary. We serve patients from all areas including those near Sheldon Children's Health Centre downtown."
    },
    {
      question: "Should I go to walk-in or Sheldon Children's Health Centre ER?",
      answer: "For non-emergency conditions, our walk-in clinic offers much shorter wait times than the Sheldon Children's Health Centre ER. Visit the ER for life-threatening emergencies only."
    }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Walk-in clinic serving Calgary including Sheldon Children's Health Centre area. Non-emergency care, open until 11 PM daily."
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
          <section className="bg-[#F1F9F4] to-white py-10 lg:py-[54px] " >
            <div className="container">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center  ">
                <div>
                  <h1 className="text-4xl text-[#303030] lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4">
                    Walk-In Clinic Near <br /><span className="text-[#299470]">Sheldon Children's Health Centre</span> <br />Open 7 Days Until 11 PM
                  </h1>

                  <p className="text-base text-[#303030] mb-4">
                    Need medical care near <b>Sheldon Children's Health Centre?</b> Walk in and see a real family doctor today <strong>No Appointment needed.</strong>
                  </p>
                  <p className="text-base text-[#303030] mb-4">
                    Located just minutes from downtown Calgary, <b>Now Medical Clinic</b> offers fast, convenient walk-in care and family doctor services. Skip the long hospital wait times and see a doctor quickly.
                  </p>
                  <div className="flex flex-wrap flex-row pt-9  gap-4">
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
                      <Link href="/walk-in-clinic-calgary" className="flex items-center gap-2">
                        <img src="/icons/btn-walking-outline-icon.svg" alt="Walk In" className="w-5 h-5" />
                        Walk In Now
                      </Link>
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#299470] border-1 text-[#299470] hover:bg-[#299470]/10 bg-transparent text-base font-bold"
                      asChild
                    >
                      <Link href="https://share.google/CkrlunWzewWZjaPmv" className="flex items-center gap-2">
                        <img src="/icons/pin-outline-icon.svg" alt="Location" className="w-5 h-5" />
                        Get Direction
                      </Link>
                    </Button>
                  </div>

                </div>

                <div className="flex justify-center items-center lg:ml-8 ">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/BUde4AOLH7Y?rel=0&modestbranding=1&showinfo=0"
                    title="YouTube Shorts Video"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                  </iframe>
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
            order="order-last"
            IsDot={true}
            both_btn="flex pt-7"
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Walk In Now"
            btn_2_link="/walk-in-clinic-calgary"
            btn_2_icon="/icons/btn-walking-outline-icon.svg"
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
            both_btn="flex pt-7"
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Walk In Now"
            btn_2_link="/walk-in-clinic-calgary"
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
                  <Link href="/walk-in-clinic-calgary" className="flex items-center gap-2">
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
            title="Walk-In Clinic Near Sheldon Children's Health Centre | "
            title_2="Open 7 Days Until 11 PM"
            description="Skip ER waits at Sheldon Children's Health Centre. Walk in for real-doctor care 7 days a week until 11 PM. Fast walk-in & free parking. Call"
            description_2=" 587-391-8188."
          />


        </main>

        <Footer />
      </div>
    </>
  );
}
