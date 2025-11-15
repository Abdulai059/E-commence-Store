import { useEffect, useState } from "react";

export function useSlider(slides, interval = 5000) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const goToSlide = (index) => setCurrentSlide(index);

  return { currentSlide, slide: slides[currentSlide], goToSlide };
}
