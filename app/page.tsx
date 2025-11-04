import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  HeroSection,
  WhyChooseSection,
  ConditionsSection,
  DoctorsSection,
  TestimonialsSection,
  FindUsSection,
  CTABannerSection,
  ValuesSection,
  StorySection,
  RegistrationProcessSection,
  LiveWaitTimesSection
} from "@/sections";
import { Phone, Users, Clock, Activity, Stethoscope, Brain, Heart, Baby, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, generateAggregateRatingSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";

export const metadata: Metadata = {
  title: "Walk-In Clinic Calgary | Open 7 Days Until 11 PM",
  description: "Calgary's trusted walk-in clinic. Real doctors, open daily until 11 PM. Walk-ins welcome — no appointment needed.",
  keywords: ["walk-in clinic calgary", "walk in clinic near me", "open late medical clinic", "family doctor calgary", "clinic near me"],
  alternates: {
    canonical: "https://nowmedical.ca"
  },
  openGraph: {
    title: "Walk-In Clinic Calgary | Open 7 Days Until 11 PM",
    description: "Calgary's trusted walk-in clinic. Real doctors, open daily until 11 PM. Walk-ins welcome — no appointment needed.",
    url: "https://nowmedical.ca",
    siteName: "Now Medical Clinic",
    images: [
      {
        url: "https://nowmedical.ca/images/contact/doctor-patient-consultation.png",
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
    title: "Walk-In Clinic Calgary | Open 7 Days Until 11 PM",
    description: "Calgary's trusted walk-in clinic. Real doctors, open daily until 11 PM. Walk-ins welcome — no appointment needed.",
    images: ["https://nowmedical.ca/images/contact/doctor-patient-consultation.png"]
  }
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
    }
  ];

  const maleDoctors = [
    {
      name: "Dr. Michael",
      avatar: "/images/landing/dr-michael.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
    }
  ];

  const testimonials = [
    {
      name: "Sanny Cooper",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Really good experience at this walk-in clinic. I was in and out in about 1.5 hours, and most of that wait was for the pharmacy inside (they're a little slow). The clinic itself runs smoothly, staff were friendly, and it's very convenient to have the pharmacy on-site."
    },
    {
      name: "Bill Grabovac",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Fast service! Well managed medical clinic! Got to see a medical Dr after a 5 minute wait at 7:50pm. There was a small fee as we did not have an Alberta Health Care Number. The Dr was knowledgeable with the medical condition we experienced. Very Happy with the service we received. A+"
    },
    {
      name: "Jetta Lush",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "This place was awesome!!! Hours are wonderful, worked so well for me and my specific situation (working single parent), employees were warm and welcoming. Super fast efficient, doctor was warm, welcoming and super thorough. Great experience overall."
    }
  ];

  const values = [
    {
      title: "Compassion",
      description: "We treat every patient with empathy and understanding",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Accessibility",
      description: "Open 7 days a week with extended hours for your convenience",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Communication",
      description: "Clear, honest communication about your health",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Diversity",
      description: "We serve patients from all backgrounds and cultures",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Excellence",
      description: "Committed to the highest standards of medical care",
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: "Community",
      description: "Proud to serve the Calgary community",
      icon: <Heart className="w-8 h-8" />
    }
  ];

  const storyContent = [
    "At Now Medical Clinic, we believe healthcare should be accessible when you need it most. Founded with a mission to provide quality medical care with extended hours, we've been serving the Calgary community for years.",
    "Our team of experienced physicians and healthcare professionals are dedicated to providing comprehensive family medicine and walk-in services. We understand that health concerns don't follow a 9-to-5 schedule, which is why we're open 7 days a week until 11 PM.",
    "We're located near Peter Lougheed Centre, making us a convenient alternative to long hospital wait times. Whether you need urgent care, a family doctor, or ongoing health management, we're here for you and your family."
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
          <section className="bg-[#F1F9F4] to-white py-16 lg:py-24">
            <div className="container">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl mb-6">
                    <span className="text-[#299470]">Walk-In & Family Doctor</span>
                    <br />
                    <span className="text-[#299470]">Clinic in Calgary</span>
                    <br />
                    <span className="text-foreground">Open 7 Days Until 11 PM</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-4">
                    <span className="font-semibold text-[36px] text-foreground">Including weekends and holidays*</span>
                  </p>
                  <p className="text-base text-foreground mb-4">
                    Now Medical Clinic offers a spectrum of walk-in and family doctor services. Our experienced team is
                    here to provide quality healthcare when you need it most. No appointment necessary.
                  </p>
                  <p className="text-lg font-semibold text-foreground mb-8">
                    Real doctors. Real care. Open late every day
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white text-lg" asChild>
                      <Link href="/walk-in-clinic-calgary">Register as a new patient<img src="/icons/uil-arrow-up-right.svg" alt="Register as a new patient" className="w-5 h-5" /></Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg"
                      asChild
                    >
                      <Link href="/services">Walk In Now <img src="/icons/uil-arrow-up-right-grn.svg" alt="Walk In Now" className="w-5 h-5" /></Link>
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative">
                    <img
                      src="/images/landing/home-banner.png"
                      alt="Medical team of three doctors"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Info Cards */}
          <section className="py-8">
            <div className="container mx-auto bg-[#F2FAF7] rounded-2xl px-4 md:px-12 py-10">
              <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#CDEDE3] justify-center items-stretch">
                {/* Card 1: Walk-In Visits */}
                <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    {/* Placeholder icon */}
                    <span className="inline-flex h-[100px] w-[100px] rounded-full bg-[#E8F5F3] items-center justify-center">
                      {/* Medical Bag/Phone Emoji placeholder */}
                      <span className="mt-16">
                        <img src="/images/landing/mobile.png" alt="Walk-In Visits" className="w-full h-full" />

                      </span>
                    </span>
                  </div>
                  <h3 className="font-bold text-[26px] mb-2 mt-8">Walk - In Visits</h3>
                  <p className="text-m text-foreground">
                    No appointment needed. See real doctors 7<br /> days a week even on holidays.
                  </p>
                </div>
                {/* Card 2: Family Doctors */}
                <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    {/* Stethoscope icon placeholder */}
                    <span className="inline-flex h-[100px] w-[100px] rounded-full bg-[#E8F5F3] items-center justify-center">
                      <span className="mt-16">
                        <img src="/images/landing/stethoscope.png" alt="Family Doctors" className="w-full h-full" />
                      </span>
                    </span>
                  </div>
                  <h3 className="font-bold text-[26px] mb-2 mt-8">Family Doctors</h3>
                  <p className="text-m text-foreground">
                    Ongoing care for your whole family from<br /> newborns to seniors.
                  </p>
                </div>
                {/* Card 3: Open 7 days */}
                <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    {/* 24/7 service icon placeholder */}
                    <span className="inline-flex h-[100px] w-[100px] rounded-full bg-[#E8F5F3] items-center justify-center">
                      <span className="mt-8">
                        <img src="/images/landing/24x7.png" alt="Open 7 days" className="w-full h-full" />
                      </span>
                    </span>
                  </div>
                  <h3 className="font-bold text-[26px] mb-2 mt-8">Open 7 days</h3>
                  <p className="text-m text-foreground">
                    Until 11:00 PM, including weekends and<br /> Holidays
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <WhyChooseSection
            title="Why Calgary Trusts"
            subtitle="Now Medical Clinic"
            items={whyChooseItems}
            image="/images/landing/why-calgary-trusts.png"
            btn_class="inline-flex"
          />

          {/* Our Promises Section */}
          <section className="py-16 bg-[#F1F9F4]">
            <div className="container">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                  <h2 className="text-5xl font-bold mb-4">
                    Our <span className="text-[#299470]">Promises</span>
                  </h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      When you or your loved ones need care, you shouldn’t wait days for an appointment. <br />At Now Medical Clinic, our doctors are ready 7 days a week — weekends and holidays <br />included, offering fast, compassionate, professional care for all Calgary residents.<br /> No Appointment Needed
                      <br /> Because your health matters now — not later.
                    </p>
                  </div>
                </div>

                <div>
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
            conditions={conditions}
          />

          {/* Walk-in Video Promo Section */}
          <section className="py-12">
            <div className="container mx-auto flex flex-col items-center">
              {/* Headline with Green Text */}
              <h2 className="text-5xl font-bold text-center mb-2">
                Walk in today until <span className="text-[#299470]">11:00 Pm, Open 7 days</span>
              </h2>
              {/* Subheadline */}
              <p className="text-[20px] text-center text-foreground mb-6">
                Register as a new patient today with our Male or Female Family Doctors ,Accepting New Patient
              </p>
              {/* Video Player (with custom poster) */}
              <div className="w-full aspect-video bg-[#299470] rounded-lg shadow overflow-hidden flex items-center justify-center mb-4 relative">
                <video
                  className="w-full h-full object-cover"
                  poster="/images/landing/video-thumb.png"
                  controls
                >
                  <source src="/videos/nowmedical-intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          {/* Family Doctors Accepting New Patients Section */}
          <section className="bg-[#F1F9F4] pt-16 pb-0">
            <div className="container mx-auto flex flex-col items-center">
              {/* Headline */}
              <h2 className="text-5xl font-bold text-center mb-4">
                Family Doctors Accepting <span className="text-[#299470]">New Patients</span>
              </h2>
              {/* Subheadline */}
              <div className="text-center mb-4">
                <p className="font-bold text-lg text-foreground">Looking for a family doctor in Calgary?</p>
              </div>
              <div className="text-center max-w-3xl mb-8 text-foreground">
                Our caring Male and Female Doctors are accepting new patients in Calgary for long-term, comprehensive care. Get matched with a doctor who listens, understands, and builds lasting relationships with your family.
              </div>
              {/* Cards Row */}
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1: Male & Female Doctors */}
                <div className="rounded-xl border border-[#83C1AC] bg-white shadow-sm flex flex-col items-center justify-between px-6 py-8 text-center hover:shadow-lg transition">
                  <span className="inline-flex h-14 w-14 items-center justify-center mb-4">
                    {/* icon: users */}
                    <img src="/images/landing/new-patients.svg" alt="" />
                  </span>
                  <h3 className="font-bold text-3xl mb-2">Male & Female Doctors</h3>
                  <p className="text-gray-600 text-[15px]">Choose a doctor you're comfortable with</p>
                </div>
                {/* Card 2: Multiple Languages */}
                <div className="rounded-xl border border-[#83C1AC] bg-white shadow-sm flex flex-col items-center justify-between px-6 py-8 text-center hover:shadow-lg transition">
                  <span className="inline-flex h-14 w-14 items-center justify-center mb-4">
                    {/* icon: globe / languages */}
                    <img src="/images/landing/new-patients.svg" alt="" />
                  </span>
                  <h3 className="font-bold text-3xl mb-2">Multiple languages</h3>
                  <p className="text-gray-600 text-[16px]">English, Spanish, French, Arabic, Urdu, Hindi</p>
                </div>
                {/* Card 3: Comprehensive Care */}
                <div className="rounded-xl border border-[#83C1AC] bg-white shadow-sm flex flex-col items-center justify-between px-6 py-8 text-center hover:shadow-lg transition">
                  <span className="inline-flex h-14 w-14 items-center justify-center mb-4">
                    {/* icon: comprehensive care */}
                    <img src="/images/landing/new-patients.svg" alt="" />
                  </span>
                  <h3 className="font-bold text-3xl mb-2">Comprehensive Care</h3>
                  <p className="text-gray-600 text-[16px]">Chronic conditions preventive health & more</p>
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
            femaleDoctors={femaleDoctors}
            maleDoctors={maleDoctors}
            showCategories={false}
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
            customButtonLink="/testimonials"
          />


          {/* Find Us Section */}
          <FindUsSection />

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
