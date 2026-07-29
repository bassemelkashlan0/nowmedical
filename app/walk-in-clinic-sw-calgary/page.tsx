import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";
import { FindUsSection, WhyChooseSection, FAQSection } from "@/sections";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import bg_img from "@/public/images/major-sub/rocky-why-now.png";
import whyChoose_img from "@/public/images/major-sub/alberta-comman-visit.png";
import hospitel_img from "@/public/images/hospital-peter/why-us.png";
import driven_img from "@/public/images/driver-medical/why-us.png";


export const metadata: Metadata = {
  title: "Walk-In Clinic SW Calgary | Open Until 11 PM | No Appointment Needed",
  description: "Looking for a walk-in clinic in SW Calgary? Open 7 days until 11 PM. Same-day care from licensed family doctors. No appointment required.",
  keywords: ["walk in clinic sw calgary", "sw calgary walk-in clinic", "same day doctor sw calgary", "no appointment clinic sw calgary"],
  alternates: {
    canonical: "https://nowmedical.ca/walk-in-clinic-sw-calgary"
  }
};

export default function SWCalgaryClinicPage() {
  const whyChooseItems = [
    { text: "Licensed family physicians" },
    { text: "Open 7 Days Until 11 PM" },
    { text: "Evening and weekend availability" },
    { text: "No appointment required" },
    { text: "Accessible alternative to hospital emergency wait times" },
    { text: "Care for children, adults, and seniors" }
  ];

  const commonConditions = [
    { text: "Cold, flu, cough & sore throat" },
    { text: "Minor injuries and sprains" },
    { text: "Skin infections and allergic reactions" },
    { text: "Prescription renewals" },
    { text: "Chronic condition flare-ups" },
    { text: "Pediatric and adult medical concerns" }
  ];

  const faqCategories = [
    {
      category: "Frequently Asked Questions",
      questions: [
        {
          question: "Do I need an appointment?",
          answer: "No Appointment Needed. Walk in is Open 7 days until 11 pm Including weekends and holidays."
        },
        {
          question: "Are you open weekends?",
          answer: "Yes. We are open 7 days a week until 11 PM including weekends and holidays."
        },
        {
          question: "Is this a walk-in clinic serving SW Calgary?",
          answer: "Yes. We provide walk-in medical care for residents of Evergreen, Shawnessy, Bridlewood, Somerset, and surrounding southwest Calgary communities."
        }
      ]
    }
  ];

  const faqSchema = generateFAQSchema(
    faqCategories.flatMap(c => c.questions.map(q => ({ question: q.question, answer: q.answer })))
  );

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Walk-in clinic serving SW Calgary. Same-day care for Evergreen, Shawnessy, Bridlewood, Somerset, Millrise. Open until 11 PM daily."
  });

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={faqSchema} />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://nowmedical.ca/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Walk-In Clinic",
                "item": "https://nowmedical.ca/walk-in-clinic"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Walk-In Clinic SW Calgary",
                "item": "https://nowmedical.ca/walk-in-clinic-sw-calgary"
              }
            ]
          })
        }}
      />

      <div className="flex min-h-screen flex-col">
        <Header />
        <LiveStatusBanner />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-[#F1F9F4] to-white py-10 lg:py-[54px]">
            <div className="container">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4">
                      <span className="text-[#299470]">Walk-In Clinic SW Calgary | 
Open today Until 11 PM
No Appointment Needed</span>
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-medium text-[#303030] mb-[21px] ">
                    Open 7 days Until 11 PM
                    Including Weekends and Holidays 
                  </h2>

                  <p className="text-base text-[#303030] mb-4">
                    If you are searching for a walk-in clinic in <b>SW Calgary,</b> Now Medical Clinic provides
                    same-day medical care for residents of <b>Evergreen, Shawnessy, Bridlewood, Somerset, Millrise,</b> and surrounding southwest communities.
                  </p>
                  <p className="text-base text-[#303030] mb-4">
                    We are <b>open 7 days a week until 11 PM.</b> No appointment is required.
                  </p>
                  <p className="text-base text-[#303030] mb-4">
                    SW Calgary patients choose walk-in care instead of waiting in emergency departments such as Rockyview General Hospital.
                  </p>

                  <div className="flex flex-wrap flex-row gap-4 pt-4">
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
                    src="https://www.youtube.com/embed/BUde4AOLH7Y?rel=0&modestbranding=1&showinfo=0"
                    title="Now Medical Clinic SW Calgary"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            </div>
          </section>

          {/* Why SW Calgary Patients Choose Us */}
          <WhyChooseSection
            title="Why SW Calgary"
            title_2=""
            subtitle="Patients Choose Us"
            items={whyChooseItems}
            image={whyChoose_img.src}
            h2_color_1='text-[#299470]'
            h2_sub_color='text-[#303030]'
            order="order-last"
            IsDot={false}
            para_after="Our clinic offers reliable after-hours medical access for families and working professionals across southwest Calgary."
            both_btn="flex pt-7"
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Walk In Now"
            btn_2_link="/walk-in-clinic"
            btn_2_icon="/icons/btn-walking-outline-icon.svg"
          />

          {/* Conditions We Treat */}
          <WhyChooseSection
            title="Conditions"
            title_2="We Treat"
            subtitle=""
            para="Our walk-in doctors provide care for:"
            para_after="If your condition is not life-threatening, a walk-in clinic can often provide faster access than emergency care."
            items={commonConditions}
            image={bg_img.src}
            h2_color_1='text-[#299470]'
            h2_color_2='text-[#303030]'
            h2_sub_color='text-[#303030]'
            IsDot={false}
            bg_color="bg-[#F1F9F4]"
            order="order-first"
            both_btn="flex pt-7"
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Walk In Now"
            btn_2_link="/walk-in-clinic"
            btn_2_icon="/icons/btn-walking-outline-icon.svg"
          />

          {/* Convenient Access From SW Calgary */}
          <WhyChooseSection
            title="Convenient Access"
            title_2=""
            subtitle="From SW Calgary"
            para="Our clinic is easily accessible via:"
            items={[
              { text: "Macleod Trail" },
              { text: "Stoney Trail" },
              { text: "14 Street SW" }
            ]}
            para_after="Patients from Shawnessy and Evergreen can typically reach our clinic within a reasonable drive depending on traffic conditions."
            image={driven_img.src}
            h2_color_1='text-[#299470]'
            h2_sub_color='text-[#303030]'
            IsDot={false}
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

          {/* Internal Links - Green Section */}
          <section className="my-10 lg:my-15 mx-4 md:mx-12">
            <div className="bg-[#195A44] max-w-[1240px] mx-auto rounded-[16px] px-4 md:px-8 lg:px-18 py-10 lg:py-14">
              <p className="text-[#FEFEFE] text-2xl text-center mb-4">
                Learn more about our complete{" "}
                <Link href="/walk-in-clinic" className="text-[#7EDAB8] underline hover:text-white font-semibold">
                  Walk-In Clinic services
                </Link>
                .
              </p>
              <p className="text-[#FEFEFE] text-2xl text-center">
                If you are looking for ongoing primary care, visit our{" "}
                <Link href="/family-doctors-accepting-new-patients" className="text-[#7EDAB8] underline hover:text-white font-semibold">
                  Family Doctors Accepting New Patients
                </Link>{" "}
                page.
              </p>
            </div>
          </section>

          {/* Serving Patients Across Calgary */}
          <WhyChooseSection
            title="Serving Patients"
            title_2=""
            subtitle="Across Calgary"
            para="We also provide walk-in care for:"
            items={[
              { text: <><Link href="/walk-in-clinic-ne-calgary" className="hover:text-[#299470]">NE Calgary</Link></> },
              { text: <><Link href="/walk-in-clinic-nw-calgary" className="hover:text-[#299470]">NW Calgary</Link></> },
              { text: <><Link href="/walk-in-clinic-se-calgary" className="hover:text-[#299470]">SE Calgary</Link></> },
              { text: <><Link href="/walk-in-clinic-downtown-calgary" className="hover:text-[#299470]">Downtown Calgary</Link></> }
            ]}
            image={hospitel_img.src}
            h2_color_1='text-[#299470]'
            h2_sub_color='text-[#303030]'
            IsDot={false}
            bg_color="bg-[#F1F9F4]"
            order="order-first"
            both_btn="flex pt-7"
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Walk In Now"
            btn_2_link="/walk-in-clinic"
            btn_2_icon="/icons/btn-walking-outline-icon.svg"
          />

          {/* FAQ Section */}
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Walk-In Clinic SW Calgary"
            categories={faqCategories}
            showHero={false}
          />

          {/* Find Us / Map Section */}
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
                    <img src="/icons/solar_walking-outline.svg" alt="Walk In" className="w-5 h-5" />
                    Walk In Now
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#299470] border-2 text-[#299470] hover:bg-[#299470]/10 bg-transparent font-bold text-lg"
                  asChild
                >
                  <Link
                    href="https://maps.app.goo.gl/cL3Y6A4iHoaXZ8jv6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <img src="/images/walk-in/flowbite_map-pin-outline.svg" alt="Map" className="w-5 h-5" />
                    Get Direction
                  </Link>
                </Button>
              </>
            }
          />

          <div className="mt-15"></div>
          {/* CTA Banner */}
          <BottomCallAction
            title='Walk-In Clinic SW Calgary | '
            title_2="Open 7 Days Until 11 PM"
            description="Looking for a walk-in clinic in SW Calgary? Same-day care from licensed family doctors. No appointment required. Open 7 days until 11 PM. Call"
            description_2=' 587-391-8188.'
          />
        </main>

        <Footer />
      </div>
    </>
  );
}
