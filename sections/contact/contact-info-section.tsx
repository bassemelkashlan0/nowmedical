import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ContactInfoSectionProps {
  address?: string;
  phone?: string;
  fax?: string;
  email?: string;
  hours?: string;
}

export default function ContactInfoSection({
  address = "2520 23 St NE #19, Calgary, AB T2E 8L2",
  phone = "587-391-8188",
  fax = "587-391-7254",
  email = "clinic@nowmedical.ca",
  hours = "7:30 AM - 11:00 PM (Everyday / 7 Days a Week, Weekends & Holidays Included)"
}: ContactInfoSectionProps) {
  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Clinic <span className="text-[#2D7B6F]">Contact Information</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6">
          <Card className="border-2 border-gray-100">
            <div className="p-6 flex items-start gap-4">
              <div className="bg-[#2D7B6F] p-3 rounded-lg flex-shrink-0">
                <Image
                  src="/icons/address.svg"
                  alt="Address"
                  width={24}
                  height={24}
                  className="brightness-0 invert"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Address</h4>
                <p className="text-gray-600">{address}</p>
              </div>
            </div>
          </Card>

          <Card className="border-2 border-gray-100">
            <div className="p-6 flex items-start gap-4">
              <div className="bg-[#2D7B6F] p-3 rounded-lg flex-shrink-0">
                <Image
                  src="/icons/phone.svg"
                  alt="Phone"
                  width={24}
                  height={24}
                  className="brightness-0 invert"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Phone</h4>
                <p className="text-gray-600">{phone}</p>
              </div>
            </div>
          </Card>

          <Card className="border-2 border-gray-100">
            <div className="p-6 flex items-start gap-4">
              <div className="bg-[#2D7B6F] p-3 rounded-lg flex-shrink-0">
                <Image
                  src="/icons/fax.svg"
                  alt="Fax"
                  width={24}
                  height={24}
                  className="brightness-0 invert"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Fax</h4>
                <p className="text-gray-600">{fax}</p>
              </div>
            </div>
          </Card>

          <Card className="border-2 border-gray-100">
            <div className="p-6 flex items-start gap-4">
              <div className="bg-[#2D7B6F] p-3 rounded-lg flex-shrink-0">
                <Image
                  src="/icons/email.svg"
                  alt="Email"
                  width={24}
                  height={24}
                  className="brightness-0 invert"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Email</h4>
                <p className="text-gray-600">{email}</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="bg-[#D4EDE7] p-6 rounded-lg mb-8 text-center">
          <p className="text-base md:text-lg font-medium text-gray-700">
            <strong>Hours of Operation:</strong> {hours}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button className="bg-[#2D7B6F] hover:bg-[#256358] text-white px-6 py-6 text-base">
            <Image
              src="/icons/btn_phone-outline-icon.svg"
              alt="Phone"
              width={20}
              height={20}
              className="mr-2 brightness-0 invert"
            />
            Call 587-391-8188
          </Button>
          <Button variant="outline" className="border-2 border-[#2D7B6F] text-[#2D7B6F] hover:bg-[#2D7B6F]/10 px-6 py-6 text-base">
            <Image
              src="/icons/btn-walking-outline-icon.svg"
              alt="Walk-in"
              width={20}
              height={20}
              className="mr-2"
            />
            Walk-in Any Time (No Appointment Needed)
          </Button>
          <Button variant="outline" className="border-2 border-[#2D7B6F] text-[#2D7B6F] hover:bg-[#2D7B6F]/10 px-6 py-6 text-base">
            <Image
              src="/icons/pin-outline-icon.svg"
              alt="Location"
              width={20}
              height={20}
              className="mr-2"
            />
            Get Directions on Google Map
          </Button>
        </div>
      </div>
    </section>
  );
}

