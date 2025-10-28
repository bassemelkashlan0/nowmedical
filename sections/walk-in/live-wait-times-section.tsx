import { Card } from '@/components/ui/card';
import { Clock, TrendingDown } from 'lucide-react';

interface WaitTimeComparison {
  location: string;
  hospital: string;
  nowMedical: string;
}

interface LiveWaitTimesSectionProps {
  title?: string;
  currentWaitTime?: string;
  comparisons?: WaitTimeComparison[];
}

export default function LiveWaitTimesSection({
  title = "Hospital Wait Times vs. Now Medical Clinic",
  currentWaitTime = "< 30 min",
  comparisons = [
    { location: 'Peter Lougheed', hospital: '2-4 hr', nowMedical: '< 30 min' },
    { location: 'Rockyview', hospital: '3-5 hr', nowMedical: '< 30 min' },
    { location: 'South Health', hospital: '2-3 hr', nowMedical: '< 30 min' },
  ]
}: LiveWaitTimesSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Hospital Wait Times <span className="text-[#4A9B8E]">vs. Now Medical Clinic</span>
        </h2>

        <div className="bg-[#4A9B8E]/5 p-8 rounded-lg mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Clock className="w-12 h-12 text-[#4A9B8E]" />
            <div>
              <p className="text-sm text-gray-600">Current Wait Time</p>
              <p className="text-4xl font-bold text-[#4A9B8E]">{currentWaitTime}</p>
            </div>
          </div>
          <p className="text-center text-gray-600">
            Skip the long hospital wait times and visit our walk-in clinic today!
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-6 font-bold">Location</th>
                <th className="text-left py-4 px-6 font-bold">Hospital Wait Time</th>
                <th className="text-left py-4 px-6 font-bold text-[#4A9B8E]">
                  Now Medical Clinic
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comparison, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-4 px-6">{comparison.location}</td>
                  <td className="py-4 px-6 text-red-600 font-semibold">
                    {comparison.hospital}
                  </td>
                  <td className="py-4 px-6 text-[#4A9B8E] font-semibold flex items-center gap-2">
                    {comparison.nowMedical}
                    <TrendingDown className="w-4 h-4" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

