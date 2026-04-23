"use client";
import { useEffect, useRef, useState } from "react";

interface VideoBg1Props {
  videoURL?: string;
}

const VideoBg1: React.FC<VideoBg1Props> = ({ videoURL = "w9eRIGTHKJM" }) => {
  const playerRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined") {
      const loadScript = (src: string, onLoad: () => void) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = onLoad;
        document.body.appendChild(script);
      };

      loadScript("https://code.jquery.com/jquery-3.6.0.min.js", () => {
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery.mb.YTPlayer/3.3.9/jquery.mb.YTPlayer.min.js", () => {
          if (window.jQuery && playerRef.current) {
            const $player = window.jQuery(playerRef.current);
            $player.mb_YTPlayer();
            $player.on("YTPReady", () => {
              console.log("Player is ready!");
            });
          }
        });
      });
    }

    return () => {
      const jQueryScript = document.querySelector(
        'script[src="https://code.jquery.com/jquery-3.6.0.min.js"]'
      );
      const ytPlayerScript = document.querySelector(
        'script[src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mb.YTPlayer/3.3.9/jquery.mb.YTPlayer.min.js"]'
      );
      if (jQueryScript && document.body.contains(jQueryScript)) {
        document.body.removeChild(jQueryScript);
      }
      if (ytPlayerScript && document.body.contains(ytPlayerScript)) {
        document.body.removeChild(ytPlayerScript);
      }
    };
  }, []);

  if (!isClient) return null;

  return (
    <div
      className="player"
      ref={playerRef}
      data-property={`{
        "videoURL": "${videoURL}",
        "containment": ".video-bg-live",
        "showControls": false,
        "autoPlay": true,
        "zoom": 0,
        "loop": true,
        "mute": true,
        "startAt": 10,
        "opacity": 1,
        "quality": "default"
      }`}
    />
  );
};

export default VideoBg1;
