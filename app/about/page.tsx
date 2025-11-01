import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LiveStatusBanner } from "@/components/live-status-banner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  MissionSection,
  DifferenceSection,
  CommitmentSection,
  ValuesSection,
  StorySection,
  DoctorsSection,
  TestimonialsSection,
  FindUsSection,
  CTABannerSection
} from "@/sections";
import { Heart, Clock, Users, Activity } from "lucide-react";
import { StructuredData, generateOrganizationSchema, generateLocalBusinessSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Now Medical Clinic Calgary | Our Story & Mission",
  description: "Learn about Now Medical Clinic Calgary. Our experienced doctors provide compassionate family healthcare 7 days a week until 11 PM. Serving Calgary since 2015.",
  keywords: ["about now medical clinic", "calgary walk-in clinic", "our story", "family doctors calgary", "medical clinic mission"],
  alternates: {
    canonical: "https://nowmedical.ca/about"
  }
};

export default function AboutPage() {
  const values = [
    {
      title: "Compassion",
      description: "We treat every patient with empathy, respect, and understanding",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Accessibility",
      description: "Open 7 days a week with extended hours for your convenience",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Communication",
      description: "Clear, honest communication about your health and treatment options",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Diversity",
      description: "We proudly serve patients from all backgrounds and cultures",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Excellence",
      description: "Committed to the highest standards of medical care and service",
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: "Community",
      description: "Proud to be part of the Calgary community we serve",
      icon: <Heart className="w-8 h-8" />
    }
  ];

  const storyContent = [
    "At Now Medical Clinic, we believe healthcare should be accessible when you need it most. Founded with a mission to provide quality medical care with extended hours, we've been serving the Calgary community with dedication and compassion.",
    "Our team of experienced physicians and healthcare professionals are dedicated to providing comprehensive family medicine and walk-in services. We understand that health concerns don't follow a 9-to-5 schedule, which is why we're open 7 days a week until 11 PM.",
    "We're conveniently located near Peter Lougheed Centre, making us an accessible alternative to long hospital wait times. Whether you need urgent care, a family doctor, or ongoing health management, we're here for you and your family every day of the year."
  ];

  const doctors = [
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
      text: "Really good experience at this walk-in clinic. The clinic runs smoothly, staff were friendly, and it's very convenient to have the pharmacy on-site."
    },
    {
      name: "Bill Grabovac",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Fast service! Well managed medical clinic! The Dr was knowledgeable with the medical condition we experienced. Very Happy with the service we received. A+"
    },
    {
      name: "Jetta Lush",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "This place was awesome!!! Hours are wonderful, employees were warm and welcoming. Super fast efficient, doctor was warm, welcoming and super thorough."
    }
  ];

  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema(CLINIC_DATA);

  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={localBusinessSchema} />
      
      <div className="flex min-h-screen flex-col">
        <Header />
        <LiveStatusBanner />
 
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#E8F5F3] to-white py-16">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
                  Real Doctors. Real Care.
                  <br />
                  <span className="text-[#299470]">Open Late Every Day</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                At <b>Now Medical Clinic</b>, we believe that quality healthcare should be <b>accessible, compassionate, and convenient</b> — not stressful or delayed.
                </p>
                <p className="text-base text-muted-foreground mb-8">
                We’re proud to be the only clinic in Calgary that <b>opens 7 days a week — until 11 PM</b>, including <b>weekends and holidays</b>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white" asChild>
                    <a href="tel:587-391-8188">Call 587-391-8188</a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent"
                    asChild
                  >
                    <Link href="/walk-in-clinic-calgary">Walk In Anytime No Appointment Needed</Link>
                  </Button>
                </div>
              </div>

              <div>
                <img
                  src="/images/about-us/about-banner.png"
                  alt="Now Medical Clinic Calgary doctor"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <StorySection
          title="Our"
          subtitle="Story"
          content={storyContent}
          images={["/images/about-us/our-story.png", "/images/contact/modern-medical-clinic-interior-waiting-room.png"]}
        />

        {/* Our Mission */}
        <MissionSection />

        {/* Our Values */}
        <ValuesSection
          title="Our Values"
          values={values}
        />

        {/* Meet Our Doctors */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Meet <span className="text-[#299470]">Our Doctors</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our team of experienced, board-certified physicians is dedicated to providing exceptional care to every patient.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {doctors.map((doctor, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <div className="mb-4">
                    <img
                      src={doctor.avatar}
                      alt={doctor.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{doctor.name}</h3>
                  <p className="text-sm text-[#299470] mb-2">{doctor.specialty}</p>
                  <p className="text-sm text-muted-foreground mb-3">{doctor.description}</p>
                  <a
                    href={`tel:${doctor.phone}`}
                    className="text-sm text-[#299470] hover:underline"
                  >
                    {doctor.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <DifferenceSection />

        {/* Our Commitment to Calgary */}
        <CommitmentSection />

        {/* What Patients Say */}
        <TestimonialsSection
          title="What Patients Say"
          testimonials={testimonials}
        />

        {/* Find Us */}
        <FindUsSection />

        {/* CTA Banner */}
        <CTABannerSection
          title="Now Medical Clinic — Real Doctors. Real Care. Open 7 Days Until 11 PM"
          primaryButtonText="Call 587-391-8188"
          primaryButtonLink="tel:587-391-8188"
        />
      </main>

        <Footer />
      </div>
    </>
  );
}

