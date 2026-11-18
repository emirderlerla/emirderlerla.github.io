import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { TrustStrip } from './components/TrustStrip';
import { Footer } from './components/Footer';
import { ListingDetailModal } from './components/ListingDetailModal';
import { VipConciergeModal } from './components/VipConciergeModal';
import { AureliaListing, PortfolioFilter } from './data/aureliaListings';

export default function App() {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedListing, setSelectedListing] = useState<AureliaListing | null>(null);
  const [vipModalOpen, setVipModalOpen] = useState(false);
  const [vipSubject, setVipSubject] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectPortfolio = (filter: PortfolioFilter) => {
    setActiveFilter(filter);
    scrollToSection('portfoy');
  };

  const handleOpenVipModal = (subject: string | null = null) => {
    setVipSubject(subject);
    setVipModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#111827]">
      <Header
        onSelectPortfolio={handleSelectPortfolio}
        onScrollToSection={scrollToSection}
        onOpenVipModal={() => handleOpenVipModal(null)}
      />

      <main className="flex-1">
        <Hero
          onSelectCategory={handleSelectPortfolio}
          onOpenVipModal={() => handleOpenVipModal(null)}
        />

        <PortfolioShowcase
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectListing={setSelectedListing}
        />

        <TrustStrip />
      </main>

      <Footer
        onSelectPortfolio={handleSelectPortfolio}
        onScrollToSection={scrollToSection}
        onOpenVipModal={() => handleOpenVipModal(null)}
      />

      <button
        type="button"
        onClick={() => handleOpenVipModal(null)}
        aria-label="WhatsApp Hattı ile VIP Danışmanlık"
        className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] text-xs font-semibold text-white bg-[#111827] hover:bg-[#1F2937] rounded-full border border-[#B48A5A]/60 shadow-lg transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B48A5A]"
      >
        <MessageCircle className="w-4 h-4 text-[#B48A5A] shrink-0" />
        <span>WhatsApp Hattı</span>
      </button>

      <ListingDetailModal
        listing={selectedListing}
        onClose={() => setSelectedListing(null)}
        onRequestAppointment={(title) => handleOpenVipModal(title)}
      />

      <VipConciergeModal
        isOpen={vipModalOpen}
        initialSubject={vipSubject}
        onClose={() => setVipModalOpen(false)}
      />
    </div>
  );
}
