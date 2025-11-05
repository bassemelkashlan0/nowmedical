import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";
import { FindUsSection, WhyChooseSection } from "@/sections";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import hero_img from "@/public/images/urgent-case-hero.png";
import bg_img from "@/public/images/color-img.png";
import whyChoose_img from "@/public/images/whyChoose.png";

export const metadata: Metadata = {
  title: "Walk-In Clinic Near South Health Campus | Open 7 Days Until 11 PM",
  description: "Non-emergency care near South Health Campus. Walk in anytime — open 7 days until 11 PM.",
  keywords: ["walk in clinic near south health campus", "clinic near shc"],
  alternates: { canonical: "https://nowmedical.ca/walk-in-clinic-near-south-health-campus" }
};

export default function SouthHealthCampusPage() {
  const whyChooseItems = [
    {
      text: "Open weekends & holidays"
    },
    {
      text: "Short waits & free parking"
    },
    {
      text: "Real family doctors on site"
    },
    {
      text: "Convenient for patients from South Health Campus"
    }
  ];

  const commonConditions = [
    {
      text: "Cold, flu, sore throat, ear pain"
    },
    {
      text: "UTIs & women's health concerns"
    },
    {
      text: "Rashes, skin infections, minor injuries"
    },
    {
      text: "Prescription refills & medical notes"
    }
  ];

  const faqSchema = generateFAQSchema([
    {
      question: "Where are you located relative to South Health Campus?",
      answer: "We're located at 2520 23 St NE #19 in Calgary. We serve patients from all areas including those near South Health Campus."
    },
    {
      question: "Should I go to walk-in or South Health Campus ER?",
      answer: "For non-emergency conditions, our walk-in clinic offers much shorter wait times than the South Health Campus ER. Visit the ER for life-threatening emergencies only."
    }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Walk-in clinic serving Calgary including South Health Campus area. Open until 11 PM daily."
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
                    Walk-In Clinic Near <br /><span className="text-[#299470]">South Health Campus</span> <br />Open Late Every Day
                  </h1>

                  <p className="text-base  text-foreground mb-4">
                    If you're south Calgary and don't need the emergency department, visit <b>Now Medical Clinic</b> for fast, emergency care from real doctors. We're open <b>7 days a week until 11 PM</b>, serving patients city-wide.</p>

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

          {/* We Help With Section */}
          <WhyChooseSection
            title="We "
            title_2={<><span className="text-[#303030]">Help</span> <span className="text-[#299470]"> With</span></>}
            subtitle=""
            items={commonConditions}
            image={bg_img.src}
            h2_color_1='text-[#299470]'
            h2_color_2=''
            h2_sub_color='text-[#303030]'
            IsDot={true}
            order="order-last"
          />

          {/* Why choose us Section */}
          <WhyChooseSection
            title="Why "
            title_2="choose us"
            subtitle=""
            items={whyChooseItems}
            image={whyChoose_img.src}
            h2_color_1='text-[#303030]'
            h2_color_2='text-[#299470]'
            h2_sub_color='text-[#303030]'
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
            title='Walk-In Clinic Near South Health Campus I Open 7 Days Until 11 PM'
            title_2=""
            description="Emergency care near South Health Campus — walk in today for real doctor care 7 days a week until 11 PM. Skip ER waits. Call 587-391-8188."
          />


        </main>

        <Footer />
      </div>
    </>
  );
}

