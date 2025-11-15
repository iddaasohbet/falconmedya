import { Shield, Users, Target, Award, TrendingUp, Clock, CheckCircle, Eye, Heart, Zap, Globe, Lock, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Hakkımızda | Dijital Güvenlik Uzmanı Ekibimiz",
  description: "Falcon Media - Dijital güvenlik uzmanı ve siber güvenlik danışmanı ekibimizle Instagram hesap kurtarma, sosyal medya güvenliği ve hesap koruma hizmetleri. %80 başarı oranı, 7/24 destek. Tel: 0537 312 78 39",
  keywords: "dijital güvenlik uzmanı, siber güvenlik danışmanı, hesap kurtarma uzmanı, sosyal medya güvenlik uzmanı, instagram güvenlik",
};

export default function HakkimizdaPage() {
  return (
    <>
      <Header />
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-blue-600 rounded-2xl">
              <Users className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Hakkımızda
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Dijital güvenlik ve hesap yönetimi alanında uzman ekibimizle, 
            müşterilerimize güvenilir ve profesyonel hizmetler sunuyoruz.
          </p>
        </div>
      </section>

      {/* Şirket Tanıtımı */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
                <h2 className="text-4xl font-bold text-gray-900">
                  Falcon Media
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Falcon Media</strong> olarak, dijital güvenlik ve hesap yönetimi alanında 
                  profesyonel çözümler sunuyoruz. Müşterilerimizin dijital varlıklarının güvenliğini 
                  sağlamak ve hesap yönetimi konusunda destek olmak için 7/24 hizmet vermekteyiz.
                </p>
                <p>
                  Uzman ekibimiz, en güncel teknolojiler ve güvenli yöntemlerle çalışarak müşteri 
                  memnuniyetini ön planda tutar. Gizlilik ve güvenlik prensiplerimiz doğrultusunda, 
                  tüm işlemlerimizi yasal çerçevede ve etik kurallara uygun şekilde gerçekleştiriyoruz.
                </p>
                <p>
                  <strong className="text-blue-600">Misyonumuz:</strong> Dijital dünyada güvenliğinizi 
                  sağlamak ve hesaplarınızın kontrolünü elinizde tutmanıza yardımcı olmaktır.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/hizmetler"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Shield className="h-5 w-5" />
                  Hizmetlerimiz
                </Link>
                <a
                  href="https://wa.me/905373127839?text=Merhaba%2C%20dijital%20g%C3%BCvenlik%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-gray-900 font-semibold hover:border-green-600 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  İletişime Geç (WhatsApp)
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 aspect-square flex items-center justify-center border-4 border-white shadow-2xl">
                <Shield className="h-48 w-48 text-blue-600 opacity-20" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">%80</p>
                    <p className="text-sm text-gray-600">Başarı Oranı</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Değerlerimiz */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
                <h2 className="text-4xl font-bold text-gray-900">Değerlerimiz</h2>
              </div>
              <p className="text-xl text-gray-600">
                Çalışma prensiplerimiz ve değerlerimiz
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-xl transition-all">
                <div className="inline-flex p-4 bg-blue-100 rounded-xl mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Güvenlik</h3>
                <p className="text-gray-600">
                  En üst düzey güvenlik protokolleri ve şifreleme teknolojileri
                </p>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-purple-200 hover:shadow-xl transition-all">
                <div className="inline-flex p-4 bg-purple-100 rounded-xl mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Uzman Ekip</h3>
                <p className="text-gray-600">
                  Deneyimli ve sertifikalı profesyonel kadromuz
                </p>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-green-200 hover:shadow-xl transition-all">
                <div className="inline-flex p-4 bg-green-100 rounded-xl mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hedef Odaklı</h3>
                <p className="text-gray-600">
                  Müşteri memnuniyeti ve başarı odaklı çalışma
                </p>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-orange-200 hover:shadow-xl transition-all">
                <div className="inline-flex p-4 bg-orange-100 rounded-xl mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kalite</h3>
                <p className="text-gray-600">
                  En yüksek hizmet kalitesi ve mükemmellik standartları
                </p>
              </div>
            </div>
          </div>

          {/* Neden Biz? */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Eye className="h-8 w-8 text-blue-600" />
                <h2 className="text-4xl font-bold text-gray-900">Neden Falcon Media?</h2>
              </div>
              <p className="text-xl text-gray-600">
                Bizi tercih etmeniz için önemli sebepler
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-blue-600 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">7/24 Canlı Destek</h3>
                    <p className="text-gray-700">
                      Kesintisiz destek hizmeti ile her an yanınızdayız. Acil durumlarınızda 
                      anında müdahale ediyoruz.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-green-600 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Yüksek Başarı Oranı</h3>
                    <p className="text-gray-700">
                      %80 başarı oranı ile sektörde öncü konumdayız. Kanıtlanmış başarı 
                      geçmişimiz ile güvenle hizmet veriyoruz.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-purple-600 rounded-lg">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Güvenli ve Gizli</h3>
                    <p className="text-gray-700">
                      Verileriniz tamamen güvende ve gizli tutulur. KVKK'ya tam uyumlu 
                      çalışıyoruz.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-orange-600 rounded-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Hızlı Çözüm</h3>
                    <p className="text-gray-700">
                      Ortalama 24-48 saat içinde sorunlarınızı çözüme kavuşturuyoruz. 
                      Hızlı ve etkili hizmet anlayışı.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* İstatistikler */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <TrendingUp className="h-8 w-8" />
                <h2 className="text-4xl font-bold">Rakamlarla Falcon Media</h2>
              </div>
              <p className="text-xl text-blue-100">
                Başarılarımız ve hizmet kalitemiz
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">7/24</div>
                <div className="text-blue-100">Canlı Destek</div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">115+</div>
                <div className="text-blue-100">Günlük İşlem</div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">%80</div>
                <div className="text-blue-100">Başarı Oranı</div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">9654+</div>
                <div className="text-blue-100">Tamamlanan İşlem</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="p-4 bg-blue-600 rounded-2xl">
                <Globe className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dijital Güvenliğiniz İçin Bize Ulaşın
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Uzman ekibimiz size yardımcı olmak için 7/24 hazır. 
              Hesaplarınızın güvenliği bizim önceliğimiz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/905373127839?text=Merhaba%2C%20dijital%20g%C3%BCvenlik%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white hover:bg-green-700 transition-colors shadow-lg"
            >
              <Mail className="h-5 w-5" />
              Canlı Destek (WhatsApp)
            </a>
              <Link
                href="/hizmetler"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-900 hover:border-blue-600 transition-colors"
              >
                <Shield className="h-5 w-5" />
                Hizmetlerimiz
              </Link>
            </div>

            {/* İletişim Bilgileri */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="inline-flex p-3 bg-blue-100 rounded-lg mb-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600 mb-1">E-posta</p>
                <p className="font-semibold text-gray-900">info@www.falconmedya.com</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="inline-flex p-3 bg-blue-100 rounded-lg mb-3">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600 mb-1">Telefon</p>
                <p className="font-semibold text-gray-900">0537 312 78 39</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="inline-flex p-3 bg-blue-100 rounded-lg mb-3">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600 mb-1">Adres</p>
                <p className="font-semibold text-gray-900">İstanbul, Türkiye</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
