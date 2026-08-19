import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ZonesSection } from './components/ZonesSection';
import { EventsSection } from './components/EventsSection';
import { ContactsSection } from './components/ContactsSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedZone, setSelectedZone] = useState<string | undefined>(undefined);

  const handleOpenBooking = (zone?: string) => {
    setSelectedZone(zone);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedZone(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0B0E14] text-[#F1F5F9] flex flex-col selection:bg-[#FF5500] selection:text-white">
      {/* 1. Sticky Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content: Exact 4 Reference Screens */}
      <main className="flex-grow">
        {/* Screen 1: Hero (ChatGPT Image 3) */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* Screen 2: Formats & Zones (ChatGPT Image 4) */}
        <ZonesSection onSelectZone={(zone) => handleOpenBooking(zone)} />

        {/* Screen 3: Events & Atmosphere (ChatGPT Image 1) */}
        <EventsSection onOpenBooking={() => handleOpenBooking()} />

        {/* Screen 4: Contacts, Map & FAQ (ChatGPT Image 2) */}
        <ContactsSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Interactive Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialZone={selectedZone}
      />
    </div>
  );
};

export default App;
