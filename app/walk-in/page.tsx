import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { 
  HeroSection,
  LiveWaitTimesSection,
  HospitalAlternativeSection,
  NearbyHospitalsSection,
  ConditionsSection,
  FindUsSection,
  CTABannerSection 
} from "@/sections";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, FileText, CreditCard, AlertCircle, Phone, Activity, Stethoscope, Brain, Heart, Baby, Shield } from "lucide-react";
import Link from "next/link";

export default function WalkInPage() {
  const conditions = [
    {
      category: "Chronic Conditions",
      icon: <Activity className="w-8 h-8" />,
      items: [
        "Diabetes (Type 1 & Type 2)",
        "High blood pressure (Hypertension)",
        "Asthma and COPD",
        "Arthritis and joint pain"
      ]
    },
    {
      category: "Walk-in & Urgent Care",
      icon: <Stethoscope className="w-8 h-8" />,
      items: [
        "Cold, cough, and flu symptoms",
        "Sore throat and tonsillitis",
        "Ear and eye infections",
        "Minor injuries and lacerations"
      ]
    },
    {
      category: "Mental Health & Wellness",
      icon: <Brain className="w-8 h-8" />,
      items: [
        "Anxiety and panic attacks",
        "Depression and mood disorders",
        "Stress management",
        "Sleep disorders and insomnia"
      ]
    },
    {
      category: "Men's Health",
      icon: <Heart className="w-8 h-8" />,
      items: [
        "Erectile dysfunction and libido issues",
        "Low testosterone and fatigue",
        "Prostate exams and PSA screening",
        "Weight management and fitness advice"
      ]
    },
    {
      category: "Women's Health",
      icon: <Heart className="w-8 h-8" />,
      items: [
        "Pregnancy testing and prenatal care",
        "Birth control and family planning",
        "Menstrual irregularities and PMS",
        "Pap smears and screening"
      ]
    },
    {
      category: "Children's Health",
      icon: <Baby className="w-8 h-8" />,
      items: [
        "Childhood immunizations",
        "Growth and development monitoring",
        "Cough, cold, and ear infections",
        "School and sports physicals"
      ]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#E8F5F3] to-white py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Walk-In Clinic <span className="text-[#299470]">Calgary</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                No appointment needed. Just walk in and see a doctor today. We're open 7 days a week with extended hours
                to fit your schedule.
              </p>
            </div>
          </div>
        </section>

        {/* Live Wait Times */}
        <LiveWaitTimesSection
          title="Hospital Wait Times vs. Now Medical Clinic"
          currentWaitTime="< 30 min"
        />

        {/* Hospital Alternative */}
        <HospitalAlternativeSection
          title="Near the Hospital?"
          subtitle="We're a Fast Option"
          benefits={[
            "Walk-in any time — no appointment needed",
            "See a doctor within 30 minutes on average",
            "Experienced doctors for most medical conditions"
          ]}
          image="/modern-medical-clinic-exterior-building.jpg"
        />

        {/* Nearby Hospitals */}
        <NearbyHospitalsSection
          title="Nearby"
          subtitle="Hospitals"
          image="/modern-medical-clinic-reception-area-with-friendly.jpg"
        />

        {/* Hours & Location */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#299470]/10">
                      <Clock className="h-6 w-6 text-[#299470]" />
                    </div>
                    <h2 className="text-2xl font-bold">Hours of Operation</h2>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Monday - Friday</span>
                      <span className="text-muted-foreground">7:30 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Saturday</span>
                      <span className="text-muted-foreground">7:30 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Sunday</span>
                      <span className="text-muted-foreground">7:30 AM - 11:00 PM</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-[#299470]/5 rounded-lg">
                    <p className="text-sm font-medium text-[#299470]">Open all statutory holidays</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#299470]/10">
                      <MapPin className="h-6 w-6 text-[#299470]" />
                    </div>
                    <h2 className="text-2xl font-bold">Location</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-1">Now Medical Clinic</p>
                      <p className="text-muted-foreground">2520 23 St NE #19</p>
                      <p className="text-muted-foreground">Calgary, AB T2E 8L2</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Contact</p>
                      <div className="space-y-1">
                        <a
                          href="tel:+15873918188"
                          className="flex items-center gap-2 text-sm text-[#299470] hover:underline"
                        >
                          <Phone className="h-4 w-4" />
                          587-391-8188
                        </a>
                      </div>
                    </div>
                    <Button className="w-full bg-[#299470] hover:bg-[#2D7B6F]" asChild>
                      <Link href="/contact">Get Directions</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">How Walk-In Visits Work</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Getting medical care is simple and straightforward at our clinic.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#299470] text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Walk In</h3>
                <p className="text-muted-foreground">
                  No appointment needed. Simply arrive during our operating hours and check in at the front desk.
                </p>
              </div>

              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#299470] text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Check In</h3>
                <p className="text-muted-foreground">
                  Provide your health card and complete a brief registration form. We'll call you when it's your turn.
                </p>
              </div>

              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#299470] text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">See a Doctor</h3>
                <p className="text-muted-foreground">
                  Meet with one of our experienced physicians who will diagnose and treat your condition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Bring */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">What to Bring</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#299470]/10 flex-shrink-0">
                        <FileText className="h-5 w-5 text-[#299470]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Required Documents</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Valid Alberta Health Card</li>
                          <li>• Photo ID (driver's license or passport)</li>
                          <li>• List of current medications</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#299470]/10 flex-shrink-0">
                        <CreditCard className="h-5 w-5 text-[#299470]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Payment Information</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Alberta Health Card covers most services</li>
                          <li>• Some services may require payment</li>
                          <li>• We accept cash, debit, and credit cards</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions We Treat */}
        <ConditionsSection
          title="Common Medical Conditions"
          subtitle="We Treat"
          conditions={conditions}
        />

        {/* Find Us */}
        <FindUsSection />

        {/* CTA Banner */}
        <CTABannerSection
          title="Walk In Today We're Open Late Weekend and Holidays"
          primaryButtonText="Call 587-391-8188"
          primaryButtonLink="tel:587-391-8188"
        />
      </main>

      <Footer />
    </div>
  );
}
