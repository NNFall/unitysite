import React from 'react';
import { ArrowRight, MapPin, Coffee, Star, GameController, FilmStrip, Users } from '@phosphor-icons/react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative pt-20 pb-0 overflow-hidden text-left bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Copy + Right Visual — exact proportions from reference */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center min-h-[520px]">
          
          {/* Left Column */}
          <div className="space-y-5 py-8">
            
            {/* Overline */}
            <div className="text-xs font-bold tracking-[0.18em] text-[#FF5500] uppercase">
              UNITY — ТАЙМ-КАФЕ В САМАРЕ
            </div>

            {/* H1 Headline — matches reference size/weight */}
            <h1 className="text-[42px] sm:text-[52px] lg:text-[58px] font-black text-white leading-[1.05] tracking-tight">
              Место для игр,<br />
              кино и встреч<br />
              с друзьями <span className="text-[#FF5500]">в Самаре</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[15px] text-gray-300 leading-relaxed max-w-lg">
              Уютное тайм-кафе в центре парка Дружба, рядом с м. Советская.<br />
              PS5, бильярд, кинозал, настолки и комфортные комнаты для отдыха.<br />
              Можно со своей едой и напитками — без пробкового сбора.
            </p>

            {/* CTAs — exact button shapes from reference */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={onOpenBooking}
                className="btn-primary px-8 py-4 text-[15px] font-bold flex items-center justify-center gap-2.5 shadow-glow-orange cursor-pointer rounded-xl"
              >
                <span>Забронировать</span>
                <ArrowRight size={18} weight="bold" />
              </button>

              <a
                href="https://vk.com/unitysmr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-6 py-4 text-[14px] font-semibold flex items-center justify-center gap-2.5 rounded-xl"
              >
                <div className="w-6 h-6 rounded-full bg-[#2787F5] flex items-center justify-center text-[11px] font-black text-white flex-shrink-0">
                  VK
                </div>
                <span>Перейти во ВКонтакте</span>
              </a>
            </div>

            {/* Value strip — with pipe separators exactly as in reference */}
            <div className="flex flex-wrap items-center gap-0 pt-5 border-t border-white/10 text-[13px] text-gray-300">
              <div className="flex items-center gap-2 pr-5">
                <MapPin size={16} weight="fill" className="text-[#FF5500] flex-shrink-0" />
                <span>Самара, ул. Гагарина, 118</span>
              </div>
              <div className="w-px h-7 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2 px-5">
                <div className="w-[18px] h-[18px] rounded-full bg-[#0f8cff] text-white font-black flex items-center justify-center text-[9px] flex-shrink-0">
                  М
                </div>
                <span>3 минуты от м. Советская</span>
              </div>
              <div className="w-px h-7 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2 px-5">
                <Coffee size={16} weight="fill" className="text-amber-400 flex-shrink-0" />
                <span>Можно со своей едой и напитками</span>
              </div>
              <div className="w-px h-7 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2 pl-5">
                <Star size={16} weight="fill" className="text-amber-400 flex-shrink-0" />
                <span>Рейтинг <strong className="text-white">4.7</strong></span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero photo — no border card, just rounded image with overlays */}
          <div className="relative h-full min-h-[400px] lg:min-h-[480px] flex items-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="/assets/ref/hero_main_lounge.jpg"
                alt="Интерьер тайм-кафе UNITY Самара"
                className="w-full h-full object-cover aspect-[16/11] lg:aspect-[4/3] transform group-hover:scale-[1.03] transition-transform duration-700"
              />
              {/* Dark gradient overlay bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

              {/* Bottom-left overlay badge: Парк Дружба — exactly as in reference */}
              <div className="absolute bottom-4 left-4 flex flex-col gap-1">
                <div className="text-[12px] font-semibold text-white/90">
                  Парк «Дружба» · Самара
                </div>
                <div className="text-[11px] font-bold text-[#FF5500]">
                  Открыто ежедневно до 06:00
                </div>
              </div>

              {/* Bottom-right overlay badge: 0₽ Пробка — exactly as in reference */}
              <div className="absolute bottom-4 right-4 bg-[#FF5500] text-white text-[11px] font-black px-3 py-1.5 rounded-lg shadow-lg">
                0₽ Пробка
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Under-Hero 3 Feature Cards — full width, dark, directly below */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="ref-card p-5 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#FF5500]/15 flex items-center justify-center text-[#FF5500] flex-shrink-0">
              <GameController size={24} weight="fill" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-white">Игры</h3>
              <p className="text-[13px] text-gray-400 mt-0.5">
                PS5, настолки и приставки
              </p>
            </div>
          </div>

          <div className="ref-card p-5 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <FilmStrip size={24} weight="fill" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-white">Кинозал</h3>
              <p className="text-[13px] text-gray-400 mt-0.5">
                Большой экран и комфорт
              </p>
            </div>
          </div>

          <div className="ref-card p-5 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 flex-shrink-0">
              <Users size={24} weight="fill" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-white">Компаниям и праздникам</h3>
              <p className="text-[13px] text-gray-400 mt-0.5">
                Отдыхайте вместе
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
