import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Phone, MapPin, AlertCircle, Check } from "lucide-react";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24-Hour Walk-In Clinic Calgary | Open Late Until 11 PM",
  description: "Open until 11 PM every day for after-hours care. Real doctors, no appointment needed. Calgary's extended-hours walk-in clinic.",
  keywords: ["24 hour walk-in clinic calgary", "clinic open late", "after hours doctor", "extended hours clinic calgary"],
  alternates: {
    canonical: "https://nowmedical.ca/24-hour-walk-in-clinic-calgary"
  }
};

export default function TwentyFourHourClinicPage() {
  const extendedHoursBenefits = [
    "Open 7:30 AM - 11:00 PM (extended hours)",
    "Open 7 days a week including holidays",
    "No appointment needed — walk-ins welcome",
    "Real family doctors on-site",
    "Shorter wait times than emergency rooms",
    "Convenient NE Calgary location with free parking"
  ];

  const faqSchema = generateFAQSchema([
    {
      question: "Is it truly 24 hours?",
      answer: "We're open extended hours from 7:30 AM to 11:00 PM every day of the week, including weekends and holidays. This gives you 15.5 hours of daily access — much longer than regular clinics."
    },
    {
      question: "Can I walk in without an appointment?",
      answer: "Yes! No appointment needed. Walk in anytime during our extended hours 7:30 AM to 11:00 PM."
    },
    {
      question: "Are you open on weekends and holidays?",
      answer: "Yes, we're open every single day including weekends and statutory holidays with the same extended hours."
    }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Extended hours walk-in clinic in Calgary. Open 7:30 AM to 11 PM daily. Real doctors, no appointment needed."
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
                    <Clock className="h-4 w-4" />
                    Extended Hours: 7:30 AM - 11 PM
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
                    <span className="text-foreground">24-Hour Walk-In Clinic</span>
                    <br />
                    <span className="text-[#299470]">Calgary</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-4">
                    <strong>Open until 11 PM every day</strong> for after-hours care. Walk in anytime — no appointment needed.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
                    <div className="flex gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-amber-800">
                        <p className="font-semibold mb-1">Extended Hours Clinic</p>
                        <p>We offer extended hours from 7:30 AM to 11:00 PM (15.5 hours daily) — longer than most clinics in Calgary.</p>
                      </div>
                    </div>
                  </div>
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
                          <Clock className="h-6 w-6 text-[#299470]" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Extended Hours</p>
                          <p className="text-2xl font-bold text-[#299470]">7:30 AM - 11:00 PM</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Every Day</span>
                          <span className="text-muted-foreground">15.5 hours daily</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Weekends</span>
                          <span className="text-[#299470] font-medium">✓ Open</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="font-medium">Holidays</span>
                          <span className="text-[#299470] font-medium">✓ Open</span>
                        </div>
                        <div className="mt-4 p-3 bg-[#299470]/5 rounded-lg">
                          <p className="text-sm font-medium text-[#299470]">Walk-ins Welcome — No Appointment Needed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Extended Hours Benefits */}
          <section className="py-16 bg-white">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Extended Hours <span className="text-[#299470]">Benefits</span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Healthcare that fits your schedule — early morning to late night.
                  </p>
                </div>

                <div className="grid gap-4">
                  {extendedHoursBenefits.map((benefit, index) => (
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

          {/* How It Works */}
          <section className="py-16 bg-gray-50">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">How Extended Hours Work</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Access medical care on your schedule.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-[#299470] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                      1
                    </div>
                    <h3 className="font-semibold mb-2">Walk In Anytime</h3>
                    <p className="text-sm text-muted-foreground">
                      No appointment needed. Just arrive between 7:30 AM and 11:00 PM any day of the week.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-[#299470] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                      2
                    </div>
                    <h3 className="font-semibold mb-2">Quick Check-In</h3>
                    <p className="text-sm text-muted-foreground">
                      Register at the front desk with your health card. Average wait time is under 30 minutes.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-[#299470] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                      3
                    </div>
                    <h3 className="font-semibold mb-2">See a Doctor</h3>
                    <p className="text-sm text-muted-foreground">
                      Meet with an experienced family doctor who will diagnose and treat your condition.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Location */}
          <section className="py-16 bg-white">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Visit Our Extended Hours Clinic</h2>
                
                <Card>
                  <CardContent className="p-8">
                    <div className="grid gap-6 md:grid-cols-2 text-left mb-6">
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
                          <h3 className="font-semibold">Extended Hours</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">7 Days a Week</p>
                        <p className="text-sm font-medium">7:30 AM - 11:00 PM</p>
                        <p className="text-sm text-[#299470] mt-1">Including weekends & holidays</p>
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
                Extended Hours: 7:30 AM - 11 PM Daily
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Walk in anytime — no appointment needed. Open 7 days a week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:587-391-8188">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 587-391-8188
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#299470]" asChild>
                  <Link href="/walk-in-clinic-weekends">Weekend Clinic →</Link>
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

