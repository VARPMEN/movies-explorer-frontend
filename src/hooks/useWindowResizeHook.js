import { useEffect, useState } from "react";

export function useWindowResizeHook() {
  const [isMobileWidth, setIsMobileWidth] = useState(window.innerWidth < 900);
  useEffect(() => {
    function checkWidth() {
      if (window.innerWidth < 900) {
        setIsMobileWidth(true);
      } else {
        setIsMobileWidth(false);
      }
    }
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return isMobileWidth;
}
