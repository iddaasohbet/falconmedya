import { Shield, Mail, Phone, MapPin, Lock, Users, FileText, CheckCircle, AlertCircle, Clock, Server, Key } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Gizlilik Politikası | KVKK Uyumlu Dijital Güvenlik",
  description: "Falcon Media gizlilik politikası. Dijital güvenlik uzmanı olarak kişisel verilerinizin korunması ve KVKK uyumlu veri işleme prosedürlerimiz hakkında detaylı bilgi.",
  keywords: "gizlilik politikası, KVKK, kişisel veri koruması, dijital güvenlik, veri güvenliği",
};

export default function GizlilikPolitikasiPage() {
  return (
    <>
      <Header />
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-blue-600 rounded-2xl">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Gizlilik Politikası
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-600">
            Son Güncelleme: 14 Kasım 2024
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Falcon Media olarak, kişisel verilerinizin güvenliğine ve gizliliğine büyük önem veriyoruz. 
            Bu gizlilik politikası, hizmetlerimizi kullanırken kişisel verilerinizin nasıl toplandığını, 
            kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.
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
                <h2 className="text-3xl font-bold text-gray-900">1. Veri Sorumlusu</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, 
                kişisel verileriniz veri sorumlusu sıfatıyla <strong>Falcon Media</strong> tarafından 
                aşağıda açıklanan şartlar ve amaçlar dahilinde işlenmektedir.
              </p>
              <div className="bg-gray-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="font-semibold text-gray-900 mb-4">İletişim Bilgileri:</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span><strong>Adres:</strong> İstanbul, Türkiye</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span><strong>E-posta:</strong> info@falconmedia.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span><strong>Telefon:</strong> 0537 312 78 39</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Toplanan Kişisel Veriler */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">2. Toplanan Kişisel Veriler</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hizmetlerimizi kullanırken aşağıdaki kategorilerde kişisel verileriniz toplanabilir:
              </p>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Kimlik Bilgileri</h3>
                      <p className="text-gray-700">Ad, soyad, T.C. kimlik numarası (gerekli durumlarda)</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Phone className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">İletişim Bilgileri</h3>
                      <p className="text-gray-700">E-posta adresi, telefon numarası, adres bilgileri</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Key className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Hesap Bilgileri</h3>
                      <p className="text-gray-700">Sosyal medya hesap bilgileri, kullanıcı adları (hizmet kapsamında)</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <FileText className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">İşlem Bilgileri</h3>
                      <p className="text-gray-700">Hizmet talep bilgileri, işlem geçmişi, ödeme bilgileri</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Server className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Teknik Veriler</h3>
                      <p className="text-gray-700">IP adresi, çerez verileri, tarayıcı bilgileri, cihaz bilgileri</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Kişisel Verilerin İşlenme Amaçları */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">3. Kişisel Verilerin İşlenme Amaçları</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Hizmet sözleşmelerinin kurulması ve ifası</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Müşteri hizmetleri ve destek süreçlerinin yürütülmesi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Hesap kurtarma, güvenlik ve erişim hizmetlerinin sağlanması</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Yasal yükümlülüklerin yerine getirilmesi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>İletişim faaliyetlerinin yürütülmesi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Bilgi güvenliğinin sağlanması</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Hizmet kalitesinin artırılması ve analiz yapılması</span>
                </li>
              </ul>
            </div>

            {/* 4. Veri Güvenliği */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">4. Veri Güvenliği</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Falcon Media olarak, kişisel verilerinizin güvenliğini sağlamak için 
                teknik ve idari tedbirler almaktayız:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Server className="h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Teknik Önlemler</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>SSL/TLS şifreleme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Güvenli sunucu altyapısı</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Düzenli güvenlik güncellemeleri</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Firewall koruması</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">İdari Önlemler</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Erişim yetkilendirme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Veri minimizasyonu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Gizlilik sözleşmeleri</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Personel eğitimleri</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Kişisel Veri Sahibinin Hakları */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">5. Kişisel Veri Sahibinin Hakları</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                KVKK'nın 11. maddesi uyarınca, kişisel veri sahipleri olarak aşağıdaki haklara sahipsiniz:
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <p className="text-gray-800">Kişisel verilerinizin işlenip işlenmediğini öğrenme</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <p className="text-gray-800">Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <p className="text-gray-800">Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <p className="text-gray-800">Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <p className="text-gray-800">Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</p>
                </div>
              </div>
            </div>

            {/* İletişim */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-8 w-8" />
                <h2 className="text-3xl font-bold">İletişim</h2>
              </div>
              <p className="mb-6 text-blue-50">
                Gizlilik politikamız veya kişisel verilerinizin işlenmesi hakkında sorularınız için 
                bizimle iletişime geçebilirsiniz:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>info@falconmedia.com</span>
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
