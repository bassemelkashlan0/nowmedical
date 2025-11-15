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
      name: "Sarah Cooper",
      avatar: "/images/reviews/wman-user-1.jpg",
      rating: 5,
      text: "Really good experience at this walk-in clinic. I was in and out in about 1.5 hours, and most of that wait was for the pharmacy inside (they're a little slow). The clinic itself runs smoothly, staff were friendly, and it's very convenient to have the pharmacy on-site. They even have a nice coffee machine in the waiting area (said, but nice to have)."
    },
    {
      name: "Bill Grabovac",
      avatar: "/images/reviews/man-user-1.jpg",
      rating: 5,
      text: "Fast service! Well managed medical clinic! Got to see a medical Dr after a 5 minute wait at 7:50pm. There was a small fee as we did not have an Alberta Health Care Number. The Dr was knowledgeable with the medical condition we experienced. Very Happy with the service we received. A+"
    },
    {
      name: "Jetta Lush",
      avatar: "/images/reviews/wman-user-2.jpg",
      rating: 5,
      text: "This place was awesome!!! Hours are wonderful, worked so well for me and my specific situation (working single parent), employees were warm and welcoming. Super fast efficient, doctor was warm, welcoming and super thorough. Great experience overall. Plus the food, drinks and snacks offering, as well as the pharmacy being attached. Modernized way of having a clinic, well done! I will definitely come back here if I ever need to."
    },
    {
      name: "Michael Chen",
      avatar: "/images/reviews/man-user-2.jpg",
      rating: 5,
      text: "Excellent walk-in clinic experience! The staff was professional and efficient. I appreciated the short wait time and the doctor took time to listen to my concerns. The on-site pharmacy made everything so convenient. Will definitely return for future medical needs."
    },
    {
      name: "Emily Rodriguez",
      avatar: "/images/landing/review_1.png",
      rating: 5,
      text: "I visited with my kids and the whole experience was smooth. The doctor was patient and explained everything clearly. The clinic is clean, modern, and the extended hours work perfectly for busy families. Highly recommend this clinic!"
    },
    {
      name: "David Thompson",
      avatar: "/images/reviews/man-user-3.jpg",
      rating: 5,
      text: "Top-notch medical care! The wait was minimal, and the doctor was thorough and attentive. The facility is well-maintained and the staff friendly. The convenience of having the pharmacy right there saved me an extra trip. Great service all around."
    },
    {
      name: "Lisa Anderson",
      avatar: "/images/landing/review_2.png",
      rating: 5,
      text: "Best walk-in clinic I've been to in Calgary! The doctors are knowledgeable, the wait times are reasonable, and the service is excellent. I love that they're open late and on weekends - it's a lifesaver for working professionals like me."
    },
    {
      name: "James Wilson",
      avatar: "/images/reviews/man-user-4.jpg",
      rating: 5,
      text: "Professional and efficient service. I was seen quickly despite it being a busy evening. The doctor addressed all my concerns and provided clear instructions. The modern facility and friendly staff made the visit pleasant. Will definitely come back."
    },
    {
      name: "Amanda Martinez",
      avatar: "/images/landing/review_3.png",
      rating: 5,
      text: "Amazing clinic! The staff goes above and beyond to make you feel comfortable. The doctor took time to understand my medical history and provided personalized care. The extended hours are perfect for my schedule. I'm very satisfied with the service I received."
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
        <section className="bg-[#F1F9F4] py-10 lg:py-[54px]">
          <div className="container">
              <h1 className="text-4xl text-[#303030] lg:text-5xl xl:text-6xl font-bold">
                Over <span className="text-[#299470]">Reviews</span>
              </h1>
          </div>
        </section>

        {/* Reviews Section */}
        <TestimonialsSection
          title="Over 500+ Reviews"
          testimonials={testimonials}
          showAllToggle={true}
          showTitleAndSubtitle={false}
          hideBottomText={true}
          initialCount={6}
        />

      </main>

        <Footer />
      </div>
    </>
  );
}

