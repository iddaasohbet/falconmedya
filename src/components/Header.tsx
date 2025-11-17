"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-[100] w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-sm"
          : "border-b border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Falcon Media" 
            width={240} 
            height={96}
            className="h-12 w-auto"
            quality={100}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/hizmetler"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Hizmetler
          </Link>
          <Link
            href="/hakkimizda"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Hakkımızda
          </Link>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://wa.me/905373127839?text=Merhaba%2C%20dijital%20g%C3%BCvenlik%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            <MessageCircle className="h-4 w-4" />
            Destek
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu - Simple Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-200 bg-white md:hidden"
          >
            <div className="px-6 py-4 space-y-3">
              <Link
                href="/"
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setOpen(false)}
              >
                Ana Sayfa
              </Link>
              
              <div>
                <Link
                  href="/hizmetler"
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setOpen(false)}
                >
                  Hizmetler
                </Link>
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/hizmetler#hesap-kurtarma"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    • Hesap Kurtarma
                  </Link>
                  <Link
                    href="/hizmetler#hesap-erisim"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    • Hesap Erişim Sağlama
                  </Link>
                  <Link
                    href="/hizmetler#hesap-kapatma"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    • Hesap Kapatma
                  </Link>
                  <Link
                    href="/hizmetler#hesap-koruma"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    • Hesap Koruma
                  </Link>
                </div>
              </div>

              <Link
                href="/hakkimizda"
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setOpen(false)}
              >
                Hakkımızda
              </Link>

              <a
                href="https://wa.me/905373127839?text=Merhaba%2C%20dijital%20g%C3%BCvenlik%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors w-full mt-4"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                Destek
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
