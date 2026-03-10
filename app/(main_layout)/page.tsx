import ScrollButton from "@/components/web/scroll_button";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 py-6 sm:py-8 md:py-12 text-neutral-600 space-y-6">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt fugit,
        inventore tenetur pariatur accusamus eum perferendis saepe est
        aspernatur quibusdam, delectus, corrupti facere commodi? Voluptatibus
        voluptas temporibus veniam perferendis maxime. Libero consequuntur quis
        quos. Hic nulla nihil eaque ex eveniet nisi et, iste incidunt velit
        tempora, nemo, molestiae recusandae laudantium voluptas. Facilis sint
        iusto eveniet ipsam, dolor in et accusamus doloribus, molestias officia
        distinctio. Cum voluptatem tempora nostrum excepturi possimus qui, nihil
        temporibus consequuntur obcaecati inventore delectus consectetur saepe
        corporis. Ad cupiditate impedit ipsa dignissimos sint aut illum minima
        magnam sunt adipisci nulla quo voluptatem repudiandae nisi debitis,
        atque est, cessitatibus sequi sapiente facere rerum, quod eligendi
        commodi consequatur deleniti soluta. Architecto ratione quam adipisci
        maxime odio distinctio fac
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Quidem eaque rem reprehenderit eligendi architecto vel aliquid ...
      </p>

      <ScrollButton isDarkBackground={true} />
    </main>
  );
}
