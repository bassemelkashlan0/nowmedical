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
  FindUsSection,
} from "@/sections";
import { StructuredData, generateOrganizationSchema, generateLocalBusinessSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import { YouTubeVideosGrid } from "@/components/youtube-videos-grid";

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
      image: "/images/about-us/compassion.svg"
    },
    {
      title: "Accessibility",
      description: "Open 7 days a week with extended hours for your convenience",
      image: "/images/about-us/accessibility.svg"
    },
    {
      title: "Communication",
      description: "Clear, honest communication about your health and treatment options",
      image: "/images/about-us/communication.svg"
    },
    {
      title: "Diversity",
      description: "We proudly serve patients from all backgrounds and cultures",
      image: "/images/about-us/diversity.svg"
    },
    {
      title: "Excellence",
      description: "Committed to the highest standards of medical care and service",
      image: "/images/about-us/excellence.svg"
    }
  ];

  const storyContent = [
    <>
      <b>Now Medical Clinic</b> was founded with a simple goal:<br />
      to make it easier for Calgary residents to get professional medical care <b>when</b><br />
      <b>they actually need it.</b>
    </>,
    <>
      From day one, we've focused on <b>walk-in convenience</b> and <b>family-doctor</b><br />
      <b>continuity</b> — blending fast access with trusted, long-term relationships.<br />
      Whether you're coming for a sore throat, chronic-care follow-up, or a wellness<br />
      check for your child, you'll always see a real doctor who takes time to listen.
    </>
  ];

  const doctors = [
    {
      name: "Dr. Madiha",
      avatar: "/images/about-us/dr-madiha.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Vanessa",
      avatar: "/images/about-us/dr-vanessa.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Michael",
      avatar: "/images/about-us/dr-michael.png",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    }
    // {
    //   name: "Dr. Bedi",
    //   avatar: "/images/about-us/dr-vanessa.png",
    //   specialty: "Family Doctors",
    //   description: "Experienced in family practice and children's care.",
    //   phone: "587-391-8188"
    // }
  ];


  const differences = [
    "Open 7 days a week until 11 PM (including weekends & holidays)",
    "Real family doctors on-site — not just walk-in staff",
    "Minimal wait times compared to ERs and traditional clinics",
    "On-site pharmacy for added convenience",
    "Free parking and wheelchair accessibility",
    "Multilingual staff to serve Calgary's diverse community"
  ];

  const commitmentParagraphs = [
    <>
      We're proud to be <b>locally owned and operated</b>, serving our Calgary community with dedication and compassion.
    </>,
    <>
      Our goal is to make sure every patient — from newborns to seniors — feels cared for, respected, and understood.
    </>,
    <>
      <b>Healthcare built around your life, not the other way around.</b>
    </>
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
          <section className="bg-[#F1F9F4] py-10 lg:py-[54px] ">
            <div className="container">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 lg:mb-[21px] ">
                    Real Doctors. Real Care.
                    <br />
                    <span className="text-[#299470]">Open Late Every Day</span>
                  </h1>
                  <p className="text-m text-[#303030] mb-12 ">
                    At <b>Now Medical Clinic</b>, we believe that quality healthcare should be <b>accessible, compassionate, and convenient</b> — not stressful or delayed.
                    <br />
                    We’re proud to be the only clinic in Calgary that <b>opens 7 days a week — until 11 PM</b>, including <b>weekends and holidays</b>.
                  </p>
                  <div className="flex flex-wrap flex-row gap-4">
                    <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white text-lg font-bold" asChild>
                      <Link href="tel:587-391-8188" className="flex items-center gap-2">
                        <img src="/icons/btn_phone-outline-icon.svg" alt="Phone" className="w-5 h-5 brightness-0 invert" />
                        Call: 587-391-8188
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="md:whitespace-nowrap md:h-[49px] !whitespace-normal !h-auto min-h-[49px] w-full md:w-auto border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent p-[14px] px-4 text-lg font-bold"
                      asChild
                    >
                      <Link href="/walk-in-clinic" className="flex md:flex-nowrap md:whitespace-nowrap flex-wrap !whitespace-normal items-center justify-center text-center w-full md:gap-0 gap-2 md:py-0 py-1">
                        <span className="md:whitespace-nowrap break-words">Walk In Anytime No Appointment Needed</span>
                        <img src="/icons/uil-arrow-up-right-grn.svg" alt="Walk In Now" className="w-5 h-5 flex-shrink-0" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="lg:ml-8">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/VMruVCS172c?rel=0&modestbranding=1&showinfo=0"
                    title="YouTube Shorts Video"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <StorySection
            sec_py=" py-[46px] "
            title="Our "
            title_color=" text-[#299470] "
            subtitle="Story"
            sub_color=" text-[#303030] "
            content={storyContent}
            images={["/images/about-us/our-story.png", "/images/contact/modern-medical-clinic-interior-waiting-room.png"]}
          />

          {/* Our Mission */}
          <MissionSection />

          {/* Our Values */}
          <ValuesSection
            title="Our"
            sub_color=" text-[#303030]"
            subtitle="Values"
            title_color=" text-[#299470] "
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
            values={values}
          />

          {/* Meet Our Doctors */}
          <section className=" py-10 lg:py-[54px] bg-[#F1F9F4] ">
            <div className="container">
              <div className="text-center mb-8 ">
                <h2 className="text-3xl lg:text-5xl text-[#303030] font-bold mb-4">
                  Meet <span className="text-[#299470]">Our Doctors</span>
                </h2>
                <p className="text-base lg:text-lg text-[#303030] leading-relaxed max-w-4xl mx-auto">
                  Our team of experienced family doctors brings diverse backgrounds and shared dedication to patient care. Our doctors collaborate to ensure continuity of care, whether you walk in for an urgent concern or visit regularly as a registered patient.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4  mb-8">
                {doctors.map((doctor, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                    {/* Top Section with Light Green Background */}
                    <div className="bg-[#4A9B8E]/10 flex items-center justify-center">
                      <img
                        src={doctor.avatar}
                        alt={doctor.name}
                        className="w-full h-[300px] object-cover"
                      />
                    </div>
                    {/* Bottom Section with White Background */}
                    <div className="p-4 text-start">
                      <p className="text-base text-[#050505] mb-2 ">{doctor.specialty}</p>
                      <h3 className="text-2xl font-medium text-[#050505] mb-3">{doctor.name}</h3>
                      <p className="text-base text-[#303030]">{doctor.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call-to-Action Button */}
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg font-bold" 
                  asChild
                >
                  <Link href="tel:587-391-8188" className="flex items-center gap-2">
                    <img src="/icons/solar_phone-outline.svg" alt="Phone" className="w-5 h-5" />
                    Call: 587-391-8188
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* What Makes Us Different */}
          <DifferenceSection
            title="What Makes"
            titleHighlight="Now Medical Clinic"
            differences={differences}
            image="/images/about-us/clinic-diffrent.png"
            imageAlt="Medical clinic reception area"
          />

          {/* Our Commitment to Calgary */}
          <CommitmentSection
            title="Our Commitment"
            titleHighlight="to Calgary"
            paragraphs={commitmentParagraphs}
            image="/images/about-us/our-commitment.png"
            imageAlt="Medical clinic reception area"
          />

          {/* YouTube Videos Grid */}
          <YouTubeVideosGrid 
            maxResults={3}
            title="What **Patients** Are Saying"
            description="See what Calgary patients are saying about their experience with Now Medical Clinic."
            showButton={false}
            bgColor="bg-white"
            className=""
          />

          {/* Find Us */}
          <FindUsSection
            bgColor=" "
            dairection='https://maps.app.goo.gl/cL3Y6A4iHoaXZ8jv6'
            customButtons={
              <>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg font-bold"
                  asChild
                >
                  <Link href="tel:587-391-8188" className="flex items-center gap-2">
                    <img src="/icons/solar_phone-outline.svg" alt="Phone" className="w-5 h-5" />
                    Call: 587-391-8188
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-[#299470] hover:bg-[#256358] text-white font-bold text-lg"
                  asChild
                >
                  <Link 
                    href="https://maps.app.goo.gl/cL3Y6A4iHoaXZ8jv6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Get Direction on Google Map
                    <img src="/icons/uil-arrow-up-right.svg" alt="" className="w-5 h-5 brightness-0 invert" />
                  </Link>
                </Button>
              </>
            }
          />
          <div className="mt-15"></div>
          {/* CTA Banner */}
          <BottomCallAction
            title="Now Medical Clinic — Real Doctors. "
            title_2="Real Care. Open 7 Days Until 11 PM."
            description="Serving Calgary with compassion and commitment."
          />


        </main>

        <Footer />
      </div>
    </>
  );
}

