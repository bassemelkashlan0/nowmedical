import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  ServiceDetailSection,
  ConditionsSection,
  ComprehensiveCareSection,
  CTABannerSection 
} from "@/sections";
import { Heart, Stethoscope, Shield, Activity, Baby, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesPage() {
  const services = [
    {
      title: "Family Medicine",
      description: "Looking for a family doctor in Calgary? Our experienced physicians are accepting new patients and provide comprehensive care for you and your family.",
      features: [
        "Annual physical examinations",
        "Chronic disease management",
        "Prescription refills",
        "Health counseling",
        "Referrals to specialists"
      ],
      image: "/doctor-patient-consultation.png"
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
      image: "/modern-medical-clinic-interior-waiting-room.jpg"
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
      image: "/modern-medical-clinic-reception-area-with-friendly.jpg"
    }
  ];

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
      category: "Women's Health",
      icon: <Users className="w-8 h-8" />,
      items: [
        "Pregnancy testing and prenatal care",
        "Birth control and family planning",
        "Pap smears and screening",
        "Menopause management"
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
    },
    {
      category: "Preventive Care",
      icon: <Shield className="w-8 h-8" />,
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
        "Birth control counseling",
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

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#E8F5F3] to-white py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Our Medical <span className="text-[#299470]">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive healthcare services for you and your family. From urgent care to preventive medicine,
                we're here to help.
              </p>
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
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Card className="border-2 border-[#299470]/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Insurance & Payment</h2>
                  <div className="space-y-4 text-muted-foreground">
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
                      <a href="tel:+15873918188" className="text-[#299470] hover:underline">
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
  );
}
