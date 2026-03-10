"use client";

import { useEffect, useState, useRef } from "react";
import ScrollButton from "@/components/web/scroll_button";
import SoundToggle from "@/components/web/sound_toggle";
import { Home } from "lucide-react";
import Link from "next/link";
import PakarnaattamMapPage from "../../map/page";

export default function PakarnaattamKannanPage() {
  const [scale, setScale] = useState(0.5);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!mapRef.current) return;

      const rect = mapRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const centerDistance = Math.abs(
        rect.top + rect.height / 2 - windowHeight / 2,
      );
      const startZoomDistance = 300;
      const newScale =
        centerDistance < startZoomDistance
          ? 0.5 + 0.5 * (1 - centerDistance / startZoomDistance)
          : 0.5;

      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <header className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/initiative/pakarnaattam">
            <Home className="cursor-pointer transition hover:scale-110" />
          </Link>
          <SoundToggle file="/torch.mp3" />
        </div>
      </header>

      <article className="flex-1 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
          <p>
            “Theyyam is more like many art forms coming together to create one
            magical performance as to bring a god to life.”
            <br className="hidden sm:block" /> Grandma began
          </p>
          <p>
            Listening closely to what his grandmother has to say about Theyyam,
            little Kannan's curiosity begins to grow......
          </p>
          <p>
            Seeing the wonder in his eyes, his grandmother gently begins to
            explain what Theyyam truly is. In the northern parts of Kerala,
            especially in Kannur and Kasaragod, with its presence also extending
            to parts of Wayanad and northern Kozhikode.
          </p>
          <p>
            Theyyam stands as one of the most powerful ritual traditions of the
            region. The word “Theyyam” is believed to have evolved from Daivam,
            meaning “god,” because during the ritual the performer is not merely
            acting but is believed to temporarily become the living embodiment
            of a deity.
          </p>
          <p>
            She tells Kannan that the world of Theyyam is vast and full of
            fascinating characters. It includes powerful mother goddesses,
            guardian spirits, animal-like forms, and also local heroes and
            heroines who once lived among the people. Many of them were ordinary
            individuals whose lives were marked by courage, injustice,
            sacrifice, or tragic deaths. Over generations, their stories were
            preserved through oral traditions and ritual songs known as Thottam
            Pattu. Gradually these stories moved beyond memory and storytelling,
            and the people began to worship these figures as deities.
          </p>
          <p>
            Grandma further explains that although people from all communities
            come to worship and seek blessings, the sacred duty of performing
            Theyyam traditionally belongs to certain communities such as the
            Malayan, Vannan, Velan, Anjoottan, Kopalan, Vettuvan, Kolathari,
            Pulayan, and Mavilan. During the ritual, the performer transforms
            into the deity itself, blessing devotees and answering their
            prayers, making the moment deeply spiritual for the entire
            community.
          </p>
          <p>
            She tells him that the origins of Theyyam go back many centuries.
            Its roots are believed to lie in ancient forms of ancestor worship,
            hero worship, and fertility rituals practiced by early tribal and
            agrarian communities of the Malabar region. Over time these
            traditions absorbed influences from Dravidian culture, tantric
            practices, and later Hindu beliefs, gradually evolving into the rich
            and vibrant ritual tradition that continues to thrive today.
          </p>
          <p>
            Through his grandmother's words, Kannan begins to understand that
            Theyyam behind its vibrant performance has a deeper world of
            stories, history, and artistic meaning. Curious to learn more,
            Kannan begins to explore the many layers of Theyyam, each revealing
            a different dimension of this extraordinary tradition.
          </p>
        </div>
      </article>

      <div
        ref={mapRef}
        className="sticky top-0 left-0 w-full h-screen flex justify-center items-center overflow-hidden"
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.2s linear",
        }}
      >
        <PakarnaattamMapPage />
      </div>

      <ScrollButton isDarkBackground={true} />
    </main>
  );
}
