import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, BRAND_COLORS, CONTACT_LINKS } from '../data/content';
import { X, Copy, Check, QrCode } from 'lucide-react';

interface QrCodeModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
}

export const QrCodeModal: React.FC<QrCodeModalProps> = ({
  isOpen,
  lang,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang];
  const currentUrl = typeof window !== 'undefined' ? window.location.href : CONTACT_LINKS.shopUrl;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
    currentUrl
  )}&bgcolor=ffffff&color=59572D&margin=1`;

  return (
    <div
      id="qr-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="qr-modal-content"
        className="relative w-full max-w-xs bg-white border border-[#d9cfbe] rounded-3xl p-6 shadow-2xl text-center text-[#4A3612]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-qr-modal"
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[#faf6f0] hover:bg-[#59572D] text-[#4A3612] hover:text-[#F8EFE3] flex items-center justify-center border border-[#d9cfbe] transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Icon */}
        <div
          className="w-12 h-12 rounded-2xl text-white flex items-center justify-center mx-auto mb-3 shadow-md"
          style={{ backgroundColor: BRAND_COLORS.primary }}
        >
          <QrCode className="w-6 h-6 text-[#F8EFE3]" />
        </div>

        <h3 className="text-base font-bold text-[#4A3612] mb-1">
          {t.qrCodeTitle}
        </h3>
        <p className="text-xs text-[#716E41] mb-4">
          {t.qrCodeSubtitle}
        </p>

        {/* QR Frame */}
        <div className="p-3 bg-[#faf6f0] rounded-2xl shadow-inner inline-block mx-auto mb-4 border border-[#d9cfbe]">
          <img
            src={qrImageUrl}
            alt="Aura Vegana QR Code"
            className="w-44 h-44 object-contain rounded-lg"
            loading="eager"
          />
        </div>

        {/* Copy Link Button */}
        <button
          id="btn-copy-qr-link"
          type="button"
          onClick={handleCopy}
          className="w-full py-2.5 px-3 rounded-xl bg-[#faf6f0] hover:bg-[#59572D] text-[#4A3612] hover:text-[#F8EFE3] text-xs font-bold flex items-center justify-center gap-2 border border-[#d9cfbe] transition-all shadow-2xs cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-[#59572D]" />
              <span className="text-[#59572D]">{lang === 'pt' ? 'Copiado!' : 'Copied!'}</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>{lang === 'pt' ? 'Copiar Link' : 'Copy Link'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
