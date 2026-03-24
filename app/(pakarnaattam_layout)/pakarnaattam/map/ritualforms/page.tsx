"use client";

import SoundToggle from "@/components/web/sound_toggle";
import { Home, Map } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

type Shrine = {
  name: string;
  img: string;
  hoverImg: string;
  link: string;
};

export default function PakarnaattamRitualFormsPage() {
  const shrines: Shrine[] = [
    {
      name: "Kathivanoor Veeran",
      img: "/Kathivanoor-Veeran.png",
      hoverImg: "/Kathivanoor-Veeran-Hover.png",
      link: "/pakarnaattam/map/ritualforms/kathivanoor-veeran",
    },
    {
      name: "Pottan",
      img: "/Pottan.png",
      hoverImg: "/Pottan-Hover.png",
      link: "/pakarnaattam/map/ritualforms/pottan",
    },
    {
      name: "Gulikan",
      img: "/Gulikan.png",
      hoverImg: "/Gulikan-Hover.png",
      link: "/pakarnaattam/map/ritualforms/gulikan",
    },
    {
      name: "Muthappan",
      img: "/Muthappan.png",
      hoverImg: "/Muthappan-Hover.png",
      link: "/pakarnaattam/map/ritualforms/muthappan",
    },
  ];

  const renderShrine = (shrine: Shrine, index: number) => (
    <Link key={index} href={shrine.link}>
      <motion.div
        className="flex flex-col items-center cursor-pointer relative hover:scale-105 transition"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56">
          {/* Default Image */}
          <motion.div
            variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={shrine.img}
              alt={shrine.name}
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Hover Image */}
          <motion.div
            variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={shrine.hoverImg}
              alt={`${shrine.name} hover`}
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        <motion.p
          className="text-white mt-3 sm:mt-4 text-base sm:text-lg font-semibold"
          variants={{
            rest: { scale: 1, color: "#ffffff" },
            hover: { scale: 1.05, color: "#dc2626" },
          }}
          transition={{ duration: 0.3 }}
        >
          {shrine.name}
        </motion.p>
      </motion.div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-[url('https://ik.imagekit.io/shahansv/Urav/bgImage.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center relative pb-18">
      <article className="relative z-10 flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
        <div className="space-y-6 sm:space-y-8 sm:text-lg md:text-xl text-neutral-200 leading-relaxed">
          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
            <p>
              With over more than 400 distinct forms, Theyyam holds an expansive
              and diverse body of stories, each shaped by local histories,
              beliefs, and community memory. These narratives are spread across
              regions and traditions, evolving through generations while
              retaining their unique identities. Together, they form a rich and
              layered cultural landscape marked by variation, continuity, and
              deep-rooted meaning.
            </p>

            <p>
              Among this vast tradition are four Theyyam stories of
              <br className="hidden sm:block" /> Guligan, Muthappan, Kathivanoor
              Veeran, and Pottan.. each carrying its own narrative landscape,
              voice, memory, and meaning
            </p>
          </div>
        </div>
      </article>
      {/* Header */}
      <header className="absolute top-0 left-0 w-full px-4 sm:px-6 py-4 sm:py-6 z-20">
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <Link href="/initiative/pakarnaattam">
              <Home className="cursor-pointer text-white hover:scale-110 transition" />
            </Link>
            <Link href="/pakarnaattam/map">
              <Map className="cursor-pointer text-white hover:scale-110 transition" />
            </Link>
          </div>
          <SoundToggle file="/torch.mp3" />
        </div>
      </header>

      {/* Grid Layout */}
      <div className="w-full max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-10 sm:gap-y-14 text-center items-center">
          {/* Top Row */}
          {shrines.slice(0, 2).map(renderShrine)}

          {/* Center Text */}
          <div className="col-span-1 sm:col-span-2 flex justify-center">
            <p className="text-white animate-pulse text-sm sm:text-base">
              Click on any of the Shrine to know more
            </p>
          </div>

          {/* Bottom Row */}
          {shrines.slice(2, 4).map(renderShrine)}
        </div>
      </div>
    </div>
  );
}
