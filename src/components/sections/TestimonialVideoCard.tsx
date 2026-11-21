"use client";

import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

export function TestimonialVideoCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-[1.75rem] border-2 border-[#111113] bg-navy-950 shadow-[7px_8px_0_0_#111113] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[9px_10px_0_0_#111113] lg:aspect-auto lg:h-full lg:min-h-[23.5rem]">
      <video
        ref={videoRef}
        src="/videos/client-stories.mp4"
        poster="/images/testimonials/video-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      />

      {/* Subtle bottom cinematic readability scrim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/15 to-transparent"
      />

      {/* Top-left live reel pill */}
      <div className="pointer-events-none absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-navy-950/65 px-3 py-1.5 backdrop-blur-md">
        <span className="size-2 rounded-full bg-brand-500 shadow-[0_0_8px_#2aabe2]" />
        <span className="font-display text-[11px] font-bold tracking-[0.08em] text-white uppercase">
          Founder Reel
        </span>
      </div>

      {/* Bottom caption + Play/Pause control */}
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 sm:inset-x-5 sm:bottom-5">
        <div className="pointer-events-none">
          <p className="font-display text-sm leading-snug font-bold text-white sm:text-[15px]">
            Inside our 8-figure brand partnerships
          </p>
          <p className="mt-0.5 text-xs font-medium text-white/75">
            150+ Amazon brands scaled profitably
          </p>
        </div>

        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause founder reel video" : "Play founder reel video"}
          className="inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-brand-500 text-white shadow-[0_8px_22px_-4px_rgba(42,171,226,0.65)] transition-all duration-200 hover:scale-105 hover:bg-brand-600 active:scale-95"
        >
          {isPlaying ? (
            <Pause className="size-4 fill-current" aria-hidden="true" />
          ) : (
            <Play className="size-4 translate-x-0.5 fill-current" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
