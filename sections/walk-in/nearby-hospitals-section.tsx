import { Card } from '@/components/ui/card';
import { MapPin, Clock } from 'lucide-react';

interface Hospital {
  name: string;
  distance?: string;
  waitTime?: string;
}

interface NearbyHospitalsSectionProps {
  title?: string;
  subtitle?: string;
  hospitals?: Hospital[];
  image?: string;
}

export default function NearbyHospitalsSection({
  title = "Nearby",
  subtitle = "Hospitals",
  hospitals = [
    { name: "Peter Lougheed Centre", distance: "5 min", waitTime: "2-4 hours" },
    { name: "Rockyview General Hospital", distance: "12 min", waitTime: "3-5 hours" },
    { name: "South Health Campus", distance: "18 min", waitTime: "2-3 hours" },
    { name: "Alberta Children's Hospital", distance: "15 min", waitTime: "2-4 hours" }
  ],
  image
}: NearbyHospitalsSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          {title} <span className="text-[#4A9B8E]">{subtitle}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {hospitals.map((hospital, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg mb-2">{hospital.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      {hospital.distance && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{hospital.distance} away</span>
                        </div>
                      )}
                      {hospital.waitTime && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-red-500" />
                          <span className="text-red-500">{hospital.waitTime} wait</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
            
            <div className="bg-[#4A9B8E]/10 p-6 rounded-lg">
              <p className="font-bold text-lg mb-2">
                Skip the wait at Now Medical Clinic!
              </p>
              <p className="text-gray-700">
                Average wait time: <span className="text-[#4A9B8E] font-bold">Under 30 minutes</span>
              </p>
            </div>
          </div>

          {image && (
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src={image}
                alt="Nearby Hospitals"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

