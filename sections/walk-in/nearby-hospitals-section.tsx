import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Hospital {
  name: string;
}

interface NearbyHospitalsSectionProps {
  title?: string;
  subtitle?: string;
  hospitals?: Hospital[];
  image?: string;
  introText?: string;
  conclusionText?: string;
}

export default function NearbyHospitalsSection({
  title = "Nearby",
  subtitle = "Hospitals",
  hospitals = [
    { name: "Foothills Medical Centre" },
    { name: "Peter Lougheed Centre" },
    { name: "Rockyview General Hospital" },
    { name: "South Health Campus" },
    { name: "Alberta Children's Hospital" }
  ],
  image,
  introText = "We frequently help patients looking for faster alternatives near:",
  conclusionText = "Now Medical Clinic is 10-20 minutes from most major hospitals — and always open late."
}: NearbyHospitalsSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold">
            <span className="text-[#303030]">{title}</span> <span className="text-[#299470]">{subtitle}</span>
          </h2>
            <p className="text-base text-[#303030] py-4 ">
              {introText}
            </p>

            <ul className="space-y-3 mb-6">
              {hospitals.map((hospital, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#303030] mt-1">•</span>
                  <span className="text-lg text-[#303030]  font-bold ">{hospital.name}</span>
                </li>
              ))}
            </ul>

            <p className="text-base text-gray-700 mb-6">
              {conclusionText}
            </p>

            {/* Call Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg font-bold"
                asChild
              >
                <Link href="tel:587-391-8188" className="flex items-center gap-2">
                  <img src="/icons/solar_phone-outline.svg" alt="Phone" className="w-5 h-5" />
                  Call: 587-391-8188
                </Link>
              </Button>
            </div>
          </div>
 
          {image && (
            <div className="relative">
              <img
                src={image}
                alt="Now Medical Clinic building exterior located in northeast Calgary"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
}
