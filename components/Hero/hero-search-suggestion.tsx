import { memo, useMemo, useState, useEffect } from "react";
import { useFetch } from "@/hooks/useFetch";
import { usePersistentHistory } from "@/hooks/usePersistentHistory";
import { parseQuery } from "./parseQuery";
import { History } from "lucide-react";
export const HeroSearchSuggestion = memo(({ query }: { query: string }) => {
  const info = parseQuery(query);
  const url = useMemo(() => {
    if (!query) return "";
    if (info.type === "singel") {
      return `https://api.qurani.ai/gw/qh/v1/surah/${info.value}?limit=2000&offset=0`;
    } else if (info.type === "selected") {
      return `https://api.qurani.ai/gw/qh/v1/ayah/${info.surah}:${info.ayah}`;
    } else {
      return `https://api.qurani.ai/gw/qh/v1/search/${info.value}?exactSearch=false`;
    }
  }, [info, query]);

  const { data, isLoading, error } = useFetch(url!, {
    enabled: !!query,
    cache: false,
  });
  console.log(data);
  const searchHistory = usePersistentHistory({
    query,
    storageKey: "user_search_history",
    maxHistoryStorage: 8,
  });
  console.log(searchHistory);
  if (!query) return null;
  return (
    <div className="absolute left-0 top-13 w-full p-4 rounded-xl backdrop-blur-2xl bg-zinc-800 h-58 overflow-y-auto"></div>
  );
});
