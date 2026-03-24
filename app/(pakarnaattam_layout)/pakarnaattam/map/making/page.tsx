import ScrollButton from "@/components/web/scroll_button";
import SoundToggle from "@/components/web/sound_toggle";
import { Home, Map } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PakarnaattamMakingPage() {
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

          <SoundToggle file="/Making.mpeg" volume={0.8} />
        </div>
      </header>

      <article className="relative z-10 flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
        <div className="space-y-6 sm:space-y-8 sm:text-lg md:text-xl text-neutral-200 leading-relaxed">
          <Image
            src="/Making1.png"
            alt="Kathivanoor Veeran Illustration"
            width={2048}
            height={1463}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 1024px"
          />

          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
            <p>You see…..</p>
            <p>
              Theyyam is not just about telling a story, “It is about becoming
              the story.” <br className="hidden sm:block" />
              In Theyyam, a person does not simply wear a costume and act like a
              god. The transformation happens little by little through ritual,
              through preparation, through belief until the person standing
              there is no longer seen as human.
              <br className="hidden sm:block" /> “It is not sudden. It is a
              journey.”
              <br className="hidden sm:block" />
              And every step of that journey is visible… in what they wear, in
              what they paint, in what they carry.
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight my-16">
            Costume (Attire of the Deity)
          </h1>

          <Image
            src="/Making2.png"
            alt="Kathivanoor Veeran Illustration"
            width={2048}
            height={1463}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 1024px"
          />

          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
            <p>
              “The body too must change,” Grandma continued.
              <br className="hidden sm:block" /> The costume is not just worn it
              grows around the performer. <br className="hidden sm:block" />
              Made from coconut leaves, plantain sheaths, and natural fibers,
              the attire connects the deity to the land itself. It reminds us
              that these gods are not distant… they belong to the soil, the
              forests, the people.The skirts made of kuruthola tender coconut
              leaves spread wide and full, creating a larger-than-life presence.
              Layer upon layer is added, expanding the body beyond its natural
              form. <br className="hidden sm:block" /> The movement of these
              costumes is just as important as their appearance. When the
              performer dances, the leaves rustle, the layers shift, the entire
              form comes alive.” She paused thoughtfully.
              <br className="hidden sm:block" /> These materials are not chosen
              for beauty alone. They carry memory of land, of tradition, of
              community.”
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight my-16">
            Mudi (The Headgear)
          </h1>

          <Image
            src="/Making3.png"
            alt="Kathivanoor Veeran Illustration"
            width={2048}
            height={1463}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 1024px"
          />

          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
            <p>
              The most powerful moment, she continued, comes at the very end
              when the Mudi is placed.
              <br className="hidden sm:block" />
              Until then, the performer is still in the stage called Vellattam…
              still human, still preparing. But the moment the Mudi touches the
              head… everything changes.
              <br className="hidden sm:block" /> The Mudi is not just a crown.
              It is the identity of the deity. It carries the form, the
              presence, and the power of the god.
            </p>
            <p>
              Grandma gestured upward, as if measuring its height.
              <br className="hidden sm:block" />
              Some Mudis are small… but some rise taller than a man ten,
              fifteen, even twenty feet high. Each one is unique, shaped to
              match the nature of the deity. Some spread like flames, some like
              serpent hoods, some like radiant halos.
              <br className="hidden sm:block" />
              They are made from simple materials..... arecanut wood, bamboo,
              cloth, and tender coconut leaves. But what is simple in material
              becomes extraordinary through skill.
            </p>
            <p>
              Artisans spend days, sometimes weeks, carefully crafting each
              part. The coconut leaves are cut into patterns, layered, and
              assembled piece by piece. Nothing is random. Every line, every
              curve has meaning.Places like Payyannur and Andallur are known for
              this work, where families have been doing this for generations.
            </p>
            <p>
              She smiled faintly.
              <br className="hidden sm:block" />
              “And when it is finally lifted and placed… the performer
              disappears. What stands before the people… is the deity.”
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight my-16">
            Mukhezhuthu (Face Painting)
          </h1>

          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
            <p>
              Now… the face, <br className="hidden sm:block" />
              That is where the transformation begins to show.
              <br className="hidden sm:block" /> With rice paste, turmeric,
              lime, charcoal, and natural pigments, the face is slowly covered
              in patterns so detailed… they almost seem alive. This is called
              Mukhezhuthu.
              <br className="hidden sm:block" /> It is said, that the very first
              colors used in Theyyam were red, white, and black.
              <br className="hidden sm:block" />
              It takes hours. The artist works in silence, with steady hands,
              drawing lines that must be perfect. There is no room for error.
            </p>
            <p>
              Each design is different. Some are sharp and fierce, with bold red
              and black lines. Some are calm, balanced, almost symmetrical. Each
              one tells you who the deity is before a single word is spoken.
              <br className="hidden sm:block" /> She looked closely, as if
              imagining it.
              <br className="hidden sm:block" /> But this is not just art.
              <br className="hidden sm:block" /> With every line drawn, the
              performer begins to lose their own face… and take on another.
            </p>
          </div>

          <Image
            src="/Making4.png"
            alt="Kathivanoor Veeran Illustration"
            width={2048}
            height={1463}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 1024px"
          />

          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
            <p>
              It does not stop at the face, she continued.
              <br className="hidden sm:block" /> “The entire body becomes part
              of the transformation.”
              <br className="hidden sm:block" /> Patterns extend across the
              chest, arms, and torso. Colors are chosen carefully red for power,
              black for mystery, white for purity.
              <br className="hidden sm:block" />
              The body is no longer just a body… it becomes a surface where the
              divine is revealed.
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight my-16">
            Ayudham (Weapons They Carry)
          </h1>

          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
            <p>
              And then… there are the weapons.
              <br className="hidden sm:block" /> But in Theyyam, they are not
              meant to harm… they are meant to reveal.
              <br className="hidden sm:block" /> Each deity carries something
              different a sword, a bow, a trident, sometimes even fire.
              <br className="hidden sm:block" /> These are not chosen at random.
              They tell us who the deity is and what they stand for.
              <br className="hidden sm:block" /> Swords speak of protection and
              justice. Bows connect the deity to the forest and survival.
              <br className="hidden sm:block" />
              The trident carries divine authority. And fire… fire shows power
              and transformation.
            </p>
            <p>
              “These weapons are not just objects they are symbols.”
              <br className="hidden sm:block" /> They complete the form of the
              deity, just like the costume and the face.
              <br className="hidden sm:block" /> When the performer holds
              them,“They are becoming.”
            </p>
          </div>

          <Image
            src="/Making5.png"
            alt="Kathivanoor Veeran Illustration"
            width={2048}
            height={1463}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 1024px"
          />

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
