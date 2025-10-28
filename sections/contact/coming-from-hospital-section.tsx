import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

interface ComingFromHospitalSectionProps {
  title?: string;
}

export default function ComingFromHospitalSection({
  title = "Coming from a Hospital Area?"
}: ComingFromHospitalSectionProps) {
  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-gray-100">
            <Image
              src="/images/contact/hospital-area.png"
              alt="Coming from Hospital"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">{title}</h2>
            
            <p className="text-base md:text-lg text-gray-700 mb-6">
              If you are coming to the walk-in clinic from a hospital or have 
              already been to a hospital, we are here to help expedite your 
              visit and ensure a seamless experience. We're open 7 days a week 
              until 11 PM. If you'd need a doctor, just walk right in.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#2D7B6F] flex-shrink-0 mt-1" />
                <p className="text-base text-gray-700">
                  <strong>Calling?</strong> 587-391-8188 for fast service
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#2D7B6F] flex-shrink-0 mt-1" />
                <p className="text-base text-gray-700">
                  <strong>Walking in any time —</strong> no appointment needed
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#2D7B6F] flex-shrink-0 mt-1" />
                <p className="text-base text-gray-700">
                  <strong>Emailing?</strong> clinic@nowmedical.ca for general inquiries (non-urgent)
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#2D7B6F] hover:bg-[#256358] text-white px-6 py-6">
                Call 587-391-8188
              </Button>
              <Button variant="outline" className="border-2 border-[#2D7B6F] text-[#2D7B6F] hover:bg-[#2D7B6F]/10 px-6 py-6">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

