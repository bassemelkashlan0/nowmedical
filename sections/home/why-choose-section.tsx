import { CheckCheck, CheckCircle2, CheckIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';
import { bg } from 'date-fns/locale';


interface WhyChooseItem {
  text: string;
  icon?: React.ReactNode;
}

interface WhyChooseSectionProps {
  title?: string;
  para?: string
  subtitle?: string;
  items: WhyChooseItem[];
  image?: string;
  btn_1_text?: string;
  btn_2_text?: string;
  btn_1_link?: string;
  btn_2_link?: string;
  btn_1_icon?: React.ReactNode;
  btn_2_icon?: React.ReactNode;
  btn_class?: string;
  both_btn?: string;
  order?: string;
  bg_color?: string;
  title_2?: string; 
  py?: string;
}

export default function WhyChooseSection({
  title = "Why Choose",
  subtitle = "Now Medical Clinic",
  items,
  para,
  image,
  btn_1_icon,
  btn_2_icon,
  btn_1_link,
  btn_2_link,
  btn_1_text,
  btn_2_text,
  btn_class,
  both_btn,
  order,
  bg_color,
  title_2,
  py,
}: WhyChooseSectionProps) {
  return (
    <section className={" px-4 md:px-8 " + (bg_color ? bg_color : "") + (py ? py : " py-4 md:py-14 ")}>
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

          <div className={(order ? order : "")}>
            <h2 className="text-5xl font-bold mb-4">
              {title} <span className='text-[#299470]'>{title_2}</span> <br /> <span className="text-[#299470]">{subtitle}</span>
            </h2>
            <p className="text-lg text-foreground mb-5">
              {para}
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
              className={"border-[#299470]  text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg  " + (btn_class ? ` ${btn_class}` : "hidden")}
              asChild
            >
              <Link href="/services">Walk In Now <img src="/icons/uil-arrow-up-right-grn.svg" alt="Walk In Now" className="w-5 h-5" /></Link>
            </Button>

            <div className={" pt-4 flex-col md:flex-row gap-4  items-center  " + (both_btn ? both_btn : "hidden")}>
              <Button className="bg-[#299470] hover:bg-[#256358] text-white font-bold px-4 py-4 text-lg">
                <Link href={btn_1_link ? btn_1_link as string : "#"}  className='flex' >
                  <Image
                    src={btn_1_icon ? btn_1_icon as string : "/icons/btn_phone-outline-icon.svg"}
                    alt="Phone"
                    width={20}
                    height={20}
                    className="mr-3 "
                  />
                  {btn_1_text}
                </Link>
              </Button>
              <Button variant="outline" className="border-1 border-[#299470] text-[#299470] hover:bg-[#2D7B6F]/10 px-4 py-4 text-lg font-bold">
                <Link href={btn_2_link ? btn_2_link as string : "#"} className='flex'>
                  <Image
                    src={btn_2_icon ? btn_2_icon as string : "/icons/btn_phone-outline-icon.svg"}
                    alt="Phone"
                    width={20}
                    height={20}
                    className="mr-3 "
                  />
                  {btn_2_text}
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

