import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MissionSection() {
  return (
    <section className=" py-10 lg:py-[54px] bg-[#F1F9F4]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 ">
              Our <span className="text-[#299470]">Mission</span>
            </h2>
            <div className="space-y-4 text-[#303030]  ">
              <p className="mb-8">
              To provide timely, <b>compassionate, and patient-centered healthcare </b>— every day of the week.
              </p>
              <p>
              We know that illness doesn't wait for office hours.<br/>That's why our doors <b>stay open from 7:30 AM to 11:00 PM</b>, every single day, <br/><b>including weekends and holidays</b>.<br/> Our mission is simple: when Calgary needs care — we're here.
              </p>
            </div>
            <div className="flex flex-wrap flex-row gap-4 mt-8">
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

          <div>
            <img
              src="/images/about-us/our-mission.png"
              alt="Doctor consulting with patient"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

