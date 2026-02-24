import { MapPin, Clock, Phone as PhoneIcon, ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface FindUsSectionProps {
  mapEmbedUrl?: string;
  bgColor?: string;
  IsShowBtn?: string;
  customButtons?: ReactNode;
  showFreeParking?: boolean;
  dairection?: string;
  // Heading (two-color)
  titlePart1?: string;   // green part (left)
  titlePart2?: string;   // dark part (right)
  // Info labels
  addressLabel?: string;
  addressValue?: string;
  hoursLabel?: string;
  hoursValue?: string;
  phoneLabel?: string;
  phoneValue?: string;
  // Default button text
  defaultBtnText?: string;
  freeParkingLabel?: string;
}

export default function FindUsSection({
  bgColor,
  IsShowBtn,
  customButtons,
  dairection,
  showFreeParking = false,
  mapEmbedUrl = "https://maps.google.com/maps?q=2520%2023%20St%20NE%20%2319,%20Calgary,%20AB%20T2E%208L2&t=&z=15&ie=UTF8&iwloc=&output=embed",
  titlePart1 = "Find Us",
  titlePart2 = "& Hours",
  addressLabel = "Address",
  addressValue = "2520 23 St NE #19, Calgary, AB T2E 8L2",
  hoursLabel = "Hours",
  hoursValue = "7:30 AM – 11:00 PM (Open 7 Days Including Weekends & Holidays)",
  phoneLabel = "Phone",
  phoneValue = "587-391-8188",
  defaultBtnText = "Get Direction on Google Map",
  freeParkingLabel = "Free Parking Available",
}: FindUsSectionProps) {
  return (
    <section className={" py-10 lg:py-[54px] " + (bgColor ? bgColor : "bg-[#F4FBF8]")}>
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-5xl text-[#303030] font-bold text-center mb-8">
          <span className="text-[#299470]">{titlePart1}</span>{titlePart2 ? ` ${titlePart2}` : ""}
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
          <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center md:pl-12">
            {/* Address */}
            <div className="flex items-start gap-5 mb-2">
              <span className="mt-1">
                <MapPin className="w-8 h-8 text-[#299470]" />
              </span>
              <div>
                <div className="text-2xl lg:text-3xl text-[#303030] font-medium mb-1">{addressLabel}</div>
                <div className="text-[#000000]">{addressValue}</div>
              </div>
            </div>
            {/* Hours */}
            <div className="flex items-start gap-5 mb-2">
              <span className="mt-1">
                <Clock className="w-8 h-8 text-[#299470]" />
              </span>
              <div>
                <div className="text-2xl lg:text-3xl text-[#303030] font-medium mb-1">{hoursLabel}</div>
                <div className="text-[#000000]">{hoursValue}</div>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start gap-5 mb-2">
              <span className="mt-1">
                <PhoneIcon className="w-8 h-8 text-[#299470]" />
              </span>
              <div>
                <div className="text-2xl lg:text-3xl text-[#303030] font-medium mb-1">{phoneLabel}</div>
                <div className="text-[#000000]">{phoneValue}</div>
              </div>
            </div>
            {/* Free Parking */}
            {showFreeParking && (
              <div className="flex items-start gap-5 mb-2">
                <span className="mt-1">
                  <img
                    src="/icons/parking.svg"
                    alt="Parking"
                    className="w-8 h-8"
                  />
                </span>
                <div>
                  <div className="text-2xl lg:text-3xl text-[#303030] font-medium mb-1">
                    {freeParkingLabel}
                  </div>
                </div>
              </div>
            )}
            {customButtons ? (
              <div className="flex flex-wrap flex-row gap-4 pt-4">
                {customButtons}
              </div>
            ) : (
              <div className="inline-flex">
                <a
                  href={dairection ? dairection : "https://maps.app.goo.gl/cL3Y6A4iHoaXZ8jv6"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={" items-center gap-2 mt-2 px-6 py-3 bg-[#299470] hover:bg-[#256358] text-white font-bold " + (IsShowBtn ? IsShowBtn : " inline-flex")}
                >
                  {defaultBtnText}
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

