import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
}

interface ServicesGridSectionProps {
  title?: string;
  services: Service[];
}

export default function ServicesGridSection({
  title = "Our Most Popular Services",
  services
}: ServicesGridSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          {title.includes('Popular') ? (
            <>
              Our Most <span className="text-[#4A9B8E]">Popular Services</span>
            </>
          ) : (
            title
          )}
        </h2>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4">
                      {service.title.split(' ').slice(0, -1).join(' ')}{' '}
                      <span className="text-[#4A9B8E]">
                        {service.title.split(' ').slice(-1)}
                      </span>
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <div className="flex gap-4">
                      <Button className="bg-[#4A9B8E] hover:bg-[#3d8375]">
                        {service.buttonText || 'Learn More'}
                      </Button>
                      <Button variant="outline" className="border-[#4A9B8E] text-[#4A9B8E]">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-3xl font-bold mb-4">
                      {service.title.split(' ').slice(0, -1).join(' ')}{' '}
                      <span className="text-[#4A9B8E]">
                        {service.title.split(' ').slice(-1)}
                      </span>
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <div className="flex gap-4">
                      <Button className="bg-[#4A9B8E] hover:bg-[#3d8375]">
                        {service.buttonText || 'Learn More'}
                      </Button>
                      <Button variant="outline" className="border-[#4A9B8E] text-[#4A9B8E]">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

