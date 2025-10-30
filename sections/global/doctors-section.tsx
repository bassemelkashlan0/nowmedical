import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Link from "next/link";

interface Doctor {
  name: string;
  avatar: string;
  specialty: string;
  description: string;
  phone?: string;
  language?: string;
}

interface DoctorsSectionProps {
  title?: string;
  femaleDoctors?: Doctor[];
  maleDoctors?: Doctor[];
  showCategories?: boolean;
}

export default function DoctorsSection({
  title = "Meet Our Doctors",
  femaleDoctors = [],
  maleDoctors = [],
  showCategories = true
}: DoctorsSectionProps) {
  const renderDoctorCard = (doctor: Doctor, index: number) => (
    <Card key={index} className="overflow-hidden p-0 gap-0">
      <div className="aspect-square bg-[#EAF4F1] relative">
        <img
          src={doctor.avatar}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-m text-[#050505] font-medium mb-2">{doctor.specialty}</p>
        <h3 className="text-2xl font-medium mb-3">
          {doctor.name}
          {doctor.language && (
            <span className="text-sm font-normal text-gray-500 ml-2">
              ({doctor.language})
            </span>
          )}
        </h3>
        <p className="text-gray-600">{doctor.description}</p>
        {/* <Button className="w-full bg-[#4A9B8E] hover:bg-[#3d8375]">
          <Phone className="w-4 h-4 mr-2" />
          Call 587-391-8188
        </Button> */}
      </div>
    </Card>
  );

  return (
    <section className="py-16 px-4 md:px-8 bg-[#F1F9F4]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">
          {title.split(' ')[0]} <span className="text-[#4A9B8E]">{title.split(' ').slice(1).join(' ')}</span>
        </h2>
        <p className="text-[16px] text-center mb-8">Our diverse team of male and female family doctors provides care in multiple languages. Each doctor brings years of <br />experience in family medicine, chronic condition management, and preventive health</p>

        {showCategories && femaleDoctors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Our Female Family Doctors</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {femaleDoctors.map(renderDoctorCard)}
            </div>
          </div>
        )}

        {showCategories && maleDoctors.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Male Family Doctors</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {maleDoctors.map(renderDoctorCard)}
            </div>
          </div>
        )}

        {!showCategories && (
          <div className="grid md:grid-cols-4 gap-6">
            {[...femaleDoctors, ...maleDoctors].map(renderDoctorCard)}
          </div>
        )}

        <div className="flex gap-4 justify-center mt-8">
          {/* <Button className="bg-[#4A9B8E] hover:bg-[#3d8375]">
            <Phone className="w-4 h-4 mr-2" />
            Call 587-391-8188
          </Button> */}
                  <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white text-lg" asChild>
                    <Link href="/walk-in-clinic-calgary">Register as a New Patient Today</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg"
                    asChild
                  >
                    <Link href="/services">Meet Our Doctors <img src="/icons/uil-arrow-up-right-grn.svg" alt="Walk In Now" className="w-5 h-5" /></Link>
                  </Button>
        </div>
      </div>
    </section>
  );
}

