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

          <SoundToggle file="/Pottan.mpeg" volume={0.8} />
        </div>
      </header>

      <article className="relative z-10 flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
        <div className="space-y-6 sm:space-y-8 sm:text-lg md:text-xl text-neutral-200 leading-relaxed">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Pottan
          </h1>

          <Image
            src="/pottan-img.jpg"
            alt="Kathivanoor Veeran Illustration"
            width={2048}
            height={1463}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 1024px"
          />

          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
            <p>
              Long ago, she said, there lived a man named Alankaran, a man born
              among the oppressed communities of the land. Though society
              treated him as lowly, Alankaran possessed great wisdom and deep
              understanding about the world and the nature of truth. He
              questioned the rigid caste system that divided people and spoke
              boldly about equality.
            </p>
            <p>
              But those who held power did not like such questions.
              <br className="hidden sm:block" /> For seeing what he was not
              supposed to see and hearing what he was not meant to hear, the
              powerful punished him cruelly. His eyes were gouged, and his ears
              were cut off. They mocked him and gave him a name meant to insult
              him “Pottan,” which means a fool. “But he was not a fool at all,”
              the grandmother said softly.
              <br className="hidden sm:block" /> “In truth, he was wiser than
              many.”
            </p>
            <p>
              Despite the suffering he endured, Alankaran continued to speak
              about truth and justice. Through spiritual strength and mystical
              powers, people believed he could transform himself into different
              forms sometimes appearing as animals like a deer or a fox. His
              loyal friend Kanadan and his courageous wife Sundari stood beside
              him, helping him awaken the oppressed people around them.
            </p>
            <p>
              Together they challenged cruel customs and injustice. One such
              ancient custom allowed powerful landlords to claim rights over
              women from lower communities during marriage rituals. Alankaran
              and his companions strongly opposed this practice, encouraging
              people to recognize their dignity and resist oppression.
              <br className="hidden sm:block" />
              The grandmother paused for a moment before continuing the most
              famous part of the story.
            </p>
            <p>
              One day, during his travels, the great philosopher Adi
              Shankaracharya was walking along a forest path. Suddenly he came
              across Alankaran standing in his way with a child on his hip and a
              pot balanced on his head.
              <br className="hidden sm:block" /> Shankaracharya, following the
              rigid rules of caste purity of that time, asked the man to step
              aside.
            </p>
          </div>

          <Image
            src="/pottan-img2.jpg"
            alt="Kathivanoor Veeran Illustration"
            width={2048}
            height={1463}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 1024px"
          />

          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
            <p>
              But Alankaran calmly replied:
              <br className="hidden sm:block" /> “Everywhere around us there are
              forests and thorns... <br className="hidden sm:block" />
              How can I step aside?
              <br className="hidden sm:block" />
              I carry a child on my hip and a pot upon my head...
              <br className="hidden sm:block" />
              Where should I move?”
              <br className="hidden sm:block" />
              Annoyed, Shankaracharya told him to move away, calling him a
              Chandala, a man of the lowest caste.
            </p>
            <p>
              But Alankaran answered with quiet wisdom:
              <br className="hidden sm:block" /> “If you cut me, does my blood
              not flow the same red?
              <br className="hidden sm:block" /> If you cut yourself, is your
              blood any different?
              <br className="hidden sm:block" /> If we are both made of the same
              life,
              <br className="hidden sm:block" /> Why then do you see such
              difference between us?”
              <br className="hidden sm:block" />
            </p>
            <p>
              The grandmother's voice softened.
              <br className="hidden sm:block" />
              Those words, she said, opened Shankaracharya's inner vision. In
              that moment he realized the truth of Advaita the philosophy that
              all beings are one. It is said that from this profound realization
              he later composed the famous philosophical verses known as the
              Manisha Panchakam.
            </p>
            <p>
              Some people believe that Alankaran was not an ordinary man at all,
              but a divine manifestation of Shiva, who had taken the form of a
              humble outcaste to teach the world about equality and truth.
            </p>
            <p>
              Over time, the people of North Malabar remembered this story
              through ritual songs and performances. Alankaran, the man who was
              once mocked as “Pottan,” came to be worshipped as Pottan Theyyam,
              a powerful deity who stands against injustice and reminds people
              of the oneness of all life.
            </p>
            <p>
              The grandmother looked and said gently,
              <br className="hidden sm:block" /> “Remember this… sometimes the
              world calls a wise person a fool. But truth has a way of shining
              through, even after many years.”
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
