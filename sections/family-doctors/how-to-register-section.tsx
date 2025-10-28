import { FileText, Phone, Stethoscope } from "lucide-react";

export default function HowToRegisterSection() {
  const steps = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call or Register as a New Patient",
      description: "Contact us to begin the registration process or register during your first visit"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Submit Your Request",
      description: "Complete a simple registration form with your health information and insurance details"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "We'll Contact You Shortly",
      description: "Our team will reach out to schedule your first appointment with your new family doctor"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            How to <span className="text-[#299470]">Register</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started with a new family doctor is simple and straightforward
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F5F3] text-[#299470] mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:587-391-8188"
            className="inline-flex items-center justify-center rounded-md bg-[#299470] px-8 py-3 text-white hover:bg-[#2D7B6F] transition-colors font-medium"
          >
            Call 587-391-8188 to Register
          </a>
        </div>
      </div>
    </section>
  );
}

