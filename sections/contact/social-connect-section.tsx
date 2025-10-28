import { Instagram, Facebook } from 'lucide-react';

interface SocialConnectSectionProps {
  title?: string;
  description?: string;
}

export default function SocialConnectSection({
  title = "Follow Us & Stay Connected",
  description = "Stay updated on clinic hours, health updates, and health tips"
}: SocialConnectSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Follow Us & <span className="text-[#4A9B8E]">Stay Connected</span>
        </h2>
        
        <p className="text-lg text-gray-600 mb-8">{description}</p>

        <div className="flex gap-6 justify-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-full hover:scale-110 transition-transform"
          >
            <Instagram className="w-8 h-8" />
          </a>
          
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform"
          >
            <Facebook className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}

