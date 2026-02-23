import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LiveStatusBanner } from "@/components/live-status-banner";
import { FindUsSection, WhyChooseSection } from "@/sections";
import why_choose_img from "@/public/images/drivers-medical-exams/Image.png";
import BottomCallAction from "@/components/ui/bottom-call-acction";
import { Button } from "@/components/ui/button";
import Link from "next/link";


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
                <section className="bg-[#F1F9F4] to-white py-10 lg:py-[54px]  ">
                    <div className="container">
                        <div className="grid gap-8 lg:grid-cols-[57%_40%] lg:gap-12 items-center">
                            <div>
                                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 lg:mb-[21px] ">
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
                                
                                <div className="flex flex-col sm:flex-row gap-4">
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
                                        <Link href="/walk-in-clinic" className="flex items-center gap-2">
                                            <img src="/icons/btn-walking-outline-icon.svg" alt="Walk In" className="w-5 h-5" />
                                            Walk In Now
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="relative ">
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

                {/* why choose section */}
                <WhyChooseSection
                    title="Why Drivers Choose"
                    subtitle="Now Medical Clinic"
                    items={whyChooseItems}
                    both_btn="flex pt-4 "
                    btn_1_text="Call: 587-391-8188"
                    btn_1_icon="/icons/btn_phone-outline-icon.svg"
                    btn_1_link="tel:587-391-8188"
                    btn_1_bg="bg-[#299470] hover:bg-[#2D7B6F] text-white"
                    btn_2_text="Walk In for Driver's Medical"
                    btn_2_icon="/icons/btn-walking-outline-icon.svg"
                    btn_2_link="/walk-in-clinic"
                    image={why_choose_img.src}
                />

                {/* Mind Us  Section */}
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
