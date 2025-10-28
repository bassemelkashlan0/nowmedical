interface StorySectionProps {
  title?: string;
  subtitle?: string;
  content: string[];
  images?: string[];
}

export default function StorySection({
  title = "Our",
  subtitle = "Story",
  content,
  images = []
}: StorySectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          {title} <span className="text-[#4A9B8E]">{subtitle}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-4">
            {content.slice(0, Math.ceil(content.length / 2)).map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          {images[0] && (
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src={images[0]}
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {content.length > 2 && (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {images[1] && (
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src={images[1]}
                  alt="Our Mission"
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
        )}
      </div>
    </section>
  );
}

