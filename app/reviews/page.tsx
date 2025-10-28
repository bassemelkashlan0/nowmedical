import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { 
  TestimonialsSection,
  VideoTestimonialsSection,
  CTABannerSection 
} from "@/sections";
import { StructuredData, generateAggregateRatingSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Reviews & Ratings | Now Medical Clinic Calgary",
  description: "Read over 500+ reviews from real patients. 4.8★ rating. See why Calgary trusts Now Medical Clinic for walk-in and family doctor services.",
  keywords: ["patient reviews", "clinic ratings", "google reviews", "calgary clinic reviews", "5 star clinic"],
  alternates: {
    canonical: "https://nowmedical.ca/reviews"
  }
};

export default function ReviewsPage() {
  const testimonials = [
    {
      name: "Sanny Cooper",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Really good experience at this walk-in clinic. I was in and out in about 1.5 hours, and most of that wait was for the pharmacy inside (they're a little slow). The clinic itself runs smoothly, staff were friendly, and it's very convenient to have the pharmacy on-site. They even have a nice coffee machine in the waiting area (said, but nice to have)."
    },
    {
      name: "Bill Grabovac",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Fast service! Well managed medical clinic! Got to see a medical Dr after a 5 minute wait at 7:50pm. There was a small fee as we did not have an Alberta Health Care Number. The Dr was knowledgeable with the medical condition we experienced. Very Happy with the service we received. A+"
    },
    {
      name: "Jetta Lush",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "This place was awesome!!! Hours are wonderful, worked so well for me and my specific situation (working single parent), employees were warm and welcoming. Super fast efficient, doctor was warm, welcoming and super thorough. Great experience overall. Plus the food, drinks and snacks offering, as well as the pharmacy being attached. Modernized way of having a clinic, well done! I will definitely come back here if I ever need to."
    },
    {
      name: "Sanny Cooper",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Really good experience at this walk-in clinic. I was in and out in about 1.5 hours, and most of that wait was for the pharmacy inside (they're a little slow). The clinic itself runs smoothly, staff were friendly, and it's very convenient to have the pharmacy on-site."
    },
    {
      name: "Bill Grabovac",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Fast service! Well managed medical clinic! Got to see a medical Dr after a 5 minute wait at 7:50pm. There was a small fee as we did not have an Alberta Health Care Number. The Dr was knowledgeable with the medical condition we experienced. Very Happy with the service we received. A+"
    },
    {
      name: "Jetta Lush",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "This place was awesome!!! Hours are wonderful, worked so well for me and my specific situation (working single parent), employees were warm and welcoming. Super fast efficient, doctor was warm, welcoming and super thorough. Great experience overall."
    },
    {
      name: "Sanny Cooper",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Really good experience at this walk-in clinic. I was in and out in about 1.5 hours, and most of that wait was for the pharmacy inside (they're a little slow). The clinic itself runs smoothly, staff were friendly, and it's very convenient to have the pharmacy on-site."
    },
    {
      name: "Bill Grabovac",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "Fast service! Well managed medical clinic! Got to see a medical Dr after a 5 minute wait at 7:50pm. There was a small fee as we did not have an Alberta Health Care Number. The Dr was knowledgeable with the medical condition we experienced. Very Happy with the service we received. A+"
    },
    {
      name: "Jetta Lush",
      avatar: "/images/placeholder-user.jpg",
      rating: 5,
      text: "This place was awesome!!! Hours are wonderful, worked so well for me and my specific situation (working single parent), employees were warm and welcoming. Super fast efficient, doctor was warm, welcoming and super thorough. Great experience overall."
    }
  ];

  const videoTestimonials = [
    {
      name: "Bessie Cooper",
      image: "/placeholder-user.jpg",
      quote: "Finally a clinic open late that actually cares about patients."
    },
    {
      name: "Jenny Wilson",
      image: "/placeholder-user.jpg",
      quote: "Friendly staff, short wait times, and doctors who listen."
    },
    {
      name: "Cameron Williamson",
      image: "/placeholder-user.jpg",
      quote: "This clinic makes it easy for families — especially on weekends and holidays."
    }
  ];

  const aggregateRatingSchema = generateAggregateRatingSchema({
    ratingValue: 4.8,
    reviewCount: 500
  });

  return (
    <>
      <StructuredData data={aggregateRatingSchema} />
      
      <div className="flex min-h-screen flex-col">
        <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#E8F5F3] to-white py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Over <span className="text-[#299470]">500+ Reviews</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                See what our patients are saying about their experiences at Now Medical Clinic. We're proud to serve the Calgary community with exceptional healthcare.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <TestimonialsSection
          title="Over 500+ Reviews"
          testimonials={testimonials}
          showAll={true}
        />

        {/* Video Testimonials Section */}
        <VideoTestimonialsSection
          title="What Patients Say"
          testimonials={videoTestimonials}
        />

        {/* CTA Banner */}
        <CTABannerSection
          title="Now Medical Clinic Calgary's Walk-In & Family Doctor Clinic. Open Late Every Day."
          primaryButtonText="Call 587-391-8188"
          primaryButtonLink="tel:587-391-8188"
        />
      </main>

        <Footer />
      </div>
    </>
  );
}

