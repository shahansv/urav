"use client";

import React, { useState, useEffect, JSX } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type Position = "left" | "center" | "right" | "hidden";

const slides = [
  { src: "/carousel-img1.jpg", title: "Living traditions" },
  { src: "/carousel-img2.jpg", title: "Cultural narratives" },
  { src: "/carousel-img3.jpg", title: "Communities" },
];

export const Carousel: React.FC = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const containerHeight = 400;
  const gap = 5;

  const slideDuration = 0.45;
  const autoplayDelay = 3000;

  const next = () => setCurrentIndex((prev) => (prev + 1) % slides.length);

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(next, autoplayDelay);
    return () => clearInterval(interval);
  }, [paused]);

  const getPosition = (index: number): Position => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    const nextIndex = (currentIndex + 1) % slides.length;

    if (index === prevIndex) return "left";
    if (index === currentIndex) return "center";
    if (index === nextIndex) return "right";

    return "hidden";
  };

  const positionStyles: Record<Position, any> = {
    left: {
      left: "0%",
      width: `calc(25% - ${gap}px)`,
      height: containerHeight / 2,
      top: 0,
      zIndex: 10,
      opacity: 1,
    },

    center: {
      left: `calc(25% + ${gap}px)`,
      width: `calc(50% - ${gap * 2}px)`,
      height: containerHeight,
      top: 0,
      zIndex: 20,
      opacity: 1,
    },

    right: {
      left: `calc(75% + ${gap}px)`,
      width: `calc(25% - ${gap}px)`,
      height: containerHeight / 2,
      top: containerHeight / 2,
      zIndex: 10,
      opacity: 1,
    },

    hidden: {
      left: `calc(25% + ${gap}px)`,
      width: `calc(50% - ${gap * 2}px)`,
      height: containerHeight,
      top: 0,
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
    },
  };

  return (
    <div
      className="relative w-full mt-4 overflow-hidden"
      style={{ height: containerHeight }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, index) => {
        const position = getPosition(index);

        return (
          <motion.div
            key={index}
            layout
            drag="x"
            dragElastic={0.12}
            dragConstraints={{ left: 0, right: 0 }}
            className="absolute cursor-grab active:cursor-grabbing"
            animate={positionStyles[position]}
            transition={{
              duration: slideDuration,
              ease: "easeInOut",
            }}
            onDragEnd={(e, info) => {
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              if (offset > 80 || velocity > 500) {
                prev();
              } else if (offset < -80 || velocity < -500) {
                next();
              }
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={`carousel-${index}`}
                width={1000}
                height={1000}
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover rounded-2xl w-full h-full"
              />

              {position === "center" && (
                <>
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent rounded-2xl" />

                  <div
                    className={`absolute bottom-6 left-6 text-white text-3xl md:text-4xl font-light ${garamond.className}`}
                  >
                    {slide.title}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
