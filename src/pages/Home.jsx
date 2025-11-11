import homeSlides from "../data/heropagedata";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = homeSlides[currentSlide];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % homeSlides.length);
    }, 10000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="relative flex items-center py-16 md:py-32 min-h-[90vh] bg-white">
      <div className="mx-auto px-4 md:px-8 max-w-[1500px]">
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-8 items-center">
          {/* Left: Image */}
          <div className="relative grid justify-items-center pt-8">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={slide.image}
                alt={slide.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className="h-[420px] md:h-[300px] sm:h-[250px] xs:h-[200px] object-cover rounded-xl shadow-lg"
              />
            </AnimatePresence>

            {/* Indicator */}
            <div className="absolute bottom-2 left-1/2 w-2 h-2 bg-gray-800 rounded-full after:content-[''] after:absolute after:top-0 after:right-[45%] after:w-px after:h-20 after:bg-gray-800"></div>

            {/* Decorative Details */}
            <div className="absolute bottom-0 right-1/2 transform translate-y-8 text-right">
              <motion.h4
                key={slide.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-semibold text-gray-800"
              >
                {slide.title}
              </motion.h4>
              <motion.p
                key={slide.subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-gray-600"
              >
                {slide.subtitle}
              </motion.p>
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col">
            <motion.h3
              key={slide.trending}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-lg text-first-color uppercase font-bold mb-2"
            >
              {slide.trending}
            </motion.h3>

            <motion.h1
              key={slide.mainTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[3.5rem] md:text-[2.5rem] sm:text-[2rem] font-bold leading-[1.1] mb-6 text-gray-900"
            >
              {slide.mainTitle.split(" ").map((word, i) => (
                <span key={i}>
                  {word}
                  {i < slide.mainTitle.split(" ").length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            <motion.p
              key={slide.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10 pr-8 sm:pr-0 text-lg leading-7 text-gray-700"
            >
              {slide.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 sm:flex-col sm:gap-2"
            >
              <button className="bg-first-color text-white py-4 px-7 rounded-lg font-medium hover:bg-first-color-alt transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                Buy Now
              </button>
              <a
                href="#"
                className="text-title-color flex items-center gap-2 hover:underline"
              >
                View Details <i className="bx bx-right-arrow-alt text-xl" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 gap-2">
          {homeSlides.map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 h-2 bg-first-color rounded-md opacity-100"
                  : "w-2 h-2 bg-gray-800 opacity-50 hover:opacity-80 hover:scale-110"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
