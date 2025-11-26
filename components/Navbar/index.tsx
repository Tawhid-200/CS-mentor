"use client";
import Link from "next/link";
import { NavDesktop } from "./nav-desktop";
import { NavMobile } from "./nav-mobile";
import { usePathname } from "next/navigation";
import { NavAction } from "./nav-actions";
import { useView } from "@/hooks/useView";

export const Navbar = () => {
  const display = useView();
  const pathname = usePathname();
  return (
    <header className="fixed top-0 w-full bg-transparent backdrop-blur-md z-10">
      <nav className="flex items-center justify-between px-8 py-4  relative">
        <Link href="/" className="text-xl font-bold text-foreground/80">
          Al - Hedayah
        </Link>
        {display ? (
          <NavDesktop pathname={pathname} />
        ) : (
          <NavMobile pathname={pathname} />
        )}

        {display && <NavAction />}
      </nav>
    </header>
  );
};
