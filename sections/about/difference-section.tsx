import { Check } from "lucide-react";

interface DifferenceSectionProps {
  title?: string;
  titleHighlight?: string;
  differences: string[];
  image?: string;
  imageAlt?: string;
}

export default function DifferenceSection({
  title = "What Makes",
  titleHighlight = "Now Medical Clinic",
  differences,
  image = "/images/modern-medical-clinic-reception-area-with-friendly.jpg",
  imageAlt = "Medical clinic reception area"
}: DifferenceSectionProps) {
  return (
    <section className="py-[94]  ">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <img
              src={image}
              alt={imageAlt}
              className="w-full"
            />
          </div>

          <div>
            <h2 className="text-5xl text-[#303030] font-bold mb-6 ">
              {title} <br/><span className="text-[#299470]">{titleHighlight}</span> Different
            </h2>
            <div className="space-y-4">
              {differences.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center flex-shrink-0 mt-0.5">
                    <img src="/images/about-us/uil-check.svg" alt="Check" className="w-6 h-6" />
                  </div>
                  <p className="text-[#303030] text-lg font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

