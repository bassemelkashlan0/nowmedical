import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';

interface Doctor {
  name: string;
  avatar: string;
  specialty: string;
  description: string;
  phone?: string;
  language?: string;
}

interface DoctorCategoriesSectionProps {
  title?: string;
  femaleDoctors: Doctor[];
  maleDoctors: Doctor[];
}

export default function DoctorCategoriesSection({
  title = "Meet Our Doctors",
  femaleDoctors,
  maleDoctors
}: DoctorCategoriesSectionProps) {
  const renderDoctorCard = (doctor: Doctor, index: number) => (
    <Card key={index} className="overflow-hidden shadow-lg p-0">
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
        <img
          src={doctor.avatar}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-base text-foreground mb-2">{doctor.specialty}</p>
        <h3 className="text-2xl font-bold mb-3">
          {doctor.name}
          {doctor.language && (
            <span className="text-sm font-normal text-gray-500 ml-2">
              ({doctor.language})
            </span>
          )}
        </h3>
        <p className="text-gray-600 mb-3">{doctor.description}</p>
        <Button className="w-full bg-[#299470] hover:bg-[#2D7B6F] text-lg">
          <Phone className="w-4 h-4 mr-2" />
          Call 587-391-8188
        </Button>
      </div>
    </Card>
  );

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container">
        {/* <h2 className="text-4xl font-bold text-center mb-16">
          Meet <span className="text-[#4A9B8E]">Our Doctors</span>
        </h2> */}

        {/* Female Doctors */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold mb-8">Our Female Family Doctors</h3>
          
          <div className="relative">
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              {femaleDoctors.slice(0, 4).map(renderDoctorCard)}
            </div>
            
            <div className="flex justify-end gap-2">
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Male Doctors */}
        <div>
          <h3 className="text-4xl font-bold mb-8">Our Male Family Doctors</h3>
          
          <div className="relative">
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              {maleDoctors.slice(0, 4).map(renderDoctorCard)}
            </div>
            
            <div className="flex justify-end gap-2">
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

