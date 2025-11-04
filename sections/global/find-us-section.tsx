import { bg } from "date-fns/locale";
import { MapPin, Clock, Phone as PhoneIcon, ArrowUpRight } from "lucide-react";

interface FindUsSectionProps {
  mapEmbedUrl?: string;
  bgColor?: string;
  IsShowBtn?: string;
}

export default function FindUsSection({
  bgColor,
  IsShowBtn,
  mapEmbedUrl = "https://maps.google.com/maps?q=2520%2023%20St%20NE%20%2319,%20Calgary,%20AB%20T2E%208L2&t=&z=15&ie=UTF8&iwloc=&output=embed"
}: FindUsSectionProps) {
  return (
    <section className={"py-14 " + (bgColor ? bgColor : "bg-[#F4FBF8]")}>
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl font-bold text-center mb-12">
          <span className="text-[#299470]">Find Us</span> &amp; Hours
        </h2>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center">
          {/* Map */}
          <div className="w-full md:w-1/2 max-w-2xl mx-auto md:mx-0">
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
          {/* Info */}
          <div className="w-full md:w-1/2 flex flex-col gap-8 justify-center md:pl-12 mt-10 md:mt-0">
            {/* Address */}
            <div className="flex items-start gap-5 mb-2">
              <span className="mt-1">
                <MapPin className="w-8 h-8 text-[#299470]" />
              </span>
              <div>
                <div className="text-3xl font-medium mb-1">Address</div>
                <div className="text-m">2520 23 St NE #19, Calgary, AB T2E 8L2</div>
              </div>
            </div>
            {/* Hours */}
            <div className="flex items-start gap-5 mb-2">
              <span className="mt-1">
                <Clock className="w-8 h-8 text-[#299470]" />
              </span>
              <div>
                <div className="text-3xl font-medium mb-1">Hours</div>
                <div className="text-m">7:30 AM – 11:00 PM (Open 7 Days  Including Weekends & Holidays)</div>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start gap-5 mb-2">
              <span className="mt-1">
                <PhoneIcon className="w-8 h-8 text-[#299470]" />
              </span>
              <div>
                <div className="text-3xl font-medium mb-1">Phone</div>
                <div className="text-m">587-391-8188</div>
              </div>
            </div>
            <div className="inline-flex">
            {/* Button */}
            <a
              href="https://maps.google.com/maps?q=2520%2023%20St%20NE%20%2319,%20Calgary,%20AB%20T2E%208L2"
              target="_blank"
              rel="noopener noreferrer"
              className={" items-center gap-2 px-6 py-3 bg-[#299470] hover:bg-[#256358] text-white font-bold " + (IsShowBtn ? IsShowBtn : " inline-flex")}
            >
              Get Direction on Google Map
              <ArrowUpRight className="w-5 h-5" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  }
