"use client";
import { memo, useMemo, useState, useEffect } from "react";
import { useFetch } from "@/hooks/useFetch";
import { usePersistentHistory } from "@/hooks/usePersistentHistory";
import { parseQuery } from "./parseQuery";
import { History, X } from "lucide-react";
import { SurahSuggestion } from "./search-surah-suggestion-card";
import { SearchWordsSuggestion } from "./search-words-suggestion";

export const HeroSearchSuggestion = memo(({ query }: { query: string }) => {
  const info = parseQuery(query);

  const baseUrl = "/api/search";
  const url = useMemo(() => {
    if (!query) return "";
    if (info.type === "singel") {
      return `${baseUrl}/surah/${info.value}`;
    } else if (info.type === "selected") {
      return `${baseUrl}/ayah/${info.surah}:${info.ayah}`;
    } else {
      return `${baseUrl}/word/${info.value}`;
    }
  }, [info, query]);

  const { data, isLoading, error } = useFetch<any>(url!, {
    enabled: !!query,
    cache: false,
  });

  const [item, setItem] = useState("");

  const [history, removeQuery] = usePersistentHistory({
    query: item,
    storageKey: "user_search_history",
    maxHistoryStore: 8,
  });

  const searchHistory = history;

  return (
    <div className="absolute left-0 top-13 w-full p-2 rounded-xl backdrop-blur-2xl bg-zinc-800 h-58 overflow-y-auto">
      {data?.type === "surah" && <SurahSuggestion data={data} />}
      {data?.type === "word" && <SearchWordsSuggestion data={data} />}

      {searchHistory && (
        <ul className="flex items-start flex-col gap-2 text-sm">
          {searchHistory.map((history, i) => (
            <li
              key={i}
              className="flex items-center justify-start flex-row gap-2 w-full py-2 px-3 group "
            >
              <History size={18} />
              <span className="w-full">
                {history.length >= 45 ? history.slice(0, 45) + "..." : history}
              </span>

              <button
                className="group-hover:opacity-100 opacity-0 transition-all ease-in-out hover:bg-background p-1 rounded-full"
                onClick={() => removeQuery(history)}
              >
                <X size={15} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
