"use client";

import Image from "next/image";
import SoundToggle from "@/components/web/sound_toggle";
import localFont from "next/font/local";
import Link from "next/link";

const KugileFont = localFont({
  src: "../../fonts/Kugile.ttf",
});

export default function ViewPakarnaattamPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black bg-[url('https://ik.imagekit.io/shahansv/Urav/bgImage.png')] bg-cover bg-center bg-no-repeat px-4 text-white">
      <SoundToggle
        file="/torch.mp3"
        volume={1}
        className="absolute top-6 right-6"
      />

      <h1
        className={`text-center leading-none text-5xl sm:text-7xl md:text-8xl lg:text-9xl ${KugileFont.className} `}
      >
        Pakarn<span className="text-red-700">aa</span>ttam
      </h1>

      <p className="absolute bottom-24 w-full animate-pulse text-center text-sm sm:text-base md:text-lg">
        Click on the torch to continue
      </p>

      <div className="absolute bottom-32 lg:bottom-0 right-0 w-45 sm:w-62.5 md:w-87.5 lg:w-125 rotate-[-40deg] cursor-pointer">
        <Link href={"/pakarnaattam/character"}>
          <Image
            src="https://ik.imagekit.io/shahansv/Urav/torch.png?updatedAt=1772385360191"
            alt="torch"
            priority
            width={2048}
            height={2048}
            className="w-full h-auto object-contain hover:animate-pulse"
          />
        </Link>
      </div>
    </main>
  );
}
