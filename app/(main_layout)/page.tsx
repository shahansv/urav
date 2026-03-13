import { Carousel } from "@/components/web/carousel";
import ScrollButton from "@/components/web/scroll_button";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className="text-neutral-100 ">
      <ScrollButton isDarkBackground={true} />
      <div className="flex-1 mx-auto w-full max-w-5xl text-3xl px-4 sm:px-6 lg:px-16 mt-8 ">
        <h1 className={garamond.className}>
          Replenishing roots drawn from....{" "}
        </h1>
      </div>
      <Carousel />
      <article className="flex-1 mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-16 mt-8 ">
        <div className="space-y-5 sm:space-y-6 md:space-y-8 ">
          <p>
            A space that helps in reconnecting people with their cultural and
            traditional roots, and connects the gap between tradition and
            modernity, reimagining narratives through digital storytelling.
            <br className="hidden sm:block" />
            Calm, honest, and human in its approach, Urav remains deeply
            grounded in heritage while staying open to reinterpretation.
          </p>
          <p>
            Drawn to projects that blend heritage with contemporary design, it
            resonates deeply with Urav's vision.For fellow humans who seek
            cultural knowledge and crave meaningful digital experiences that
            connect them to living traditions. Together, we form a community
            that doesn't just consume culture we engage with it, reflect on it,
            and keep it alive.
          </p>
        </div>
      </article>
    </main>
  );
}
