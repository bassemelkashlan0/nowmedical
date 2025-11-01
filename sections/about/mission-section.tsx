export default function MissionSection() {
  return (
    <section className="py-20 bg-[#F1F9F4]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">
              Our <span className="text-[#299470]">Mission</span>
            </h2>
            <div className="space-y-4 text-foreground">
              <p>
              To provide timely, <b>compassionate, and patient-centered healthcare </b>— every day of the week.
              </p>
              <p>
              We know that illness doesn’t wait for office hours.<br/>That’s why our doors <b>stay open from 7:30 AM to 11:00 PM</b>, every single day, <br/><b>including weekends and holidays</b>.<br/> Our mission is simple: when Calgary needs care — we’re here.
              </p>
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

