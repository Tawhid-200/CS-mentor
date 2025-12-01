import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

interface PersistentHistoryProps {
  query: string;
  storageKey: string;
  maxHistoryStore: number;
}

type ReturnType = [string[], (removeItem: string) => void];

export function usePersistentHistory({
  query,
  storageKey,
  maxHistoryStore,
}: PersistentHistoryProps): ReturnType {
  const [dbQuery] = useDebounce(query, 500);
  const [history, setHistory] = useState<string[]>(() => {
    try {
      const storedHistory = localStorage.getItem(storageKey);
      return storedHistory ? JSON.parse(storedHistory) : [];
    } catch (error: any) {
      console.error("Error reading history from Local Storage:", error);
      return [];
    }
  });

  const removeQuery = (removeItem: string) => {
    setHistory((previousHistory) => {
      const newHistory = previousHistory.filter((item) => item !== removeItem);
      return newHistory;
    });
  };

  useEffect(() => {
    if (!dbQuery) return;
    setHistory((previousHistory) => {
      if (previousHistory[previousHistory.length - 1] === query) {
        return previousHistory;
      }
      let newHistory = previousHistory;
      if (previousHistory.length >= maxHistoryStore) {
        newHistory = previousHistory.slice(1);
      }
      return [...newHistory, query];
    });
  }, [dbQuery, maxHistoryStore]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(history));
    } catch (error: any) {
      console.error("Error writing history to Local Storage:", error);
    }
  }, [history, storageKey]);

  return [history, removeQuery];
}
