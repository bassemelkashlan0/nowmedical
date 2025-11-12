import { ReactNode } from 'react';

interface StorySectionProps {
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  content: (string | ReactNode)[];
  images?: string[];
  title_color?: string,
  sub_color?: string,
  sec_py?: string

}

export default function StorySection({
  title = "Our",
  subtitle = "Story",
  content,
  images = [],
  title_color,
  sub_color,
  sec_py
}: StorySectionProps) {
  return (
    <section className={"  " + (sec_py ? sec_py : " py-10 lg:py-[54px] ")}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
          {images[0] ? (
            <div className="relative overflow-hidden">
              <img
                src={images[0]}
                alt="Now Medical Clinic team providing compassionate healthcare to Calgary community"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="relative overflow-hidden">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/X0BcuE-6Kuw?rel=0&modestbranding=1&showinfo=0"
                title="YouTube Shorts Video"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className="space-y-4 pl-6">
            <h2 className={"text-3xl lg:text-5xl font-bold mb-4 " + (title_color ? title_color : " text-[#303030] ")}>
              {title}

              {typeof subtitle == 'string' ? (
                <span className={sub_color ? sub_color : "text-[#299470]"}>
                  {subtitle}
                </span>
              ) : (
                subtitle
              )}
            </h2>

            {content.map((paragraph, index) => (
              <p key={index} className="text-base text-[#050505] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}

