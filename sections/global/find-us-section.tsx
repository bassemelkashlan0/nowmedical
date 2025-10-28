interface FindUsSectionProps {
  mapEmbedUrl?: string;
}

export default function FindUsSection({
  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.8!2d-114.0!3d51.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1"
}: FindUsSectionProps) {
  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Find us <span className="text-[#2D7B6F]">on the Map</span>
        </h2>

        <div className="rounded-lg overflow-hidden border-2 border-gray-200 mb-4">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Now Medical Clinic Location Map"
          />
        </div>

        <p className="text-center text-gray-600 text-sm md:text-base">
          <strong>Free Parking Available</strong> | Accessible for Carry Visitors
        </p>
      </div>
    </section>
  );
}

