import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LiveStatusBanner } from "@/components/live-status-banner";
import {
  ServiceDetailSection,
  ConditionsSection,
  ComprehensiveCareSection,
  CTABannerSection 
} from "@/sections";
import { Heart, Stethoscope, Shield, Activity, Baby } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import phone_icon from "@/public/icons/btn_phone-outline-icon.svg";
import { StructuredData, generateLocalBusinessSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Services Calgary | Walk-In & Family Doctor Clinic",
  description: "Comprehensive medical services including family medicine, women's health, children's care, chronic disease management, and urgent care. Open 7 days until 11 PM.",
  keywords: ["medical services calgary", "family medicine", "walk-in services", "comprehensive healthcare", "urgent care services"],
  alternates: {
    canonical: "https://nowmedical.ca/services"
  }
};

export default function ServicesPage() {
  const services = [
    {
      title: "Family Medicine",
      description: "Looking for a family doctor in Calgary? Our experienced physicians are accepting new patients and provide comprehensive care for you and your family.",
      features: [
        "Annual physical examinations",
        "Chronic disease management",
        "Health counseling",
        "Referrals to specialists"
      ],
      image: "/images/our-services/family-medicine.png"
    },
    {
      title: "Women's Health",
      description: "We provide comprehensive women's healthcare services to support your health at every stage of life.",
      features: [
        "Annual exams",
        "Pap smears",
        "Contraception counseling",
        "Pregnancy testing",
        "Menopause management"
      ],
      image: "/images/our-services/women-health.png"
    },
    {
      title: "Children's & Family Care",
      description: "Expert pediatric care for children of all ages, from newborns to teenagers.",
      features: [
        "Well-child visits",
        "Childhood illnesses",
        "Growth monitoring",
        "School physicals",
        "Developmental assessments"
      ],
      image: "/images/our-services/children-family-care.png"
    }
  ];

  const conditions = [
    {
      category: "Chronic Conditions",
      icon: "/images/hospital-wait-times/chronic-conditions.svg",
      items: [
        "Diabetes (Type 1 & Type 2)",
        "High blood pressure (Hypertension)",
        "Asthma and COPD",
        "Arthritis and joint pain"
      ]
    },
    {
      category: "Walk-in & Urgent Care",
      icon: "/images/hospital-wait-times/walk-in-urgent-care.svg",
      items: [
        "Cold, cough, and flu symptoms",
        "Sore throat and tonsillitis",
        "Ear and eye infections",
        "Minor injuries and lacerations"
      ]
    },
    {
      category: "Women's Health",
      icon: "/images/hospital-wait-times/women-health.svg",
      items: [
        "Pregnancy testing and prenatal care",
        "Pap smears and screening",
        "Menopause management"
      ]
    },
    {
      category: "Children's Health",
      icon: "/images/hospital-wait-times/children-health.svg",
      items: [
        "Childhood immunizations",
        "Growth and development monitoring",
        "Cough, cold, and ear infections",
        "School and sports physicals"
      ]
    },
    {
      category: "Preventive Care",
      icon: "/images/hospital-wait-times/preventive-care-diagnositcs.svg",
      items: [
        "Annual physical exams",
        "Vaccinations and immunizations",
        "Health screenings",
        "Travel medicine"
      ]
    }
  ];

  const comprehensiveCare = [
    {
      title: "Preventive & Routine Care",
      description: "Stay healthy with regular check-ups and preventive care",
      items: [
        "Annual physical exams",
        "Chronic disease screening",
        "Travel medicine and vaccines"
      ],
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Women's Health",
      description: "Comprehensive healthcare for women at all stages",
      items: [
        "Pap smears and screening",
        "Pregnancy testing"
      ],
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Children's Health",
      description: "Expert pediatric care for your little ones",
      items: [
        "Well-child visits",
        "Immunizations",
        "Growth monitoring"
      ],
      icon: <Baby className="w-8 h-8" />
    },
    {
      title: "Men's Health",
      description: "Specialized care for men's unique health needs",
      items: [
        "Prostate screening",
        "Testosterone management",
        "Sports medicine"
      ],
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: "Chronic Conditions",
      description: "Ongoing management of chronic health conditions",
      items: [
        "Diabetes management",
        "Blood pressure control",
        "Asthma care"
      ],
      icon: <Stethoscope className="w-8 h-8" />
    }
  ];

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Comprehensive medical services: family medicine, walk-in care, urgent care, women's health, children's health, and chronic disease management."
  });

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      
      <div className="flex min-h-screen flex-col">
        <Header />
        <LiveStatusBanner />

      <main className="flex-1">
        {/* Hero Section with Banner */}
        <section className="bg-[#F1F9F4] to-white py-10 lg:py-[54px]">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl text-[#299470] font-bold tracking-tight mb-4 lg:mb-[21px]">
                  Our Medical
                  <br />
                  <span className="text-[#303030]">Services</span>
                </h1>
                <p className="text-base text-[#303030] mb-1">
                  Comprehensive healthcare services for you and your family. From <b>urgent care to preventive medicine,</b> our doctors provide <b>comprehensive, compassionate medical services</b> open <b>7 days a week until 11 PM,</b> including <b>weekends and holidays.</b>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-12">
                  <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white text-base font-bold" asChild>
                    <Link href="tel:587-391-8188" className="flex items-center gap-2">
                      <img src={phone_icon.src} alt="Phone" className="w-5 h-5 brightness-0 invert" />
                      Book Now
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#299470] border-1 text-[#299470] hover:bg-[#299470]/10 bg-transparent font-bold text-base"
                    asChild
                  >
                    <Link href="/" className="flex items-center gap-2">
                      Learn more
                      <img src="icons/uil-arrow-up-right-grn.svg" alt="Learn more" className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="flex justify-end items-center lg:ml-8">
                <div className="w-full aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    className="w-full h-full min-h-[300px] lg:min-h-[500px]"
                    src="https://www.youtube.com/embed/zeArmG81bAE?rel=0&modestbranding=1&showinfo=0"
                    title="YouTube Shorts Video"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <ServiceDetailSection services={services} />

        {/* Comprehensive Care */}
        <ComprehensiveCareSection
          title="Comprehensive"
          subtitle="Family Medicine"
          categories={comprehensiveCare}
        />

        {/* Conditions Grid */}
        <ConditionsSection
          title="Common Medical Conditions"
          subtitle="We Treat"
          conditions={conditions}
        />

        {/* Insurance Info */}
        <section className="py-10 lg:py-20 bg-[#F1F9F4]">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Card className="border-2 border-[#299470]/20 shadow-lg">
                <CardContent className="p-6 lg:p-8">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-[#303030]">Insurance & Payment</h2>
                  <div className="space-y-4 text-[#303030] text-sm lg:text-base">
                    <p>
                      Most services are covered by the Alberta Health Care Insurance Plan (AHCIP). Please bring your
                      valid Alberta Health Card to all appointments.
                    </p>
                    <p>
                      Some services, such as medical certificates, travel vaccinations, and cosmetic procedures, may
                      require out-of-pocket payment. We accept cash, debit, and all major credit cards.
                    </p>
                    <p className="text-sm">
                      For questions about coverage or fees, please contact our office at{" "}
                      <a href="tel:+15873918188" className="text-[#299470] hover:underline font-semibold">
                        587-391-8188
                      </a>
                      .
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CTABannerSection
          title="Need Medical Care? Walk in today or book an appointment for any of our services."
          primaryButtonText="Call 587-391-8188"
          primaryButtonLink="tel:587-391-8188"
        />
      </main>

        <Footer />
      </div>
    </>
  );
}
