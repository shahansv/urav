import Link from "next/link";
import { NavigationLinks } from "./navigation-links";
import { NavigationDropdownMenu } from "./navigation-dropdownmenu";

export function Header() {
  return (
    <header>
      <nav className="lg-p-6 p-4 lg:px-12 bg-[#F5F2E9] flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <img src="logo.png" alt="" className="lg:h-8 h-6" />
          </Link>
        </div>
        <div>
          <div className="hidden lg:block">
            <NavigationLinks />
          </div>

          <div className="block lg:hidden">
            <NavigationDropdownMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
