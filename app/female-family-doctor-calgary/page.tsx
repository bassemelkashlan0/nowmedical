import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DoctorsSection, TestimonialsSection, FindUsSection, CTABannerSection } from "@/sections";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Heart, Baby, Shield, Check } from "lucide-react";
import Link from "next/link";
import { StructuredData, generatePhysicianSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Female Family Doctor in Calgary | Accepting New Patients",
  description: "See a female family doctor in Calgary today. Accepting new patients, open 7 days until 11 PM. Walk-ins welcome.",
  keywords: ["female family doctor calgary", "lady doctor accepting new patients calgary", "women's health doctor", "female physician calgary"],
  alternates: {
    canonical: "https://nowmedical.ca/female-family-doctor-calgary"
  }
};

export default function FemaleFamilyDoctorPage() {
  const womensHealthServices = [
    { icon: <Heart className="w-6 h-6" />, title: "Well-Woman Exams", description: "Annual check-ups and preventive care" },
    { icon: <Baby className="w-6 h-6" />, title: "Pregnancy Care", description: "Prenatal care and pregnancy testing" },
    { icon: <Shield className="w-6 h-6" />, title: "Birth Control", description: "Contraception counseling and prescriptions" },
    { icon: <Heart className="w-6 h-6" />, title: "Pap Smears", description: "Cervical cancer screening" },
    { icon: <Baby className="w-6 h-6" />, title: "Menopause Care", description: "Hormone therapy and symptom management" },
    { icon: <Shield className="w-6 h-6" />, title: "UTI Treatment", description: "Urinary tract infection care" }
  ];

  const femaleDoctors = [
    {
      name: "Dr. Madiha",
      avatar: "/images/female-doctor-illustration-avatar.jpg",
      specialty: "Family Medicine",
      description: "Experienced in women's health, family practice, and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Vanessa",
      avatar: "/images/female-doctor-illustration-avatar-brown-hair.jpg",
      specialty: "Family Medicine",
      description: "Specializes in women's health and comprehensive family medicine.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Ebele",
      avatar: "/images/female-doctor-illustration-avatar.jpg",
      specialty: "Family Medicine",
      description: "Dedicated to providing compassionate women's healthcare.",
      phone: "587-391-8188"
    }
  ];

  const maleDoctors: any[] = [];

  const testimonials = [
    {
      name: "Sarah M.",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Dr. Madiha is amazing! She really takes the time to listen and makes me feel comfortable discussing sensitive health topics."
    },
    {
      name: "Jennifer L.",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "So happy I found a female doctor accepting new patients. The whole team is professional and caring."
    }
  ];

  const faqSchema = generateFAQSchema([
    {
      question: "Do you have female family doctors accepting new patients?",
      answer: "Yes! We have multiple female family doctors currently accepting new patients. Call 587-391-8188 to register."
    },
    {
      question: "Can I request to see a female doctor for walk-in visits?",
      answer: "Yes, while we cannot guarantee which doctor you'll see for walk-ins, we'll do our best to accommodate your preference."
    },
    {
      question: "What women's health services do you offer?",
      answer: "We offer comprehensive women's health services including Pap smears, birth control, pregnancy care, menopause management, and more."
    }
  ]);

  const physicianSchemas = femaleDoctors.map(doctor => generatePhysicianSchema({
    name: doctor.name,
    specialty: doctor.specialty,
    medicalSpecialty: "Family Medicine",
    gender: "Female",
    description: doctor.description,
    telephone: doctor.phone,
    worksFor: {
      name: "Now Medical Clinic",
      url: "https://nowmedical.ca"
    }
  }));

  return (
    <>
      <StructuredData data={faqSchema} />
      {physicianSchemas.map((schema, index) => (
        <StructuredData key={index} data={schema} />
      ))}
      
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-[#E8F5F3] to-white py-16">
            <div className="container">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Heart className="h-4 w-4" />
                    Female Physicians
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
                    <span className="text-foreground">Female Family Doctor</span>
                    <br />
                    <span className="text-foreground">in Calgary</span>
                    <br />
                    <span className="text-[#299470]">Accepting New Patients</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-4">
                    <strong>Looking for a female family doctor?</strong> Our experienced female physicians are accepting new patients.
                  </p>
                  <p className="text-base text-muted-foreground mb-8">
                    Comprehensive women's health care including Pap smears, birth control, pregnancy care, and more. Open 7 days until 11 PM.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white" asChild>
                      <a href="tel:587-391-8188">
                        <Phone className="mr-2 h-5 w-5" />
                        Call to Register
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#299470] text-[#299470] hover:bg-[#299470]/10"
                      asChild
                    >
                      <Link href="/walk-in-clinic-calgary">Walk-In Services</Link>
                    </Button>
                  </div>
                </div>

                <div>
                  <img
                    src="/images/doctor-michael-patel.jpg"
                    alt="Female family physician providing comprehensive medical care to Calgary families"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Women's Health Services */}
          <section className="py-16 bg-white">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Comprehensive <span className="text-[#299470]">Women's Health Services</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our female doctors provide a full range of healthcare services for women of all ages.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {womensHealthServices.map((service, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full bg-[#E8F5F3] flex items-center justify-center text-[#299470] flex-shrink-0">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Our Female Doctors */}
          <section className="py-16 bg-gray-50">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Why Choose Our Female Family Doctors?</h2>
                </div>

                <div className="grid gap-4">
                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#299470] flex-shrink-0" />
                      <span className="font-medium">Accepting new patients for ongoing family care</span>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#299470] flex-shrink-0" />
                      <span className="font-medium">Comprehensive women's health services</span>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#299470] flex-shrink-0" />
                      <span className="font-medium">Extended hours: Open until 11 PM, 7 days a week</span>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#299470] flex-shrink-0" />
                      <span className="font-medium">Comfortable, private consultations</span>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#299470] flex-shrink-0" />
                      <span className="font-medium">Care for all ages from teens to seniors</span>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Meet Our Doctors */}
          <DoctorsSection
            title="Meet Our Female Family Doctors"
            femaleDoctors={femaleDoctors}
            maleDoctors={maleDoctors}
            showCategories={false}
          />

          {/* Testimonials */}
          <TestimonialsSection
            title="What Patients Say"
            testimonials={testimonials}
          />

          {/* Find Us */}
          <FindUsSection />

          {/* CTA */}
          <CTABannerSection
            title="Register with a Female Family Doctor Today. Call 587-391-8188"
            primaryButtonText="Call to Register"
            primaryButtonLink="tel:587-391-8188"
          />
        </main>

        <Footer />
      </div>
    </>
  );
}

