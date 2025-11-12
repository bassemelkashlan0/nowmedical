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
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";


export const metadata: Metadata = {
  title: "Walk-In Clinic Calgary | Same-Day Medical Care Without Appointment",
  description: "Visit our Walk-In Clinic in Calgary for same-day medical care. Get quick, professional treatment for your health concerns—no appointment needed.",
  keywords: ["walk-in clinic calgary", "walk in clinic near me", "open 7 days clinic", "no appointment needed", "calgary walk-in"],
  alternates: {
    canonical: "https://nowmedical.ca/walk-in-clinic-calgary"
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
      name: "Dr. Madiha",
      avatar: "/images/landing/dr-madiha.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
    },
    {
      name: "Dr. Vanessa",
      avatar: "/images/landing/dr-ebele.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
    },
    {
      name: "Dr. Ebele",
      avatar: "/images/landing/dr-ebele.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
    },
    {
      name: "Dr. Madiha",
      avatar: "/images/landing/dr-madiha.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
    }
  ];

  const maleDoctors = [
    {
      name: "Dr. Michael",
      avatar: "/images/landing/dr-michael.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      language: "Spanish",
    },
    {
      name: "Dr. Michael",
      avatar: "/images/landing/dr-michael.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      language: "Spanish",
    },
    {
      name: "Dr. Michael",
      avatar: "/images/landing/dr-michael.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      language: "Spanish",
    },
    {
      name: "Dr. Michael",
      avatar: "/images/landing/dr-michael.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      language: "Spanish",
    },
    {
      name: "Dr. Michael",
      avatar: "/images/landing/dr-michael.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      language: "Spanish",
    }
  ];
  const videoTestimonials = [
    {
      name: "Bessie Cooper",
      image: "/images/about-us/bessie-cooper.png",
      quote: "Finally a clinic open late that actually cares about patients."
    },
    {
      name: "Jenny Wilson",
      image: "/images/about-us/jenny-wilson.png",
      quote: "Friendly staff, short wait times, and doctors who listen."
    },
    {
      name: "Cameron Williamson",
      image: "/images/about-us/cameron-williamson.png",
      quote: "This clinic makes it easy for families — especially on weekends and holidays."
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
          <section className=" py-15 ">
            <div className="container bg-[#195A44] rounded-[20px] py-14 ">
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
                  <Link href="#">
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
                  className="border border-white text-white hover:bg-transparent bg-transparent font-bold text-lg px-6 py-6 flex items-center gap-2"
                  asChild
                >
                  <Link href="/https://share.google/CkrlunWzewWZjaPmv">
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
            py=" pt-[141px] pb-[206px]  "
            title={<>Why Choose<br /></>}
            title_2="Our Walk-In Clinic"
            subtitle=""
            items={FamilyMadicine}
            image={Family_img}
            para=" We’re here when other clinics are closed and when you need care the most."
            full_bg_btn="inline-flex mt-4"
            full_btn_link="/walk-in-clinic-calgary"
            full_btn_text="Skip the Wait Walk In Today"
            full_btn_icon="/icons/uil-arrow-up-right.svg"
            full_btn_icon_class=""
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
            buttonText="Walk In Anytime No Appointment Needed"
            buttonLink="/walk-in-clinic-calgary"
            buttonIcon="/icons/uil-arrow-up-right.svg"
            buttonIconClass=""
          />

          {/* Bottom Call to Action */}
          <section className="bg-[#195A44] max-w-[1240px] mx-auto rounded-[16px] py-7 px-24 my-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8 items-center">
              {/* Left Column - Text and Buttons */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FEFEFE] ">
                  Open When You Need Us Most
                </h2>

                <div className="space-y-3 text-[#FEFEFE] text-base">
                  <p>
                    Walk in before or after work we’re open from <b>7:30 AM to 11:00 PM,</b> every day. <br />Our clinic stays open on weekends and holidays, so you never have to delay car
                  </p>
                  <p className="text-[#FEFEFE]  " >
                    <b className="text-lg" >You don’t need to call ahead — just come in.</b><br />
                    Our caring team will help you feel better fast.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-[#299470] hover:bg-[#2E8B57]/90 text-white font-bold text-lg px-6 py-6 flex items-center gap-2"
                    asChild
                  >
                    <Link href="tel:587-391-8188">
                      <img
                        src="/images/walk-in/solar_phone.svg"
                        alt=""
                        className="w-5 h-5"
                      />
                      587-391-8188
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
                        className="w-f h-5"
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
                text: "Meet Our Doctors",
                link: "/meet-our-doctors",
                icon: "/icons/uil-arrow-up-right.svg",
                variant: "default"
              }
            ]}
          />


          {/* What Patients Say - Video Testimonials */}
          <section className="py-[54px] bg-white">
            <div className="container">
              <div className="text-center mb-6  ">
                <h2 className="text-5xl font-bold mb-4">
                  What <span className="text-[#299470]">Patients</span> Are Saying
                </h2>
                <p className="text-xl text-[#303030] ">
                  At Now Medical Clinic, our doctors treat a wide range of medical conditions  <br />
                  so you can skip the ER and get real help today.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {videoTestimonials.map((testimonial, index) => (
                  <Card key={index} className="p-0 overflow-hidden rounded hover:shadow-lg transition-shadow border-1 border-[#83C1AC] hover:bg-[#EAF4F1]">
                    <CardContent className="p-0">
                      <div className="relative aspect-video bg-gray-100">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-[290px] object-cover"
                        />
                      </div>
                      <div className="py-4 px-4">
                        <h3 className="font-bold text-lg text-[#303030] mb-2">{testimonial.name}</h3>
                        <p className="text-base  text-[#050505] italic">"{testimonial.quote}"</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <Button
                  size="lg"
                  variant="outline"
                  className="border border-[#299470] text-[#299470] hover:bg-[#299470]/10 font-bold text-lg px-6 py-6 flex items-center gap-2"
                  asChild
                >
                  <Link href="/patient-experience">
                    See Real Patent Stories
                    <img
                      src="/icons/uil-arrow-up-right-grn.svg"
                      alt=""
                      className="w-f h-5"
                    />

                  </Link>
                </Button>
              </div>
            </div>
          </section>


          {/* Find Us */}
          <FindUsSection />

        </main>

        <Footer />
      </div>
    </>
  );
}
