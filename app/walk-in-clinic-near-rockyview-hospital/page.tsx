import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";
import { FindUsSection, WhyChooseSection } from "@/sections";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import hero_img from "@/public/images/major-sub/hero.png";
import bg_img from "@/public/images/major-sub/rocky-skip-hospital.png";
import whyChoose_img from "@/public/images/major-sub/rocky-why-now.png";


export const metadata: Metadata = {
  title: "Walk-In Clinic Near Rockyview Hospital | Open 7 Days Until 11 PM",
  description: "Non-emergency care near Rockyview Hospital. Walk in anytime — open 7 days until 11 PM.",
  keywords: ["walk in clinic near rockyview hospital", "clinic near rockyview"],
  alternates: { canonical: "https://nowmedical.ca/walk-in-clinic-near-rockyview-hospital" }
};

export default function RockyviewHospitalPage() {
  const whyChooseItems = [
    {
      text: "Real Doctors"
    },
    {
      text: "Short waits, Same-day visits"
    },
    {
      text: "Open evenings, Weekends & holidays"
    },
    {
      text: "Free parking & easy access from Deerfoot Trail"
    },
    {
      text: "Serving patients from all Calgary hospitals"
    }
  ];

  const commonConditions = [
    {
      text: "Colds, cough, sore throat, flu, fever"
    },
    {
      text: "Ear & sinus infections, pink eye"
    },
    {
      text: "UTIs, skin rashes, mild allergic reactions"
    },
    {
      text: "Prescription renewals & medical forms"
    }
  ];

  const faqSchema = generateFAQSchema([
    {
      question: "Where are you located relative to Rockyview Hospital?",
      answer: "We're located at 2520 23 St NE #19 in Calgary. We serve patients from all areas including those near Rockyview General Hospital."
    },
    {
      question: "Should I go to walk-in or Rockyview ER?",
      answer: "For non-emergency conditions, our walk-in clinic offers much shorter wait times than the Rockyview ER. Visit the ER for life-threatening emergencies only."
    }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Walk-in clinic serving Calgary including Rockyview area. Open until 11 PM daily."
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
          <section className="bg-[#F1F9F4] to-white pt-8 pb-14">
            <div className="container">
              <div className="grid gap-4 lg:grid-cols-2 lg:gap-4 items-center  ">
                <div>
                  <h1 className=" font-bold tracking-tight lg:text-6xl mb-4">
                    Walk-In Clinic Near <br /><span className="text-[#299470]">Rockyview Hospital</span> <br />Open 7 Days Until 11 PM
                  </h1>

                  <p className="text-base  text-foreground mb-4">
                    Need a doctor near <b>Rockyview General Hospital ?</b>  </p>
                    <p className="text-base  text-foreground mb-4">Walk in to <b>Now Medical Clinic</b> with real family doctors open <b>7 days a week until 11 PM,</b> including <b>weekends and holidays.</b></p>

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

          {/* Skip the hospital wait */}
          <WhyChooseSection
            title="Skip the hospital wait"
            title_2=""
            subtitle="we treat"
            items={commonConditions}
            image={bg_img.src}
            h2_color_1='text-[#299470]'
            h2_color_2='text-[#303030]'
            h2_sub_color='text-[#303030]'
            IsDot={true}
            order="order-last"
          />

                    {/* Why Now Medical Clinic */}
                    <WhyChooseSection
            title="Why "
            title_2=""
            subtitle="Now Medical Clinic"
            items={whyChooseItems}
            image={whyChoose_img.src}
            h2_color_1='text-[#303030]'
            h2_color_2='text-[#299470]'
            h2_sub_color='text-[#299470]'
            py=" pt-30 pb-22"
            order="order-first"
            IsDot={false}
            bg_color="bg-[#F1F9F4]"
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
                    Walk In Today
                  </Link>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-white font-bold text-lg px-[16px] py-[11px] flex items-center gap-[10px] cursor-pointer"
                  asChild
                >
                  <Link href="https://maps.google.com/maps?q=2520%2023%20St%20NE%20%2319,%20Calgary,%20AB%20T2E%208L2" target="_blank" rel="noopener noreferrer">
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
            title='Walk-In Clinic Near Rockyview Hospital Open 7 Days Until 11 PM'
            title_2=""
            description="Skip ER waits at Rockyview Hospital walk in for real-doctor care 7 days a week until 11 PM, Fast walk-in & free parking, Call 587-391-8188."
          />


        </main>

        <Footer />
      </div>
    </>
  );
}

