"use client";

import Link from "next/link";
import { Shield, CheckCircle, Lock, Users, TrendingUp, Clock, Award, Star } from "lucide-react";

export default function Hero() {
  const whatsappUrl = "https://wa.me/905373127839?text=" + encodeURIComponent("Merhaba, dijital güvenlik hizmetleriniz hakkında bilgi almak istiyorum.");

  return (
    <section id="anasayfa" className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <Shield className="h-4 w-4" />
              Profesyonel Dijital Güvenlik Uzmanı
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Dijital Güvenlik Uzmanı ile{" "}
              <span className="text-blue-600">
                Instagram Hesap Kurtarma
              </span>{" "}
              ve Sosyal Medya Güvenliği
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              <strong>Profesyonel dijital güvenlik uzmanı</strong> ekibimizle <strong>Instagram hesap kurtarma</strong>, 
              <strong> Facebook hesap kurtarma</strong>, <strong>Twitter hesap kurtarma</strong> ve 
              <strong> sosyal medya güvenliği</strong> hizmetleri. Siber güvenlik danışmanı desteği ile 
              hesaplarınızın kontrolünü geri alın.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white hover:bg-green-700 transition-colors shadow-lg shadow-green-600/30"
              >
                Canlı Destek
              </a>
              <Link
                href="/hizmetler"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-900 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Hizmetleri İncele
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-medium">Güvenilir</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Lock className="h-5 w-5 text-green-500" />
                <span className="font-medium">Gizli</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="h-5 w-5 text-green-500" />
                <span className="font-medium">Profesyonel</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="font-medium">7/24 Destek</span>
              </div>
            </div>
          </div>

          {/* Right Content - Corporate Stats & Info */}
          <div className="relative space-y-6">
            {/* Top Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">%80</div>
                <div className="text-sm text-gray-600 font-medium">Başarı Oranı</div>
                <div className="text-xs text-gray-500 mt-2">Son 30 günde</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 hover:border-green-300 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">7/24</div>
                <div className="text-sm text-gray-600 font-medium">Canlı Destek</div>
                <div className="text-xs text-gray-500 mt-2">Kesintisiz hizmet</div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Güvenlik Garantisi</h3>
                  <p className="text-sm text-gray-600">Sertifikalı uzman ekip</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">KVKK Uyumlu</p>
                    <p className="text-xs text-gray-600">Kişisel veri güvenliği</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">SSL Şifreleme</p>
                    <p className="text-xs text-gray-600">256-bit güvenlik</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Yasal Prosedür</p>
                    <p className="text-xs text-gray-600">Resmi süreçler</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Info Card */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 shadow-xl text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Award className="h-6 w-6" />
                  <span className="font-bold text-lg">Müşteri Memnuniyeti</span>
                </div>
                <div className="flex gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">9654+</p>
                  <p className="text-sm text-blue-100">Tamamlanan İşlem</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">115+</p>
                  <p className="text-sm text-blue-100">Günlük İşlem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
}
