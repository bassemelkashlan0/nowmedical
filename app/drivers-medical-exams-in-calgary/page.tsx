import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LiveStatusBanner } from "@/components/live-status-banner";
import hero_img from "@/public/images/drivers-medical-exams/drivers-medical-exams-hero.png";
import { FindUsSection, WhyChooseSection } from "@/sections";
import walk_cion from "@/public/icons/solar_walking-outline.svg";
import call_icon from "@/public/icons/solar_phone-outline.svg";
import why_choose_img from "@/public/images/drivers-medical-exams/Image.png";
import BottomCallAction from "@/components/ui/bottom-call-acction";



export default function DriversMedicalExamsInCalgaryScreen() {

    const whyChooseItems = [
        {
            text: "Open 7 Days — Until 11:00 PM"
        },
        {
            text: "Walk-Ins Welcome (no appointment required)"
        },
        {
            text: "Experienced Family Doctors familiar with Class 1–6 medicals"
        },
        {
            text: "Same-Day Completion of Alberta Transportation forms"
        },
        {
            text: "Convenient Calgary location with free parking"
        }

    ];

    return (
        <div>
            <Header />
            <LiveStatusBanner />
            <main>
                {/* Hero Section */}
                <section className="bg-[#F1F9F4] to-white py-10 md:py-[54px]  ">
                    <div className="container">
                        <div className="grid gap-12 lg:grid-cols-[57%_40%] lg:gap-8 items-center">
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl mb-[21px] ">
                                    <span className="text-[#299470]">Driver’s Medical Exams in</span>
                                    <br />
                                    <span className="text-[#303030]">Calgary Walk In or Call Today</span>
                                </h1>

                                <p className="text-base mb-4 text-[#303030] ">
                                    Need your <b>Driver’s Medical Certificate</b> renewed? <br />
                                    At <b>Now Medical Clinic</b> , we make it simple — just <b>walk in 7 days a week until 11 PM.</b> <br />
                                    Our doctors provide <b>Class 1, 2, 3, 4, and 6 commercial driver medical exams</b> for Alberta
                                    <br /> licensing.
                                </p>
                                <p className="text-base  mb-8 text-[#303030] ">
                                    No appointment needed. Fast, friendly, and fully licensed for <b>Transport Canada and Alberta <br /> Transportation</b> requirements.                                </p>
                            </div>

                            <div className="relative ">
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

                {/* why choose section */}
                <WhyChooseSection
                    title="Why Drivers Choose"
                    subtitle="Now Medical Clinic"
                    items={whyChooseItems}
                    both_btn="flex pt-4 "
                    btn_1_text="Walk In for Driver’s Medical "
                    btn_1_icon={walk_cion}
                    btn_1_link="/walk-in-clinic-calgary"
                    btn_2_link="tel:403-457-2222"
                    btn_2_icon={call_icon}
                    btn_2_text="Call to Book Now"
                    image={why_choose_img.src}
                />

                {/* Mind Us  Section */}
                <FindUsSection
                    bgColor=" "
                    IsShowBtn='hidden'
                />

                {/* Bottom Call to Action Section */}
                <div className="mt-14"></div>
                <BottomCallAction
                    title="Driver’s Medical Calgary | Class 1, 2, 3, 4, 6 "
                    title_2="Exams | Walk In or Call"
                    description="Need a driver’s medical in Calgary? Walk in 7 days until 11 PM. Class 1–6 commercial driver exams. Fast, same-day forms. Call 587-391-8188."
                />
            </main>
            <Footer />
        </div>
    );
}   
