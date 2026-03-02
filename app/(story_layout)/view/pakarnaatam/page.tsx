"use client";

import Image from "next/image";
import torch from "../../../../assets/torch.gif";
import SoundToggle from "@/components/web/sound_toggle";
import localFont from "next/font/local";

const KugileFont = localFont({
  src: "../../../fonts/Kugile.ttf",
});

export default function ViewPakarnaatamPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 text-neutral-200">
      <SoundToggle file="/torch.mp3" volume={1} />

      <h1
        className={`text-center font-semibold leading-none text-5xl sm:text-7xl md:text-8xl lg:text-9xl ${KugileFont.className} `}
      >
        Pakarn<span className="text-red-700">aa</span>ttam
      </h1>

      <p className="absolute bottom-24 w-full animate-pulse text-center text-sm sm:text-base md:text-lg">
        Click on the torch to continue
      </p>

      <div className="absolute bottom-32 lg:bottom-2 right-12 w-12 rotate-[-40deg] cursor-pointer sm:w-14 md:w-16 lg:w-20">
        <Image
          src={torch}
          alt="torch"
          priority
          className="h-auto w-full object-contain"
        />
      </div>
    </main>
  );
}
