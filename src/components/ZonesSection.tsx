import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/motion';

interface ZonesSectionProps {
  onSelectZone: (zoneName: string) => void;
}

export const ZonesSection: React.FC<ZonesSectionProps> = ({ onSelectZone }) => {
  const zones = [
    {
      id: 'billiards',
      name: 'Игровая зона',
      desc: 'Бильярд, PlayStation 5, настолки и приставки для компании.',
      img: '/assets/ref/zone_billiards.jpg',
    },
    {
      id: 'cinema',
      name: 'Кинозал',
      desc: 'Большой экран, объёмный звук и комфортные диваны.',
      img: '/assets/ref/zone_cinema.jpg',
    },
    {
      id: 'lounge',
      name: 'Лаунж и комнаты',
      desc: 'Уютные зоны и отдельные комнаты для общения и отдыха.',
      img: '/assets/ref/zone_lounge.jpg',
    },
    {
      id: 'boardgames',
      name: 'Настольные игры',
      desc: 'Более 200 игр на любой вкус — от классики до новинок.',
      img: '/assets/ref/zone_boardgames.jpg',
    },
  ];

  return (
    <section id="zones" className="py-20 relative bg-[#090C10] border-t border-white/5 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Reference */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16">
          <div className="flex-shrink-0">
            <div className="text-xs sm:text-sm font-bold tracking-[0.15em] text-[#FF5500] uppercase mb-3">
              ФОРМАТЫ ОТДЫХА
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white leading-[1.1]">
              Выберите свой <br />
              <span className="text-[#FF5500]">формат отдыха</span>
            </h2>
          </div>

          <div className="hidden md:block w-px h-24 bg-white/10 mx-6"></div>

          <p className="text-sm sm:text-base text-gray-400 max-w-lg leading-relaxed">
            В UNITY каждый найдёт своё. Играйте, смотрите кино, отдыхайте с друзьями или уединитесь в отдельной комнате. Выбирайте формат — остальное мы уже продумали.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {zones.map((zone, index) => {
            return (
              <motion.div
                variants={fadeInUp}
                key={zone.id}
                onClick={() => onSelectZone(zone.name)}
                className="ref-card overflow-hidden cursor-pointer group flex flex-col justify-between rounded-2xl relative"
              >
                {/* Image takes full background in premium style */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={zone.img}
                    alt={zone.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-[#121824]/80 to-transparent" />
                </div>

                <div className="relative z-10 p-6 h-full flex flex-col justify-end pt-32">
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4 opacity-70 group-hover:from-orange-400 group-hover:to-rose-600 transition-all font-display">
                    0{index + 1}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF5500] transition-colors font-display">
                    {zone.name}
                  </h3>
                  
                  <p className="text-sm text-gray-300 leading-relaxed min-h-[40px]">
                    {zone.desc}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[#FF5500] font-bold text-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    Подробнее →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Value Bar under Cards */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-[#121824]/90 border border-white/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          
          <div className="flex items-center gap-4 p-2">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 flex-shrink-0 font-display font-black">
              1
            </div>
            <div>
              <div className="font-bold text-white text-[13px] mb-0.5">Без пробкового сбора</div>
              <div className="text-gray-400 text-[11px]">Своя еда и напитки — можно всё</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center text-amber-400 flex-shrink-0 font-display font-black">
              2
            </div>
            <div>
              <div className="font-bold text-white text-[13px] mb-0.5">Своя еда и напитки</div>
              <div className="text-gray-400 text-[11px]">Приносите с собой без ограничений</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-600/20 flex items-center justify-center text-blue-400 flex-shrink-0 font-display font-black">
              3
            </div>
            <div>
              <div className="font-bold text-white text-[13px] mb-0.5">Рядом с метро</div>
              <div className="text-gray-400 text-[11px]">3 минуты от м. Советская</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-600/20 flex items-center justify-center text-emerald-400 flex-shrink-0 font-display font-black">
              4
            </div>
            <div>
              <div className="font-bold text-white text-[13px] mb-0.5">Уютная атмосфера</div>
              <div className="text-gray-400 text-[11px]">Комфорт, чистота и порядок</div>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 flex justify-center">
          <button
            onClick={() => onSelectZone('Любая свободная зона')}
            className="btn-primary w-[380px] max-w-full py-4 text-[15px] font-bold flex items-center justify-center gap-2 shadow-glow-orange rounded-xl"
          >
            <span>Смотреть все зоны</span>
          </button>
        </div>

      </div>
    </section>
  );
};
