import { Header } from "@/components/header";
import { LiveStatusBanner } from "@/components/live-status-banner";
import { Footer } from "@/components/footer";
import hero_img from "@/public/images/hospital-peter/hospital-peter-banner.png";
import phone_icon from "@/public/icons/solar_phone-outline.svg";
import walk_icon from "@/public/icons/solar_walking-outline.svg";
import location_icon from "@/public/icons/pin-outline-icon.svg";
import whyChoose_img from "@/public/images/hospital-peter/why-us.png"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ConditionsSection, FindUsSection, WhyChooseSection } from "@/sections";
import BottomCallAction from "@/components/ui/bottom-call-acction";


export default function HospitalPeterLougheed() {
    const whyChooseItems = [
        {
            text: "Open late every day Until 11:00 PM evenings, weekends & holidays",
        },
        {
            text: "Fast Walk-in",
        },
        {
            text: "Real doctors on-site",
        },
        {
            text: "Convenient Calgary location with free parking",
        }
    ]
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

    return (
        <>
            <Header />
            <LiveStatusBanner />
            <main>
                {/* Hero Section with Banner */}
                <section className="bg-[#F1F9F4] to-white py-11">
                    <div className="container">
                        <div className="grid gap-4 lg:grid-cols-[55%_44%] lg:gap-4 items-center  ">
                            <div>
                                <h1 className="text-[#299470] font-bold tracking-tight lg:text-6xl mb-4">
                                    <span className="text-[#303030]">Walk-In Clinic </span>
                                    <br />
                                    Near Peter Lougheed Centre
                                    <br />
                                    <span className="text-[#303030]">Open 7 Days Until 11 PM</span>
                                </h1>

                                <p className=" text-3xl text-[#303030] mb-4 font-medium ">Including Weekend and Holidays </p>

                                <p className="text-base  text-[#303030] mb-4">
                                    Need medical care and want to skip long ER waits? Walk in and see a real family doctor today <br />
                                    <b>No Appointment needed.</b>
                                </p>


                                <div className="flex flex-col pt-9 sm:flex-row gap-4">
                                    <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white text-base font-bold" asChild>
                                        <Link href="/walk-in-clinic-calgary"> <img src={walk_icon.src} alt="Register as a new patient" className="w-5 h-5" /> Walk In Now </Link>
                                    </Button>

                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-[#299470] border-1 text-[#299470] hover:bg-[#299470]/10 bg-transparent text-base font-bold"
                                        asChild
                                    >
                                        <Link href="tel:587-391-8188"> <img src={phone_icon.src} alt="Walk In Now" className="w-5 h-5" /> 587-391-8188 </Link>
                                    </Button>

                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-[#299470] border-1 text-[#299470] hover:bg-[#299470]/10 bg-transparent text-base font-bold"
                                        asChild
                                    >
                                        <Link href="#"> <img src={location_icon.src} alt="Walk In Now" className="w-5 h-5" /> Get Direction </Link>
                                    </Button>
                                </div>

                            </div>

                            <div className="flex justify-center items-center">
                                <img
                                    src={hero_img.src}
                                    alt="Now Medical Clinic Calgary doctor"
                                    className="rounded-lg  "
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why choose Section */}
                <WhyChooseSection
                    title="Why "
                    title_2="Choose Us"
                    subtitle=""
                    h2_py=" mb-5"
                    items={whyChooseItems}
                    IsDot={true}
                    image={whyChoose_img.src}
                />

                {/* Coman Medical Section  */}
                <ConditionsSection
                    title="Common Medical Conditions"
                    subtitle="We Treat"
                    para="At Now Medical Clinic, our doctors treat a wide range of medical conditions "
                    para_2="so you can skip the ER and get real help today."
                    conditions={conditions}
                />

                {/* Find Us Section  */}
                <FindUsSection
                    bgColor=" "
                />
                <div className="mt-14"></div>
                {/* Bottom Call to Action Section  */}
                <BottomCallAction
                    title=" Walk In Today We’re Open Late Weekend and Holidays"
                />


            </main>

            <Footer />
        </>
    )
}