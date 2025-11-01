import { MapPin, Clock, Phone as PhoneIcon, ArrowUpRight } from "lucide-react";

interface FindUsSectionProps {
  mapEmbedUrl?: string;
}

export default function FindUsSection({
  mapEmbedUrl = "https://maps.google.com/maps?q=2520%2023%20St%20NE%20%2319,%20Calgary,%20AB%20T2E%208L2&t=&z=15&ie=UTF8&iwloc=&output=embed"
}: FindUsSectionProps) {
  return (
    <section className="py-14">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl font-bold text-center mb-8 text-[#303030]">
          <span className="text-[#299470]">Find us </span>  on the Map
        </h2>
        <div className="">
          {/* Map */}
          <div className="w-full">
            <div className="overflow-hidden shadow-sm">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="500"
                style={{ minHeight: 320, border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Now Medical Clinic Location Map"
              />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[#303030] font-normal text-base text-center">
              <b>Free Parking Available </b> | Convenient Calgary Location
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

