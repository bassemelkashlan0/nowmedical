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
  RegistrationProcessSection
} from "@/sections";
import { Phone, Users, Clock, Activity, Stethoscope, Brain, Heart, Baby, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, generateAggregateRatingSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";

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
      text: "Real Family Doctors On-Site",
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      text: "Experienced team here for the long haul",
      icon: <Users className="w-5 h-5" />
    },
    {
      text: "Convenient Calgary location with free parking",
      icon: <Phone className="w-5 h-5" />
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
        "Arthritis and joint pain",
        "Thyroid disorders",
        "Chronic pain management",
        "Obesity and weight management",
        "Chronic kidney disease"
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
        "Allergies and rashes",
        "Skin infections and cellulitis",
        "Nausea, vomiting, and diarrhea",
        "Pink eye and styes"
      ]
    },
    {
      category: "Mental Health & Wellness",
      icon: <Brain className="w-8 h-8" />,
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
      icon: <Heart className="w-8 h-8" />,
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
      icon: <Heart className="w-8 h-8" />,
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
      icon: <Baby className="w-8 h-8" />,
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
      icon: <Shield className="w-8 h-8" />,
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
      avatar: "/images/landing/female-doctor-illustration-avatar.svg",
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

      {/* Live Status Banner */}
      <div className="bg-[#C8E6E0] border-b border-[#299470]/20">
        <div className="container py-3">
          <div className="flex items-center justify-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#299470] animate-pulse" />
              <span className="font-semibold text-[#1A5F56]">Walk-in Live Status</span>
            </div>
            <span className="font-bold text-[#1A5F56]">OPEN NOW</span>
            <div className="hidden sm:block h-4 w-px bg-[#299470]/30" />
            <span className="hidden sm:inline text-[#1A5F56]">Walk-in is OPEN NOW</span>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#E8F5F3] to-white py-16 lg:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl mb-6">
                  <span className="text-foreground">Walk-In & Family Doctor</span>
                  <br />
                  <span className="text-foreground">Clinic in Calgary</span>
                  <br />
                  <span className="text-[#299470]">Open 7 Days Until 11 PM</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  <span className="font-semibold">Including weekends and holidays*</span>
                </p>
                <p className="text-base text-muted-foreground mb-8">
                  Now Medical Clinic offers a spectrum of walk-in and family doctor services. Our experienced team is
                  here to provide quality healthcare when you need it most. No appointment necessary.
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
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative">
                  <img
                    src="/images/contact/doctor-patient-consultation.png"
                    alt="Medical team of three doctors"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Cards */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-[#E8F5F3] flex items-center justify-center">
                    <Phone className="h-8 w-8 text-[#299470]" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Walk-In Visits</h3>
                <p className="text-sm text-muted-foreground">
                  No appointment needed. Just walk in during our extended hours.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-[#E8F5F3] flex items-center justify-center">
                    <Users className="h-8 w-8 text-[#299470]" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Family Doctors</h3>
                <p className="text-sm text-muted-foreground">Accepting new patients for ongoing family medical care.</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-[#E8F5F3] flex items-center justify-center">
                    <Clock className="h-8 w-8 text-[#299470]" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Open 7 Days</h3>
                <p className="text-sm text-muted-foreground">
                  Open every day including weekends and holidays until 11 PM.
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
          image="/images/contact/modern-medical-clinic-exterior-building.png"
        />

        {/* Our Promises Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Our <span className="text-[#299470]">Promises</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At Now Medical Clinic, we are committed to providing exceptional healthcare services to the Calgary
                    community. Our promises to you include:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#299470] mt-1">•</span>
                      <span>Compassionate, patient-centered care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#299470] mt-1">•</span>
                      <span>Minimal wait times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#299470] mt-1">•</span>
                      <span>Modern, clean facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#299470] mt-1">•</span>
                      <span>Comprehensive medical services</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <img
                  src="/images/contact/modern-medical-clinic-interior-waiting-room.png"
                  alt="Now Medical Clinic interior"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <ValuesSection
          title="Our Values"
          values={values}
        />

        {/* Story Section */}
        <StorySection
          title="Our"
          subtitle="Story"
          content={storyContent}
          images={["/images/contact/modern-medical-clinic-exterior-building.png", "/images/contact/modern-medical-clinic-interior-waiting-room.png"]}
        />

        {/* Conditions Section */}
        <ConditionsSection
          title="Common Medical Conditions"
          subtitle="We Treat"
          conditions={conditions}
        />

        {/* Registration Process Section */}
        <RegistrationProcessSection />

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
          testimonials={testimonials}
        />

        {/* Find Us Section */}
        <FindUsSection />

        {/* CTA Banner */}
        <CTABannerSection
          title="Walk In Today We're Open Late Weekend and Holidays"
        />
      </main>

        <Footer />
      </div>
    </>
  );
}
