import React from 'react';
import { CLUB_INFO } from '../data/mockData';
import { GameController, PhoneCall, EnvelopeSimple, MapPin, ArrowUp } from '@phosphor-icons/react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0c0c0f] border-t border-white/10 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-amber-500 flex items-center justify-center text-white shadow-glow-orange">
                <GameController size={24} weight="bold" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                UNITY
              </span>
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Атмосферное тайм-кафе и социальный клуб в центре Самары. Место для встреч с друзьями, настольных игр, бильярда, кино и ярких праздников.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLUB_INFO.vkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#2787F5]/20 hover:bg-[#2787F5] text-[#519BF7] hover:text-white border border-[#2787F5]/30 flex items-center justify-center text-xs font-bold transition-all"
                aria-label="ВКонтакте"
              >
                VK
              </a>
              <a
                href={CLUB_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-pink-500/20 hover:bg-pink-600 text-pink-400 hover:text-white border border-pink-500/30 flex items-center justify-center text-xs font-bold transition-all"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={CLUB_INFO.yandexMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-amber-400/20 hover:bg-amber-500 text-amber-300 hover:text-black border border-amber-400/30 flex items-center justify-center text-xs font-bold transition-all"
                aria-label="Яндекс Карты"
              >
                ЯК
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Навигация
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#zones" className="hover:text-brand-orange transition-colors">Зоны и развлечения</a></li>
              <li><a href="#pricing" className="hover:text-brand-orange transition-colors">Тарифы и калькулятор</a></li>
              <li><a href="#gallery" className="hover:text-brand-orange transition-colors">Фотогалерея интерьера</a></li>
              <li><a href="#reviews" className="hover:text-brand-orange transition-colors">Отзывы гостей (4.7 ⭐)</a></li>
              <li><a href="#community" className="hover:text-brand-orange transition-colors">Группа ВКонтакте</a></li>
              <li><a href="#location" className="hover:text-brand-orange transition-colors">Как добраться в парк</a></li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Контакты и адрес
            </h4>
            <div className="space-y-2.5 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-brand-orange mt-0.5 flex-shrink-0" />
                <span>г. Самара, ул. Гагарина, 118 (парк «Дружба», ст. м. Советская)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall size={18} className="text-brand-orange flex-shrink-0" />
                <a href={`tel:${CLUB_INFO.phoneRaw}`} className="font-bold text-white hover:text-brand-orange">
                  {CLUB_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <EnvelopeSimple size={18} className="text-brand-orange flex-shrink-0" />
                <span>{CLUB_INFO.email}</span>
              </div>
              <div className="text-xs text-emerald-400 pt-1 font-medium">
                Режим работы: Ежедневно до 04:00 – 06:00
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} UNITY (ЮНИТИ) Самара. Все права защищены.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
          >
            <span>Наверх страницы</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};
