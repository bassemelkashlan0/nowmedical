import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LiveStatusBanner } from "@/components/live-status-banner";
import phone_icon from "@/public/icons/btn_phone-outline-icon.svg";
import hero_img from "@/public/images/our-services/services-banner.png";
import Populer_img from "@/public/images/our-services/populer-services.png";
import Family_img from "@/public/images/our-services/family-medicine.png";
import Women_helth_img from "@/public/images/our-services/women-health.png";
import Children_img from "@/public/images/our-services/children-family-care.png";
import sexual_img from "@/public/images/our-services/sexual-health-testing.png";
import Vaccionation_img from "@/public/images/our-services/vaccinations-preventive-care.png"
import Precscription_img from "@/public/images/our-services/prescription-services.png"
import whychoose_img from "@/public/images/our-services/why-us.png"
import { FindUsSection, VideoTestimonialsSection, WhyChooseSection } from "@/sections";
import PatientsVideoSection from "@/sections/global/atients-video";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import { YouTubeVideosGrid } from "@/components/youtube-videos-grid";

export default function OurServicesPage() {
    const PopulerServices = [
        {
            text: "Cold, flu, cough, sore throat",
        },
        {
            text: "Fever, sinus infections, allergies",
        },
        {
            text: "Ear infections, pink eye",
        },
        {
            text: "Rashes, burns, or minor injuries",
        },
        {
            text: "Prescription renewals",
        }
    ]
    const FamilyMadicine = [
        {
            text: "Annual check-ups & physicals",
        },
        {
            text: "Chronic disease management (diabetes, hypertension, asthma)",
        },
        {
            text: "Preventive care & lab follow-ups",
        },
        {
            text: "Men’s and women’s health",
        },
        {
            text: "Mental health & stress management",
        }
    ]
    const WomenHelth = [
        {
            text: "Pap tests and cervical screening"
        },
        {
            text: "Birth control consultations"
        },
        {
            text: "Pregnancy testing & early prenatal care"
        },
        {
            text: "Menopause management"
        },
        {
            text: "Breast exams and health checks"
        },
        {
            text: " UTIs, yeast infections, and hormonal care"
        }
    ]
    const ChildrenCare = [
        {
            text: "Fever, ear infections, cough, sore throat"
        },
        {
            text: "Rashes, allergies, asthma"
        },
        {
            text: "School forms & immunizations"
        },
        {
            text: "Growth check-ups and development visits"
        }
    ]
    const sexualHealth = [
        {
            text: "STD / STI testing and treatment"
        },
        {
            text: "HIV screening and prevention advice"
        },
        {
            text: "Birth control and emergency contraception"
        },
        {
            text: "Sexual health counseling"
        }
    ]
    const Vaccinations = [
        {
            text: "Flu shots and COVID vaccines"
        },
        {
            text: "Routine childhood vaccinations"
        },
        {
            text: "Travel vaccines and advice"
        },
        {
            text: "Health risk screening & prevention planning"
        },
    ]
    const prescriptionServices = [
        {
            text: "Prescription refills"
        },
        {
            text: "Medication management for chronic conditions"
        },
        {
            text: "Adjustments and dosage reviews"
        },
        {
            text: " Coordination with your pharmacy "
        }
    ]
    const whyChooseItems = [
        {
            text: "Open 7 Days a Week — Until 11 PM "
        },
        {
            text: "Open on Weekends & Holidays "
        },
        {
            text: " See Real Family Doctors — Not Virtual Chats"
        },
        {
            text: "Walk-Ins Welcome Anytime "
        },
        {
            text: " Located in Calgary with Free Parking "
        },
        {
            text: "Friendly, Multilingual Team (English, Arabic, Urdu, Hindi, Spanish, French) "
        }
    ]

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
            <Header />
            <LiveStatusBanner />
            <main >
                {/* Hero Section with Banner */}
                <section className="bg-[#F1F9F4] to-white py-10 lg:py-[54px] ">
                    <div className="container">
                        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center  ">
                            <div>
                                <h1 className="text-4xl lg:text-5xl xl:text-6xl text-[#299470] font-bold tracking-tight mb-4 lg:mb-[21px] ">
                                    Complete Medical Care
                                    <br />
                                    <span className="text-[#303030]">Walk-In & Family Doctors
                                        in Calgary</span>
                                </h1>
                                <p className="text-base text-[#303030] mb-1">
                                    From everyday illnesses to long-term family care, our doctors provide <b>comprehensive, compassionate medical services</b> open <b>7 days a week until 11 PM,</b> including <b>weekends and holidays.</b>
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-12">
                                    <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white text-base font-bold" asChild>
                                        <Link href="tel:587-391-8188" className="flex items-center gap-2">
                                            <img src={phone_icon.src} alt="Phone" className="w-5 h-5 brightness-0 invert" />
                                            Call: 587-391-8188
                                        </Link>
                                    </Button>

                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-[#299470] border-1 text-[#299470] hover:bg-[#299470]/10 bg-transparent font-bold text-base"
                                        asChild
                                    >
                                        <Link href="/walk-in-clinic" className="flex items-center gap-2">
                                            Walk In Now
                                            <img src="icons/uil-arrow-up-right-grn.svg" alt="Walk In Now" className="w-5 h-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="flex justify-end items-center lg:ml-8 ">
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

                {/* Populer Services */}
                <WhyChooseSection
                    title="Our Most"
                    title_2="Popular Services"
                    subtitle=""
                    para=" Common walk-in visits include: "
                    items={PopulerServices}
                    image={Populer_img.src}
                    both_btn="flex pt-7"
                    btn_1_text="Call: 587-391-8188"
                    btn_1_link="tel:587-391-8188"
                    btn_1_icon="/icons/btn_phone-outline-icon.svg"
                    btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
                    btn_2_text="Walk In Open 7 Days a Week Until 11 PM"
                    btn_2_link="/walk-in-clinic"
                    btn_2_icon="/icons/btn-walking-outline-icon.svg"
                    IsDot={true}
                />

                {/*Family Medicine Section */}
                <WhyChooseSection
                    bg_color="bg-[#F1F9F4]"
                    title="Family"
                    title_2="Medicine"
                    Sub_desc="Looking for a doctor for long-term care?"
                    subtitle=""
                    items={FamilyMadicine}
                    image={Family_img.src}
                    para=" Our family physicians are accepting new patients in Calgary and provide ongoing, personalized medical care for patients of all ages from infants to seniors."
                    para_2="We help with:"
                    both_btn="flex pt-7"
                    btn_1_icon="/icons/btn_phone-outline-icon.svg"
                    btn_1_link="tel:587-391-8188"
                    btn_1_text="Call: 587-391-8188"
                    btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
                    btn_2_icon="/icons/solar_phone-outline.svg"
                    btn_2_link="/walk-in-clinic"
                    btn_2_text="Register as a New Patient"
                    order="order-first"
                    IsDot={true}
                    h2_color_1="text-[#299470]"
                    h2_color_2="text-[#303030]"
                    h2_py='mb-6'
                />

                {/* Women Helth's Section  */}
                <WhyChooseSection
                    title="Women's"
                    title_2=" Health"
                    subtitle=""
                    items={WomenHelth}
                    image={Women_helth_img.src}
                    para=" Our female family doctors provide private and compassionate care for all women's health needs."
                    para_2="Services include:"
                    both_btn="flex pt-7"
                    btn_1_text="Call: 587-391-8188"
                    btn_1_link="tel:587-391-8188"
                    btn_1_icon="/icons/btn_phone-outline-icon.svg"
                    btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
                    btn_2_text="Walk In Now"
                    btn_2_link="/walk-in-clinic"
                    btn_2_icon="/icons/btn-walking-outline-icon.svg"
                    IsDot={true}
                    h2_color_1="text-[#299470]"
                    h2_color_2="text-[#303030]"

                />

                {/* Children’s  Care Section  */}
                <WhyChooseSection
                    bg_color="bg-[#F1F9F4]"
                    title="Children’s"
                    title_2="& Family Care"
                    subtitle=""
                    para=" Your child’s health and comfort are our priority. 
                          Our doctors offer gentle and attentive care for children and youth."
                    para_2="We treat:"
                    items={ChildrenCare}
                    image={Children_img.src}
                    both_btn="flex pt-7"
                    btn_1_icon="/icons/btn_phone-outline-icon.svg"
                    btn_1_link="tel:587-391-8188"
                    btn_1_text="Call: 587-391-8188"
                    btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
                    btn_2_icon="/icons/solar_phone-outline.svg"
                    btn_2_link="/walk-in-clinic"
                    btn_2_text="Register as a New Patient"
                    order="order-first"
                    IsDot={true}
                    h2_color_1="text-[#299470]"
                    h2_color_2="text-[#303030]"

                />

                {/* Sexual Health Section */}
                <WhyChooseSection
                    title="Sexual Health"
                    title_2="& STD Testing"
                    subtitle=""
                    items={sexualHealth}
                    image={sexual_img.src}
                    para="Private, judgment-free, and confidential. Our doctors offer sexual health consultations and testing in a comfortable environment."
                    para_2="We treat:"
                    both_btn="flex pt-2"
                    btn_1_text="Call: 587-391-8188"
                    btn_1_link="tel:587-391-8188"
                    btn_1_icon="/icons/btn_phone-outline-icon.svg"
                    btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
                    btn_2_text="Walk In Now"
                    btn_2_link="/walk-in-clinic"
                    btn_2_icon="/icons/btn-walking-outline-icon.svg"
                    IsDot={true}
                    h2_color_1="text-[#299470]"
                    h2_color_2="text-[#303030]"

                />

                {/*  Vaccinations Section*/}
                <WhyChooseSection
                    bg_color="bg-[#F1F9F4]"
                    title="Vaccinations"
                    subtitle="& Preventive Care"
                    para={
                        <>
                            Stay healthy all year long. <br />
                            We offer immunizations, flu shots, and preventive health consultations for all ages.
                        </>
                    }
                    items={Vaccinations}
                    image={Vaccionation_img.src}
                    both_btn="flex pt-7"
                    btn_1_text="Call: 587-391-8188"
                    btn_1_link="tel:587-391-8188"
                    btn_1_icon="/icons/btn_phone-outline-icon.svg"
                    btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
                    btn_2_text="Walk In Now"
                    btn_2_link="/walk-in-clinic"
                    btn_2_icon="/icons/btn-walking-outline-icon.svg"
                    order="order-first"
                    IsDot={true}

                />

                {/* precscription Section */}
                <WhyChooseSection
                    title="Prescription"
                    title_2="Services"
                    subtitle=""
                    para="Fast prescription renewals and medication reviews to keep your treatment consistent and safe."
                    items={prescriptionServices}
                    image={Precscription_img.src}
                    both_btn="flex pt-2"
                    btn_1_text="Call: 587-391-8188"
                    btn_1_link="tel:587-391-8188"
                    btn_1_icon="/icons/btn_phone-outline-icon.svg"
                    btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
                    btn_2_text="Walk In Now"
                    btn_2_link="/walk-in-clinic"
                    btn_2_icon="/icons/btn-walking-outline-icon.svg"
                    IsDot={true}
                    h2_color_1="text-[#299470]"
                    h2_color_2="text-[#303030]"

                />

                {/* Why Choose */}
                <WhyChooseSection
                    title="Why Calgary Chooses "
                    subtitle="Now Medical Clinic"
                    items={whyChooseItems}
                    image={whychoose_img.src}
                    both_btn="flex pt-2"
                    btn_1_text="Call: 587-391-8188"
                    btn_1_link="tel:587-391-8188"
                    btn_1_icon="/icons/btn_phone-outline-icon.svg"
                    btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
                    btn_2_text="Walk In Now"
                    btn_2_link="/walk-in-clinic"
                    btn_2_icon="/icons/btn-walking-outline-icon.svg"
                    order="order-first"

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

                {/* Find Us Section */}
                <FindUsSection
                    bgColor=" "
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
                <div className="mt-14"></div>
                {/* Call to Action Section  */}
                <BottomCallAction
                    title="Now Medical Clinic Calgary’s Walk-In & Family"
                    title_2="Doctor Clinic, Open 7 Days Until 11 PM."
                    description=" Real Doctors. Real Care. For You and Your Family."
                />

            </main>

            <Footer />
        </>
    )
}