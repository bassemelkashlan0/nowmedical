import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Phone, MapPin, Moon, Sun, Check } from "lucide-react";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Late-Night Walk-In Clinic Calgary | Open Until 11 PM",
  description: "Need a doctor tonight? Walk in to our Calgary clinic open until 11 PM. Real doctors, short wait times. After-hours medical care.",
  keywords: ["late night clinic calgary", "open till 11 pm clinic", "after hours walk-in", "evening clinic calgary", "late night doctor"],
  alternates: {
    canonical: "https://nowmedical.ca/late-night-clinic"
  }
};

export default function LateNightClinicPage() {
  const lateNightBenefits = [
    "Open until 11:00 PM every night",
    "Real family doctors (not residents)",
    "Walk-ins welcome — no appointment needed",
    "Average wait time under 30 minutes",
    "Free parking available",
    "Open 7 days a week including holidays"
  ];

  const commonReasons = [
    { time: "After Work", conditions: ["Sick notes for work", "Prescription refills", "Routine check-ups", "Vaccinations"] },
    { time: "Evening Hours", conditions: ["Fever and flu symptoms", "Ear and throat infections", "Minor injuries", "UTIs"] },
    { time: "Late Night", conditions: ["Sudden illness", "Ongoing symptoms", "Can't wait until morning", "Avoid ER wait times"] }
  ];

  const faqSchema = generateFAQSchema([
    {
      question: "What time does the late-night clinic close?",
      answer: "We're open until 11:00 PM every day of the week, including weekends and holidays."
    },
    {
      question: "Do I need an appointment for late-night visits?",
      answer: "No appointment needed! Walk in anytime until 11:00 PM. We welcome walk-ins."
    },
    {
      question: "Will I see a real doctor or a resident?",
      answer: "You'll see an experienced family doctor. All our physicians are fully licensed and board-certified."
    }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Late-night walk-in clinic in Calgary. Open until 11 PM every day. Real doctors, no appointment needed."
  });

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={faqSchema} />
      
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-[#E8F5F3] to-white py-16">
            <div className="container">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Moon className="h-4 w-4" />
                    Open Until 11 PM
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
                    <span className="text-foreground">Late-Night Walk-In Clinic</span>
                    <br />
                    <span className="text-[#299470]">Calgary</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-4">
                    <strong>Need a doctor tonight?</strong> Walk in until 11 PM — no appointment needed. Real doctors, open 7 days a week.
                  </p>
                  <p className="text-base text-muted-foreground mb-8">
                    Perfect for working professionals and families who need medical care after regular clinic hours.
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
                  <Card className="bg-gradient-to-br from-[#299470] to-[#2D7B6F] text-white shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm opacity-90">Late-Night Hours</p>
                          <p className="text-2xl font-bold">7:30 AM - 11:00 PM</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Sun className="h-4 w-4" />
                          <span>Morning & Afternoon: 7:30 AM - 5:00 PM</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Moon className="h-4 w-4" />
                          <span className="font-semibold">Evening & Late-Night: 5:00 PM - 11:00 PM</span>
                        </div>
                        <div className="mt-4 p-3 bg-white/10 rounded-lg">
                          <p className="text-sm font-medium">✓ Open Every Day (7 Days)</p>
                          <p className="text-sm opacity-90">Including weekends & holidays</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Our Late-Night Clinic */}
          <section className="py-16 bg-white">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Why Choose Our <span className="text-[#299470]">Late-Night Clinic?</span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Healthcare on your schedule — not just 9 to 5.
                  </p>
                </div>

                <div className="grid gap-4">
                  {lateNightBenefits.map((benefit, index) => (
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

          {/* Common Reasons */}
          <section className="py-16 bg-gray-50">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">When to Visit Our Late-Night Clinic</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We're here when you need us — from early morning to late evening.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {commonReasons.map((timeSlot, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 text-[#299470]">{timeSlot.time}</h3>
                      <ul className="space-y-2">
                        {timeSlot.conditions.map((condition, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-[#299470] flex-shrink-0 mt-0.5" />
                            <span>{condition}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Location & Contact */}
          <section className="py-16 bg-white">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Visit Tonight</h2>
                
                <Card>
                  <CardContent className="p-8">
                    <div className="grid gap-6 md:grid-cols-2 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <MapPin className="h-5 w-5 text-[#299470]" />
                          <h3 className="font-semibold">Location</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Now Medical Clinic</p>
                        <p className="text-sm text-muted-foreground">2520 23 St NE #19</p>
                        <p className="text-sm text-muted-foreground">Calgary, AB T2E 8L2</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <Clock className="h-5 w-5 text-[#299470]" />
                          <h3 className="font-semibold">Late-Night Hours</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Every Day of the Week</p>
                        <p className="text-sm font-medium">7:30 AM - 11:00 PM</p>
                        <p className="text-sm text-[#299470] mt-1">Last patient at 10:45 PM</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button className="bg-[#299470] hover:bg-[#2D7B6F]" asChild>
                          <Link href="/contact">Get Directions</Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href="tel:587-391-8188">
                            <Phone className="mr-2 h-4 w-4" />
                            Call 587-391-8188
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-[#299470] text-white">
            <div className="container text-center">
              <h2 className="text-3xl font-bold mb-4">
                Open Late Every Night Until 11 PM
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Walk in tonight — no appointment needed. We're here when you need us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:587-391-8188">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 587-391-8188
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#299470]" asChild>
                  <Link href="/urgent-care-calgary">Urgent Care →</Link>
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

