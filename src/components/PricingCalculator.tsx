import React, { useState } from 'react';
import { TARIFFS } from '../data/mockData';
import { 
  CurrencyRub, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Clock, 
  Calculator,
  Flame
} from '@phosphor-icons/react';

interface PricingCalculatorProps {
  onOpenBooking: (tariffOrNote?: string) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onOpenBooking }) => {
  const [guestsCount, setGuestsCount] = useState<number>(3);
  const [hoursCount, setHoursCount] = useState<number>(3);
  const [isWeekend, setIsWeekend] = useState<boolean>(false);
  const [selectedFormat, setSelectedFormat] = useState<'general' | 'vip' | 'cinema'>('general');

  // Calculation Logic
  // General:
  // - Weekdays: 550₽ unlimited per person, OR 600₽/hour for the table/zone (up to 4-6 pax)
  // - Weekend: 250₽/hr per person or ~750₽ unlimited
  // VIP: 600₽/hour flat rate for the room
  // Cinema: 1000₽/hour flat rate for the hall

  const calculateTotal = () => {
    if (selectedFormat === 'vip') {
      const roomCost = 600 * hoursCount;
      return {
        total: roomCost,
        perPerson: Math.round(roomCost / Math.max(1, guestsCount)),
        type: 'flat',
        label: 'Фиксированная аренда VIP-комнаты',
        isBestDeal: false,
      };
    }

    if (selectedFormat === 'cinema') {
      const cinemaCost = 1000 * hoursCount;
      return {
        total: cinemaCost,
        perPerson: Math.round(cinemaCost / Math.max(1, guestsCount)),
        type: 'flat',
        label: 'Эксклюзивная аренда Кинозала',
        isBestDeal: false,
      };
    }

    // General Zone
    if (!isWeekend) {
      // Weekday
      const unlimitedCostPerPerson = 550;
      const totalUnlimited = unlimitedCostPerPerson * guestsCount;
      const hourlyZoneCost = 600 * hoursCount;

      if (hoursCount >= 3) {
        return {
          total: totalUnlimited,
          perPerson: unlimitedCostPerPerson,
          type: 'unlimited',
          label: 'Тариф «Безлимит Будни» (выгоднее всего)',
          isBestDeal: true,
          savings: Math.max(0, hourlyZoneCost - totalUnlimited),
        };
      } else {
        const hourlyTotal = Math.min(hourlyZoneCost, totalUnlimited);
        return {
          total: hourlyTotal,
          perPerson: Math.round(hourlyTotal / guestsCount),
          type: 'hourly',
          label: `Почасовая мягкая зона (${hoursCount} ч)`,
          isBestDeal: false,
        };
      }
    } else {
      // Weekend / Fri evening
      const hourlyTotal = 600 * hoursCount;
      return {
        total: hourlyTotal,
        perPerson: Math.round(hourlyTotal / guestsCount),
        type: 'hourly',
        label: `Выходной тариф (${hoursCount} ч)`,
        isBestDeal: false,
      };
    }
  };

  const calculation = calculateTotal();

  const handleBookCalculation = () => {
    const formatName = selectedFormat === 'vip' ? 'VIP-комната' : selectedFormat === 'cinema' ? 'Кинозал' : 'Мягкая зона / Безлимит';
    const note = `${formatName}: ${guestsCount} чел, ${hoursCount} ч, расчет: ${calculation.total} ₽`;
    onOpenBooking(note);
  };

  return (
    <section id="pricing" className="py-24 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-orange/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
            <CurrencyRub size={14} weight="bold" />
            <span>Прозрачные цены & Калькулятор</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            ТАРИФЫ И ОНЛАЙН-РАСЧЕТ
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            Без скрытых доплат. Чай, зерновой кофе, печенье, настолки и приставки уже входят в стоимость.
          </p>
        </div>

        {/* 4 Tariff Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-16">
          {TARIFFS.map((tariff) => (
            <div
              key={tariff.id}
              className={`glass-panel rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 relative group hover:-translate-y-1 ${
                tariff.highlight
                  ? 'border-brand-orange shadow-glow-orange bg-gradient-to-b from-brand-orange/10 via-[#121216] to-[#121216]'
                  : 'border-white/10 hover:border-brand-orange/30'
              }`}
            >
              {tariff.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-[11px] shadow-lg flex items-center gap-1">
                  <Flame size={14} weight="fill" />
                  <span>Самый популярный</span>
                </div>
              )}

              <div>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                  Тариф
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  {tariff.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-400 to-amber-200">
                    {tariff.price}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{tariff.period}</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {tariff.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  {tariff.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" weight="bold" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5">
                <button
                  onClick={() => onOpenBooking(tariff.name)}
                  className={`w-full py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    tariff.highlight
                      ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white shadow-glow-orange hover:brightness-110'
                      : 'bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white border border-white/10'
                  }`}
                >
                  <span>Выбрать этот тариф</span>
                  <ArrowRight size={14} weight="bold" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Calculator Box */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 max-w-4xl mx-auto text-left relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange">
              <Calculator size={24} weight="bold" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Интерактивный калькулятор стоимости
              </h3>
              <p className="text-xs text-gray-400">
                Рассчитайте точную сумму для вашей компании за пару секунд
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Day Selector */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">
                  День недели:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setIsWeekend(false)}
                    className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                      !isWeekend
                        ? 'bg-brand-orange text-white shadow-glow-orange'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    Понедельник — Четверг (Безлимит 550₽)
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsWeekend(true)}
                    className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                      isWeekend
                        ? 'bg-brand-orange text-white shadow-glow-orange'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    Пятница — Воскресенье
                  </button>
                </div>
              </div>

              {/* Space Format */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">
                  Формат отдыха:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'general', label: 'Мягкая зона / Зал' },
                    { id: 'vip', label: 'VIP-комната' },
                    { id: 'cinema', label: 'Кинозал' },
                  ].map((fmt) => (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => setSelectedFormat(fmt.id as any)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                        selectedFormat === fmt.id
                          ? 'bg-amber-500 text-white shadow-glow-amber'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {fmt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guests Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                    <Users size={16} className="text-brand-orange" />
                    <span>Количество человек:</span>
                  </span>
                  <span className="text-sm font-bold text-amber-400 font-mono">
                    {guestsCount} {guestsCount === 1 ? 'гость' : guestsCount < 5 ? 'гостя' : 'гостей'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                  <span>1 гость</span>
                  <span>5 гостей</span>
                  <span>10 гостей</span>
                  <span>15 гостей</span>
                </div>
              </div>

              {/* Hours Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                    <Clock size={16} className="text-brand-orange" />
                    <span>Время пребывания:</span>
                  </span>
                  <span className="text-sm font-bold text-amber-400 font-mono">
                    {hoursCount} {hoursCount === 1 ? 'час' : hoursCount < 5 ? 'часа' : 'часов'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={hoursCount}
                  onChange={(e) => setHoursCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                  <span>1 час</span>
                  <span>3 часа</span>
                  <span>5 часов</span>
                  <span>8+ часов</span>
                </div>
              </div>

            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-5 bg-[#17171d] rounded-2xl p-6 border border-white/10 flex flex-col justify-between h-full text-center sm:text-left">
              <div>
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                  Итоговый расчет
                </span>
                
                <div className="mt-2 mb-1 text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-400 to-amber-200 font-mono">
                  {calculation.total.toLocaleString()} ₽
                </div>

                <div className="text-xs text-gray-400">
                  ≈ <strong className="text-white font-mono">{calculation.perPerson} ₽</strong> на одного гостя
                </div>

                <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300">
                  <div className="font-semibold text-amber-300 mb-1">{calculation.label}</div>
                  <div className="text-[11px] text-gray-400">
                    Включено: чай, кофе, приставки, настолки, пинг-понг, бильярд, 0₽ за свою еду
                  </div>
                </div>
              </div>

              <button
                onClick={handleBookCalculation}
                className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-sm shadow-glow-orange hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <span>Забронировать расчет</span>
                <ArrowRight size={16} weight="bold" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
