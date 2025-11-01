import { ReactNode } from 'react';

interface StorySectionProps {
  title?: string;
  subtitle?: string;
  content: (string | ReactNode)[];
  images?: string[];
}

export default function StorySection({
  title = "Our",
  subtitle = "Story",
  content,
  images = []
}: StorySectionProps) {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container">


        <div className="grid md:grid-cols-2 gap-18 items-center mb-12">
        {images[0] && (
            <div className="relative overflow-hidden">
              <img
                src={images[0]}
                alt="Now Medical Clinic team providing compassionate healthcare to Calgary community"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="space-y-4 pl-6">
          <h2 className="text-5xl font-bold mb-4">
          {title} <span className="text-[#4A9B8E]">{subtitle}</span>
        </h2>
            {content.map((paragraph, index) => (
              <p key={index} className="text-lg text-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          

        </div>

        {/* {content.length > 2 && (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {images[1] && (
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src={images[1]}
                  alt="Medical professionals delivering quality healthcare services in Calgary"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="space-y-4">
              {content.slice(Math.ceil(content.length / 2)).map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
}

