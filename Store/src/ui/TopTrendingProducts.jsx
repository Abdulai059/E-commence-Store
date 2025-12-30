import { motion, AnimatePresence } from "framer-motion";
import { useSlider } from "../hooks/useSlider";
import homeSlides from "../data/heropagedata";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

function TopTrendingProducts() {
  const { currentSlide, slide, goToSlide } = useSlider(homeSlides, 5000);

  return (
    <section className="relative my-10 hidden items-center md:mb-25 md:flex">
      <div className="px-4 md:px-8">
        <div className="grid items-center gap-x-15 gap-y-20 md:grid-cols-2">
          {/* Left: Image */}
          <div className="relative left-8 grid w-full justify-items-center pt-8">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={slide.image}
                alt={slide.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className="xs:h-[200px] h-[250px] rounded-xl object-cover sm:h-[250px] md:h-[300px] md:pb-4"
              />
            </AnimatePresence>

            {/* Indicator */}
            <div className="left-1/ absolute bottom-70 hidden h-2 w-2 rounded-full bg-gray-800 after:absolute after:top-0 after:right-[50%] after:h-20 after:w-px after:bg-gray-800 after:content-[''] md:top-87 md:flex"></div>

            {/* Decorative Details */}
            <div className="absolute top-70 right-1/2 translate-y-8 transform text-right md:top-82 md:mx-3">
              <motion.h4
                key={slide.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg font-semibold text-gray-800 md:text-xl"
              >
                {slide.title}
              </motion.h4>
              <motion.p
                key={slide.subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm text-gray-600 md:text-base"
              >
                {slide.subtitle}
              </motion.p>
            </div>
          </div>

          {/* Right: Text */}
          <div className="hidden flex-col pt-15 md:flex md:pt-0">
            <motion.h3
              key={slide.trending}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-first-color mb-2 text-sm font-semibold text-red-500 uppercase md:text-lg"
            >
              {slide.trending}
            </motion.h3>

            <motion.h1
              key={slide.mainTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-2xl leading-[1.1] font-semibold text-gray-900 sm:text-[1.5rem] md:text-[2.4rem]"
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
              className="mb-10 pr-8 text-base leading-7 text-gray-700 sm:pr-0"
            >
              {slide.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-2 sm:flex-row sm:gap-4"
            >
              <Button size="medium" variation="primary">
                View Details
                
              </Button>

              <Button
                size="medium"
                variation="secondary"
                className="flex items-center gap-2 md:hidden"
                href="#"
              >
                Buy Now <ArrowRight size={18} />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-5 flex justify-center gap-2 md:mt-[90px]">
          {homeSlides.map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer rounded-full bg-red-500 transition-all duration-300 ${
                index === currentSlide
                  ? "bg-first-color h-2 w-8 rounded-md opacity-100"
                  : "h-2 w-2 bg-gray-800 opacity-50 hover:scale-110 hover:opacity-80"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopTrendingProducts;
