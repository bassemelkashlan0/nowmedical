import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  FamilyHealthSection,
  HowToRegisterSection,
  WhyChooseSection,
  DoctorsSection,
  FindUsSection,
  WalkInHeroSection
} from "@/sections";
import { Heart, Baby, Activity, Shield, Stethoscope, Users } from "lucide-react";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import Family_img from "@/public/images/family-doctor/why-us.png";
import ValuesSection from "@/sections/home/values-section";
import PatientsVideoSection from "@/sections/global/atients-video";
import BottomCallAction from "@/components/ui/bottom-call-acction";

export const metadata: Metadata = {
  title: "Family Doctors Accepting New Patients Calgary | Now Medical    ",
  description: "Looking for a family doctor in Calgary? Now Medical is accepting new patients. Book your appointment today for comprehensive family care.",
  keywords: ["family doctors accepting new patients calgary", "new family doctor calgary", "accepting new patients", "register family doctor calgary"],
};

export default function FamilyDoctorsPage() {
  const femaleDoctors = [
    {
      name: "Dr. Madiha",
      avatar: "/images/family-doctor/dr-madiha.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188",
      specialtyClassName: "text-base font-normal",
      nameClassName: "text-2xl",
      descriptionClassName: "text-base text-foreground"
    },
    {
      name: "Dr. Vanessa",
      avatar: "/images/family-doctor/dr-ebele.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188",
      specialtyClassName: "text-base font-normal",
      nameClassName: "text-2xl",
      descriptionClassName: "text-base text-foreground"
    },
    {
      name: "Dr. Ebele",
      avatar: "/images/family-doctor/dr-ebele.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188",
      specialtyClassName: "text-base font-normal",
      nameClassName: "text-2xl",
      descriptionClassName: "text-base text-foreground"
    }
  ];

  const maleDoctors = [
    {
      name: "Dr. Michael",
      avatar: "/images/family-doctor/dr-michael.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188",
      specialtyClassName: "text-base font-normal",
      nameClassName: "text-2xl",
      descriptionClassName: "text-base text-foreground"
    },
    {
      name: "Dr. Bedi",
      avatar: "/images/family-doctor/dr-michael.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188",
      specialtyClassName: "text-base font-normal",
      nameClassName: "text-2xl",
      descriptionClassName: "text-base text-foreground"
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

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Calgary family doctors accepting new patients. Comprehensive family healthcare for all ages. Book today."
  });

  const faqSchema = generateFAQSchema([
    {
      question: "Are you accepting new family doctor patients?",
      answer: "Yes, our family doctors are currently accepting new patients of all ages. Call 587-391-8188 to register with a family doctor."
    },
    {
      question: "Can I choose a male or female family doctor?",
      answer: "Yes, we have both male and female family doctors available. You can request your preference when registering."
    },
    {
      question: "What services do family doctors provide?",
      answer: "Our family doctors provide comprehensive healthcare including annual exams, chronic disease management, preventive care, women's health, men's health, children's health, and more."
    },
    {
      question: "How do I register with a family doctor?",
      answer: "Call us at 587-391-8188 or walk in during our hours to register. Bring your Alberta Health Card and photo ID."
    }
  ]);
  const FamilyMadicine = [
    {
      text: "Accepting New Patients",
    },
    {
      text: "Open 7 Days a Week — Evenings, Weekends & Holidays",
    },
    {
      text: "Same-Day Appointments & Walk-Ins Welcome",
    },
    {
      text: "Doctors Who Speak Multiple Languages",
    },
    {
      text: "Convenient Calgary Location with Free Parking",
    },
    {
      text: "Short Waits, Real Doctors, Personalized Care",
    }
  ]
  const values = [
    {
      title: "Preventive & Routine Care",
      description: ["Annual physical exams", "Blood pressure and diabetes management", "Health screening and lab follow-ups"],
      image: "/images/family-doctor/preventive-routine-care.svg"
    },
    {
      title: "Women’s Health",
      description: ["Pap tests, birth control, menopause support", "Prenatal and postnatal care"],
      image: "/images/family-doctor/women-health.svg"
    },
    {
      title: "Children’s Health",
      description: ["Immunizations, check-ups, growth monitoring", "Asthma and allergy management"],
      image: "/images/family-doctor/children-health.svg"
    },
    {
      title: "Men’s Health",
      description: ["Prostate health, cholesterol, heart checks", "Stress and sleep issues"],
      image: "/images/family-doctor/men-health.svg"
    },
    {
      title: "Chronic Conditions",
      description: ["Diabetes, hypertension, asthma, thyroid issues", "Regular medication renewals and monitoring"],
      image: "/images/family-doctor/chronic-conditions.svg"
    }
  ];
  const videoTestimonials = [
    {
      name: "Bessie Cooper",
      image: "/images/about-us/bessie-cooper.png",
      quote: "Finally a clinic open late that actually cares about patients."
    },
    {
      name: "Jenny Wilson",
      image: "/images/about-us/jenny-wilson.png",
      quote: "Friendly staff, short wait times, and doctors who listen."
    },
    {
      name: "Cameron Williamson",
      image: "/images/about-us/cameron-williamson.png",
      quote: "This clinic makes it easy for families — especially on weekends and holidays."
    }
  ];
  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={faqSchema} />

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <WalkInHeroSection
            title={
              <>
                <span className="text-foreground">Family Doctors</span>
                <br />
                <span className="text-[#299470]">in Calgary Accepting New Patients Now</span>
              </>
            }
            subtitle="Male and Female Family Doctors"
            description={<>Looking for a family doctor you can trust?<br />At <b>Now Medical Clinic,</b> our caring physicians are accepting new patients in Calgary for ongoing care <b>open 7 days a week until 11 PM,</b> including <b>weekends and holidays.</b></>}
            additionalText=""
            buttons={[
              {
                text: "Walk In Now",
                link: "/walk-in-clinic-calgary",
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
                text: "Call 587-391-8188",
                link: "tel:587-387-7254",
                icon: "/icons/solar_phone-outline.svg",
                variant: "outline",
              }
            ]}
            image="/images/family-doctor/family-doctor-banner.png"
            imageAlt="Experienced family doctor accepting new patients in Calgary providing comprehensive care"
            bgColor="bg-[#F1F9F4]"
            className="py-8"
          />

          {/* Family Health Section */}
          <FamilyHealthSection />

          {/*Family Medicine Section */}
          <WhyChooseSection
            bg_color="bg-[#F1F9F4]"
            title="Why Choose "
            subtitle="Now Medical Clinic"
            h2_sub_color="text-[#303030]"
            items={FamilyMadicine}
            image={Family_img.src}
            both_btn="flex pt-0"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_link="tel:587-391-8188"
            btn_1_text="Call 587-391-8188"
            btn_2_icon="/icons/solar_phone-outline.svg"
            btn_2_link="/walk-in-clinic-calgary-"
            btn_2_text="Register as a New Patient"
            btn_2_bg="bg-transparent"
            order="order-first"
            h2_color_1="text-[#299470]"
            h2_color_2="text-[#303030]"
            h2_py='mb-6'
          />

          {/* Meet Our Doctors */}
          <DoctorsSection
            title="Meet Our Doctors"
            description={
              <>
                Our team of caring physicians provides a full range of family medicine from preventive care to chronic condition <br /> management. Each doctor combines medical expertise with compassion and approachability.
              </>
            }
            sec_py=" py-[65px] "
            femaleDoctors={femaleDoctors}
            maleDoctors={maleDoctors}
            showCategories={false}
            useCarousel={true}
            bgColor="bg-white"
            customButtons={[
              {
                text: "Call 587-391-8188",
                link: "tel:587-391-8188",
                icon: "/icons/btn_phone-outline-icon.svg",
                variant: "default",
                className: "bg-[#299470] hover:bg-[#2D7B6F] text-white text-lg"
              },
              {
                text: "Register as a New Patient",
                link: "/walk-in-clinic-calgary",
                icon: "/icons/solar_phone-outline.svg",
                variant: "outline",
                className: "border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg"
              }
            ]}
          />

          {/* Our Values */}
          <ValuesSection
            title="Comprehensive"
            subtitle="Family Medicine"
            description={
              <>
                Our doctors provide <b>ongoing care</b> for patients of all ages and health backgrounds, including:
              </>
            }
            values={values}
            titleFontWeight="font-medium"
            useListFormat={true}
            title_color=" text-[#299470]"
            sub_color=" text-[#303030]"
          />

          {/* How to Register */}
          <HowToRegisterSection />


          {/* What Patients Say */}
          <PatientsVideoSection
            heading_first="What"
            heading_mid="Patients"
            heading_last="Say"
            description=" See what Calgary patients are saying about their experience with Now Medical Clinic."
            Items={videoTestimonials}
            btn_show=" flex"
            btn_text=" See What Patients Are Saying"
          />

          {/* Find Us */}
          <FindUsSection bgColor="bg-white" />

          <div className="mt-[54px]"></div>
          {/* Bottom section  */}
          <BottomCallAction
            title="Now Medical Clinic Calgary Male and Female"
            title_2="Family Doctors Accepting New Patients."
            description='Call today to start your journey toward better health.'
          />

        </main>

        <Footer />
      </div>
    </>
  );
}

