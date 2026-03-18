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
    <main className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden text-white px-4">
      <div className="absolute inset-0 z-0">
        <Image
          src="/pakarnaattam-main.png"
          alt="background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover hidden lg:block"
        />

        <Image
          src="/pakarnaattam-home-phone.png"
          alt="background mobile"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover lg:hidden"
        />
      </div>

      <SoundToggle
        file="/torch.mp3"
        volume={1}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20"
      />

      <p className="absolute bottom-20 sm:bottom-24 w-full text-center text-sm sm:text-base md:text-lg animate-pulse z-20">
        Click on the torch to continue
      </p>

      <div
        className="
          absolute 
          bottom-20 sm:bottom-24 md:bottom-28 lg:bottom-0
          -right-2.5 sm:right-0

          w-90 lg:w-150 xl:w-175

          rotate-[-40deg]
          cursor-pointer
          z-20
        "
      >
        <Link href="/pakarnaattam/character">
          <Image
            src="/torchsvg.svg"
            alt="torch"
            priority
            width={3048}
            height={3048}
            className="w-full h-auto object-contain hover:animate-pulse transition"
          />
        </Link>
      </div>
    </main>
  );
}
