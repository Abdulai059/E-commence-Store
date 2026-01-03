import { useState } from "react";
import SectionHeader from "../../ui/SectionHeader";

function Feature() {
  const [stopScroll, setStopScroll] = useState(false);
  const cardData = [
    {
      title: "Power Up Your Kitchen",
      image:
        "https://unsplash.com/photos/u--nU1njg0A/download?force=true",
    },
    {
      title: "Bring Movies to Life",
      image:
        "https://unsplash.com/photos/ZG-eiD3Ep_Q/download?force=true",
    },
    {
      title: "Keep It Cool in Style",
      image:
        "https://unsplash.com/photos/aGnIPRua7zE/download?force=true",
    },
    {
      title: "Blend Your Way to Perfection",
      image:
        "https://unsplash.com/photos/eIqO4P50MeY/download?force=true",
    },
    {
      title: "Stay Comfortable All Year",
      image:
        "https://unsplash.com/photos/-8u1mnE-rVY/download?force=true",
    },
    {
      title: "Capture Every Moment",
      image:
        "https://unsplash.com/photos/T4PGpx7WStQ/download?force=true",
    },
  ];


  return (
    <section className="px-4 py-0">
      <style>{getMarqueeStyles()}</style>
      <SectionHeader
        title="Trending Products"
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
