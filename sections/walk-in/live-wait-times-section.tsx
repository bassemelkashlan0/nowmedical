interface LiveWaitTimesSectionProps {
  title?: string;
  currentWaitTime?: string;
}

const comparisonData = [
  {
    label: "Average Wait Time",
    hospital: "3-8 hours",
    clinic: "usually under 30 minutes"
  },
  {
    label: "Appointment Needed",
    hospital: "Often yes",
    clinic: "No appointment needed"
  },
  {
    label: "Care Type",
    hospital: "Emergency or trauma",
    clinic: "Walk-in, family, and urgent care"
  },
  {
    label: "Open Hours",
    hospital: "Varies by hospital",
    clinic: "7:30 AM - 11:00 PM daily"
  },
  {
    label: "Doctors on site",
    hospital: "Yes",
    clinic: "Yes - family doctors"
  }
];

export default function LiveWaitTimesSection({
  title = "Hospital Wait Times vs. Now Medical Clinic",
  currentWaitTime = "< 30 min"
}: LiveWaitTimesSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#F1F9F4]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">
          <span className="text-[#299470]">Hospital Wait Times</span> <span className="text-[#303030]">vs. Now Medical Clinic</span>
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse overflow-hidden border border-gray-200">
            <thead>
              <tr className="bg-[#A7D3C4]">
                <th className="text-left text-lg py-4 px-6 font-bold border border-gray-200"></th>
                <th className="text-center text-lg py-4 px-6 font-bold border border-gray-200">
                  Average Hospital ER (Calgary)
                </th>
                <th className="text-center text-lg py-4 px-6 font-bold border border-gray-200">
                  Now Medical Clinic
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr 
                  key={index} 
                  className={index % 2 === 0 ? "bg-transparent" : "bg-[#F9F9F9]"}
                >
                  <td className="py-4 px-6 font-bold text-lg border border-gray-200">
                    {row.label}
                  </td>
                  <td className="py-4 px-6 text-center text-lg border border-gray-200">
                    {row.hospital}
                  </td>
                  <td className="py-4 px-6 text-center text-lg border border-gray-200">
                    {row.clinic}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-left">
          If you have life-threatening symptoms such as chest pain, severe bleeding, or trouble breathing, <strong>call 911</strong> <br />
           or go to the nearest emergency department.
        </p>
      </div>
    </section>
  );
}
