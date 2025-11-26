"use client";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { HeroText } from "./hero-text";
import { HeroActions } from "./hero-actions";
import { HeroSearchbar } from "./hero-searchbar";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";

export const Hero = () => {
  return (
    <div className="w-full min-h-screen pt-[60px] flex items-center justify-center gap-8 flex-col relative px-4 mb-28">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#353b48e0_5%,#000_100%)] overflow-hidden -z-10 smooth-fade w-full" />

      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 gap-4 md:text-sm text-xs font-medium">
          <BookOpen size={15} />
          <span>سَلَـٰمٌ عَلَيْكُمْ طِبْتُمْ</span>
        </AnimatedShinyText>
      </div>
      <HeroText />

      <HeroSearchbar />

      <HeroActions />

      <ul className="flex items-center justify-between gap-12 [&_li]:sm:text-sm [&_li]:text-xs [&_li]:font-light [&_li]:list-none [&_li]:text-foreground/40 pb-8">
        <li>96 Language</li>
        <li>5 + Reciters</li>
        <li>24/7 Access</li>
      </ul>
    </div>
  );
};
