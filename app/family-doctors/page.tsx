import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  FamilyHealthSection,
  HowToRegisterSection,
  WhyChooseSection,
  ComprehensiveCareSection,
  DoctorsSection,
  TestimonialsSection,
  FindUsSection,
  CTABannerSection
} from "@/sections";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Baby, Activity, Shield, Stethoscope, Users } from "lucide-react";
import Link from "next/link";

export default function FamilyDoctorsPage() {
  const whyChooseItems = [
    {
      text: "Board-Certified family doctors trained in family medicine",
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      text: "Welcoming patients of all ages — from infants to seniors",
      icon: <Users className="w-5 h-5" />
    },
    {
      text: "Comprehensive family health services under one roof",
      icon: <Heart className="w-5 h-5" />
    },
    {
      text: "Same-day walk-in appointments available for urgent matters",
      icon: <Activity className="w-5 h-5" />
    }
  ];

  const comprehensiveCare = [
    {
      title: "Preventive & Routine Care",
      description: "Annual physical exams, health screenings, and preventive care",
      items: [
        "Annual physical examinations",
        "Chronic disease screening",
        "Travel medicine and vaccines"
      ],
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Women's Health",
      description: "Comprehensive care for women at all life stages",
      items: [
        "Pap smears and cervical cancer screening",
        "Birth control and family planning",
        "Pregnancy testing and prenatal care"
      ],
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Children's Health",
      description: "Pediatric care for infants, children, and teens",
      items: [
        "Well-child visits and development tracking",
        "Childhood immunizations",
        "School and sports physicals"
      ],
      icon: <Baby className="w-8 h-8" />
    },
    {
      title: "Men's Health",
      description: "Healthcare services tailored to men's needs",
      items: [
        "Prostate screening and PSA tests",
        "Testosterone management",
        "Sports medicine and fitness advice"
      ],
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: "Chronic Conditions",
      description: "Ongoing management of chronic illnesses",
      items: [
        "Diabetes management (Type 1 & Type 2)",
        "Blood pressure and cholesterol control",
        "Asthma and COPD care"
      ],
      icon: <Stethoscope className="w-8 h-8" />
    },
    {
      title: "Mental Health",
      description: "Support for mental health and wellness",
      items: [
        "Anxiety and depression management",
        "Stress management counseling",
        "Referrals to mental health specialists"
      ],
      icon: <Heart className="w-8 h-8" />
    }
  ];

  const femaleDoctors = [
    {
      name: "Dr. Madiha",
      avatar: "/images/female-doctor-illustration-avatar.jpg",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Vanessa",
      avatar: "/images/female-doctor-illustration-avatar-brown-hair.jpg",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Ebele",
      avatar: "/images/female-doctor-illustration-avatar.jpg",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    }
  ];

  const maleDoctors = [
    {
      name: "Dr. Michael",
      avatar: "/images/male-doctor-illustration-avatar.jpg",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Bedi",
      avatar: "/images/male-doctor-illustration-avatar.jpg",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    }
  ];

  const testimonials = [
    {
      name: "Sanny Cooper",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Really good experience at this walk-in clinic. The clinic runs smoothly, staff were friendly, and it's very convenient."
    },
    {
      name: "Bill Grabovac",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Fast service! Well managed medical clinic! The Dr was knowledgeable. Very Happy with the service we received. A+"
    },
    {
      name: "Jetta Lush",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Hours are wonderful, employees were warm and welcoming. Super fast efficient, doctor was warm and thorough."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#E8F5F3] to-white py-16">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
                  <span className="text-foreground">Family Doctors</span>
                  <br />
                  <span className="text-foreground">in Calgary</span>
                  <br />
                  <span className="text-[#299470]">Accepting New Patients Now</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-2 font-semibold">
                  Male and Female Family Doctors
                </p>
                <p className="text-base text-muted-foreground mb-8">
                  Looking for a family doctor in Calgary? Our experienced physicians are accepting new patients of all ages. From newborns to seniors, we provide comprehensive family healthcare.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white" asChild>
                    <Link href="/walk-in">Walk-In</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent"
                    asChild
                  >
                    <a href="tel:587-391-8188">
                      <Phone className="mr-2 h-5 w-5" />
                      587-391-8188
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent"
                    asChild
                  >
                    <a href="tel:587-387-7254">
                      <Phone className="mr-2 h-5 w-5" />
                      587-387-7254
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <img
                  src="/images/doctor-michael-patel.jpg"
                  alt="Family doctor"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Family Health Section */}
        <FamilyHealthSection />

        {/* Why Choose Us */}
        <WhyChooseSection
          title="Why Choose"
          subtitle="Now Medical Clinic"
          items={whyChooseItems}
          image="/modern-medical-clinic-exterior-building.jpg"
        />

        {/* Meet Our Doctors */}
        <DoctorsSection
          title="Meet Our Doctors"
          femaleDoctors={femaleDoctors}
          maleDoctors={maleDoctors}
          showCategories={true}
        />

        {/* Comprehensive Family Medicine */}
        <ComprehensiveCareSection
          title="Comprehensive"
          subtitle="Family Medicine"
          categories={comprehensiveCare}
        />

        {/* How to Register */}
        <HowToRegisterSection />

        {/* What Patients Say */}
        <TestimonialsSection
          title="What Patients Say"
          testimonials={testimonials}
        />

        {/* Find Us */}
        <FindUsSection />

        {/* CTA Banner */}
        <CTABannerSection
          title="Now Medical Clinic Calgary Male and Female Family Doctors Accepting New Patients."
          primaryButtonText="Call 587-391-8188"
          primaryButtonLink="tel:587-391-8188"
        />
      </main>

      <Footer />
    </div>
  );
}

