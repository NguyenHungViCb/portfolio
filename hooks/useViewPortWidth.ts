import { useEffect, useState } from "react";

export const useViewPortWidth = (defaultViewport = 640) => {
  const [viewportWidth, setViewPortWidth] = useState(defaultViewport);

  const setViewPortWidthHandler = (e: MediaQueryListEvent) => {
    if (e.matches) {
      setViewPortWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    setViewPortWidth(window.innerWidth);
    const mobile = window.matchMedia(`(max-width: 639px)`);
    mobile.addEventListener("change", setViewPortWidthHandler);
    const tablet = window.matchMedia("(min-width: 640px)");
    tablet.addEventListener("change", setViewPortWidthHandler);
    return (() => {
      mobile.removeEventListener("change", setViewPortWidthHandler);
      tablet.removeEventListener("change", setViewPortWidthHandler);
    });
  }, []);
  return [viewportWidth, setViewPortWidth];
};
