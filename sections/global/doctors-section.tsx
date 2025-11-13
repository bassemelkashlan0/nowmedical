'use client'

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Link from "next/link";
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel';
import { useState, useEffect, ReactNode } from 'react';

interface Doctor {
  name: string;
  avatar: string;
  specialty: string;
  description: string;
  phone?: string;
  language?: string;
  specialtyClassName?: string;
  nameClassName?: string;
  descriptionClassName?: string;
  cardClassName?: string;
}

interface ButtonConfig {
  text: string;
  link: string;
  icon?: string;
  variant?: "default" | "outline";
  className?: string;
}

interface DoctorsSectionProps {
  title?: string;
  femaleDoctors?: Doctor[];
  maleDoctors?: Doctor[];
  showCategories?: boolean;
  customButtons?: ButtonConfig[];
  description?: string | ReactNode;
  descriptionClassName?: string;
  useCarousel?: boolean;
  bgColor?: string;
  sec_py? :string;
}

export default function DoctorsSection({
  title = "Meet Our Doctors",
  femaleDoctors = [],
  maleDoctors = [],
  showCategories = true,
  customButtons,
  description,
  descriptionClassName,
  useCarousel = false,
  sec_py,
  bgColor = "bg-[#F1F9F4]"
}: DoctorsSectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const allDoctors = [...femaleDoctors, ...maleDoctors];

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const renderDoctorCard = (doctor: Doctor, index: number) => (
    <Card key={index} className={`overflow-hidden p-0 gap-0 shadow-[0px_10px_14px_0px_#0000000D] mb-4 ${doctor.cardClassName || ''}`}>
      <div className="aspect-square bg-[#EAF4F1] relative">
        <img
          src={doctor.avatar}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className={`text-m text-[#050505] font-medium mb-2 ${doctor.specialtyClassName || ''}`}>{doctor.specialty}</p>
        <h3 className={`text-2xl font-medium mb-3 ${doctor.nameClassName || ''}`}>
          {doctor.name}
          {doctor.language && (
            <span className="text-sm font-normal text-gray-500 ml-2">
              ({doctor.language})
            </span>
          )}
        </h3>
        <p className={`${doctor.descriptionClassName || ''}`}>{doctor.description}</p>
        {/* <Button className="w-full bg-[#4A9B8E] hover:bg-[#3d8375]">
          <Phone className="w-4 h-4 mr-2" />
          Call 587-391-8188
        </Button> */}
      </div>
    </Card>
  );

  // Group doctors into slides - showing 4 doctors per slide for desktop view
  const groupDoctorsIntoSlides = (doctors: Doctor[], itemsPerSlide: number = 4) => {
    const slides: Doctor[][] = [];
    for (let i = 0; i < doctors.length; i += itemsPerSlide) {
      slides.push(doctors.slice(i, i + itemsPerSlide));
    }
    return slides;
  };

  const doctorSlides = useCarousel ? groupDoctorsIntoSlides(allDoctors, 4) : [];

  return (
    <section className={`  ${bgColor} ` + (sec_py ? sec_py : "  py-10 lg:py-[54px] ") }>
      <div className="  container mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#299470] text-center mb-4">
          <span>
            <span className="text-[#303030]">
              {title.split(' ')[0]}
            </span>{" "}
            {title.split(' ').slice(1).join(' ')}
          </span>        </h2>
        {description && (
          <div className={`text-center text-[#303030] mb-8 ${descriptionClassName || ''}`}>
            {description}
          </div>
        )}

        {showCategories && femaleDoctors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Our Female Family Doctors</h3>
            <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {femaleDoctors.map(renderDoctorCard)}
            </div>
          </div>
        )}

        {showCategories && maleDoctors.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Male Family Doctors</h3>
            <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {maleDoctors.map(renderDoctorCard)}
            </div>
          </div>
        )}

        {!showCategories && !useCarousel && (
          <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {allDoctors.map(renderDoctorCard)}
          </div>
        )}

        {!showCategories && useCarousel && (
          <div className="relative">
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {doctorSlides.map((slide, slideIndex) => (
                  <CarouselItem key={slideIndex}>
                    <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                      {slide.map((doctor, doctorIndex) =>
                        renderDoctorCard(doctor, slideIndex * 4 + doctorIndex)
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    index + 1 === current
                      ? 'bg-[#299470] w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-4 flex-wrap justify-center mt-8">
          {customButtons ? (
            customButtons.map((button, index) => (
              <Button
                key={index}
                size="lg"
                variant={button.variant || "default"}
                className={`${button.className || (button.variant === "outline"
                  ? "border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg"
                  : "bg-[#299470] hover:bg-[#2D7B6F] text-white text-lg")} ${button.text && (button.text.includes("Register as a New Patient") || button.text.includes("Register as a new patient")) ? 'hidden' : ''}`}
                asChild
              >
                <Link href={button.link} className="flex items-center gap-2">
                  {button.icon && button.text.includes("Call:") && (
                    <Image
                      src={button.icon}
                      alt=""
                      width={20}
                      height={20}
                      className={button.variant === "default" ? "brightness-0 invert" : ""}
                    />
                  )}
                  {button.text}
                  {button.icon && !button.text.includes("Call:") && (
                    <Image
                      src={button.icon}
                      alt=""
                      width={20}
                      height={20}
                      className={button.variant === "outline" ? "" : ""}
                    />
                  )}
                </Link>
              </Button>
            ))
          ) : (
            <>
              <Button size="lg" className="bg-[#299470] font-bold hover:bg-[#2D7B6F] text-white text-lg hidden" asChild>
                <Link href="/walk-in-clinic-calgary">Register as a New Patient Today</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#299470] text-[#299470] font-bold hover:bg-[#299470]/10 bg-transparent text-lg"
                asChild
              >
                <Link href="/meet-our-doctors">Meet Our Doctors <img src="/icons/uil-arrow-up-right-grn.svg" alt="Walk In Now" className="w-5 h-5" /></Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

