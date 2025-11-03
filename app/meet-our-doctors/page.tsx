import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { 
  DoctorCategoriesSection,
  TestimonialsSection,
  FindUsSection,
  CTABannerSection 
} from "@/sections";
import { StructuredData, generatePhysicianSchema, generateLocalBusinessSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Doctors Calgary | Male & Female Family Physicians",
  description: "Meet our experienced family doctors in Calgary. Male and female physicians accepting new patients. Board-certified doctors providing compassionate care.",
  keywords: ["doctors calgary", "family physicians", "meet our doctors", "calgary physicians", "male female doctors"],
  alternates: {
    canonical: "https://nowmedical.ca/meet-our-doctors"
  }
};

export default function DoctorsPage() {
  const femaleDoctors = [
    {
      name: "Dr. Madiha",
      avatar: "/images/meet-doctor/dr-madiha.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Vanessa",
      avatar: "/images/meet-doctor/dr-ebele.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Madiha",
      avatar: "/images/meet-doctor/dr-madiha.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Ebele",
      avatar: "/images/meet-doctor/dr-ebele.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    }
  ];

  const maleDoctors = [
    {
      name: "Dr. Bedi",
      avatar: "/images/meet-doctor/dr-michael.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Michael",
      avatar: "/images/meet-doctor/dr-michael.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      language: "Spanish",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Madiha",
      avatar: "/images/meet-doctor/dr-michael.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Ebele",
      avatar: "/images/meet-doctor/dr-michael.png",
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

  const allDoctors = [...femaleDoctors, ...maleDoctors];
  const physicianSchemas = allDoctors.map(doctor => generatePhysicianSchema({
    name: doctor.name,
    specialty: "Family Medicine",
    medicalSpecialty: "Family Medicine",
    description: doctor.description,
    telephone: doctor.phone,
    worksFor: {
      name: "Now Medical Clinic",
      url: "https://nowmedical.ca"
    }
  }));

  const localBusinessSchema = generateLocalBusinessSchema(CLINIC_DATA);

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      {physicianSchemas.map((schema, index) => (
        <StructuredData key={index} data={schema} />
      ))}
      
      <div className="flex min-h-screen flex-col">
        <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#F1F9F4] py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold mb-4">
                Meet <span className="text-[#299470]">Our Doctors</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Doctors Categories */}
        <DoctorCategoriesSection
          femaleDoctors={femaleDoctors}
          maleDoctors={maleDoctors}
        />

      </main>

        <Footer />
      </div>
    </>
  );
}
