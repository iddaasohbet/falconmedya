import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Hacker Kirala | Kiralık Hacker | Beyaz Şapkalı Hacker | Dijital Güvenlik Uzmanı | Etik Hacker - Falcon Media",
    template: "%s | Falcon Media - Hacker Kirala | Kiralık Hacker",
  },
  description:
    "Hacker kirala, kiralık hacker, beyaz şapkalı hacker ve etik hacker hizmetleri. Instagram hesap kurtarma, Facebook hesap kurtarma, sosyal medya güvenliği, siber güvenlik danışmanlığı. Dijital güvenlik uzmanı ekibimizle 7/24 profesyonel destek. Tel: 0537 312 78 39",
  keywords: [
    "hacker kirala",
    "kiralık hacker",
    "hacker bul",
    "hacker arıyorum",
    "beyaz şapkalı hacker",
    "etik hacker",
    "white hat hacker",
    "hacker hire",
    "professional hacker",
    "güvenlik uzmanı kirala",
    "siber güvenlik uzmanı kirala",
    "penetration tester kirala",
    "sızma testi uzmanı",
    "dijital güvenlik uzmanı",
    "hesap kurtarma uzmanı",
    "instagram hesap kurtarma",
    "facebook hesap kurtarma",
    "twitter hesap kurtarma",
    "sosyal medya güvenliği",
    "siber güvenlik danışmanı",
    "hesap güvenlik uzmanı",
    "hesap erişim sağlama",
    "hesap koruma hizmeti",
    "dijital güvenlik danışmanlığı",
    "sosyal medya uzmanı",
    "hesap kurtarma hizmeti",
    "güvenlik danışmanı",
    "siber güvenlik",
    "penetration tester",
    "hesap güvenliği uzmanı",
    "siber güvenlik hizmeti",
    "bilgi güvenliği danışmanı",
  ],
  authors: [{ name: "Falcon Media - Dijital Güvenlik Uzmanı" }],
  creator: "Falcon Media",
  publisher: "Falcon Media",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Hacker Kirala | Kiralık Hacker | Beyaz Şapkalı Hacker | Etik Hacker",
    description: "Hacker kirala, kiralık hacker, beyaz şapkalı hacker. Instagram, Facebook, Twitter hesap kurtarma ve dijital güvenlik hizmetleri. Profesyonel ekip, 7/24 destek.",
    url: "https://www.falconmedya.com",
    siteName: "Falcon Media",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="overflow-x-hidden scrollbar-custom">
      <head>
        <meta name="google-site-verification" content="I7woP0fDiHutNVU5IdNcavjq8WLw_kw3JsZNhhMSKlw" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

