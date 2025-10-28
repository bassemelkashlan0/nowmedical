export default function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="text-[#299470]">Mission</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our mission is to provide accessible, high-quality healthcare to the Calgary community when you need it most. We believe that healthcare should be convenient, compassionate, and comprehensive.
              </p>
              <p>
                We're committed to building long-term relationships with our patients and their families, providing continuity of care that goes beyond treating symptoms. We take the time to listen, understand, and address your health concerns with personalized attention.
              </p>
              <p>
                By offering extended hours, walk-in services, and family medicine, we ensure that quality healthcare is available to you and your loved ones, regardless of your schedule or health needs.
              </p>
            </div>
          </div>

          <div>
            <img
              src="/images/modern-medical-clinic-interior-waiting-room.jpg"
              alt="Doctor consulting with patient"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

