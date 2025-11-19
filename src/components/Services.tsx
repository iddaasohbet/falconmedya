"use client";

import { RefreshCw, Unlock, Lock, Search, ShieldCheck, MapPin } from "lucide-react";

const services = [
  {
    icon: Unlock,
    title: "Sosyal Medya Erişimi",
    desc: "Dilediğiniz Kişinin Instagram–Facebook–mail–skype…vs Gibi Adreslerine Erişip Sizlere Sunuyoruz",
    color: "blue",
  },
  {
    icon: Lock,
    title: "Cihaz Erişim",
    desc: "Dilediğiniz Cihaza Uzaktan Bağlanabiliyor ve Sizlere Takip Ettirebiliyoruz",
    color: "purple",
  },
  {
    icon: Search,
    title: "Whatsapp Erişim",
    desc: "Hedef Kişinin Uzaktan Whatsapp Adresini Hackleyip Sizlere Takip Ettirebiliyoruz",
    color: "red",
  },
  {
    icon: MapPin,
    title: "Kayıp Ödemeler",
    desc: "Herhangi Bir Firma-Site Tarafından Mağdur Olduysanız Bize Ulaşın Ödemenizi Geri Alalım",
    color: "green",
  },
  {
    icon: RefreshCw,
    title: "Veri Kurtarma & Silme",
    desc: "Verileriniz Başka Kişilerin Eline Geçtiyse Endişelenmeyin Özel verilerinizi Sildirmek İçin veya Verilerinizi Kurtarmak İçin Bizimle İletişime Geçebilirsiniz",
    color: "orange",
  },
  {
    icon: ShieldCheck,
    title: "Genel",
    desc: "Genel Olarak Sitemizde Belirttiğimiz Tarz Tüm İşlemleri Yapabilmekteyiz İstediğiniz İşlemi Yaptırmak İçin Bize Ulaşabilirsiniz",
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

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              Dijital Güvenlik Hizmetleri
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Hacker Kiralamak İçin{" "}
            <span className="text-blue-600">Doğru Yerdesiniz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aklınıza Gelebilicek Tüm İşlemleri Yapabilmekteyiz. Cihaz Erişimi-Whatsapp Takip-Sosyal Medya Hackleme-...vs. Gibi İşlemler Ortalama 1 Saat İçerisinde Hızlıca Tamamlanabilmektedir
          </p>
        </div>

        {/* Services Grid - Tamamen Farklı Tasarım */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            return (
              <div
                key={index}
                className="group relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon with Number Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`${colors.icon} p-4 rounded-xl`}>
                    <service.icon className={`h-8 w-8 ${colors.text}`} />
                  </div>
                  <span className="text-sm font-bold text-gray-300">0{index + 1}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* CTA Link */}
                <a
                  href="https://wa.me/905344754086?text=Merhaba%2C%20dijital%20g%C3%BCvenlik%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-semibold ${colors.text} flex items-center gap-2 group-hover:gap-3 transition-all`}
                >
                  Detaylı Bilgi (WhatsApp)
                  <span className="text-lg">→</span>
                </a>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl border-2 ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
