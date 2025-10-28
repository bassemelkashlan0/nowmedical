import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

interface CTABannerSectionProps {
  title: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  className?: string;
}

export default function CTABannerSection({
  title,
  subtitle,
  primaryButtonText = "Call Now",
  primaryButtonLink = "tel:587-391-8188",
  className = ""
}: CTABannerSectionProps) {
  return (
    <section className={`py-12 px-4 md:px-8 bg-[#1B5E54] text-white ${className}`}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && (
          <p className="text-xl mb-6 text-white/90">{subtitle}</p>
        )}
        <Button
          size="lg"
          className="bg-white text-[#1B5E54] hover:bg-gray-100"
          asChild
        >
          <a href={primaryButtonLink}>
            <Phone className="w-5 h-5 mr-2" />
            {primaryButtonText}
          </a>
        </Button>
      </div>
    </section>
  );
}

