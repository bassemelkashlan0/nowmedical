import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  DoctorCategoriesSection,
  WalkInHeroSection,
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
      name: "Dr. Madiha Badshah",
      avatar: "/images/landing/dr-madiha.png",
      specialty: "Family Doctors",
      description: "Accepting New Patients",
    },
    // {
    //   name: "Dr. Vanessa Marezana",
    //   avatar: "/images/landing/dr-ebele.png",
    //   specialty: "Family Doctors",
    //   description: " ",
    // },
    {
      name: "Dr. Ebele Madubuko",
      avatar: "/images/landing/dr-ebele.png",
      specialty: "Family Doctors",
      description: "Accepting New Patients",
    }
    // {
    //   name: "Dr. Prabhjot Bedi",
    //   avatar: "/images/landing/dr-madiha.png",
    //   specialty: "Family Doctors",
    //   description: "Accepting New Patients",
    // }
  ];

  const maleDoctors = [
    {
      name: "Dr. Michael Ghisel",
      avatar: "/images/landing/dr-michael.png",
      specialty: "Family Doctors",
      description: "Accepting New Patients",
      language: "Spanish",
    },
    {
      name: "Dr. Wael Saleh",
      avatar: "/images/landing/dr-michael.png",
      specialty: "Family Doctors",
      description: "Accepting New Patients",
    },
    {
      name: "Dr. Rai Khan",
      avatar: "/images/landing/dr-michael.png",
      specialty: "Family Doctors",
      description: "Accepting New Patients",
    },
    // {
    //   name: "Dr. Tive Egbonoje",
    //   avatar: "/images/landing/dr-michael.png",
    //   specialty: "Family Doctors",
    //   description: "Accepting New Patients",
    // },
    {
      name: "Dr. Olasunkanmi Akinremi",
      avatar: "/images/landing/dr-michael.png",
      specialty: "Family Doctors",
      description: "Accepting New Patients",
    },

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
          <WalkInHeroSection
            title={
              <>
                <span className="text-[#303030]">Meet </span>
                <span className="text-[#299470]">Our Doctors</span>
              </>
            }
            subtitle={<><span className="text-[#000000] font-bold">Female and Male Family Doctors</span><br/><span className="text-[#299470] font-bold ">ACCEPTING NEW PATIENTS</span><br/>Searching for a  family doctor?<br/> </>}
            description={<><b>Now Medical Clinic</b> has both <b>male and female</b> doctors currently Accepting New Patients in Calgary. We’re available <b>seven days a week, open late until 11 PM</b> to support your ongoing health needs.</>}
            additionalText=""
            buttons={[
              {
                text: "Walk In Now",
                link: "/walk-in-clinic",
                icon: "/icons/solar_walking-outline.svg",
                variant: "default",
              },
              {
                text: "Register as a New Patient",
                link: "tel:587-391-8188",
                icon: "/icons/uil-arrow-up-right-grn.svg",
                variant: "outline",
              },
              {
                text: "Call: 587-391-8188",
                link: "tel:587-391-8188",
                icon: "/icons/solar_phone-outline.svg",
                variant: "outline",
              }
            ]}
            image="/images/family-doctor/family-doctor-banner.png"
            imageAlt="Experienced family doctor accepting new patients in Calgary providing comprehensive care"
            bgColor="bg-[#F1F9F4]"
            className="py-10 lg:py-[54px]"
          />

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
