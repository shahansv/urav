"use client";

import { Crimson_Text } from "next/font/google";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useCallback, useEffect } from "react";

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

type Member = {
  name: string;
  designation: string;
  role: string;
  image: string;
  bio: string;
};

const teamMembers: Member[] = [
  {
    name: "Niranjan Kaliyath",
    designation: "Visual Artist",
    role: "Art & Design",
    image: "/assets/niranjan.png",
    bio: "A visual artist and a curious sapien, whose drawn to the exploration of art, culture, and the narratives that shape human experience. I find meaning in observing the world closely its people, traditions, and evolving identities while also embracing the spontaneity and joy that come with creative exploration.\n\nMy practice moves between thoughtful research and playful experimentation, where I enjoy exploring different forms, materials, and visual languages and deeply interested in how stories are carried and transformed over time, and how they can be translated into visuals that feel both meaningful and engaging.\n\nFor me, art is not only a medium of expression but also a space to explore, question, and play to try, to fail, and to discover new perspectives. Whether rooted in culture or driven by curiosity, my work aims to create visual experiences that are reflective, expressive, and alive with a sense of exploration.",
  },
  {
    name: "Shahan V Saleem",
    designation: "Software Developer",
    role: "Web Development",
    image: "/assets/shahan.jpg",
    bio: "There is a moment when you visit a website and everything just feels right. The way it moves, the way it responds, the way it seems to understand what you need before you ask. That feeling is what I try to create. I am drawn to the small, careful decisions that shape how something feels to use, and I find real satisfaction in getting those moments right.\n\nBuilding this project, I focused on the experience of every person who would land on it. How each page breathes, how every interaction feels natural rather than mechanical, how the whole thing holds together as something coherent. These are the kinds of details that most people never consciously notice, but would immediately feel if they were missing.\n\nFor me, making things for the web is not only about writing code but about showing care. Care for the person on the other side of the screen, and for the experience they carry away with them.",
  },
];

const CARD_WIDTH = 260;
const ANIM_DURATION = 0.42;

function BioParagraphs({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const paragraphs = text.split("\n\n").filter(Boolean);
  return (
    <>
      {paragraphs.map((para, idx) => (
        <p key={idx} className={className}>
          {para}
        </p>
      ))}
    </>
  );
}

function useResponsiveBioWidth() {
  const [bioPanelWidth, setBioPanelWidth] = useState(480);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const padding = vw >= 1024 ? 112 : vw >= 640 ? 48 : 32;
      const available = vw - padding - CARD_WIDTH - 24;
      setBioPanelWidth(Math.max(220, Math.min(640, available)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return bioPanelWidth;
}

function TeamCard({
  member,
  index,
  hovered,
  onActivate,
  onDeactivate,
  isMobile,
  bioPanelWidth,
}: {
  member: Member;
  index: number;
  hovered: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  isMobile: boolean;
  bioPanelWidth: number;
}) {
  const expandedWidth = CARD_WIDTH + bioPanelWidth;
  const bioFadeDelay = ANIM_DURATION - 0.05;

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        hovered ? onDeactivate() : onActivate();
      }
      if (e.key === "Escape" && hovered) onDeactivate();
    },
    [hovered, onActivate, onDeactivate],
  );

  const handleTap = useCallback(() => {
    if (!isMobile) return;
    hovered ? onDeactivate() : onActivate();
  }, [isMobile, hovered, onActivate, onDeactivate]);

  const handleBlur = useCallback(
    (e: React.FocusEvent) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
        onDeactivate();
      }
    },
    [onDeactivate],
  );

  if (isMobile) {
    return (
      <motion.div
        onClick={handleTap}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={hovered}
        aria-label={`${member.name}, ${member.designation} — ${hovered ? "collapse" : "expand"} bio`}
        animate={{
          boxShadow: hovered
            ? "0 24px 56px rgba(0,0,0,0.65)"
            : "0 0px 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: ANIM_DURATION, ease: [0.25, 0.1, 0.25, 1] }}
        className="bg-[#F0EDE4] rounded-2xl overflow-hidden cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black w-full"
      >
        <div className="mx-3 mt-3 rounded-xl overflow-hidden bg-[#e0ddd4] aspect-4/3 sm:aspect-3/2">
          <img
            src={member.image}
            alt={`Photo of ${member.name}`}
            loading={index === 0 ? "eager" : "lazy"}
            className="w-full h-full object-cover object-top grayscale block"
          />
        </div>

        <div className="p-3 px-4 flex flex-col">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-semibold text-base leading-snug text-black">
                {member.name}
              </p>
              <p className="text-sm text-black/60 mt-0.5">
                ({member.designation})
              </p>
            </div>
            <div className="flex flex-col items-end gap-2 shrink-0">
              <p className="text-sm font-bold text-black">{member.role}</p>
              <motion.span
                animate={{ rotate: hovered ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                aria-hidden="true"
                className="text-xl font-light text-black/35 leading-none"
              >
                +
              </motion.span>
            </div>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {hovered && (
            <motion.div
              key="mobile-bio"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="mx-3 border-t border-black/10" />
              <div className="p-4 pb-5 space-y-3">
                <BioParagraphs
                  text={member.bio}
                  className="text-sm leading-7 text-black/70"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-expanded={hovered}
      aria-label={`${member.name}, ${member.designation}`}
      onKeyDown={handleKeyDown}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={handleBlur}
      animate={{
        width: hovered ? expandedWidth : CARD_WIDTH,
        boxShadow: hovered
          ? "0 24px 56px rgba(0,0,0,0.65)"
          : "0 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ duration: ANIM_DURATION, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ willChange: "width", flexShrink: 0 }}
      className="bg-[#F0EDE4] rounded-2xl overflow-hidden flex flex-row outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <div
        style={{ width: CARD_WIDTH, flexShrink: 0 }}
        className="flex flex-col"
      >
        <div className="m-3 mb-0 rounded-xl overflow-hidden aspect-3/4 bg-[#e0ddd4]">
          <img
            src={member.image}
            alt={`Photo of ${member.name}`}
            loading={index === 0 ? "eager" : "lazy"}
            className="w-full h-full object-cover grayscale block"
          />
        </div>
        <div className="p-3 px-4 flex flex-col flex-1 justify-between">
          <div>
            <p className="font-semibold text-base leading-snug text-black whitespace-nowrap">
              {member.name}
            </p>
            <p className="text-sm text-black/60 mt-0.5 whitespace-nowrap">
              ({member.designation})
            </p>
          </div>
          <p className="text-sm font-bold text-right text-black mt-3 whitespace-nowrap">
            {member.role}
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {hovered && (
          <motion.div
            key="bio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            transition={{ duration: 0.2, delay: bioFadeDelay }}
            style={{ width: bioPanelWidth, flexShrink: 0 }}
            tabIndex={-1}
            className="overflow-y-auto self-stretch outline-none"
          >
            <div className="p-6 px-7 space-y-4 h-full">
              <BioParagraphs
                text={member.bio}
                className="text-sm leading-7 text-black/75"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function TeamPage() {
  const activeIndexRef = useRef<number | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const bioPanelWidth = useResponsiveBioWidth();

  useEffect(() => {
    const checkMobile = () => {
      const isTouch = window.matchMedia(
        "(hover: none) and (pointer: coarse)",
      ).matches;
      setIsMobile(isTouch || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("orientationchange", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("orientationchange", checkMobile);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, []);

  const activate = useCallback((i: number) => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    activeIndexRef.current = i;
    setHoveredIndex(i);
  }, []);

  const deactivate = useCallback((i: number) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      if (activeIndexRef.current === i) {
        activeIndexRef.current = null;
        setHoveredIndex(null);
      }
    }, 60);
  }, []);

  if (isMobile === null) {
    return (
      <main className="min-h-screen bg-black px-4 sm:px-6 lg:px-14 py-10">
        <section className="mx-auto w-full max-w-7xl mb-10 sm:mb-16">
          <h1
            className={`${crimson.className} text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug`}
          >
            Our Team
          </h1>
        </section>
        <section className="mx-auto w-full max-w-7xl">
          <div className="flex gap-6 flex-col md:flex-row">
            {teamMembers.map((m) => (
              <div
                key={m.name}
                style={{ width: CARD_WIDTH }}
                className="bg-[#F0EDE4]/10 rounded-2xl h-96 animate-pulse shrink-0"
                aria-hidden="true"
              />
            ))}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-4 sm:px-6 lg:px-14 py-10">
      <section className="mx-auto w-full max-w-7xl mb-10 sm:mb-16">
        <h1
          className={`${crimson.className} text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug`}
        >
          Our Team
        </h1>
      </section>

      <section className="mx-auto w-full max-w-7xl py-4">
        {isMobile ? (
          <div className="flex flex-col gap-4">
            {teamMembers.map((member, i) => (
              <TeamCard
                key={member.name}
                member={member}
                index={i}
                hovered={hoveredIndex === i}
                onActivate={() => activate(i)}
                onDeactivate={() => deactivate(i)}
                isMobile={true}
                bioPanelWidth={bioPanelWidth}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-row gap-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {teamMembers.map((member, i) => (
              <TeamCard
                key={member.name}
                member={member}
                index={i}
                hovered={hoveredIndex === i}
                onActivate={() => activate(i)}
                onDeactivate={() => deactivate(i)}
                isMobile={false}
                bioPanelWidth={bioPanelWidth}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
