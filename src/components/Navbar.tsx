import React, { useState, useEffect } from 'react';
import { CLUB_INFO } from '../data/mockData';
import { GameController, PhoneCall, ArrowUpRight, List, X } from '@phosphor-icons/react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Зоны & Игры', href: '#zones' },
    { label: 'Цены & Калькулятор', href: '#pricing' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Группа VK', href: '#community' },
    { label: 'Как добраться', href: '#location' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#09090b]/90 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Status */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-amber-500 flex items-center justify-center text-white shadow-glow-orange group-hover:scale-105 transition-transform">
              <GameController size={24} weight="bold" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-brand-orange transition-colors">
                  UNITY
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-300 font-mono hidden sm:inline-block">
                  Самара
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Открыто сегодня до 06:00</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-brand-orange transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-brand-orange after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CLUB_INFO.vkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#2787F5]/15 text-[#519BF7] hover:bg-[#2787F5]/25 border border-[#2787F5]/30 transition-all hover:scale-105"
            >
              <span>ВКонтакте</span>
              <ArrowUpRight size={14} weight="bold" />
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-orange to-amber-500 text-white hover:brightness-110 shadow-glow-orange transition-all hover:scale-105 active:scale-95"
            >
              <PhoneCall size={16} weight="bold" />
              <span>Забронировать</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-200 hover:text-white"
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121216] border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-200 hover:bg-white/5 hover:text-brand-orange"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={`tel:${CLUB_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 text-gray-200 font-medium text-sm border border-white/10"
            >
              <PhoneCall size={16} />
              <span>{CLUB_INFO.phone}</span>
            </a>

            <a
              href={CLUB_INFO.vkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#2787F5] text-white font-semibold text-sm"
            >
              <span>Открыть группу ВКонтакте</span>
              <ArrowUpRight size={16} weight="bold" />
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-sm shadow-glow-orange"
            >
              Забронировать стол / комнату
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
