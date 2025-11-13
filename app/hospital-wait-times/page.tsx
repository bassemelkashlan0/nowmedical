import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  LiveWaitTimesSection,
  ConditionsSection,
  NearbyHospitalsSection,
  WhyChooseSection
} from "@/sections";
import hero_img from "@/public/images/hospital-wait-times/wait-times-banner.png"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { text } from "stream/consumers";
import PatientsVideoSection from "@/sections/global/atients-video";
import SkipWait_img from "@/public/images/hospital-wait-times/wait-times-reception.png";
import FamilyMedicine_img from "@/public/images/hospital-wait-times/why-us.png";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import { YouTubeVideosGrid } from "@/components/youtube-videos-grid";

export const metadata: Metadata = {
  title: "Calgary Hospital Wait Times | Skip the ER - Walk-In Clinic Open Late",
  description: "Avoid long Calgary hospital ER wait times. Walk in to Now Medical Clinic for non-emergency care. Open until 11 PM daily. Average wait under 30 minutes.",
  keywords: ["calgary hospital wait times", "er wait times", "skip emergency room", "non emergency clinic", "urgent care calgary"],
  alternates: {
    canonical: "https://nowmedical.ca/hospital-wait-times"
  }
};

export default function HospitalWaitTimesPage() {

  const conditions = [
    {
      category: "Chronic Conditions",
      icon: "/images/landing/chronic-conditions.svg",
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
      icon: "/images/landing/walk-In-urgent-care.svg",
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
      icon: "/images/landing/mental-health-wellness.svg",
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
      icon: "/images/landing/mens-health.svg",
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
      icon: "/images/landing/womens-health.svg",
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
      icon: "/images/landing/childrens-health.svg",
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
      icon: "/images/landing/preventive-care.svg",
      items: [
        "Annual physical exams",
        "Chronic disease screening",
        "Travel medicine and vaccines",
        "Blood work and lab tests",
        "ECG and cardiac screening"
      ]
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

  const whyChoose = [
    {
      text: " Open 7 Days a Week — Until 11 PM"
    },
    {
      text: 'Walk-Ins Always Welcome — No Appointment Needed'
    },
    {
      text: 'Real Family Doctors (Male & Female)'
    },
    {
      text: '⭐ 4.8   Google Rating from Over 250 Reviews'
    },
    {
      text: ' Free Parking & Convenient NE Calgary Location'
    },
    {
      text: "Multilingual Team English, Arabic, Urdu, Hindi, Spanish & French"
    }
  ];

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Skip Calgary hospital ER wait times. Walk-in clinic open until 11 PM daily. Average wait under 30 minutes."
  });

  const faqSchema = generateFAQSchema([
    {
      question: "What are the typical Calgary hospital wait times?",
      answer: "Calgary hospital emergency room wait times can range from 2-8 hours depending on severity. Our walk-in clinic has an average wait time of under 30 minutes for non-emergency conditions."
    },
    {
      question: "Should I go to the hospital or a walk-in clinic?",
      answer: "Visit our walk-in clinic for non-life-threatening conditions like minor injuries, infections, flu symptoms, and minor burns. Go to the hospital ER only for serious emergencies like chest pain, severe bleeding, or difficulty breathing."
    },
    {
      question: "Can you treat the same conditions as a hospital?",
      answer: "We can treat most non-emergency conditions that would send you to an ER, including minor injuries, infections, illnesses, and chronic disease management. For life-threatening emergencies, please call 911."
    }
  ]);
  // Items for "Skip the Wait" section
  const skipWaitItems = [
    {
      text: "No long hospital lines",
    },
    {
      text: "No waiting for hours",
    },
    {
      text: "Real family doctors — not virtual consults",
    }
  ];

  // Items for "Family Medicine" section
  const familyMedicineItems = [
    {
      text: " Open 7 Days a Week — Until 11 PM",
    },
    {
      text: "Walk-Ins Always Welcome — No Appointment Needed",
    },
    {
      text: "Real Family Doctors (Male & Female)",
    },
    {
      text: "⭐ 4.8   Google Rating from Over 250 Reviews",
    },
    {
      text: " Free Parking & Convenient NE Calgary Location",
    },
    {
      text: "Multilingual Team English, Arabic, Urdu, Hindi, Spanish & French",
    }
  ];

  // Items for "Women's Health" section

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={faqSchema} />

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-[#F1F9F4] to-white  md:py-[54px]  ">
            <div className="container">
              <div className="grid gap-4 lg:grid-cols-[59%_40%] lg:gap-4 items-center  ">
                <div>
                  <h1 className=" font-bold tracking-tight lg:text-6xl mb-4">
                    Tired of Long Hospital Wait Times <span className="text-[#299470] " >Visit Now Medical Clinic </span>
                    Open 7 Days Until 11 PM
                  </h1>

                  <p className=" text-3xl font-medium text-[#303030] mb-4 mt-13 ">The Reality of Calgary’s Hospital Wait Times </p>

                  <div className="">
                    <p className="text-base  text-[#303030] mb-4">
                      If you’ve ever searched for <b>“Calgary hospital wait times”</b> , you already know how unpredictable emergency <br />
                      departments can be. <br />
                      Depending on the time of day, <b>ER waits in Calgary hospitals can stretch from 3 to 8 <br />
                        hours</b>  especially at <b>Foothills Medical Centre, Peter Lougheed Centre,</b> or <b>Rockyview General Hospital.</b>
                    </p>

                    <p className="text-base  text-[#303030] mb-4">
                      But most people waiting in the ER don’t actually need emergency care. <br />
                      They simply need to see a <b>real doctor fast</b> for infections, fever, minor injuries, or medication renewals.
                    </p>
                    <p className="text-base  text-[#303030] mb-4">
                      That's exactly why <b>Now Medical Clinic </b> exists.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                      <Link href="tel:587-391-8188" className="flex items-center gap-2">
                        <img src="/icons/btn-walking-outline-icon.svg" alt="Walk In" className="w-5 h-5" />
                        Walk In Now
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center items-center">
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

          {/*Skip the Wait Section */}
          <WhyChooseSection
            bg_color="bg-white"
            title="Skip the Wait"
            title_2="Walk In Today"
            subtitle=""
            para="At Now Medical Clinic, you don't need an appointment or a referral. Our doctors see walk-in patients 7 days a week until 11:00 PM, including weekends and holidays."
            items={skipWaitItems}
            image={SkipWait_img.src}
            itemsAsParagraph={true}
            address="Address:2520 23 St NE #19, AB T2E 8L2"
            h2_color_1="text-[#303030]"
            h2_color_2="text-[#299470]"
          />


          {/* Hospital Wait Times Comparison */}
          <LiveWaitTimesSection
            title="Hospital Wait Times vs. Now Medical Clinic"
            currentWaitTime="< 30 min"
          />

          {/* Hours Section */}
          <section className="py-[54px] bg-white">
            <div className="container">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                  <h2 className="text-5xl text-[#303030] font-bold mb-4">
                    <span className="text-[#299470]">Open Late</span>, Open Weekends, Open on Holidays
                  </h2>
                  <div className="space-y-4 text-foreground">
                    <p className="text-base">
                      We’re one of Calgary’s <b>only medical clinics open until 11 PM every day,</b> <br />
                      including Saturdays, Sundays, and holidays.
                    </p>
                    <p className="text-base">
                      Many patients visit us after checking ER wait times and realizing they don’t need to <br />
                      spend the night waiting in line.
                    </p>
                    <p className="text-base">
                      So instead of waiting at the hospital, <b>walk in to Now Medical Clinic</b> fast, real, and <br />
                      compassionate care.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
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

                <div>
                  <img
                    src="/images/hospital-wait-times/wait-times-open.png"
                    alt="Now Medical Clinic building exterior located in northeast Calgary"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Conditions We Treat */}
          <ConditionsSection
            title="Common Medical Conditions"
            subtitle="We Treat"
            para="At Now Medical Clinic, our doctors treat a wide range of medical conditions"
            para_2=" so you can skip the ER and get real help today."
            conditions={conditions}
            bg_color="bg-[#F1F9F4]"
          />


          {/*Family Medicine Section */}
          <WhyChooseSection
            bg_color="bg-white"
            title="Why Calgarians Choose"
            title_2=""
            subtitle="Now Medical Clinic"
            items={familyMedicineItems}
            image={FamilyMedicine_img.src}
            h2_sub_color="text-[#299470]"
            both_btn="flex pt-7"
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Walk In Now"
            btn_2_link="tel:587-391-8188"
            btn_2_icon="/icons/btn-walking-outline-icon.svg"
          />

          {/* YouTube Videos Grid */}
          <YouTubeVideosGrid 
            maxResults={3}
            title="What **Patients** Are Saying"
            description="See what Calgary patients are saying about their experience with Now Medical Clinic."
            showButton={true}
            buttonText="See Real Patient Stories"
            buttonLink="/patient-experience"
            bgColor="bg-[#EEF8F2]"
            className=""
          />

          {/* Nearby Hospitals */}
          <NearbyHospitalsSection
            title="Nearby"
            subtitle="Hospitals"
            hospitals={[
              { name: "Foothills Medical Centre" },
              { name: "Peter Lougheed Centre" },
              { name: "Rockyview General Hospital" },
              { name: "South Health Campus" },
              { name: "Alberta Children's Hospital" }
            ]}
            image="/images/hospital-wait-times/wait-times-near.png"
          />
          

          {/* Skip Line */}
          <section className="py-5 bg-[#EEF8F2] ">
            <div className="container  max-w-[1080px] w-full">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                  <h2 className="text-5xl text-[#303030] font-bold mb-4">
                    <span className="text-[#299470]">Skip the Line </span> <br />
                    See a Doctor Now
                  </h2>
                  <div className="space-y-4 text-foreground">
                    <p className="text-xl text-[#303030] mb-6">
                      Stop waiting in the ER
                    </p>
                    <p className="text-base text-[#303030] ">
                      <b>Walk in today or call 587-391-8188</b> to speak with our team. <br />
                      We're open <b>7 days a week until 11 PM,</b> including weekends and holidays.
                    </p>

                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
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

                <div>
                  <img
                    src="/images/hospital-wait-times/wait-times-see-dr.png"
                    alt="Now Medical Clinic building exterior located in northeast Calgary"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="pt-15"></div>
          {/* CTA Banner */}
          <BottomCallAction
            title='Hospital Wait Times Calgary | Skip the Line | '
            title_2="Walk-In Clinic Open Until 11 PM"
            description="Tired of long hospital wait times in Calgary? Walk in to Now Medical Clinic — open 7 days until 11 PM. Real doctors, no appointment needed."
          />
        </main>

        <Footer />
      </div>
    </>
  );
}

