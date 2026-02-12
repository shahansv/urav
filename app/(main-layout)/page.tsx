import { AppleCardsCarouselComp } from "@/components/web/apple-cards-carousel-comp";

export default function Home() {
  return (
    <main className="px-4 sm:px-8 md:px-16">
      <section className="py-8 text-white">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-bold text-neutral-200 font-sans">
          Replenishing roots through ...
        </h2>

        <div className="mt-4 h-64 sm:h-80 md:h-137.5 rounded-3xl overflow-hidden">
          <img
            src="home_image_1.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              A bridges that connects the gap between tradition and modernity,
              reimagining cultural narratives through digital storytelling.Its
              personality is calm, honest, and human grounded in respect for
              heritage yet open to reinterpretation. Drawn to projects that
              blend heritage with contemporary design, making them the most
              responsive to Urav's vision. For the fellow humans who seek
              cultural knowledge and crave meaningful digital experiences that
              connect them to human traditions. Together, we form a community
              that doesn't just consume culture we engage with it, reflect on
              it, and keep it alive.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden">
            <img
              src="home_image_1.jpg"
              alt=""
              className="w-full h-64 sm:h-72 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Latest Stories
        </h2>
        <div>
          <AppleCardsCarouselComp />
        </div>
      </section>

      <div className="border border-neutral-300 m-28 "></div>
    </main>
  );
}
