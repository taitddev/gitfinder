import { useEffect, useState, useCallback } from "react";
export default function useScrollPercentage() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  function getScrollPercent(): number {
    let element = document.documentElement;
    let body = document.body;

    return (
      ((element.scrollTop || body.scrollTop) /
        ((element.scrollHeight || body.scrollHeight) - element.clientHeight)) *
      100
    );
  }

  const scrollEvent = useCallback(() => {
    setScrollPercentage(getScrollPercent());
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [scrollEvent]);

  return scrollPercentage;
}
