import React from 'react';
import { GameController, Television, Armchair, DiceFive, ArrowRight, HourglassMedium, Coffee, Star } from '@phosphor-icons/react';

interface ZonesSectionProps {
  onSelectZone: (zoneName: string) => void;
}

export const ZonesSection: React.FC<ZonesSectionProps> = ({ onSelectZone }) => {
  const zones = [
    {
      id: 'billiards',
      name: 'Игровая зона',
      icon: GameController,
      desc: 'Бильярд, PlayStation 5, настолки и приставки для компании.',
      img: '/assets/ref/zone_billiards.jpg',
    },
    {
      id: 'cinema',
      name: 'Кинозал',
      icon: Television,
      desc: 'Большой экран, объёмный звук и комфортные диваны.',
      img: '/assets/ref/zone_cinema.jpg',
    },
    {
      id: 'lounge',
      name: 'Лаунж и комнаты',
      icon: Armchair,
      desc: 'Уютные зоны и отдельные комнаты для общения и отдыха.',
      img: '/assets/ref/zone_lounge.jpg',
    },
    {
      id: 'boardgames',
      name: 'Настольные игры',
      icon: DiceFive,
      desc: 'Более 200 игр на любой вкус — от классики до новинок.',
      img: '/assets/ref/zone_boardgames.jpg',
    },
  ];

  return (
    <section id="zones" className="py-20 relative bg-[#090C10] border-t border-white/5 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs sm:text-sm font-bold tracking-widest text-[#FF5500] uppercase mb-2">
              ФОРМАТЫ ОТДЫХА
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Выберите свой <br />
              <span className="text-[#FF5500]">формат отдыха</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-400 max-w-md leading-relaxed">
            В UNITY каждый найдёт своё. Играйте, смотрите кино, отдыхайте с друзьями или уединитесь в отдельной комнате. Выбирайте формат — остальное мы уже продумали.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {zones.map((zone) => {
            const Icon = zone.icon;
            return (
              <div
                key={zone.id}
                onClick={() => onSelectZone(zone.name)}
                className="ref-card overflow-hidden cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                    <img
                      src={zone.img}
                      alt={zone.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <Icon size={20} weight="fill" className="text-[#FF5500]" />
                        <h3 className="text-[16px] font-bold text-white group-hover:text-[#FF5500] transition-colors">
                          {zone.name}
                        </h3>
                      </div>
                      <ArrowRight size={16} className="text-gray-400 group-hover:text-[#FF5500] transform group-hover:translate-x-1 transition-all" />
                    </div>

                    <p className="text-[13px] text-gray-400 leading-relaxed">
                      {zone.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Bar under Cards (4 items matching reference) */}
        <div className="mt-10 p-4 sm:p-6 rounded-2xl bg-[#121824]/80 border border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-cyan-500/15 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <HourglassMedium size={20} weight="fill" />
            </div>
            <div>
              <div className="font-bold text-white">Без пробкового сбора</div>
              <div className="text-gray-400 text-[11px]">Своя еда и напитки — можно всё</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-400 flex-shrink-0">
              <Coffee size={20} weight="fill" />
            </div>
            <div>
              <div className="font-bold text-white">Своя еда и напитки</div>
              <div className="text-gray-400 text-[11px]">Приносите с собой без ограничений</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-blue-500/15 flex items-center justify-center text-blue-400 flex-shrink-0">
              <span className="font-bold text-xs">М</span>
            </div>
            <div>
              <div className="font-bold text-white">Рядом с метро</div>
              <div className="text-gray-400 text-[11px]">3 минуты от м. Советская</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <Star size={20} weight="fill" />
            </div>
            <div>
              <div className="font-bold text-white">Уютная атмосфера</div>
              <div className="text-gray-400 text-[11px]">Комфорт, чистота и порядок</div>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => onSelectZone('Любая свободная зона')}
            className="btn-primary px-8 py-3.5 text-sm font-bold inline-flex items-center gap-2 shadow-glow-orange"
          >
            <span>Смотреть все зоны</span>
            <ArrowRight size={16} weight="bold" />
          </button>
        </div>

      </div>
    </section>
  );
};
