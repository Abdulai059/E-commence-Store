import { motion, AnimatePresence } from "framer-motion";
import { useSlider } from "../../hooks/useSlider";

function Hero() {
  const heroImages = [
    { image: "/hero-images/bg.jpeg" },
    { image: "/hero-images/bg4.jpeg" },
    { image: "/hero-images/bg5.jpeg" },
    { image: "/hero-images/bg2.jpg" },
  ];

  const { slide } = useSlider(heroImages);
  if (!slide) return null;

  return (
    <section className="relative pt-20 md:pt-[136px]">
      <div className="px-1 sm:px-2">
        <div className="relative mx-auto aspect-16/9 w-full overflow-hidden rounded-lg sm:aspect-16/7 md:aspect-[16/6.3]">
          <AnimatePresence mode="wait">
            <motion.img
              key={slide.image}
              src={slide.image}
              alt="Hero slide"
              className="absolute inset-0 h-full w-full object-cover object-center sm:object-cover sm:object-center"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              exit={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Hero;
