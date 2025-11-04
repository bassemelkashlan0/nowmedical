import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HowToRegisterSection() {
  const steps = [
    {
      icon: "/images/family-doctor/register-new-patient.svg",
      title: "Click on Register as a New Patient",
      description: "Start your registration by clicking the button below and filling out the short form."
    },
    {
      icon: "/images/family-doctor/submit-your-request.svg",
      title: "Submit Your Request",
      description: "Send us your details so our team can verify your information and begin your registration."
    },
    {
      icon: "/images/family-doctor/contact-shortly.svg",
      title: "We'll Contact You Shortly",
      description: "Our team will reach out as soon as possible to connect you with a family doctor of your choice."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-[#F1F9F4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-5xl font-bold mb-4">
            How to <span className="text-[#299470]">Register</span>
          </h2>
          <p className="text-base text-foreground max-w-2xl mx-auto">
            Becoming a patient is easy just complete a few quick steps.
          </p>
        </div>

        <div className="relative grid gap-4 md:gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Dotted line connector with arrow - only show between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full z-0 pointer-events-none">
                  <div className="flex justify-center">
                    <img 
                      src="/images/family-doctor/abstrack.svg" 
                      alt="connector" 
                      className="w-auto h-10"
                    />
                  </div>
                </div>
              )}
              
              {/* Icon Box */}
              <div className="relative z-10 h-20 w-20 items-center justify-center rounded-lg border border-[#43B97F33] mx-auto mb-6">
                <img 
                  src={step.icon} 
                  alt={step.title}
                  className="w-full"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-3xl font-medium mb-3">{step.title}</h3>
              <p className="text-base leading-relaxed text-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-[#299470] hover:bg-[#2D7B6F] text-white text-lg font-medium px-6 py-3"
            asChild
          >
            <Link href="/walk-in-clinic-calgary" className="flex items-center">
              <Image
                src="/icons/btn_phone-outline-icon.svg"
                alt=""
                width={20}
                height={20}
                className="brightness-0 invert"
              />
              Register as a New Patient
            </Link>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg font-medium px-6 py-3"
            asChild
          >
            <Link href="tel:587-391-8188" className="flex items-center">
              <Image
                src="/icons/solar_phone-outline.svg"
                alt=""
                width={20}
                height={20}
                className=""
              />
              Call 587-391-8188
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
