
import { ArrowRight } from 'lucide-react';

function ProjectBanner() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="relative bg-gradient-to-r from-red-500 to-red-600 rounded-3xl shadow-2xl overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-400 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-700 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Content Container */}
        <div className="relative flex items-center justify-between px-12 py-10">
          {/* Left Content */}
          <div className="flex-1 z-10">
            <div className="inline-block mb-4">
              <span className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Limited Time Offer
              </span>
            </div>
            
            <h1 className="text-6xl font-black text-white mb-2 tracking-tight leading-none">
              FIND YOUR
              <br />
              SOUND
            </h1>
            
            <p className="text-white text-opacity-90 text-lg mb-6 font-medium">
              Premium headphones up to 50% off
            </p>
            
            <button className="group bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
              Shop Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
            </button>
          </div>
          
          {/* Right Content - Headphones */}
          <div className="relative z-10">
            {/* Product Badge */}
            <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl px-6 py-4 transform rotate-3">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Welcome Offer</p>
              <p className="text-2xl font-black text-red-600">Summer Sale</p>
            </div>
            
            {/* Headphones Image Container */}
            <div className="relative">
              {/* Shadow effect */}
              <div className="absolute inset-0 bg-red-700 rounded-full blur-3xl opacity-50 scale-110"></div>
              
              {/* Circular background */}
              <div className="relative w-80 h-80 bg-red-400 bg-opacity-30 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white border-opacity-20">
                {/* Headphones */}
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&q=80" 
                    alt="Premium Headphones" 
                    className="w-64 h-64 object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Floating elements */}
                  <div className="absolute -top-6 -left-6 w-20 h-20 bg-white rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-full opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
      </div>
      
      {/* Additional Features */}
      <div className="grid grid-cols-3 gap-6 mt-8 px-4">
        <div className="text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-semibold text-gray-800">Free Shipping</p>
          <p className="text-sm text-gray-500">On orders over $50</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="font-semibold text-gray-800">2 Year Warranty</p>
          <p className="text-sm text-gray-500">Full protection</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="font-semibold text-gray-800">Money Back</p>
          <p className="text-sm text-gray-500">30 day guarantee</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectBanner;