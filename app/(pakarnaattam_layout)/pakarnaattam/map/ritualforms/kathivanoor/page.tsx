"use client";

import ScrollButton from "@/components/web/scroll_button";
import SoundToggle from "@/components/web/sound_toggle";
import { Home, Map } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PakarnaattamKathivanoorPage() {
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

          <SoundToggle file="/torch.mp3" />
        </div>
      </header>

      <article className="relative z-10 flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
        <div className="space-y-6 sm:space-y-8 sm:text-lg md:text-xl text-neutral-200 leading-relaxed">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Kathivanoor Veeran
          </h1>

          <Image
            src="https://ik.imagekit.io/shahansv/Urav/KathivanoorIllustration.png"
            alt="Kathivanoor Veeran Illustration"
            width={2048}
            height={1463}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 1024px"
            priority
          />

          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
            <p>
              Long ago, when forests were thicker than memory and village paths
              were still traced by bare feet and cattle hooves, there lived a
              young man named Kathivanoor Veeran. His real name was Mandhappan
              Chekavar, born into a family of warriors in the northern lands of
              Kerala. From childhood, he carried fire in his veins. He learned
              kalari before he learned fear, mastered the sword before he
              understood mercy, and grew up with stories of ancestors who
              defended their soil with blood and honor.
            </p>

            <p>
              Mandhappan was not just skilled he was restless. The world beyond
              his village called to him, and so he left home, traveling from
              place to place, offering his service as a protector. Wherever
              injustice rose, his blade followed. He fought thieves, subdued
              violent chieftains, and guarded travelers through dangerous forest
              routes. Slowly, his name began to spread. People spoke of a young
              warrior who appeared when hope was thin, who fought not for riches
              but for dignity.
            </p>

            <p>
              During his travels he reached Kathivanoor, where a local ruler
              employed him as a guard. There, Mandhappan met a young woman and
              fell deeply in love. For the first time, the wandering warrior
              imagined a settled life a home, a family, peace after years of
              battle. But destiny had other plans.The ruler of Kathivanoor grew
              jealous of Mandhappan's rising popularity. Villagers admired the
              warrior more than they feared their king. Whispers began to
              circulate that Mandhappan was too powerful, too beloved, too
              dangerous to be kept alive. The ruler's insecurity hardened into
              betrayal.
            </p>

            <p>
              One evening, Mandhappan was sent on what seemed like a routine
              mission. He was asked to ride through the forest to retrieve a
              horse. Trusting his employer, he went alone. Hidden among the
              trees waited assassins, hired by the ruler himself. They attacked
              from behind. Mandhappan fought fiercely, even while wounded,
              cutting down several men. But betrayal cuts deeper than steel.
              Surrounded and exhausted, he was finally slain.His body was left
              in the forest, abandoned like an unwanted memory.Yet Mandhappan
              did not die quietly.
              <br className="hidden sm:block" />
              Legend says the earth itself trembled at his unjust death. His
              spirit rose, burning with rage and sorrow. He returned not as a
              man, but as Kathivanoor Veeran, a fierce divine presence. He
              confronted the ruler who had betrayed him and destroyed him.
              Justice came swift and terrible. The oppressor fell, and balance
              was restored. But Veeran's anger did not vanish with revenge. His
              soul remained restless, wandering the land, protecting the
              innocent, punishing cruelty, and watching over villages. The
              people, terrified yet grateful, began worshipping him. They built
              shrines. They lit lamps. They offered toddy, meat, and red cloth.
              Slowly, the warrior transformed into a guardian deity.
            </p>

            <p>And so he returns every year.</p>

            <p>
              When Kathivanoor Veeran Theyyam is performed, it is not considered
              a dance. It is believed that Mandhappan Chekavar himself enters
              the body of the performer. The face paint burns red like spilled
              blood. The crown rises high like flames. The sword flashes in
              ritual fury. He moves with the urgency of a betrayed warrior,
              circles the fire, blesses children, scolds wrongdoers, and listens
              to prayers.
              <br className="hidden sm:block" />
              People approach him with trembling hands farmers seeking rain,
              mothers seeking protection, youth seeking courage. And Veeran,
              once a lonely traveler, now stands as their divine shield.
            </p>

            <p>
              He is remembered not merely as a god, But as a man who suffered
              injustice.
              <br className="hidden sm:block" />A warrior who loved deeply.
              <br className="hidden sm:block" /> A protector who was betrayed.
            </p>

            <p>
              Kathivanoor Veeran remains a reminder that even ordinary humans,
              when wronged beyond endurance, can rise into legend and that the
              land never forgets those who die defending truth.
            </p>
          </div>

          <div className="my-64 flex justify-between text-sm sm:text-base">
            <Link href="/pakarnaattam/map hover:animate-pulse">
              <p className="hover:underline">Go back to map</p>
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
