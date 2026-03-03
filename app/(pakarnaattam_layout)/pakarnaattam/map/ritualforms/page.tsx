import SoundToggle from "@/components/web/sound_toggle";
import { Home, Map } from "lucide-react";
import Link from "next/link";

export default function PakarnaattamRitualFormsPage() {
  const shrines = [
    {
      name: "Baali",
      img: "https://ik.imagekit.io/shahansv/Urav/baali.png",
      link: "/initiative/pakarnaattam/baali",
    },
    {
      name: "Pottan",
      img: "https://ik.imagekit.io/shahansv/Urav/pottan.png",
      link: "/initiative/pakarnaattam/pottan",
    },
    {
      name: "Gulikan",
      img: "https://ik.imagekit.io/shahansv/Urav/gulikan.png",
      link: "/initiative/pakarnaattam/gulikan",
    },
    {
      name: "Muthappan",
      img: "https://ik.imagekit.io/shahansv/Urav/muthanppan.png",
      link: "/initiative/pakarnaattam/muthappan",
    },
    {
      name: "Devakoothu",
      img: "https://ik.imagekit.io/shahansv/Urav/devakooth.png",
      link: "/initiative/pakarnaattam/devakoothu",
    },
    {
      name: "Kathivanoor Veeran",
      img: "https://ik.imagekit.io/shahansv/Urav/kathivanoor.png",
      link: "/pakarnaattam/map/ritualforms/kathivanoor",
    },
  ];

  return (
    <div className="min-h-screen bg-[url('https://ik.imagekit.io/shahansv/Urav/bgImage.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center relative">
      <header className="absolute top-0 left-0 w-full px-6 py-6 z-20">
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <Link href="/initiative/pakarnaattam">
              <Home className="cursor-pointer text-white transition hover:scale-110" />
            </Link>
            <Link href="/pakarnaattam/map">
              <Map className="cursor-pointer text-white transition hover:scale-110" />
            </Link>
          </div>
          <SoundToggle file="/torch.mp3" />
        </div>
      </header>

      <div className="w-full max-w-6xl px-6">
        <div className="grid grid-cols-3 gap-y-24 gap-x-16 items-center text-center">
          {shrines.slice(0, 3).map((shrine) => (
            <Link key={shrine.name} href={shrine.link}>
              <div className="flex flex-col items-center group cursor-pointer">
                <img
                  src={shrine.img}
                  alt={shrine.name}
                  className="w-44 transition duration-300 group-hover:scale-110"
                />
                <p className="text-white mt-4 text-lg">{shrine.name}</p>
              </div>
            </Link>
          ))}

          <div className="col-span-3 flex justify-center">
            <p className="text-white text-lg animate-pulse">
              Click on any of the Shrine to know more
            </p>
          </div>

          {shrines.slice(3, 6).map((shrine) => (
            <Link key={shrine.name} href={shrine.link}>
              <div className="flex flex-col items-center group cursor-pointer">
                <img
                  src={shrine.img}
                  alt={shrine.name}
                  className="w-44 transition duration-300 group-hover:scale-110"
                />
                <p className="text-white mt-4 text-lg">{shrine.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
