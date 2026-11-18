import { useEffect } from 'react';
import { Calendar, CheckCircle2, MessageCircle, X } from 'lucide-react';
import { AureliaListing } from '../data/aureliaListings';
import { ResilientImage } from './ResilientImage';

interface ListingDetailModalProps {
  listing: AureliaListing | null;
  onClose: () => void;
  onRequestAppointment: (listingTitle: string) => void;
}

export function ListingDetailModal({
  listing,
  onClose,
  onRequestAppointment,
}: ListingDetailModalProps) {
  useEffect(() => {
    if (!listing) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [listing, onClose]);

  if (!listing) return null;

  const whatsappText = encodeURIComponent(
    `Merhaba AURELIA, "${listing.title}" (${listing.priceText}) ilanı hakkında detaylı bilgi ve ekspertiz/sunum randevusu almak istiyorum.`
  );
  const whatsappUrl = `https://wa.me/902125550190?text=${whatsappText}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="listing-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111827]/45 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#E5E7EB] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-[#E5E7EB] flex items-center justify-between gap-4">
          <div className="text-xs text-[#6B7280] flex items-center gap-2 truncate">
            <span className="font-semibold text-[#8D673D]">{listing.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{listing.location}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="İlan detayını kapat"
            className="inline-flex items-center justify-center w-9 h-9 rounded-xl text-[#6B7280] hover:text-[#111827] hover:bg-[#F8F9FA] transition-colors shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B48A5A]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-7">
          <div className="aspect-4/3 w-full rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#F8F9FA]">
            <ResilientImage
              src={listing.imageUrl}
              alt={listing.imageAlt}
              fallbackLabel={listing.title}
              className="w-full h-full object-cover block"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h3
                id="listing-modal-title"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827]"
                style={{ textWrap: 'balance' }}
              >
                {listing.title}
              </h3>
              <p className="text-sm text-[#6B7280] mt-1">{listing.subtitle}</p>
            </div>

            <div className="font-mono tabular-nums text-2xl font-bold text-[#111827] whitespace-nowrap shrink-0">
              {listing.priceText}
            </div>
          </div>

          <div className="rounded-xl border border-[#E5E7EB] bg-[#F8F9FA] p-4 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#8D673D] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-medium text-[#6B7280]">
                {listing.statusHighlightLabel}
              </div>
              <div className="text-sm font-semibold text-[#111827] mt-0.5">
                {listing.statusHighlightValue}
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
            {listing.description}
          </p>

          <div>
            <h4 className="text-sm font-semibold text-[#111827] mb-3">
              Teknik ve Mimari Özellikler
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {listing.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-xl border border-[#E5E7EB] bg-white p-3.5"
                >
                  <div className="text-xs text-[#6B7280]">{spec.label}</div>
                  <div className="text-sm font-semibold text-[#111827] mt-0.5 tabular-nums">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#111827] mb-3">Öne Çıkan Donanımlar</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {listing.features.map((feat) => (
                <li
                  key={feat}
                  className="text-sm text-[#6B7280] flex items-start gap-2"
                >
                  <span aria-hidden="true" className="text-[#B48A5A] font-semibold">
                    —
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-5 border-t border-[#E5E7EB] flex flex-wrap items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                const title = listing.title;
                onClose();
                onRequestAppointment(title);
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-sm font-semibold text-[#111827] bg-white hover:bg-[#F8F9FA] border border-[#E5E7EB] hover:border-[#B48A5A] rounded-xl transition-colors whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#8D673D]" />
              <span>Özel Randevu Talep Et</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] text-sm font-semibold text-white bg-[#111827] hover:bg-[#1F2937] rounded-xl transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#B48A5A]" />
              <span>WhatsApp ile Bilgi Al</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
