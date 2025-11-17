import { ArrowRight } from 'lucide-react';

function ProjectBanner() {
  return (
    <section className="mx-auto w-full max-w-7xl my-10 px-4">
      <div className="relative overflow-hidden rounded-xl bg-linear-to-r from-red-500 to-red-600 shadow-2xl">
        {/* Decorative circles */}
        {/* Content Container */}
        <div className="relative flex flex-col items-center justify-between px-6 py-8 md:flex-row md:px-12 md:py-10">
          {/* Left Content */}
          <div className="z-10 mb-8 text-left md:mb-0 md:text-left">
            <div className="mb-4 inline-block">
              <span className="bg-opacity-20 rounded-xl bg-white px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                Limited Time Offer
              </span>
            </div>
            <h1 className="mb-2 text-4xl leading-none font-black tracking-tight text-white md:text-6xl">
              FIND YOUR
              <br />
              SOUND
            </h1>
            <p className="text-opacity-90 mb-6 text-base font-medium text-white md:text-lg">
              Premium headphones up to 50% off
            </p>
            <button className="group mx-auto flex transform items-center gap-3 rounded-full bg-white px-6 py-3 text-base font-bold text-red-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:mx-0 md:px-8 md:py-4 md:text-lg">
              Shop Now
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={22} />
            </button>
          </div>

          {/* Product Badge */}
          <div className="relative hidden md:flex md:flex-col -right-10 z-10 rotate-3 transform rounded-2xl bg-white px-4 py-3 shadow-xl md:-top-15 md:-right-8 md:px-6 md:py-3">
            <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
              Welcome Offer
            </p>
            <p className="text-lg font-black text-red-600 md:text-2xl">Summer Sale</p>

            <div className="absolute inset-0 right-17 scale-75 rounded-full bg-red-800 opacity-50 blur-3xl"></div>
          </div>
        </div>
      </div>
      {/* <div className='className="relative -right-10 z-10 to-70%'>
        <img src="/banner-img.png" alt="iron" className="h-80 w-40" />
      </div> */}
    </section>
  );
}

export default ProjectBanner;

export function ProjectBannerW() {
  return (
    <>
      {/* Additional Features */}
      <div className="mt-8 grid grid-cols-3 gap-6 px-4">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="font-semibold text-gray-800">Free Shipping</p>
          <p className="text-sm text-gray-500">On orders over $50</p>
        </div>

        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="font-semibold text-gray-800">2 Year Warranty</p>
          <p className="text-sm text-gray-500">Full protection</p>
        </div>

        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="font-semibold text-gray-800">Money Back</p>
          <p className="text-sm text-gray-500">30 day guarantee</p>
        </div>
      </div>
    </>
  );
}
