import { Check } from "lucide-react";

export default function DifferenceSection() {
  const differences = [
    "Open 7 days a week until 11 PM (including weekends & holidays)",
    "Real family doctors on-site — not just walk-in staff",
    "Minimal wait times compared to ERs and traditional clinics",
    "On-site pharmacy for added convenience",
    "Free parking and wheelchair accessibility",
    "Multilingual staff to serve Calgary's diverse community"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <img
              src="/images/modern-medical-clinic-reception-area-with-friendly.jpg"
              alt="Medical clinic reception area"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              What Makes <span className="text-[#299470]">Now Medical Clinic</span> Different
            </h2>
            <div className="space-y-4">
              {differences.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#299470]/10 flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-[#299470]" />
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

