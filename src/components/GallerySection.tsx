import React, { useState, useEffect, useCallback } from 'react';
import { 
  Images, 
  X, 
  CaretLeft, 
  CaretRight, 
  MagnifyingGlassPlus
} from '@phosphor-icons/react';

interface PhotoItem {
  id: number;
  src: string;
  title: string;
  category: string;
  tag: string;
}

const GALLERY_ITEMS: PhotoItem[] = [
  { id: 1, src: '/assets/photo_2.jpg', title: 'Фирменная входная группа и стойка ресепшн', category: 'interior', tag: 'Интерьер' },
  { id: 2, src: '/assets/photo_15.jpg', title: 'Лаунж-зона с PlayStation 5 и мягкими диванами', category: 'gaming', tag: 'PS5 Зона' },
  { id: 3, src: '/assets/photo_10.jpg', title: 'Бильярдный зал — русский бильярд и американский пул', category: 'games', tag: 'Бильярд' },
  { id: 4, src: '/assets/photo_17.jpg', title: 'Огромная коллекция 200+ настольных игр', category: 'games', tag: 'Настолки' },
  { id: 5, src: '/assets/photo_12.jpg', title: 'Уютный кинозал с большим проектором', category: 'vip', tag: 'Кинозал' },
  { id: 6, src: '/assets/photo_16.jpg', title: 'Приватная VIP-комната для праздников и компаний', category: 'vip', tag: 'VIP' },
  { id: 7, src: '/assets/photo_7.jpg', title: 'Стол для настольного тенниса (пинг-понг)', category: 'games', tag: 'Спорт' },
  { id: 8, src: '/assets/photo_9.jpg', title: 'Приглушенный вечерний свет и неоновая атмосфера', category: 'interior', tag: 'Атмосфера' },
  { id: 9, src: '/assets/photo_3.jpg', title: 'Игровой зал и зоны для больших компаний', category: 'interior', tag: 'Залы' },
  { id: 10, src: '/assets/photo_4.jpg', title: 'Комфортные посадочные места у экранов', category: 'gaming', tag: 'Гейминг' },
  { id: 11, src: '/assets/photo_14.jpg', title: 'Турнирные уголки и вечерние посиделки', category: 'games', tag: 'Настолки' },
  { id: 12, src: '/assets/photo_11.jpg', title: 'Детали интерьера и зоны отдыха', category: 'interior', tag: 'Интерьер' },
];

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'Все фотографии' },
    { id: 'gaming', label: 'PlayStation 5' },
    { id: 'games', label: 'Бильярд, Теннис & Настолки' },
    { id: 'vip', label: 'VIP & Кинозал' },
    { id: 'interior', label: 'Интерьер' },
  ];

  const filteredPhotos = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
  }, [lightboxIndex, filteredPhotos.length]);

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
  }, [lightboxIndex, filteredPhotos.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showPrev, showNext]);

  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
              <Images size={14} weight="bold" />
              <span>Реальные фотографии клуба</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              ФОТОГАЛЕРЕЯ UNITY
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Почувствуйте атмосферу уюта, драйва и отдыха еще до первого визита
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white shadow-glow-orange'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 text-left">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 group cursor-pointer hover:border-brand-orange/40 transition-all duration-300 hover:-translate-y-1 relative"
            >
              <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                {/* Hover Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/90 text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <MagnifyingGlassPlus size={22} weight="bold" />
                  </div>
                </div>

                {/* Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-amber-300 text-[10px] font-mono font-semibold">
                  {photo.tag}
                </div>

                {/* Caption */}
                <div className="absolute bottom-3 left-3 right-3 text-xs font-medium text-gray-200 line-clamp-2">
                  {photo.title}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-in fade-in"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between z-10" onClick={(e) => e.stopPropagation()}>
            <div className="text-left">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                {filteredPhotos[lightboxIndex].tag}
              </span>
              <h4 className="text-white font-bold text-sm sm:text-base">
                {filteredPhotos[lightboxIndex].title}
              </h4>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-gray-400">
                {lightboxIndex + 1} / {filteredPhotos.length}
              </span>
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Закрыть фото"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Main Image Stage */}
          <div 
            className="relative flex-grow flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={showPrev}
              className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/15 transition-all hover:scale-110"
              aria-label="Предыдущее фото"
            >
              <CaretLeft size={24} weight="bold" />
            </button>

            {/* Current Photo */}
            <img
              src={filteredPhotos[lightboxIndex].src}
              alt={filteredPhotos[lightboxIndex].title}
              className="max-h-[75vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200"
            />

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/15 transition-all hover:scale-110"
              aria-label="Следующее фото"
            >
              <CaretRight size={24} weight="bold" />
            </button>
          </div>

          {/* Bottom Caption & Hint */}
          <div className="text-center text-xs text-gray-500 font-mono" onClick={(e) => e.stopPropagation()}>
            Используйте стрелки ← / → на клавиатуре или смахивание
          </div>
        </div>
      )}
    </section>
  );
};
