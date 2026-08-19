import React, { useState } from 'react';
import { ZONES_DATA } from '../data/mockData';
import { 
  GameController, 
  Sparkle, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Crown,
  FilmStrip,
  Trophy,
  DiceSix
} from '@phosphor-icons/react';

interface FeaturesBentoProps {
  onSelectZone: (zoneTitle: string) => void;
}

export const FeaturesBento: React.FC<FeaturesBentoProps> = ({ onSelectZone }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Все 6 зон' },
    { id: 'gaming', label: 'PlayStation' },
    { id: 'table', label: 'Настолки & Бильярд' },
    { id: 'lounge', label: 'VIP & Кинозал' },
  ];

  const filteredZones = ZONES_DATA.filter((zone) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'gaming') return zone.id.includes('ps5');
    if (activeCategory === 'table') return zone.id.includes('billiards') || zone.id.includes('board') || zone.id.includes('tennis');
    if (activeCategory === 'lounge') return zone.id.includes('cinema') || zone.id.includes('vip');
    return true;
  });

  const getZoneIcon = (id: string) => {
    switch (id) {
      case 'ps5-zones':
        return <GameController size={20} className="text-brand-orange" weight="bold" />;
      case 'billiards':
        return <Trophy size={20} className="text-amber-400" weight="bold" />;
      case 'table-tennis':
        return <Sparkle size={20} className="text-emerald-400" weight="bold" />;
      case 'board-games':
        return <DiceSix size={20} className="text-cyan-400" weight="bold" />;
      case 'cinema-hall':
        return <FilmStrip size={20} className="text-purple-400" weight="bold" />;
      case 'vip-lounge':
        return <Crown size={20} className="text-yellow-400" weight="bold" />;
      default:
        return <Sparkle size={20} className="text-brand-orange" weight="bold" />;
    }
  };

  return (
    <section id="zones" className="py-24 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkle size={14} weight="fill" />
              <span>Пространство отдыха</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              6 ИГРОВЫХ ЛОКАЦИЙ В UNITY
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-2xl">
              Каждая зона продумана до мелочей: профессиональное оборудование, качественная акустика, комфортные диваны и атмосфера уюта.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white shadow-glow-orange'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredZones.map((zone) => (
            <div
              key={zone.id}
              className="glass-panel rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:border-brand-orange/40 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Background Subtle Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl group-hover:bg-brand-orange/15 transition-all"></div>

              <div>
                {/* Photo Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-900 mb-5">
                  <img
                    src={zone.image}
                    alt={zone.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Badge */}
                  {zone.badge && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/15 text-amber-300 text-[11px] font-bold">
                      {zone.badge}
                    </div>
                  )}

                  {/* Price Pill */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/15 text-white font-mono text-xs font-bold">
                    {zone.price}
                  </div>

                  {/* Capacity Pill */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-gray-200 text-xs">
                    <Users size={14} className="text-brand-orange" />
                    <span>{zone.capacity}</span>
                  </div>
                </div>

                {/* Title & Category */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                    {getZoneIcon(zone.id)}
                  </div>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wide">
                    {zone.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors">
                  {zone.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                  {zone.description}
                </p>

                {/* Features List */}
                <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                  {zone.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" weight="bold" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Action Button */}
              <div className="pt-6 mt-6 border-t border-white/5">
                <button
                  onClick={() => onSelectZone(zone.title)}
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-brand-orange hover:to-amber-500 text-white font-semibold text-xs border border-white/10 hover:border-transparent hover:shadow-glow-orange transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Забронировать эту зону</span>
                  <ArrowRight size={14} weight="bold" className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
