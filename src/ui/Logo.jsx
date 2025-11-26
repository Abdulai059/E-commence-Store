
import { ShoppingCart, Zap } from 'lucide-react';

export default function PressmartLogo({ size = 'large' }) {
  const sizes = {
    small: {
      container: 'text-xl',
      icon: 20,
      padding: 'p-1'
    },
    medium: {
      container: 'text-2xl',
      icon: 20,
      padding: 'p-1.5'
    },
    large: {
      container: 'text-3xl',
      icon: 24,
      padding: 'p-3'
    }
  };

  const currentSize = sizes[size];

  return (
    <div className="flex items-center gap-2">
    
      <div className={`${currentSize.padding} bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-sm`}>
        <ShoppingCart size={currentSize.icon} className="text-white fill-white" />
      </div>
      
    
      <div className={`font-bold text-2xl leading-none`}>
        <span className="text-green-600">Press</span>
        <span className="text-slate-100">mart.</span>
      </div>
    </div>
  );
}

// Alternative versions you can use:

// Version 2: Circle icon
export function PressmartLogoCircle({ size = 'medium' }) {
  const sizes = {
    small: { container: 'text-xl', icon: 16, circle: 'w-7 h-7' },
    medium: { container: 'text-2xl', icon: 20, circle: 'w-9 h-9' },
    large: { container: 'text-3xl', icon: 24, circle: 'w-11 h-11' }
  };

  const currentSize = sizes[size];

  return (
    <div className="flex items-center gap-2">
      <div className={`${currentSize.circle} bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-md flex items-center justify-center`}>
        <Zap size={currentSize.icon} className="text-white fill-white" />
      </div>
      
      <div className={`font-bold ${currentSize.container} leading-none`}>
        <span className="text-green-600">Press</span>
        <span className="text-gray-800">mart</span>
      </div>
    </div>
  );
}

// Version 3: Badge style
export function PressmartLogoBadge({ size = 'medium' }) {
  const sizes = {
    small: { text: 'text-lg', padding: 'px-3 py-1' },
    medium: { text: 'text-xl', padding: 'px-4 py-1.5' },
    large: { text: 'text-2xl', padding: 'px-5 py-2' }
  };

  const currentSize = sizes[size];

  return (
    <div className={`${currentSize.padding} bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-md inline-block`}>
      <div className={`font-bold ${currentSize.text} text-white flex items-center gap-1`}>
        <Zap size={18} className="fill-white" />
        <span>Pressmart</span>
      </div>
    </div>
  );
}

// Version 4: Minimal
export function PressmartLogoMinimal({ size = 'medium' }) {
  const sizes = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-3xl'
  };

  return (
    <div className={`font-bold ${sizes[size]} leading-none`}>
      <span className="text-green-600">Press</span>
      <span className="text-gray-800">mart</span>
      <span className="text-green-500 ml-0.5">.</span>
    </div>
  );
}