import { motion, AnimatePresence } from "framer-motion";
import { useSlider } from "../../hooks/useSlider";

function Hero() {
  const heroimages = [
    {
      image: "/hero-images/bg.jpeg",
    },
    {
      image: "/hero-images/bg4.jpeg",
    },

    {
      image: "/hero-images/bg5.jpeg",
    },

    {
      image: "/hero-images/bg2.jpg",
    },
  ];

  const { slide } = useSlider(heroimages);
  if (!slide) return null;

  return (
    <section className="relative pt-[180px]"> 
  {/* pt-20 adds padding-top so content is below navbar */}
  <div className="w-full max-w-[1600px] h-[645px] mx-auto overflow-hidden relative">
    <AnimatePresence mode="wait">
      <motion.img
        key={slide.image}
        src={slide.image}
        alt="Hero slide"
        className="w-full h-full object-cover"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.7 }}
      />
    </AnimatePresence>
  </div>
</section>
  );
}

export default Hero;
