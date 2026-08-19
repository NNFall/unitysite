import React from 'react';
import { ArrowRight, MapPin, Coffee, Star, GameController, FilmStrip, Users } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/motion';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative pt-20 pb-0 overflow-hidden text-left bg-[#0B0E14]">
        {/* True Full-Bleed Right Image Background */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute inset-y-0 right-0 w-full lg:w-[55%] z-0"
        >
          <img
            src="/assets/ref/hero_main_lounge.jpg"
            alt="Интерьер тайм-кафе UNITY Самара"
            className="w-full h-full object-cover"
          />
          {/* Gradient to fade image into the solid dark background on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E14] via-[#0B0E14]/70 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent pointer-events-none" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl min-h-[440px] flex flex-col justify-center py-10 lg:py-16"
          >
            
            <div className="space-y-5">
              
              {/* Overline */}
              <motion.div variants={fadeInUp} className="text-xs font-bold tracking-[0.18em] text-[#FF5500] uppercase">
                UNITY — ТАЙМ-КАФЕ В САМАРЕ
              </motion.div>

              {/* H1 Headline — Massive size */}
              <motion.h1 variants={fadeInUp} className="text-[48px] sm:text-[60px] lg:text-[72px] font-black text-white leading-[1.05] tracking-tight">
                Место для игр,<br />
                кино и встреч<br />
                с друзьями в <span className="text-[#FF5500]">Самаре</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p variants={fadeInUp} className="text-[16px] text-gray-300 leading-relaxed max-w-lg">
                Уютное тайм-кафе в центре парка Дружба, рядом с м. Советская.<br />
                PS5, бильярд, кинозал, настолки и комфортные комнаты для отдыха.<br />
                Можно со своей едой и напитками — без пробкового сбора.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 pb-6">
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
                  <div className="w-6 h-6 flex items-center justify-center text-[12px] font-black text-white flex-shrink-0">
                    VK
                  </div>
                  <span>Перейти во ВКонтакте</span>
                </a>
              </motion.div>

              {/* Value strip — Single row with pipes */}
              <motion.div variants={fadeInUp} className="flex flex-row items-center gap-4 pt-6 text-[14px] text-gray-300 border-t border-white/10 w-fit">
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
              </motion.div>

            </div>
          </motion.div>
        </div>

      {/* Under-Hero 3 Feature Cards — full width, dark, directly below */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-14 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          
          <motion.div variants={fadeInUp} className="p-6 flex items-start gap-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF5500] to-[#FF2200] flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-[#FF5500]/20">
              <GameController size={26} weight="fill" />
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-white tracking-wide">Игры</h3>
              <p className="text-[14px] text-gray-400 mt-1">
                PS5, настолки и приставки
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-6 flex items-start gap-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-cyan-500/20">
              <FilmStrip size={26} weight="fill" />
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-white tracking-wide">Кинозал</h3>
              <p className="text-[14px] text-gray-400 mt-1">
                Большой экран и комфорт
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-6 flex items-start gap-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-amber-500/20">
              <Users size={26} weight="fill" />
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-white tracking-wide">Компаниям</h3>
              <p className="text-[14px] text-gray-400 mt-1">
                Отдыхайте вместе
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
