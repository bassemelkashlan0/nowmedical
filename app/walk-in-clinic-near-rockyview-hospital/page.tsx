import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import { LiveStatusBanner } from "@/components/live-status-banner";
import { FindUsSection, WhyChooseSection } from "@/sections";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import bg_img from "@/public/images/major-sub/rocky-skip-hospital.png";
import whyChoose_img from "@/public/images/major-sub/rocky-why-now.png";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Walk-In Clinic Near Rockyview Hospital Calgary",
  description: "Now Medical walk-in clinic near Rockyview Hospital. Quick access to medical care—no appointment needed.",
  keywords: ["walk in clinic near rockyview hospital", "clinic near rockyview"],
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
          <section className="bg-[#F1F9F4] to-white py-10 lg:py-[54px] ">
            <div className="container">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12  items-center  ">
                <div>
                  <h1 className="text-4xl text-[#303030] lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4">
                    Walk-In Clinic Near <br /><span className="text-[#299470]">Rockyview Hospital</span> <br />Open 7 Days Until 11 PM
                  </h1>

                  <p className="text-base text-[#303030] mb-4">
                    Need a doctor near <b>Rockyview General Hospital ?</b>  </p>
                  <p className="text-base text-[#303030] mb-4">Walk in to <b>Now Medical Clinic</b> with real family doctors open <b>7 days a week until 11 PM,</b> including <b>weekends and holidays.</b></p>

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
                      <Link href="/walk-in-clinic" className="flex items-center gap-2">
                        <img src="/icons/btn-walking-outline-icon.svg" alt="Walk In" className="w-5 h-5" />
                        Walk In Now
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center items-center lg:ml-8">
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
            both_btn="flex pt-7"
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Walk In Now"
            btn_2_link="/walk-in-clinic"
            btn_2_icon="/icons/btn-walking-outline-icon.svg"
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
            py=" py-10 lg:py-8 "
            order="order-first"
            IsDot={false}
            bg_color="bg-[#F1F9F4]"
            both_btn="flex pt-7"
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Walk In Now"
            btn_2_link="/walk-in-clinic"
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
                  <Link href="/walk-in-clinic" className="flex items-center gap-2">
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
            title='Walk-In Clinic Near Rockyview Hospital | '
            title_2="Open 7 Days Until 11 PM"
            description="Skip ER waits at Rockyview Hospital walk in for real-doctor care 7 days a week until 11 PM. Fast walk-in & free parking. Call"
            description_2=' 587-391-8188.'
          />


        </main>

        <Footer />
      </div>
    </>
  );
}

