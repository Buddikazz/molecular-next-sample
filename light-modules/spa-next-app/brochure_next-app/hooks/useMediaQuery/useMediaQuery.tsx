"use client";

import { useEffect, useState } from "react";

export const getMatches = (query: string): boolean => {
  // Prevents SSR issues
  if (typeof window !== "undefined") {
    return window.matchMedia(query).matches;
  }
  return false;
};

export default function useMediaQuery(queryValue: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const matchMedia = window.matchMedia(queryValue);

    function handleChange() {
      setMatches(getMatches(queryValue));
    }

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    if (matchMedia.addEventListener) {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeEventListener) {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [queryValue]);

  return matches;
}
