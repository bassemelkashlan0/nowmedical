"use client";

import { useState } from "react";

export function YouTubeThumbnailPlayer({ videoId, thumbnail }: { videoId: string; thumbnail: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&autoplay=1`}
        title="YouTube Shorts Video"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Play video"
      className="group relative flex h-full w-full items-center justify-center bg-black"
    >
      <img src={thumbnail} alt="Now Medical Clinic video" className="h-full w-auto object-contain" />
      <span className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-[#FF0000] shadow-lg transition-transform group-hover:scale-110 lg:h-20 lg:w-20">
        <svg viewBox="0 0 24 24" fill="white" className="ml-1 h-8 w-8 lg:h-10 lg:w-10">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
