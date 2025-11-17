import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hacker Bul – Kiralık Hacker – Hacker Arıyorum (2025 En Profesyonel Çözüm Rehberi)",
  description: '"Hacker bul", "kiralık hacker", "hacker arıyorum" diyenler için güvenilir, hızlı ve profesyonel çözüm yolları. Hesap kurtarma, siber güvenlik desteği ve uzman yardımı.',
  keywords: [
    "hacker bul",
    "kiralık hacker",
    "hacker arıyorum",
    "profesyonel hacker",
    "etik hacker",
    "hesap kurtarma",
    "instagram hesap kurtarma",
    "web sitesi güvenliği",
    "siber güvenlik uzmanı",
  ],
  openGraph: {
    title: "Hacker Bul – Kiralık Hacker – Hacker Arıyorum (2025 Profesyonel Rehber)",
    description: "Hacker bul, kiralık hacker, hacker arıyorum diyenler için güvenilir ve profesyonel çözüm yolları.",
    type: "article",
  },
  alternates: {
    canonical: "https://www.falconmedya.com/hacker-bul",
  },
};

export default function HackerBulPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white pt-32 pb-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center mb-12">
              <div className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 mb-6">
                2025 En Profesyonel Çözüm Rehberi
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Hacker Bul – Kiralık Hacker – Hacker Arıyorum
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Hesap kurtarma, siber güvenlik desteği ve uzman yardımı için güvenilir, hızlı ve profesyonel çözüm yolları.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <article className="mx-auto max-w-4xl px-6 py-16">
          
          {/* Giriş */}
          <section className="mb-16">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                İnternette yaşanan hesap çalınmaları, tehdit mesajları, kişisel veri sızıntıları veya siber saldırılar, birçok kişiyi <strong className="text-gray-900">"hacker bul"</strong>, <strong className="text-gray-900">"kiralık hacker"</strong>, <strong className="text-gray-900">"hacker arıyorum"</strong> arayışına yönlendiriyor. İnsanlar bu kelimeleri Google'a yazdığında aslında çare arıyor:
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700">✓ Hesap geri alma</li>
                <li className="text-gray-700">✓ Eski verileri kurtarma</li>
                <li className="text-gray-700">✓ Tehditlerden kurtulma</li>
                <li className="text-gray-700">✓ Web sitesi saldırılarını engelleme</li>
                <li className="text-gray-700">✓ Sosyal medya hesabını geri alma</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Ama burada önemli bir detay var: İnsanların aradığı aslında <strong className="text-blue-600">profesyonel, güvenilir ve gerçek uzman desteği</strong>. Çünkü ortalık dolandırıcılarla dolu, "hacker" diye geçen kişilerin çoğu para alıp kayboluyor.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
                <p className="text-gray-800 font-semibold text-lg">
                  Bu yüzden en doğru yöntem profesyonel bir siber güvenlik uzmanı bulmaktır.
                </p>
              </div>
            </div>
          </section>

          {/* Hacker Bulmak İstiyorum */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-3">
              Hacker Bulmak İstiyorum – Ne Yapmalıyım?
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Google'da "hacker bul" yazdığında karşına yüzlerce sonuç çıkar ama bunların %90'ı dolandırıcıdır. Gerçek bir profesyonel bulmak için şu kriterlere dikkat etmelisin:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">✔ 1. Referansı olan kişi/ekip</h3>
                  <p className="text-gray-700">Gerçek bir uzman, daha önce çözülmüş işler gösterebilir.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">✔ 2. Kurumsal iletişim adresi</h3>
                  <p className="text-gray-700">Mail, WhatsApp, web sitesi... Hepsi açık olmalı.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">✔ 3. Ödeme sonrası kaçmayan ekip</h3>
                  <p className="text-gray-700">Birçok kişi parayı aldıktan sonra kaybolur. Bu yüzden kurumsal ve sabit bir ekip ile çalışmak gerekir.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">✔ 4. Gerçek uzmanlık alanı</h3>
                  <p className="text-gray-700 mb-4">Bir hacker her şeyi yapamaz. Uzmanlık alanları farklıdır:</p>
                  <ul className="space-y-2">
                    <li className="text-gray-700">• Hesap kurtarma</li>
                    <li className="text-gray-700">• Web site güvenliği</li>
                    <li className="text-gray-700">• Veri kurtarma</li>
                    <li className="text-gray-700">• DDoS koruması</li>
                    <li className="text-gray-700">• Oyun hesapları</li>
                    <li className="text-gray-700">• Sosyal medya güvenliği</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Kiralık Hacker */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-3">
              Kiralık Hacker Arıyorum – En Güvenilir Yöntem
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                İnsanlar "kiralık hacker" dediğinde aslında şunu arıyor:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-800 font-medium">➡ Hesabını geri alacak</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-800 font-medium">➡ Çalınan verileri kurtaracak</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-800 font-medium">➡ Hacklenen sitelerini düzeltecek</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-800 font-medium">➡ Siber tehditleri ortadan kaldıracak</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-800 font-medium">➡ Dolandırıcıları raporlayacak</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-800 font-medium">➡ Kişisel güvenliğini artıracak</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Bunların hepsi yasal ve profesyonel şekilde yapılabilir.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg my-8">
                <p className="text-gray-800 font-semibold mb-2">Kiralık hacker arayanların bilmesi gereken en önemli şey:</p>
                <p className="text-gray-700">Yasadışı işlem isteyenlere kimse yardımcı olamaz. Ama hesap kurtarma, güvenlik analizi, web site koruması ve sosyal medya destek hizmetleri tamamen yasaldır.</p>
              </div>
            </div>
          </section>

          {/* Hacker Arıyorum */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-3">
              Hacker Arıyorum – İşte Profesyonel Çözümler
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                "Hacker arıyorum" yazan kişilerin %80'i şu problemlerden birini yaşıyor:
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-blue-600 font-bold text-xl">🔹</span>
                  <p className="text-gray-800 font-medium">Instagram hesabım çalındı</p>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-blue-600 font-bold text-xl">🔹</span>
                  <p className="text-gray-800 font-medium">Facebook veya WhatsApp'ım kapandı</p>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-blue-600 font-bold text-xl">🔹</span>
                  <p className="text-gray-800 font-medium">Gmail hesabımı kaybettim</p>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-blue-600 font-bold text-xl">🔹</span>
                  <p className="text-gray-800 font-medium">Oyun hesabım hacklendi</p>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-blue-600 font-bold text-xl">🔹</span>
                  <p className="text-gray-800 font-medium">Web sitem saldırıya uğradı</p>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-blue-600 font-bold text-xl">🔹</span>
                  <p className="text-gray-800 font-medium">Birisi bana şantaj yapıyor</p>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-blue-600 font-bold text-xl">🔹</span>
                  <p className="text-gray-800 font-medium">Verilerim kayboldu</p>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-blue-600 font-bold text-xl">🔹</span>
                  <p className="text-gray-800 font-medium">Bilgilerim internete sızdı</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                Bu durumların hepsi etik hacker ve siber güvenlik uzmanı tarafından çözülebilir.
              </p>
            </div>
          </section>

          {/* Neden Profesyonel */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-3">
              Neden Profesyonel Bir Uzmanla Çalışmalısın?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">✔ Dolandırılmamak için</h3>
                <p className="text-gray-700">Piyasada 100 kişiden 95'i sahte.</p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">✔ Sorun hızlı çözülür</h3>
                <p className="text-gray-700">Bir uzman sorunu 15 dakika ile 24 saat içinde çözer.</p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">✔ Gizlilik korunur</h3>
                <p className="text-gray-700">Verilerin, fotoğrafların veya hesap bilgilerin asla paylaşılmaz.</p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">✔ Teknik olarak doğru işlem</h3>
                <p className="text-gray-700">Rastgele "hacker" diye çıkan kişiler cihazlarına zarar verebilir.</p>
              </div>
            </div>
          </section>

          {/* FalconMedya */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-3">
              FalconMedya.com Neden Tercih Ediliyor?
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Gerçek, kurumsal ve profesyonel hizmet veren az sayıdaki ekipten biridir.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">FalconMedya'nın sunduğu profesyonel çözümler:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">✔</span>
                    <span className="text-gray-800 font-medium">Hesap kurtarma hizmeti</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">✔</span>
                    <span className="text-gray-800 font-medium">Web sitesi saldırılarını temizleme</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">✔</span>
                    <span className="text-gray-800 font-medium">Çalınan hesapları geri alma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">✔</span>
                    <span className="text-gray-800 font-medium">Kişisel güvenlik danışmanlığı</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">✔</span>
                    <span className="text-gray-800 font-medium">DDoS koruması</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">✔</span>
                    <span className="text-gray-800 font-medium">Veri kurtarma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">✔</span>
                    <span className="text-gray-800 font-medium">Sosyal medya destek</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">✔</span>
                    <span className="text-gray-800 font-medium">Marka koruma hizmeti</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Avantajları:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">•</span>
                  <span className="text-gray-800 font-medium">7/24 destek</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">•</span>
                  <span className="text-gray-800 font-medium">Tam gizlilik</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">•</span>
                  <span className="text-gray-800 font-medium">Hızlı çözüm</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">•</span>
                  <span className="text-gray-800 font-medium">Tecrübeli güvenlik ekibi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">•</span>
                  <span className="text-gray-800 font-medium">Kurumsal yapıda hizmet</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Süreç */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-3">
              Hacker Bul – Süreç Nasıl İşliyor?
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                "Hacker bulmak istiyorum" diye gelen bir kişinin süreci şu şekildedir:
              </p>

              <div className="space-y-4">
                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. Sorun anlatılır</h3>
                  <p className="text-gray-700">Hangi hesap çalındı? Ne oldu? Kime ulaştı?</p>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. Uzman analiz yapar</h3>
                  <p className="text-gray-700">Durumun nasıl çözüleceği belirlenir.</p>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. Zaman & ücret bildirilir</h3>
                  <p className="text-gray-700">Soruna göre süre verilir.</p>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">4. İşlem yapılır</h3>
                  <p className="text-gray-700">Hesap kurtarılır, güvenlik sağlanır, tehditler kaldırılır.</p>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">5. Güvenlik yeniden yapılandırılır</h3>
                  <p className="text-gray-700">Hesap veya cihaz tekrar hacklenmesin diye güvenlik önlemleri eklenir.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Dolandırıcılıklar */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-red-600 pb-3">
              Kiralık Hacker Dolandırıcılıkları – Dikkat!
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Dikkat etmen gereken 5 büyük dolandırıcılık:
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">❌ 1. Sadece Telegram'dan yazanlar</h3>
                  <p className="text-gray-700">Büyük ihtimalle sahte.</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">❌ 2. "Her şeyi yaparım" diyenler</h3>
                  <p className="text-gray-700">Gerçek uzman sadece bildiği işe bakar.</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">❌ 3. Ön ödemeyi alıp kaybolan hesaplar</h3>
                  <p className="text-gray-700">En yaygın dolandırıcılık.</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">❌ 4. Kimlik isteyenler</h3>
                  <p className="text-gray-700">Kesin dolandırıcıdır.</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">❌ 5. Çok ucuza iş yapanlar</h3>
                  <p className="text-gray-700">Üç beş kuruşa profesyonel iş yapılmaz.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Yasal Hizmetler */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-green-600 pb-3">
              Hacker Bul – Hangi Hizmetler Yasaldır?
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Şunlar tamamen yasal ve profesyonel hizmetlerdir:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-gray-800 font-medium">✔ Hesap kurtarma</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-gray-800 font-medium">✔ Veri kurtarma</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-gray-800 font-medium">✔ Zararlı yazılım temizleme</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-gray-800 font-medium">✔ Web sitesi saldırılarını kaldırma</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-gray-800 font-medium">✔ Güvenlik danışmanlığı</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-gray-800 font-medium">✔ Siber saldırı engelleme</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-gray-800 font-medium">✔ Marka ve kişisel veri koruma</p>
                </div>
              </div>
            </div>
          </section>

          {/* Hacker Tutmak Suç mu */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-3">
              Hacker Tutmak Suç mu?
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-8">
                <p className="text-gray-800 text-lg font-semibold mb-4">
                  Yasadışı işlem istenirse suçtur.
                </p>
                <p className="text-gray-700 text-lg">
                  Ama "hesabımı geri al, çalınan verilerimi kurtar, saldırıyı kaldır" gibi işlemler tamamen yasaldır.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mt-6">
                Bu yüzden insanlar <strong className="text-gray-900">"kiralık hacker"</strong> yerine <strong className="text-blue-600">"etik hacker"</strong> kullanmalıdır.
              </p>
            </div>
          </section>

          {/* Sonuç */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-3">
              Hacker Bulmak İçin En Doğru Adres
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-4">FalconMedya.com</h3>
                <p className="text-lg mb-6">
                  "hacker bul, kiralık hacker, hacker arıyorum" yazan kişilerin yaşadığı sorunları tamamen yasal – güvenli – kurumsal yöntemlerle çözen profesyonel bir platformdur.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">✔</span>
                    <span className="text-white">Gerçek uzman ekibi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">✔</span>
                    <span className="text-white">7/24 iletişim</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">✔</span>
                    <span className="text-white">Yüzlerce çözülmüş vaka</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">✔</span>
                    <span className="text-white">Tam gizlilik sözleşmesi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">✔</span>
                    <span className="text-white">%100 memnuniyet odaklı</span>
                  </div>
                </div>

                <div className="text-center">
                  <Link 
                    href="/#iletisim" 
                    className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
                  >
                    Hemen İletişime Geç
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* SEO Tags */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-gray-600 pb-3">
              SEO Etiketleri
            </h2>
            
            <div className="flex flex-wrap gap-3">
              {[
                "hacker bul",
                "kiralık hacker",
                "hacker arıyorum",
                "profesyonel hacker",
                "etik hacker",
                "hesap kurtarma",
                "instagram hesap kurtarma",
                "web sitesi güvenliği",
                "siber güvenlik uzmanı",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </section>

        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}


