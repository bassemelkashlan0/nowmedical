'use client'

import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel';
import { DotIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Doctor {
  name: string;
  avatar: string;
  specialty: string;
  language?: string;
}

interface MeetOurSliderProps {
  title?: string;
  title_2?: string;
  description?: string;
  items: { text: string }[];
  doctors: Doctor[];
  bgColor?: string;
}

export default function MeetOurSlider({
  title = "Meet Our",
  title_2 = "Female Family Physician",
  description = "Our Female Family doctors areas of expertise include",
  items,
  doctors,
  bgColor = "bg-[#F1F9F4]"
}: MeetOurSliderProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const currentDoctor = doctors[current - 1] || doctors[0];

  return (
    <section className={`${bgColor}  lg:py-16 py-10`}>
      <div className="container w-full">
        <div className="grid md:grid-cols-2 w-full gap-18 items-center">
          {/* Left Section - Text Content */}
          <div className="order-2 w-full overflow-hidden md:order-1">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">
              <span className="text-[#303030]">{title}</span>{' '}
              <span className="text-[#299470]">{title_2}</span>
            </h2>
            
            {description && (
              <p className="text-3xl font-medium text-[#303030] mb-8">
                {description}
              </p>
            )}

            <ul className="space-y-4 mb-7">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 font-semibold text-lg text-[#303030]">
                  <DotIcon className="w-6 h-6 flex-shrink-0 mt-1 -mr-2 text-[#303030]" />
                  <span className="text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
            <div>
              <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white text-base font-bold" asChild>
                <Link href="tel:587-391-8188" className="flex items-center gap-2">
                  <img src="/icons/btn_phone-outline-icon.svg" alt="Phone" className="w-5 h-5 brightness-0 invert" />
                  Call: 587-391-8188
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Section - Doctor Image with Slider */}
          <div className="order-1 md:order-2 flex w-full overflow-hidden flex-col items-center">
            <Carousel setApi={setApi} className="w-full max-w-md">
              <CarouselContent>
                {doctors.map((doctor, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col items-center">
                      {/* Circular Image Frame with Dotted Background */}
                      <div className="relative mb-6 flex items-center justify-center">
                        {/* Outer circular background with dots */}
                        <div className="absolute w-full inset-0 bg-[#F1F9F4] flex items-center justify-center">
                          {/* Dotted Pattern Background */}
                          <div
                            className="absolute inset-0 opacity-60"
                          />
                        </div>
                        {/* Doctor Image - Circular */}
                        <div className="relative z-10 w-full h-full">
                          <img
                            src={doctor.avatar}
                            alt={doctor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Doctor Details */}
                      <div className="text-center mb-6">
                        <p className="text-4xl font-bold text-[#303030] mb-2">
                          {/* {doctor.specialty} */}
                        </p>
                        <p className="text-2xl font-medium text-[#303030]">
                          {/* {doctor.name} */}
                          {/* {doctor.language && ` (${doctor.language})`} */}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {doctors.map((_, index) => (
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
        </div>
      </div>
    </section>
  );
}

