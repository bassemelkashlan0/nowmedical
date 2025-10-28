import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  LiveWaitTimesSection,
  ConditionsSection,
  TestimonialsSection,
  NearbyHospitalsSection,
  FindUsSection,
  CTABannerSection
} from "@/sections";
import { Button } from "@/components/ui/button";
import { Check, Clock, Activity, Stethoscope, Brain, Heart, Baby, Shield } from "lucide-react";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";

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
      icon: <Activity className="w-8 h-8" />,
      items: [
        "Diabetes (Type 1 & Type 2)",
        "High blood pressure (Hypertension)",
        "Asthma and COPD",
        "Arthritis and joint pain",
        "Thyroid disorders",
        "Chronic pain management"
      ]
    },
    {
      category: "Walk-in & Urgent Care",
      icon: <Stethoscope className="w-8 h-8" />,
      items: [
        "Cold, cough, and flu symptoms",
        "Sore throat and tonsillitis",
        "Ear and eye infections",
        "Urinary tract infections (UTIs)",
        "Minor injuries and lacerations",
        "Sprains and strains",
        "Allergies and rashes"
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
        "Erectile dysfunction",
        "Low testosterone",
        "Prostate exams",
        "Weight management"
      ]
    },
    {
      category: "Women's Health",
      icon: <Heart className="w-8 h-8" />,
      items: [
        "Pregnancy testing",
        "Birth control",
        "Pap smears",
        "Menopause management"
      ]
    },
    {
      category: "Children's Health",
      icon: <Baby className="w-8 h-8" />,
      items: [
        "Childhood immunizations",
        "Growth monitoring",
        "Ear infections",
        "Sports physicals"
      ]
    },
    {
      category: "Preventive Care & Diagnostics",
      icon: <Shield className="w-8 h-8" />,
      items: [
        "Annual physical exams",
        "Chronic disease screening",
        "Travel medicine and vaccines"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sanny Cooper",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Really good experience at this walk-in clinic. I was in and out in about 1.5 hours."
    },
    {
      name: "Bill Grabovac",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Fast service! Got to see a medical Dr after a 5 minute wait at 7:50pm. A+"
    },
    {
      name: "Jetta Lush",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Hours are wonderful. Super fast efficient, doctor was warm and thorough."
    }
  ];

  const whyChoose = [
    "Open 7 days a week — including weekends and holidays",
    "See a real doctor in < 30 minutes on average",
    "Walk-in or book ahead — your choice",
    "No hidden fees or surprise charges",
    "On-site pharmacy for added convenience",
    "Free parking and accessible facilities"
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
        <section className="bg-gradient-to-b from-[#E8F5F3] to-white py-16">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
                  <span className="text-foreground">Tired of Long Hospital Wait Times?</span>
                  <br />
                  <span className="text-foreground">Visit</span>{" "}
                  <span className="text-[#299470]">Now Medical Clinic</span>
                  <br />
                  <span className="text-[#299470]">Open 7 Days Until 11 PM</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  <strong>The Reality of Calgary's Hospital Wait Times:</strong> Hospital ERs can have wait times of 2-8+ hours for non-emergency conditions. Skip the wait — visit our walk-in clinic and see a doctor in under 30 minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white" asChild>
                    <Link href="/walk-in-clinic-calgary">Walk In Today</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent"
                    asChild
                  >
                    <a href="tel:587-391-8188">Call 587-391-8188</a>
                  </Button>
                </div>
              </div>

              <div>
                <img
                  src="/images/doctor-sarah-chen.jpg"
                  alt="Calgary family doctor in consultation room providing quality medical care"
                  className="rounded-lg shadow-lg w-full"
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
          conditions={conditions}
        />

        {/* Why Calgarians Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Calgarians Choose <span className="text-[#299470]">Now Medical Clinic</span>
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {whyChoose.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#299470]/10 flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-[#299470]" />
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Patients Say */}
        <TestimonialsSection
          title="What Patients Say"
          testimonials={testimonials}
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

