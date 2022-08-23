import { useEffect } from "react";
import { useState } from "react";

export default function useScrolled(height) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > height) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, [height]);
  return {
    isScrolled,
    height,
    setIsScrolled,
  };
}
