import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Navigation, Check } from "lucide-react";
import Link from "next/link";
import { StructuredData, generateLocalBusinessSchema, CLINIC_DATA } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Walk-In Clinic Near Sheldon M. Chumir Health Centre | Open 7 Days",
  description: "Non-emergency care near Sheldon Chumir Health Centre. Walk in anytime — open 7 days until 11 PM.",
  keywords: ["walk in clinic near sheldon chumir", "clinic near chumir"],
  alternates: { canonical: "https://nowmedical.ca/walk-in-clinic-near-sheldon-m-chumir-health-centre" }
};

export default function SheldonChumirPage() {
  const localBusinessSchema = generateLocalBusinessSchema({ ...CLINIC_DATA, description: "Walk-in clinic serving Calgary including Sheldon Chumir area. Open until 11 PM daily." });
  const benefits = ["Serving Calgary including downtown area", "Walk-in service — no appointment", "Average wait under 30 minutes", "Open until 11 PM daily", "Free parking"];

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="bg-gradient-to-b from-[#E8F5F3] to-white py-16">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm mb-4">
                  <MapPin className="h-4 w-4" />Serving Calgary
                </div>
                <h1 className="text-4xl font-bold lg:text-5xl mb-6">
                  <span className="text-foreground">Walk-In Clinic Near</span><br />
                  <span className="text-[#299470]">Sheldon M. Chumir Health Centre</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  <strong>Skip the ER wait.</strong> Walk in for non-emergency care — open 7 days until 11 PM.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#299470]" asChild>
                    <Link href="/contact"><Navigation className="mr-2 h-5 w-5" />Get Directions</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-[#299470] text-[#299470]" asChild>
                    <a href="tel:587-391-8188"><Phone className="mr-2 h-5 w-5" />587-391-8188</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 bg-white">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Clinic?</h2>
                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <Card key={index}><CardContent className="p-4 flex items-center gap-3"><Check className="h-5 w-5 text-[#299470]" /><span>{benefit}</span></CardContent></Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

