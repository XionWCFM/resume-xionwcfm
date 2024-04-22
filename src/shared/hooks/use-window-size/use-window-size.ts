import { useEffect, useLayoutEffect, useState } from 'react';

const A4Ratio = 1.414;
const MOBILE_WIDTH = 360;
const TABLET_WIDTH = 768;
const LABTOP_WIDTH = 1024;

const A4SIZE = {
  mobile: {
    width: MOBILE_WIDTH,
    height: MOBILE_WIDTH * A4Ratio,
  },
  tablet: {
    width: TABLET_WIDTH,
    height: TABLET_WIDTH * A4Ratio,
  },
  labtop: {
    width: LABTOP_WIDTH,
    height: LABTOP_WIDTH * A4Ratio,
  },
} as const;

type WindowSizeType = {
  width: number;
  height: number;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeType>(() => {
    if (typeof window === 'undefined') {
      return A4SIZE.mobile;
    }
    const currentWidthSize = window.innerWidth;
    if (currentWidthSize >= LABTOP_WIDTH) {
      return A4SIZE.labtop;
    }
    if (currentWidthSize >= TABLET_WIDTH) {
      return A4SIZE.tablet;
    }
    return A4SIZE.mobile;
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize(() => {
        const currentWidthSize = window.innerWidth;
        if (currentWidthSize >= LABTOP_WIDTH) {
          return A4SIZE.labtop;
        }
        if (currentWidthSize >= TABLET_WIDTH) {
          return A4SIZE.tablet;
        }
        return A4SIZE.mobile;
      });
    };
    if (typeof window !== undefined) {
      window.addEventListener('resize', handleResize);
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize]);
  return windowSize;
};
