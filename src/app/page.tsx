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
        "@id": "https://falconmedia.com/#organization",
        name: "Falcon Media",
        url: "https://falconmedia.com",
        logo: {
          "@type": "ImageObject",
          url: "https://falconmedia.com/logo.png",
        },
        description: "Dijital güvenlik uzmanı ekibimizle Instagram hesap kurtarma, Facebook hesap kurtarma ve sosyal medya güvenliği hizmetleri",
        address: {
          "@type": "PostalAddress",
          addressLocality: "İstanbul",
          addressCountry: "TR",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+90-537-312-78-39",
          contactType: "customer service",
          email: "info@falconmedia.com",
          areaServed: "TR",
          availableLanguage: ["Turkish"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://falconmedia.com/#website",
        url: "https://falconmedia.com",
        name: "Falcon Media - Dijital Güvenlik Uzmanı",
        description: "Instagram hesap kurtarma, Facebook hesap kurtarma ve dijital güvenlik hizmetleri",
        publisher: {
          "@id": "https://falconmedia.com/#organization",
        },
        inLanguage: "tr-TR",
      },
      {
        "@type": "Service",
        serviceType: "Dijital Güvenlik ve Hesap Kurtarma Hizmetleri",
        provider: {
          "@id": "https://falconmedia.com/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "Turkey",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dijital Güvenlik Hizmetleri",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Instagram Hesap Kurtarma",
                description: "Instagram hesap kurtarma ve erişim sağlama hizmeti",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Facebook Hesap Kurtarma",
                description: "Facebook hesap kurtarma ve güvenlik hizmeti",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sosyal Medya Güvenliği",
                description: "Sosyal medya hesap güvenliği ve koruma hizmetleri",
              },
            },
          ],
        },
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

