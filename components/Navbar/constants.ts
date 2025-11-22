export interface NavNavigationsProps {
  title: string;
  link: string;
}

export const NavNavigations: NavNavigationsProps[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Library",
    link: "/library",
  },
  {
    title: "Recitation",
    link: "/recitation",
  },
  {
    title: "About",
    link: "/about",
  },
];

export interface NavActionsProps {
  icon: any;
  action: string;
  onClick?: () => void;
}

import { Settings, Languages, Search, Moon, Sun } from "lucide-react";
export const NavActions: NavActionsProps[] = [
  {
    icon: Settings,
    action: "setting",
  },
  {
    icon: Languages,
    action: "languages",
  },
  {
    icon: Search,
    action: "search",
  },
  {
    icon: Moon,
    action: "theme",
  },
];
