import React, { useState } from 'react';
import { CLUB_INFO } from '../data/mockData';
import { X, CheckCircle, ArrowRight, PhoneCall } from '@phosphor-icons/react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialZone?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialZone }) => {
  const [selectedZone, setSelectedZone] = useState<string>(initialZone || 'Любая свободная зона');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('18:00');
  const [guests, setGuests] = useState<string>('2–4 человека');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleOpenVkChat = () => {
    const text = encodeURIComponent(`Здравствуйте! Хочу забронировать место в UNITY: ${selectedZone}, на ${date || 'ближайшее время'}, гостей: ${guests}. Имя: ${name || 'Гость'}, телефон: ${phone}`);
    window.open(`https://vk.me/unitysmr?ref=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="glass-panel w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-white/15 relative my-8 animate-in fade-in zoom-in-95 text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
          aria-label="Закрыть"
        >
          <X size={20} />
        </button>

        {!isSuccess ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono text-brand-orange uppercase font-bold tracking-wider">
                Бронирование места
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1">
                Забронировать отдых в UNITY
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Выберите зону и удобный способ подтверждения: через форму, VK чат или звонок
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Zone Selector */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Зона или формат:
                </label>
                <select
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:border-brand-orange outline-none"
                >
                  <option value="Любая свободная зона">Любая свободная зона / Безлимит</option>
                  <option value="Зона PlayStation 5">Зона PlayStation 5</option>
                  <option value="Бильярдный стол">Бильярдный стол</option>
                  <option value="Стол для 200+ Настольных игр">Стол для 200+ Настольных игр</option>
                  <option value="Кинозал с проектором">Кинозал с проектором</option>
                  <option value="VIP-комната">VIP-комната (приватная)</option>
                  <option value="Настольный теннис">Настольный теннис</option>
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Ваше имя:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Александр"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:border-brand-orange outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Номер телефона:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:border-brand-orange outline-none"
                  />
                </div>
              </div>

              {/* Date, Time & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Дата:
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:border-brand-orange outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Время:
                  </label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:border-brand-orange outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Гостей:
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:border-brand-orange outline-none"
                  >
                    <option value="1–2 человека">1–2 человека</option>
                    <option value="3–5 человек">3–5 человек</option>
                    <option value="6–10 человек">6–10 человек</option>
                    <option value="10+ человек">10+ человек (праздник)</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 space-y-2.5">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-sm shadow-glow-orange hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <span>Забронировать сейчас</span>
                  <ArrowRight size={16} weight="bold" />
                </button>

                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-white/10"></div>
                  <span className="flex-shrink mx-3 text-[11px] text-gray-400">или мгновенно через соцсети</span>
                  <div className="flex-grow border-t border-white/10"></div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={handleOpenVkChat}
                    className="py-2.5 rounded-xl bg-[#2787F5] hover:bg-[#2075d8] text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>Написать в VK</span>
                  </button>

                  <a
                    href={`tel:${CLUB_INFO.phoneRaw}`}
                    className="py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all border border-white/10"
                  >
                    <PhoneCall size={14} />
                    <span>Позвонить</span>
                  </a>
                </div>
              </div>

            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle size={36} weight="fill" />
            </div>
            <h3 className="text-2xl font-bold text-white">Заявка принята!</h3>
            <p className="text-sm text-gray-300 max-w-sm mx-auto">
              Спасибо, {name || 'Гость'}! Администратор UNITY свяжется с вами по номеру <strong className="text-white">{phone}</strong> в течение 5–10 минут для подтверждения брони.
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-all"
            >
              Закрыть окно
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
