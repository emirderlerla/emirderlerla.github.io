import { TRUST_PILLARS } from '../data/aureliaListings';

export function TrustStrip() {
  return (
    <section id="kurumsal" className="py-16 lg:py-24 border-b border-[#E5E7EB]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-[#8D673D] mb-2">Kurumsal Güvence</p>
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] mb-3"
            style={{ textWrap: 'balance' }}
          >
            Standartların ötesinde doğrulama, sunum ve devir teknolojisi.
          </h2>
          <p className="text-base text-[#6B7280] leading-relaxed">
            Satın alma ve yatırım kararlarınızı teknik şeffaflık ve tek noktadan hukuki
            güvence ile destekliyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white rounded-2xl border border-[#E5E7EB] p-7 flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="font-mono tabular-nums text-xs font-semibold text-[#B48A5A] mb-3">
                  {pillar.number}
                </div>
                <h3 className="text-lg font-semibold text-[#111827] tracking-tight mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                  {pillar.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] text-xs font-medium text-[#111827]">
                {pillar.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
