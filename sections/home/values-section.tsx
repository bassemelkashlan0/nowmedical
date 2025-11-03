import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import { DotIcon } from 'lucide-react';

interface Value {
  title: string;
  description: string | string[];
  image?: string;
  icon?: string | ReactNode;
}

interface ValuesSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  values: Value[];
  buttonText?: string;
  buttonLink?: string;
  buttonIcon?: string | ReactNode;
  buttonIconClass?: string;
  titleFontWeight?: string;
  useListFormat?: boolean;
}

export default function ValuesSection({
  title = "Our Values",
  subtitle = "Values",
  description,
  values,
  buttonText,
  buttonLink,
  buttonIcon,
  buttonIconClass,
  titleFontWeight = "font-bold",
  useListFormat = false
}: ValuesSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">
          {title} <span className="text-[#299470]">{subtitle}</span>
        </h2>
        {description && (
          <p className="text-base text-center text-foreground mb-6 max-w-3xl mx-auto">
            {description}
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="p-4 text-start hover:shadow-lg hover:bg-[#EAF4F1] transition-shadow border-1 border-[#83C1AC] h-full flex flex-col">
              <div className="inline-flex mb-6">
                {value.icon ? (
                  typeof value.icon === 'string' ? (
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={50}
                      height={50}
                      className="w-[50px] h-[50px]"
                    />
                  ) : (
                    value.icon
                  )
                ) : value.image ? (
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-[50px] h-full"
                  />
                ) : null}
              </div>
              <h3 className={`text-3xl ${titleFontWeight} mb-4`}>{value.title}</h3>
              {useListFormat && Array.isArray(value.description) ? (
                <ul className="text-gray-600 flex-grow space-y-2">
                  {value.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <DotIcon className="w-5 h-5 text-[#299470] flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 flex-grow">{Array.isArray(value.description) ? value.description.join(' ') : value.description}</p>
              )}
            </Card>
          ))}
        </div>

        {buttonText && buttonLink && (
          <div className="flex justify-center mt-8">
            <Button
              size="lg"
              className="bg-[#299470] hover:bg-[#256358] text-white font-bold px-6 py-6 text-lg"
              asChild
            >
              <Link href={buttonLink} className="flex items-center gap-2">
                {buttonText}
                {buttonIcon && (
                  typeof buttonIcon === 'string' ? (
                    <Image
                      src={buttonIcon}
                      alt=""
                      width={20}
                      height={20}
                      className={buttonIconClass || "w-5 h-5"}
                    />
                  ) : (
                    buttonIcon
                  )
                )}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

