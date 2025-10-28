import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

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
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto space-y-24">
        {services.map((service, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {index % 2 === 0 ? (
              <>
                {service.image && (
                  <div className="relative h-[500px] rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div>
                  <h2 className="text-4xl font-bold mb-6">
                    {service.title.includes(' ') ? (
                      <>
                        {service.title.split(' ').slice(0, -1).join(' ')}{' '}
                        <span className="text-[#4A9B8E]">
                          {service.title.split(' ').slice(-1)}
                        </span>
                      </>
                    ) : (
                      <span className="text-[#4A9B8E]">{service.title}</span>
                    )}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#4A9B8E] flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <Button className="bg-[#4A9B8E] hover:bg-[#3d8375]">
                      Book Now
                    </Button>
                    <Button variant="outline" className="border-[#4A9B8E] text-[#4A9B8E]">
                      Learn More
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h2 className="text-4xl font-bold mb-6">
                    {service.title.includes(' ') ? (
                      <>
                        {service.title.split(' ').slice(0, -1).join(' ')}{' '}
                        <span className="text-[#4A9B8E]">
                          {service.title.split(' ').slice(-1)}
                        </span>
                      </>
                    ) : (
                      <span className="text-[#4A9B8E]">{service.title}</span>
                    )}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#4A9B8E] flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <Button className="bg-[#4A9B8E] hover:bg-[#3d8375]">
                      Book Now
                    </Button>
                    <Button variant="outline" className="border-[#4A9B8E] text-[#4A9B8E]">
                      Learn More
                    </Button>
                  </div>
                </div>

                {service.image && (
                  <div className="relative h-[500px] rounded-lg overflow-hidden">
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

