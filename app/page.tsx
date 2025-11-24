import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  WhyChooseSection,
  ConditionsSection,
  DoctorsSection,
  TestimonialsSection,
  FindUsSection,
} from "@/sections";
import { Phone, Users, Clock, Stethoscope } from "lucide-react";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, generateAggregateRatingSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";

export const metadata: Metadata = {
  title: "Walk-In Clinic Calgary | Open 7 Days Until 11 PM",
  description: "Calgary's trusted walk-in clinic. Real doctors, open daily until 11 PM. Walk-ins welcome — no appointment needed.",
  keywords: ["walk-in clinic calgary", "walk in clinic near me", "open late medical clinic", "family doctor calgary", "clinic near me"],
};

export default function HomePage() {
  const whyChooseItems = [
    {
      text: "Open 7 Days — Until 11:00 PM",
      icon: <Clock className="w-5 h-5" />
    },
    {
      text: "Open on Weekends and Holidays",
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      text: "No Appointment Needed — Just Walk In",
      icon: <Users className="w-5 h-5" />
    },
    {
      text: "Experienced Family Doctors You Can Rely On",
      icon: <Phone className="w-5 h-5" />
    },
    {
      text: "Short Waits & Same-Day Prescriptions",
      icon: <Phone className="w-5 h-5" />
    },
    {
      text: "Serving All Areas of Calgary with Free Parking",
      icon: <Phone className="w-5 h-5" />
    }
  ];

  const conditions = [
    {
      category: "Chronic Conditions",
      icon: "/images/landing/chronic-conditions.svg",
      items: [
        "Diabetes (Type 1 & Type 2)",
        "High blood pressure (Hypertension)",
        "Asthma and COPD",
        "Arthritis and joint pain",
        "Thyroid disorders",
        "Chronic pain management",
        "Obesity and weight management",
        "Chronic kidney disease"
      ]
    },
    {
      category: "Walk-in & Urgent Care",
      icon: "/images/landing/walk-In-urgent-care.svg",
      items: [
        "Cold, cough, and flu symptoms",
        "Sore throat and tonsillitis",
        "Ear and eye infections",
        "Urinary tract infections (UTIs)",
        "Minor injuries and lacerations",
        "Sprains and strains",
        "Allergies and rashes",
        "Skin infections and cellulitis",
        "Nausea, vomiting, and diarrhea",
        "Pink eye and styes"
      ]
    },
    {
      category: "Mental Health & Wellness",
      icon: "/images/landing/mental-health-wellness.svg",
      items: [
        "Anxiety and panic attacks",
        "Depression and mood disorders",
        "Stress management",
        "Sleep disorders and insomnia",
        "ADHD and focus issues",
        "Grief and loss counseling (referrals)"
      ]
    },
    {
      category: "Men's Health",
      icon: "/images/landing/mens-health.svg",
      items: [
        "Erectile dysfunction and libido issues",
        "Low testosterone and fatigue",
        "Prostate exams and PSA screening",
        "Male pattern baldness",
        "Weight management and fitness advice",
        "Mental health and stress counseling",
        "Sexual health and STD screening"
      ]
    },
    {
      category: "Women's Health",
      icon: "/images/landing/womens-health.svg",
      items: [
        "Pregnancy testing and prenatal care",
        "Birth control and family planning",
        "Menstrual irregularities and PMS",
        "Menopause management and HRT",
        "Pap smears and cervical cancer screening",
        "Breast exams and mammogram referrals",
        "UTIs and yeast infections",
        "Pelvic pain and endometriosis"
      ]
    },
    {
      category: "Children's Health",
      icon: "/images/landing/childrens-health.svg",
      items: [
        "Childhood immunizations",
        "Growth and development monitoring",
        "Cough, cold, and ear infections",
        "Fever and rashes",
        "School and sports physicals",
        "Behavioral and learning assessments"
      ]
    },
    {
      category: "Preventive Care & Diagnostics",
      icon: "/images/landing/preventive-care.svg",
      items: [
        "Annual physical exams",
        "Chronic disease screening",
        "Travel medicine and vaccines",
        "Blood work and lab tests",
        "ECG and cardiac screening"
      ]
    }
  ];

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

  const maleDoctors = [
    {
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
    },
  ];

  const testimonials = [
    {
      name: "Sanny Cooper",
      avatar: "/images/landing/review_1.png",
      rating: 5,
      text: "Really good experience at this walk-in clinic. I was in and out in about 1.5 hours, and most of that wait was for the pharmacy inside (they're a little slow). The clinic itself runs smoothly, staff were friendly, and it's very convenient to have the pharmacy on-site."
    },
    {
      name: "Bill Grabovac",
      avatar: "/images/landing/review_2.png",
      rating: 5,
      text: "Fast service! Well managed medical clinic! Got to see a medical Dr after a 5 minute wait at 7:50pm. There was a small fee as we did not have an Alberta Health Care Number. The Dr was knowledgeable with the medical condition we experienced. Very Happy with the service we received. A+"
    },
    {
      name: "Jetta Lush",
      avatar: "/images/landing/review_3.png",
      rating: 5,
      text: "This place was awesome!!! Hours are wonderful, worked so well for me and my specific situation (working single parent), employees were warm and welcoming. Super fast efficient, doctor was warm, welcoming and super thorough. Great experience overall."
    }
  ];


  // Structured Data for SEO
  const localBusinessSchema = generateLocalBusinessSchema(CLINIC_DATA);
  const aggregateRatingSchema = generateAggregateRatingSchema({
    ratingValue: 4.8,
    reviewCount: 250
  });
  const faqSchema = generateFAQSchema([
    {
      question: "Do I need an appointment?",
      answer: "No appointment needed! We welcome walk-ins 7 days a week from 7:30 AM to 11:00 PM, including weekends and holidays."
    },
    {
      question: "Is it covered by AHCIP?",
      answer: "Yes, most services are covered by the Alberta Health Care Insurance Plan (AHCIP). Please bring your valid Alberta Health Card."
    },
    {
      question: "What are your hours?",
      answer: "We're open 7:30 AM - 11:00 PM every day of the week, including weekends and statutory holidays."
    },
    {
      question: "Are you accepting new family doctor patients?",
      answer: "Yes, our family doctors are currently accepting new patients. Call us at 587-391-8188 to register."
    }
  ]);

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={aggregateRatingSchema} />
      <StructuredData data={faqSchema} />

      <div className="flex min-h-screen flex-col">
        <Header />
        <LiveStatusBanner />


        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-[#F1F9F4] to-white py-10 lg:py-[54px] ">
            <div className="container">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl  mb-4 md:mb-[21px] ">
                    <span className="text-[#299470]">Walk-In & Family Doctor</span>
                    <br />
                    <span className="text-[#299470]">Clinic in Calgary</span>
                    <br />
                    <span className="text-[#303030] ">Open 7 Days Until 11 PM</span>
                  </h1>
                  <p className=" text-muted-foreground mb-4 md:mb-[21px]">
                    <span className="font-bold text-[#303030] text-[36px]/10 ">Including weekends and holidays</span>
                  </p>
                  <p className="text-base text-[#000000] mb-3 md:mb-[15px] ">
                    Skip the hospital wait. See a Real doctor Today — No Appointment Needed. Fast, friendly care for you and your family, Open on Weekends and Holidays, serving all areas of Calgary.
                  </p>
                  <p className="text-lg font-bold text-[#050505] mb-8 md:mb-[52px] ">
                    Real doctors. Real care. Open late every day
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-[#299470] text-bold hover:bg-[#2D7B6F] text-white text-lg hidden" asChild>
                      <Link href="/contact">Register as a new patient<img src="/icons/uil-arrow-up-right.svg" alt="Register as a new patient" className="w-5 h-5" /></Link>
                    </Button>
                    <Button
                      size="lg"
                      className="bg-[#299470] hover:bg-[#2D7B6F] text-white text-lg font-bold"
                      asChild
                    >
                      <Link href="tel:587-391-8188" className="flex items-center gap-2">
                        <img src="/icons/btn_phone-outline-icon.svg" alt="Phone" className="w-5 h-5 brightness-0 invert" />
                        Call: 587-391-8188
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#299470] text-bold text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg"
                      asChild
                    >
                      <Link href="/walk-in-clinic">Walk In Now <img src="/icons/uil-arrow-up-right-grn.svg" alt="Walk In Now" className="w-5 h-5" /></Link>
                    </Button>
                  </div>
                </div>

                <div className="relative lg:ml-8">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/zeArmG81bAE?rel=0&modestbranding=1&showinfo=0"
                    title="YouTube Shorts Video"
                    frameborder="0"
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                  </iframe>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Info Cards */}
          <section className=" py-8 lg:py-9">
            <div className="container">
              <div className=" mx-auto bg-[#EEF8F2]   rounded-2xl px-4 lg:px-12 py-5 lg:py-8">
                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#CDEDE3] justify-center items-stretch">
                  {/* Card 1: Walk-In Visits */}
                  <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 text-center  md:border-r-2  border-[#9AD9BA80]  ">
                    <div className="flex items-center justify-center mb-4">
                      {/* Placeholder icon */}
                      <span className="inline-flex h-[100px] w-[100px] rounded-full bg-[#4AB27F1A] items-center justify-center">
                        {/* Medical Bag/Phone Emoji placeholder */}
                        <span className="mt-16">
                          <img src="/images/landing/mobile.png" alt="Walk-In Visits" className="w-full h-full" />

                        </span>
                      </span>
                    </div>
                    <h3 className="font-bold text-[26px] mb-2 mt-8 text-[#303030] ">Walk-In Visits</h3>
                    <p className="text-base font-normal  text-[#000000] ">
                      No appointment needed. See real doctors 7<br /> days a week even on holidays.
                    </p>
                  </div>
                  {/* Card 2: Family Doctors */}
                  <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 text-center md:border-r-2  border-[#9AD9BA80] ">
                    <div className="flex items-center justify-center mb-4">
                      {/* Stethoscope icon placeholder */}
                      <span className="inline-flex h-[100px] w-[100px] rounded-full bg-[#4AB27F1A] items-center justify-center">
                        <span className="mt-16">
                          <img src="/images/landing/stethoscope.png" alt="Family Doctors" className="w-full h-full" />
                        </span>
                      </span>
                    </div>
                    <h3 className="font-bold text-[26px] mb-2 mt-8 text-[#303030] ">Family Doctors</h3>
                    <p className="text-base font-normal  text-[#000000]">
                      Ongoing care for your whole family from<br /> newborns to seniors.
                    </p>
                  </div>
                  {/* Card 3: Open 7 days */}
                  <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      {/* 24/7 service icon placeholder */}
                      <span className="inline-flex h-[100px] w-[100px] rounded-full bg-[#4AB27F1A] items-center justify-center">
                        <span className="mt-8">
                          <img src="/images/landing/24x7.png" alt="Open 7 days" className="w-full h-full" />
                        </span>
                      </span>
                    </div>
                    <h3 className="font-bold text-[26px] mb-2 mt-8 text-[#303030] ">Open 7 days</h3>
                    <p className="text-base font-normal  text-[#000000]">
                      Until 11:00 PM, including weekends and<br /> Holidays
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <WhyChooseSection
            title="Why Calgary Trusts"
            h2_color_1=" text-[#050505] "
            para="We're here when other clinics are closed and when you need care the most."
            para_color=" text-[#000000] "
            subtitle="Now Medical Clinic"
            items={whyChooseItems}
            image="/images/landing/why-calgary-trusts.png"
            both_btn="flex pt-4"
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Walk In Now"
            btn_2_link="/walk-in-clinic"
            btn_2_icon="/icons/uil-arrow-up-right-grn.svg"
          />

          {/* Our Promises Section */}
          <section className=" py-10 lg:py-8 bg-[#F1F9F4]">
            <div className="container">
              <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 lg:gap-16 items-center lg:px-[59px] ">
                <div>
                  <h2 className="text-3xl lg:text-5xl text-[#050505] font-bold mb-4">
                    Our <span className="text-[#299470]">Promises</span>
                  </h2>
                  <div className="space-y-4 text-[#000000] ">
                    <p>
                      When you or your loved ones need care, you shouldn't wait days for an appointment. <br />At Now Medical Clinic, our doctors are ready 7 days a week — weekends and holidays <br />included, offering fast, compassionate, professional care for all Calgary residents.<br /> No Appointment Needed
                      <br /> Because your health matters now — not later.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8 ">
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
                  </div>
                </div>

                <div className="order-first lg:order-last">
                  <img
                    src="/images/landing/our-promise.png"
                    alt="Our Promise"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Conditions Section */}
          <ConditionsSection
            title="Common Medical Conditions"
            subtitle="We Treat"
            para="At Now Medical Clinic, our doctors treat a wide range of medical conditions "
            para_2="so you can skip the ER and get real help today."
            conditions={conditions}
          />

          {/* Walk-in Video Promo Section */}
          <section className="py-10 lg:py-[54px]  ">
            <div className="container mx-auto max-w-[1170px] w-full flex flex-col items-center">
              {/* Headline with Green Text */}
              <h2 className="text-3xl lg:text-5xl font-bold text-[#303030] text-center mb-4">
                Walk in today until <span className="text-[#299470]">11:00 Pm, Open 7 days</span>
              </h2>
              {/* Subheadline */}
              <p className="text-[20px] text-center text-[#303030] mb-6">
                Register as a new patient today with our Male or Female Family Doctors ,Accepting New Patient
              </p>
              {/* Video Player (with custom poster) */}
              <div className="w-full aspect-video bg-[#299470] rounded-lg shadow overflow-hidden flex items-center justify-center relative">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/IpTEkX4lRWQ?rel=0&modestbranding=1&showinfo=0"
                  title="YouTube Shorts Video"
                  frameborder="0"
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
                </iframe>
              </div>
            </div>
          </section>

          {/* Family Doctors Accepting New Patients Section */}
          <section className="bg-[#F1F9F4] pt-10 lg:pt-[54px] pb-10">
            <div className="container mx-auto flex flex-col items-center">
              {/* Headline */}
              <h2 className="text-3xl lg:text-5xl font-bold text-[#303030] text-center mb-4">
                Family Doctors Accepting <span className="text-[#299470]">New Patients</span>
              </h2>
              {/* Subheadline */}
              <div className="text-center mb-4">
                <p className="font-bold text-lg text--[#000000">Looking for a family doctor in Calgary?</p>
              </div>
              <div className="text-center  mb-8 text-[#000000] ">
                Our caring Male and Female Doctors are accepting new patients in Calgary for long-term, comprehensive care. Get matched with <br /> a doctor who listens, understands, and builds lasting relationships with your family.
              </div>
              {/* Cards Row */}
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                {/* Card 1: Male & Female Doctors */}
                <div className="rounded-xl border border-[#83C1AC] bg-white shadow-sm flex flex-col items-center justify-between px-5 py-5 text-center hover:shadow-lg transition">
                  <span className="inline-flex h-14 w-14 items-center justify-center mb-6">
                    {/* icon: users */}
                    <img src="/images/landing/new-patients.svg" alt="" />
                  </span>
                  <h3 className="font-medium text-[#000000] text-2xl lg:text-3xl mb-[10px] ">Male & Female Doctors</h3>
                  <p className="text-[#303030] text-base ">Choose a doctor you're comfortable with</p>
                </div>
                {/* Card 2: Multiple Languages */}
                <div className="rounded-xl border border-[#83C1AC] bg-white shadow-sm flex flex-col items-center justify-between px-5 py-5 text-center hover:shadow-lg transition">
                  <span className="inline-flex h-14 w-14 items-center justify-center mb-4">
                    {/* icon: globe / languages */}
                    <img src="/images/landing/new-patients.svg" alt="" />
                  </span>
                  <h3 className="font-medium text-[#000000] text-2xl lg:text-3xl mb-[10px] ">Multiple languages</h3>
                  <p className="text-[#303030] text-base">English, Spanish, French, Arabic, Urdu, Hindi</p>
                </div>
                {/* Card 3: Comprehensive Care */}
                <div className="rounded-xl border border-[#83C1AC] bg-white shadow-sm flex flex-col items-center justify-between px-5 py-5 text-center hover:shadow-lg transition">
                  <span className="inline-flex h-14 w-14 items-center justify-center mb-4">
                    {/* icon: comprehensive care */}
                    <img src="/images/landing/new-patients.svg" alt="" />
                  </span>
                  <h3 className="font-medium text-[#000000] text-2xl lg:text-3xl mb-[10px] ">Comprehensive Care</h3>
                  <p className="text-[#303030] text-base">Chronic conditions preventive health & more</p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section
        <ValuesSection
          title="Our Values"
          values={values}
        /> */}


          {/* Registration Process Section */}
          {/* <RegistrationProcessSection /> */}

          {/* Meet Our Doctors */}
          <DoctorsSection
            title="Meet Our Doctors"
            description={<>Our diverse team of male and female family doctors provides care in multiple languages. Each doctor brings years of <br />experience in family medicine, chronic condition management, and preventive health</>}
            femaleDoctors={femaleDoctors}
            maleDoctors={maleDoctors}
            showCategories={false}
            useCarousel={true}
            customButtons={[
              {
                text: "Call: 587-391-8188",
                link: "tel:587-391-8188",
                icon: "/icons/btn_phone-outline-icon.svg",
                variant: "default",
                className: "bg-[#299470] hover:bg-[#2D7B6F] text-white text-lg"
              },
              {
                text: "Meet Our Doctors",
                link: "/meet-our-doctors",
                icon: "/icons/uil-arrow-up-right-grn.svg",
                variant: "outline",
                className: "border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg"
              }
            ]}
          />

          {/* Patient Experience */}
          <TestimonialsSection
            title="Patient Experience"
            subtitle={
              <>
                At Now Medical Clinic, our doctors treat a wide range of medical conditions <br />
                so you can skip the ER and get real help today.
              </>
            }
            bottomText="Watch why Calgary trusts Now Medical Clinic for fast, professional care."
            testimonials={testimonials}
            customButtonText="See What Patients Are Saying"
            customButtonLink="/reviews"
          />


          {/* Find Us Section */}
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

          {/* CTA Banner */}
          {/* <CTABannerSection
          title="Walk In Today We're Open Late Weekend and Holidays"
        /> */}
        </main>

        <Footer />
      </div>
    </>
  );
}
