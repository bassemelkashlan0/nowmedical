export default function FamilyHealthSection() {
  return (
    <section className="py-[69px] bg-white">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <img
              src="/images/family-doctor/finding-doctor.png"
              alt="Family health"
              className="w-full"
            />
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-7 text-[#299470]">
              Your Family's Health, In<br /><span className="text-[#303030]"> Good Hands</span>
            </h2>
            <div className="space-y-4 text-muted-[#303030]">
              <p className="text-[#303030]">
              Finding a doctor who truly listens shouldn’t be difficult. <b>At Now Medical Clinic,</b> our experienced family doctors offer <b>comprehensive, continuous care.</b>
              </p>
              <p className="text-[#303030]">
              We take the time to understand your medical history, lifestyle, and long-term health goals, so you can build a relationship with a doctor who knows you.
              </p>
              <p className="text-[#303030]  text-lg">
             <b>We’re accepting new patients from all across Calgary — adults, seniors, and children.</b>
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

