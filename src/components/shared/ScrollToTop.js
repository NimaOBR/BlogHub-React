import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { patchname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [patchname]);
  return null;
};

export default ScrollToTop;
