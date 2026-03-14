"use client";

import { Carousel } from "@/components/web/carousel";
import ScrollButton from "@/components/web/scroll_button";
import { EB_Garamond } from "next/font/google";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className="text-neutral-100 w-full overflow-x-hidden">
      <ScrollButton isDarkBackground={true} />

      <section className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-12 mt-8 ">
        <h1
          className={`${garamond.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug max-w-3xl`}
        >
          Replenishing roots drawn from....
        </h1>
      </section>

      <section className="mt-6 sm:mt-8 lg:mt-10">
        <Carousel />
      </section>

      <article className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-20 mt-8 sm:mt-10 lg:mt-14">
        <div className="space-y-5 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed">
          <p>
            A space that helps in reconnecting people with their cultural and
            traditional roots, and connects the gap between tradition and
            modernity, reimagining narratives through digital storytelling.
            <br className="hidden sm:block" />
            Calm, honest, and human in its approach, Urav remains deeply
            grounded in heritage while staying open to reinterpretation.
          </p>

          <p>
            Drawn to projects that blend heritage with contemporary design, it
            resonates deeply with Urav's vision. For fellow humans who seek
            cultural knowledge and crave meaningful digital experiences that
            connect them to living traditions. Together, we form a community
            that doesn't just consume culture — we engage with it, reflect on
            it, and keep it alive.
          </p>
        </div>
      </article>

      <article className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12 mt-10 lg:mt-16">
        <h3
          className={`${garamond.className} text-2xl sm:text-3xl md:text-4xl mb-8`}
        >
          Latest Works
        </h3>

        <Link href={"/initiative/pakarnaattam"}>
          <motion.div
            initial="initial"
            whileHover="hover"
            className="w-full bg-[#F5F2E9] rounded-2xl border-2 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-10 lg:gap-14"
          >
            <div className="w-full md:w-[60%] overflow-hidden rounded-2xl max-w-full">
              <motion.div
                className="w-full h-full origin-left"
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.4 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src="/pakarnaattam-home.png"
                    alt="Theyyam"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>
              </motion.div>
            </div>

            <div className="text-left md:text-right text-black space-y-1 md:max-w-[35%]">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
                Pakarnaattam
              </h2>

              <p className="text-sm sm:text-base md:text-lg">
                -An illustrated documentation on theyyam
              </p>
            </div>
          </motion.div>
        </Link>

        <div className="w-full my-16 sm:my-20 h-5 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-linear-to-r from-transparent via-neutral-400/40 to-transparent h-0.75 w-[90%] blur-md" />

          <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-linear-to-r from-transparent via-white to-transparent h-px w-[90%]" />

          <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-linear-to-r from-transparent via-neutral-300/40 to-transparent h-1.5 w-[40%] blur-md" />

          <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-linear-to-r from-transparent via-white to-transparent h-px w-[40%]" />
        </div>
      </article>
    </main>
  );
}
