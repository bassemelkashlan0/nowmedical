import { Card } from '@/components/ui/card';

interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ValuesSectionProps {
  title?: string;
  values: Value[];
}

export default function ValuesSection({
  title = "Our Values",
  values
}: ValuesSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our <span className="text-[#4A9B8E]">Values</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex p-4 rounded-full bg-[#4A9B8E]/10 mb-4">
                <div className="text-[#4A9B8E]">{value.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

