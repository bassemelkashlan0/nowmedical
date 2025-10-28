import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Printer, Clock } from 'lucide-react';

interface ContactInfoSectionProps {
  title?: string;
  subtitle?: string;
  address?: string;
  phone?: string;
  fax?: string;
  email?: string;
  hours?: string;
}

export default function ContactInfoSection({
  title = "Contact Now",
  subtitle = "Medical Clinic in Calgary",
  address = "2520 23 St NE #19, Calgary, AB T2E 8L2",
  phone = "587-391-8188",
  fax = "587-391-7254",
  email = "clinic@nowmedical.ca",
  hours = "7:30 AM - 11:00 PM (Everyday / 7 Days a Week, Weekends & Holidays Included)"
}: ContactInfoSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          {title}
        </h2>
        <h3 className="text-3xl font-bold text-center mb-4">
          <span className="text-[#4A9B8E]">{subtitle}</span>
        </h3>
        <p className="text-xl text-center mb-12">
          Open 7 Days Until 11 PM
        </p>

        <h3 className="text-2xl font-bold text-center mb-8">
          Clinic <span className="text-[#4A9B8E]">Contact Information</span>
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#4A9B8E] p-3 rounded-full">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Address</h4>
                <p className="text-gray-600">{address}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#4A9B8E] p-3 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Phone</h4>
                <p className="text-gray-600">{phone}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#4A9B8E] p-3 rounded-full">
                <Printer className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Fax</h4>
                <p className="text-gray-600">{fax}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#4A9B8E] p-3 rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Email</h4>
                <p className="text-gray-600">{email}</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="bg-[#4A9B8E]/5 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-[#4A9B8E] mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-2">Hours of Operation</h4>
              <p className="text-gray-700">{hours}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Button className="bg-[#4A9B8E] hover:bg-[#3d8375]">
            <Phone className="w-4 h-4 mr-2" />
            Call 587-391-8188
          </Button>
          <Button variant="outline" className="border-[#4A9B8E] text-[#4A9B8E]">
            Walk-in Any Time (No Appointment Needed)
          </Button>
          <Button variant="outline" className="border-[#4A9B8E] text-[#4A9B8E]">
            <MapPin className="w-4 h-4 mr-2" />
            Get Directions on Google Map
          </Button>
        </div>
      </div>
    </section>
  );
}

