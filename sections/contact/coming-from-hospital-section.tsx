import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

interface ComingFromHospitalSectionProps {
  title?: string;
  image?: string;
}

export default function ComingFromHospitalSection({
  title = "Coming from a Hospital Area?",
  image
}: ComingFromHospitalSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {image && (
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src={image}
                alt="Hospital Alternative"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div>
            <h2 className="text-4xl font-bold mb-6">{title}</h2>
            
            <p className="text-lg text-gray-600 mb-6">
              If you are coming to the clinic from a hospital or have already been 
              seen at a hospital, please let us know when you arrive. We can help 
              expedite the process and get you the care you need.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#4A9B8E] flex-shrink-0 mt-1" />
                <span className="text-lg">
                  <strong>Calling?</strong> 587-391-8188 for fast service
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#4A9B8E] flex-shrink-0 mt-1" />
                <span className="text-lg">
                  <strong>Walking in any time —</strong> no appointment needed
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#4A9B8E] flex-shrink-0 mt-1" />
                <span className="text-lg">
                  <strong>Emailing?</strong> clinic@nowmedical.ca for general inquiries (non-urgent)
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-[#4A9B8E] hover:bg-[#3d8375]">
                <Phone className="w-4 h-4 mr-2" />
                Call 587-391-8188
              </Button>
              <Button variant="outline" className="border-[#4A9B8E] text-[#4A9B8E]">
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

