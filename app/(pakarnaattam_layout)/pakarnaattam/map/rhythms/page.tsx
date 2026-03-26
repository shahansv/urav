import ScrollButton from "@/components/web/scroll_button";
import SoundToggle from "@/components/web/sound_toggle";
import { Home, Map } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PakarnaattamRhythmsPage() {
  return (
    <div
      className="relative min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/shahansv/Urav/bgImage.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <header className="absolute top-0 left-0 w-full z-20 px-4 sm:px-6 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex gap-4 sm:gap-6">
            <Link href="/initiative/pakarnaattam">
              <Home className="w-6 h-6 sm:w-7 sm:h-7 text-white transition hover:scale-110" />
            </Link>

            <Link href="/pakarnaattam/map">
              <Map className="w-6 h-6 sm:w-7 sm:h-7 text-white transition hover:scale-110" />
            </Link>
          </div>

          <SoundToggle file="/Making.mpeg" volume={0.5} />
        </div>
      </header>

      <article className="relative z-10 flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
        <div className="space-y-6 sm:space-y-8 sm:text-lg md:text-xl text-neutral-200 leading-relaxed">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight my-16">
            Thottam (Sacred Songs)
          </h1>
          <Image
            src="/Rhythms1.jpg"
            alt="Kathivanoor Veeran Illustration"
            width={2048}
            height={1463}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 1024px"
          />

          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
            <p>
              The grandmother's voice slowed, taking on a rhythm of its own.....
            </p>
            <p>
              Before you ever see the Theyyam… before the colors, before the
              crown….. there is a voice, she said gently. “That voice is the
              Thottam.”
              <br className="hidden sm:block" /> She closed her eyes for a
              moment, as if listening to it in her memory. “It begins softly…
              almost like a whisper from the past.
              <br className="hidden sm:block" /> The ones who sing it are not
              just singers they are keepers of memory, carrying stories that
              have lived for generations.” The song does not rush. It unfolds
              slowly, verse by verse, telling of the deity's birth, their
              struggles, their anger, their justice. With every line, the
              distance between the past and the present begins to fade.
            </p>
            <p>
              You see, she continued, “the story is not just being told… it is
              being brought here.” The space changes, the air grows heavier, and
              the listener is drawn into the world of the deity. Thottam is not
              separate from the ritual it is what prepares everything. It
              prepares the performer to transform, the space to become sacred,
              and the people to receive the deity. By the time the song rises to
              its full strength, the story is no longer far away. It stands at
              the edge of the present… waiting to take form.
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight my-16">
            Musical Instruments and Rhythm
          </h1>

          <Image
            src="/Rhythms2.jpg"
            alt="Kathivanoor Veeran Illustration"
            width={2048}
            height={1463}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 1024px"
          />

          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
            <p>
              In Theyyam, sound is not something that comes after it begins
              alongside the ritual itself.
              <br className="hidden sm:block" /> Grandma explained how the
              performance is built on a carefully structured system of rhythm,
              where each instrument plays a distinct role.
              <br className="hidden sm:block" /> The chenda, perumbara, and
              cherututi form the base, creating deep, layered beats that guide
              the pace of the performance.
              <br className="hidden sm:block" /> Alongside them, the elathalam
              keeps a constant rhythm, its sharp metallic sound maintaining
              timing and balance throughout.
              <br className="hidden sm:block" /> The kuzhal cuts through the air
              with its high, piercing notes, while the udukku adds quick,
              vibrating beats that respond to shifts in movement.
              <br className="hidden sm:block" /> At certain moments, the sound
              of the conch is introduced, marking transitions and heightening
              the ritual atmosphere.These instruments are not played
              independently of the performance. Their rhythms are closely
              aligned with the movements of the performer, creating a direct
              connection between sound and action. The same practitioners often
              handle both singing the Thottam and playing the instruments,
              ensuring continuity between narration and rhythm.
            </p>
          </div>

          <Image
            src="/Rhythms3.jpg"
            alt="Kathivanoor Veeran Illustration"
            width={2048}
            height={1463}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 1024px"
          />

          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
            <p>
              As the ritual progresses, the tempo changes starting slow and
              measured, then gradually intensifying as the transformation
              unfolds. The elathalam maintains the rhythmic structure, while the
              drums build energy, supporting the increasing dynamism of the
              dance. The movements themselves shift accordingly, sometimes
              forceful and vigorous, sometimes controlled and graceful,
              reflecting the dual qualities often described as Tandava and
              Lasya.
            </p>
            <p>
              In this way, the music does not simply accompany the performance
              it organizes and sustains it. From the initial stages of
              invocation to the final moments of release, rhythm acts as the
              underlying force that carries the entire Theyyam experience
              forward.
            </p>
          </div>

          <div className="my-64 flex justify-center text-sm sm:text-base">
            <Link href="/pakarnaattam/map">
              <p className="hover:underline hover:animate-pulse">
                Go back to map
              </p>
            </Link>
          </div>
        </div>
      </article>

      <ScrollButton isDarkBackground />
    </div>
  );
}
