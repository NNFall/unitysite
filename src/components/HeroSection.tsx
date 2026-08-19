import React from 'react';
import React from 'react';
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
          <motion.div variants={fadeInUp} className="p-6 sm:p-8 flex items-start gap-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-[50px] rounded-full group-hover:bg-orange-500/40 transition-colors" />
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-rose-600 opacity-80 font-display">
              01
            </div>
            <div className="z-10 relative mt-1">
              <h3 className="text-[20px] font-black text-white tracking-wide font-display">Игры & PS5</h3>
              <p className="text-[14px] text-gray-400 mt-2 leading-relaxed">
                Последние эксклюзивы и сотни настолок для любых компаний.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-6 sm:p-8 flex items-start gap-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-[50px] rounded-full group-hover:bg-cyan-500/40 transition-colors" />
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-600 opacity-80 font-display">
              02
            </div>
            <div className="z-10 relative mt-1">
              <h3 className="text-[20px] font-black text-white tracking-wide font-display">Кинозал</h3>
              <p className="text-[14px] text-gray-400 mt-2 leading-relaxed">
                Огромный экран, 4K проектор и погружающий объёмный звук.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-6 sm:p-8 flex items-start gap-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full group-hover:bg-purple-500/40 transition-colors" />
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-pink-600 opacity-80 font-display">
              03
            </div>
            <div className="z-10 relative mt-1">
              <h3 className="text-[20px] font-black text-white tracking-wide font-display">VIP Зоны</h3>
              <p className="text-[14px] text-gray-400 mt-2 leading-relaxed">
                Закрытые комнаты для дней рождений и шумных тусовок.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
