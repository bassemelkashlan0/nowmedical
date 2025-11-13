import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { 
  DoctorCategoriesSection,
} from "@/sections";
import { StructuredData, generatePhysicianSchema, generateLocalBusinessSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Doctors | Experienced Family Physicians | Now Medical",
  description: "Meet our experienced family doctors at Now Medical in Calgary. Learn about our compassionate team dedicated to your health and wellness.",
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
    },
    {
      name: "Dr. Ebele",
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
        <section className="bg-[#F1F9F4] py-10 lg:pt-[62px] lg:pb-[61px] ">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl text-[#303030] font-bold mb-4">
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
