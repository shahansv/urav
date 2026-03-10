"use client";

import { useState, useEffect } from "react";
import ScrollButton from "@/components/web/scroll_button";
import SoundToggle from "@/components/web/sound_toggle";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function PakarnaattamCharacterPage() {
  const [activeCharacter, setActiveCharacter] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const hasHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    setIsTouchDevice(!hasHover);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    character: string,
  ) => {
    if (!isTouchDevice) return;

    e.preventDefault();

    setActiveCharacter(character);

    const route =
      character === "kannan"
        ? "/pakarnaattam/character/kannan"
        : "/pakarnaattam/character/neelu";

    setTimeout(() => {
      router.push(route);
    }, 800);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <header className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/initiative/pakarnaattam">
            <Home className="cursor-pointer transition hover:scale-110" />
          </Link>

          <div className="flex items-center justify-between">
            <SoundToggle file="/torch.mp3" />
          </div>
        </div>
      </header>

      <article className="flex-1 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 ">
        <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
          <p>
            With the thunder of the Chendamelam, the clash of Ilathalam, the
            sacred Thottam songs, and the glow of fire and torches, the night
            had transformed into a world of trance. Carrying in their minds the
            wondrous sight of Theyyams dancing in fierce splendour, Neelu and
            Kannan finally drifted into sleep well past midnight.
          </p>

          <p>
            After a long gap, the two had come home from Bengaluru during the
            Theyyam season. They were no longer the little children who had
            visited three years ago, next year they would step into Class Ten.
            Earlier, whenever they watched Theyyam, they would fall asleep
            halfway through. But this time, they savoured the entire ambience of
            the ritual from beginning to end. Even in their sleep, Theyyam
            filled their dreams.
          </p>

          <p>
            The moment she woke up in the morning, Neelu rubbed her eyes and
            walked straight into the kitchen where Amma was busy making Dosas.
            Kannan followed close behind.
          </p>

          <p>
            “Amma… Amma… tell us the story of yesterday's Theyyam,” Neelu asked
            eagerly.
          </p>

          <p>
            Already standing in the heat of the stove preparing breakfast for
            ten to fifteen people, Amma grew even more flustered.
            <br className="hidden sm:block" />
            “Go wash your mouth and sit somewhere over there…,” she said, almost
            reaching for the ladle in mock irritation.
          </p>

          <p>
            Disappointed, the two began to walk away ,
            <br className="hidden sm:block" />
            Just then came their grandmother's call.
            <br className="hidden sm:block" />
            “What is it, children? Want the story of the Theyyam? I'll tell you…
            <br className="hidden sm:block" />
            Go wash your faces and come.”
          </p>

          <p>
            It was the thira of the sacred grove. The main Theyyams of the night
            were Gulikan and Pottan.
          </p>

          <p>
            Grandmother was about to begin her story.
            <br className="hidden sm:block" />
            Just then Kannan raised another question.
            <br className="hidden sm:block" />
            “Who performs this Theyyam?”
            <br className="hidden sm:block" />
            “Aaaahaa... you are a tiny little curious creature aren't you.
            <br className="hidden sm:block" />
            I'll take you through the world of theyyam,” Grandmother replied.
          </p>

          <p>She continued, her voice steady and vivid......</p>
        </div>

        <div className="w-full min-h-screen flex items-center justify-center py-12">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 px-6 w-full">
            <p className="animate-pulse text-center text-lg sm:text-xl">
              Click on a character to continue
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-12 sm:gap-20 w-full">
              <Link
                href="/pakarnaattam/character/kannan"
                onClick={(e) => handleClick(e, "kannan")}
              >
                <motion.div
                  className="flex flex-col items-center gap-4 cursor-pointer"
                  initial="rest"
                  whileHover="hover"
                  animate={activeCharacter === "kannan" ? "hover" : "rest"}
                >
                  <div className="relative w-64 h-96 sm:w-72 sm:h-112 md:w-80 md:h-128">
                    <motion.div
                      variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src="https://ik.imagekit.io/shahansv/Urav/Kannan.png"
                        alt="Kannan"
                        fill
                        className="object-contain"
                        priority
                      />
                    </motion.div>

                    <motion.div
                      variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src="https://ik.imagekit.io/shahansv/Urav/KannanMask.png"
                        alt="Kannan Mask"
                        fill
                        className="object-contain"
                        priority
                      />
                    </motion.div>
                  </div>

                  <motion.p
                    className="text-lg sm:text-xl font-semibold"
                    variants={{
                      rest: { scale: 1, color: "#ffffff" },
                      hover: { scale: 1.05, color: "#dc2626" },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Kannan
                  </motion.p>
                </motion.div>
              </Link>

              <Link
                href="/pakarnaattam/character/neelu"
                onClick={(e) => handleClick(e, "neelu")}
              >
                <motion.div
                  className="flex flex-col items-center gap-4 cursor-pointer"
                  initial="rest"
                  whileHover="hover"
                  animate={activeCharacter === "neelu" ? "hover" : "rest"}
                >
                  <div className="relative w-64 h-96 sm:w-72 sm:h-112 md:w-80 md:h-128">
                    <motion.div
                      variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src="https://ik.imagekit.io/shahansv/Urav/Neelu.png"
                        alt="Neelu"
                        fill
                        className="object-contain"
                        priority
                      />
                    </motion.div>

                    <motion.div
                      variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src="https://ik.imagekit.io/shahansv/Urav/NeeluMask.png"
                        alt="Neelu Mask"
                        fill
                        className="object-contain"
                        priority
                      />
                    </motion.div>
                  </div>

                  <motion.p
                    className="text-lg sm:text-xl font-semibold"
                    variants={{
                      rest: { scale: 1, color: "#ffffff" },
                      hover: { scale: 1.05, color: "#dc2626" },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Neelu
                  </motion.p>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <ScrollButton isDarkBackground={true} />
    </main>
  );
}
