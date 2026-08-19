import React from 'react';
import { CLUB_INFO } from '../data/mockData';
import { MapPin, NavigationArrow, PhoneCall, Clock, ArrowUpRight } from '@phosphor-icons/react';

export const LocationMap: React.FC = () => {
  return (
    <section id="location" className="py-24 relative bg-zinc-950/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          {/* Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
                <MapPin size={14} weight="bold" />
                <span>Локация и контакты</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                КАК ДОБРАТЬСЯ В UNITY
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                Мы находимся в самом сердце парка «Дружба» — тихое, живописное и удобное место в нескольких минутах от метро.
              </p>
            </div>

            <div className="space-y-4">
              
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange flex-shrink-0">
                  <MapPin size={22} weight="bold" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Адрес</div>
                  <div className="text-sm font-bold text-white">{CLUB_INFO.address}</div>
                  <div className="text-xs text-gray-300 mt-0.5">{CLUB_INFO.addressNote}</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Clock size={22} weight="bold" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Время работы</div>
                  <div className="text-sm font-bold text-white">{CLUB_INFO.workingHours}</div>
                  <div className="text-xs text-emerald-400 mt-0.5">Вход без предварительной записи всегда открыт</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <PhoneCall size={22} weight="bold" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Телефон для бронирования</div>
                  <a href={`tel:${CLUB_INFO.phoneRaw}`} className="text-base font-bold text-white hover:text-brand-orange transition-colors">
                    {CLUB_INFO.phone}
                  </a>
                </div>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={CLUB_INFO.yandexMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-sm shadow-glow-orange hover:brightness-110 transition-all"
              >
                <NavigationArrow size={18} weight="bold" />
                <span>Построить маршрут на Яндекс.Картах</span>
              </a>

              <a
                href={CLUB_INFO.vkMessagesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2787F5]/15 hover:bg-[#2787F5]/25 border border-[#2787F5]/40 text-[#519BF7] font-semibold text-sm transition-all"
              >
                <span>Написать в VK</span>
                <ArrowUpRight size={16} weight="bold" />
              </a>
            </div>

          </div>

          {/* Interactive Map Embed / Visual Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-3 border border-white/10 overflow-hidden relative">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900">
                
                {/* Embedded Interactive Map iframe */}
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=50.218803%2C53.203706&z=16&pt=50.218693%2C53.203295,pm2rdm"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen={true}
                  className="w-full h-full filter invert-[90%] hue-rotate-180 contrast-[85%]"
                  title="Карта расположения UNITY Самара"
                ></iframe>

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 p-3 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 text-left max-w-xs pointer-events-none">
                  <div className="text-brand-orange font-bold text-xs flex items-center gap-1.5">
                    <MapPin size={16} weight="fill" />
                    <span>UNITY в парке Дружба</span>
                  </div>
                  <div className="text-[11px] text-gray-300 mt-1">
                    ул. Гагарина, 118 (в 3 минутах пешком от метро «Советская»)
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
