import { FileText, Shield, AlertCircle, CheckCircle, XCircle, Scale, Mail, Phone, MapPin, BookOpen, Lock, Users, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Kullanım Koşulları | Dijital Güvenlik Hizmet Şartları",
  description: "Kiralık Hacker kullanım koşulları ve hizmet şartları. Dijital güvenlik, hesap kurtarma ve sosyal medya güvenliği hizmetleri kullanım koşulları ve yasal çerçeve.",
  keywords: "kullanım koşulları, hizmet şartları, dijital güvenlik, yasal şartlar",
};

export default function KullanimKosullariPage() {
  return (
    <>
      <Header />
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-blue-600 rounded-2xl">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Kullanım Koşulları
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-600">
            Son Güncelleme: 14 Kasım 2024
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Bu kullanım koşulları, Kiralık Hacker web sitesi ve hizmetlerinin kullanımına ilişkin 
            şartları ve koşulları belirlemektedir. Web sitemizi kullanarak bu koşulları kabul 
            etmiş sayılırsınız.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* 1. Genel Hükümler */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">1. Genel Hükümler ve Tanımlar</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                İşbu Kullanım Koşulları ("Sözleşme"), <strong>Kiralık Hacker</strong> ("Şirket", "biz", "bizim") 
                tarafından sunulan web sitesi ve hizmetlerin kullanımına ilişkin şartları düzenlemektedir.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Önemli Tanımlar:
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Hizmet:</strong> Şirketimiz tarafından sunulan tüm dijital hizmetler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Kullanıcı:</strong> Web sitemizi ziyaret eden veya hizmetlerimizi kullanan kişi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>İçerik:</strong> Web sitesinde yer alan tüm bilgi, metin, görsel ve materyaller</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Hizmetin Kapsamı */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">2. Hizmetin Kapsamı ve Kullanım Şartları</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kiralık Hacker, aşağıdaki hizmetleri sunmaktadır:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Hesap Güvenlik Hizmetleri</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Hesap kurtarma, erişim sağlama ve koruma hizmetleri
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Danışmanlık Hizmetleri</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Dijital güvenlik ve hesap yönetimi danışmanlığı
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Kullanım Koşulu:</p>
                    <p className="text-sm text-gray-800">
                      Hizmetlerimizi yalnızca yasal amaçlar doğrultusunda kullanmayı kabul ediyorsunuz. 
                      Yasadışı, yetkisiz veya bu koşullara aykırı kullanım kesinlikle yasaktır.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Kullanıcı Yükümlülükleri */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">3. Kullanıcı Yükümlülükleri ve Sorumlulukları</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hizmetlerimizi kullanırken aşağıdaki yükümlülüklere uymanız gerekmektedir:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Doğru Bilgi Sağlama</p>
                    <p className="text-gray-700 text-sm mt-1">
                      Kayıt ve hizmet kullanımı sırasında doğru, güncel ve eksiksiz bilgi sağlamak
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Güvenlik</p>
                    <p className="text-gray-700 text-sm mt-1">
                      Hesap bilgilerinizin güvenliğini sağlamak ve yetkisiz erişimi önlemek
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Yasal Uyum</p>
                    <p className="text-gray-700 text-sm mt-1">
                      Tüm yasal düzenlemelere ve bu kullanım koşullarına uygun hareket etmek
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <XCircle className="h-6 w-6 text-red-600" />
                  Yasak Faaliyetler:
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Hizmetleri yasadışı amaçlarla kullanmak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Başkalarının haklarını ihlal etmek</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Sistem güvenliğini tehdit etmek veya zararLı yazılım yaymak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Sahte bilgi veya kimlik kullanmak</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. Fikri Mülkiyet Hakları */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">4. Fikri Mülkiyet Hakları</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Web sitemizdeki tüm içerik, tasarım, logo, metin, grafik, yazılım ve diğer materyaller 
                Kiralık Hacker'ın mülkiyetindedir ve fikri mülkiyet yasaları ile korunmaktadır.
              </p>
              
              <div className="border-l-4 border-blue-600 bg-blue-50 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Lock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Korunan Haklar:</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Telif hakları (copyright)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Marka hakları (trademark)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Tasarım hakları</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Yazılım hakları</span>
                      </li>
                    </ul>
                    <p className="text-gray-800 mt-3">
                      İzinsiz kopyalama, çoğaltma, dağıtma veya ticari kullanım yasaktır.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Gizlilik ve Veri Koruma */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">5. Gizlilik ve Veri Koruma</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kişisel verilerinizin işlenmesi, <strong>Gizlilik Politikamız</strong> ve 
                <strong> KVKK Aydınlatma Metnimiz</strong> kapsamında gerçekleştirilmektedir.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/gizlilik-politikasi" className="block p-6 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Gizlilik Politikası</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Kişisel verilerinizin nasıl toplandığı ve korunduğu hakkında detaylı bilgi
                  </p>
                </a>

                <a href="/kvkk" className="block p-6 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <Scale className="h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">KVKK Aydınlatma Metni</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    KVKK kapsamında haklarınız ve veri işleme prosedürleri
                  </p>
                </a>
              </div>
            </div>

            {/* 6. Sorumluluk Sınırlaması */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">6. Sorumluluk Sınırlaması</h2>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
                <p className="text-gray-800 leading-relaxed">
                  Kiralık Hacker, hizmetlerin kullanımından kaynaklanan dolaylı, arızi, özel veya cezai 
                  zararlardan sorumlu tutulamaz. Hizmetler "olduğu gibi" sunulmaktadır.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Şirketimiz aşağıdaki durumlardan sorumlu değildir:
              </p>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Hizmet kesintileri veya teknik arızalar</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Üçüncü taraf hizmetlerinden kaynaklanan sorunlar</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Kullanıcı hatalarından kaynaklanan veri kayıpları</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Yetkisiz erişim veya güvenlik ihlalleri</span>
                </li>
              </ul>
            </div>

            {/* 7. Hizmet Değişiklikleri */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">7. Hizmet Değişiklikleri ve Sonlandırma</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kiralık Hacker, aşağıdaki haklara sahiptir:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Hizmet Değişiklikleri</p>
                    <p className="text-gray-700 text-sm mt-1">
                      Önceden haber vermeksizin hizmetlerde değişiklik yapma, güncelleme veya iyileştirme
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Askıya Alma</p>
                    <p className="text-gray-700 text-sm mt-1">
                      Bakım, güncelleme veya teknik nedenlerle hizmetleri geçici olarak askıya alma
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
                  <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Sonlandırma</p>
                    <p className="text-gray-700 text-sm mt-1">
                      Kullanım koşullarının ihlali durumunda kullanıcı hesabını veya erişimi sonlandırma
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 8. Uygulanacak Hukuk ve Uyuşmazlık Çözümü */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">8. Uygulanacak Hukuk ve Yetkili Mahkemeler</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-800 leading-relaxed mb-4">
                  Bu Kullanım Koşulları, <strong>Türkiye Cumhuriyeti yasalarına</strong> tabidir ve 
                  Türkiye Cumhuriyeti yasalarına göre yorumlanacaktır.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  İşbu sözleşmeden doğabilecek her türlü uyuşmazlığın çözümünde 
                  <strong> İstanbul Mahkemeleri ve İcra Daireleri</strong> yetkilidir.
                </p>
              </div>
            </div>

            {/* 9. Değişiklikler */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">9. Kullanım Koşullarında Değişiklikler</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Kiralık Hacker, bu Kullanım Koşullarını dilediği zaman değiştirme hakkını saklı tutar. 
                Değişiklikler bu sayfada yayınlandıktan sonra yürürlüğe girer. Önemli değişiklikler 
                durumunda kullanıcılar uygun yöntemlerle bilgilendirilecektir. Hizmetleri kullanmaya 
                devam ederek güncellenmiş koşulları kabul etmiş sayılırsınız.
              </p>
            </div>

            {/* İletişim */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-8 w-8" />
                <h2 className="text-3xl font-bold">İletişim</h2>
              </div>
              <p className="mb-6 text-blue-50">
                Kullanım koşulları hakkında sorularınız veya önerileriniz için bizimle iletişime geçebilirsiniz:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>info@www.falconmedya.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>0534 475 40 86</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>İstanbul, Türkiye</span>
                </div>
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
