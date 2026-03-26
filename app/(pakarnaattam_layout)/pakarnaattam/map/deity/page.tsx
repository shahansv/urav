import ScrollButton from "@/components/web/scroll_button";
import SoundToggle from "@/components/web/sound_toggle";
import { Home, Map } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PakarnaattamDeityPage() {
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

          <SoundToggle file="/torch.mp3" volume={0.8} />
        </div>
      </header>

      <article className="relative z-10 flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
        <div className="space-y-6 sm:space-y-8 sm:text-lg md:text-xl text-neutral-200 leading-relaxed">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight my-16">
            Thottam (Sacred Songs)
          </h1>
          <Image
            src="/Deity.jpg"
            alt="Kathivanoor Veeran Illustration"
            width={2048}
            height={1463}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 1024px"
          />

          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
            <p>
              “Change can be accepted, as long as the rituals are not altered”.
            </p>
            <p>
              Even at the age of 65, with a voice refined through years of
              practice, Shashikumar from Panur Chendayad is reciting the
              Thottam. Wearing a fish-shaped crown and holding a bow and arrow,
              he transforms into Muthappan, embodying a calm yet radiant
              presence. Through his performance, he once again enacts the
              Thottam and dance of Muthappan, absorbing the sorrows of ordinary
              people.
              <br className="hidden sm:block" /> As he speaks about the legends
              and rituals of Muthappan, his memories drift back, and for a
              moment, Shashikumar becomes a young man again.
              <br className="hidden sm:block" /> “We belong to the Anjootan
              community. I began performing Muthappan Theyyam in my early
              twenties. Back then, we would earn just enough for tea. After the
              season ended, there would be no work for six months…” The
              hardships of those days pass through his mind.
              <br className="hidden sm:block" /> But times have changed now.
              Life has moved forward. With better income, the younger generation
              has also become more active in this field. In the earlier days,
              the performance was simpler, but over time, Muthappan Theyyam has
              evolved visually, becoming more elaborate while still retaining
              its rituals and traditions.
              <br className="hidden sm:block" /> “Change can be accepted,” he
              says, “as long as the rituals are not altered. Performing Theyyam
              is an act of complete surrender.”
            </p>
            <p>
              Shashikumar has learned the art by watching and listening to his
              elders. The rhythm, the music, and the dance must all come
              together to captivate the audience. Once the costume is worn and
              the ritual sword (madayan churika) is placed in his hand, the
              presence of Muthappan is believed to enter his body. From that
              moment until the crown is removed, there is no human on stage only
              Muthappan.
              <br className="hidden sm:block" /> Muthappan is performed mainly
              in three forms. In Thiruvappana, considered an aspect of Lord
              Shiva, the performer appears with a crescent-shaped crown and
              facial makeup, embodying a calm yet radiant presence. In the Mudi
              Uyarna Muthappan (Vaishnava or hunting form), the performer wears
              a fish-shaped crown and carries a bow and arrow, appearing in the
              form of a hunter. In another form, Muthappan appears as a
              householder and a people's deity living like an ordinary man,
              hunting, consuming toddy and fish, and directly listening to the
              concerns of devotees.
            </p>
            <p>
              “When the body and mind can no longer keep up,” Shashikumar says,
              “one naturally steps away from performing.” Like any art, he
              believes that with sincerity, discipline, and a willingness to
              learn, the younger generation can continue to shine in performing
              Muthappan Theyyam.
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
