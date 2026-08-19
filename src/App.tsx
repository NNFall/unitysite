import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesBento } from './components/FeaturesBento';
import { FreePerks } from './components/FreePerks';
import { PricingCalculator } from './components/PricingCalculator';
import { GallerySection } from './components/GallerySection';
import { VkFeedSection } from './components/VkFeedSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationMap } from './components/LocationMap';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedZoneForBooking, setSelectedZoneForBooking] = useState<string | undefined>(undefined);

  const handleOpenBooking = (zone?: string) => {
    setSelectedZoneForBooking(zone);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedZoneForBooking(undefined);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-gray-100 flex flex-col selection:bg-[#ff6b00] selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Landing Sections */}
      <main className="flex-grow">
        {/* Screen 1: Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Screen 2: Spaces & Zones Bento */}
        <FeaturesBento onSelectZone={(zone) => handleOpenBooking(zone)} />

        {/* Screen 3: Key Perks (0₽ No Corkage Fee, Free Tea & Coffee) */}
        <FreePerks />

        {/* Screen 4: Pricing & Interactive Calculator */}
        <PricingCalculator onOpenBooking={() => handleOpenBooking()} />

        {/* Screen 5: Real Photo Gallery with Lightbox */}
        <GallerySection />

        {/* Screen 6: VK Community Social Proof & Feed */}
        <VkFeedSection />

        {/* Screen 6.5: Yandex Maps 4.7 Reviews */}
        <ReviewsSection />

        {/* Screen 7: Location in Park Druzhba & Map */}
        <LocationMap />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialZone={selectedZoneForBooking}
      />
    </div>
  );
};

export default App;
