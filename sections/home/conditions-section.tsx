import { Card } from '@/components/ui/card';
import { Activity, Heart, Brain, Users, Droplet, Shield, Stethoscope } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Condition {
  category: string;
  icon: React.ReactNode;
  items: string[];
  color?: string;
}

interface ConditionsSectionProps {
  title?: string;
  subtitle?: string;
  para?: string
  para_2?: string
  conditions: Condition[];
  bg_color?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  chronic: <Activity className="w-8 h-8" />,
  urgent: <Stethoscope className="w-8 h-8" />,
  mental: <Brain className="w-8 h-8" />,
  mens: <Heart className="w-8 h-8" />,
  womens: <Heart className="w-8 h-8" />,
  children: <Users className="w-8 h-8" />,
  preventive: <Shield className="w-8 h-8" />
};

export default function ConditionsSection({
  title = "Common Medical Conditions",
  subtitle = "We Treat",
  conditions,
  para,
  para_2,
  bg_color
}: ConditionsSectionProps) {
  return (
    <section className={"py-[54px] px-4 md:px-8  " + (bg_color ? bg_color : "bg-white")}>
      <div className="container mx-auto">
        <div className="">
          <h2 className="text-5xl font-bold text-[#303030] text-center mb-4">
            {title} <br />
            <span className="text-[#299470]">{subtitle}</span>
          </h2>

          <p className='text-xl text-[#303030] font-medium text-center '> {para} </p>
          <p className='text-xl text-[#303030] font-medium text-center '> {para_2} </p>
        </div>

        <div className="grid md:grid-cols-3 mt-6 gap-6">
          {conditions.map((condition, index) => (
            <Card key={index} className="border-1 border-[#83C1AC] p-5 hover:shadow-lg transition-shadow hover:bg-[#EAF4F1] h-full flex-col flex">
              <div className={`inline-flex pb-6 gap-4 items-center`}>
                <div className="text-[#299470]">
                  <img src={condition.icon} alt={condition.category} className="h-full w-full" />
                </div>
                <h3 className="text-3xl font-medium">{condition.category}</h3>
              </div>
              <ul className="space-y-2">
                {condition.items.map((item, idx) => (
                  <li key={idx} className="text-[#303030] flex items-start gap-2">
                    <span className="text-[#303030]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className='w-full text-center justify-center pt-6'>
          <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] font-bold text-white text-lg" asChild>
            <Link href="/walk-in-clinic-calgary">Walk In Anytime- Real Doctors Real care<img src="/icons/uil-arrow-up-right.svg" alt="Register as a new patient" className="w-5 h-5" /></Link>
          </Button>
          <p className='text-[12px] pt-4 text-[#6E6E6E]'>Open Until 11 PM, 7 Days a week Including weekends and Holidays</p>
        </div>
      </div>
    </section>
  );
}

