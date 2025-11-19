"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Instagram hesap kurtarma hizmeti nasıl çalışıyor?",
    answer:
      "Dijital güvenlik uzmanı ekibimizle Instagram hesap kurtarma sürecimiz şöyle çalışır: Öncelikle hesap detaylarınızı alıyoruz. Ardından profesyonel siber güvenlik danışmanı ekibimiz, güvenli ve yasal yöntemlerle Instagram hesabınıza erişimi yeniden sağlamak için gerekli adımları atıyor. İşlem genellikle 24-48 saat içinde tamamlanır. 7/24 canlı destek: 0534 475 40 86",
  },
  {
    question: "Hangi sosyal medya platformları için hesap kurtarma hizmeti veriyorsunuz?",
    answer:
      "Dijital güvenlik uzmanı olarak Instagram hesap kurtarma, Facebook hesap kurtarma, Twitter hesap kurtarma, TikTok, Snapchat ve tüm popüler sosyal medya platformları için profesyonel hizmet sunuyoruz. Ayrıca e-posta hesapları ve diğer dijital hesaplar için de siber güvenlik danışmanlığı sağlıyoruz.",
  },
  {
    question: "Hesap kapatma talebinde nasıl bulunabilirim?",
    answer:
      "Canlı destek hattımız üzerinden veya iletişim formumuzu doldurarak hesap kapatma talebi oluşturabilirsiniz. Ekibimiz, hesap bilgilerinizi alarak güvenli bir şekilde kapatma işlemini gerçekleştirir.",
  },
  {
    question: "Hesap erişim sağlama hizmetiniz nedir?",
    answer:
      "Şifrenizi unuttuysanız, hesabınız hacklendiyse veya başka bir erişim sorunu yaşıyorsanız, güvenli yöntemlerle hesabınıza yeniden erişim sağlıyoruz. Bu hizmet, hesap kurtarma işleminden farklı olarak daha hızlı çözümler sunar.",
  },
  {
    question: "Numara veya isim üzerinden kişi ve konum bilgisi nasıl bulunur?",
    answer:
      "Yasal çerçevede, verdiğiniz telefon numarası veya isim-soyisim bilgisi üzerinden güvenilir kaynaklardan kişi ve konum bilgisine ulaşıyoruz. Bu hizmet tamamen gizlilik ilkeleri çerçevesinde gerçekleştirilir.",
  },
  {
    question: "Hizmet süresi ne kadar sürer?",
    answer:
      "Hizmet süreleri, işlem türüne göre değişiklik gösterir. Basit hesap erişim işlemleri 24 saat içinde, daha karmaşık kurtarma işlemleri ise 2-5 iş günü içerisinde tamamlanır. Acil durumlar için öncelikli işlem seçeneği mevcuttur.",
  },
  {
    question: "Hizmetleriniz ücretli mi?",
    answer:
      "Evet, profesyonel hizmetlerimiz ücretlidir. Ancak ilk danışma ücretsizdir. Fiyatlandırma, hizmet türüne ve işlem karmaşıklığına göre belirlenir. Detaylı bilgi için canlı destek ekibimizle iletişime geçebilirsiniz.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="sss" className="py-20 px-6 bg-white">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              S.S.S
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Instagram Hesap Kurtarma ve{" "}
            <span className="text-blue-600">Dijital Güvenlik S.S.S</span>
          </h2>
          <p className="text-xl text-gray-600">
            Dijital güvenlik uzmanı ekibimizle ilgili merak edilenler
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-100 rounded-xl bg-white overflow-hidden hover:border-blue-200 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  {openIndex === index ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
