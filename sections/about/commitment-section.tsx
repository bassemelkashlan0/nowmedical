export default function CommitmentSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Our Commitment <span className="text-[#299470]">to Calgary</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're proud to be part of the Calgary community, serving families from all walks of life. Our commitment goes beyond medical care — we're here to support the health and wellbeing of every patient who walks through our doors.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center p-6 rounded-lg bg-gray-50">
            <div className="text-4xl font-bold text-[#299470] mb-2">7 Days</div>
            <p className="text-muted-foreground">Open every day including weekends and holidays</p>
          </div>

          <div className="text-center p-6 rounded-lg bg-gray-50">
            <div className="text-4xl font-bold text-[#299470] mb-2">11 PM</div>
            <p className="text-muted-foreground">Extended hours to fit your busy schedule</p>
          </div>

          <div className="text-center p-6 rounded-lg bg-gray-50">
            <div className="text-4xl font-bold text-[#299470] mb-2">100%</div>
            <p className="text-muted-foreground">Dedicated to your health and wellbeing</p>
          </div>
        </div>
      </div>
    </section>
  );
}

