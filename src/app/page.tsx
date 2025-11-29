import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.falconmedya.com/#organization",
        name: "Kiralık Hacker - Profesyonel Dijital Güvenlik Uzmanı",
        alternateName: [
          "Profesyonel Hacker Kirala",
          "Güvenilir Hacker Bul",
          "Beyaz Şapkalı Hacker Türkiye",
          "Etik Hacker Hizmetleri",
          "Siber Güvenlik Uzmanı"
        ],
        url: "https://www.falconmedya.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.falconmedya.com/logo.png",
          width: 250,
          height: 60,
        },
        description: "🔥 Profesyonel kiralık hacker, güvenilir hacker bul. Instagram hesabı çalındı, Facebook hesap kurtarma, WhatsApp, Gmail, TikTok hesap kurtarma hizmetleri. Beyaz şapkalı hacker (white hat hacker), etik hacker, siber güvenlik uzmanı. Web sitesi hacklendi çözümü, DDoS koruma, veri kurtarma, penetrasyon testi. İstanbul, Ankara, İzmir siber güvenlik danışmanlığı. 7/24 profesyonel destek.",
        slogan: "Dijital Güvenliğiniz Bizim İşimiz",
        foundingDate: "2019",
        address: {
          "@type": "PostalAddress",
          addressLocality: "İstanbul",
          addressRegion: "İstanbul",
          addressCountry: "TR",
          areaServed: ["İstanbul", "Ankara", "İzmir", "Türkiye"],
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+90-534-475-40-86",
            contactType: "customer service",
            email: "info@www.falconmedya.com",
            areaServed: "TR",
            availableLanguage: ["Turkish", "English"],
            hoursAvailable: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
          },
          {
            "@type": "ContactPoint",
            contactType: "technical support",
            telephone: "+90-534-475-40-86",
            areaServed: "TR",
            availableLanguage: ["Turkish"],
          }
        ],
        sameAs: [
          "https://www.instagram.com/kiralikhacker",
          "https://www.facebook.com/kiralikhacker",
          "https://twitter.com/KiralikHacker",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "967",
          bestRating: "5",
          worstRating: "1"
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.falconmedya.com/#website",
        url: "https://www.falconmedya.com",
        name: "Kiralık Hacker - Dijital Güvenlik Uzmanı",
        description: "Instagram hesap kurtarma, Facebook hesap kurtarma ve dijital güvenlik hizmetleri",
        publisher: {
          "@id": "https://www.falconmedya.com/#organization",
        },
        inLanguage: "tr-TR",
      },
      {
        "@type": "Service",
        serviceType: "Profesyonel Dijital Güvenlik, Siber Güvenlik ve Sosyal Medya Hesap Kurtarma Hizmetleri",
        provider: {
          "@id": "https://www.falconmedya.com/#organization",
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Turkey",
          },
          {
            "@type": "City",
            name: "İstanbul",
          },
          {
            "@type": "City",
            name: "Ankara",
          },
          {
            "@type": "City",
            name: "İzmir",
          }
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dijital Güvenlik ve Hesap Kurtarma Hizmetleri",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Instagram Hesap Kurtarma - Instagram Hesabı Çalındı",
                description: "Instagram hesabı çalındı, Instagram şifre kurtarma, Instagram hesabım kapandı sorunlarına profesyonel çözüm. Çalınan Instagram hesabını geri alma hizmeti.",
                provider: {
                  "@id": "https://www.falconmedya.com/#organization"
                }
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Facebook Hesap Kurtarma - Facebook Hesabım Çalındı",
                description: "Facebook hesabım çalındı, Facebook şifre kurtarma, Facebook hesap geri kazanma hizmeti. Profesyonel Facebook güvenlik desteği.",
                provider: {
                  "@id": "https://www.falconmedya.com/#organization"
                }
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "WhatsApp Hesap Kurtarma - WhatsApp Çalındı",
                description: "WhatsApp hesap çalındı, WhatsApp hacklendi sorunlarına acil müdahale ve kurtarma hizmeti.",
                provider: {
                  "@id": "https://www.falconmedya.com/#organization"
                }
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Gmail Hesap Kurtarma - Gmail Şifre Kurtarma",
                description: "Gmail hesap kurtarma, Gmail şifre sıfırlama, Google hesap erişim sağlama hizmeti.",
                provider: {
                  "@id": "https://www.falconmedya.com/#organization"
                }
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Profesyonel Hacker Kirala - Beyaz Şapkalı Hacker",
                description: "Profesyonel hacker kirala, güvenilir beyaz şapkalı hacker (white hat hacker), etik hacker hizmetleri. Siber güvenlik uzmanı desteği.",
                provider: {
                  "@id": "https://www.falconmedya.com/#organization"
                }
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web Sitesi Güvenlik - Web Sitesi Hacklendi Çözümü",
                description: "Web sitesi hacklendi ne yapmalı? Web sitesi güvenlik testi, zararlı yazılım temizleme, DDoS koruma hizmeti.",
                provider: {
                  "@id": "https://www.falconmedya.com/#organization"
                }
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Siber Güvenlik Danışmanlığı - Penetrasyon Testi",
                description: "Siber güvenlik danışmanlığı, penetrasyon testi, sızma testi hizmeti, dijital güvenlik analizi.",
                provider: {
                  "@id": "https://www.falconmedya.com/#organization"
                }
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Veri Kurtarma - Ransomware Kaldırma",
                description: "Veri kurtarma uzmanı, ransomware kaldırma, silinmiş veri kurtarma, şifreli dosya açma hizmeti.",
                provider: {
                  "@id": "https://www.falconmedya.com/#organization"
                }
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sosyal Medya Güvenliği - Hesap Koruma",
                description: "Sosyal medya hesap güvenliği, hesap koruma hizmeti, 2FA kurulumu, şantaj ve tehdit durumlarına müdahale.",
                provider: {
                  "@id": "https://www.falconmedya.com/#organization"
                }
              },
            },
          ],
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "TRY",
          lowPrice: "500",
          highPrice: "15000",
          offerCount: "9"
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Instagram hesabım çalındı ne yapmalıyım?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Instagram hesabınız çalındıysa hemen profesyonel bir dijital güvenlik uzmanına başvurmalısınız. Kiralık Hacker ekibi olarak Instagram hesap kurtarma hizmetimizle çalınan hesapları 24-48 saat içinde geri alıyoruz."
            }
          },
          {
            "@type": "Question",
            name: "Profesyonel hacker kirala güvenli mi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Beyaz şapkalı hacker (white hat hacker) ve etik hacker hizmetleri yasal ve güvenlidir. Kiralık Hacker olarak tüm işlemlerimizi yasal sınırlar içinde gerçekleştiriyoruz."
            }
          },
          {
            "@type": "Question",
            name: "Web sitesi hacklendi ne yapmalıyım?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Web sitesi hacklendiyse acil olarak uzman desteği almalısınız. Zararlı yazılım temizleme, güvenlik açığı kapatma ve DDoS koruma hizmetlerimizle sitenizi güvence altına alıyoruz."
            }
          },
          {
            "@type": "Question",
            name: "Hacker bul nasıl güvenilir hacker bulunur?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Güvenilir hacker bulmak için referansları olan, kurumsal çalışan ve yasal prosedürlere uyan firmalardan destek almalısınız. Kiralık Hacker olarak 7/24 profesyonel ve güvenilir hizmet sunuyoruz."
            }
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.falconmedya.com/#professional-service",
        name: "Kiralık Hacker - Siber Güvenlik Uzmanı",
        image: "https://www.falconmedya.com/logo.png",
        priceRange: "₺₺",
        telephone: "+90-534-475-40-86",
        address: {
          "@type": "PostalAddress",
          addressLocality: "İstanbul",
          addressCountry: "TR"
        }
      },
    ],
  };

  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white">
        <Header />
        <main>
          <Hero />
          <Services />
          <Stats />
          <FAQ />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

