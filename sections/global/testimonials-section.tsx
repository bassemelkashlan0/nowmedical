"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, ArrowUpRight } from "lucide-react";
import review_1 from '@/public/images/landing/review_1.png'
import review_2 from '@/public/images/landing/review_2.png'
import review_3 from '@/public/images/landing/review_3.png'

interface Testimonial {
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  bottomText?: string;
  testimonials: Testimonial[];
  showAllToggle?: boolean;
  customButtonText?: string;
  customButtonLink?: string;
  showTitleAndSubtitle?: boolean;
  hideBottomText?: boolean;
  initialCount?: number;
}

export default function TestimonialsSection({
  title = "What Patients Say",
  subtitle = "Our patients share their real experiences and heartfelt feedback about their care journey with us.",
  bottomText = "Watch why Calgary trusts Now Medical Clinic for fast, professional care.",
  testimonials,
  showAllToggle = false,
  customButtonText,
  customButtonLink,
  showTitleAndSubtitle = true,
  hideBottomText = false,
  initialCount = 9,
}: TestimonialsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, initialCount);

  const revie_images = [
    review_1, review_2, review_3
  ]
  return (
    <section className="py-10 lg:py-[54px]  bg-white">
      <div className="container  mx-auto">
        {showTitleAndSubtitle && (
          <>
            <h2 className="text-3xl lg:text-5xl font-bold text-center  mb-4 text-[#4A9B8E]">
              {title.split(" ")[0]}{" "}
              <span className="text-[#303030] ">{title.split(" ").slice(1).join(" ")}</span>
            </h2>

            <p className="text-center text-[20px] text-[#303030] font-medium mb-6">{subtitle}</p>
          </>
        )}

        <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:px-5 ">
          {displayedTestimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 justify-between h-full border border-[#4DA688]">
              <p className="text-[#303030] mb-6">{testimonial.text}</p>
              <div className="flex  items-center gap-3">
                <Avatar className="h-[51px] w-[51px] ">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <img src={testimonial.avatar} alt="img" />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-lg text-[#303030] ">{testimonial.name}</p>
                  <div className="flex gap-1 items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">
                      ({testimonial.rating}.0)
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          {!hideBottomText && <p className="text-[#000000] mb-6">{bottomText}</p>}

          {showAllToggle ? (
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2 border border-[#4A9B8E] text-[#4A9B8E] font-bold hover:bg-[#EAF4F1] transition-colors cursor-pointer"
            >
              {showAll ? "Show Less" : "Show All"}
              <img src="/icons/uil-arrow-up-right-grn.svg" alt="" className="w-5 h-5" />
            </button>
          ) : (
            customButtonText && (
              <a
                href={customButtonLink || "#"}
                className="inline-flex items-center text-lg justify-center px-6 py-2 border border-[#299470] text-[#299470] font-bold hover:bg-[#EAF4F1] transition-colors"
              >
                {customButtonText}
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
