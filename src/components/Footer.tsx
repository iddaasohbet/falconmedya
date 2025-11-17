"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image 
                src="/falcon.png" 
                alt="Falcon Media" 
                width={120} 
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Dijital güvenliğiniz için profesyonel çözümler. Hesaplarınızın kontrolünü geri alın, güvende kalın.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Şirket</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/#sss" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Sıkça Sorulan Sorular
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/hizmetler#hesap-kurtarma" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Hesap Kurtarma
                </Link>
              </li>
              <li>
                <Link href="/hizmetler#hesap-erisim" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Hesap Erişim Sağlama
                </Link>
              </li>
              <li>
                <Link href="/hizmetler#hesap-kapatma" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Hesap Kapatma
                </Link>
              </li>
              <li>
                <Link href="/hizmetler#hesap-koruma" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Hesap Koruma
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">İletişim</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@www.falconmedya.com" 
                  className="flex items-start gap-3 text-gray-600 hover:text-blue-600 transition-colors group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Email</div>
                    <div className="font-medium">info@www.falconmedya.com</div>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+905373127839" 
                  className="flex items-start gap-3 text-gray-600 hover:text-blue-600 transition-colors group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Telefon</div>
                    <div className="font-medium">0537 312 78 39</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-600">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Adres</div>
                    <div className="font-medium">İstanbul, Türkiye</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Tüm hakları saklıdır.
            </p>

            <div className="flex gap-6 text-sm">
              <Link href="/gizlilik-politikasi" className="text-gray-600 hover:text-blue-600 transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kvkk" className="text-gray-600 hover:text-blue-600 transition-colors">
                KVKK
              </Link>
              <Link href="/kullanim-kosullari" className="text-gray-600 hover:text-blue-600 transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
