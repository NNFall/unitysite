import React, { useState } from 'react';
import { Trophy, FilmStrip, Users, ArrowRight, CaretLeft, CaretRight, Star, Armchair, Quotes } from '@phosphor-icons/react';

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

          {/* Right 3 Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* Card 1: Турниры */}
            <div
              onClick={onOpenBooking}
              className="ref-card p-4 sm:p-5 flex items-center justify-between gap-4 group cursor-pointer hover:border-[#FF5500]/40 transition-all flex-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/15 flex items-center justify-center text-[#FF5500] flex-shrink-0">
                  <Trophy size={24} weight="fill" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#FF5500] transition-colors">
                    Турниры
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed line-clamp-2">
                    Игровые турниры по PS5, бильярду и настолкам с призами и рейтингами.
                  </p>
                  <ArrowRight size={16} className="text-[#FF5500] mt-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="w-24 h-18 rounded-xl overflow-hidden bg-zinc-900 flex-shrink-0 hidden sm:block">
                <img src="/assets/ref/event_tournaments.jpg" alt="Турниры" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Card 2: Киновечера */}
            <div
              onClick={onOpenBooking}
              className="ref-card p-4 sm:p-5 flex items-center justify-between gap-4 group cursor-pointer hover:border-[#FF5500]/40 transition-all flex-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <FilmStrip size={24} weight="fill" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#FF5500] transition-colors">
                    Киновечера
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed line-clamp-2">
                    Большой экран, объёмный звук и уютная атмосфера для отличного кино.
                  </p>
                  <ArrowRight size={16} className="text-[#FF5500] mt-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="w-24 h-18 rounded-xl overflow-hidden bg-zinc-900 flex-shrink-0 hidden sm:block">
                <img src="/assets/ref/event_movies.jpg" alt="Киновечера" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Card 3: Встречи с друзьями */}
            <div
              onClick={onOpenBooking}
              className="ref-card p-4 sm:p-5 flex items-center justify-between gap-4 group cursor-pointer hover:border-[#FF5500]/40 transition-all flex-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Users size={24} weight="fill" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#FF5500] transition-colors">
                    Встречи с друзьями
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed line-clamp-2">
                    Бильярд, настолки, PS5 и отличная компания — всё для вашего вечера.
                  </p>
                  <ArrowRight size={16} className="text-[#FF5500] mt-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="w-24 h-18 rounded-xl overflow-hidden bg-zinc-900 flex-shrink-0 hidden sm:block">
                <img src="/assets/ref/event_friends.jpg" alt="Встречи с друзьями" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Row: 3 Social Proof Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          
          {/* Card 1: Что говорят гости */}
          <div className="ref-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-bold text-white">Что говорят гости</h4>
                <div className="flex items-center gap-1 text-gray-400">
                  <button className="p-1 rounded-md hover:bg-white/10" aria-label="Назад"><CaretLeft size={16} /></button>
                  <button className="p-1 rounded-md hover:bg-white/10" aria-label="Вперед"><CaretRight size={16} /></button>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Quotes size={24} weight="fill" className="text-[#FF5500] flex-shrink-0 mt-0.5" />
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
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Background Phone Mockup Graphic */}
            <div className="absolute right-0 bottom-0 w-28 h-32 pointer-events-none opacity-90">
              <img src="/assets/ref/vk_phone_mockup.png" alt="VK Phone" className="w-full h-full object-contain object-bottom-right" />
            </div>
          </div>

          {/* Card 3: Статистика доверия */}
          <div className="ref-card p-6 flex items-center justify-between divide-x divide-white/10 text-center">
            
            <div className="px-2 flex-1">
              <div className="text-2xl font-black text-white flex items-center justify-center gap-1">
                <Star size={20} weight="fill" className="text-[#FF5500]" />
                <span>4.7</span>
              </div>
              <div className="text-[11px] text-gray-400 mt-1">Рейтинг на Яндекс</div>
            </div>

            <div className="px-2 flex-1">
              <div className="flex justify-center text-[#FF5500] mb-1">
                <Armchair size={24} weight="fill" />
              </div>
              <div className="text-[11px] text-gray-400">Уютная атмосфера</div>
            </div>

            <div className="px-2 flex-1">
              <div className="flex justify-center text-[#FF5500] mb-1">
                <Users size={24} weight="fill" />
              </div>
              <div className="text-[11px] text-gray-400">Для компаний и праздников</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
