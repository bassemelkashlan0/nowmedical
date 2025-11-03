import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  LiveWaitTimesSection,
  ConditionsSection,
  TestimonialsSection,
  NearbyHospitalsSection,
  FindUsSection,
  CTABannerSection,
  WhyChooseSection
} from "@/sections";
import hero_img from "@/public/images/hospital-wait-times/wait-times-banner.png"
import whyUs_img from "@/public/images/hospital-wait-times/why-us.png"
import { Button } from "@/components/ui/button";
import { Check, Clock, Activity, Stethoscope, Brain, Heart, Baby, Shield } from "lucide-react";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { text } from "stream/consumers";
import PatientsVideoSection from "@/sections/global/atients-video";

export const metadata: Metadata = {
  title: "Calgary Hospital Wait Times | Skip the ER - Walk-In Clinic Open Late",
  description: "Avoid long Calgary hospital ER wait times. Walk in to Now Medical Clinic for non-emergency care. Open until 11 PM daily. Average wait under 30 minutes.",
  keywords: ["calgary hospital wait times", "er wait times", "skip emergency room", "non emergency clinic", "urgent care calgary"],
  alternates: {
    canonical: "https://nowmedical.ca/hospital-wait-times"
  }
};

export default function HospitalWaitTimesPage() {
  const skipWaitBenefits = [
    "Walk-in anytime during our 7:30 AM – 11:00 PM hours",
    "See a doctor in under 30 minutes on average",
    "No appointment needed",
    "Experienced doctors for most medical conditions",
    "Convenient location with free parking"
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

  const whyChoose = [
    {
      text: " Open 7 Days a Week — Until 11 PM"
    },
    {
      text: 'Walk-Ins Always Welcome — No Appointment Needed'
    },
    {
      text: 'Real Family Doctors (Male & Female)'
    },
    {
      text: '⭐ 4.8   Google Rating from Over 250 Reviews'
    },
    {
      text: ' Free Parking & Convenient NE Calgary Location'
    },
    {
      text: "Multilingual Team English, Arabic, Urdu, Hindi, Spanish & French"
    }
  ];

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Skip Calgary hospital ER wait times. Walk-in clinic open until 11 PM daily. Average wait under 30 minutes."
  });

  const faqSchema = generateFAQSchema([
    {
      question: "What are the typical Calgary hospital wait times?",
      answer: "Calgary hospital emergency room wait times can range from 2-8 hours depending on severity. Our walk-in clinic has an average wait time of under 30 minutes for non-emergency conditions."
    },
    {
      question: "Should I go to the hospital or a walk-in clinic?",
      answer: "Visit our walk-in clinic for non-life-threatening conditions like minor injuries, infections, flu symptoms, and minor burns. Go to the hospital ER only for serious emergencies like chest pain, severe bleeding, or difficulty breathing."
    },
    {
      question: "Can you treat the same conditions as a hospital?",
      answer: "We can treat most non-emergency conditions that would send you to an ER, including minor injuries, infections, illnesses, and chronic disease management. For life-threatening emergencies, please call 911."
    }
  ]);

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={faqSchema} />

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-[#F1F9F4] to-white pt-8 pb-14">
            <div className="container">
              <div className="grid gap-4 lg:grid-cols-[55%_44%] lg:gap-4 items-center  ">
                <div>
                  <h1 className=" font-bold tracking-tight lg:text-6xl mb-4">
                    Tired of Long Hospital Wait Times <span className="text-[#299470] " >Visit Now Medical Clinic </span>
                    Open 7 Days Until 11 PM
                  </h1>

                  <p className=" text-3xl text-[#303030] mb-4 mt-9 ">The Reality of Calgary’s Hospital Wait Times </p>

                  <p className="text-base  text-[#303030] mb-4">
                    If you’ve ever searched for <b>“Calgary hospital wait times”</b> , you already know how unpredictable emergency departments can be. <br />
                    Depending on the time of day, <b>ER waits in Calgary hospitals can stretch from 3 to 8 hours</b>  especially at <b>Foothills Medical Centre, Peter Lougheed Centre,</b> or <b>Rockyview General Hospital.</b>
                  </p>

                  <p className="text-base  text-[#303030] mb-4">
                    But most people waiting in the ER don’t actually need emergency care. <br />
                    They simply need to see a <b>real doctor fast</b> for infections, fever, minor injuries, or medication renewals.
                  </p>
                  <p className="text-base  text-[#303030] mb-4">
                    That’s exactly why <b>Now Medical Clinic </b> exists.
                  </p>


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

          {/* Skip the Wait */}
          <section className="py-20 bg-white">
            <div className="container">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                  <img
                    src="/images/modern-medical-clinic-reception-area-with-friendly.jpg"
                    alt="Now Medical Clinic modern reception area with friendly staff welcoming patients"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Skip the Wait <span className="text-[#299470]">Walk In Today</span>
                  </h2>
                  <div className="space-y-3">
                    {skipWaitBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#299470]/10 flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-[#299470]" />
                        </div>
                        <p className="text-muted-foreground">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white" asChild>
                      <a href="tel:587-391-8188">Call 587-391-8188</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hospital Wait Times Comparison */}
          <LiveWaitTimesSection
            title="Hospital Wait Times vs. Now Medical Clinic"
            currentWaitTime="< 30 min"
          />

          {/* Hours Section */}
          <section className="py-20 bg-white">
            <div className="container">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    <span className="text-[#299470]">Open Late</span>, Open Weekends, Open on Holidays
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      At Now Medical Clinic, we understand that health concerns don't follow a 9-to-5 schedule. That's why we're open when you need us most:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-[#299470] flex-shrink-0 mt-0.5" />
                        <span><strong>7 days a week</strong> — including weekends</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-[#299470] flex-shrink-0 mt-0.5" />
                        <span><strong>Open until 11:00 PM</strong> every day</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-[#299470] flex-shrink-0 mt-0.5" />
                        <span><strong>Open on holidays</strong> — no closures</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <img
                    src="/images/modern-medical-clinic-exterior-building.jpg"
                    alt="Now Medical Clinic building exterior located in northeast Calgary"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Conditions We Treat */}
          <ConditionsSection
            title="Common Medical Conditions"
            subtitle="We Treat"
            para="At Now Medical Clinic, our doctors treat a wide range of medical conditions"
            para_2=" so you can skip the ER and get real help today."
            conditions={conditions}
            bg_color="bg-[#F1F9F4]"
          />

          {/* Why Calgarians Choose Us */}

          <WhyChooseSection
            title="Why Calgarians Choose"
            subtitle="Now Medical Clinic"
            image={whyUs_img.src}
            items={whyChoose}

          />

          {/* What Patients Say */}
          <PatientsVideoSection
            bg_color="bg-[#EEF8F2]"
            heading_first="What"
            heading_mid="Patients"
            heading_last="Say"
            description=" See what Calgary patients are saying about their experience with Now Medical Clinic."
            Items={videoTestimonials}
            // btn_show=" block"
            btn_text=" See What Patients Are Saying"
          />

          {/* Nearby Hospitals */}
          <NearbyHospitalsSection
            title="Nearby"
            subtitle="Hospitals"
            image="/modern-medical-clinic-exterior-building.jpg"
          />

          {/* Find Us */}
          <FindUsSection />

          {/* CTA Banner */}
          <CTABannerSection
            title="Hospital Wait Times Calgary | Skip the Line | Walk-in Clinic Open Until 11 PM"
            primaryButtonText="Call 587-391-8188"
            primaryButtonLink="tel:587-391-8188"
          />
        </main>

        <Footer />
      </div>
    </>
  );
}

