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
    <section className="py-15  px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-5xl font-bold mb-[10px] text-[#303930]">
          {title} 
        </h2>
        
        <p className="text-base md:text-lg text-[#303030] mb-6">{description}</p>

        <div className="flex gap-6 justify-center">
          <a
            href="https://instagram.com/nowmedicalclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center  hover:scale-110 transition-transform"
            aria-label="Follow us on Instagram"
          >
            <Image
              src="/icons/instagram-icon.svg"
              alt="Instagram"
              width={40}
              height={40}
            />
          </a>
          
          <a
            href="https://facebook.com/nowmedicalclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center  hover:scale-110 transition-transform"
            aria-label="Follow us on Facebook"
          >
            <Image
              src="/icons/facebook-icon.svg"
              alt="Facebook"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

