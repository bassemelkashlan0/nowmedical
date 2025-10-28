import { Card } from '@/components/ui/card';
import { Play } from 'lucide-react';

interface VideoTestimonial {
  name: string;
  image: string;
  quote: string;
  videoUrl?: string;
}

interface VideoTestimonialsSectionProps {
  title?: string;
  testimonials: VideoTestimonial[];
  showAll?: boolean;
}

export default function VideoTestimonialsSection({
  title = "What Patients Say",
  testimonials,
  showAll = false
}: VideoTestimonialsSectionProps) {
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 9);

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What <span className="text-[#4A9B8E]">Patients</span> Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {displayedTestimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative aspect-video group cursor-pointer">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 bg-[#4A9B8E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">{testimonial.name}</h4>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            </Card>
          ))}
        </div>

        {!showAll && testimonials.length > 9 && (
          <div className="text-center">
            <button className="px-6 py-3 border border-[#4A9B8E] text-[#4A9B8E] rounded-lg hover:bg-[#4A9B8E] hover:text-white transition-colors">
              Show Less →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

