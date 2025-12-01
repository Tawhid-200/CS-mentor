"use client";

import { useState } from "react";
import { useDebounce } from "use-debounce";
import { Search, Command, X } from "lucide-react";
import { HeroSearchSuggestion } from "./hero-search-suggestion";

export const HeroSearchbar = () => {
  const [value, setValue] = useState<string>("");
  const [debounceValue] = useDebounce(value, 500);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <>
      <div
        className={`flex items-center justify-between gap-2 px-4 bg-foreground/5 backdrop-blur-2xl py-3 md:w-1/3 w-full rounded-2xl relative z-10 transition-all ease-in-out ${
          isFocus && "scale-105"
        }`}
      >
        <Search size={20} />
        <input
          type="text"
          className="focus:outline-none bg-transparent boder-none w-full placeholder:text-foreground/60 text-sm"
          autoComplete="off"
          placeholder="Search"
          autoCorrect="off"
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={value}
        />
        <button onClick={() => setValue("")}>
          {value ? <X size={20} /> : <Command size={18} />}
        </button>

        {/* Background Shadow */}
        <div
          className={`absolute -inset-1 bg-linear-to-r from-zinc-600/20 via-zinc-500/20 to-zinc-600/20 rounded-lg blur-xl transition-opacity  -z-10 ${
            isFocus ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Search Suggestions */}
        {<HeroSearchSuggestion key={debounceValue} query={debounceValue} />}
      </div>
    </>
  );
};
