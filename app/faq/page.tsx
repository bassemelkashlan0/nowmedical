import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FAQSection } from "@/sections";
import { CTABannerSection } from "@/sections";
import { StructuredData, generateFAQSchema } from "@/lib/structured-data";
import type { Metadata } from "next";
import { LiveStatusBanner } from "@/components/live-status-banner";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Now Medical Clinic Calgary",
  description: "Get answers to common questions about our walk-in clinic, family doctors, hours, services, and more. Open 7 days until 11 PM in Calgary.",
  keywords: ["faq", "frequently asked questions", "walk-in clinic questions", "family doctor faq", "calgary clinic questions"],
  alternates: {
    canonical: "https://nowmedical.ca/faq"
  }
};

export default function PatientsPage() {
  const faqCategories = [
    {
      category: "Walk-In & Urgent Care Questions",
      questions: [
        {
          question: "Do you open for walk-in 7 days a week?",
          answer: "Yes, We're open 7 days a week for walk-in visits. Hours: 7:30 AM - 11:00 PM including weekends and holidays."
        },
        {
          question: "Do you open for Statutory Holidays and Weekends?",
          answer: "Yes, we're open every day including statutory holidays and weekends with the same hours: 7:30 AM - 11:00 PM."
        }
      ]
    },
    {
      category: "Family Doctor & New Patient Questions",
      questions: [
        {
          question: "Are your family doctors accepting new patients?",
          answer: "Yes, our family doctors are currently accepting new patients. Call us at 587-391-8188 to register."
        },
        {
          question: "Can I choose a female family doctor?",
          answer: "Yes, we have both male and female family doctors available. You can request your preferred doctor when registering."
        }
      ]
    },
    {
      category: "Women's Health Questions",
      questions: [
        {
          question: "Do you offer Pap tests and birth control consultations?",
          answer: "Yes, we offer Pap tests, birth control, birth control consultations, pregnancy tests, etc. Our female doctors provide comprehensive women's health services."
        },
        {
          question: "Can I see a female doctor for a walk in visit?",
          answer: "Yes, we have female doctors available for walk-in visits. While we cannot guarantee which doctor you'll see, we'll do our best to accommodate your preference."
        }
      ]
    },
    {
      category: "Children & Family Care",
      questions: [
        {
          question: "Do you see children?",
          answer: "Absolutely! Our doctors treat children of all ages, from infants to teens. We handle common pediatric illnesses, vaccinations, and wellness exams."
        },
        {
          question: "Do you provide school or daycare forms?",
          answer: "Yes, we can complete school forms, daycare forms, and sports physicals. There may be a fee for these services not covered by Alberta Health."
        }
      ]
    },
    {
      category: "Hospital & Location Questions",
      questions: [
        {
          question: "Where is your clinic located?",
          answer: "We're located at 2520 23 St NE #19, Calgary, AB T2E 8L2. We're near Peter Lougheed Centre with ample free parking."
        },
        {
          question: "Is there parking available?",
          answer: "Yes, we have plenty of free parking available in our parking lot."
        }
      ]
    },
    {
      category: "Prescriptions & Forms",
      questions: [
        {
          question: "Can I renew my prescription here?",
          answer: "Yes, our doctors can renew prescriptions. Please bring your current medication or prescription information."
        },
        {
          question: "Can I get a sick note or medical forms?",
          answer: "Yes, we can provide sick notes, medical certificates, and complete various medical forms. There is a fee for this service."
        }
      ]
    },
    {
      category: "Billing & Coverage",
      questions: [
        {
          question: "Do you accept Alberta Health Care (AHCIP)?",
          answer: "Yes, we accept AHCIP and bill directly to Alberta Health Care for most services. Please bring your valid Alberta Health Care card."
        },
        {
          question: "Do you see out-of-province or uninsured patients?",
          answer: "Yes, we see out-of-province and uninsured patients. Services will be provided on a private pay basis."
        }
      ]
    },
    {
      category: "Hours & Availability",
      questions: [
        {
          question: "What are your clinic hours?",
          answer: "We're open 7:30 AM - 11:00 PM every day of the week, including weekends and statutory holidays."
        },
        {
          question: "Are you open on weekends and holidays?",
          answer: "Yes, we're open 7 days a week including all weekends and holidays with the same extended hours."
        },
        {
          question: "What's the best way to reach you?",
          answer: "The best way to reach us is by calling 587-391-8188. You can also visit us during our walk-in hours or email clinic@nowmedical.ca for non-urgent inquiries."
        }
      ]
    }
  ];

  // Flatten all FAQs for structured data
  const allFAQs = faqCategories.flatMap(category =>
    category.questions.map(q => ({
      question: q.question,
      answer: q.answer
    }))
  );

  const faqSchema = generateFAQSchema(allFAQs);

  return (
    <>
      <StructuredData data={faqSchema} />

      <div className="flex min-h-screen flex-col">
        <Header />
        {/* Live Status Banner */}
        <LiveStatusBanner />

        <main className="flex-1">

          {/* FAQ Section */}
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Walk-In & Family Doctor Clinic in Calgary"
            description="At Now Medical Clinic, we want your visit to be simple, fast, and stress-free. Below are Q & A to answers to our most common patient questions — from walk-in care and hours to insurance coverage, family doctors, and urgent care services."
            categories={faqCategories}
          />

          {/* CTA Banner */}
          <div className="mb-[159px]" >
            <p className="text-[#303030] text-sm text-center font-medium " >Need help right now? Walk in today — we’re open until 11 PM every day for your convenience.</p>
          </div>

        </main>

        <Footer />
      </div>
    </>
  );
}
