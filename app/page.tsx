import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  WhyChooseSection,
  ConditionsSection,
  DoctorsSection,
  TestimonialsSection,
  FindUsSection,
} from "@/sections";
import { Phone, Users, Clock, Stethoscope } from "lucide-react";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, generateAggregateRatingSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";

export const metadata: Metadata = {
  title: "Walk-In Clinic Calgary | Open 7 Days Until 11 PM",
  description: "Calgary's trusted walk-in clinic. Real doctors, open daily until 11 PM. Walk-ins welcome — no appointment needed.",
  keywords: ["walk-in clinic calgary", "walk in clinic near me", "open late medical clinic", "family doctor calgary", "clinic near me"],
};

export default function HomePage() {
  const whyChooseItems = [
    {
      text: "Open 7 Days — Until 11:00 PM",
      icon: <Clock className="w-5 h-5" />
    },
    {
      text: "Open on Weekends and Holidays",
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      text: "No Appointment Needed — Just Walk In",
      icon: <Users className="w-5 h-5" />
    },
    {
      text: "Experienced Family Doctors You Can Rely On",
      icon: <Phone className="w-5 h-5" />
    },
    {
      // text: "Short Waits & Same-Day Prescriptions",
      text: "Short Waits",
      icon: <Phone className="w-5 h-5" />
    },
    {
      text: "Serving All Areas of Calgary with Free Parking",
      icon: <Phone className="w-5 h-5" />
    }
  ];

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
        // "Birth control and family planning",
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

  const femaleDoctors = [
    // {
    //   name: "Dr. Nasreen Abid",
    //   avatar: "/images/landing/dr-madiha.png",
    //   specialty: "Family Doctors",
    //   description: "Accepting New Patients",
    //   language: "Arabic",
    // },
    // {
    //   name: "Dr. Vanessa Marezana",
    //   avatar: "/images/landing/dr-ebele.png",
    //   specialty: "Family Doctors",
    //   description: "Accepting New Patients",
    //   language: "Spanish",
    // },
    {
      name: "Dr. Madiha Badshah",
      avatar: "/images/landing/dr-madiha.png",
      specialty: "Family Doctors",
      description: "Accepting New Patients",
    },
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
    // {
    //   name: "Dr. Olasunkanmi Akinremi",
    //   avatar: "/images/landing/dr-michael.png",
    //   specialty: "Family Doctors",
    //   description: "Accepting New Patients",
    // },
  ];

  const testimonials = [
    {
      name: "Sanny Cooper",
      avatar: "/images/landing/review_1.png",
      rating: 5,
      text: "Really good experience at this walk-in clinic. I was in and out in about 1.5 hours, and most of that wait was for the pharmacy inside (they're a little slow). The clinic itself runs smoothly, staff were friendly, and it's very convenient to have the pharmacy on-site."
    },
    {
      name: "Bill Grabovac",
      avatar: "/images/landing/review_2.png",
      rating: 5,
      text: "Fast service! Well managed medical clinic! Got to see a medical Dr after a 5 minute wait at 7:50pm. There was a small fee as we did not have an Alberta Health Care Number. The Dr was knowledgeable with the medical condition we experienced. Very Happy with the service we received. A+"
    },
    {
      name: "Jetta Lush",
      avatar: "/images/landing/review_3.png",
      rating: 5,
      text: "This place was awesome!!! Hours are wonderful, worked so well for me and my specific situation (working single parent), employees were warm and welcoming. Super fast efficient, doctor was warm, welcoming and super thorough. Great experience overall."
    }
  ];

  const NewPages= [
    {
      text: <><a href="/walk-in-clinic-ne-calgary"> NE Calgary </a></>,
    },
    {
      text: <><a href="/walk-in-clinic-nw-calgary"> NW Calgary </a></>,
    } ,
    {
      text: <><a href="/walk-in-clinic-sw-calgary"> SW Calgary </a></>,
    },
    {
      text: <><a href="/walk-in-clinic-se-calgary"> SE Calgary  </a></>,
    } ,
    {
      text: <><a href="/walk-in-clinic-downtown-calgary"> Downtown Calgary </a></>,
    }
  ]

  const Family_img = "/images/walk-in/why-us.png";


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
        <LiveStatusBanner />

        <main className="flex-1">
          {/*  Hero Section */}
          <section className="bg-[#F1F9F4] to-white py-10 lg:py-[54px] ">
            <div className="container">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl  mb-4 md:mb-[21px] ">
                    <span className="text-[#299470]">Calgary Walk in Clinic - Family Doctors Available Today</span>
                    <br />
                    <span className="text-[#303030] ">Open 7 days Until 11 PM</span>
                  </h1>
                  <p className=" text-muted-foreground mb-4 md:mb-[21px]">
                    <span className="font-bold text-[#303030] text-[36px]/10 ">Including Weekends and Holidays</span>
                  </p>
                  <p className="text-base text-[#000000] mb-3 md:mb-[15px] ">
                    Skip the hospital wait. See a Real doctor Today — No Appointment Needed. Fast, friendly care for you and your family, Open on Weekends and Holidays, serving all areas of Calgary.
                  </p>
                  <p className="text-lg font-bold text-[#050505] mb-2 ">
                    Real doctors. Real care. Open late every day
                  </p>
                  <p className="mb-8 md:mb-12 ">
                    <a href="https://maps.app.goo.gl/cL3Y6A4iHoaXZ8jv6" target="_blank" className="text-lg font-bold underline text-[#050505]  ">
                      Address: 2520 23 St NE #19, Calgary, AB T2E 8L2
                    </a>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* <Button
                      size="lg"
                      variant="outline"
                      className="border-[#299470] text-bold text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg"
                      asChild
                    >
                      <Link href="/walk-in-clinic"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none" class="sm:w-5 sm:h-5"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4153 2.28906C10.2238 2.28906 10.0341 2.32678 9.85719 2.40007C9.68026 2.47336 9.51949 2.58078 9.38407 2.7162C9.24865 2.85162 9.14123 3.01238 9.06795 3.18932C8.99466 3.36625 8.95694 3.55588 8.95694 3.7474C8.95694 3.93891 8.99466 4.12854 9.06795 4.30548C9.14123 4.48241 9.24865 4.64317 9.38407 4.77859C9.51949 4.91401 9.68026 5.02143 9.85719 5.09472C10.0341 5.16801 10.2238 5.20573 10.4153 5.20573C10.802 5.20573 11.173 5.05208 11.4465 4.77859C11.72 4.5051 11.8736 4.13417 11.8736 3.7474C11.8736 3.36062 11.72 2.98969 11.4465 2.7162C11.173 2.44271 10.802 2.28906 10.4153 2.28906ZM7.70694 3.7474C7.70694 3.0291 7.99228 2.34023 8.50019 1.83231C9.0081 1.3244 9.69698 1.03906 10.4153 1.03906C11.1336 1.03906 11.8224 1.3244 12.3304 1.83231C12.8383 2.34023 13.1236 3.0291 13.1236 3.7474C13.1236 4.46569 12.8383 5.15457 12.3304 5.66248C11.8224 6.17039 11.1336 6.45573 10.4153 6.45573C9.69698 6.45573 9.0081 6.17039 8.50019 5.66248C7.99228 5.15457 7.70694 4.46569 7.70694 3.7474ZM11.2719 8.95823C11.2003 8.95508 11.1286 8.95425 11.0569 8.95573H10.1478L10.0719 9.71573C9.92694 11.1657 9.8761 11.7491 10.0053 12.2999C10.1353 12.8516 10.4403 13.3507 11.2161 14.5849L13.3611 17.9982C13.447 18.1385 13.4742 18.307 13.4366 18.4672C13.3991 18.6274 13.2999 18.7663 13.1606 18.8539C13.0213 18.9414 12.8531 18.9705 12.6925 18.9348C12.5319 18.8991 12.3919 18.8015 12.3028 18.6632L10.1578 15.2499L10.0969 15.1532C9.4011 14.0474 8.97194 13.3649 8.7886 12.5866C8.60527 11.8082 8.6861 11.0049 8.81694 9.70406L8.82777 9.59073L8.8911 8.95656C8.47444 8.95906 8.16444 8.96656 7.9161 8.9974C7.6011 9.0349 7.45444 9.10156 7.35027 9.1849C7.24694 9.26823 7.15027 9.39656 7.04444 9.69573C6.9336 10.0099 6.83777 10.4357 6.69527 11.0766L6.44194 12.2166C6.40402 12.3764 6.30471 12.5149 6.16548 12.602C6.02625 12.6892 5.8583 12.7181 5.69796 12.6824C5.53762 12.6467 5.39779 12.5493 5.3087 12.4113C5.21962 12.2733 5.18845 12.1057 5.22194 11.9449L5.4836 10.7691C5.61527 10.1741 5.72694 9.67406 5.8661 9.27906C6.0136 8.86073 6.21527 8.49323 6.5686 8.2099C6.92194 7.92656 7.3236 7.8099 7.76444 7.75573C8.18027 7.70573 8.69277 7.70573 9.30194 7.70573H11.0778C11.1911 7.70573 11.2786 7.70573 11.3611 7.71156C11.815 7.74406 12.249 7.91097 12.6077 8.19102C12.9664 8.47108 13.2336 8.85159 13.3753 9.28406C13.4003 9.3624 13.4219 9.44823 13.4503 9.55823L13.4544 9.57823C13.5011 9.7649 13.5153 9.81823 13.5286 9.8549C13.7036 10.3599 14.2328 10.6507 14.7528 10.5274C14.7911 10.5191 14.8436 10.5016 15.0261 10.4407L15.6344 10.2382C15.7896 10.193 15.9563 10.2096 16.0995 10.2846C16.2427 10.3596 16.3512 10.4872 16.4024 10.6406C16.4535 10.7939 16.4432 10.9611 16.3737 11.1071C16.3041 11.253 16.1807 11.3663 16.0294 11.4232L15.4211 11.6266L15.3944 11.6349C15.2783 11.6762 15.1604 11.7124 15.0411 11.7432C14.4888 11.8741 13.9076 11.7954 13.41 11.5223C12.9124 11.2491 12.5339 10.8011 12.3478 10.2649C12.3094 10.1475 12.2764 10.0285 12.2486 9.90823L12.2419 9.88073C12.2259 9.81071 12.2075 9.74123 12.1869 9.6724C12.1225 9.47601 12.0011 9.30323 11.8381 9.17606C11.6752 9.04888 11.4781 8.97306 11.2719 8.95823ZM8.6786 14.0607C8.81651 14.1527 8.91224 14.2956 8.94475 14.4582C8.97725 14.6207 8.94387 14.7895 8.85194 14.9274L6.35194 18.6774C6.30685 18.7467 6.24847 18.8063 6.18017 18.8529C6.11188 18.8994 6.03502 18.932 5.95407 18.9486C5.87311 18.9653 5.78965 18.9657 5.70852 18.9499C5.62739 18.9341 5.55021 18.9023 5.48144 18.8565C5.41266 18.8106 5.35367 18.7516 5.30787 18.6828C5.26206 18.614 5.23036 18.5368 5.2146 18.4556C5.19883 18.3745 5.19932 18.2911 5.21603 18.2101C5.23274 18.1292 5.26533 18.0523 5.31194 17.9841L7.81194 14.2341C7.90389 14.0962 8.04685 14.0004 8.20937 13.9679C8.3719 13.9354 8.54069 13.9688 8.6786 14.0607Z" fill="#299470"></path></svg> Walk In Now </Link>
                    </Button> */}

                    <Button size="lg"
                      className="border-[#299470] text-[#fff] hover:bg-[#2d7b6f]  text-lg font-bold"
                      asChild>
                      <Link href="https://maps.app.goo.gl/cL3Y6A4iHoaXZ8jv6" target="_blank" className="flex items-center gap-2">
                        <img
                          src="/icons/pin-outline-icon.svg" alt=""
                          className="w-5 h-5 brightness-0 invert"
                        />
                        Get Directions
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg font-bold"
                      asChild
                    >
                      <Link href="tel:587-391-8188" className="flex items-center gap-2">
                        <img src="/icons/solar_phone-outline.svg" alt="Phone" className="w-5 h-5 " />
                        Call: 587-391-8188
                      </Link>
                    </Button>

                  </div>
                </div>

                <div className="relative lg:ml-8">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/zeArmG81bAE?rel=0&modestbranding=1&showinfo=0"
                    title="YouTube Shorts Video"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Info Cards */}
          <section className=" py-8 lg:py-9">
            <div className="container">
              <div className=" mx-auto bg-[#EEF8F2]   rounded-2xl px-4 lg:px-12 py-5 lg:py-8">
                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#CDEDE3] justify-center items-stretch">
                  {/* Card 1: Walk-In Visits */}
                  <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 text-center  md:border-r-2  border-[#9AD9BA80]  ">
                    <div className="flex items-center justify-center mb-4">
                      {/* Placeholder icon */}
                      <span className="inline-flex h-[100px] w-[100px] rounded-full bg-[#4AB27F1A] items-center justify-center">
                        {/* Medical Bag/Phone Emoji placeholder */}
                        <span className="mt-16">
                          <img src="/images/landing/mobile.png" alt="Walk-In Visits" className="w-full h-full" />

                        </span>
                      </span>
                    </div>
                    <h3 className="font-bold text-[26px] mb-2 mt-8 text-[#303030] ">Walk-In Visits</h3>
                    <p className="text-base font-normal  text-[#000000] ">
                      No appointment needed. See real doctors 7<br /> days a week even on holidays.
                    </p>
                  </div>
                  {/* Card 2: Family Doctors */}
                  <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 text-center md:border-r-2  border-[#9AD9BA80] ">
                    <div className="flex items-center justify-center mb-4">
                      {/* Stethoscope icon placeholder */}
                      <span className="inline-flex h-[100px] w-[100px] rounded-full bg-[#4AB27F1A] items-center justify-center">
                        <span className="mt-16">
                          <img src="/images/landing/stethoscope.png" alt="Family Doctors" className="w-full h-full" />
                        </span>
                      </span>
                    </div>
                    <h3 className="font-bold text-[26px] mb-2 mt-8 text-[#303030] ">Family Doctors</h3>
                    <p className="text-base font-normal  text-[#000000]">
                      Ongoing care for your whole family from<br /> newborns to seniors.
                    </p>
                  </div>
                  {/* Card 3: Open 7 days */}
                  <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      {/* 24/7 service icon placeholder */}
                      <span className="inline-flex h-[100px] w-[100px] rounded-full bg-[#4AB27F1A] items-center justify-center">
                        <span className="mt-8">
                          <img src="/images/landing/24x7.png" alt="Open 7 days" className="w-full h-full" />
                        </span>
                      </span>
                    </div>
                    <h3 className="font-bold text-[26px] mb-2 mt-8 text-[#303030] ">Open 7 days</h3>
                    <p className="text-base font-normal  text-[#000000]">
                      Until 11:00 PM, including weekends and<br /> Holidays
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <WhyChooseSection
            title="Why Calgary Trusts"
            h2_color_1=" text-[#050505] "
            para="We're here when other clinics are closed and when you need care the most."
            para_color=" text-[#000000] "
            subtitle="Now Medical Clinic"
            items={whyChooseItems}
            image="/images/landing/why-calgary-trusts.png"
            both_btn="flex pt-4"
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/btn_phone-outline-icon.svg"
            btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
            btn_2_text="Walk In Now"
            btn_2_link="/walk-in-clinic"
            btn_2_icon="/icons/uil-arrow-up-right-grn.svg"
          />

          {/* Our Promises Section */}
          <section className=" py-10 lg:py-8 bg-[#F1F9F4]">
            <div className="container">
              <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 lg:gap-16 items-center lg:px-[59px] ">
                <div>
                  <h2 className="text-3xl lg:text-5xl text-[#050505] font-bold mb-4">
                    Our <span className="text-[#299470]">Promises</span>
                  </h2>
                  <div className="space-y-4 text-[#000000] ">
                    <p>
                      When you or your loved ones need care, you shouldn't wait days for an appointment. <br />At Now Medical Clinic, our doctors are ready 7 days a week — weekends and holidays <br />included, offering fast, compassionate, professional care for all Calgary residents.<br /> No Appointment Needed
                      <br /> Because your health matters now — not later.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8 ">
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

                <div className="order-first lg:order-last">
                  <img
                    src="/images/landing/our-promise.png"
                    alt="Our Promise"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Conditions Section */}
          <ConditionsSection
            title="Common Medical Conditions"
            subtitle="We Treat"
            para="At Now Medical Clinic, our doctors treat a wide range of medical conditions "
            para_2="so you can skip the ER and get real help today."
            conditions={conditions}
          />

          {/* Walk-in Video Promo Section */}
          <section className="py-10 lg:py-[54px]  ">
            <div className="container mx-auto max-w-[1170px] w-full flex flex-col items-center">
              {/* Headline with Green Text */}
              <h2 className="text-3xl lg:text-5xl font-bold text-[#303030] text-center mb-4">
                Walk in today until <span className="text-[#299470]">11:00 Pm, Open 7 days</span>
              </h2>
              {/* Subheadline */}
              <p className="text-[20px] text-center text-[#303030] mb-6">
                Register as a new patient today with our Male or Female Family Doctors ,Accepting New Patient
              </p>
              {/* Video Player (with custom poster) */}
              <div className="w-full aspect-video bg-[#299470] rounded-lg shadow overflow-hidden flex items-center justify-center relative">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/kp-G-j-DRhg?rel=0&modestbranding=1&showinfo=0"
                  title="YouTube Shorts Video"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </section>

          {/* Family Doctors Accepting New Patients Section */}
          <section className="bg-[#F1F9F4] pt-10 lg:pt-[54px] pb-10">
            <div className="container mx-auto flex flex-col items-center">
              {/* Headline */}
              <h2 className="text-3xl lg:text-5xl font-bold text-[#303030] text-center mb-4">
                Family Doctors Accepting <span className="text-[#299470]">New Patients</span>
              </h2>
              {/* Subheadline */}
              <div className="text-center mb-4">
                <p className="font-bold text-lg text--[#000000">Looking for a family doctor in Calgary?</p>
              </div>
              <div className="text-center  mb-8 text-[#000000] ">
                Our caring Male and Female Doctors are accepting new patients in Calgary for long-term, comprehensive care. Get matched with <br /> a doctor who listens, understands, and builds lasting relationships with your family.
              </div>
              {/* Cards Row */}
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                {/* Card 1: Male & Female Doctors */}
                <div className="rounded-xl border border-[#83C1AC] bg-white shadow-sm flex flex-col items-center justify-between px-5 py-5 text-center hover:shadow-lg transition">
                  <span className="inline-flex h-14 w-14 items-center justify-center mb-6">
                    {/* icon: users */}
                    <img src="/images/landing/new-patients.svg" alt="" />
                  </span>
                  <h3 className="font-medium text-[#000000] text-2xl lg:text-3xl mb-[10px] ">Male & Female Doctors</h3>
                  <p className="text-[#303030] text-base ">Choose a doctor you're comfortable with</p>
                </div>
                {/* Card 2: Multiple Languages */}
                <div className="rounded-xl border border-[#83C1AC] bg-white shadow-sm flex flex-col items-center justify-between px-5 py-5 text-center hover:shadow-lg transition">
                  <span className="inline-flex h-14 w-14 items-center justify-center mb-4">
                    {/* icon: globe / languages */}
                    <img src="/images/landing/new-patients.svg" alt="" />
                  </span>
                  <h3 className="font-medium text-[#000000] text-2xl lg:text-3xl mb-[10px] ">Multiple languages</h3>
                  <p className="text-[#303030] text-base">English, Spanish, French, Arabic, Urdu, Hindi</p>
                </div>
                {/* Card 3: Comprehensive Care */}
                <div className="rounded-xl border border-[#83C1AC] bg-white shadow-sm flex flex-col items-center justify-between px-5 py-5 text-center hover:shadow-lg transition">
                  <span className="inline-flex h-14 w-14 items-center justify-center mb-4">
                    {/* icon: comprehensive care */}
                    <img src="/images/landing/new-patients.svg" alt="" />
                  </span>
                  <h3 className="font-medium text-[#000000] text-2xl lg:text-3xl mb-[10px] ">Comprehensive Care</h3>
                  <p className="text-[#303030] text-base">Chronic conditions preventive health & more</p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section
        <ValuesSection
          title="Our Values"
          values={values}
        /> */}


          {/* Registration Process Section */}
          {/* <RegistrationProcessSection /> */}

          {/* Meet Our Doctors */}
          <DoctorsSection
            title="Meet Our Female Doctors"
            description={<>Our diverse team of male and female family doctors provides care in multiple languages. Each doctor brings years of <br />experience in family medicine, chronic condition management, and preventive health</>}
            femaleDoctors={femaleDoctors}
            maleDoctors={maleDoctors}
            showCategories={false}
            useCarousel={true}
            customButtons={[
              {
                text: "Call: 587-391-8188",
                link: "tel:587-391-8188",
                icon: "/icons/btn_phone-outline-icon.svg",
                variant: "default",
                className: "bg-[#299470] hover:bg-[#2D7B6F] text-white text-lg"
              },
              {
                text: "Meet Our Doctors",
                link: "/meet-our-doctors",
                icon: "/icons/uil-arrow-up-right-grn.svg",
                variant: "outline",
                className: "border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg"
              }
            ]}
          />

          {/* Patient Experience */}
          <TestimonialsSection
            title="Patient Experience"
            subtitle={
              <>
                At Now Medical Clinic, our doctors treat a wide range of medical conditions <br />
                so you can skip the ER and get real help today.
              </>
            }
            bottomText="Watch why Calgary trusts Now Medical Clinic for fast, professional care."
            testimonials={testimonials}
            customButtonText="See What Patients Are Saying"
            customButtonLink="/reviews"
          />

        {/* New pages Section */}
         <WhyChooseSection
            title={<>Walk-In Clinics by Area</>}
            subtitle=""
            items={NewPages}
            image={Family_img}
            btn_1_text="Call: 587-391-8188"
            btn_1_link="tel:587-391-8188"
            btn_1_icon="/icons/solar_phone-outline.svg"
            order="order-first"
            h2_color_1="text-[#299470]"
            h2_color_2="text-[#303030]"
            singleButton={true}
          /> 

          {/* Find Us Section */}
          <FindUsSection
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

          {/* CTA Banner */}
          {/* <CTABannerSection
          title="Walk In Today We're Open Late Weekend and Holidays"
        /> */}
        </main>

        <Footer />
      </div>
    </>
  );
}
