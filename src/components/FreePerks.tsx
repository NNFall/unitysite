import React from 'react';
import { 
  Sparkle, 
  Coffee, 
  WifiHigh, 
  Clock, 
  ShieldCheck,
  Pizza
} from '@phosphor-icons/react';

export const FreePerks: React.FC = () => {
  const perks = [
    {
      id: 'corkage',
      title: '0 ₽ Пробковый сбор',
      subtitle: 'Абсолютная свобода',
      description: 'Приносите любимую еду, заказывайте доставку пиццы, роллов или бургеров, берите свои напитки. Никаких доплат и скрытых чеков.',
      icon: <Pizza size={32} weight="duotone" className="text-brand-orange" />,
      tag: '0 ₽ Без доплат',
      accentColor: 'from-brand-orange/20 via-brand-orange/5 to-transparent',
      borderColor: 'group-hover:border-brand-orange/40',
      badgeColor: 'bg-brand-orange/15 text-brand-orange border-brand-orange/30',
    },
    {
      id: 'coffee-tea',
      title: 'Бесплатный чай & зерновой кофе',
      subtitle: 'Неограниченно для каждого',
      description: 'Большой выбор листового и пакетированного чая разных сортов, натуральный зерновой кофе, печенье и сладкие угощения включены в визит.',
      icon: <Coffee size={32} weight="duotone" className="text-amber-400" />,
      tag: 'All-inclusive',
      accentColor: 'from-amber-500/20 via-amber-500/5 to-transparent',
      borderColor: 'group-hover:border-amber-400/40',
      badgeColor: 'bg-amber-400/15 text-amber-300 border-amber-400/30',
    },
    {
      id: 'fast-wifi',
      title: 'Wi-Fi 500 Мбит/с & Розетки',
      subtitle: 'Для игр, работы и стримов',
      description: 'Высокоскоростная гигабитная сеть, мощный сигнал в каждом уголке клуба, розетки 220V и Type-C зарядки у каждого игрового дивана.',
      icon: <WifiHigh size={32} weight="duotone" className="text-cyan-400" />,
      tag: '500 Мбит/с',
      accentColor: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
      borderColor: 'group-hover:border-cyan-400/40',
      badgeColor: 'bg-cyan-400/15 text-cyan-300 border-cyan-400/30',
    },
    {
      id: 'night-hours',
      title: 'Работаем ежедневно до 06:00',
      subtitle: 'Для ночных марафонов',
      description: 'Удобный график для тех, кто любит вечерний отдых и ночные игровые сессии. Открыты 7 дней в неделю без праздников и выходных.',
      icon: <Clock size={32} weight="duotone" className="text-purple-400" />,
      tag: 'До 06:00 утра',
      accentColor: 'from-purple-500/20 via-purple-500/5 to-transparent',
      borderColor: 'group-hover:border-purple-400/40',
      badgeColor: 'bg-purple-400/15 text-purple-300 border-purple-400/30',
    },
  ];

  return (
    <section className="py-20 relative bg-zinc-950/40 border-y border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck size={14} weight="fill" />
            <span>Всё включено в каждый визит</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            БЕСПЛАТНЫЕ ПРЕИМУЩЕСТВА UNITY
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            Никаких скрытых платежей, звездочек и неожиданных счетов. Всё для вашего максимального комфорта и беззаботного отдыха.
          </p>
        </div>

        {/* 4 Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {perks.map((perk) => (
            <div
              key={perk.id}
              className={`glass-panel rounded-3xl p-6 border border-white/10 ${perk.borderColor} transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between`}
            >
              {/* Top gradient glow inside card */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${perk.accentColor} pointer-events-none`}></div>

              <div className="relative z-10">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {perk.icon}
                  </div>
                  <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg border ${perk.badgeColor}`}>
                    {perk.tag}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block mb-1">
                  {perk.subtitle}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-brand-orange transition-colors">
                  {perk.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
                  {perk.description}
                </p>
              </div>

              {/* Bottom decorative subtle indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-emerald-400 text-[11px] font-medium relative z-10">
                <Sparkle size={12} weight="fill" />
                <span>Включено в любой тариф</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
