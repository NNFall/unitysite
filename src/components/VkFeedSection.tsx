import React from 'react';
import { CLUB_INFO, VK_POSTS } from '../data/mockData';
import { ArrowUpRight, Heart, ShareNetwork, ChatCircleDots } from '@phosphor-icons/react';

export const VkFeedSection: React.FC = () => {
  return (
    <section id="community" className="py-24 relative bg-zinc-950/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2787F5]/15 border border-[#2787F5]/30 text-[#519BF7] text-xs font-semibold uppercase tracking-wider mb-3">
              <ChatCircleDots size={14} weight="bold" />
              <span>Сообщество ВКонтакте</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              МЫ ВКОНТАКТЕ — 3.6K ГОСТЕЙ
            </h2>
          </div>

          <a
            href={CLUB_INFO.vkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#2787F5] hover:bg-[#2075d8] text-white font-bold text-sm shadow-lg transition-all hover:scale-105"
          >
            <span>Перейти в группу ВКонтакте</span>
            <ArrowUpRight size={18} weight="bold" />
          </a>
        </div>

        {/* VK Posts Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {VK_POSTS.map((post) => (
            <div
              key={post.id}
              className="glass-panel rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:border-[#2787F5]/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#2787F5] text-white font-bold text-xs flex items-center justify-center">
                      VK
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">UNITY Самара</div>
                      <div className="text-[11px] text-gray-400">{post.date}</div>
                    </div>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 text-amber-400 font-mono">
                    #{post.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed line-clamp-4">
                  {post.text}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-rose-400">
                    <Heart size={14} weight="fill" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <ShareNetwork size={14} />
                    <span>{post.reposts}</span>
                  </span>
                </div>

                <a
                  href={CLUB_INFO.vkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#519BF7] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Читать в VK</span>
                  <ArrowUpRight size={12} weight="bold" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
