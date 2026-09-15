import { useEffect, useRef, useState } from "react";

export default function HeroVideoCarousel({
  videos,
  interval = 7000,
}: {
  videos: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % videos.length);
    }, interval);
    return () => clearInterval(id);
  }, [videos.length, interval]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [index]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-ink">
      {videos.map((src, i) => (
        <video
          key={src}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          muted
          loop
          playsInline
          autoPlay={i === 0}
          preload="auto"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
      <div className="absolute inset-0 bg-ink/55" />
    </div>
  );
}
