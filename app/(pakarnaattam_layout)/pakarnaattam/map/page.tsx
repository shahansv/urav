"use client";

import MapDot from "@/components/web/map_dot";
import SoundToggle from "@/components/web/sound_toggle";
import { Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Torch from "@/components/web/torch";

export default function PakarnaattamMapPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        src="https://ik.imagekit.io/shahansv/Urav/map.png"
        alt="Map"
        fill
        priority
        className="object-cover"
      />
      <header className="absolute top-0 left-0 w-full px-6 py-6 z-20">
        <div className="flex items-center justify-between">
          <Link href="/initiative/pakarnaattam">
            <Home className="cursor-pointer text-white transition hover:scale-110" />
          </Link>
          <SoundToggle file="/torch.mp3" />
        </div>
      </header>
      <p className="absolute top-24 w-full text-center text-white z-20 animate-pulse">
        Point the torch towards the dots to select
      </p>
      <Link href="/pakarnaattam/map/ritualforms">
        <MapDot
          top="58.5%"
          left="11.5%"
          image="https://ik.imagekit.io/shahansv/Urav/RitualForms.png"
          title="Ritual Forms"
          desc="(Stories on, Six Theyyam Figures)"
          position="bottom-right"
        />
      </Link>

      <Link href="/pakarnaattam/map/rhythms">
        <MapDot
          top="50.5%"
          left="34.8%"
          image="https://ik.imagekit.io/shahansv/Urav/Rhythms.png"
          title="Rhythms"
          desc="(Musical Elements of Theyyam)"
          position="top-left"
        />
      </Link>

      <Link href="/pakarnaattam/map/making">
        <MapDot
          top="41.5%"
          left="58.5%"
          image="https://ik.imagekit.io/shahansv/Urav/Making.png"
          title="The Making"
          desc="(Paint, Costume, Ornaments Sacred Objects and Weapons)"
          position="top-right"
        />
      </Link>

      <Link href="/pakarnaattam/map/deity">
        <MapDot
          top="70.5%"
          left="84.5%"
          image="https://ik.imagekit.io/shahansv/Urav/HumanBehindtheDeity.png"
          title="Human Behind the Deity"
          desc="(Socio-Cultural Life of Theyyam Artists)"
          position="left"
        />
      </Link>
      <Torch />
    </div>
  );
}
