import { PortfolioFilter } from '../data/aureliaListings';

interface FooterProps {
  onSelectPortfolio: (filter: PortfolioFilter) => void;
  onScrollToSection: (sectionId: string) => void;
  onOpenVipModal: () => void;
}

export function Footer({
  onSelectPortfolio,
  onScrollToSection,
  onOpenVipModal,
}: FooterProps) {
  return (
    <footer id="iletisim" className="bg-white border-t border-[#E5E7EB] py-14">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#E5E7EB]">
          <div className="md:col-span-5 space-y-2.5">
            <div className="text-lg font-bold tracking-[0.2em] text-[#111827]">AURELIA</div>
            <p className="text-xs font-medium text-[#8D673D]">
              AURELIA MOTORS &amp; EMLAK A.Ş.
            </p>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-sm">
              Nispetiye Cad. No: 74, Etiler · İstanbul
              <br />
              Şeyhülislam Ömer Lütfi Cad. No: 18, Yalıkavak · Bodrum
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5 text-sm">
            <div className="text-xs font-semibold text-[#111827] mb-3">Portföy</div>
            <div>
              <a
                href="#portfoy"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectPortfolio('auto');
                }}
                className="text-[#6B7280] hover:text-[#111827] transition-colors"
              >
                Lüks Araç Galerisi
              </a>
            </div>
            <div>
              <a
                href="#portfoy"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectPortfolio('realestate');
                }}
                className="text-[#6B7280] hover:text-[#111827] transition-colors"
              >
                Özel Gayrimenkul Portföyü
              </a>
            </div>
            <div>
              <a
                href="#kurumsal"
                onClick={(e) => {
                  e.preventDefault();
                  onScrollToSection('kurumsal');
                }}
                className="text-[#6B7280] hover:text-[#111827] transition-colors"
              >
                150 Nokta Ekspertiz
              </a>
            </div>
          </div>

          <div className="md:col-span-4 space-y-2.5 text-sm">
            <div className="text-xs font-semibold text-[#111827] mb-3">
              Doğrudan İletişim
            </div>
            <div>
              <a
                href="mailto:concierge@aurelia.com.tr"
                className="text-[#6B7280] hover:text-[#111827] transition-colors"
              >
                concierge@aurelia.com.tr
              </a>
            </div>
            <div className="font-mono tabular-nums text-[#6B7280]">+90 (212) 555 01 90</div>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenVipModal}
                className="text-xs font-semibold text-[#8D673D] hover:text-[#111827] underline underline-offset-4 transition-colors cursor-pointer"
              >
                Özel Gösterim Randevusu Oluştur
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#6B7280]">
          <span>© 2026 AURELIA Motors &amp; Emlak. Tüm hakları saklıdır.</span>
          <span>Pazartesi – Cumartesi · 09:30 – 19:30</span>
        </div>
      </div>
    </footer>
  );
}
