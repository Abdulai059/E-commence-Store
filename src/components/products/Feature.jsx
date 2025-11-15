import { useState } from "react";
import SectionHeader from "../../ui/SectionHeader";

function Feature() {
  const [stopScroll, setStopScroll] = useState(false);
  const cardData = [
    {
      title: "Unlock Your Creative Flow",
      image:
        "https://images.unsplash.com/photo-1543487945-139a97f387d5?w=1200&auto=format&fit=crop&q=60",
    },
    {
      title: "Design Your Digital Future",
      image:
        "https://images.unsplash.com/photo-1529254479751-faeedc59e78f?w=1200&auto=format&fit=crop&q=60",
    },
    {
      title: "Build with Passion, Ship with Pride",
      image:
        "https://images.unsplash.com/photo-1618327907215-4e514efabd41?w=1200&auto=format&fit=crop&q=60",
    },
    {
      title: "Think Big, Code Smart",
      image:
        "https://images.unsplash.com/photo-1583407723467-9b2d22504831?w=1200&auto=format&fit=crop&q=60",
    },
    {
      title: "Design Your Digital Future",
      image:
        "https://images.unsplash.com/photo-1529254479751-faeedc59e78f?w=1200&auto=format&fit=crop&q=60",
    },
    {
      title: "Build with Passion, Ship with Pride",
      image:
        "https://images.unsplash.com/photo-1618327907215-4e514efabd41?w=1200&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <section className="px-4 pb-20">
      <style>{getMarqueeStyles()}</style>
      <SectionHeader
        title="Our Feature Items"
        subtitle="Explore the latest additions to our collection."
        viewAllLink="/new-arrivals"
      />

      

      <div
        className="relative mx-auto w-full overflow-hidden"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-15 bg-gradient-to-r from-white to-transparent md:w-18" />
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: cardData.length * 2500 + "ms",
          }}
        >
          <div className="flex">
            {[...cardData, ...cardData].map((card, index) => (
              <div
                key={index}
                className="group relative mx-4 h-[20rem] w-56 transition-all duration-300 hover:scale-90"
              >
                <img src={card.image} alt="card" className="h-full w-full object-cover" />
                <div className="absolute bottom-0 left-0 flex h-full w-full items-center justify-center bg-black/20 px-4 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  <p className="text-center text-lg font-semibold text-white">{card.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-15 bg-gradient-to-l from-white to-transparent md:w-18" />
      </div>
    </section>
  );
}

export default Feature;

export function getMarqueeStyles() {
  return `
    .marquee-inner {
      display: inline-block;
      animation: marqueeScroll 10s linear infinite;
    }

    @keyframes marqueeScroll {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
  `;
}
