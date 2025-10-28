import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

interface WalkInBookSectionProps {
  title?: string;
  subtitle?: string;
}

export default function WalkInBookSection({
  title = "Walk-In or",
  subtitle = "Book a Visit"
}: WalkInBookSectionProps) {
  return (
    <section className="py-12 md:py-16 px-4 bg-[#D4EDE7]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              {title} <span className="text-[#2D7B6F]">{subtitle}</span>
            </h2>

            <p className="text-base md:text-lg text-gray-700 mb-6">
              Whether you need a quick walk-in or prefer to schedule an appointment, 
              we're here to help. Call us at <strong>587-391-8188</strong> for fast service.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#2D7B6F] flex-shrink-0 mt-1" />
                <p className="text-base text-gray-700">
                  <strong>Walk-in any time — no appointment needed</strong>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#2D7B6F] flex-shrink-0 mt-1" />
                <p className="text-base text-gray-700">
                  <strong>Emailing?</strong> clinic@nowmedical.ca for general inquiries (non-urgent)
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-[#2D7B6F] hover:bg-[#256358] text-white px-6 py-6">
                Call 587-391-8188
              </Button>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-white">
            <Image
              src="/images/contact/walk-in-book-visit.png"
              alt="Walk-in or Book a Visit"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

