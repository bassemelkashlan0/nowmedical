import { MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FindUsSectionProps {
  title?: string;
  address?: string;
  hours?: string;
  phone?: string;
  mapEmbedUrl?: string;
}

export default function FindUsSection({
  title = "Find Us & Hours",
  address = "2520 23 St NE #19, Calgary, AB T2E 8L2",
  hours = "7:30 AM – 11:00 PM (Weekends & Holidays Included)",
  phone = "587-391-8188",
  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.8!2d-114.0!3d51.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1"
}: FindUsSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          {title.split('&')[0]}<span className="text-[#4A9B8E]">& {title.split('&')[1]}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden h-[400px]">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-[#4A9B8E] p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Address</h3>
                  <p className="text-gray-600">{address}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-[#4A9B8E] p-3 rounded-full">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Hours</h3>
                  <p className="text-gray-600">{hours}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-[#4A9B8E] p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <p className="text-gray-600">{phone}</p>
                </div>
              </div>
            </div>

            <Button className="w-full bg-[#4A9B8E] hover:bg-[#3d8375]">
              <MapPin className="w-4 h-4 mr-2" />
              Get Directions on Google Map
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

