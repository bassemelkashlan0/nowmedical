import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Arrow_icon from "@/public/icons/uil-arrow-up-right-grn.svg"
import Link from "next/link";

interface videoTestimonials {
    name: string;
    quote: string;
    image: string;
}

interface PatientsVideoSectionProps {
    heading_first?: string;
    heading_mid?: string;
    heading_last?: string;
    description?: string;
    Items: videoTestimonials[];
    btn_show?: string;
    btn_text?: string;
    bg_color?: string;
}


export default function PatientsVideoSection(
    {
        heading_first,
        heading_mid,
        heading_last,
        description,
        Items,
        btn_show,
        btn_text = " See What Patients Are Saying ",
        bg_color
    }: PatientsVideoSectionProps
) {

    return (
        <>
            <section className={"py-[54px]  " + (bg_color ? bg_color : "bg-white")}>
                <div className="container">
                    <div className="text-center mb-6">
                        <h2 className="text-5xl font-bold mb-4">
                            {heading_first} <span className="text-[#299470]">{heading_mid}</span> {heading_last}
                        </h2>
                        <p className="text-xl text-[#303030] max-w-2xl mx-auto">
                            {description}
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                        {Items.map((testimonial, index) => (
                            <Card key={index} className="p-0 overflow-hidden rounded hover:shadow-lg transition-shadow border-1 border-[#83C1AC] hover:bg-[#EAF4F1]">
                                <CardContent className="p-0">
                                    <div className="relative aspect-video bg-gray-100">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-[290px] object-cover"
                                        />
                                    </div>
                                    <div className="py-4 px-4">
                                        <h3 className="font-bold text-[#303030] text-lg mb-3 ">{testimonial.name}</h3>
                                        <p className="text-base text-[#050505] italic">"{testimonial.quote}"</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className={" mx-auto mt-6 justify-center items-center  " + (btn_show ? btn_show : "hidden")}>

                        <Button
                            size="lg"
                            variant="outline"
                            className={" mx-auto border-[#299470] border-1 text-[#299470] hover:bg-[#299470]/10 bg-transparent text-base font-bold "}
                            asChild
                        >
                            <Link href="#">  {btn_text ? btn_text : "See What Patients Are Saying  "}  <img src={Arrow_icon.src} alt="Walk In Now" className="w-5 h-5" /> </Link>
                        </Button>
                    </div>

                </div>
            </section>
        </>
    )
}