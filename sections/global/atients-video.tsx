import { Card, CardContent } from "@/components/ui/card"

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
    Items:videoTestimonials[];
}


export default function PatientsVideoSection(
    {
        heading_first,
        heading_mid,
        heading_last,
        description,
        Items
    }: PatientsVideoSectionProps
) {

    return (
        <>
            <section className="py-14 bg-white">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-bold mb-4">
                            {heading_first} <span className="text-[#299470]">{heading_mid}</span> {heading_last}
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                                        <h3 className="font-semibold text-lg mb-2">{testimonial.name}</h3>
                                        <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}