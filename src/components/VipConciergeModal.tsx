import { FormEvent, useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, MessageCircle, X } from 'lucide-react';

interface VipConciergeModalProps {
  isOpen: boolean;
  initialSubject: string | null;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

export function VipConciergeModal({
  isOpen,
  initialSubject,
  onClose,
}: VipConciergeModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState<'auto' | 'realestate' | 'both'>('both');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [confirmedCode, setConfirmedCode] = useState<string | null>(null);

  useEffect(() => {
    if (initialSubject) {
      setNotes(`İlgilenilen ilan: ${initialSubject}`);
      setConfirmedCode(null);
    }
  }, [initialSubject]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (name.trim().length < 2) {
      nextErrors.name = 'Lütfen adınızı ve soyadınızı girin.';
    }
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) {
      nextErrors.phone = 'Lütfen geçerli bir telefon numarası girin.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setConfirmedCode(
      `AUR-${new Date().getFullYear()}-${String(Math.floor(1000 + Math.random() * 9000))}`
    );
  };

  const whatsappDirectUrl = `https://wa.me/902125550190?text=${encodeURIComponent(
    notes
      ? `Merhaba AURELIA VIP Danışmanlık, ${notes}`
      : 'Merhaba AURELIA, VIP danışmanlık ve portföy sunumu hakkında bilgi almak istiyorum.'
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="vip-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111827]/45 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-2xl border border-[#E5E7EB] shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-[#E5E7EB] flex items-center justify-between gap-4">
          <div className="text-xs font-semibold text-[#8D673D]">AURELIA VIP Concierge</div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Danışmanlık penceresini kapat"
            className="inline-flex items-center justify-center w-9 h-9 rounded-xl text-[#6B7280] hover:text-[#111827] hover:bg-[#F8F9FA] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {confirmedCode ? (
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-emerald-700 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>VIP Randevu Talebiniz Alındı</span>
              </div>

              <div>
                <h3 id="vip-modal-title" className="text-xl font-bold text-[#111827] mb-2">
                  Teşekkürler, {name}.
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  <span className="font-mono tabular-nums font-semibold text-[#111827]">
                    {confirmedCode}
                  </span>{' '}
                  kodlu talebiniz kıdemli portföy direktörümüze iletildi. En geç 30 dakika
                  içinde <span className="font-medium text-[#111827]">{phone}</span>{' '}
                  numaranızdan sizinle iletişime geçeceğiz.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setConfirmedCode(null);
                    onClose();
                  }}
                  className="px-5 py-2.5 min-h-[40px] text-sm font-semibold text-white bg-[#111827] hover:bg-[#1F2937] rounded-xl transition-colors cursor-pointer"
                >
                  Tamam
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <h3 id="vip-modal-title" className="text-xl font-bold text-[#111827] mb-1.5">
                  Özel Portföy Danışmanlığı
                </h3>
                <p className="text-sm text-[#6B7280]">
                  Showroom ziyareti, ekspertiz raporu veya 3D canlı mülk sunumu için size
                  uygun bilgileri paylaşın.
                </p>
              </div>

              <div>
                <span className="block text-xs font-medium text-[#111827] mb-2">
                  İlgilendiğiniz Alan
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'auto' as const, label: 'Oto Galeri' },
                    { id: 'realestate' as const, label: 'Gayrimenkul' },
                    { id: 'both' as const, label: 'Her İkisi' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setInterest(opt.id)}
                      className={`py-2 px-3 rounded-xl border text-xs font-medium transition-colors cursor-pointer ${
                        interest === opt.id
                          ? 'bg-[#111827] text-white border-[#111827]'
                          : 'bg-white text-[#6B7280] border-[#E5E7EB] hover:text-[#111827]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="vip-name"
                  className="block text-xs font-medium text-[#111827] mb-1.5"
                >
                  Ad Soyad
                </label>
                <input
                  id="vip-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="Emre Demir"
                  className={`w-full px-3.5 py-2.5 min-h-[42px] text-sm rounded-xl border bg-white text-[#111827] focus:outline-none focus:border-[#B48A5A] ${
                    errors.name ? 'border-red-600' : 'border-[#E5E7EB]'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="vip-phone"
                  className="block text-xs font-medium text-[#111827] mb-1.5"
                >
                  Telefon Numarası
                </label>
                <input
                  id="vip-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  placeholder="+90 532 000 00 00"
                  className={`w-full px-3.5 py-2.5 min-h-[42px] text-sm rounded-xl border bg-white text-[#111827] focus:outline-none focus:border-[#B48A5A] ${
                    errors.phone ? 'border-red-600' : 'border-[#E5E7EB]'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="vip-notes"
                  className="block text-xs font-medium text-[#111827] mb-1.5"
                >
                  Talep veya Notunuz (Opsiyonel)
                </label>
                <textarea
                  id="vip-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tercih ettiğiniz gün, saat veya ilgilendiğiniz model/bölge..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E5E7EB] bg-white text-[#111827] focus:outline-none focus:border-[#B48A5A]"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8D673D] hover:text-[#111827] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Doğrudan WhatsApp ile Yaz</span>
                </a>

                <button
                  type="submit"
                  className="px-5 py-2.5 min-h-[42px] text-sm font-semibold text-white bg-[#111827] hover:bg-[#1F2937] rounded-xl transition-colors cursor-pointer"
                >
                  Randevu Talebi Gönder
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
