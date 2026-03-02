"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

type SoundToggleProps = {
  file: string;
  volume?: number;
};

export default function SoundToggle({ file, volume = 1 }: SoundToggleProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = true;

    const navigationEntries = performance.getEntriesByType(
      "navigation",
    ) as PerformanceNavigationTiming[];

    const navType = navigationEntries[0]?.type;

    if (navType === "reload") {
      audio.muted = true;
      setIsMuted(true);
    } else {
      audio.muted = false;
      audio.play().catch(() => {});
      setIsMuted(false);
    }
  }, [volume]);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.muted = false;
      audio.play().catch(() => {});
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={file} />

      <button
        aria-label="Toggle Sound"
        onClick={toggleSound}
        className="absolute right-4 top-4 cursor-pointer transition hover:scale-110"
        type="button"
      >
        {isMuted ? <VolumeX /> : <Volume2 />}
      </button>
    </>
  );
}
