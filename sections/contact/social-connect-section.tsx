import Image from 'next/image';

interface SocialConnectSectionProps {
  title?: string;
  description?: string;
}

export default function SocialConnectSection({
  title = "Follow Us & Stay Connected",
  description = "Stay updated on clinic hours, health updates, and health tips"
}: SocialConnectSectionProps) {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          {title.split('&')[0]}& <span className="text-[#2D7B6F]">{title.split('&')[1]}</span>
        </h2>
        
        <p className="text-base md:text-lg text-gray-700 mb-8">{description}</p>

        <div className="flex gap-6 justify-center">
          <a
            href="https://instagram.com/nowmedicalclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 hover:scale-110 transition-transform"
            aria-label="Follow us on Instagram"
          >
            <Image
              src="/icons/instagram-icon.svg"
              alt="Instagram"
              width={64}
              height={64}
            />
          </a>
          
          <a
            href="https://facebook.com/nowmedicalclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 hover:scale-110 transition-transform"
            aria-label="Follow us on Facebook"
          >
            <Image
              src="/icons/facebook-icon.svg"
              alt="Facebook"
              width={64}
              height={64}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

