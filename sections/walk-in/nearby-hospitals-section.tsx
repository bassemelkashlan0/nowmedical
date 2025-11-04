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
        <h2 className="text-5xl font-bold mb-8">
          <span className="text-[#303030]">{title}</span> <span className="text-[#299470]">{subtitle}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-base text-gray-700 mb-6">
              {introText}
            </p>

            <ul className="space-y-3 mb-6">
              {hospitals.map((hospital, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#299470] mt-1">•</span>
                  <span className="text-base text-gray-800">{hospital.name}</span>
                </li>
              ))}
            </ul>

            <p className="text-base text-gray-700">
              {conclusionText}
            </p>
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
