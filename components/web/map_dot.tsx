"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Image from "next/image";

type Position =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

interface MapDotProps {
  top: string;
  left: string;
  image: string;
  title: string;
  desc: string;
  position?: Position;
}

export default function MapDot({
  top,
  left,
  image,
  title,
  desc,
  position = "top",
}: MapDotProps) {
  const [isHovered, setIsHovered] = useState(false);

  const positionClasses: Record<Position, string> = {
    top: "bottom-10 left-1/2 -translate-x-1/2",
    bottom: "top-10 left-1/2 -translate-x-1/2",
    left: "right-10 top-1/2 -translate-y-1/2",
    right: "left-10 top-1/2 -translate-y-1/2",

    "top-left": "bottom-5 right-18",
    "top-right": "bottom-5 left-10",
    "bottom-left": "top-10 right-10",
    "bottom-right": "-top-20 left-1",
  };
  const animationOffset: Record<Position, any> = {
    top: { y: 12 },
    bottom: { y: -12 },
    left: { x: 12 },
    right: { x: -12 },

    "top-left": { x: 12, y: 12 },
    "top-right": { x: -12, y: 12 },
    "bottom-left": { x: 12, y: -12 },
    "bottom-right": { x: -12, y: -12 },
  };

  return (
    <div
      className="absolute"
      style={{ top, left }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-14 h-14 rounded-full cursor-pointer bg-amber-300/10"
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 300 }}
      />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, ...animationOffset[position] }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, ...animationOffset[position] }}
            transition={{ duration: 0.25 }}
            className={`absolute w-80 text-white rounded-lg shadow-xl p-3 z-50 ${positionClasses[position]}`}
          >
            <div className="mb-2">
              <Image
                src={image}
                alt={title}
                width={400}
                height={300}
                className="rounded-md w-full h-auto"
              />
            </div>
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-sm text-neutral-300">{desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
