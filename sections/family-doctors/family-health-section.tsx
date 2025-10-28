export default function FamilyHealthSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <img
              src="/images/modern-medical-clinic-interior-waiting-room.jpg"
              alt="Family health"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Your Family's Health, <span className="text-[#299470]">In Good Hands</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At Now Medical Clinic, our family doctors provide comprehensive healthcare for patients of all ages — from newborns to seniors. We focus on building long-term relationships with you and your family.
              </p>
              <p>
                Our physicians take the time to understand your unique health history, lifestyle, and concerns. We believe in preventive care, early detection, and personalized treatment plans that work for you.
              </p>
              <p>
                Whether you need routine check-ups, chronic disease management, or acute care, our team is here to support your family's health journey every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

