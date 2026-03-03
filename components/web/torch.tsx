"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "motion/react";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Torch() {
  const torchRef = useRef<HTMLDivElement>(null);

  const rawRotate = useMotionValue(0);

  const rotate = useSpring(rawRotate, {
    stiffness: 160,
    damping: 26,
    mass: 1.6,
  });

  const rotateTemplate = useMotionTemplate`${rotate}deg`;

  const previousAngle = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!torchRef.current) return;

      const rect = torchRef.current.getBoundingClientRect();

      const pivotX = rect.left + rect.width / 2;
      const pivotY = rect.bottom;

      const dx = e.clientX - pivotX;
      const dy = e.clientY - pivotY;

      let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

      const diff = angle - previousAngle.current;

      if (diff > 180) {
        angle -= 360;
      } else if (diff < -180) {
        angle += 360;
      }

      previousAngle.current = angle;
      rawRotate.set(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawRotate]);

  return (
    <div className="fixed -bottom-45 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
      <motion.div
        ref={torchRef}
        style={{
          rotate: rotateTemplate,
          transformOrigin: "50% 100%",
        }}
        className="relative w-125 h-190" 
      >
        <Image
          src="https://ik.imagekit.io/shahansv/Urav/torch.png?updatedAt=1772385360191"
          alt="Torch"
          fill
          priority
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}
