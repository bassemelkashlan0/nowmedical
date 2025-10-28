import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  questions: FAQ[];
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  categories: FAQCategory[];
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Walk-In & Family Doctor Clinic in Calgary",
  description,
  categories
}: FAQSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        <h2 className="text-2xl font-bold text-[#4A9B8E] mb-6">
          {subtitle}
        </h2>
        
        {description && (
          <p className="text-lg text-gray-700 mb-12">{description}</p>
        )}

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="bg-white border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

