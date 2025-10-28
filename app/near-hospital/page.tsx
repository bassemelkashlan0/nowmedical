import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  WhyChooseSection,
  ConditionsSection,
  FindUsSection,
  CTABannerSection
} from "@/sections";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Stethoscope, Activity, Brain, Heart, Baby, Shield, Users } from "lucide-react";

export default function NearHospitalPage() {
  const whyChooseItems = [
    {
      text: "Open until late day (11:00 PM) evenings, weekends & holidays",
      icon: <Clock className="w-5 h-5" />
    },
    {
      text: "Fast Walk-in",
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      text: "Real doctors on-site",
      icon: <Users className="w-5 h-5" />
    },
    {
      text: "Convenient Calgary location with free parking",
      icon: <MapPin className="w-5 h-5" />
    }
  ];

  const conditions = [
    {
      category: "Chronic Conditions",
      icon: <Activity className="w-8 h-8" />,
      items: [
        "Diabetes (Type 1 & Type 2)",
        "High blood pressure (Hypertension)",
        "Asthma and COPD",
        "Arthritis and joint pain",
        "Thyroid disorders",
        "Chronic pain management",
        "Obesity and weight management",
        "Chronic kidney disease"
      ]
    },
    {
      category: "Walk-in & Urgent Care",
      icon: <Stethoscope className="w-8 h-8" />,
      items: [
        "Cold, cough, and flu symptoms",
        "Sore throat and tonsillitis",
        "Ear and eye infections",
        "Urinary tract infections (UTIs)",
        "Minor injuries and lacerations",
        "Sprains and strains",
        "Allergies and rashes",
        "Skin infections and cellulitis",
        "Nausea, vomiting, and diarrhea",
        "Pink eye and styes"
      ]
    },
    {
      category: "Mental Health & Wellness",
      icon: <Brain className="w-8 h-8" />,
      items: [
        "Anxiety and panic attacks",
        "Depression and mood disorders",
        "Stress management",
        "Sleep disorders and insomnia",
        "ADHD and focus issues",
        "Grief and loss counseling (referrals)"
      ]
    },
    {
      category: "Men's Health",
      icon: <Heart className="w-8 h-8" />,
      items: [
        "Erectile dysfunction and libido issues",
        "Low testosterone and fatigue",
        "Prostate exams and PSA screening",
        "Male pattern baldness",
        "Weight management and fitness advice",
        "Mental health and stress counseling",
        "Sexual health and STD screening"
      ]
    },
    {
      category: "Women's Health",
      icon: <Heart className="w-8 h-8" />,
      items: [
        "Pregnancy testing and prenatal care",
        "Birth control and family planning",
        "Menstrual irregularities and PMS",
        "Menopause management and HRT",
        "Pap smears and cervical cancer screening",
        "Breast exams and mammogram referrals",
        "UTIs and yeast infections",
        "Pelvic pain and endometriosis"
      ]
    },
    {
      category: "Children's Health",
      icon: <Baby className="w-8 h-8" />,
      items: [
        "Childhood immunizations",
        "Growth and development monitoring",
        "Cough, cold, and ear infections",
        "Fever and rashes",
        "School and sports physicals",
        "Behavioral and learning assessments"
      ]
    },
    {
      category: "Preventive Care & Diagnostics",
      icon: <Shield className="w-8 h-8" />,
      items: [
        "Annual physical exams",
        "Chronic disease screening",
        "Travel medicine and vaccines",
        "Blood work and lab tests",
        "ECG and cardiac screening"
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
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
                  <span className="text-foreground">Walk-In Clinic</span>
                  <br />
                  <span className="text-[#299470]">Near Peter Lougheed Centre</span>
                  <br />
                  <span className="text-foreground">Open 7 Days Until 11 PM</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-2 font-semibold">
                  Including Weekend and Holidays
                </p>
                <p className="text-base text-muted-foreground mb-8">
                  Located just minutes from Peter Lougheed Centre hospital, Now Medical Clinic offers fast, convenient walk-in care and family doctor services. Skip the long hospital wait times and see a doctor quickly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#299470] hover:bg-[#2D7B6F] text-white" asChild>
                    <a href="tel:587-391-8188">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent"
                    asChild
                  >
                    <a href="tel:587-387-7254">
                      <Phone className="mr-2 h-5 w-5" />
                      587-387-7254
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent"
                    asChild
                  >
                    <a href="#map">Get Directions</a>
                  </Button>
                </div>
              </div>

              <div>
                <img
                  src="/images/doctor-patient-consultation.png"
                  alt="Doctor with patient"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseSection
          title="Why"
          subtitle="Choose Us"
          items={whyChooseItems}
          image="/modern-medical-clinic-exterior-building.jpg"
        />

        {/* Common Medical Conditions We Treat */}
        <ConditionsSection
          title="Common Medical Conditions"
          subtitle="We Treat"
          conditions={conditions}
        />

        {/* Location Info */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Conveniently Located <span className="text-[#299470]">Near Peter Lougheed Centre</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're located at 2520 23 St NE #19, Calgary, AB — just a short drive from Peter Lougheed Centre hospital. Whether you're coming from the hospital or the surrounding neighborhoods, we're easy to find with plenty of free parking.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <MapPin className="w-8 h-8 text-[#299470] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Easy Access</h3>
                  <p className="text-sm text-muted-foreground">Minutes from Peter Lougheed Centre</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Clock className="w-8 h-8 text-[#299470] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Extended Hours</h3>
                  <p className="text-sm text-muted-foreground">Open 7:30 AM - 11:00 PM daily</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Phone className="w-8 h-8 text-[#299470] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Call Ahead</h3>
                  <p className="text-sm text-muted-foreground">587-391-8188 or 587-387-7254</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Find Us & Hours */}
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

