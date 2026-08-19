import React, { useState, useEffect } from 'react';
import { Phone, List, X } from '@phosphor-icons/react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0E14]/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo matching Reference */}
        <a href="#hero" className="flex flex-col text-left group">
          <div className="flex items-center tracking-wider font-black text-2xl sm:text-3xl text-white">
            <span className="text-[#FF5500]">U</span>
            <span className="text-white">NI</span>
            <span className="text-[#FF5500]">T</span>
            <span className="text-[#FF5500]">Y</span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-bold text-gray-300 tracking-[0.25em] uppercase -mt-1">
            ТАЙМ-КАФЕ
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#hero" className="hover:text-white transition-colors">О нас</a>
          <a href="#zones" className="hover:text-white transition-colors">Зоны</a>
          <a href="#events" className="hover:text-white transition-colors">Мероприятия</a>
          <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href="tel:+79879500018"
            className="flex items-center gap-2 text-sm font-semibold text-gray-200 hover:text-[#FF5500] transition-colors"
          >
            <Phone size={16} weight="bold" className="text-[#FF5500]" />
            <span>+7 (987) 950-00-18</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-xl border border-[#FF5500] text-[#FF5500] hover:bg-[#FF5500] hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200"
          >
            Забронировать
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="px-3.5 py-1.5 rounded-lg border border-[#FF5500] text-[#FF5500] text-xs font-bold uppercase"
          >
            Бронь
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white"
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0E14] border-b border-white/10 px-6 py-6 space-y-4 text-left">
          <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-gray-200 hover:text-[#FF5500]">О нас</a>
          <a href="#zones" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-gray-200 hover:text-[#FF5500]">Зоны</a>
          <a href="#events" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-gray-200 hover:text-[#FF5500]">Мероприятия</a>
          <a href="#contacts" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-gray-200 hover:text-[#FF5500]">Контакты</a>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <a href="tel:+79879500018" className="text-sm font-bold text-white flex items-center gap-2">
              <Phone size={18} className="text-[#FF5500]" />
              <span>+7 (987) 950-00-18</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-[#FF5500] text-white font-bold text-sm"
            >
              Забронировать стол
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
