import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonConfig {
  text: string;
  link: string;
  icon?: string;
  variant?: "default" | "outline";
  className?: string;
  target?: string;
}

interface WalkInHeroSectionProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  titleClassName?: string;
  subtitleClassName?: string;
  description?: ReactNode;
  additionalText?: ReactNode;
  buttons?: ButtonConfig[];
  image?: string;
  imageAlt?: string;
  bgColor?: string;
  className?: string;
}

export default function WalkInHeroSection({
  title = (
    <>
      <span className="text-[#299470]">Walk-In Clinic Calgary</span>
      <br />
      Open Today <span className="whitespace-nowrap">Until 11 PM</span> | Near You
      <br />
      No Appointment Needed
    </>
  ),
  subtitle = (
    <>
      Open 7 days <span className="whitespace-nowrap">Until 11 PM</span>
      <br />
      Including Weekends and Holidays
    </>
  ),
  titleClassName = "text-4xl lg:text-5xl xl:text-6xl font-bold text-[#303030] tracking-tight mb-4 lg:mb-[21px]",
  subtitleClassName = "text-2xl lg:text-3xl font-medium text-[#303030] mb-[21px] leading-tight",
  description = (
    <>
      Need a doctor today? Walk in anytime — no appointment needed. <br /> We're open 7 days late <b>evenings, weekends, and holidays</b> to help you feel better faster.
    </>
  ),
  additionalText = "Real doctors. Short wait convenient Calgary location",
  buttons = [
    {
      text: "Call: 587-391-8188",
      link: "tel:587-391-8188",
      icon: "/icons/btn_phone-outline-icon.svg",
      variant: "default" as const,
    },
    {
      text: "Get Direction",
      link: "https://maps.app.goo.gl/cL3Y6A4iHoaXZ8jv6",
      icon: "/icons/pin-outline-icon.svg",
      variant: "outline" as const,
      target: "_blank",
    }
  ],
  image = "/images/walk-in/walk-in-banner.png",
  imageAlt = "Doctor at Now Medical Clinic",
  bgColor = "bg-[#F0F8F0]",
  className = ""
}: WalkInHeroSectionProps) {
  return (
    <section className={`${bgColor} py-10 lg:py-[54px]  ${className}`}>
      <div className="container">
        <div className="grid  gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Section - Text Content (60-70% width) */}
          <div className="space-y-4">
            <h1 className={titleClassName}>
              {title}
            </h1>
            {subtitle && (
              <h2 className={subtitleClassName}>
                {subtitle}
              </h2>
            )}
            {description && (
              <p className="text-base text-[#303030] mb-1 ">
                {description}
              </p>
            )}
            {additionalText && (
              <p className=" mb-0 text-lg font-bold text-[#050505] ">
                {additionalText}
              </p>
            )}

            {/* Buttons */}
            {buttons && buttons.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 pt-12">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    size="lg"
                    variant={button.variant || "default"}
                    className={`${
                      button.className ||
                      (button.variant === "outline"
                        ? "border border-[#2E8B57] text-[#2E8B57] hover:bg-[#299470]/10 bg-transparent font-bold text-lg px-6 py-6 flex items-center gap-2"
                        : "bg-[#299470] hover:bg-[#2E8B57]/90 text-white font-bold text-lg px-6 py-6 flex items-center gap-2")
                    } ${button.text && (button.text.includes("Register as a New Patient") || button.text.includes("Register as a new patient")) ? 'hidden' : ''}`}
                    asChild
                  >
                    <Link href={button.link} target={button.target} rel={button.target === "_blank" ? "noopener noreferrer" : undefined}>
                      {button.icon && (
                        <img
                          src={button.icon}
                          alt=""
                          className="w-5 h-5"
                        />
                      )}
                      {button.text}
                    </Link>
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Right Section - Image with Graphics (30-40% width) */}
          <div className="flex items-end justify-end lg:ml-8 ">
            <iframe
              width="100%"
              height="500"
              src="https://youtube.com/embed/VMruVCS172c"
              title="YouTube Shorts Video"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

