export type PortfolioFilter = 'all' | 'auto' | 'realestate';

export interface ListingSpec {
  label: string;
  value: string;
}

export interface AureliaListing {
  id: string;
  category: 'auto' | 'realestate';
  categoryLabel: string;
  title: string;
  subtitle: string;
  location: string;
  priceText: string;
  priceNumeric: number;
  imageUrl: string;
  imageAlt: string;
  keyMeta: string[];
  statusHighlightLabel: string;
  statusHighlightValue: string;
  description: string;
  specs: ListingSpec[];
  features: string[];
  featuredWide?: boolean;
}

export interface TrustPillar {
  number: string;
  title: string;
  summary: string;
  detail: string;
}

export const AURELIA_LISTINGS: AureliaListing[] = [
  {
    id: 'porsche-911-gts',
    category: 'auto',
    categoryLabel: 'Oto Galeri',
    title: '2024 Porsche 911 Carrera GTS',
    subtitle: 'Tebeşir Grisi · Doğuş Çıkışlı · Sport Chrono',
    location: 'İstanbul / Etiler Showroom',
    priceText: '14.850.000 ₺',
    priceNumeric: 14850000,
    imageUrl: '/src/assets/images/car_porsche_gts_1795022576373.jpg',
    imageAlt: '2024 Porsche 911 Carrera GTS tebeşir grisi lüks oto galeri',
    keyMeta: ['2024 Model', '4.200 KM', 'Otomatik / Benzin'],
    statusHighlightLabel: 'Ekspertiz Durumu',
    statusHighlightValue: 'Hatasız / Boyasız / Tramer Kaydı Yok',
    description:
      'Yetkili bayi çıkışlı, ilk sahibinden garaj muhafazalı Porsche 911 Carrera GTS. Tam PPF şeffaf koruma kaplaması, arka aks yönlendirme sistemi ve BOSE Surround ses paketi ile teslim edilmektedir.',
    specs: [
      { label: 'Model Yılı', value: '2024' },
      { label: 'Kilometre', value: '4.200 KM' },
      { label: 'Motor / Güç', value: '3.0L Boxer · 480 HP' },
      { label: 'Şanzıman', value: '8 İleri PDK Otomatik' },
      { label: 'Çekiş Sistemi', value: 'Arkadan İtiş' },
      { label: 'Dış / İç Renk', value: 'Tebeşir Grisi / Siyah Alcantara' },
    ],
    features: [
      'Sport Chrono Paketi ve Kronometre',
      'Merkez Kilitli 20/21 inç RS Spyder Jantlar',
      'Adaptif 18 Yönlü Spor Plus Koltuklar',
      'PDLS Plus Matrix LED Farlar',
    ],
    featuredWide: true,
  },
  {
    id: 'bodrum-yalikavak-villa',
    category: 'realestate',
    categoryLabel: 'Emlak & Gayrimenkul',
    title: 'Modern Cam Cepheli Müstakil Villa',
    subtitle: 'Panoramik Ege Manzaralı · Sonsuzluk Havuzlu',
    location: 'Bodrum / Yalıkavak',
    priceText: '42.500.000 ₺',
    priceNumeric: 42500000,
    imageUrl: '/src/assets/images/prop_bodrum_villa_1795022577651.jpg',
    imageAlt: 'Bodrum Yalıkavak modern cam cepheli müstakil lüks villa',
    keyMeta: ['450 m²', '5+1', 'Bodrum / Yalıkavak'],
    statusHighlightLabel: 'Tapu Durumu',
    statusHighlightValue: 'Kat Mülkiyetli / İskanlı / Krediye Uygun',
    description:
      'Yalıkavak Marina’ya 6 dakika mesafede, 1.150 m² özel peyzajlı arsa içerisinde yer alan mimari proje. Yerden ısıtmalı traverten zeminler, akıllı ev otomasyonu ve kesintisiz gün batımı manzarası sunar.',
    specs: [
      { label: 'Kapalı Alan', value: '450 m² Brüt / 395 m² Net' },
      { label: 'Oda Planı', value: '5+1 · 6 Banyo' },
      { label: 'Arsa Payı', value: '1.150 m² Müstakil Parsel' },
      { label: 'Konum', value: 'Bodrum / Yalıkavak' },
      { label: 'Bina Yaşı', value: '0 (Yeni Teslim)' },
      { label: 'Otopark', value: '3 Araçlık Kapalı Garaj' },
    ],
    features: [
      'Isıtmalı 14m Özel Sonsuzluk Havuzu',
      'Schüco Isı Yalıtımlı Tam Cam Cephe',
      'Müstakil Misafir Süiti ve Hizmetli Odası',
      'KNX Akıllı Ev ve Güneş Enerjisi Altyapısı',
    ],
  },
  {
    id: 'mercedes-amg-g63',
    category: 'auto',
    categoryLabel: 'Oto Galeri',
    title: '2023 Mercedes-AMG G63',
    subtitle: 'Mat Selenit Gri · Gece Paketi · Nappa Deri',
    location: 'İstanbul / Etiler Showroom',
    priceText: '19.400.000 ₺',
    priceNumeric: 19400000,
    imageUrl: '/src/assets/images/car_mercedes_g63_1795022576188.jpg',
    imageAlt: '2023 Mercedes-AMG G63 mat gri lüks SUV showroom',
    keyMeta: ['2023 Model', '11.400 KM', 'Otomatik / Benzin'],
    statusHighlightLabel: 'Ekspertiz Durumu',
    statusHighlightValue: 'Hatasız / Boyasız / Yetkili Servis Bakımlı',
    description:
      'Fabrikasyon Designo mat grafit boya ve Superior Line iç mekana sahip Mercedes-AMG G63. Tüm bakımları yetkili serviste zamanında yapılmış olup sıfır ayarında muhafaza edilmiştir.',
    specs: [
      { label: 'Model Yılı', value: '2023' },
      { label: 'Kilometre', value: '11.400 KM' },
      { label: 'Motor / Güç', value: '4.0L V8 Biturbo · 585 HP' },
      { label: 'Şanzıman', value: 'AMG SPEEDSHIFT TCT 9G' },
      { label: 'Çekiş Sistemi', value: '4MATIC Dört Çeker' },
      { label: 'Dış / İç Renk', value: 'Mat Grafit / Tartufo Nappa' },
    ],
    features: [
      'AMG Gece Paketi ve 22 inç Mat Siyah Jantlar',
      'Burmester High-End 3D Surround Ses Sistemi',
      'Masajlı, Isıtmalı ve Soğutmalı Ön Koltuklar',
      'Süspansiyon Sertlik Kontrollü AMG Ride Control',
    ],
  },
  {
    id: 'bogaz-dublex-penthouse',
    category: 'realestate',
    categoryLabel: 'Emlak & Gayrimenkul',
    title: 'Boğaz Manzaralı Dubleks Penthouse',
    subtitle: 'Yüksek Tavan · Özel Asansörlü Teras Katı',
    location: 'İstanbul / Beşiktaş',
    priceText: '68.000.000 ₺',
    priceNumeric: 68000000,
    imageUrl: '/src/assets/images/prop_bosphorus_penthouse_1795022577868.jpg',
    imageAlt: 'İstanbul Beşiktaş Boğaz manzaralı dubleks penthouse iç mekan',
    keyMeta: ['380 m²', '4+1', 'İstanbul / Beşiktaş'],
    statusHighlightLabel: 'Tapu Durumu',
    statusHighlightValue: 'Kat Mülkiyetli / Borçsuz / Hemen Teslim',
    description:
      'Beşiktaş sırtlarında tarihi yarımada ve Boğaziçi Köprüsü’ne hakim, 6.2 metre galeri boşluklu dubleks çatı katı. Daire içi özel asansör, 95 m² seyir terası ve iki araçlık elektrikli şarjlı otopark alanı mevcuttur.',
    specs: [
      { label: 'Kapalı Alan', value: '380 m² Brüt / 335 m² Net' },
      { label: 'Oda Planı', value: '4+1 · 4 Banyo + 1 Giyinme' },
      { label: 'Teras Alanı', value: '95 m² Panoramik Boğaz Terası' },
      { label: 'Konum', value: 'İstanbul / Beşiktaş' },
      { label: 'Bina Güvenliği', value: '7/24 Özel Resepsiyon & Güvenlik' },
      { label: 'Otopark', value: '2 Araçlık Kapalı + AC Şarj' },
    ],
    features: [
      'Doğrudan Daire İçine Açılan Özel Asansör',
      'Gaggenau Ankastre Mutfak ve Şarap Mahzeni',
      'Doğal Kireçtaşı Zemin ve Bronz Aydınlatma',
      'Ses Yalıtımlı Akustik Tavan Mimarisi',
    ],
  },
  {
    id: 'audi-rs-etron-gt',
    category: 'auto',
    categoryLabel: 'Oto Galeri',
    title: '2024 Audi RS e-tron GT',
    subtitle: 'Şampanya Gümüş · Karbon Seramik Fren · Quattro',
    location: 'İstanbul / Etiler Showroom',
    priceText: '11.250.000 ₺',
    priceNumeric: 11250000,
    imageUrl: '/src/assets/images/car_audi_etron_gt_1795022577571.jpg',
    imageAlt: '2024 Audi RS e-tron GT şampanya gümüş elektrikli spor sedan',
    keyMeta: ['2024 Model', '2.100 KM', 'Otomatik / Elektrik'],
    statusHighlightLabel: 'Ekspertiz Durumu',
    statusHighlightValue: 'Hatasız / Boyasız / %99 Batarya Sağlığı',
    description:
      '800V hızlı şarj mimarisi ile 22 dakikada %80 doluluk sunan yüksek performanslı elektrikli Gran Turismo. Karbon tavan, lazer farlar ve Bang & Olufsen 3D ses sistemi donanımına sahiptir.',
    specs: [
      { label: 'Model Yılı', value: '2024' },
      { label: 'Kilometre', value: '2.100 KM' },
      { label: 'Motor / Güç', value: 'Çift Elektrik Motoru · 646 HP' },
      { label: 'Menzil (WLTP)', value: '472 KM' },
      { label: 'Çekiş Sistemi', value: 'Elektrikli Quattro 4x4' },
      { label: 'Dış / İç Renk', value: 'Şampanya Gümüş / Arras Kırmızı Dikiş' },
    ],
    features: [
      'Karbon Fiber Tavan ve Dış Tasarım Paketi',
      'Üç Odacıklı Adaptif Havalı Süspansiyon',
      'Audi Lazer Işıklı Matrix LED Farlar',
      'Head-Up Display ve 360° Çevre Görüş',
    ],
  },
  {
    id: 'cesme-denize-sifir-rezidans',
    category: 'realestate',
    categoryLabel: 'Emlak & Gayrimenkul',
    title: 'Denize Sıfır Minimalist Rezidans',
    subtitle: 'Özel İskele Erişimi · Traverten Teraslı Köşe Konum',
    location: 'İzmir / Çeşme',
    priceText: '34.750.000 ₺',
    priceNumeric: 34750000,
    imageUrl: '/src/assets/images/prop_cesme_residence_1795022580336.jpg',
    imageAlt: 'İzmir Çeşme denize sıfır minimalist lüks rezidans',
    keyMeta: ['290 m²', '3+1', 'İzmir / Çeşme'],
    statusHighlightLabel: 'Tapu Durumu',
    statusHighlightValue: 'Kat Mülkiyetli / Yatırım & Oturuma Hazır',
    description:
      'Çeşme’nin en korunaklı koylarından birinde, yalnızca 8 bağımsız rezidanstan oluşan butik projede denize sıfır konum. Özel plaj iskelesi, tekne bağlama önceliği ve 12 ay kesintisiz concierge hizmeti içerir.',
    specs: [
      { label: 'Kapalı Alan', value: '290 m² Brüt / 255 m² Net' },
      { label: 'Oda Planı', value: '3+1 · 3 Ebeveyn Banyosu' },
      { label: 'Bahçe & Teras', value: '140 m² Özel Kullanım Terası' },
      { label: 'Konum', value: 'İzmir / Çeşme' },
      { label: 'Denize Mesafe', value: '0 Metre (Özel İskeleli Koy)' },
      { label: 'İklimlendirme', value: 'VRV Merkezi Sistem + Yerden Isıtma' },
    ],
    features: [
      'Siteye Özel Mavi Bayraklı Plaj ve İskele',
      'Doğal Afyon Traverteni Cephe Kaplama',
      'Özel Spa, Sauna ve Deniz Manzaralı Fitness',
      '24 Saat Teknik Servis ve Yaz-Kış Bakım',
    ],
    featuredWide: true,
  },
];

export const TRUST_PILLARS: TrustPillar[] = [
  {
    number: '01.',
    title: '150 Nokta Garantili Ekspertiz',
    summary:
      'Portföyümüzdeki her otomobil bağımsız TSE onaylı laboratuvarlarda mekanik, boya ve elektronik kontrolden; her gayrimenkul ise imar, tapu ve yapı denetim incelemesinden geçer.',
    detail: 'Noter ve tapu öncesi tam şeffaf teknik rapor',
  },
  {
    number: '02.',
    title: '3D Sanal Tur & Canlı Sunum',
    summary:
      'Şehir veya yurt dışından ilgilenen müşterilerimiz için 4K canlı showroom bağlantısı, araç soğuk çalıştırma yayını ve mülkler için santimetre hassasiyetli 3D sanal tur sunuyoruz.',
    detail: 'Randevudan itibaren 30 dakikada canlı yayın',
  },
  {
    number: '03.',
    title: 'Anahtar Teslim Finans & Devir Desteği',
    summary:
      'Özel bankacılık finansman çözümleri, takas değerleme, sigorta/kasko poliçelendirme, noter araç devri ve tapu tescil süreçlerinin tamamını danışmanlarımız yönetir.',
    detail: 'Tek masada hızlı sözleşme ve tescil',
  },
];
