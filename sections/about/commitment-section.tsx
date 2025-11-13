import { ReactNode } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CommitmentSectionProps {
  title?: string;
  titleHighlight?: string;
  paragraphs: (string | ReactNode)[];
  image?: string;
  imageAlt?: string;
}

export default function CommitmentSection({
  title = "Our Commitment",
  titleHighlight = "to Calgary",
  paragraphs,
  image = "/images/modern-medical-clinic-reception-area-with-friendly.jpg",
  imageAlt = "Medical clinic reception area"
}: CommitmentSectionProps) {
  return (
    <section className="py-[54px] bg-[#F1F9F4]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-[#299470]">{title}</span> <br/><span className="text-[#303030]">{titleHighlight}</span>
            </h2>
            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base text-[#303030] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
            <img
              src={image}
              alt={imageAlt}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

