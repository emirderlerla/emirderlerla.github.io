import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PortfolioFilter } from '../data/aureliaListings';

interface HeaderProps {
  onSelectPortfolio: (filter: PortfolioFilter) => void;
  onScrollToSection: (sectionId: string) => void;
  onOpenVipModal: () => void;
}

export function Header({
  onSelectPortfolio,
  onScrollToSection,
  onOpenVipModal,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePortfolioNav = (filter: PortfolioFilter) => {
    setMobileMenuOpen(false);
    onSelectPortfolio(filter);
  };

  const handleSectionNav = (sectionId: string) => {
    setMobileMenuOpen(false);
    onScrollToSection(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F9FA]/85 backdrop-blur-md border-b border-[#E5E7EB]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        <a
          href="#vitrin-baslangic"
          onClick={(e) => {
            e.preventDefault();
            handleSectionNav('vitrin-baslangic');
          }}
          className="text-lg font-bold tracking-[0.2em] text-[#111827] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B48A5A] rounded-sm"
        >
          AURELIA
        </a>

        <nav
          aria-label="Ana menü"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#6B7280]"
        >
          <a
            href="#portfoy"
            onClick={(e) => {
              e.preventDefault();
              handlePortfolioNav('auto');
            }}
            className="hover:text-[#111827] hover:underline underline-offset-4 decoration-[#B48A5A] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B48A5A] rounded-sm"
          >
            Araç Portföyü
          </a>
          <a
            href="#portfoy"
            onClick={(e) => {
              e.preventDefault();
              handlePortfolioNav('realestate');
            }}
            className="hover:text-[#111827] hover:underline underline-offset-4 decoration-[#B48A5A] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B48A5A] rounded-sm"
          >
            Gayrimenkul
          </a>
          <a
            href="#kurumsal"
            onClick={(e) => {
              e.preventDefault();
              handleSectionNav('kurumsal');
            }}
            className="hover:text-[#111827] hover:underline underline-offset-4 decoration-[#B48A5A] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B48A5A] rounded-sm"
          >
            Kurumsal
          </a>
          <a
            href="#iletisim"
            onClick={(e) => {
              e.preventDefault();
              handleSectionNav('iletisim');
            }}
            className="hover:text-[#111827] hover:underline underline-offset-4 decoration-[#B48A5A] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B48A5A] rounded-sm"
          >
            İletişim
          </a>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenVipModal}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 min-h-[40px] text-sm font-medium text-white bg-[#111827] hover:bg-[#1F2937] rounded-xl border border-[#111827] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B48A5A]"
          >
            VIP Danışmanlık
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#111827] hover:bg-white rounded-xl border border-transparent hover:border-[#E5E7EB] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B48A5A]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-white px-6 py-4 space-y-2">
          <a
            href="#portfoy"
            onClick={(e) => {
              e.preventDefault();
              handlePortfolioNav('auto');
            }}
            className="block py-2.5 text-sm font-medium text-[#111827]"
          >
            Araç Portföyü
          </a>
          <a
            href="#portfoy"
            onClick={(e) => {
              e.preventDefault();
              handlePortfolioNav('realestate');
            }}
            className="block py-2.5 text-sm font-medium text-[#111827]"
          >
            Gayrimenkul
          </a>
          <a
            href="#kurumsal"
            onClick={(e) => {
              e.preventDefault();
              handleSectionNav('kurumsal');
            }}
            className="block py-2.5 text-sm font-medium text-[#111827]"
          >
            Kurumsal
          </a>
          <a
            href="#iletisim"
            onClick={(e) => {
              e.preventDefault();
              handleSectionNav('iletisim');
            }}
            className="block py-2.5 text-sm font-medium text-[#111827]"
          >
            İletişim
          </a>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenVipModal();
            }}
            className="w-full mt-2 px-4 py-2.5 min-h-[44px] text-sm font-medium text-white bg-[#111827] hover:bg-[#1F2937] rounded-xl transition-colors duration-150 cursor-pointer"
          >
            VIP Danışmanlık
          </button>
        </div>
      )}
    </header>
  );
}
