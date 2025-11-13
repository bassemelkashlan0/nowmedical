import { ReactNode } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  buttons?: ReactNode;
  className?: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  image,
  buttons,
  className = ''
}: HeroSectionProps) {
  return (
    <section className={`py-10 lg:py-[54px] px-4 md:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            {subtitle && (
              <p className="text-lg font-medium mb-2">{subtitle}</p>
            )}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">{title}</h1>
            {description && (
              <p className="text-lg text-gray-600 mb-6">{description}</p>
            )}
            {buttons && <div className="flex gap-4">{buttons}</div>}
          </div>
          {image && (
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src={image}
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

