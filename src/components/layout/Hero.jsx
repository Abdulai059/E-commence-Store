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
    <section className="relative pt-20 sm:pt-[150px]">
      <div className="px-1 sm:px-4">
        <div className="relative mx-auto h-[200px] w-full overflow-hidden rounded-lg md:h-[750px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={slide.image}
              src={slide.image}
              alt="Hero slide"
              className="absolute top-0 left-0 h-full w-full object-cover object-center"
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
