import React from 'react';
import { CLUB_INFO, REVIEWS_DATA } from '../data/mockData';
import { Star, ArrowUpRight, ThumbsUp, ShieldCheck } from '@phosphor-icons/react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Yandex Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Star size={14} weight="fill" className="text-amber-400" />
              <span>Оценки реальных гостей</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              РЕЙТИНГ 4.7 НА ЯНДЕКС.КАРТАХ
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Более 476 оценок и 166 подробных отзывов от жителей и гостей Самары
            </p>
          </div>

          {/* Stats Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Атмосфера', pct: '90%' },
              { label: 'Настолки', pct: '91%' },
              { label: 'Персонал', pct: '87%' },
              { label: 'Напитки', pct: '83%' },
            ].map((stat, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/5 text-center">
                <div className="text-xl font-bold font-mono text-amber-400">{stat.pct}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="glass-panel rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:border-amber-400/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} weight="fill" />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-400">{rev.date}</span>
                </div>

                <h3 className="text-sm font-bold text-white mb-1">{rev.author}</h3>
                <span className="inline-block text-[10px] font-mono text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-md mb-3">
                  {rev.category}
                </span>

                <p className="text-xs text-gray-300 leading-relaxed line-clamp-5">
                  «{rev.text}»
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck size={14} weight="bold" />
                  <span>Реальный отзыв</span>
                </span>
                {rev.likes && (
                  <span className="flex items-center gap-1">
                    <ThumbsUp size={12} />
                    <span>{rev.likes}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Read All Link */}
        <div className="text-center mt-10">
          <a
            href={CLUB_INFO.yandexMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 hover:underline"
          >
            <span>Посмотреть все 166 отзывов на Яндекс.Картах</span>
            <ArrowUpRight size={16} weight="bold" />
          </a>
        </div>

      </div>
    </section>
  );
};
