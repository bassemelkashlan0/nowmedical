import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

interface CareCategory {
  title: string;
  description: string;
  items: string[];
  icon?: React.ReactNode;
}

interface ComprehensiveCareSectionProps {
  title?: string;
  subtitle?: string;
  categories: CareCategory[];
}

export default function ComprehensiveCareSection({
  title = "Comprehensive",
  subtitle = "Family Medicine",
  categories
}: ComprehensiveCareSectionProps) {
  return (
    <section className="py-10 lg:py-[54px] bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          {title} <span className="text-[#299470]">{subtitle}</span>
        </h2>
        <p className="text-center text-[#303030] mb-8 lg:mb-12 max-w-3xl mx-auto text-base lg:text-lg">
          We provide a wide range of family medicine services to meet all your healthcare needs.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="border-1 bg-white border-[#83C1AC] p-5 lg:p-6 hover:shadow-lg transition-all duration-300 hover:bg-[#EAF4F1] h-full flex flex-col group"
            >
              {category.icon && (
                <div className="mb-4 text-[#299470] group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
              )}
              <h3 className="text-lg lg:text-xl font-bold mb-3 text-[#303030] group-hover:text-[#299470] transition-colors duration-300">
                {category.title}
              </h3>
              <p className="text-[#303030] mb-4 text-sm lg:text-base flex-grow">{category.description}</p>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[#303030]">
                    <CheckCircle2 className="w-4 h-4 text-[#299470] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

