import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface ServiceDetail {
  title: string;
  description: string;
  features: string[];
  image?: string;
}

interface ServiceDetailSectionProps {
  services: ServiceDetail[];
}

export default function ServiceDetailSection({
  services
}: ServiceDetailSectionProps) {
  return (
    <section className="py-10 lg:py-[54px] bg-white">
      <div className="container mx-auto space-y-16 lg:space-y-24">
        {services.map((service, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {index % 2 === 0 ? (
              <>
                {service.image && (
                  <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                    {service.title.includes(' ') ? (
                      <>
                        {service.title.split(' ').slice(0, -1).join(' ')}{' '}
                        <span className="text-[#299470]">
                          {service.title.split(' ').slice(-1)}
                        </span>
                      </>
                    ) : (
                      <span className="text-[#299470]">{service.title}</span>
                    )}
                  </h2>
                  
                  <p className="text-base lg:text-lg text-[#303030] mb-4 lg:mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-[#299470] flex-shrink-0 mt-1" />
                        <span className="text-sm lg:text-base text-[#303030]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white text-base font-bold" asChild>
                      <Link href="tel:587-391-8188" className="flex items-center gap-2">
                        <img src="/icons/btn_phone-outline-icon.svg" alt="Phone" className="w-5 h-5 brightness-0 invert" />
                        Book Now
                      </Link>
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline" 
                      className="border-[#299470] border-1 text-[#299470] hover:bg-[#299470]/10 bg-transparent font-bold text-base" 
                      asChild
                    >
                      <Link href="/" className="flex items-center gap-2">
                        Learn more
                        <img src="/icons/uil-arrow-up-right-grn.svg" alt="Learn more" className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                    {service.title.includes(' ') ? (
                      <>
                        {service.title.split(' ').slice(0, -1).join(' ')}{' '}
                        <span className="text-[#299470]">
                          {service.title.split(' ').slice(-1)}
                        </span>
                      </>
                    ) : (
                      <span className="text-[#299470]">{service.title}</span>
                    )}
                  </h2>
                  
                  <p className="text-base lg:text-lg text-[#303030] mb-4 lg:mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-[#299470] flex-shrink-0 mt-1" />
                        <span className="text-sm lg:text-base text-[#303030]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white text-base font-bold" asChild>
                      <Link href="tel:587-391-8188" className="flex items-center gap-2">
                        <img src="/icons/btn_phone-outline-icon.svg" alt="Phone" className="w-5 h-5 brightness-0 invert" />
                        Book Now
                      </Link>
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline" 
                      className="border-[#299470] border-1 text-[#299470] hover:bg-[#299470]/10 bg-transparent font-bold text-base" 
                      asChild
                    >
                      <Link href="/" className="flex items-center gap-2">
                        Learn more
                        <img src="/icons/uil-arrow-up-right-grn.svg" alt="Learn more" className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {service.image && (
                  <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

