import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Phone, MapPin, Calendar, Check } from "lucide-react";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekend Walk-In Clinic Calgary | Open Holidays Until 11 PM",
  description: "Open Saturdays, Sundays, and holidays until 11 PM. Walk in anytime — no appointment needed. Calgary's trusted weekend clinic.",
  keywords: ["walk in clinic open sunday calgary", "weekend clinic", "open holidays clinic", "saturday walk-in clinic calgary"],
  alternates: {
    canonical: "https://nowmedical.ca/walk-in-clinic-weekends"
  }
};

export default function WeekendClinicPage() {
  const weekendBenefits = [
    "Open every Saturday and Sunday",
    "Same hours: 7:30 AM - 11:00 PM",
    "Open all statutory holidays",
    "No appointment needed",
    "Real family doctors on weekends",
    "Free parking available"
  ];

  const faqSchema = generateFAQSchema([
    {
      question: "Are you open on Saturdays and Sundays?",
      answer: "Yes! We're open every Saturday and Sunday from 7:30 AM to 11:00 PM with the same services as weekdays."
    },
    {
      question: "What about statutory holidays?",
      answer: "Yes, we're open on all statutory holidays including Christmas, New Year's, and other Canadian holidays."
    },
    {
      question: "Do I need an appointment on weekends?",
      answer: "No appointment needed! Walk-ins are welcome on weekends and holidays."
    }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Weekend walk-in clinic in Calgary. Open Saturdays, Sundays, and holidays until 11 PM. No appointment needed."
  });

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={faqSchema} />
      
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero */}
          <section className="bg-gradient-to-b from-[#E8F5F3] to-white py-16">
            <div className="container">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Calendar className="h-4 w-4" />
                    Open 7 Days a Week
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
                    <span className="text-foreground">Weekend & Holiday</span>
                    <br />
                    <span className="text-[#299470]">Walk-In Clinic Calgary</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-4">
                    <strong>Open Saturdays, Sundays, and holidays</strong> until 11 PM. Walk in anytime — no appointment needed.
                  </p>
                  <p className="text-base text-muted-foreground mb-8">
                    Because health concerns don't take weekends off, neither do we.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white" asChild>
                      <Link href="/contact">Get Directions</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#299470] text-[#299470] hover:bg-[#299470]/10"
                      asChild
                    >
                      <a href="tel:587-391-8188">
                        <Phone className="mr-2 h-5 w-5" />
                        587-391-8188
                      </a>
                    </Button>
                  </div>
                </div>

                <div>
                  <Card className="bg-white shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-12 w-12 rounded-full bg-[#E8F5F3] flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-[#299470]" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Weekend Hours</p>
                          <p className="text-2xl font-bold text-[#299470]">7:30 AM - 11:00 PM</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Saturday</span>
                          <span className="text-[#299470] font-medium">✓ Open</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Sunday</span>
                          <span className="text-[#299470] font-medium">✓ Open</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="font-medium">Holidays</span>
                          <span className="text-[#299470] font-medium">✓ Open</span>
                        </div>
                        <div className="mt-4 p-3 bg-[#299470]/5 rounded-lg">
                          <p className="text-sm font-medium text-[#299470]">Same Great Service, Every Day</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 bg-white">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Why Choose Our <span className="text-[#299470]">Weekend Clinic?</span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Healthcare when you need it — even on weekends and holidays.
                  </p>
                </div>

                <div className="grid gap-4">
                  {weekendBenefits.map((benefit, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-[#E8F5F3] flex items-center justify-center flex-shrink-0">
                          <Check className="h-5 w-5 text-[#299470]" />
                        </div>
                        <span className="font-medium">{benefit}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-[#299470] text-white">
            <div className="container text-center">
              <h2 className="text-3xl font-bold mb-4">
                Open Weekends & Holidays Until 11 PM
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Walk in Saturday, Sunday, or any holiday — no appointment needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:587-391-8188">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 587-391-8188
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

