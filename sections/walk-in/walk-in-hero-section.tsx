import { Button } from "@/components/ui/button";
import Link from "next/link";

interface WalkInHeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function WalkInHeroSection() {
  return (
    <section className="bg-[#F0F8F0] py-8">
      <div className="container">
        <div className="grid gap-18 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Section - Text Content (60-70% width) */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-foreground mb-5">
               <span className="text-[#299470]">Walk-In Clinic Calgary</span><br/>
              Open 7 Days Until 11 PM
            </h1>
            <p className="text-3xl font-medium text-[#303030] mb-5">
              Including Weekend and Holidays
            </p>
            <p className="text-base text-foreground mb-4">
            Need a doctor today? Walk in anytime — no appointment needed. We’re open 7 days late <b>evenings, weekends, and holidays</b> to help you feel better faster.</p>
            <p className="text-lg font-bold text-foreground">
              Real doctors. Short wait convenient Calgary location
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-12">
              <Button 
                size="lg" 
                className="bg-[#299470] hover:bg-[#2E8B57]/90 text-white font-bold text-lg px-6 py-6 flex items-center gap-2"
                asChild
              >
                <Link href="/services">
                  <img 
                    src="/icons/solar_walking-outline.svg" 
                    alt="" 
                    className="w-5 h-5" 
                  />
                  Walk In Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-[#2E8B57] text-[#2E8B57] hover:bg-transparent bg-transparent font-bold text-lg px-6 py-6 flex items-center gap-2"
                asChild
              >
                <Link href="tel:587-391-8188">
                  <img 
                    src="/icons/solar_phone-outline.svg" 
                    alt="" 
                    className="w-5 h-5" 
                  />
                  587-391-8188
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-[#2E8B57] text-[#2E8B57] hover:bg-transparent bg-transparent font-bold text-lg px-6 py-6 flex items-center gap-2"
                asChild
              >
                <Link href="/contact">
                  <img 
                    src="/icons/pin-outline-icon.svg" 
                    alt="" 
                    className="w-5 h-5" 
                  />
                  Get Direction
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Section - Image with Graphics (30-40% width) */}
          <div className="">
            <div className="relative w-full">              
              {/* Doctor Image */}
              <div className="relative z-30">
                <img
                  src="/images/walk-in/walk-in-banner.png"
                  alt="Doctor at Now Medical Clinic"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

