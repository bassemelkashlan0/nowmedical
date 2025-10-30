import { CheckCheck, CheckCircle2, CheckIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface WhyChooseItem {
  text: string;
  icon?: React.ReactNode;
}

interface WhyChooseSectionProps {
  title?: string;
  subtitle?: string;
  items: WhyChooseItem[];
  image?: string;
}

export default function WhyChooseSection({
  title = "Why Choose",
  subtitle = "Now Medical Clinic",
  items,
  image
}: WhyChooseSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-18 items-center">
          {image && (
            <div className="relative overflow-hidden">
              <img
                src={image}
                alt="Why choose Now Medical Clinic - experienced doctors and extended hours in Calgary"
                className="w-full height-[532px] object-cover"
              />
            </div>
          )}
          
          <div>
            <h2 className="text-5xl font-bold mb-4">
              {title} <br/> <span className="text-[#299470]">{subtitle}</span>
            </h2>
            <p className="text-lg text-foreground mb-5">
            We’re here when other clinics are closed and when you need care the most.
            </p>
            <ul className="space-y-4 mb-7">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 font-semibold text-lg text-foreground">
                  <CheckIcon className="w-6 h-6 text-[#299470] flex-shrink-0 mt-1" />
                  <span className="text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              variant="outline"
              className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg"
              asChild
            >
              <Link href="/services">Walk In Now <img src="/icons/uil-arrow-up-right-grn.svg" alt="Walk In Now" className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

