import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Next.js 16'da bodySizeLimit experimental özelliği desteklenmiyor
  // Büyük dosya yüklemeleri için API route'larda yapılandırma yapılmalı
};

export default nextConfig;

