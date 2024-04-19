import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const getMediaQuery = (size: number) => {
    if (size >= 1440) {
      return 1024;
    }
    if (size >= 768) {
      return 768;
    }
    return size;
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: getMediaQuery(window.innerWidth),
          height: getMediaQuery(window.innerHeight),
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
};
