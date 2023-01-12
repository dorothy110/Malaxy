//File Description for useViewPort.js
//ListPageNav.js is a javascript file that contains the navigation bar used in the
//Author: Min Chang Kim
import { useState, useEffect, useCallback } from "react";

const useViewport = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = useCallback(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [handleWindowResize]);
  return { height, width };
};
export default useViewport;
