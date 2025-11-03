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
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-6 text-[#303030]">
          Clinic <span className="text-[#2D7B6F]">Contact Information</span>
        </h2>

        <div className="mb-6">
          <div className="grid md:grid-cols-2 gap-4 md:gap-4 mb-12">
            <Card className="border-1 border-[#83C1AC] rounded-[6px] p-0">
              <div className="p-6 flex items-start gap-6">
                <div className="rounded-lg flex-shrink-0">
                  <Image
                    src="/icons/address.svg"
                    alt="Address"
                    width={54}
                    height={54}
                  />
                </div>
                <div>
                  <h4 className="font-medium text-3xl mb-2 text-[#050505]">Address</h4>
                  <p className="text-[#303030]">{address}</p>
                </div>
              </div>
            </Card>

            <Card className="border-1 border-[#83C1AC] rounded-[6px] p-0">
              <div className="p-6 flex items-start gap-6">
                <div className="rounded-lg flex-shrink-0">
                  <Image
                    src="/icons/phone.svg"
                    alt="Phone"
                    width={54}
                    height={54}
                  />
                </div>
                <div>
                  <h4 className="font-medium text-3xl mb-2 text-[#050505]">Phone</h4>
                  <p className="text-[#303030]">{phone}</p>
                </div>
              </div>
            </Card>
          </div>

          <div className=" grid md:grid-cols-2 gap-4 md:gap-4 ">
            <Card className="border-1 border-[#83C1AC] rounded-[6px] p-0">
              <div className="p-6 flex items-start gap-6">
                <div className="rounded-lg flex-shrink-0">
                  <Image
                    src="/icons/fax.svg"
                    alt="Fax"
                    width={54}
                    height={54}
                  />
                </div>
                <div>
                  <h4 className="font-medium text-3xl mb-2 text-[#050505]">Fax</h4>
                  <p className="text-[#303030]">{fax}</p>
                </div>
              </div>
            </Card>

            <Card className="border-1 border-[#83C1AC] rounded-[6px] p-0">
              <div className="p-6 flex items-start gap-6">
                <div className="rounded-lg flex-shrink-0">
                  <Image
                    src="/icons/email.svg"
                    alt="Email"
                    width={54}
                    height={54}
                  />
                </div>
                <div>
                  <h4 className="font-medium text-3xl mb-2 text-[#050505]">Email</h4>
                  <p className="text-[#303030]">{email}</p>
                </div>
              </div>
            </Card>

          </div>
        </div>

        <div className="mb-12 text-center">
          <p className="text-base md:text-lg font-bold text-[#303030]">
            <span>Hours of Operation:</span> {hours}
          </p>
        </div>

        <div className="flex pt-4 flex-col md:flex-row gap-4 justify-center items-center">
          <Button className="bg-[#299470] hover:bg-[#256358] text-white font-bold px-6 py-6 text-lg">
            <Image
              src="/icons/btn_phone-outline-icon.svg"
              alt="Phone"
              width={20}
              height={20}
              className="mr-2 "
            />
            Call 587-391-8188
          </Button>
          <Button variant="outline" className="border-1 border-[#299470] text-[#299470] hover:bg-[#2D7B6F]/10 px-6 py-6 text-lg font-bold">
            <Image
              src="/icons/btn-walking-outline-icon.svg"
              alt="Walk-in"
              width={20}
              height={20}
              className="mr-2"
            />
            Walk-in Any Time (No Appointment Needed)
          </Button>
          <Button variant="outline" className="border-1 border-[#299470] text-[#299470]  hover:bg-[#2D7B6F]/10 px-6 py-6 text-lg font-bold">
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

