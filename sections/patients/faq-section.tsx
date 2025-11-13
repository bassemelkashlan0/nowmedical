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
      <section className=" overflow-hidden py-10 lg:pt-[92px] lg:pb-[83px] px-4 md:px-8 bg-[#F1F9F4] relative">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[53%_47%] lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl mb-6 text-[#299470] ">
                Frequently Asked Questions
                <br />
                <span className="text-[#303030]">Walk-In & Family Doctor Clinic in Calgary</span>
              </h1>
              <p className="text-m text-[#303030] mb-4"><b>
                At Now Medical Clinic, we want your visit to be simple, fast, and stress-free. Below you’ll find answers to our most common patient questions — from walk-in care and hours to insurance coverage, family doctors, and urgent care services.
              </b></p>
              <p className="text-base text-[#303030] mb-8"><b>
                If you still have questions, call us anytime at 587-391-8188 — we’re happy to help.
              </b></p>
            </div>

            <div>
              <img
                src="/images/faq/banner.png"
                alt="Now Medical Clinic Calgary doctor"
                className="absolute  top-0 -right-12 h-full w-[900px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-[54px] px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10 bg-white rounded-lg">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl text-[#303030] font-bold mb-4 lg:mb-6">
                  {category.category}
                </h3>

                <Accordion
                  type="single"
                  collapsible
                  defaultValue={`${categoryIndex}-0`}  // ✅ first accordion open per category
                >
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-[#EAF4F1] border-[#E6E6E6] border-1"
                    >
                      <AccordionTrigger
                        className="group text-lg text-[#303030] p-4 text-left font-bold hover:no-underline flex justify-between items-center [&>svg]:hidden"
                      >
                        {faq.question}

                        <span className="text-[#299470] text-2xl">
                          <span className="group-data-[state=open]:hidden">
                            <img src="/images/faq/open_icon.svg" alt="open" />
                          </span>
                          <span className="hidden group-data-[state=open]:inline">
                            <img src="/images/faq/close_icon.svg" alt="close" />
                          </span>
                        </span>
                      </AccordionTrigger>

                      <AccordionContent className="bg-[#FEFEFE] text-base border-1 border-b-[#EAF4F1] p-4 text-gray-700 pt-4">
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

