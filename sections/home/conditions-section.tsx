import { Card } from '@/components/ui/card';
import { Activity, Heart, Brain, Users, Droplet, Shield, Stethoscope } from 'lucide-react';

interface Condition {
  category: string;
  icon: React.ReactNode;
  items: string[];
  color?: string;
}

interface ConditionsSectionProps {
  title?: string;
  subtitle?: string;
  conditions: Condition[];
}

const iconMap: Record<string, React.ReactNode> = {
  chronic: <Activity className="w-8 h-8" />,
  urgent: <Stethoscope className="w-8 h-8" />,
  mental: <Brain className="w-8 h-8" />,
  mens: <Heart className="w-8 h-8" />,
  womens: <Heart className="w-8 h-8" />,
  children: <Users className="w-8 h-8" />,
  preventive: <Shield className="w-8 h-8" />
};

export default function ConditionsSection({
  title = "Common Medical Conditions",
  subtitle = "We Treat",
  conditions
}: ConditionsSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          {title}
        </h2>
        <h3 className="text-3xl font-bold text-center text-[#4A9B8E] mb-12">
          {subtitle}
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {conditions.map((condition, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className={`inline-flex p-3 rounded-full bg-[#4A9B8E]/10 mb-4`}>
                <div className="text-[#4A9B8E]">
                  {condition.icon || iconMap[condition.category.toLowerCase()]}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">{condition.category}</h3>
              
              <ul className="space-y-2">
                {condition.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start gap-2">
                    <span className="text-[#4A9B8E] mt-1">•</span>
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

