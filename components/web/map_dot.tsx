"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Image from "next/image";

interface MapDotProps {
  top: string;
  left: string;
  image: string;
  title: string;
  desc: string;
}

export default function MapDot({ top, left, image, title, desc }: MapDotProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="absolute"
      style={{ top, left }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-8 h-8 rounded-full cursor-pointer"
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 300 }}
      />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 12 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-60 text-white rounded-lg shadow-xl p-3 z-50 backdrop-blur-sm"
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
