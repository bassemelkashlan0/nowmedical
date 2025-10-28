import { Button } from '@/components/ui/button';
import { CheckCircle2, Phone, MapPin } from 'lucide-react';

interface HospitalAlternativeSectionProps {
  title?: string;
  subtitle?: string;
  benefits?: string[];
  image?: string;
}

export default function HospitalAlternativeSection({
  title = "Near the Hospital?",
  subtitle = "We're a Fast Option",
  benefits = [
    "Walk-in any time — no appointment needed",
    "See a doctor within 30 minutes on average",
    "Experienced doctors for most medical conditions"
  ],
  image
}: HospitalAlternativeSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#1B5E54] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              {title} <span className="text-[#7ED9C8]">{subtitle}</span>
            </h2>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <Button className="bg-white text-[#1B5E54] hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Call 587-391-8188
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>

          {image && (
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src={image}
                alt="Hospital Alternative"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

