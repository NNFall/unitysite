import React from 'react';
import { ArrowRight, MapPin, Train, Coffee, Star, GameController, FilmStrip, Users } from '@phosphor-icons/react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Copy + Right Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column (58%) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Overline */}
            <div className="text-xs sm:text-sm font-bold tracking-widest text-[#FF5500] uppercase">
              UNITY — ТАЙМ-КАФЕ В САМАРЕ
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white leading-[1.08] tracking-tight">
              Место для игр, <br />
              кино и встреч <br />
              с друзьями <span className="text-[#FF5500]">в Самаре</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
              Уютное тайм-кафе в центре парка Дружба, рядом с м. Советская. PS5, бильярд, кинозал, настолки и комфортные комнаты для отдыха. Можно со своей едой и напитками — без пробкового сбора.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="btn-primary px-8 py-4 text-base font-bold flex items-center justify-center gap-2.5 shadow-glow-orange"
              >
                <span>Забронировать</span>
                <ArrowRight size={18} weight="bold" />
              </button>

              <a
                href="https://vk.com/unitysmr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-6 py-4 text-sm font-semibold flex items-center justify-center gap-2.5"
              >
                <div className="w-5 h-5 rounded-full bg-[#2787F5] flex items-center justify-center text-[10px] font-black text-white">
                  VK
                </div>
                <span>Перейти во ВКонтакте</span>
              </a>
            </div>

            {/* Value Indicators Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin size={18} weight="fill" className="text-[#FF5500] flex-shrink-0" />
                <span className="leading-tight">Самара,<br />ул. Гагарина, 118</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center text-[10px] flex-shrink-0">
                  М
                </div>
                <span className="leading-tight">3 минуты<br />от м. Советская</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee size={18} weight="fill" className="text-amber-400 flex-shrink-0" />
                <span className="leading-tight">Можно со своей<br />едой и напитками</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={18} weight="fill" className="text-amber-400 flex-shrink-0" />
                <span className="leading-tight">Рейтинг<br /><strong className="text-white">4.7</strong> на картах</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-zinc-900 group">
              <img
                src="/assets/ref/hero_main_lounge.jpg"
                alt="Интерьер тайм-кафе UNITY Самара"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 aspect-[4/3] sm:aspect-[16/11]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
              
              {/* Bottom Badge inside photo */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#0B0E14]/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">Парк «Дружба» • Самара</div>
                  <div className="text-[11px] text-[#FF5500]">Открыто ежедневно до 06:00</div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#FF5500]/20 text-[#FF5500] font-bold text-[11px]">
                  0 ₽ Пробка
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Under-Hero 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          
          <div className="ref-card p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/15 flex items-center justify-center text-[#FF5500] flex-shrink-0">
              <GameController size={28} weight="fill" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Игры</h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                PS5, настолки и приставки для компаний
              </p>
            </div>
          </div>

          <div className="ref-card p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <FilmStrip size={28} weight="fill" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Кинозал</h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Большой экран и комфорт для киноночей
              </p>
            </div>
          </div>

          <div className="ref-card p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 flex items-center justify-center text-amber-400 flex-shrink-0">
              <Users size={28} weight="fill" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Компаниям и праздникам</h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Отдыхайте вместе в отдельных комнатах
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
