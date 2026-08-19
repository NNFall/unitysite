import React from 'react';
import { ArrowRight, MapPin, Coffee, Star, GameController, FilmStrip, Users } from '@phosphor-icons/react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative pt-20 pb-0 overflow-hidden text-left bg-[#0B0E14]">
        {/* True Full-Bleed Right Image Background */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] z-0">
          <img
            src="/assets/ref/hero_main_lounge.jpg"
            alt="Интерьер тайм-кафе UNITY Самара"
            className="w-full h-full object-cover"
          />
          {/* Gradient to fade image into the solid dark background on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E14] via-[#0B0E14]/70 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-2xl min-h-[520px] flex flex-col justify-center py-12 lg:py-20">
            
            <div className="space-y-6">
              
              {/* Overline */}
              <div className="text-xs font-bold tracking-[0.18em] text-[#FF5500] uppercase">
                UNITY — ТАЙМ-КАФЕ В САМАРЕ
              </div>

              {/* H1 Headline — Massive size */}
              <h1 className="text-[48px] sm:text-[60px] lg:text-[72px] font-black text-white leading-[1.05] tracking-tight">
                Место для игр,<br />
                кино и встреч<br />
                с друзьями <span className="text-[#FF5500]">в Самаре</span>
              </h1>

              {/* Subtitle */}
              <p className="text-[16px] text-gray-300 leading-relaxed max-w-lg">
                Уютное тайм-кафе в центре парка Дружба, рядом с м. Советская.<br />
                PS5, бильярд, кинозал, настолки и комфортные комнаты для отдыха.<br />
                Можно со своей едой и напитками — без пробкового сбора.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 pb-6">
                <button
                  onClick={onOpenBooking}
                  className="btn-primary px-8 py-4 text-[16px] font-bold flex items-center justify-center gap-2.5 shadow-glow-orange cursor-pointer rounded-xl"
                >
                  <span>Забронировать</span>
                  <ArrowRight size={18} weight="bold" />
                </button>

                <a
                  href="https://vk.com/unitysmr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-6 py-4 text-[15px] font-semibold flex items-center justify-center gap-2.5 rounded-xl border border-white/10"
                >
                  <div className="w-6 h-6 rounded-full bg-[#2787F5] flex items-center justify-center text-[11px] font-black text-white flex-shrink-0">
                    VK
                  </div>
                  <span>Перейти во ВКонтакте</span>
                </a>
              </div>

              {/* Value strip — Single row with pipes */}
              <div className="flex flex-row items-center gap-4 pt-6 text-[14px] text-gray-300 border-t border-white/10 w-fit">
                <div className="flex items-center gap-2">
                  <MapPin size={18} weight="regular" className="text-white/60" />
                  <span>Самара, ул. Гагарина, 118</span>
                </div>
                
                <div className="w-px h-5 bg-white/20" />
                
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center text-[10px] font-bold">M</div>
                  <span>3 минуты от м. Советская</span>
                </div>
                
                <div className="w-px h-5 bg-white/20" />
                
                <div className="flex items-center gap-2">
                  <Coffee size={18} weight="regular" className="text-white/60" />
                  <span>Можно со своей едой и напитками</span>
                </div>
                
                <div className="w-px h-5 bg-white/20" />
                
                <div className="flex items-center gap-2">
                  <Star size={18} weight="regular" className="text-white/60" />
                  <span>Рейтинг <strong className="text-white font-bold">4.7</strong></span>
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
