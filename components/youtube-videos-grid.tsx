"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  videoUrl: string;
  channelTitle: string;
}

interface YouTubeVideosGridProps {
  channelId?: string;
  maxResults?: number;
  title?: string;
  description?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  bgColor?: string;
  className?: string;
}

export function YouTubeVideosGrid({ 
  channelId, 
  maxResults = 50,
  title,
  description,
  showButton = false,
  buttonText = "See More",
  buttonLink = "#",
  bgColor = "bg-white",
  className = ""
}: YouTubeVideosGridProps) {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(9);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        // Pass channelId if provided, otherwise API route will use env variable
        if (channelId) {
          params.append("channelId", channelId);
        }
        params.append("maxResults", maxResults.toString());

        const response = await fetch(`/api/youtube-videos?${params.toString()}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch videos");
        }

        setVideos(data.videos || []);
      } catch (err: any) {
        console.error("Error fetching YouTube videos:", err);
        setError(err.message || "Failed to load videos");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [channelId, maxResults]);

  const displayedVideos = showAll ? videos : videos.slice(0, displayedCount);
  const hasMoreVideos = videos.length > displayedCount;

  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, "_blank", "noopener,noreferrer");
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const sectionClassName = `py-[54px] ${bgColor} ${className}`.trim();

  if (loading) {
    return (
      <section className={sectionClassName}>
        <div className="container">
          <div className="text-center py-12">
            <p className="text-lg text-[#303030]">Loading videos...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={sectionClassName}>
        <div className="container">
          <div className="text-center py-12">
            <p className="text-lg text-red-600">Error: {error}</p>
            <p className="text-sm text-gray-500 mt-2">
              Please make sure the YouTube API key and channel ID are configured correctly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (videos.length === 0) {
    return (
      <section className={sectionClassName}>
        <div className="container">
          <div className="text-center py-12">
            <p className="text-lg text-[#303030]">No videos found.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={sectionClassName}>
      <div className="container">
        {/* Optional Heading and Description */}
        {(title || description) && (
          <div className="text-center mb-12 max-w-4xl mx-auto">
            {title && (
              <h2 className="text-3xl lg:text-5xl font-bold text-[#303030] mb-4">
                {title.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    const text = part.replace(/\*\*/g, '');
                    return (
                      <span key={index} className="text-[#299470]">{text}</span>
                    );
                  }
                  return <span key={index}>{part}</span>;
                })}
              </h2>
            )}
            {description && (
              <p className="text-base md:text-lg text-[#050505] mt-4">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {displayedVideos.map((video) => (
            <Card
              key={video.id}
              className="bg-white p-0 overflow-hidden rounded hover:shadow-lg transition-shadow border-1 border-[#83C1AC] hover:bg-[#EAF4F1] cursor-pointer"
              onClick={() => handleVideoClick(video.videoUrl)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gray-100 group">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-[290px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 flex items-center justify-center transition-colors">
                    <div className="w-16 h-16 bg-[#299470] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-[#303030] mb-3 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-base text-[#050505] italic line-clamp-2">
                    {video.description || "Watch this video testimonial"}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        {videos.length > displayedCount && !showButton && (
          <div className="text-center mt-6">
            <Button
              variant="outline"
              size="lg"
              className="border-[#299470] text-lg font-bold text-[#299470] hover:bg-[#299470]/10"
              onClick={toggleShowAll}
            >
              <span>{showAll ? "Show Less" : "Show More"}</span>
              <img 
                src="/icons/uil-arrow-up-right-grn.svg" 
                alt="" 
                className={`w-5 h-5 ml-2 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              />
            </Button>
          </div>
        )}

        {/* Buttons - Show both call button and custom button together */}
        {((showButton && buttonText && buttonLink) || (bgColor && bgColor !== "bg-transparent" && bgColor.trim() !== "")) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            {/* Call Button - Show first with background if custom button is transparent */}
            {(bgColor && bgColor !== "bg-transparent" && bgColor.trim() !== "") && (
              <Button
                size="lg"
                className="bg-[#299470] hover:bg-[#2D7B6F] text-white text-lg font-bold"
                asChild
              >
                <Link href="tel:587-391-8188" className="flex items-center gap-2">
                  <img src="/icons/btn_phone-outline-icon.svg" alt="Phone" className="w-5 h-5 brightness-0 invert" />
                  Call: 587-391-8188
                </Link>
              </Button>
            )}
            
            {/* Custom Button (if showButton is true) */}
            {showButton && buttonText && buttonLink && (
              <Button
                variant="outline"
                size="lg"
                className="border-[#299470] text-[#299470] hover:bg-[#299470]/10 bg-transparent text-lg font-bold"
                asChild
              >
                <Link href={buttonLink} className="flex items-center gap-2">
                  <span>{buttonText}</span>
                  <img 
                    src="/icons/uil-arrow-up-right-grn.svg" 
                    alt="" 
                    className="w-5 h-5"
                  />
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

