import { ArrowUpRight, Search, X } from 'lucide-react';
import {
  AURELIA_LISTINGS,
  AureliaListing,
  PortfolioFilter,
} from '../data/aureliaListings';
import { ResilientImage } from './ResilientImage';

interface PortfolioShowcaseProps {
  activeFilter: PortfolioFilter;
  onFilterChange: (filter: PortfolioFilter) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectListing: (listing: AureliaListing) => void;
}

const FILTER_TABS: { id: PortfolioFilter; label: string }[] = [
  { id: 'all', label: 'Tüm Vitrin' },
  { id: 'auto', label: 'Oto Galeri' },
  { id: 'realestate', label: 'Emlak & Gayrimenkul' },
];

export function PortfolioShowcase({
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  onSelectListing,
}: PortfolioShowcaseProps) {
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase('tr-TR');

  const filteredListings = AURELIA_LISTINGS.filter((item) => {
    const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
    if (!matchesCategory) return false;

    if (!normalizedQuery) return true;

    const searchableText = [
      item.title,
      item.subtitle,
      item.location,
      item.categoryLabel,
      ...item.keyMeta,
    ]
      .join(' ')
      .toLocaleLowerCase('tr-TR');

    return searchableText.includes(normalizedQuery);
  });

  return (
    <section id="portfoy" className="py-16 lg:py-24 border-b border-[#E5E7EB]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-[#8D673D] mb-2">Güncel Seçki</p>
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827]"
              style={{ textWrap: 'balance' }}
            >
              Doğrulanmış portföyümüzden özel araçlar ve seçkin mülkler.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div
              role="tablist"
              aria-label="Portföy filtresi"
              className="inline-flex items-center gap-1 p-1 bg-white rounded-full border border-[#E5E7EB] shadow-2xs self-start sm:self-auto"
            >
              {FILTER_TABS.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => onFilterChange(tab.id)}
                    className={`px-4 py-2 min-h-[36px] text-xs font-semibold rounded-full transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#B48A5A] ${
                      isActive
                        ? 'bg-[#111827] text-white'
                        : 'text-[#6B7280] hover:text-[#111827]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="relative min-w-[240px]">
              <Search
                aria-hidden="true"
                className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Marka, model veya konum ara..."
                aria-label="Marka, model veya konum ara"
                className="w-full pl-10 pr-9 py-2.5 min-h-[42px] text-sm bg-white text-[#111827] placeholder:text-[#6B7280] rounded-full border border-[#E5E7EB] focus:outline-none focus:border-[#B48A5A] focus:ring-2 focus:ring-[#B48A5A]/20 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Aramayı temizle"
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 inline-flex items-center justify-center rounded-full text-[#6B7280] hover:text-[#111827] hover:bg-[#F8F9FA] cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {filteredListings.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-12 text-center space-y-4">
            <h3 className="text-lg font-semibold text-[#111827]">
              Aradığınız kriterlere uygun ilan bulunamadı.
            </h3>
            <p className="text-sm text-[#6B7280] max-w-md mx-auto">
              Farklı bir marka, model veya konum arayabilir ya da tüm vitrini yeniden
              görüntüleyebilirsiniz.
            </p>
            <button
              type="button"
              onClick={() => {
                onFilterChange('all');
                onSearchChange('');
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 min-h-[40px] text-sm font-medium text-white bg-[#111827] hover:bg-[#1F2937] rounded-xl transition-colors cursor-pointer"
            >
              Tüm Vitrini Göster
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing) => (
              <article
                key={listing.id}
                onClick={() => onSelectListing(listing)}
                className="group bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#B48A5A] shadow-2xs hover:shadow-md transition-all duration-150 hover:-translate-y-0.5 overflow-hidden flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="aspect-4/3 w-full overflow-hidden bg-[#F8F9FA] border-b border-[#E5E7EB]">
                    <ResilientImage
                      src={listing.imageUrl}
                      alt={listing.imageAlt}
                      fallbackLabel={listing.title}
                      className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-medium text-[#8D673D] mb-2">
                      {listing.categoryLabel}
                    </div>

                    <h3 className="text-lg font-semibold text-[#111827] tracking-tight mb-1.5">
                      {listing.title}
                    </h3>

                    <p className="text-xs text-[#6B7280] mb-4">{listing.subtitle}</p>

                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#6B7280] pt-3 border-t border-[#E5E7EB]">
                      {listing.keyMeta.map((meta, index) => (
                        <span key={meta} className="inline-flex items-center gap-2">
                          {index > 0 && <span aria-hidden="true">·</span>}
                          <span className="tabular-nums text-[#111827] font-medium">
                            {meta}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between gap-4">
                  <div className="font-mono tabular-nums text-base font-semibold text-[#111827]">
                    {listing.priceText}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectListing(listing);
                    }}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#111827] group-hover:text-[#8D673D] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B48A5A] rounded-sm"
                  >
                    <span>İlanı İncele</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B48A5A]" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
