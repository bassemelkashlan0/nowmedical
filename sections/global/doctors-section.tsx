import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

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
    <Card key={index} className="overflow-hidden">
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
        <img
          src={doctor.avatar}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-[#4A9B8E] font-medium mb-1">{doctor.specialty}</p>
        <h3 className="text-xl font-bold mb-2">
          {doctor.name}
          {doctor.language && (
            <span className="text-sm font-normal text-gray-500 ml-2">
              ({doctor.language})
            </span>
          )}
        </h3>
        <p className="text-gray-600 mb-4">{doctor.description}</p>
        <Button className="w-full bg-[#4A9B8E] hover:bg-[#3d8375]">
          <Phone className="w-4 h-4 mr-2" />
          Call 587-391-8188
        </Button>
      </div>
    </Card>
  );

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          {title.split(' ')[0]} <span className="text-[#4A9B8E]">{title.split(' ').slice(1).join(' ')}</span>
        </h2>

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
          <Button className="bg-[#4A9B8E] hover:bg-[#3d8375]">
            <Phone className="w-4 h-4 mr-2" />
            Call 587-391-8188
          </Button>
          <Button variant="outline" className="border-[#4A9B8E] text-[#4A9B8E]">
            Register as New Patient
          </Button>
        </div>
      </div>
    </section>
  );
}

