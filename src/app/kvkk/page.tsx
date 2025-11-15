import { Shield, FileText, Users, Lock, Mail, Phone, MapPin, CheckCircle, AlertTriangle, BookOpen, Scale, Eye, Database } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "KVKK Aydınlatma Metni | Kişisel Veri Koruma",
  description: "Falcon Media KVKK aydınlatma metni. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında dijital güvenlik hizmetlerinde kişisel veri işleme prosedürleri ve haklarınız.",
  keywords: "KVKK, kişisel verilerin korunması, veri güvenliği, dijital güvenlik, kişisel veri hakları",
};

export default function KVKKPage() {
  return (
    <>
      <Header />
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-blue-600 rounded-2xl">
              <Scale className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                KVKK Aydınlatma Metni
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-600">
            6698 Sayılı Kişisel Verilerin Korunması Kanunu Kapsamında Bilgilendirme
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Falcon Media olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında 
            kişisel verilerinizin işlenmesine ilişkin aydınlatma yükümlülüğümüzü yerine getirmek amacıyla 
            bu metni hazırlamış bulunmaktayız.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* 1. Veri Sorumlusu */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">1. Veri Sorumlusu ve Temsilcisi</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                KVKK uyarınca, kişisel verileriniz; veri sorumlusu sıfatıyla <strong>Falcon Media</strong> 
                ("Şirket") tarafından aşağıda açıklanan kapsamda işlenebilecektir.
              </p>
              <div className="bg-gray-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="font-semibold text-gray-900 mb-4">Veri Sorumlusu İletişim Bilgileri:</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span><strong>Adres:</strong> İstanbul, Türkiye</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span><strong>E-posta:</strong> info@www.falconmedya.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span><strong>Telefon:</strong> 0537 312 78 39</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Kişisel Verilerin İşlenme Amaçları */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">2. Kişisel Verilerin İşlenme Amaçları ve Hukuki Sebepleri</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kişisel verileriniz, KVKK'nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları 
                ve amaçları dahilinde aşağıdaki hallerde işlenmektedir:
              </p>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Sözleşmenin İfası</h3>
                      <p className="text-gray-700">
                        Hizmet sözleşmesinin kurulması ve ifası için gerekli olan kişisel verilerin işlenmesi
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Scale className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Yasal Yükümlülük</h3>
                      <p className="text-gray-700">
                        Kanunlarda açıkça öngörülmüş olan hallerde yasal yükümlülüklerin yerine getirilmesi
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Meşru Menfaat</h3>
                      <p className="text-gray-700">
                        Veri sorumlusunun veya üçüncü kişinin meşru menfaatleri için veri işlenmesinin zorunlu olması
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <FileText className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Açık Rıza</h3>
                      <p className="text-gray-700">
                        İlgili kişinin açık rızasının bulunması halinde kişisel verilerin işlenmesi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. İşlenen Kişisel Veri Kategorileri */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">3. İşlenen Kişisel Veri Kategorileri</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Şirketimiz tarafından işlenen kişisel veri kategorileri:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Kimlik Verisi</h4>
                  </div>
                  <p className="text-gray-700 text-sm">Ad, soyad, T.C. kimlik numarası, doğum tarihi</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">İletişim Verisi</h4>
                  </div>
                  <p className="text-gray-700 text-sm">Telefon, e-posta, adres bilgileri</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Müşteri İşlem Verisi</h4>
                  </div>
                  <p className="text-gray-700 text-sm">Hizmet talepleri, işlem geçmişi</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Güvenlik Verisi</h4>
                  </div>
                  <p className="text-gray-700 text-sm">IP adresi, şifre, log kayıtları</p>
                </div>
              </div>
            </div>

            {/* 4. Kişisel Verilerin Aktarımı */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">4. Kişisel Verilerin Aktarılması</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Toplanan kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde belirtilen kişisel veri 
                işleme şartları ve amaçları çerçevesinde aktarılabilmektedir:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  Yurt İçinde Aktarım
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm ml-7">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>İş ortaklarımız ve hizmet sağlayıcılarımız</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Yasal yükümlülük kapsamında resmi kurumlar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Ödeme kuruluşları ve bankalar</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  Yurt Dışına Aktarım
                </h4>
                <p className="text-gray-700 text-sm ml-7">
                  Kişisel verilerinizin yurt dışına aktarılması durumunda, KVKK'nın 9. maddesinde 
                  belirtilen şartlara uygun olarak ve Kişisel Verileri Koruma Kurulu tarafından 
                  yeterli korumaya sahip olduğu ilan edilen ülkelere veya yeterli korumanın 
                  yazılı olarak taahhüt edildiği ülkelere aktarım yapılacaktır.
                </p>
              </div>
            </div>

            {/* 5. Kişisel Veri Toplamanın Yöntemi */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kişisel verileriniz, aşağıdaki yöntemler ile toplanmaktadır:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Web sitesi, mobil uygulama ve dijital platformlar üzerinden</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>E-posta, telefon ve diğer iletişim kanalları</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Sözleşme ve form doldurma süreçleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Hizmet kullanımı sırasında otomatik olarak</span>
                </li>
              </ul>
            </div>

            {/* 6. Haklarınız */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">6. Kişisel Veri Sahibi Olarak Haklarınız</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                KVKK'nın 11. maddesi gereğince, kişisel veri sahipleri olarak aşağıdaki haklara sahipsiniz:
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">a</div>
                  <p className="text-gray-800 pt-2">Kişisel veri işlenip işlenmediğini öğrenme</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">b</div>
                  <p className="text-gray-800 pt-2">Kişisel verileri işlenmişse buna ilişkin bilgi talep etme</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">c</div>
                  <p className="text-gray-800 pt-2">Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">d</div>
                  <p className="text-gray-800 pt-2">Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">e</div>
                  <p className="text-gray-800 pt-2">Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">f</div>
                  <p className="text-gray-800 pt-2">KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">g</div>
                  <p className="text-gray-800 pt-2">Düzeltme, silme veya yok edilme taleplerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">h</div>
                  <p className="text-gray-800 pt-2">İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonuç doğmasına itiraz etme</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">i</div>
                  <p className="text-gray-800 pt-2">Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</p>
                </div>
              </div>
            </div>

            {/* 7. Başvuru Hakkı */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">7. Başvuru Hakkının Kullanımı</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Yukarıda belirtilen haklarınızı kullanmak için kimliğinizi tespit edici gerekli bilgiler 
                ile kullanmak istediğiniz hakkınıza yönelik açıklamalarınızı içeren talebinizi aşağıdaki 
                yöntemlerle Şirketimize iletebilirsiniz:
              </p>
              
              <div className="bg-white border-2 border-blue-600 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                  Başvuru Yöntemleri:
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">E-Posta ile Başvuru</p>
                      <p className="text-gray-700 text-sm mt-1">
                        Kayıtlı Elektronik Posta (KEP) adresi kullanarak veya Şirketimize daha önce 
                        bildirdiğiniz e-posta adresini kullanarak: <strong>info@www.falconmedya.com</strong>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Yazılı Olarak Başvuru</p>
                      <p className="text-gray-700 text-sm mt-1">
                        İmzalı bir dilekçe ile noter kanalıyla veya iadeli taahhütlü mektup ile: 
                        <strong>İstanbul, Türkiye</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Şahsen Başvuru</p>
                      <p className="text-gray-700 text-sm mt-1">
                        Kimlik tespitine olanak sağlayıcı bilgi ve belgeler ile birlikte şahsen 
                        başvuru yapılabilir
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Başvuru Değerlendirme Süreci</p>
                      <p className="text-sm text-gray-800">
                        Başvurunuzun niteliğine göre talebiniz en geç 30 (otuz) gün içinde ücretsiz olarak 
                        sonuçlandırılacaktır. Ancak, işlemin ayrı bir maliyeti gerektirmesi hâlinde, 
                        Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilecektir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* İletişim */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="h-8 w-8" />
                <h2 className="text-3xl font-bold">İletişim Bilgileri</h2>
              </div>
              <p className="mb-6 text-blue-50">
                KVKK kapsamında sorularınız veya talepleriniz için bizimle iletişime geçebilirsiniz:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>info@www.falconmedya.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>0537 312 78 39</span>
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
