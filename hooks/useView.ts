"use client";
import { useEffect, useState } from "react";

export function useView() {
  const [isMd, setIsMd] = useState<boolean>(false);

  useEffect(() => {
    const checkView = () => {
      setIsMd(window.innerWidth >= 768);
    };

    checkView(); // initial check
    window.addEventListener("resize", checkView);

    return () => window.removeEventListener("resize", checkView);
  }, []);

  return isMd;
}
