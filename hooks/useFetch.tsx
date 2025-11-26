import { useState, useEffect, useRef } from "react";

interface useFetchOptions {
  enabled?: boolean; // run only when true
  cache?: boolean; // enable caching
}

export function useFetch<T>(url: string, options: useFetchOptions = {}) {
  const { enabled = true, cache = true } = options;
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const cacheStore = useRef<Map<string, T>>(new Map());
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!enabled || !url) return;

    if (cache && cacheStore.current.has(url)) {
      setData(cacheStore.current.get(url)!);
      return;
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        if (cache) cacheStore.current.set(url, data);
        setData(data);
      } catch (err: any) {
        if (err.name !== "AbortError") setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    return () => controller.abort();
  }, [url, enabled]);
  return { data, isLoading, error };
}
