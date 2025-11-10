import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonConfig {
  text: string;
  link: string;
  icon?: string;
  variant?: "default" | "outline";
  className?: string;
}

interface WalkInHeroSectionProps {
  title?: ReactNode;
  subtitle?: ReactNode;
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
      <span className="text-[#299470]">Walk-In Clinic Calgary</span><br />
      Open 7 Days Until 11 PM
    </>
  ),
  subtitle = "Including Weekend and Holidays",
  description = (
    <>
      Need a doctor today? Walk in anytime — no appointment needed. <br /> We're open 7 days late <b>evenings, weekends, and holidays</b> to help you feel better faster.
    </>
  ),
  additionalText = "Real doctors. Short wait convenient Calgary location",
  buttons = [
    {
      text: "Walk In Now",
      link: "/services",
      icon: "/icons/solar_walking-outline.svg",
      variant: "default" as const,
    },
    {
      text: "587-391-8188",
      link: "tel:587-391-8188",
      icon: "/icons/solar_phone-outline.svg",
      variant: "outline" as const,
    },
    {
      text: "Get Direction",
      link: "/contact",
      icon: "/icons/pin-outline-icon.svg",
      variant: "outline" as const,
    }
  ],
  image = "/images/walk-in/walk-in-banner.png",
  imageAlt = "Doctor at Now Medical Clinic",
  bgColor = "bg-[#F0F8F0]",
  className = ""
}: WalkInHeroSectionProps) {
  return (
    <section className={`${bgColor} py-11  ${className}`}>
      <div className="container">
        <div className="grid justify-between gap-18 lg:grid-cols-[55%_40%] lg:gap-8 items-center">
          {/* Left Section - Text Content (60-70% width) */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-[#303030] mb-[21px] ">
              {title}
            </h1>
            {subtitle && (
              <p className="text-3xl font-medium text-[#303030] mb-[21px] ">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="text-base text-[#303030] mb-1 ">
                {description}
              </p>
            )}
            {additionalText && (
              <p className=" mb-0 ext-lg font-bold text-[#050505] ">
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
                    className={
                      button.className ||
                      (button.variant === "outline"
                        ? "border border-[#2E8B57] text-[#2E8B57] hover:bg-transparent bg-transparent font-bold text-lg px-6 py-6 flex items-center gap-2"
                        : "bg-[#299470] hover:bg-[#2E8B57]/90 text-white font-bold text-lg px-6 py-6 flex items-center gap-2")
                    }
                    asChild
                  >
                    <Link href={button.link}>
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
          <div className="flex item-end justify-end">
            {image && (
              <div className="">
                <div className="relative w-full">
                  {/* Doctor Image */}
                  <div className="relative z-30">
                    <img
                      src={image}
                      alt={imageAlt}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

