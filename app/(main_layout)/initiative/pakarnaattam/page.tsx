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
        darkBg ? "bg-[#121212]" : "bg-[#F5F2E9]"
      }`}
      role="main"
      aria-labelledby="pakarnattam-heading"
    >
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 lg:pb-16">
        <h1 id="pakarnattam-heading" className="sr-only">
          Pakarnattam Performance
        </h1>

        <figure
          className="relative w-full overflow-hidden rounded-2xl bg-black shadow-sm"
          role="img"
          aria-label="Pakarnattam performance artwork"
          aria-describedby="pakarnattam-description"
        >
          <div className="relative w-full h-[50vh] sm:h-[70vh] lg:h-[80vh]">
            <Image
              src="https://ik.imagekit.io/shahansv/Urav/pakarnattam.png"
              alt="Pakarnattam performance artwork"
              fill
              priority
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 90vw,
                1200px
              "
              className="object-contain sm:object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>

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
          className={`mt-12 sm:mt-16 max-w-4xl mx-auto leading-relaxed text-base sm:text-lg space-y-6 transition-colors duration-700 ${
            darkBg ? "text-white" : "text-neutral-800"
          }`}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            nulla in impedit consectetur, quibusdam explicabo commodi, sunt
            nemo, animi neque dolorem! Eaque, quam! Quos perspiciatis, dicta
            quod fugiat eum tempora enim, rerum deserunt voluptas natus rem
            vitae aliquid necessitatibus reiciendis eligendi repellendus
            distinctio eius accusamus voluptatibus corrupti?
          </p>

          <p>
            Cupiditate, voluptates quasi nobis dolor exercitationem quas tempore
            minus ducimus deleniti ipsam, dolore earum? Enim minus explicabo
            fugit placeat molestias impedit dignissimos, reprehenderit
            consectetur id corporis similique rerum earum molestiae!
          </p>

          <p>
            Nostrum eligendi cupiditate recusandae quod. Laborum, consectetur
            id! Natus harum ab aspernatur illo asperiores consequuntur quidem,
            cum eos quibusdam fugit qui at aliquid cumque ipsum maxime porro
            saepe autem rerum provident.
          </p>

          <p>
            Dolore qui delectus corporis excepturi officiis ut reprehenderit
            rerum repellendus impedit distinctio numquam autem quod, ab
            assumenda accusantium velit quasi, libero voluptatem nemo sequi quia
            omnis? Repellat, nulla.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            nulla in impedit consectetur, quibusdam explicabo commodi, sunt
            nemo, animi neque dolorem! Eaque, quam! Quos perspiciatis, dicta
            quod fugiat eum tempora enim.
          </p>
          <p>
            Cupiditate, voluptates quasi nobis dolor exercitationem quas tempore
            minus ducimus deleniti ipsam, dolore earum? Enim minus explicabo
            fugit placeat molestias impedit dignissimos, reprehenderit
            consectetur id corporis similique rerum earum molestiae!
          </p>

          <p>
            Nostrum eligendi cupiditate recusandae quod. Laborum, consectetur
            id! Natus harum ab aspernatur illo asperiores consequuntur quidem,
            cum eos quibusdam fugit qui at aliquid cumque ipsum maxime porro
            saepe autem rerum provident.
          </p>

          <p>
            Dolore qui delectus corporis excepturi officiis ut reprehenderit
            rerum repellendus impedit distinctio numquam autem quod, ab
            assumenda accusantium velit quasi, libero voluptatem nemo sequi quia
            omnis? Repellat, nulla.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            nulla in impedit consectetur, quibusdam explicabo commodi, sunt
            nemo, animi neque dolorem! Eaque, quam! Quos perspiciatis, dicta
            quod fugiat eum tempora enim.
          </p>

          <p>
            Cupiditate, voluptates quasi nobis dolor exercitationem quas tempore
            minus ducimus deleniti ipsam, dolore earum? Enim minus explicabo
            fugit placeat molestias impedit dignissimos.
          </p>

          <p>
            Nostrum eligendi cupiditate recusandae quod. Laborum, consectetur
            id! Natus harum ab aspernatur illo asperiores consequuntur quidem.
          </p>

          <p>
            Dolore qui delectus corporis excepturi officiis ut reprehenderit
            rerum repellendus impedit distinctio numquam autem quod.
          </p>
        </article>
      </section>

      <ScrollButton isDarkBackground={darkBg} />
    </main>
  );
}
