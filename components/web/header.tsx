import Image from "next/image";
import Link from "next/link";
import { NavMenu } from "./nav_menu";
import { NavDropdownMenu } from "./nav_dropdown_menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F2E9]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main Navigation"
      >
        <Link
          href="/"
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-md"
          aria-label="Go to homepage"
        >
          <Image
            src="https://ik.imagekit.io/shahansv/Urav/logo.png?updatedAt=1772264205372"
            alt="Urav company logo"
            width={120}
            height={31}
            priority
            className="h-auto w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center">
          <NavMenu />
        </div>

        <div className="flex lg:hidden items-center">
          <NavDropdownMenu />
        </div>
      </nav>
    </header>
  );
}
