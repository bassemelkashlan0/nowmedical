import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";
import { WhyChooseSection } from "@/sections";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import hero_img from "@/public/images/major-sub/hero.png";
import bg_img from "@/public/images/major-sub/alberta-comman-visit.png";
import whyChoose_img from "@/public/images/major-sub/alberta-why-choose.png";


export const metadata: Metadata = {
  title: "Walk-In Clinic Near Alberta Children's Hospital",
  description: "Now Medical walk-in clinic near Alberta Children's Hospital. Quick access to medical care—no appointment needed.",
  keywords: ["walk in clinic near alberta childrens hospital", "pediatric clinic calgary"],
};

export default function AlbertaChildrensHospitalPage() {
  const whyChooseItems = [
    {
      text: "Family doctors experienced with kids & adults"
    },
    {
      text: "Short waits for non-emergency visits"
    },
    {
      text: "Open weekends & holidays no appointment needed"
    }
  ];

  const commonConditions = [
    {
      text: "Fever, ear infection, cold, or flu"
    },
    {
      text: "Rash, eczema, skin infections"
    },
    {
      text: "Asthma flare-ups or allergies"
    },
    {
      text: "School notes & immunizations"
    }
  ];

  const faqSchema = generateFAQSchema([
    {
      question: "Where are you located relative to Alberta Children's Hospital?",
      answer: "We're located at 2520 23 St NE #19 in Calgary. We serve families from all areas including those near Alberta Children's Hospital, providing convenient pediatric and family care."
    },
    {
      question: "Do you provide pediatric care for children?",
      answer: "Yes, our family doctors are experienced with both children and adults. We provide gentle, professional care for children and families, including common pediatric conditions like fevers, ear infections, rashes, and asthma."
    },
    {
      question: "Do I need an appointment for pediatric care?",
      answer: "No appointment needed. We're a walk-in clinic open 7 days a week until 11 PM, including weekends and holidays. Just walk in when your child needs care."
    }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema({ ...CLINIC_DATA, description: "Family walk-in clinic serving Calgary including Alberta Children's Hospital area. Pediatric care available." });

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={faqSchema} />
      <div className="flex min-h-screen flex-col">
        <Header />
        <LiveStatusBanner />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-[#F1F9F4] to-white py-[54px] ">
            <div className="container">
              <div className="grid gap-4 lg:grid-cols-2 lg:gap-12 items-center  ">
                <div>
                  <h1 className=" font-bold tracking-tight lg:text-6xl mb-4">
                    Walk-In Clinic Near <br /><span className="text-[#299470]">Alberta Children's Hospital</span> <br />Open 7 Days a Week
                  </h1>

                  <p className="text-base  text-foreground mb-4">
                    Visiting or living near <b>Alberta Children's Hospital</b> and need quick, medical care? Our family doctors at <b>Now Medical Clinic</b> provide gentle, professional care for <b>children and families</b>, open until <b>11 PM daily</b>.</p>

                </div>

                <div className="flex justify-center items-center ml-8 ">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/BUde4AOLH7Y?rel=0&modestbranding=1&showinfo=0"
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
            title="Common  "
            title_2="Visits"
            subtitle=""
            items={commonConditions}
            image={bg_img.src}
            h2_color_1='text-[#303030]'
            h2_color_2=''
            h2_sub_color='text-[#303030]'
            IsDot={true}
            order="order-last"
          />

          {/* Why choose us Section */}
          <WhyChooseSection
            title="Why "
            title_2={<><span className="text-[#299470]">parents</span> <span className="text-[#303030]"> choose us</span></>}
            subtitle=""
            items={whyChooseItems}
            image={whyChoose_img.src}
            h2_color_1='text-[#303030]'
            h2_color_2='text-[#299470]'
            h2_sub_color='text-[#303030]'
            py=" py-[27px] "
            order="order-first"
            IsDot={false}
            bg_color="bg-[#F1F9F4]"
            both_btn="flex mt-13"
            btn_1_text="587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_2_text="587-391-8188"
            btn_2_link="tel:587-391-8188"
            btn_2_icon="/icons/pin-outline-icon.svg"
            btn_2_bg="bg-transparent border border-[#299470] text-[#299470] hover:bg-[#299470]/10"
          />


          {/* CTA Banner */}
          <div className="mt-15">
            <BottomCallAction
              title="Walk-In Clinic Near Alberta Children’s "
              title_2=" Hospital | Family Care Open Late "
              description="Need a walk-in clinic near Alberta Children's Hospital? Real family doctors, open 7 days until 11 PM for kids & families. "
              description_2="Call 587-391-8188."
            />
          </div>


        </main>

        <Footer />
      </div>
    </>
  );
}

