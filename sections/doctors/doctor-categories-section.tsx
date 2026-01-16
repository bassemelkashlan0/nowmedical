'use client'

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel';
import { useState, useEffect } from 'react';

interface Doctor {
  name: string;
  avatar: string;
  specialty: string;
  description: string;
  phone?: string;
  language?: string;
}

interface DoctorCategoriesSectionProps {
  title?: string;
  femaleDoctors: Doctor[];
  maleDoctors: Doctor[];
  sec_py? : string

}

export default function DoctorCategoriesSection({
  title = "Meet Our Doctors",
  femaleDoctors,
  maleDoctors,
  sec_py
}: DoctorCategoriesSectionProps) {
  const [femaleApi, setFemaleApi] = useState<CarouselApi>();
  const [maleApi, setMaleApi] = useState<CarouselApi>();
  const [femaleCanScrollPrev, setFemaleCanScrollPrev] = useState(false);
  const [femaleCanScrollNext, setFemaleCanScrollNext] = useState(false);
  const [maleCanScrollPrev, setMaleCanScrollPrev] = useState(false);
  const [maleCanScrollNext, setMaleCanScrollNext] = useState(false);

  useEffect(() => {
    if (!femaleApi) return;
    setFemaleCanScrollPrev(femaleApi.canScrollPrev());
    setFemaleCanScrollNext(femaleApi.canScrollNext());

    femaleApi.on('select', () => {
      setFemaleCanScrollPrev(femaleApi.canScrollPrev());
      setFemaleCanScrollNext(femaleApi.canScrollNext());
    });
  }, [femaleApi]);

  useEffect(() => {
    if (!maleApi) return;
    setMaleCanScrollPrev(maleApi.canScrollPrev());
    setMaleCanScrollNext(maleApi.canScrollNext());

    maleApi.on('select', () => {
      setMaleCanScrollPrev(maleApi.canScrollPrev());
      setMaleCanScrollNext(maleApi.canScrollNext());
    });
  }, [maleApi]);

  const renderDoctorCard = (doctor: Doctor, index: number) => (
    <Card key={index} className="bg-white overflow-hidden p-0 gap-0 shadow-[0px_10px_14px_0px_#0000000D]">
      <div className="aspect-square bg-[#EAF4F1] relative rounded-t-lg overflow-hidden">
        <img
          src={doctor.avatar}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 bg-white">
        <p className="text-m text-[#050505] font-medium mb-2">{doctor.specialty}</p>
        <h3 className="text-2xl font-medium mb-3">
          {doctor.name}
          {doctor.language && (
            <span className="text-sm font-normal text-gray-500 ml-2">
              ({doctor.language})
            </span>
          )}
        </h3>
        <p className="text-sm text-[#050505] mb-3 min-h-[20px]">{doctor.description}</p>
        <a 
          href={`tel:+1${(doctor.phone || '587-391-8188').replace(/\D/g, '')}`}
          className="block w-full cursor-pointer"
        >
          <Button className="w-full bg-[#299470] hover:bg-[#2D7B6F] text-white text-lg">
            <Phone className="w-4 h-4 mr-2" />
            Call {doctor.phone || '587-391-8188'}
          </Button>
        </a>
      </div>
    </Card>
  );

  // Group doctors into slides of 4
  const groupDoctorsIntoSlides = (doctors: Doctor[], itemsPerSlide: number = 4) => {
    const slides: Doctor[][] = [];
    for (let i = 0; i < doctors.length; i += itemsPerSlide) {
      slides.push(doctors.slice(i, i + itemsPerSlide));
    }
    return slides;
  };

  const femaleSlides = groupDoctorsIntoSlides(femaleDoctors, 4);
  const maleSlides = groupDoctorsIntoSlides(maleDoctors, 4);

  return (
    <section className={"  bg-white " + ( sec_py ? sec_py : " pt-8  pb-18" ) }>
      <div className="container">
        {/* Female Doctors */}
        {femaleDoctors.length > 0 && (
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-[#303030] mb-8 ">Our Female Family Doctors</h3>
            
            <div className="relative">
              <Carousel 
                setApi={setFemaleApi} 
                className="w-full"
                opts={{
                  align: 'start',
                  loop: false,
                }}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {femaleSlides.map((slide, slideIndex) => (
                    <CarouselItem key={slideIndex} className="pl-2 md:pl-4 basis-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
                        {slide.map((doctor, doctorIndex) =>
                          renderDoctorCard(doctor, slideIndex * 4 + doctorIndex)
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              
              {femaleSlides.length > 1 && (
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    onClick={() => femaleApi?.scrollPrev()}
                    disabled={!femaleCanScrollPrev}
                    className={`p-2 rounded-lg transition-colors ${
                      femaleCanScrollPrev
                        ? 'bg-[#299470] text-white hover:bg-[#2D7B6F]'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => femaleApi?.scrollNext()}
                    disabled={!femaleCanScrollNext}
                    className={`p-2 rounded-lg transition-colors ${
                      femaleCanScrollNext
                        ? 'bg-[#299470] text-white hover:bg-[#2D7B6F]'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Male Doctors */}
        {maleDoctors.length > 0 && (
          <div>
            <h3 className="text-4xl font-bold text-[#303030] mb-6">Our Male Family Doctors</h3>
            
            <div className="relative">
              <Carousel 
                setApi={setMaleApi} 
                className="w-full"
                opts={{
                  align: 'start',
                  loop: false,
                }}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {maleSlides.map((slide, slideIndex) => (
                    <CarouselItem key={slideIndex} className="pl-2 md:pl-4 basis-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {slide.map((doctor, doctorIndex) =>
                          renderDoctorCard(doctor, slideIndex * 4 + doctorIndex)
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              
              {maleSlides.length > 1 && (
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    onClick={() => maleApi?.scrollPrev()}
                    disabled={!maleCanScrollPrev}
                    className={`p-2 rounded-lg transition-colors ${
                      maleCanScrollPrev
                        ? 'bg-[#299470] text-white hover:bg-[#2D7B6F]'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => maleApi?.scrollNext()}
                    disabled={!maleCanScrollNext}
                    className={`p-2 rounded-lg transition-colors ${
                      maleCanScrollNext
                        ? 'bg-[#299470] text-white hover:bg-[#2D7B6F]'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

