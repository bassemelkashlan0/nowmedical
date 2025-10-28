import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { 
  DoctorCategoriesSection,
  TestimonialsSection,
  FindUsSection,
  CTABannerSection 
} from "@/sections";

export default function DoctorsPage() {
  const femaleDoctors = [
    {
      name: "Dr. Madiha",
      avatar: "/female-doctor-illustration-avatar.jpg",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Vanessa",
      avatar: "/female-doctor-illustration-avatar-brown-hair.jpg",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Madiha",
      avatar: "/female-doctor-illustration-avatar.jpg",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Ebele",
      avatar: "/female-doctor-illustration-avatar-brown-hair.jpg",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    }
  ];

  const maleDoctors = [
    {
      name: "Dr. Bedi",
      avatar: "/male-doctor-illustration-avatar.jpg",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Michael",
      avatar: "/male-doctor-illustration-avatar.jpg",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      language: "Spanish",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Vanessa",
      avatar: "/male-doctor-illustration-avatar.jpg",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    },
    {
      name: "Dr. Ebele",
      avatar: "/male-doctor-illustration-avatar.jpg",
      specialty: "Family Doctors",
      description: "Experienced in family practice and children's care.",
      phone: "587-391-8188"
    }
  ];

  const testimonials = [
    {
      name: "Sanny Cooper",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      text: "Really good experience at this walk-in clinic. I was in and out in about 1.5 hours, and most of that wait was for the pharmacy inside (they're a little slow). The clinic itself runs smoothly, staff were friendly, and it's very convenient to have the pharmacy on-site."
    },
    {
      name: "Bill Grabovac",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      text: "Fast service! Well managed medical clinic! Got to see a medical Dr after a 5 minute wait at 7:50pm. There was a small fee as we did not have an Alberta Health Care Number. The Dr was knowledgeable with the medical condition we experienced. Very Happy with the service we received. A+"
    },
    {
      name: "Jetta Lush",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      text: "This place was awesome!!! Hours are wonderful, worked so well for me and my specific situation (working single parent), employees were warm and welcoming. Super fast efficient, doctor was warm, welcoming and super thorough. Great experience overall."
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
                Meet <span className="text-[#299470]">Our Doctors</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Our team of experienced, board-certified physicians is dedicated to providing exceptional care to every
                patient.
              </p>
            </div>
          </div>
        </section>

        {/* Doctors Categories */}
        <DoctorCategoriesSection
          title="Meet Our Doctors"
          femaleDoctors={femaleDoctors}
          maleDoctors={maleDoctors}
        />

        {/* Testimonials */}
        <TestimonialsSection
          title="What Patients Say"
          testimonials={testimonials}
        />

        {/* Find Us */}
        <FindUsSection />

        {/* CTA Banner */}
        <CTABannerSection
          title="Ready to Meet Our Team? Book an appointment or walk in today."
          primaryButtonText="Call 587-391-8188"
          primaryButtonLink="tel:587-391-8188"
        />
      </main>

      <Footer />
    </div>
  );
}
