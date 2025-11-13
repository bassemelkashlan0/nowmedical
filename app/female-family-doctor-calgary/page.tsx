import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FindUsSection, WhyChooseSection, StorySection, MeetOurSlider } from "@/sections";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StructuredData, generatePhysicianSchema, generateFAQSchema, generateLocalBusinessSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";
import PatientsVideoSection from "@/sections/global/atients-video";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import why_us_img from "@/public/images/female-family/why-us.png"
import { YouTubeVideosGrid } from "@/components/youtube-videos-grid";


export const metadata: Metadata = {
  title: "Female Family Doctor Calgary | Now Medical Clinic",
  description: "Find a female family doctor in Calgary at Now Medical. Compassionate women's healthcare with experienced female physicians. Book your visit today.",
  keywords: ["female family doctor calgary", "lady doctor accepting new patients calgary", "women's health doctor", "female physician calgary"],
};

export default function FemaleFamilyDoctorPage() {
  const femaleDoctors = [
    {
      name: "Dr. Vanessa",
      avatar: "/images/female-family/slide-one.png",
      specialty: "Gynecologist",
      description: "Specializes in women's health and comprehensive family medicine.",
      phone: "587-391-8188",
      language: "English"
    },
    {
      name: "Dr. Madiha",
      avatar: "/images/female-doctor-illustration-avatar.jpg",
      specialty: "Family Medicine",
      description: "Experienced in women's health, family practice, and children's care.",
      phone: "587-391-8188",
      language: "English"
    },
    {
      name: "Dr. Ebele",
      avatar: "/images/female-doctor-illustration-avatar.jpg",
      specialty: "Family Medicine",
      description: "Dedicated to providing compassionate women's healthcare.",
      phone: "587-391-8188",
      language: "English"
    }
  ];

  const videoTestimonials = [
    {
      name: "Bessie Cooper",
      image: "/images/patients-say/bessie-cooper.png",
      quote: "Finally a clinic open late that actually cares about patients."
    },
    {
      name: "Jenny Wilson",
      image: "/images/patients-say/jenny-wilson.png",
      quote: "Friendly staff, short wait times, and doctors who listen."
    },
    {
      name: "Cameron Williamson",
      image: "/images/patients-say/cameron-williamson.png",
      quote: "This clinic makes it easy for families — especially on weekends and holidays."
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

  const localBusinessSchema = generateLocalBusinessSchema(CLINIC_DATA);

  // Areas of expertise for female family physician
  const expertiseAreas = [
    { text: "Women's health and wellness" },
    { text: "Reproductive and hormonal care" },
    { text: "Children's check-ups and family care" },
    { text: "Chronic condition management and preventive health" }
  ];

  // Women's health services
  const womensHealthServices = [
    { text: "Pap tests and cervical cancer screening" },
    { text: "Birth control consultations and renewals" },
    { text: "Menstrual pain and irregular period evaluation" },
    { text: "Pregnancy testing and early pregnancy care" },
    { text: "Menopause symptoms management" },
    { text: "Breast health and lump checks" },
    { text: "Urinary tract infections (UTIs) and yeast infections" },
    { text: "Sexual health consultations and STI testing" }
  ];

  // Family & children's care services
  const familyChildrenCare = [
    { text: "Immunizations and flu shots" },
    { text: "Ear infections, cough, or fever in children" },
    { text: "Growth monitoring and development check-ups" },
    { text: "Asthma and allergy management" },
    { text: "School and daycare medical forms" },
    { text: "We care for your whole family from newborns to seniors." }
  ];

  // Why women choose items
  const whyWomenChoose = [
    { text: "Female Family Doctors Accepting New Patients" },
    { text: "Open 7 Days a Week Until 11 PM" },
    { text: "Open on Weekends and Holidays" },
    { text: "Walk-in or Call Anytime No Appointment Needed" },
    { text: "Convenient Calgary Location with Free Parking" }
  ];
  // Story Content
  const storyContent = [
    <>
      At <b>Now Medical Clinic,</b> we know that many women feel more comfortable discussing their health with a female doctor.<br /> Whether it’s your first check-up, a sensitive concern, or ongoing family care, our female physicians are here to make your experience comfortable and empowering.
    </>,
    <>
      We’re proud to offer <b>female family doctors accepting new patients</b> in Calgary open <b>7 days a week until 11 PM,</b> including <b>weekends and holidays</b>
    </>
  ];
  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={faqSchema} />
      {physicianSchemas.map((schema, index) => (
        <StructuredData key={index} data={schema} />
      ))}

      <div className="flex min-h-screen flex-col">
        <Header />
        <LiveStatusBanner />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-[#F1F9F4] py-10 md:py-[54px] ">
            <div className="container">
              <div className="grid gap-4 lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                  <h1 className="font-bold text-[#299470] tracking-tight lg:text-6xl mb-[21px] ">
                    Female Family Doctor<br />
                    <span className="text-[#303030]">  in Calgary Accepting New  Patients Now</span>
                  </h1>

                  <p className="text-base text-foreground mb-4 font-bold">
                    Looking for a compassionate, experienced female physician?
                  </p>
                  <p className="text-base text-foreground mb-4">
                    At <b>Now Medical Clinic,</b> our <b>female family doctors</b> provide personalized care for women, children, and families with same-day access and flexible hours.
                  </p>
                  <p className="text-base text-foreground mb-4 font-bold">
                    Comfort, understanding, and expert care from doctors who truly listen.
                  </p>

                  <div className="flex flex-col pt-9 sm:flex-row gap-4">
                    <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white text-base font-bold" asChild>
                      <Link href="tel:587-391-8188" className="flex items-center gap-2">
                        <img src="/icons/btn_phone-outline-icon.svg" alt="Phone" className="w-5 h-5 brightness-0 invert" />
                        Call: 587-391-8188
                      </Link>
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#299470] border-1 text-[#299470] hover:bg-[#299470]/10 bg-transparent text-base font-bold"
                      asChild
                    >
                      <Link href="/walk-in-clinic-calgary" className="flex items-center gap-2">
                        Walk In Today
                        <img src="/icons/uil-arrow-up-right-grn.svg" alt="Walk In Today" className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center items-center md:ml-8 ">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/zeArmG81bAE?rel=0&modestbranding=1&showinfo=0"
                    title="YouTube Shorts Video"
                    frameborder="0"
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                  </iframe>
                </div>
              </div>
            </div>
          </section>



          {/* Our Story */}
          <StorySection
            title={<><span className="text-[#299470]">Your Health,</span> <span className="text-[#303030]">Your</span><br /></>}
            subtitle={<span className="text-[#303030]"> Comfort, Your Doctor</span>}
            content={storyContent}
            images={["/images/female-family/your-health.png"]}
          />


          {/* Meet Our Female Family Physician Section */}
          <MeetOurSlider
            title="Meet Our"
            title_2="Female Family Physician"
            description="Our Female Family doctors areas of expertise include"
            items={expertiseAreas}
            doctors={femaleDoctors.map(doctor => ({
              name: doctor.name,
              avatar: doctor.avatar,
              specialty: doctor.specialty,
              language: doctor.language
            }))}
            bgColor="bg-[#F1F9F4]"
          />

          {/* Comprehensive Women's Health Services Section */}
          <WhyChooseSection
            title="Comprehensive"
            title_2=""
            subtitle="Women's Health Services"
            para={<>Our clinic offers a wide range of <b>walk-in and family medicine services</b> designed to support women's health and wellbeing.</>}
            items={womensHealthServices}
            image="/images/female-family/compre.png"
            h2_color_1="text-[#303030]"
            h2_color_2="text-[#299470]"
            h2_sub_color="text-[#299470]"
            py=" pt-[55px] pb-[64px] "
            IsDot={true}
            bg_color="bg-white"
            order="order-last"
            both_btn="flex pt-4"
            btn_1_text="Call: 587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_link="tel:587-391-8188"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Walk In"
            btn_2_icon="/icons/btn-walking-outline-icon.svg"
            btn_2_link="/walk-in-clinic-calgary"
            btn_2_bg="bg-transparent"
          />

          {/* Family & Children's Care Section */}
          <WhyChooseSection
            title="Family & "
            title_2="Children's Care"
            subtitle=""
            para="Our female family doctors also provide comprehensive care for children and families."
            items={familyChildrenCare}
            image="/images/female-family/child-care.png"
            h2_color_1="text-[#303030]"
            h2_color_2="text-[#299470]"
            h2_sub_color="text-[#299470]"
            IsDot={true}
            bg_color="bg-[#F1F9F4]"
            order="order-first"
            both_btn="flex pt-7"
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Walk In Now"
            btn_2_link="/walk-in-clinic-calgary"
            btn_2_icon="/icons/btn-walking-outline-icon.svg"
          />

          {/* Why Women Choose Now Medical Clinic Section */}
          <WhyChooseSection
            title="Why Women Choose"
            title_2=""
            subtitle="Now Medical Clinic"
            items={whyWomenChoose}
            image={why_us_img.src}
            h2_color_1="text-[#303030]"
            h2_color_2="text-[#299470]"
            h2_sub_color="text-[#299470]"
            IsDot={false}
            bg_color="bg-white"
            order="order-last"
            both_btn="flex pt-7"
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Walk In Now"
            btn_2_link="/walk-in-clinic-calgary"
            btn_2_icon="/icons/btn-walking-outline-icon.svg"
          />

          {/* YouTube Videos Grid */}
          <YouTubeVideosGrid 
            maxResults={3}
            title="What **Patients** Are Saying"
            description="See what Calgary patients are saying about their experience with Now Medical Clinic."
            showButton={false}
            bgColor="bg-[#EEF8F2]"
            className=""
          />

          {/* Find Us & Hours Section */}
          <FindUsSection
            bgColor="bg-white"
            showFreeParking={true}
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
                    href="https://share.google/CkrlunWzewWZjaPmv"
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

          {/* CTA Banner */}
          <BottomCallAction
            title='Now Medical Clinic — Female Family Doctors '
            title_2="in Calgary, Accepting New Patients."
            description="Compassionate care, professional expertise, open 7 days a week."
          />
        </main>

        <Footer />
      </div>
    </>
  );
}
