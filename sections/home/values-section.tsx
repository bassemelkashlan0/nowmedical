import { Card } from '@/components/ui/card';

interface Value {
  title: string;
  description: string;
  image: string;
}

interface ValuesSectionProps {
  title?: string;
  description?: string;
  values: Value[];
}

export default function ValuesSection({
  title = "Our Values",
  description,
  values
}: ValuesSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">
          Our <span className="text-[#4A9B8E]">Values</span>
        </h2>
        {description && (
          <p className="text-base text-center text-foreground mb-6 max-w-3xl mx-auto">
            {description}
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="p-4 text-start hover:shadow-lg transition-shadow border-1 border-[#83C1AC] h-full flex flex-col">
              <div className="inline-flex mb-6">
                <img 
                  src={value.image} 
                  alt={value.title}
                  className="w-[50px] h-full"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-600 flex-grow">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

