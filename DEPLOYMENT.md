# Falcon Media - Deployment Guide

## 🚀 GitHub'a Push ve Vercel Deployment

### 1. Git Başlatma ve GitHub'a Push

```bash
# Git başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit - Falcon Media website"

# GitHub remote ekle
git remote add origin https://github.com/iddaasohbet/falconmedya.git

# Main branch oluştur ve push et
git branch -M main
git push -u origin main
```

### 2. Vercel'de Deployment

#### Otomatik Yöntem (Önerilen):

1. **Vercel'e Giriş Yap**: https://vercel.com/login
2. **New Project** tıkla
3. **Import Git Repository** seç
4. GitHub hesabını bağla
5. **iddaasohbet/falconmedya** repository'sini seç
6. **Deploy** butonuna tıkla

#### Ayarlar:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 3. Environment Variables (Opsiyonel)

Vercel dashboard'da şu env variable'ları ekleyebilirsin:

```
NEXT_PUBLIC_SITE_URL=https://falconmedya.vercel.app
NEXT_PUBLIC_PHONE=905373127839
NEXT_PUBLIC_EMAIL=info@falconmedia.com
```

### 4. Domain Ayarları

Vercel'de özel domain bağlamak için:
1. **Settings** > **Domains**
2. Domain adını ekle
3. DNS ayarlarını güncelle

### 5. Site Özellikleri

✅ **SEO Optimize** - Google'da üst sıralarda
✅ **Responsive** - Tüm cihazlarda çalışır
✅ **HTTPS** - Vercel otomatik SSL sertifikası
✅ **CDN** - Dünya çapında hızlı
✅ **Analytics** - Vercel Analytics kullanılabilir

## 📱 Canlı Site

Push işleminden sonra site otomatik olarak şu adreste yayında olacak:
**https://falconmedya.vercel.app**

## 🔄 Güncellemeler

Kod değişikliklerinden sonra:

```bash
git add .
git commit -m "Update: açıklama"
git push
```

Vercel otomatik olarak yeni versiyonu deploy eder! 🚀

## 📞 İletişim

- **Tel:** 0537 312 78 39
- **Email:** info@falconmedia.com

