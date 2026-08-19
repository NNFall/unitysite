import React from 'react';
import { CLUB_INFO } from '../data/mockData';
import { 
  GameController, 
  Sparkle, 
  MapPin, 
  Clock, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Users
} from '@phosphor-icons/react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[100dvh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-brand-orange/20 to-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-semibold tracking-wide uppercase">
                <Sparkle size={14} weight="fill" />
                <span>Тайм-кафе & Игровой клуб в парке Дружба</span>
              </div>

              <a
                href={CLUB_INFO.yandexMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-amber-400/40 text-amber-300 text-xs font-medium transition-all"
              >
                <Star size={14} weight="fill" className="text-amber-400" />
                <span className="font-bold text-white">4.7</span>
                <span className="text-gray-400">(476+ оценок на Яндекс.Картах)</span>
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tighter text-white leading-[1.08]">
              ТВОЯ ТЕРРИТОРИЯ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-400 to-amber-200">
                ИГР И ОТДЫХА
              </span> В САМАРЕ
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed">
              Отдельные зоны с <span className="text-white font-medium">PlayStation 5</span>, русский и американский <span className="text-white font-medium">бильярд</span>, <span className="text-white font-medium">настольный теннис</span>, <span className="text-white font-medium">200+ настолок</span> и кинозал. 
              <br className="hidden sm:inline" />
              <strong className="text-brand-orange font-semibold">Без «пробки»</strong> — приноси любую еду и напитки с собой!
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-orange via-amber-500 to-amber-600 text-white font-bold text-base shadow-glow-orange hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Забронировать место</span>
                <ArrowRight size={18} weight="bold" />
              </button>

              <a
                href={CLUB_INFO.vkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#2787F5]/15 hover:bg-[#2787F5]/25 border border-[#2787F5]/40 text-[#519BF7] font-semibold text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Группа ВКонтакте</span>
                <ArrowRight size={16} weight="bold" />
              </a>
            </div>

            {/* Key Value Points */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-orange">
                  <ShieldCheck size={20} weight="bold" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Своя еда</div>
                  <div className="text-sm font-bold text-white">0 ₽ Без пробки</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-amber-400">
                  <Clock size={20} weight="bold" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Режим работы</div>
                  <div className="text-sm font-bold text-white">до 06:00 утра</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400">
                  <MapPin size={20} weight="bold" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Парк Дружба</div>
                  <div className="text-sm font-bold text-white">м. Советская</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Bento Preview Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Interactive Preview Card */}
            <div className="glass-panel rounded-3xl p-4 sm:p-6 border border-white/10 relative overflow-hidden group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-900">
                <img
                  src="/assets/photo_2.jpg"
                  alt="UNITY Lounge Interior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Floating Price Pill */}
                <div className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-white font-mono text-xs font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                  <span>от 550 ₽ / безлим</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="px-2.5 py-1 rounded-md bg-brand-orange/90 text-white text-[11px] font-bold uppercase tracking-wider">
                    Вход в парк Дружба
                  </span>
                  <h3 className="text-white font-bold text-lg mt-1.5">
                    Уютная атмосфера & 6 игровых локаций
                  </h3>
                </div>
              </div>

              {/* Sub cards */}
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-left">
                  <div className="text-brand-orange font-bold text-base flex items-center gap-1">
                    <GameController size={18} />
                    <span>PS5 & PS4 Pro</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">FIFA 24, UFC 5, MK 1</div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-left">
                  <div className="text-amber-400 font-bold text-base flex items-center gap-1">
                    <Users size={18} />
                    <span>200+ Настолок</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">Для любой компании</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
