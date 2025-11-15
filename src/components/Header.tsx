"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, MessageCircle } from "lucide-react";

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
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
            <Shield className="h-7 w-7 text-white" />
          </div>
          <div>
            <span className="block text-xl font-bold text-gray-900">
              Falcon Media
            </span>
            <span className="block text-xs text-gray-500">
              Digital Services
            </span>
          </div>
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

      {/* Mobile Menu - Sliding from Right */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-[90]"
              onClick={() => setOpen(false)}
            />

            {/* Menu Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-2xl md:hidden z-[95]"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-bold text-gray-900">Menu</span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
                  <Link
                    href="/"
                    className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                    onClick={() => setOpen(false)}
                  >
                    Ana Sayfa
                  </Link>
                  
                  <Link
                    href="/hizmetler"
                    className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                    onClick={() => setOpen(false)}
                  >
                    Hizmetler
                  </Link>
                  
                  {/* Sub Services */}
                  <div className="pl-4 space-y-1">
                    <Link
                      href="/hizmetler#hesap-kurtarma"
                      className="block py-2 px-4 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      • Hesap Kurtarma
                    </Link>
                    <Link
                      href="/hizmetler#hesap-erisim"
                      className="block py-2 px-4 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      • Hesap Erişim Sağlama
                    </Link>
                    <Link
                      href="/hizmetler#hesap-kapatma"
                      className="block py-2 px-4 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      • Hesap Kapatma
                    </Link>
                    <Link
                      href="/hizmetler#hesap-koruma"
                      className="block py-2 px-4 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      • Hesap Koruma
                    </Link>
                  </div>
                  
                  <Link
                    href="/hakkimizda"
                    className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                    onClick={() => setOpen(false)}
                  >
                    Hakkımızda
                  </Link>
                </nav>

                {/* Menu Footer */}
                <div className="p-6 border-t border-gray-200">
                  <a
                    href="https://wa.me/905373127839?text=Merhaba%2C%20dijital%20g%C3%BCvenlik%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors w-full"
                    onClick={() => setOpen(false)}
                  >
                    <MessageCircle className="h-5 w-5" />
                    Destek
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
