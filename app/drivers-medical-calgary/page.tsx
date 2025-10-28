import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, MapPin, CheckCircle, Car, Truck } from "lucide-react";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, generateFAQSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Driver's Medical Calgary | Class 1-6 Driver Exams | Walk In or Call",
  description: "Walk in for driver's medical exams in Calgary. Class 1-6 commercial driver exams. Open daily until 11 PM. Call 587-391-8188.",
  keywords: ["drivers medical calgary", "class 1 driver medical", "commercial driver medical", "driver exam calgary", "cdl medical exam"],
  alternates: {
    canonical: "https://nowmedical.ca/drivers-medical-calgary"
  }
};

export default function DriversMedialPage() {
  const driverClasses = [
    { class: "Class 1", description: "Semi-trailer trucks" },
    { class: "Class 2", description: "Buses (more than 24 passengers)" },
    { class: "Class 3", description: "Trucks with more than 2 axles" },
    { class: "Class 4", description: "Taxis, ambulances, small buses" },
    { class: "Class 5", description: "Standard passenger vehicles" },
    { class: "Class 6", description: "Motorcycles" }
  ];

  const whatToBring = [
    "Valid photo ID (driver's license or passport)",
    "Your current eyewear (glasses or contacts if you wear them)",
    "List of current medications",
    "Payment (cash, debit, or credit card)"
  ];

  const faqSchema = generateFAQSchema([
    {
      question: "Do you offer driver's medical exams in Calgary?",
      answer: "Yes! We provide driver's medical exams for all classes (1-6) including commercial drivers. Walk in or call 587-391-8188."
    },
    {
      question: "How much does a driver's medical exam cost?",
      answer: "Please call us at 587-391-8188 for current pricing. Driver's medical exams are not covered by Alberta Health Care."
    },
    {
      question: "How long does the driver's medical take?",
      answer: "Most driver's medical exams take 15-30 minutes depending on your medical history."
    },
    {
      question: "Can I walk in for a driver's medical?",
      answer: "Yes, walk-ins are welcome! We're open 7 days a week until 11 PM. We recommend calling ahead at 587-391-8188."
    }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema({
    ...CLINIC_DATA,
    description: "Driver's medical exams in Calgary for Class 1-6 licenses. Walk-in or call. Open until 11 PM daily."
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
                    <Car className="h-4 w-4" />
                    All Classes 1-6
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
                    <span className="text-foreground">Driver's Medical</span>
                    <br />
                    <span className="text-foreground">in Calgary</span>
                    <br />
                    <span className="text-[#299470]">Class 1-6 Exams</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-4">
                    <strong>Commercial driver medical exams</strong> for all license classes. Walk in or call ahead.
                  </p>
                  <p className="text-base text-muted-foreground mb-8">
                    Open 7 days a week until 11 PM. Quick, professional service for all driver classes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white" asChild>
                      <a href="tel:587-391-8188">
                        <Phone className="mr-2 h-5 w-5" />
                        Call 587-391-8188
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#299470] text-[#299470] hover:bg-[#299470]/10"
                      asChild
                    >
                      <Link href="/contact">Get Directions</Link>
                    </Button>
                  </div>
                </div>

                <div>
                  <Card className="bg-white shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold mb-4">Driver Classes We Serve</h3>
                      <div className="space-y-3">
                        {driverClasses.map((item, index) => (
                          <div key={index} className="flex items-center gap-3 py-2 border-b last:border-0">
                            <div className="h-10 w-10 rounded-full bg-[#E8F5F3] flex items-center justify-center flex-shrink-0">
                              <Truck className="h-5 w-5 text-[#299470]" />
                            </div>
                            <div>
                              <p className="font-semibold">{item.class}</p>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* What to Bring */}
          <section className="py-16 bg-white">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">What to Bring</h2>
                <div className="grid gap-4">
                  {whatToBring.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-[#299470] flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Location & Hours */}
          <section className="py-16 bg-gray-50">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Visit Us for Your Driver's Medical</h2>
                
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
                          <h3 className="font-semibold">Hours</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">7 Days a Week</p>
                        <p className="text-sm font-medium">7:30 AM - 11:00 PM</p>
                        <p className="text-sm text-[#299470] mt-1">Call ahead recommended</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button className="bg-[#299470] hover:bg-[#2D7B6F]" asChild>
                          <a href="tel:587-391-8188">
                            <Phone className="mr-2 h-4 w-4" />
                            Call 587-391-8188
                          </a>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href="/contact">Get Directions</Link>
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
                Need a Driver's Medical Exam?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Walk in or call ahead. Open 7 days a week until 11 PM. All driver classes welcome.
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

