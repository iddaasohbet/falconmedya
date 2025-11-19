import { RefreshCw, Unlock, XCircle, Search, ShieldCheck, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Dijital Güvenlik Hizmetleri | Instagram Hesap Kurtarma Uzmanı",
  description: "Instagram hesap kurtarma, Facebook hesap kurtarma, sosyal medya güvenliği, hesap koruma ve dijital güvenlik danışmanlığı hizmetleri. Profesyonel dijital güvenlik uzmanı ekibi ile 7/24 destek. Tel: 0534 475 40 86",
  keywords: "dijital güvenlik uzmanı, instagram hesap kurtarma, facebook hesap kurtarma, hesap kurtarma hizmeti, sosyal medya güvenliği, siber güvenlik danışmanı, hesap koruma",
};

const services = [
  {
    icon: RefreshCw,
    title: "Hesap Kurtarma",
    desc: "Sosyal medya ve dijital hesaplarınızın erişim sorunlarını hızlı ve güvenli şekilde çözüyoruz.",
    features: [
      "Instagram, Facebook, Twitter kurtarma",
      "E-posta hesabı kurtarma",
      "24-48 saat içinde çözüm",
      "Güvenli ve yasal yöntemler"
    ],
    color: "blue",
  },
  {
    icon: Unlock,
    title: "Hesap Erişim Sağlama",
    desc: "Kilitlenen veya erişim problemi yaşayan hesaplarınıza güvenli ve hızlı erişim sağlıyoruz.",
    features: [
      "Şifre sıfırlama desteği",
      "İki faktörlü doğrulama çözümü",
      "Hızlı müdahale",
      "7/24 destek"
    ],
    color: "purple",
  },
  {
    icon: XCircle,
    title: "Hesap Kapatma",
    desc: "İstemediğiniz veya kullanılmayan hesaplarınızın kalıcı ve güvenli şekilde kapatılmasını sağlıyoruz.",
    features: [
      "Kalıcı silme işlemi",
      "Veri temizliği",
      "Gizlilik koruması",
      "Onaylı prosedürler"
    ],
    color: "red",
  },
  {
    icon: Search,
    title: "Numara ve İsimden Kişi Bulma",
    desc: "Telefon numarası veya isim-soyisim bilgisi ile yasal ve güvenilir yöntemlerle kişi ve konum bilgisi sağlıyoruz.",
    features: [
      "Yasal sorgulama",
      "Güvenilir kaynaklar",
      "Gizlilik garantisi",
      "Hızlı sonuç"
    ],
    color: "green",
  },
  {
    icon: ShieldCheck,
    title: "Hesap Koruma",
    desc: "Hesaplarınızı kötü amaçlı erişimlere karşı güçlü güvenlik önlemleri ile koruyoruz.",
    features: [
      "İki faktörlü doğrulama kurulumu",
      "Güvenlik duvarı",
      "7/24 izleme",
      "Anlık uyarılar"
    ],
    color: "orange",
  },
  {
    icon: MapPin,
    title: "Konum Bulma ve Takip Desteği",
    desc: "Cihazların ve hesapların konum takibi için profesyonel destek ve çözümler sunuyoruz.",
    features: [
      "GPS takip sistemi",
      "Canlı konum paylaşımı",
      "Geçmiş rota analizi",
      "Anlık bildirimler"
    ],
    color: "teal",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; icon: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", icon: "bg-blue-100" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", icon: "bg-purple-100" },
  red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200", icon: "bg-red-100" },
  green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", icon: "bg-green-100" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", icon: "bg-orange-100" },
  teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200", icon: "bg-teal-100" },
};

export default function HizmetlerPage() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-16 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <div className="inline-block mb-6">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              Hizmetlerimiz
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Dijital Güvenlik{" "}
            <span className="text-blue-600">Çözümleri</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Profesyonel ekibimizle hesaplarınızın güvenliği ve yönetimi için kapsamlı hizmetler sunuyoruz.
          </p>
          <Link
            href="/#iletisim"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Hemen Başlayın
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-16">
            {services.map((service, index) => {
              const colors = colorMap[service.color];
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className={isEven ? 'lg:pr-12' : 'lg:pl-12 lg:order-2'}>
                    <div className={`${colors.icon} inline-flex p-4 rounded-xl mb-6`}>
                      <service.icon className={`h-10 w-10 ${colors.text}`} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className={`h-6 w-6 ${colors.text} flex-shrink-0 mt-0.5`} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="https://wa.me/905344754086?text=Merhaba%2C%20dijital%20g%C3%BCvenlik%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 font-semibold ${colors.text} hover:gap-3 transition-all`}
                    >
                      Detaylı Bilgi Alın (WhatsApp)
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </div>

                  {/* Image/Visual */}
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className={`aspect-square rounded-3xl ${colors.bg} p-8 border-2 ${colors.border}`}>
                      <div className="h-full flex items-center justify-center">
                        <service.icon className={`h-32 w-32 ${colors.text} opacity-20`} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dijital Güvenliğiniz İçin Bize Ulaşın
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Uzman ekibimiz size yardımcı olmak için 7/24 hazır
          </p>
          <a
            href="https://wa.me/905344754086?text=Merhaba%2C%20dijital%20g%C3%BCvenlik%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white hover:bg-green-700 transition-colors shadow-lg"
          >
            Canlı Destek (WhatsApp)
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

