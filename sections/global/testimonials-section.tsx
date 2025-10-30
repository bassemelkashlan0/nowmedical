"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, ArrowUpRight } from "lucide-react";

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
}

export default function TestimonialsSection({
  title = "What Patients Say",
  subtitle = "Our patients share their real experiences and heartfelt feedback about their care journey with us.",
  bottomText = "Watch why Calgary trusts Now Medical Clinic for fast, professional care.",
  testimonials,
  showAllToggle = false,
  customButtonText,
  customButtonLink,
}: TestimonialsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 9);

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-[#4A9B8E]">
          {title.split(" ")[0]}{" "}
          <span className="text-foreground">{title.split(" ").slice(1).join(" ")}</span>
        </h2>

        <p className="text-center text-[20px] text-[#303030] font-medium mb-6">{subtitle}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {displayedTestimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 h-full border border-[#4DA688]">
              <p className="text-gray-700 mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
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
          <p className="text-foreground mb-6">{bottomText}</p>

          {showAllToggle ? (
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 border border-[#4A9B8E] text-[#4A9B8E] font-semibold rounded hover:bg-[#4A9B8E] hover:text-white transition-colors"
            >
              {showAll ? "Show Less →" : "Show All →"}
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
