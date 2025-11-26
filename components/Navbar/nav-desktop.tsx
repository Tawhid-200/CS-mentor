import { NavNavigations } from "./constants";
import Link from "next/link";

export const NavDesktop = ({ pathname }: { pathname: string }) => {
  return (
    <ul className="flex items-center justify-center gap-4 text-sm [&_li]:px-2">
      {NavNavigations.map((nav, i) => (
        <li key={i}>
          <Link
            href={nav.link}
            className={`${
              pathname === nav.link ? "text-foreground" : "text-foreground/60"
            }`}
          >
            {nav.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
