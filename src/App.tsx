import React, { useState, useEffect } from 'react';
import { Language, ProductItem } from './types';
import { TRANSLATIONS, BRAND_COLORS } from './data/content';
import { Header } from './components/Header';
import { ProfileSection } from './components/ProfileSection';
import { SocialPills } from './components/SocialPills';
import { HeroActionCard } from './components/HeroActionCard';
import { ProductSection } from './components/ProductSection';
import { LiquidSoapSection } from './components/LiquidSoapSection';
import { StoryCard } from './components/StoryCard';
import { WhatsAppCards } from './components/WhatsAppCards';
import { FoundersSection } from './components/FoundersSection';
import { InstagramGrid } from './components/InstagramGrid';
import { BioModal } from './components/BioModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QrCodeModal } from './components/QrCodeModal';
import { Footer } from './components/Footer';
import { Check } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [isBioOpen, setIsBioOpen] = useState<boolean>(false);
  const [isQrOpen, setIsQrOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load language preference from browser or default to pt
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('auravegana_lang') as Language;
      if (savedLang === 'pt' || savedLang === 'en') {
        setLang(savedLang);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSelectLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('auravegana_lang', newLang);
    } catch {
      // ignore
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleShare = async () => {
    const shareData = {
      title: "Aura Vegana",
      text:
        lang === 'pt'
          ? "Conheça os cosméticos naturais, veganos e artesanais da Aura Vegana!"
          : "Discover natural, vegan and artisan cosmetics by Aura Vegana!",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast(TRANSLATIONS[lang].copiedToast);
    } catch {
      showToast(window.location.href);
    }
  };

  return (
    <div
      id="app-root-container"
      className="min-h-screen w-full bg-[#F8EFE3] text-[#4A3612] flex justify-center items-start sm:py-6 selection:bg-[#59572D] selection:text-[#F8EFE3] relative overflow-x-hidden"
    >
      {/* Background Ambience / Botanical Soft Organic Lighting using palette colors */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Forest Moss Olive top glow (#59572D) */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-gradient-to-b from-[#59572D]/12 via-[#59572D]/4 to-transparent blur-3xl" />
        {/* Earthy Warm Bronze center ambient glow (#4A3612) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#4A3612]/6 blur-3xl rounded-full" />
        {/* Sage Olive bottom glow (#716E41) */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-[#716E41]/8 blur-3xl" />
      </div>

      {/* Centered Mobile Device Frame with Olive Contour and Cream Canvas */}
      <main
        id="main-mobile-wrapper"
        className="w-full max-w-[440px] min-h-screen sm:min-h-0 bg-[#FCF8F2] relative z-10 px-4 sm:px-5 py-5 flex flex-col items-center rounded-none sm:rounded-[42px] border-y sm:border-[2.5px] border-[#59572D] shadow-none sm:shadow-[0_15px_50px_rgba(89,87,45,0.12),0_4px_12px_rgba(0,0,0,0.04)] sm:ring-4 sm:ring-[#59572D]/15 transition-all"
      >
        {/* Top Header with Order Tag */}
        <Header
          lang={lang}
          onSelectLang={handleSelectLang}
          onOpenQr={() => setIsQrOpen(true)}
          onShare={handleShare}
        />

        {/* Profile / Avatar (Aura Vegana) / Typography / Badges */}
        <ProfileSection
          lang={lang}
          onOpenBioModal={() => setIsBioOpen(true)}
        />

        {/* Social Icons Bar (Instagram, Loja Virtual, WhatsApp) */}
        <SocialPills lang={lang} />

        {/* Highlight Hero Action Card: Loja Virtual Nuvemshop & Faça seu Pedido */}
        <HeroActionCard lang={lang} />

        {/* Product Specialties Carousel / Grid */}
        <ProductSection
          lang={lang}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
        />

        {/* Liquid Soaps Highlight Block */}
        <LiquidSoapSection lang={lang} />

        {/* Story / Aura Vegana Concept & 4 Pillars Card */}
        <StoryCard
          lang={lang}
          onOpenBioModal={() => setIsBioOpen(true)}
        />

        {/* Direct Concierge & Store Notice */}
        <WhatsAppCards lang={lang} />

        {/* Founders Story Section: Laura & Rhuana */}
        <FoundersSection lang={lang} />

        {/* Instagram Grid Showcase (@auraveganacosmeticos) */}
        <InstagramGrid lang={lang} />

        {/* Footer with Easy Byz Creator Logo */}
        <Footer lang={lang} />
      </main>

      {/* Full Bio / Story Modal */}
      <BioModal
        isOpen={isBioOpen}
        lang={lang}
        onClose={() => setIsBioOpen(false)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        lang={lang}
        onClose={() => setSelectedProduct(null)}
      />

      {/* QR Code Modal */}
      <QrCodeModal
        isOpen={isQrOpen}
        lang={lang}
        onClose={() => setIsQrOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div
          id="toast-notification"
          className="fixed bottom-6 z-50 px-4 py-2.5 rounded-full text-[#F8EFE3] border border-[#59572D] shadow-2xl flex items-center gap-2 text-xs font-semibold animate-in slide-in-from-bottom-4 duration-200"
          style={{ backgroundColor: BRAND_COLORS.primary }}
        >
          <Check className="w-4 h-4 text-[#F8EFE3]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
