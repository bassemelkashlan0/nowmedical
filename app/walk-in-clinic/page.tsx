import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  FindUsSection,
  WalkInHeroSection,
  StorySection,
  WhyChooseSection,
  ValuesSection,
  DoctorsSection
} from "@/sections";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";
import { YouTubeVideosGrid } from "@/components/youtube-videos-grid";


export const metadata: Metadata = {
  title: "Walk-In Clinic Calgary | Same-Day Medical Care Without Appointment",
  description: "Visit our Walk-In Clinic in Calgary for same-day medical care. Get quick, professional treatment for your health concerns—no appointment needed.",
  keywords: ["walk-in clinic calgary", "walk in clinic near me", "open 7 days clinic", "no appointment needed", "calgary walk-in"],
  alternates: {
    canonical: "https://nowmedical.ca/walk-in-clinic"
  }
};

export default function WalkInPage() {

  const FamilyMadicine = [
    {
      text: "Annual check-ups & physicals",
    },
    {
      text: "Chronic disease management (diabetes, hypertension, asthma)",
    },
    {
      text: "Preventive care & lab follow-ups",
    },
    {
      text: "Men’s and women’s health",
    },
    {
      text: "Mental health & stress management",
    }
  ]
  const Family_img = "/images/walk-in/why-us.png";
  // Story Content
  const storyContent = [
    <>
      At Now Medical Clinic, we make healthcare simple. <br /> You don’t have to wait for weeks to see a doctor — just walk in and get care the same day. <br />
      Our experienced family doctors provide compassionate, professional care for patients of all ages.
    </>,
    <>
      <b className="text-lg">Whether it’s morning, evening, or a holiday we’re here when you need us most.</b>
    </>
  ];
  const values = [
    {
      title: "Everyday Illnesses",
      description: ["Cold, cough, flu, sore throat, earache", "Sinus infections, Strep throat, Fever, Allergies"],
      image: "/images/walk-in/everyday-illnesses.svg"
    },
    {
      title: "Women’s & Sexual Health",
      description: ["Women’s & Sexual Health", "Pregnancy testing, Pap tests, menopause care", "STI treatment, emergency contraception"],
      image: "/images/walk-in/women-sexual-health.svg"
    },
    {
      title: "Children’s & Family Care",
      description: ["Fever, rash, ear infection, asthma management", "School notes, flu shots, immunizations"],
      image: "/images/walk-in/children-family-care.svg"
    },
    {
      title: "Skin & Allergy Care",
      description: ["Rashes, hives, eczema, acne, mild allergic reactions"],
      image: "/images/walk-in/skin-allergy-care.svg"
    },
    {
      title: "Prescriptions & Renewals",
      description: ["Medication refills", "Chronic condition management (diabetes, blood pressure)", "Birth control renewals"],
      image: "/images/walk-in/prescriptions-renewals.svg"
    }
  ];
  // Structured Data
  const localBusinessSchema = generateLocalBusinessSchema(CLINIC_DATA);
  const faqSchema = generateFAQSchema([
    {
      question: "Do I need an appointment for walk-in?",
      answer: "No! Walk-ins are always welcome. No appointment needed - just come in during our hours 7:30 AM to 11:00 PM, 7 days a week."
    },
    {
      question: "Is it covered by AHCIP?",
      answer: "Yes, most walk-in services are covered by the Alberta Health Care Insurance Plan. Please bring your valid health card."
    },
    {
      question: "What's the average wait time?",
      answer: "Our average wait time is under 30 minutes, much faster than hospital emergency rooms."
    }
  ]);
  const femaleDoctors = [
    {
      name: "Dr. Madiha Badshah",
      avatar: "/images/landing/dr-madiha.png",
      specialty: "Family Doctors",
      description: "Accepting New Patients",
    },
    {
      name: "Dr. Vanessa Marezana",
      avatar: "/images/landing/dr-ebele.png",
      specialty: "Family Doctors",
      description: "Accepting New Patients",
    },
    {
      name: "Dr. Ebele Madubuko",
      avatar: "/images/landing/dr-ebele.png",
      specialty: "Family Doctors",
      description: "Accepting New Patients",
    },
    {
      name: "Dr. Prabhjot Bedi",
      avatar: "/images/landing/dr-madiha.png",
      specialty: "Family Doctors",
      description: "Accepting New Patients",
    }
  ];

  const maleDoctors = [{
    name: "Dr. Michael Ghisel",
    avatar: "/images/landing/dr-michael.png",
    specialty: "Family Doctors",
    description: "Accepting New Patients",
    language: "Spanish",
  },
  {
    name: "Dr. Wael Saleh",
    avatar: "/images/landing/dr-michael.png",
    specialty: "Family Doctors",
    description: "Accepting New Patients",
  },
  {
    name: "Dr. Rai Khan",
    avatar: "/images/landing/dr-michael.png",
    specialty: "Family Doctors",
    description: "Accepting New Patients",
  },
  {
    name: "Dr. Tive Egbonoje",
    avatar: "/images/landing/dr-michael.png",
    specialty: "Family Doctors",
    description: "Accepting New Patients",
  },
  {
    name: "Dr. Olasunkanmi Akinremi",
    avatar: "/images/landing/dr-michael.png",
    specialty: "Family Doctors",
    description: "Accepting New Patients",
  }
  ];



  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={faqSchema} />

      <div className="flex min-h-screen flex-col">
        <Header />
        <LiveStatusBanner />
        <main className="flex-1">
          {/* Hero Section */}
          <WalkInHeroSection />


          {/* Bottom Call to Action */}
          <section className=" my-10 lg:my-15 mx-4 md:mx-12 ">
            <div className="bg-[#195A44] max-w-[1240px] mx-auto rounded-[16px]  px-4  md:px-8 lg:px-18 py-10 lg:py-14 ">
              <div className="mx-auto">
                <h2 className="text-2xl md:text-5xl font-bold text-[#FEFEFE] mb-[10px] ">
                  Near the Hospital? We’re a Fast Option
                </h2>

                <p className="text-[#FEFEFE] text-base ">
                  Coming from a hospital area and don’t need the ER? Walk in for same-day care with shorter waits <b className="text-lg"> open late, 7 days a week</b>.
                </p>
              </div>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-10 ">
                <Button
                  size="lg"
                  className="bg-[#299470] hover:bg-[#2E8B57]/90 text-white font-bold text-lg px-6 py-6 flex items-center gap-2"
                  asChild
                >
                  <Link href="tel:587-391-8188" className="flex items-center gap-2">
                    <img
                      src="/icons/btn_phone-outline-icon.svg"
                      alt="Phone"
                      className="w-5 h-5 brightness-0 invert"
                    />
                    Call: 587-391-8188
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border border-white text-white hover:bg-white/10 bg-transparent font-bold text-lg px-6 py-6 flex items-center gap-2"
                  asChild
                >
                  <Link href="/walk-in-clinic" className="flex items-center gap-2">
                    <img
                      src="/icons/solar_walking-outline.svg"
                      alt=""
                      className="w-5 h-5"
                    />
                    Walk In Now
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border border-white text-white hover:bg-white/10 bg-transparent font-bold text-lg px-6 py-6 flex items-center gap-2"
                  asChild
                >
                  <Link href="https://share.google/CkrlunWzewWZjaPmv" className="flex items-center gap-2">
                    <img
                      src="/images/walk-in/flowbite_map-pin-outline.svg"
                      alt=""
                      className="w-5 h-5"
                    />
                    Get Direction
                  </Link>
                </Button>
              </div>
            </div>
          </section>


          {/* Our Story */}
          <StorySection
            title={<><span className="text-[#299470]">Fast, Friendly Medical care</span><br /></>}
            subtitle={<><span className="text-[#303030]">No Appointment Needed</span></>}
            content={storyContent}
          />

          {/*Family Medicine Section */}
          <WhyChooseSection
            bg_color="bg-[#F1F9F4]"
            py=" pt-10 lg:pt-[141px] pb-10 lg:pb-[206px]  "
            title={<>Why Choose<br /></>}
            title_2="Our Walk-In Clinic"
            subtitle=""
            items={FamilyMadicine}
            image={Family_img}
            para=" We're here when other clinics are closed and when you need care the most."
            both_btn="flex pt-4"
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Skip the Wait Walk In Today"
            btn_2_link="/walk-in-clinic"
            btn_2_icon="/icons/uil-arrow-up-right-grn.svg"
            btn_2_iconAfter={true}
            order="order-first"
            h2_color_1="text-[#299470]"
            h2_color_2="text-[#303030]"
          />


          {/* Our Values */}
          <ValuesSection
            title="Common Conditions"
            subtitle="We Treat"
            description="Our walk-in doctors handle most medical concerns, so you can avoid the ER and get treated quickly"
            values={values}
            titleFontWeight="font-medium"
            useListFormat={true}
            buttonText={<> Walk In Anytime No Appointment Needed </>}
            buttonLink="/walk-in-clinic"
            buttonIcon="/icons/uil-arrow-up-right.svg"
            buttonIconClass=""
          />

          {/* Bottom Call to Action */}
          <section className="my-10 lg:my-[60px] lg:px-8  px-4">
            <div className="bg-[#195A44] max-w-[1240px] w-full mx-auto rounded-[16px] py-7 px-4 md:px-8 lg:px-24 ">
              <div className="grid grid-cols-1 md:grid-cols-[65%_35%]  gap-8 items-center">
                {/* Left Column - Text and Buttons */}
                <div className="space-y-6">
                  <h2 className="text-3xl text-center md:text-left  lg:text-5xl font-bold text-[#FEFEFE] ">
                    Open When You Need Us Most
                  </h2>

                  <div className="space-y-3 text-[#FEFEFE] text-base text-center md:text-left">
                    <p>
                      Walk in before or after work we’re open from <b>7:30 AM to 11:00 PM,</b> every day. <br />Our clinic stays open on weekends and holidays, so you never have to delay car
                    </p>
                    <p className="text-[#FEFEFE]  " >
                      <b className="text-lg" >You don’t need to call ahead — just come in.</b><br />
                      Our caring team will help you feel better fast.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex  flex-wrap  flex-row gap-4 pt-4">
                    <Button
                      size="lg"
                      className="bg-[#299470] hover:bg-[#2E8B57]/90 text-white font-bold text-lg px-6 py-6 flex items-center gap-2"
                      asChild
                    >
                      <Link href="tel:587-391-8188" className="flex items-center gap-2">
                        <img
                          src="/icons/btn_phone-outline-icon.svg"
                          alt="Phone"
                          className="w-5 h-5 brightness-0 invert"
                        />
                        Call: 587-391-8188
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border border-white text-white hover:bg-white/10 bg-transparent font-bold text-lg px-6 py-6 flex items-center gap-2"
                      asChild
                    >
                      <Link href="https://share.google/CkrlunWzewWZjaPmv">
                        <img
                          src="/images/walk-in/flowbite_map-pin-outline.svg"
                          alt=""
                          className="w-5 h-5"
                        />
                        Get Direction
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Right Column - Illustration */}
                <div className="flex items-center justify-center lg:justify-end">
                  <img
                    src="/images/walk-in/calendar-rafiki.png"
                    alt="Calendar illustration showing availability"
                    className="w-full h-auto max-w-[350px]"
                  />
                </div>
              </div>
            </div>
          </section>


          {/* Meet Our Doctors */}
          <DoctorsSection
            title="Meet Our Doctors"
            femaleDoctors={femaleDoctors}
            maleDoctors={maleDoctors}
            showCategories={false}
            useCarousel={true}
            customButtons={[

              {
                text: "Call: 587-391-8188",
                link: "tel:587-391-8188",
                icon: "/icons/btn_phone-outline-icon.svg",
                variant: "default"
              },
              {
                text: "Meet Our Doctors",
                link: "/meet-our-doctors",
                icon: "/icons/uil-arrow-up-right-grn.svg",
                variant: "outline"
              }
            ]}
          />



          {/* YouTube Videos Grid */}
          <YouTubeVideosGrid
            maxResults={3}
            title="What **Patients** Are Saying"
            description="At Now Medical Clinic, our doctors treat a wide range of medical conditions so you can skip the ER and get real help today."
            showButton={true}
            buttonText="See Real Patient Stories"
            buttonLink="/patient-experience"
            bgColor="bg-white"
            className=""
          />


          {/* Find Us */}
          <FindUsSection
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

        </main>

        <Footer />
      </div>
    </>
  );
}
