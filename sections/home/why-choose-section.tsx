import { CheckCircle2 } from 'lucide-react';

interface WhyChooseItem {
  text: string;
  icon?: React.ReactNode;
}

interface WhyChooseSectionProps {
  title?: string;
  subtitle?: string;
  items: WhyChooseItem[];
  image?: string;
}

export default function WhyChooseSection({
  title = "Why Choose",
  subtitle = "Now Medical Clinic",
  items,
  image
}: WhyChooseSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {image && (
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src={image}
                alt="Why choose Now Medical Clinic - experienced doctors and extended hours in Calgary"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div>
            <h2 className="text-4xl font-bold mb-8">
              {title} <span className="text-[#4A9B8E]">{subtitle}</span>
            </h2>
            
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4A9B8E] flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

