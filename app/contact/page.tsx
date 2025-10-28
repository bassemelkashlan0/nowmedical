"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { 
  ContactInfoSection,
  WalkInBookSection,
  ComingFromHospitalSection,
  FindUsSection,
  SocialConnectSection
} from "@/sections";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#E8F5F3] to-white py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Contact <span className="text-[#299470]">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Get in touch with our team. We're here to answer your questions and help you get the care you need.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <ContactInfoSection />

        {/* Contact Form & Map */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Have a question or want to book an appointment? Fill out the form below and we'll get back to you as
                  soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="587-391-8188"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-[#299470] hover:bg-[#2D7B6F]">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Map & Info */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Visit Our Clinic</h2>
                <p className="text-muted-foreground mb-8">
                  We're conveniently located in Calgary with easy access and free parking.
                </p>

                <Card className="mb-6">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted relative overflow-hidden rounded-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.0!2d-114.0719!3d51.0447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDAyJzQwLjkiTiAxMTTCsDA0JzE4LjgiVw!5e0!3m2!1sen!2sca!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Now Medical Clinic Location"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Getting Here</h3>
                    <div className="space-y-4 text-sm text-muted-foreground">
                      <div>
                        <p className="font-medium text-foreground mb-1">By Car</p>
                        <p>
                          Free parking available in our building's parking lot. Street parking also available nearby.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Accessibility</p>
                        <p>
                          Our clinic is wheelchair accessible with elevator access and accessible washrooms available.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Walk In or Book Section */}
        <WalkInBookSection
          image="/modern-medical-clinic-reception-area-with-friendly.jpg"
        />

        {/* Coming from Hospital Section */}
        <ComingFromHospitalSection
          image="/modern-medical-clinic-exterior-building.jpg"
        />

        {/* Social Connect */}
        <SocialConnectSection />

        {/* Find Us */}
        <FindUsSection />

        {/* Emergency Notice */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Card className="border-2 border-destructive/20 bg-destructive/5">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4 text-destructive">Medical Emergency?</h2>
                  <p className="text-muted-foreground mb-6">
                    If you are experiencing a life-threatening emergency such as chest pain, difficulty breathing,
                    severe bleeding, or loss of consciousness, please call 911 or go to the nearest emergency room
                    immediately.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Our walk-in clinic is designed for non-life-threatening conditions and urgent care needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
