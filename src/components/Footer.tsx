import React from 'react';
import { ArrowUp } from '@phosphor-icons/react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07090D] border-t border-white/10 py-10 text-left text-xs text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="flex items-center tracking-wider font-black text-xl text-white">
            <span className="text-[#FF5500]">U</span>
            <span className="text-white">NI</span>
            <span className="text-[#FF5500]">T</span>
            <span className="text-[#FF5500]">Y</span>
          </div>
          <span className="text-gray-500">|</span>
          <span>© {new Date().getFullYear()} UNITY ТАЙМ-КАФЕ Самара. Все права защищены.</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors p-2"
        >
          <span>Наверх</span>
          <ArrowUp size={14} />
        </button>

      </div>
    </footer>
  );
};
