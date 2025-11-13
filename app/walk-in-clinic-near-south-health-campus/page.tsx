import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";
import { FindUsSection, WhyChooseSection } from "@/sections";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import bg_img from "@/public/images/hospital-peter/why-us-south-health.png";
import whyChoose_img from "@/public/images/walkin-sub/why-choose-south.png";

export const metadata: Metadata = {
  title: "Walk-In Clinic Near South Health Campus Calgary",
  description: "Now Medical walk-in clinic near South Health Campus. Quick access to medical care—no appointment needed",
  keywords: ["walk in clinic near south health campus", "clinic near shc"],
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
          <section className="bg-[#F1F9F4] to-white py-10 md:py-[54px] ">
            <div className="container">
              <div className="grid gap-4 lg:grid-cols-2 lg:gap-12 items-center  ">
                <div>
                  <h1 className=" font-bold tracking-tight lg:text-6xl mb-4">
                    Walk-In Clinic Near <br /><span className="text-[#299470]">South Health Campus</span> <br />Open Late Every Day
                  </h1>

                  <p className="text-base  text-foreground mb-4">
                    If you're south Calgary and don't need the emergency department, visit <b>Now Medical Clinic</b> for fast, emergency care from real doctors. We're open <b>7 days a week until 11 PM</b>, serving patients city-wide.</p>

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
            both_btn="flex pt-7"
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Walk In Now"
            btn_2_link="tel:587-391-8188"
            btn_2_icon="/icons/btn-walking-outline-icon.svg"
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
            py=" py-[35px] "
            order="order-first"
            IsDot={false}
            bg_color="bg-[#F1F9F4]"
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
            title='Walk-In Clinic Near South Health'
            title_2="Campus | Open 7 Days Until 11 PM"
            description="Emergency care near South Health Campus — walk in today for real doctor care 7 days a week until 11 PM. Skip ER waits. Call "
            description_2='587-391-8188.'
          />


        </main>

        <Footer />
      </div>
    </>
  );
}

