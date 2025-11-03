import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  HeroSection,
  LiveWaitTimesSection,
  HospitalAlternativeSection,
  NearbyHospitalsSection,
  ConditionsSection,
  FindUsSection,
  CTABannerSection,
  WalkInHeroSection,
  StorySection,
  WhyChooseSection,
  ValuesSection
} from "@/sections";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, FileText, CreditCard, AlertCircle, Phone, Activity, Stethoscope, Brain, Heart, Baby, Shield } from "lucide-react";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";

export const metadata: Metadata = {
  title: "Walk-In Clinic Calgary | Open 7 Days | No Appointment Needed",
  description: "Walk in 7 days a week until 11 PM. Real doctors, short wait times, no appointments. Calgary's trusted walk-in medical clinic.",
  keywords: ["walk-in clinic calgary", "walk in clinic near me", "open 7 days clinic", "no appointment needed", "calgary walk-in"],
  alternates: {
    canonical: "https://nowmedical.ca/walk-in-clinic-calgary"
  },
  openGraph: {
    title: "Walk-In Clinic Calgary | Open 7 Days | No Appointment Needed",
    description: "Walk in 7 days a week until 11 PM. Real doctors, short wait times, no appointments. Calgary's trusted walk-in medical clinic.",
    url: "https://nowmedical.ca/walk-in-clinic-calgary",
    siteName: "Now Medical Clinic",
    images: [
      {
        url: "https://nowmedical.ca/images/modern-medical-clinic-exterior-building.jpg",
        width: 1200,
        height: 630,
        alt: "Now Medical Clinic - Walk-In Clinic Calgary"
      }
    ],
    locale: "en_CA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Walk-In Clinic Calgary | Open 7 Days | No Appointment Needed",
    description: "Walk in 7 days a week until 11 PM. Real doctors, short wait times, no appointments.",
    images: ["https://nowmedical.ca/images/modern-medical-clinic-exterior-building.jpg"]
  }
};

export default function WalkInPage() {
  const conditions = [
    {
      category: "Chronic Conditions",
      icon: <Activity className="w-8 h-8" />,
      items: [
        "Diabetes (Type 1 & Type 2)",
        "High blood pressure (Hypertension)",
        "Asthma and COPD",
        "Arthritis and joint pain"
      ]
    },
    {
      category: "Walk-in & Urgent Care",
      icon: <Stethoscope className="w-8 h-8" />,
      items: [
        "Cold, cough, and flu symptoms",
        "Sore throat and tonsillitis",
        "Ear and eye infections",
        "Minor injuries and lacerations"
      ]
    },
    {
      category: "Mental Health & Wellness",
      icon: <Brain className="w-8 h-8" />,
      items: [
        "Anxiety and panic attacks",
        "Depression and mood disorders",
        "Stress management",
        "Sleep disorders and insomnia"
      ]
    },
    {
      category: "Men's Health",
      icon: <Heart className="w-8 h-8" />,
      items: [
        "Erectile dysfunction and libido issues",
        "Low testosterone and fatigue",
        "Prostate exams and PSA screening",
        "Weight management and fitness advice"
      ]
    },
    {
      category: "Women's Health",
      icon: <Heart className="w-8 h-8" />,
      items: [
        "Pregnancy testing and prenatal care",
        "Birth control and family planning",
        "Menstrual irregularities and PMS",
        "Pap smears and screening"
      ]
    },
    {
      category: "Children's Health",
      icon: <Baby className="w-8 h-8" />,
      items: [
        "Childhood immunizations",
        "Growth and development monitoring",
        "Cough, cold, and ear infections",
        "School and sports physicals"
      ]
    }
  ];
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
      At Now Medical Clinic, we make healthcare simple. You don’t have to wait for weeks to see a doctor — just walk in and get care the same day. Our experienced family doctors provide compassionate, professional care for patients of all ages.
    </>,
    <>
      <b className="text-lg">Whether it’s morning, evening, or a holiday we’re here when you need us most.</b>
    </>
  ];
  const values = [
    {
      title: "Everyday Illnesses",
      description: ["Cold, cough, flu, sore throat, earache","Sinus infections, Strep throat, Fever, Allergies"],
      image: "/images/walk-in/everyday-illnesses.svg"
    },
    {
      title: "Women’s & Sexual Health",
      description: ["Women’s & Sexual Health","Pregnancy testing, Pap tests, menopause care", "STI treatment, emergency contraception"],
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
  const doctors = [
    {
      name: "Dr. Madiha",
      avatar: "/images/about-us/dr-madiha.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Vanessa",
      avatar: "/images/about-us/dr-vanessa.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Michael",
      avatar: "/images/about-us/dr-michael.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Bedi",
      avatar: "/images/about-us/dr-vanessa.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
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
          <section className="bg-[#195A44] max-w-[1240px] mx-auto rounded-[16px] p-12 my-[60px]">
            <div className="mx-auto">
              <h2 className="text-2xl md:text-5xl font-bold text-white mb-3">
                Near the Hospital? We’re a Fast Option
              </h2>

              <p className="text-white text-base md:text-lg">
                Coming from a hospital area and don’t need the ER? Walk in for same-day care with shorter waits <b>open late, 7 days a week</b>.
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-12">
              <Button
                size="lg"
                className="bg-[#299470] hover:bg-[#2E8B57]/90 text-white font-bold text-lg px-6 py-6 flex items-center gap-2"
                asChild
              >
                <Link href="/services">
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
                <Link href="/contact">
                  <img
                    src="/images/walk-in/flowbite_map-pin-outline.svg"
                    alt=""
                    className="w-5 h-5"
                  />
                  Get Direction
                </Link>
              </Button>
            </div>
          </section>


          {/* Our Story */}
          <StorySection
            title={<>Fast, Friendly Medical care<br /></>}
            subtitle="No Appointment Needed"
            content={storyContent}
            images={["/images/walk-in/walk-in-reception.png"]}
          />

          {/*Family Medicine Section */}
          <WhyChooseSection
            bg_color="bg-[#F1F9F4]"
            title={<>Why Choose<br /></>}
            title_2="Our Walk-In Clinic"
            subtitle=""
            items={FamilyMadicine}
            image={Family_img}
            para=" We’re here when other clinics are closed and when you need care the most."
            full_bg_btn="inline-flex"
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
          <section className="bg-[#195A44] max-w-[1240px] mx-auto rounded-[16px] py-8 px-18 my-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8 items-center">
              {/* Left Column - Text and Buttons */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Open When You Need Us Most
                </h2>
                
                <div className="space-y-3 text-white text-base md:text-lg">
                  <p>
                  Walk in before or after work we’re open from <b>7:30 AM to 11:00 PM,</b> every day. <br/>Our clinic stays open on weekends and holidays, so you never have to delay car
                  </p>
                  <p>
                  <b>You don’t need to call ahead — just come in.</b><br />
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
                    <Link href="/contact">
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
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4">
                Meet <span className="text-[#4A9B8E]">Our Doctors</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Our team of experienced family doctors brings diverse backgrounds and shared dedication to patient care. Our doctors collaborate to ensure continuity of care, whether you walk in for an urgent concern or visit regularly as a registered patient.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-8">
              {doctors.map((doctor, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  {/* Top Section with Light Green Background */}
                  <div className="bg-[#4A9B8E]/10 flex items-center justify-center">
                    <img
                      src={doctor.avatar}
                      alt={doctor.name}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                  {/* Bottom Section with White Background */}
                  <div className="p-4 text-start">
                    <p className="text-base text-foreground mb-1">{doctor.specialty}</p>
                    <h3 className="text-2xl font-bold text-foreground font-medium mb-3">{doctor.name}</h3>
                    <p className="text-base text-foreground">{doctor.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call-to-Action Button */}
            <div className="flex justify-center">
            <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white text-lg" asChild>
                    <Link href="/walk-in-clinic-calgary"><img src="/icons/btn_phone-outline-icon.svg" alt="Phone" className="w-5 h-5" /> Call 587-391-8188 to Book or Walk In Today</Link>
                  </Button>
            </div>
          </div>
        </section>


        {/* What Patients Say - Video Testimonials */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4">
                What <span className="text-[#299470]">Patients</span> Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what Calgary patients are saying about their experience with Now Medical Clinic.
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
                      <h3 className="font-semibold text-lg mb-2">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
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
                    <Link href="/patients-stories">
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
