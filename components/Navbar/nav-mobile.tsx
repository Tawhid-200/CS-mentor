"use client";
import { Menu, X } from "lucide-react";
import { NavNavigations } from "./constants";
import { NavAction } from "./nav-actions";
import { useState } from "react";
import Link from "next/link";

export const NavMobile = ({ pathname }: { pathname: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>
      <div
        className={`w-full absolute top-[60px] left-0 ${!isOpen && "hidden"}`}
      >
        <ul className="w-full flex items-baseline justify-between flex-col text-sm gap-8 p-4 border-b border bg-transparent backdrop-blur-xl">
          {NavNavigations.map((nav, i) => (
            <li key={i}>
              <Link
                href={nav.link}
                className={`${
                  pathname === nav.link
                    ? "text-foreground/90"
                    : "text-foreground/60"
                }`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        <NavAction className="p-4" />
      </div>
    </div>
  );
};
