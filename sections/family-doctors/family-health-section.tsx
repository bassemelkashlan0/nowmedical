import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FamilyHealthSection() {
  return (
    <section className="py-[69px] bg-white">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <img
              src="/images/family-doctor/finding-doctor.png"
              alt="Family health"
              className="w-full"
            />
          </div>

          <div>
            <h2 className=" text-3xl lg:text-5xl font-bold mb-7 text-[#299470]">
              Your Family's Health, In<br /><span className="text-[#303030]"> Good Hands</span>
            </h2>
            <div className="space-y-4 text-muted-[#303030]">
              <p className="text-[#303030]">
              Finding a doctor who truly listens shouldn't be difficult. <b>At Now Medical Clinic,</b> our experienced family doctors offer <b>comprehensive, continuous care.</b>
              </p>
              <p className="text-[#303030]">
              We take the time to understand your medical history, lifestyle, and long-term health goals, so you can build a relationship with a doctor who knows you.
              </p>
              <p className="text-[#303030]  text-lg">
             <b>We're accepting new patients from all across Calgary — adults, seniors, and children.</b>
               </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                variant="outline"
                className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg font-bold"
                asChild
              >
                <Link href="tel:587-391-8188" className="flex items-center gap-2">
                  <img src="/icons/solar_phone-outline.svg" alt="Phone" className="w-5 h-5" />
                  Call: 587-391-8188
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

