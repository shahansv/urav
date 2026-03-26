"use client";

import { useEffect, useRef, useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover_border_gradient";
import ScrollButton from "@/components/web/scroll_button";
import Image from "next/image";
import Link from "next/link";

export default function PakarnaattamPage() {
  const [darkBg, setDarkBg] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setDarkBg(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      },
    );

    const currentRef = descriptionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <main
      className={`min-h-screen antialiased transition-colors duration-700 ${
        darkBg ? "bg-[#000000]" : "bg-[#F5F2E9]"
      }`}
      role="main"
      aria-labelledby="pakarnattam-heading"
    >
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 lg:pb-16">
        <h1 id="pakarnattam-heading" className="sr-only">
          Pakarnattam Performance
        </h1>

        <figure
          className="relative w-full overflow-hidden rounded-2xl shadow-sm"
          role="img"
          aria-label="Pakarnattam performance artwork"
          aria-describedby="pakarnattam-description"
        >
          <Image
            src="/pakarnaattam.png"
            alt="Pakarnattam performance artwork"
            width={1200}
            height={800}
            priority
            className="w-full h-auto object-cover"
          />

          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-full flex justify-center">
            <div className="flex justify-center text-center px-4">
              <Link href="/pakarnaattam">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-black text-white flex items-center space-x-2 px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium"
                >
                  <span>Immerse Now</span>
                </HoverBorderGradient>
              </Link>
            </div>
          </div>
        </figure>

        <article
          id="pakarnattam-description"
          ref={descriptionRef}
          className={`mt-12 sm:mt-16 max-w-7xl mx-auto leading-relaxed text-base sm:text-lg space-y-6 transition-colors duration-700 ${
            darkBg ? "text-white" : "text-neutral-800"
          }`}
        >
          <h1 className=" py-4 text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold">
            What Pakarnaattam is...
          </h1>
          <p>
            Pakarnattam is an illustrated documentation project that explores
            the cultural and artistic world of Theyyam, a ritual performance
            tradition practiced in the northern regions of Kerala. Deeply rooted
            in local belief systems, oral histories, and community
            participation, Theyyam stands as one of the most powerful ritual art
            forms in South India. It exists at the intersection of performance,
            spirituality, storytelling, and visual culture.
          </p>

          <p>
            The word Pakarnattam refers to transformation through performance.
            The term combines pakarnam, which suggests becoming or embodying
            another form, and attam, meaning play, dance, or enactment. Within
            the context of Theyyam, this idea of transformation lies at the
            heart of the ritual. Through elaborate costume, ritual preparation,
            music, and devotion, the performer moves beyond the identity of an
            individual and embodies a divine or ancestral presence. This
            transformation is not merely theatrical but deeply embedded in
            belief, tradition, and collective memory.
          </p>

          <p>
            While Theyyam is often recognised for its striking visual spectacle
            the vibrant face paintings, towering headgear, and elaborate
            costumes the art form is built upon a much deeper network of
            stories, sounds, symbols, and lived experiences. Pakarnattam seeks
            to explore these layers through illustration and visual
            interpretation, offering a perspective that looks beyond the
            spectacle and into the many elements that construct the world of
            Theyyam.The project follows a non-linear approach, allowing viewers
            to engage with different aspects of the tradition as interconnected
            dimensions rather than as a single chronological narrative. Each
            section of the project acts as a window into a different layer of
            the art form, revealing how mythology, visual identity, sound
            traditions, and human experience come together within the ritual.
          </p>

          <p>
            The project also reflects on the lives of the performers who
            dedicate themselves to sustaining this tradition. For many artists,
            Theyyam is not simply a performance practice but a lineage passed
            down through generations. Their lives involve rigorous preparation,
            inherited knowledge, and a deep sense of responsibility toward the
            ritual and the communities they serve. By acknowledging the human
            presence behind the spectacle, the project highlights the devotion,
            discipline, and continuity that keep the tradition alive.
            <br className="hidden sm:block" />
            Through the language of illustration, design, and documentation,
            Pakarnattam attempts to create an immersive visual experience that
            invites viewers to engage with the world behind Theyyam. Each
            illustration acts as a point of entry into the tradition, revealing
            fragments of story, symbolism, sound, and lived experience.
          </p>
        </article>
      </section>

      <ScrollButton isDarkBackground={darkBg} />
    </main>
  );
}
