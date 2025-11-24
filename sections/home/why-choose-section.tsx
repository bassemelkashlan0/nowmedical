import { CheckCheck, CheckCircle2, CheckIcon, DotIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';
import { ReactNode } from 'react';


interface WhyChooseItem {
  text: string;
  icon?: React.ReactNode;
}

interface WhyChooseSectionProps {
  title?: string | ReactNode;
  para?: string | ReactNode;
  para_2?: string
  para_after?: string | ReactNode;
  subtitle?: string;
  Sub_desc?: string;
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
  full_bg_btn?: string;
  full_btn_link?: string;
  full_btn_text?: string;
  full_btn_icon?: React.ReactNode;
  full_btn_icon_class?: string;
  order?: string;
  bg_color?: string;
  title_2?: string | ReactNode;
  py?: string;
  IsDot?: boolean;
  h2_color_1?: string;
  h2_color_2?: string;
  h2_sub_color?: string;
  sub_desc_color?: string;
  btn_2_bg?: string;
  btn_2_iconAfter?: boolean;
  singleButton?: boolean;
  btn_1_bg?: string;
  itemsAsParagraph?: boolean;
  address?: string;
  para_color?: string,
  para_mb?: string,
  h2_py?: string,
  col_gap?: string
}

export default function WhyChooseSection({
  title = "Why Choose",
  subtitle = "Now Medical Clinic",
  items,
  Sub_desc,
  para,
  para_2,
  para_after,
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
  full_bg_btn,
  full_btn_link,
  full_btn_text,
  full_btn_icon,
  full_btn_icon_class,
  IsDot,
  py,
  h2_color_1,
  h2_color_2,
  h2_sub_color,
  sub_desc_color,
  btn_2_bg,
  btn_2_iconAfter = false,
  singleButton = false,
  btn_1_bg,
  itemsAsParagraph = false,
  address,
  para_color,
  para_mb,
  h2_py,
  col_gap,
}: WhyChooseSectionProps) {
  return (
    <section className={"  " + (bg_color ? bg_color : "") + (py ? py : " py-10 lg:py-[54px] ")}>
      <div className="container">
        <div className={"grid lg:grid-cols-2  items-center " + ( col_gap ? col_gap : " gap-8 lg:gap-18 ")}>
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
            <h2 className={" text-3xl lg:text-5xl font-bold " + ( h2_py ? h2_py : " mb-4  ") }>
              <span className={" " + (h2_color_1 ? h2_color_1 : ' text-[#303030] ')}>   {title}  </span> <span className={' ' + (h2_color_2 ? h2_color_2 : " text-[#299470] ")}>{title_2}</span> <br /> <span className={(h2_sub_color ? h2_sub_color : "text-[#299470]")}>{subtitle}</span>
            </h2>

            <p className={' text-3xl font-medium mb-2 ' + (sub_desc_color ? sub_desc_color : 'text-[#303030]')}> {Sub_desc} </p>
            <p className={"text-base text-[#303030]  " + (para_color ? para_color : " text-[#303030] ") + " " +
              (para_mb ? para_mb : "mb-6")}>
              {para}
            </p>

            <p className="text-base text-[#303030] mb-4 mt-8 ">
              {para_2}
            </p>

            {itemsAsParagraph ? (
              <div className="mb-7 font-semibold text-lg text-[#303030]">
                {items.map((item, index) => (
                  <p key={index} className="flex items-start gap-3 mb-2">
                    {IsDot ? (
                      <DotIcon className="w-6 h-6 flex-shrink-0 mt-1 -mr-2 text-[#303030]" />
                    ) : (
                      <CheckIcon className="w-6 h-6 text-[#299470] flex-shrink-0 mt-1" />
                    )}
                    <span className="text-lg">{item.text}</span>
                  </p>
                ))}
              </div>
            ) : (
              <ul className="space-y-4 mb-6">
                {items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 font-semibold text-lg text-foreground">

                    {IsDot ? (
                      <DotIcon className="w-6 h-6 flex-shrink-0 mt-1 -mr-2 text-[#303030] " />
                    ) : (
                      <CheckIcon className="w-6 h-6 text-[#299470] flex-shrink-0 mt-1" />
                    )}

                    <span className="text-lg text-[#303030] font-bold ">{item.text}</span>
                  </li>
                ))}
              </ul>
            )}
            {para_after && (
              <p className="text-lg text-foreground mb-4">
                {para_after}
              </p>
            )}
            <Button
              size="lg"
              variant="outline"
              className={"border-[#299470]  text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg  " + (btn_class ? ` ${btn_class}` : "hidden")}
              asChild
            >
              <Link href="/walk-in-clinic">Walk In Now <img src="/icons/uil-arrow-up-right-grn.svg" alt="Walk In Now" className="w-5 h-5" /></Link>
            </Button>

            <Button className={"bg-[#299470] hover:bg-[#256358] text-white font-bold px-4 py-4 text-lg " + (full_bg_btn ? full_bg_btn : "hidden")}>
              <Link href={full_btn_link ? full_btn_link as string : "#"} className='flex items-center' >
                {full_btn_text}
                <Image
                  src={full_btn_icon ? full_btn_icon as string : "/icons/btn_phone-outline-icon.svg"}
                  alt="Phone"
                  width={20}
                  height={20}
                  className={"ml-3 " + (full_btn_icon_class ? full_btn_icon_class : "")}
                />
              </Link>
            </Button>

            {/* Special case: Skip the Wait Walk In Today section - always show call button */}
            {(title === "Skip the Wait" && title_2 === "Walk In Today") ? (
              <div className="pt-4">
                <div className="flex mb-4">
                  <Button className="bg-[#299470] hover:bg-[#2D7B6F] text-white font-bold px-4 py-4 text-lg">
                    <Link href="tel:587-391-8188" className='flex !text-wrap !whitespace-wrap items-center'>
                      <Image
                        src="/icons/btn_phone-outline-icon.svg"
                        alt="Phone"
                        width={20}
                        height={20}
                        className="mr-3 brightness-0 invert"
                      />
                      Call: 587-391-8188
                    </Link>
                  </Button>
                </div>
                {address && (
                  <div className="flex items-center gap-2  inline-flex">
                    <img
                      src="/images/hospital-wait-times/flowbite_map-pin-outline.svg"
                      alt="Location"
                      className="w-5 h-5"
                    />
                    <span className="text-lg text-[#299470] font-bold">{address}</span>
                  </div>
                )}
              </div>
            ) : singleButton ? (
              <div className="pt-4">
                <div className="flex mb-4">
                  <Button variant={btn_1_bg ? "default" : "outline"} className={`${btn_1_bg ? btn_1_bg : 'border-1 border-[#299470] text-[#299470] hover:bg-[#2D7B6F]/10 bg-transparent'} px-4 py-4 text-lg font-bold ${btn_1_bg ? 'text-white hover:opacity-90' : ''}`}>
                    <Link href={btn_1_link ? btn_1_link as string : "#"} className='flex !text-wrap !whitespace-wrap items-center'>
                      <Image
                        src={btn_1_icon ? btn_1_icon as string : "/icons/btn_phone-outline-icon.svg"}
                        alt="Phone"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      {btn_1_text}
                    </Link>
                  </Button>
                </div>
                {address && (
                  <div className="flex items-center gap-2  inline-flex">
                    <img
                      src="/images/hospital-wait-times/flowbite_map-pin-outline.svg"
                      alt="Location"
                      className="w-5 h-5"
                    />
                    <span className="text-lg text-[#299470] font-bold">{address}</span>
                  </div>
                )}
              </div>
            ) : (
              <div className={"  flex-wrap md:flex-nowrap flex-row gap-4  items-center  " + (both_btn ? both_btn : "hidden pt-4")}>
                <Button variant="outline" className={`${btn_1_bg ? btn_1_bg : 'bg-[#299470] hover:bg-[#256358]'} text-white font-bold px-4 py-4 text-lg border-1  border-[#299470] `}>
                  <Link href={btn_1_link ? btn_1_link as string : "#"} className='flex !text-wrap !whitespace-wrap items-center' >
                    <Image
                      src={btn_1_icon ? btn_1_icon as string : "/icons/btn_phone-outline-icon.svg"}
                      alt="Phone"
                      width={20}
                      height={20}
                      className={`mr-3 ${btn_1_bg ? 'brightness-0 invert' : ''}`}
                    />
                    {btn_1_text}
                  </Link>
                </Button>
                <Button variant="outline" className={`${btn_2_text && btn_2_text.length > 25 ? 'md:whitespace-nowrap md:h-[49px]  !whitespace-normal !h-auto min-h-[49px]' : ''} ${btn_2_text && btn_2_text.length > 25 ? 'w-full md:w-auto' : ''} border-1 border-[#299470] text-[#299470] hover:bg-[#2D7B6F]/10 bg-transparent p-[14px] px-4 text-lg font-bold ${btn_2_bg ? btn_2_bg : ''} ${btn_2_text && (btn_2_text.includes("Register as a New Patient") || btn_2_text.includes("Register as a new patient")) ? 'hidden' : ''}`}>
                  <Link href={btn_2_link ? btn_2_link as string : "#"} className={`flex ${btn_2_text && btn_2_text.length > 25 ? 'md:flex-nowrap md:whitespace-nowrap flex-wrap !whitespace-normal' : ''} items-center justify-center text-center ${btn_2_text && btn_2_text.length > 25 ? 'w-full md:gap-0 gap-2 md:py-0 py-1' : ''}`}>
                    {!btn_2_iconAfter && btn_2_icon && (
                      <Image
                        src={btn_2_icon as string}
                        alt="Walk In"
                        width={20}
                        height={20}
                        className={btn_2_text && btn_2_text.length > 25 ? "md:mr-3 flex-shrink-0" : "mr-3"}
                      />
                    )}
                    {btn_2_text && btn_2_text.length > 25 ? (
                      <span className="md:whitespace-nowrap break-words leading-none
line-height-1">{btn_2_text}</span>
                    ) : (
                      btn_2_text
                    )}
                    {btn_2_iconAfter && btn_2_icon && (
                      <Image
                        src={btn_2_icon as string}
                        alt="Walk In"
                        width={20}
                        height={20}
                        className={btn_2_text && btn_2_text.length > 25 ? "md:ml-3 flex-shrink-0" : "ml-3"}
                      />
                    )}
                  </Link>
                </Button>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

