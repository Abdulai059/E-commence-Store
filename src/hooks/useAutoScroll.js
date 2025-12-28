import { useEffect, useState } from "react";

export function useAutoScroll(scrollContainerRef, deps = []) {
  const [autoDirection, setAutoDirection] = useState("right");

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;

    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = container;

      if (autoDirection === "right") {
        if (scrollLeft + clientWidth >= scrollWidth - 2) {
          setAutoDirection("left");
        } else {
          scroll("right");
        }
      } else {
        if (scrollLeft <= 1) {
          setAutoDirection("right");
        } else {
          scroll("left");
        }
      }
    }, 15000); 

    return () => clearInterval(interval);
  }, [autoDirection, ...deps]);

  return { autoDirection, setAutoDirection, scroll };
}
