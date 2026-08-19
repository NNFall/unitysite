import React, { useState } from 'react';
import { MapPin, Train, NavigationArrow, Clock, Phone, CaretDown, CaretUp, ArrowRight } from '@phosphor-icons/react';

interface ContactsSectionProps {
  onOpenBooking: () => void;
}

export const ContactsSection: React.FC<ContactsSectionProps> = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Можно ли со своей едой и напитками?',
      a: 'Да! Вы можете заказывать любую доставку еды (пиццу, роллы, бургеры) или приносить всё с собой совершенно свободно.',
    },
    {
      q: 'Есть ли пробковый сбор?',
      a: 'Пробкового сбора нет (0 ₽). Никаких дополнительных доплат за принесенную еду или напитки.',
    },
    {
      q: 'Как забронировать стол?',
      a: 'Вы можете забронировать место через кнопку на сайте, по телефону +7 (987) 950-00-18 или написав в сообщения группы ВКонтакте.',
    },
    {
      q: 'Сколько стоит время в тайм-кафе?',
      a: 'Безлимитный тариф в будние дни (Пн-Чт) стоит всего 550 ₽ на весь день. Почасовая аренда мягких зон — от 600 ₽/час.',
    },
  ];

  return (
    <section id="contacts" className="py-16 relative bg-[#090C10] border-t border-white/5 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Overline above everything */}
        <div className="text-xs font-bold tracking-[0.18em] text-[#FF5500] uppercase mb-3">
          UNITY — КОНТАКТЫ
        </div>

        {/* Top 3 Columns: Left=Header+Contacts, Middle=Map, Right=Facade — exactly as in reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
          
          {/* Col 1: Title + Contacts List (4 cols) — no card border, just plain list */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            
            {/* Title inline with this column — matches reference where title is top-left */}
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white leading-[1.06]">
                Как нас найти<br />
                <span className="text-[#FF5500]">и забронировать</span>
              </h2>
            </div>

            {/* Contacts list — no card, plain icon + text */}
            <div className="flex flex-col gap-5 flex-grow">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#FF5500]/15 flex items-center justify-center text-[#FF5500] flex-shrink-0 mt-0.5">
                  <MapPin size={18} weight="fill" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400">Адрес</div>
                  <div className="text-[15px] font-bold text-white">Самара, ул. Гагарина, 118</div>
                </div>
              </div>

              {/* Metro */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                  <Train size={18} weight="fill" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400">Ближайшее метро</div>
                  <div className="text-[15px] font-bold text-white">м. Советская — 3 минуты пешком</div>
                </div>
              </div>

              {/* How to get */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400 flex-shrink-0 mt-0.5">
                  <NavigationArrow size={18} weight="fill" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400">Как добраться</div>
                  <div className="text-[13px] text-gray-300 leading-relaxed">Легко добраться на метро, автобусе<br />или автомобиле. Рядом есть парковка.</div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                  <Clock size={18} weight="fill" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400">Часы работы</div>
                  <div className="text-[15px] font-bold text-white">Ежедневно с 12:00 до 06:00</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                  <Phone size={18} weight="fill" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400">Телефон</div>
                  <a href="tel:+79879500018" className="text-[15px] font-bold text-white hover:text-[#FF5500] transition-colors">
                    +7 (987) 950-00-18
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Col 2: Map Card (4 cols) */}
          <div className="lg:col-span-4 ref-card overflow-hidden group">
            <img
              src="/assets/ref/map_park_druzhba.jpg"
              alt="Карта парка Дружба Самара"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 min-h-[300px]"
            />
          </div>

          {/* Col 3: Facade Photo (4 cols) */}
          <div className="lg:col-span-4 ref-card overflow-hidden relative group">
            <img
              src="/assets/ref/facade_night_neon.jpg"
              alt="Вход в UNITY Самара ночью"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[300px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/60 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>

        {/* Bottom Row: FAQ + Booking Callout Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* FAQ Accordion (6 cols) */}
          <div className="lg:col-span-6 space-y-3">
            <h3 className="text-lg font-bold text-white mb-4">Часто задаваемые вопросы</h3>
            
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="ref-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-gray-200 hover:text-white"
                  >
                    <span>{item.q}</span>
                    {isOpen ? <CaretUp size={16} className="text-[#FF5500]" /> : <CaretDown size={16} className="text-gray-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-gray-400 leading-relaxed border-t border-white/5 pt-2">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Booking Callout Card — matches reference: large U neon on the right */}
          <div className="lg:col-span-6 ref-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-[#FF5500]/40 shadow-[0_0_40px_rgba(255,85,0,0.2)]">
            
            <div className="relative z-10 max-w-[55%]">
              <h3 className="text-2xl sm:text-[26px] font-black text-white mb-2 leading-tight">
                Забронируйте<br />стол заранее
              </h3>
              <p className="text-[13px] text-gray-300 leading-relaxed">
                Мы поможем подобрать удобное время и зону для вашей компании.
              </p>
            </div>

            {/* Large Glowing Neon 'U' Symbol — single div with borders, properly curved */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:block">
              <div className="w-28 h-36 border-l-[5px] border-r-[5px] border-b-[5px] border-t-0 border-[#FF5500] rounded-b-[50px] shadow-[0_0_30px_8px_rgba(255,85,0,0.6),inset_0_0_20px_rgba(255,85,0,0.15)]" />
            </div>

            <div className="space-y-3 pt-6 relative z-10">
              <button
                onClick={onOpenBooking}
                className="btn-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 shadow-glow-orange cursor-pointer"
              >
                <span>Забронировать стол</span>
                <ArrowRight size={16} weight="bold" />
              </button>

              <a
                href="https://vk.me/unitysmr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full py-3.5 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
              >
                <div className="w-4 h-4 rounded-full bg-[#2787F5] flex items-center justify-center text-[9px] font-black text-white">
                  VK
                </div>
                <span>Написать во ВКонтакте</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
