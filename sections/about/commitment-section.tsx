import { ReactNode } from 'react';

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

