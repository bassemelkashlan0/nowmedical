import { Card } from '@/components/ui/card';
import { User } from 'lucide-react';

interface Experience {
  name: string;
  avatar?: string;
  date?: string;
  text: string;
}

interface PatientExperienceSectionProps {
  title?: string;
  experiences: Experience[];
}

export default function PatientExperienceSection({
  title = "Patient Experience",
  experiences
}: PatientExperienceSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-[#4A9B8E]">Patient</span> Experience
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <Card key={index} className="p-6">
              <p className="text-gray-700 mb-6 italic">"{experience.text}"</p>
              <div className="flex items-center gap-3">
                {experience.avatar ? (
                  <img
                    src={experience.avatar}
                    alt={experience.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#4A9B8E]/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-[#4A9B8E]" />
                  </div>
                )}
                <div>
                  <p className="font-semibold">{experience.name}</p>
                  {experience.date && (
                    <p className="text-sm text-gray-500">{experience.date}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

