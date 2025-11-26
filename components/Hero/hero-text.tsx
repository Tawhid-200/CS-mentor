"use client";
import { useEffect, useState } from "react";
import { HeroContents } from "./constants";

export const HeroText = () => {
  const [index, setIndex] = useState<number | null>(null);
  useEffect(() => {
    if (HeroContents && HeroContents.length > 0) {
      const randome = Math.floor(Math.random() * HeroContents.length);
      setIndex(randome);
    }
  }, []);

  if (index == null) return;

  const quran = HeroContents[index];
  if (!quran) return;
  return (
    <div className="flex items-center justify-between gap-4 flex-col mb-4 text-center">
      <p className="text-zinc-500 text-base max-sm:text-sm uppercase tracking-[0.2em] font-medium">
        {quran.ref}
      </p>
      <h1
        className={`${
          quran.ayah.length <= 25
            ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            : "text-xl sm:text-2xl md:text-3xl"
        } max-w-3xl text-center`}
      >
        <span className="bg-clip-text text-transparent bg-linear-to-b from-white via-zinc-200 to-zinc-400 leading-[1.4]">
          {quran.ayah}
        </span>
      </h1>
      <p
        className={`md:text-lg text-sm text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light`}
      >
        {quran.translation}
      </p>
    </div>
  );
};
