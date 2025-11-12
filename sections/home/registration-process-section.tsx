import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, UserPlus, Phone } from 'lucide-react';

interface RegistrationStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface RegistrationProcessSectionProps {
  title?: string;
  steps?: RegistrationStep[];
}

export default function RegistrationProcessSection({
  title = "How to Register",
  steps = [
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Click to Register as a New Patient",
      description: "Fill out our simple online registration form with your basic information."
    },
    {
      icon: <UserPlus className="w-12 h-12" />,
      title: "Submit Your Request",
      description: "Review and submit your registration. We'll process it right away."
    },
    {
      icon: <Phone className="w-12 h-12" />,
      title: "We'll Contact You Shortly",
      description: "Our team will reach out to confirm your registration and schedule your first visit."
    }
  ]
}: RegistrationProcessSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          How to <span className="text-[#4A9B8E]">Register</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 text-center">
              <div className="inline-flex p-4 rounded-full bg-[#4A9B8E]/10 mb-6">
                <div className="text-[#4A9B8E]">{step.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-[#4A9B8E] hover:bg-[#3d8375] hidden">
            Register as New Patient
          </Button>
        </div>
      </div>
    </section>
  );
}

