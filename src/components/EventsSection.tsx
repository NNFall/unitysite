import React, { useState } from 'react';
import { motion } from 'framer-motion';
interface EventsSectionProps {
  onOpenBooking: () => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onOpenBooking }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section id="events" className="py-20 relative bg-[#0B0E14] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs sm:text-sm font-bold tracking-widest text-[#FF5500] uppercase mb-2">
            UNITY — СОБЫТИЯ И АТМОСФЕРА
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            События <br />
            <span className="text-[#FF5500]">и атмосфера</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-3 leading-relaxed">
            Каждый день у нас что-то происходит: турниры, киновечера, дни рождения и тёплые встречи. Идеальное место, чтобы провести время так, как хочется именно вам.
          </p>
        </div>

        {/* Main Grid: Left Big Featured Card + Right 3 Stacked Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Featured Card (Дни рождения и праздники) */}
          <div className="lg:col-span-7 ref-card overflow-hidden relative flex flex-col justify-between group min-h-[440px]">
            <div className="absolute inset-0 bg-zinc-900">
              <img
                src="/assets/ref/event_birthday.jpg"
                alt="Дни рождения и праздники в UNITY"
                className="w-full h-full object-cover object-right scale-[1.25] group-hover:scale-[1.3] transition-transform duration-700 origin-right"
              />
              <div className="absolute inset-0 bg-[#121824]/60 sm:bg-gradient-to-t sm:from-[#121824] sm:via-[#121824]/80 sm:to-black/40" />
            </div>

            {/* Slider Arrow Controls */}
            <button
              onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : 3))}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center z-20 hover:bg-black/80 transition-colors"
              aria-label="Назад"
            >
              <CaretLeft size={18} />
            </button>
            <button
              onClick={() => setActiveSlide((prev) => (prev < 3 ? prev + 1 : 0))}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center z-20 hover:bg-black/80 transition-colors"
              aria-label="Вперед"
            >
              <CaretRight size={18} />
            </button>

            {/* Top Badge */}
            <div className="relative p-6 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-bold text-[11px] uppercase tracking-wider">
                ★ ПОПУЛЯРНОЕ
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative p-6 sm:p-8 z-10 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Дни рождения <br />и праздники
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-md leading-relaxed">
                От камерных вечеринок до масштабных праздников — поможем сделать ваш день особенным.
              </p>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={onOpenBooking}
                  className="btn-secondary px-5 py-2.5 text-xs sm:text-sm font-bold flex items-center gap-2"
                >
                  <span>Узнать больше</span>
                  <ArrowRight size={16} />
                </button>

                {/* Slider Dots */}
                <div className="flex items-center gap-2">
                  {[0, 1, 2, 3].map((idx) => (
                    <span
                      key={idx}
                      className={`rounded-full transition-all ${activeSlide === idx ? 'w-2.5 h-2.5 bg-[#FF5500]' : 'w-2 h-2 bg-white/20'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right 3 Stacked Cards (Journal Style) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* Card 1: Турниры */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              onClick={onOpenBooking}
              className="relative overflow-hidden rounded-2xl flex-1 group cursor-pointer"
            >
              <div className="absolute inset-0 bg-zinc-900">
                <img src="/assets/ref/event_tournaments.jpg" alt="Турниры" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#121824] via-[#121824]/80 to-transparent" />
              </div>
              <div className="relative p-5 sm:p-6 h-full flex flex-col justify-center z-10 border border-white/5 rounded-2xl group-hover:border-[#FF5500]/40 transition-colors">
                <h4 className="text-xl font-bold text-white group-hover:text-[#FF5500] transition-colors">
                  Турниры
                </h4>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed max-w-[80%]">
                  Игровые батлы по PS5 и бильярду с призами.
                </p>
                <div className="mt-4 flex items-center text-[#FF5500] text-sm font-bold gap-2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  Участвовать →
                </div>
              </div>
            </motion.div>

            {/* Card 2: Киновечера */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              onClick={onOpenBooking}
              className="relative overflow-hidden rounded-2xl flex-1 group cursor-pointer"
            >
              <div className="absolute inset-0 bg-zinc-900">
                <img src="/assets/ref/event_movies.jpg" alt="Киновечера" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#121824] via-[#121824]/80 to-transparent" />
              </div>
              <div className="relative p-5 sm:p-6 h-full flex flex-col justify-center z-10 border border-white/5 rounded-2xl group-hover:border-[#FF5500]/40 transition-colors">
                <h4 className="text-xl font-bold text-white group-hover:text-[#FF5500] transition-colors">
                  Киновечера
                </h4>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed max-w-[80%]">
                  Большой экран, объёмный звук и уютная атмосфера.
                </p>
                <div className="mt-4 flex items-center text-[#FF5500] text-sm font-bold gap-2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  Смотреть афишу →
                </div>
              </div>
            </motion.div>

            {/* Card 3: Встречи с друзьями */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              onClick={onOpenBooking}
              className="relative overflow-hidden rounded-2xl flex-1 group cursor-pointer"
            >
              <div className="absolute inset-0 bg-zinc-900">
                <img src="/assets/ref/event_friends.jpg" alt="Встречи с друзьями" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#121824] via-[#121824]/80 to-transparent" />
              </div>
              <div className="relative p-5 sm:p-6 h-full flex flex-col justify-center z-10 border border-white/5 rounded-2xl group-hover:border-[#FF5500]/40 transition-colors">
                <h4 className="text-xl font-bold text-white group-hover:text-[#FF5500] transition-colors">
                  Встречи с друзьями
                </h4>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed max-w-[80%]">
                  Отличная компания, настолки и PS5.
                </p>
                <div className="mt-4 flex items-center text-[#FF5500] text-sm font-bold gap-2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  Забронировать стол →
                </div>
              </div>
            </motion.div>

          </div>

        </div>

          {/* Bottom Row: 3 Social Proof Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          
          {/* Card 1: Что говорят гости */}
          <div className="ref-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-bold text-white">Что говорят гости</h4>
                <div className="flex items-center gap-1 text-gray-400 font-bold">
                  <button className="p-1 rounded-md hover:text-white" aria-label="Назад">‹</button>
                  <button className="p-1 rounded-md hover:text-white" aria-label="Вперед">›</button>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="text-3xl text-[#FF5500] leading-none font-black font-display mt-[-4px]">"</div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Отмечали день рождения — всё было на высшем уровне! Уютно, чисто, атмосфера супер, персонал топ. Обязательно вернёмся!
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 mt-4 border-t border-white/10">
              <img
                src="/assets/ref/avatar_anastasia.jpg"
                alt="Анастасия"
                className="w-9 h-9 rounded-full object-cover border border-white/15"
              />
              <div>
                <div className="text-xs font-bold text-white">Анастасия, Самара</div>
                <div className="flex items-center gap-1 text-[#FF5500] text-[11px]">
                  <span>★ ★ ★ ★ ★</span>
                  <span className="text-gray-300 font-bold ml-1">5,0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Мы ВКонтакте */}
          <div className="ref-card p-6 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-7 h-7 rounded-lg bg-[#2787F5] flex items-center justify-center text-white text-xs font-bold">
                  VK
                </div>
                <h4 className="text-base font-bold text-white">Мы ВКонтакте</h4>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed max-w-[200px]">
                Анонсы мероприятий, фотоотчёты, отзывы и акции — в нашем сообществе.
              </p>
            </div>

            <div className="pt-4 z-10">
              <a
                href="https://vk.com/unitysmr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-4 py-2.5 text-xs font-bold inline-flex items-center gap-2"
              >
                <span>Перейти в сообщество</span>
                →
              </a>
            </div>

            {/* Background Phone Mockup Graphic */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 -bottom-8 w-36 h-44 pointer-events-none opacity-100 z-0"
            >
              <img src="/assets/ref/vk_phone_mockup.png" alt="VK Phone" className="w-full h-full object-contain object-bottom-right drop-shadow-2xl" />
            </motion.div>
          </div>

          {/* Card 3: Статистика доверия */}
          <div className="ref-card p-6 flex items-center justify-between divide-x divide-white/10 text-center">
            
            <div className="px-2 flex-1">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-600 mb-1 font-display">
                4.7
              </div>
              <div className="text-[11px] text-gray-400 font-bold">Рейтинг Яндекс</div>
            </div>

            <div className="px-2 flex-1">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-1 font-display">
                200+
              </div>
              <div className="text-[11px] text-gray-400 font-bold">Настольных игр</div>
            </div>

            <div className="px-2 flex-1">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-1 font-display">
                0₽
              </div>
              <div className="text-[11px] text-gray-400 font-bold">Пробковый сбор</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
