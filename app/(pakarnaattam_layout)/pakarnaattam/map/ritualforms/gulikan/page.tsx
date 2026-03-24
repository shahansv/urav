"use client";

import ScrollButton from "@/components/web/scroll_button";
import SoundToggle from "@/components/web/sound_toggle";
import { Home, Map } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PakarnaattamGulikanPage() {
  return (
    <div
      className="relative min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/shahansv/Urav/bgImage.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <header className="absolute top-0 left-0 w-full z-20 px-4 sm:px-6 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex gap-4 sm:gap-6">
            <Link href="/initiative/pakarnaattam">
              <Home className="w-6 h-6 sm:w-7 sm:h-7 text-white transition hover:scale-110" />
            </Link>

            <Link href="/pakarnaattam/map">
              <Map className="w-6 h-6 sm:w-7 sm:h-7 text-white transition hover:scale-110" />
            </Link>
          </div>

          <SoundToggle file="/Gulikan.mpeg" volume={0.8} />
        </div>
      </header>

      <article className="relative z-10 flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
        <div className="space-y-6 sm:space-y-8 sm:text-lg md:text-xl text-neutral-200 leading-relaxed">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Gulikan
          </h1>

          <Image
            src="/Gulikan1.png"
            alt="Kathivanoor Veeran Illustration"
            width={2048}
            height={1463}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 1024px"
          />

          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
            <p>
              Some stories are not just about life… but about death, time, and
              balance.”
            </p>
            <p>
              Gulikan is one such presence feared, respected, and deeply
              powerful. To understand Gulikan, we must first hear the story of a
              young devotee.
            </p>
            <p>
              Long ago, there lived a sage named Mrigandu, a great devotee of
              Shiva. He prayed with all his heart for a child. Pleased with his
              devotion, Shiva appeared before him and gave him a choice a son
              who would live long but without wisdom, or a divine child who
              would live only for sixteen years.
              <br className="hidden sm:block" /> Mrigandu chose the divine
              child.
              <br className="hidden sm:block" /> And so, Markandeya was born, a
              boy filled with devotion and purity, who grew up worshipping Shiva
              with complete faith.
            </p>
            <p>
              The grandmother paused, her voice softening.
              <br className="hidden sm:block" /> “But time waits for no one.”
              <br className="hidden sm:block" /> On the day Markandeya turned
              sixteen, Yama, the god of death, came to take his life. He cast
              his noose towards the boy. <br className="hidden sm:block" />
              But Markandeya, unafraid, held tightly onto the Shivalinga he was
              praying to, calling out to Shiva. The noose fell not just on the
              boy… but also on the Shivalinga.
            </p>
            <p>
              The grandmother's voice grew intense.
              <br className="hidden sm:block" />
              “That moment changed everything.”
              <br className="hidden sm:block" /> Angered by this, Shiva opened
              his third eye and burned Yama to ashes.
              <br className="hidden sm:block" /> For a while, death disappeared
              from the world. No one died. The earth grew heavy with life,
              unable to carry the growing burden.
            </p>
          </div>

          <Image
            src="/Gulikan2.png"
            alt="Kathivanoor Veeran Illustration"
            width={2048}
            height={1463}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 1024px"
          />

          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
            <p>
              To restore balance, Shiva created another force from his own
              being.”
              <br className="hidden sm:block" /> From his left side, he brought
              forth Gulikan.
            </p>
            <p>
              He gave him the trident and the kalapasa, and sent him to earth
              not just as death, but as the keeper of time, balance, and fate.
              <br className="hidden sm:block" /> Gulikan was not just
              destruction... he was necessity.
            </p>
            <p>
              The grandmother looked at the children carefully.
              <br className="hidden sm:block" />
              They say, Gulikan walks the earth at noon, at dusk, and at
              midnight times when the world shifts from one state to another. He
              is present in every moment of life, from birth to death.
              <br className="hidden sm:block" /> Not always seen… but always
              there. <br className="hidden sm:block" /> There are many forms of
              Gulikan, Vadakkan Gulikan, Thekkan Gulikan, Marana Gulikan,
              Pathira Gulikan… and many more. Some say he exists in a hundred
              and one forms, yet remains one. <br className="hidden sm:block" />
              The grandmother's voice softened again.
              <br className="hidden sm:block" /> Gulikan reminds us of something
              important...
              <br className="hidden sm:block" />
              “That life and death are not separate… they are part of the same
              cycle.” <br className="hidden sm:block" />
              She looked at the children gently.
            </p>
          </div>

          <div className="my-64 flex justify-between text-sm sm:text-base">
            <Link href="/pakarnaattam/map">
              <p className="hover:underline hover:animate-pulse">
                Go back to map
              </p>
            </Link>
            <Link href="/pakarnaattam/map/ritualforms">
              <p className="hover:underline hover:animate-pulse">
                Select a different Theyyam story
              </p>
            </Link>
          </div>
        </div>
      </article>

      <ScrollButton isDarkBackground />
    </div>
  );
}
