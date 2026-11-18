import { ArrowRight } from 'lucide-react';
import { PortfolioFilter } from '../data/aureliaListings';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onSelectCategory: (filter: PortfolioFilter) => void;
  onOpenVipModal: () => void;
}

export function Hero({ onSelectCategory, onOpenVipModal }: HeroProps) {
  return (
    <section
      id="vitrin-baslangic"
      className="pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#E5E7EB]"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="text-sm font-medium text-[#8D673D] mb-4">
                AURELIA Motors &amp; Gayrimenkul Danışmanlığı
              </p>

              <h1
                className="font-bold tracking-tight text-[#111827] leading-[1.08] mb-6"
                style={{
                  fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                  textWrap: 'balance',
                }}
              >
                Seçkin Otomobiller. Prestijli Yaşam Alanları.
              </h1>

              <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-[52ch] mb-8">
                Ekspertiz garantili koleksiyonluk spor otomobiller ile Boğaz, Bodrum ve
                Çeşme’deki mimari gayrimenkulleri tek çatı altında, şeffaf devir ve özel
                finansman süreçleriyle sunuyoruz.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectCategory('all')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] text-sm font-semibold text-white bg-[#111827] hover:bg-[#1F2937] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B48A5A]"
                >
                  <span>Tüm Vitrini Keşfet</span>
                  <ArrowRight className="w-4 h-4 text-[#B48A5A]" />
                </button>

                <button
                  type="button"
                  onClick={onOpenVipModal}
                  className="inline-flex items-center justify-center px-5 py-3 min-h-[44px] text-sm font-medium text-[#111827] bg-white hover:bg-[#F8F9FA] border border-[#E5E7EB] hover:border-[#B48A5A] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B48A5A]"
                >
                  Özel Randevu Oluştur
                </button>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#E5E7EB] flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#6B7280]">
              <span>Etiler Showroom</span>
              <span aria-hidden="true">·</span>
              <span>Yalıkavak Ofisi</span>
              <span aria-hidden="true">·</span>
              <span>150 Nokta Ekspertiz ve Tam Tapu Güvencesi</span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <button
              type="button"
              onClick={() => onSelectCategory('auto')}
              className="group text-left bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#B48A5A] shadow-xs hover:shadow-md transition-all duration-150 hover:-translate-y-0.5 overflow-hidden flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B48A5A]"
            >
              <div className="aspect-4/3 w-full overflow-hidden bg-[#F8F9FA] border-b border-[#E5E7EB]">
                <ResilientImage
                  src="/src/assets/images/car_porsche_gts_1795022576373.jpg"
                  alt="Lüks Araç Galerisi — 2024 Porsche 911 Carrera GTS"
                  fallbackLabel="Lüks Araç Galerisi"
                  className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-xs font-medium text-[#8D673D] mb-1">
                    01 · 3 Seçkin Araç
                  </div>
                  <h2 className="text-lg font-semibold text-[#111827] tracking-tight mb-1.5">
                    Lüks Araç Galerisi
                  </h2>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    Düşük kilometreli, yetkili bayi çıkışlı spor otomobil ve SUV portföyü.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-semibold text-[#111827]">
                  <span>Galeriyi Filtrele</span>
                  <ArrowRight className="w-4 h-4 text-[#B48A5A] transition-transform duration-150 group-hover:translate-x-0.5" />
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => onSelectCategory('realestate')}
              className="group text-left bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#B48A5A] shadow-xs hover:shadow-md transition-all duration-150 hover:-translate-y-0.5 overflow-hidden flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B48A5A]"
            >
              <div className="aspect-4/3 w-full overflow-hidden bg-[#F8F9FA] border-b border-[#E5E7EB]">
                <ResilientImage
                  src="/src/assets/images/prop_bodrum_villa_1795022577651.jpg"
                  alt="Özel Gayrimenkul Portföyü — Bodrum Yalıkavak Müstakil Villa"
                  fallbackLabel="Özel Gayrimenkul Portföyü"
                  className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-xs font-medium text-[#8D673D] mb-1">
                    02 · 3 Prestijli Mülk
                  </div>
                  <h2 className="text-lg font-semibold text-[#111827] tracking-tight mb-1.5">
                    Özel Gayrimenkul Portföyü
                  </h2>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    Boğaz manzaralı penthouse, müstakil villa ve denize sıfır rezidanslar.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-semibold text-[#111827]">
                  <span>Mülkleri Filtrele</span>
                  <ArrowRight className="w-4 h-4 text-[#B48A5A] transition-transform duration-150 group-hover:translate-x-0.5" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
