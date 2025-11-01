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
    <>
      <section className="py-16 px-4 md:px-8 bg-[#F1F9F4] relative">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl mb-6 text-[#299470]">
              Frequently Asked Questions 
                <br />
                <span className="text-foreground">Walk-In & Family Doctor Clinic in Calgary</span>
              </h1>
              <p className="text-m text-foreground mb-4"><b>
              At Now Medical Clinic, we want your visit to be simple, fast, and stress-free. Below you’ll find answers to our most common patient questions — from walk-in care and hours to insurance coverage, family doctors, and urgent care services.
              </b></p>
              <p className="text-base text-foreground mb-8"><b>
              If you still have questions, call us anytime at 587-391-8188 — we’re happy to help.
              </b></p>
            </div>

            <div>
              <img
                src="/images/faq/banner.png"
                alt="Now Medical Clinic Calgary doctor"
                className="absolute top-0 right-0 h-full w-[900px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 bg-white rounded-lg p-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-3xl font-bold mb-6">{category.category}</h3>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="bg-[#EAF4F1] border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-lg text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className=" text-base text-gray-700 pt-4">
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
    </>
  );
}

