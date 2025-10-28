import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

interface TestimonialsSectionProps {
  title?: string;
  testimonials: Testimonial[];
  showAll?: boolean;
}

export default function TestimonialsSection({
  title = "What Patients Say",
  testimonials,
  showAll = false
}: TestimonialsSectionProps) {
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 9);

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          {title.split(' ')[0]} <span className="text-[#4A9B8E]">{title.split(' ').slice(1).join(' ')}</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {displayedTestimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <p className="text-gray-700 mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
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

        {!showAll && testimonials.length > 9 && (
          <div className="text-center">
            <button className="px-6 py-2 border border-[#4A9B8E] text-[#4A9B8E] rounded hover:bg-[#4A9B8E] hover:text-white transition-colors">
              Show Less →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

