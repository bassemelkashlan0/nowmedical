import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Phone, Mail, CheckCircle2 } from 'lucide-react';

interface WalkInBookSectionProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

export default function WalkInBookSection({
  title = "Walk-In or",
  subtitle = "Book a Visit",
  image
}: WalkInBookSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          {title} <span className="text-[#4A9B8E]">{subtitle}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Whether you need a quick walk-in or prefer to schedule an appointment, 
              we're here to help. Call us at 587-391-8188 for fast service.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#4A9B8E] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Walk-in any time — no appointment needed</h4>
                  <p className="text-gray-600">
                    Just walk in during our business hours and we'll see you right away.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#4A9B8E] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">
                    Call clinic@nowmedical.ca for general inquiries (non-urgent)
                  </h4>
                  <p className="text-gray-600">
                    For non-urgent questions or general information.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-[#4A9B8E] hover:bg-[#3d8375]">
                <Phone className="w-4 h-4 mr-2" />
                Call 587-391-8188
              </Button>
            </div>
          </div>

          {image && (
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src={image}
                alt="Walk-in or Book"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

