import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Phone, AlertTriangle, Check, X, Activity, Stethoscope, Heart, Thermometer } from "lucide-react";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urgent Care Calgary | Walk-In Non-Emergency Clinic",
  description: "Avoid ER wait times. Walk in for same-day urgent care, open until 11 PM daily. Calgary's trusted non-emergency medical clinic.",
  keywords: ["urgent care calgary", "non emergency clinic calgary", "urgent care walk in", "same day medical care", "calgary urgent care"],
  alternates: {
    canonical: "https://nowmedical.ca/urgent-care-calgary"
  },
  openGraph: {
    title: "Urgent Care Calgary | Walk-In Non-Emergency Clinic",
    description: "Avoid ER wait times. Walk in for same-day urgent care, open until 11 PM daily. Calgary's trusted non-emergency medical clinic.",
    url: "https://nowmedical.ca/urgent-care-calgary",
    siteName: "Now Medical Clinic",
    images: [
      {
        url: "https://nowmedical.ca/images/modern-medical-clinic-interior-waiting-room.jpg",
        width: 1200,
        height: 630,
        alt: "Now Medical Clinic - Urgent Care Calgary"
      }
    ],
    locale: "en_CA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Urgent Care Calgary | Walk-In Non-Emergency Clinic",
    description: "Avoid ER wait times. Walk in for same-day urgent care, open until 11 PM daily.",
    images: ["https://nowmedical.ca/images/modern-medical-clinic-interior-waiting-room.jpg"]
  }
};

export default function UrgentCarePage() {
  const whenToVisitUrgentCare = [
    "Sprains, strains, and minor fractures",
    "Cuts requiring stitches",
    "Minor burns",
    "Fever, cough, cold, and flu",
    "Ear and throat infections",
    "Urinary tract infections (UTIs)",
    "Allergic reactions (mild to moderate)",
    "Nausea, vomiting, and diarrhea",
    "Skin rashes and infections",
    "Minor eye injuries",
    "Asthma flare-ups (mild)",
    "Back pain and muscle strains"
  ];

  const whenToVisitER = [
    "Chest pain or heart attack symptoms",
    "Difficulty breathing or shortness of breath",
    "Severe bleeding that won't stop",
    "Head trauma with loss of consciousness",
    "Stroke symptoms (FAST: Face, Arms, Speech, Time)",
    "Severe allergic reactions (anaphylaxis)",
    "Severe burns",
    "Broken bones with visible deformity",
    "Poisoning or overdose",
    "Suicidal thoughts or severe mental health crisis"
  ];

  const benefits = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Service",
      description: "Average wait time under 30 minutes vs. 2-8 hours at ER"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Convenient Location",
      description: "Easy to access with free parking"
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Experienced Doctors",
      description: "Real family doctors trained in urgent care"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "No Appointment Needed",
      description: "Walk in anytime during our extended hours"
    }
  ];

  const faqSchema = generateFAQSchema([
    {
      question: "When should I go to urgent care vs emergency room?",
      answer: "Visit urgent care for non-life-threatening conditions like minor injuries, infections, fever, and minor burns. Go to the ER for serious conditions like chest pain, difficulty breathing, severe bleeding, or stroke symptoms."
    },
    {
      question: "Do you accept walk-ins for urgent care?",
      answer: "Yes! No appointment needed. Walk in anytime during our hours: 7:30 AM to 11:00 PM, 7 days a week."
    },
    {
      question: "Is urgent care covered by Alberta Health Care?",
      answer: "Yes, urgent care services are covered by AHCIP when you bring your valid Alberta Health Card."
    },
    {
      question: "How long is the wait time for urgent care?",
      answer: "Our average wait time is under 30 minutes, significantly faster than hospital emergency room wait times."
    }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Calgary urgent care walk-in clinic. Avoid ER wait times. Open until 11 PM daily for non-emergency medical care."
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
                  <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <AlertTriangle className="h-4 w-4" />
                    Non-Emergency Care
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
                    <span className="text-foreground">Urgent Care Calgary</span>
                    <br />
                    <span className="text-[#299470]">Skip the ER Wait</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-4">
                    <strong>Avoid 2-8 hour hospital wait times.</strong> Walk in for same-day urgent care — open until 11 PM every day.
                  </p>
                  <p className="text-base text-muted-foreground mb-8">
                    Our experienced doctors treat non-emergency conditions quickly. No appointment needed.
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
                          <Clock className="h-6 w-6 text-[#299470]" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Current Wait Time</p>
                          <p className="text-2xl font-bold text-[#299470]">&lt; 30 min</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">Monday - Sunday</span>
                          <span className="text-muted-foreground">7:30 AM - 11:00 PM</span>
                        </div>
                        <div className="mt-4 p-3 bg-[#299470]/5 rounded-lg">
                          <p className="text-sm font-medium text-[#299470]">✓ Open All Holidays</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Urgent Care */}
          <section className="py-16 bg-white">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Urgent Care?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Fast, professional medical care without the long emergency room wait.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-[#E8F5F3] flex items-center justify-center text-[#299470]">
                          {benefit.icon}
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Urgent Care vs Emergency Room */}
          <section className="py-16 bg-gray-50">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Urgent Care <span className="text-[#299470]">vs</span> Emergency Room
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Not sure where to go? Here's a quick guide to help you decide.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                <Card className="border-2 border-[#299470]">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-12 w-12 rounded-full bg-[#299470] flex items-center justify-center">
                        <Check className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">Visit Urgent Care For:</h3>
                    </div>
                    <ul className="space-y-3">
                      {whenToVisitUrgentCare.map((condition, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-[#299470] flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-red-200">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-12 w-12 rounded-full bg-red-500 flex items-center justify-center">
                        <AlertTriangle className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">Go to ER For:</h3>
                    </div>
                    <ul className="space-y-3">
                      {whenToVisitER.map((condition, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground">
                  <strong>If you're unsure:</strong> Call 911 for life-threatening emergencies. Call us at{" "}
                  <a href="tel:587-391-8188" className="text-[#299470] hover:underline">587-391-8188</a> if you have questions.
                </p>
              </div>
            </div>
          </section>

          {/* Location & Hours */}
          <section className="py-16 bg-white">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Visit Our Urgent Care Clinic</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Located in NE Calgary with free parking. Walk in anytime — no appointment needed.
                </p>

                <Card>
                  <CardContent className="p-8">
                    <div className="grid gap-6 md:grid-cols-2 text-left">
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
                          <h3 className="font-semibold">Hours</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Monday - Sunday</p>
                        <p className="text-sm font-medium">7:30 AM - 11:00 PM</p>
                        <p className="text-sm text-[#299470] mt-1">Open all holidays</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t">
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

          {/* FAQ */}
          <section className="py-16 bg-gray-50">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Urgent Care FAQ</h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">When should I go to urgent care vs emergency room?</h3>
                      <p className="text-sm text-muted-foreground">
                        Visit urgent care for non-life-threatening conditions like minor injuries, infections, fever, and minor burns. Go to the ER for serious conditions like chest pain, difficulty breathing, severe bleeding, or stroke symptoms.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Do you accept walk-ins for urgent care?</h3>
                      <p className="text-sm text-muted-foreground">
                        Yes! No appointment needed. Walk in anytime during our hours: 7:30 AM to 11:00 PM, 7 days a week.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Is urgent care covered by Alberta Health Care?</h3>
                      <p className="text-sm text-muted-foreground">
                        Yes, urgent care services are covered by AHCIP when you bring your valid Alberta Health Card.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">How long is the wait time for urgent care?</h3>
                      <p className="text-sm text-muted-foreground">
                        Our average wait time is under 30 minutes, significantly faster than hospital emergency room wait times.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-[#299470] text-white">
            <div className="container text-center">
              <h2 className="text-3xl font-bold mb-4">
                Need Urgent Care? Walk In Today
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Open 7 days a week until 11 PM. No appointment needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:587-391-8188">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 587-391-8188
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#299470]" asChild>
                  <Link href="/contact">Get Directions</Link>
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

