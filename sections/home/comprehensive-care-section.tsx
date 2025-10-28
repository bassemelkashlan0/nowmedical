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
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          {title} <span className="text-[#4A9B8E]">{subtitle}</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We provide a wide range of family medicine services to meet all your healthcare needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="p-6">
              {category.icon && (
                <div className="mb-4 text-[#4A9B8E]">{category.icon}</div>
              )}
              <h3 className="text-xl font-bold mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#4A9B8E] flex-shrink-0 mt-0.5" />
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

