import homeSlides from '../data/heropagedata';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = homeSlides[currentSlide];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % homeSlides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="relative flex  min-h-screen items-center bg-white py-16 md:pt-32">
      <div className=" px-4 md:px-8">
        <div className="grid items-center gap-x-20 gap-y-8 md:grid-cols-2">
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
                className="xs:h-[200px] h-[440px] rounded-xl object-cover sm:h-[250px] md:h-[310px]"
              />
            </AnimatePresence>

            {/* Indicator */}
            <div className="left-1/ absolute bottom-70 h-2 w-2 rounded-full bg-gray-800 after:absolute after:top-0 after:right-[50%] after:h-20 after:w-px after:bg-gray-800 after:content-[''] md:top-87"></div>

            {/* Decorative Details */}
            <div className="absolute right-1/2 bottom-0 translate-y-8 transform text-right md:top-82 md:mx-3">
              <motion.h4
                key={slide.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-semibold text-gray-800"
              >
                {slide.title}
              </motion.h4>
              <motion.p
                key={slide.subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-base text-gray-600"
              >
                {slide.subtitle}
              </motion.p>
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col pt-15 md:pt-0">
            <motion.h3
              key={slide.trending}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-first-color mb-2 text-lg font-bold text-gray-600 uppercase md:text-lg"
            >
              {slide.trending}
            </motion.h3>

            <motion.h1
              key={slide.mainTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-5xl leading-[1.1] font-bold text-gray-900 sm:text-[2rem] md:text-[2.5rem]"
            >
              {slide.mainTitle.split(' ').map((word, i) => (
                <span key={i}>
                  {word}
                  {i < slide.mainTitle.split(' ').length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            <motion.p
              key={slide.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10 pr-8 text-base leading-7 text-gray-700 sm:pr-0"
            >
              {slide.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 sm:flex-col sm:gap-2"
            >
              <button className="bg-secondary hover:bg-first-color-alt rounded-lg px-7 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                Buy Now
              </button>
              <a href="#" className="text-title-color flex items-center gap-2 hover:underline md:hidden">
                View Details <i className="bx bx-right-arrow-alt text-xl" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Pagination */}
        <div className="md:mt-[90px] flex justify-center gap-2">
          {homeSlides.map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-first-color h-2 w-8 rounded-md opacity-100'
                  : 'h-2 w-2 bg-gray-800 opacity-50 hover:scale-110 hover:opacity-80'
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
