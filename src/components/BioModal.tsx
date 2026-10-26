import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, ASSETS, CONTACT_LINKS, BRAND_COLORS } from '../data/content';
import { X, Sparkles, ExternalLink, Leaf, ShoppingBag, MessageCircle } from 'lucide-react';

interface BioModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
}

export const BioModal: React.FC<BioModalProps> = ({
  isOpen,
  lang,
  onClose,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang];
  const bio = t.bioModal;

  const waUrl = `https://wa.me/${CONTACT_LINKS.whatsappNumber}?text=${encodeURIComponent(
    lang === 'pt'
      ? 'Olá! Estava navegando na história da Aura Vegana e gostaria de saber mais sobre os cosméticos!'
      : 'Hello! I was reading about Aura Vegana and would like to learn more about the cosmetics!'
  )}`;

  return (
    <div
      id="bio-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="bio-modal-content"
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white border-2 border-[#59572D]/30 rounded-3xl p-5 sm:p-7 shadow-2xl text-[#4A3612] no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-bio-modal"
          type="button"
          onClick={onClose}
          className="sticky top-0 float-right -mt-2 -mr-2 z-10 w-9 h-9 rounded-full bg-[#faf6f0] hover:bg-[#59572D] text-[#4A3612] hover:text-[#F8EFE3] flex items-center justify-center border border-[#d9cfbe] transition-colors cursor-pointer shadow-xs"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Brand Image & Banner */}
        <div className="flex flex-col items-center text-center mb-6 pt-1">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#59572D] via-[#716E41] to-[#4A3612] shadow-md mb-3">
            <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white">
              <img
                src={ASSETS.logo}
                alt="Aura Vegana"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#F8EFE3] shadow-2xs mb-2"
            style={{ backgroundColor: BRAND_COLORS.secondary }}
          >
            <Leaf className="w-3.5 h-3.5 text-[#F8EFE3]" />
            <span>{t.brandName}</span>
          </span>

          <h2 className="text-xl sm:text-2xl font-serif-display font-bold text-[#4A3612] tracking-tight">
            {bio.title}
          </h2>
          <p className="text-xs font-sans font-medium text-[#716E41] mt-0.5">
            {bio.subtitle}
          </p>
        </div>

        {/* SECTION 1: Origem e Filosofia */}
        <div className="mb-6 pb-6 border-b border-[#e8ded0]">
          <p className="font-semibold text-sm text-[#4A3612] mb-3 leading-relaxed italic font-serif-display">
            &ldquo;{bio.quoteHighlight}&rdquo;
          </p>

          <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed text-[#4A3612]/90">
            <p>{bio.p1}</p>
            <p>{bio.p2}</p>
            <p className="p-3 rounded-2xl bg-[#faf6f0] border-l-4 border-[#59572D] font-medium text-[#4A3612]">
              {bio.p3}
            </p>
            <p>{bio.p4}</p>
          </div>
        </div>

        {/* SECTION 2: Compromisso Vegano */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-5 rounded-full bg-[#716E41]" />
            <h3 className="text-lg sm:text-xl font-bold text-[#4A3612] tracking-tight">
              {lang === 'pt' ? 'Nosso Compromisso com a Vida' : 'Our Commitment to Life'}
            </h3>
          </div>

          {/* Manifesto Box */}
          <div className="mt-4 p-4 rounded-2xl bg-[#faf6f0] border border-[#d9cfbe]">
            <h4 className="text-sm font-bold text-[#4A3612] mb-2 flex items-center gap-1.5">
              <span>🌿 {lang === 'pt' ? 'Manifesto Aura Vegana:' : 'Aura Vegana Manifesto:'}</span>
            </h4>
            <p className="text-xs sm:text-[13px] text-[#4A3612]/90 font-medium leading-relaxed mb-3">
              {lang === 'pt'
                ? 'Desenvolvemos sabonetes artesanais, com ingredientes selecionados considerando nossos objetivos em consumir e oferecer soluções para quem também tem sensibilidade seja de pele e/ou olfativa e busca por cosméticos de origem vegana e não testados em animais.'
                : 'We develop artisan soaps crafted with selected ingredients reflecting our mission to provide gentle solutions for anyone with skin or olfactory sensitivity seeking vegan and cruelty-free cosmetics.'}
            </p>
            <div className="pt-2 border-t border-[#e2d7c7] flex flex-col gap-1.5 text-xs font-bold text-[#59572D]">
              <span className="flex items-center gap-1.5">✦ {lang === 'pt' ? 'Ingredientes Selecionados.' : 'Selected Ingredients.'}</span>
              <span className="flex items-center gap-1.5">✦ {lang === 'pt' ? 'Aromas suaves.' : 'Gentle Aromas.'}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-[#e8ded0] flex flex-col gap-2.5">
          <a
            id="btn-modal-loja-virtual"
            href={CONTACT_LINKS.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl text-[#F8EFE3] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.01] active:scale-98"
            style={{ backgroundColor: BRAND_COLORS.secondary }}
          >
            <ShoppingBag className="w-4 h-4 text-[#F8EFE3]" />
            <span>{t.mainCta.buttonText}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-90" />
          </a>

          <button
            id="btn-bottom-close-bio-modal"
            type="button"
            onClick={onClose}
            className="w-full py-2 px-4 rounded-xl bg-[#faf6f0] hover:bg-[#ebdcc9] text-[#716E41] hover:text-[#4A3612] text-xs font-bold flex items-center justify-center gap-1.5 border border-[#d9cfbe] transition-all cursor-pointer mt-1"
          >
            <X className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'Fechar' : 'Close'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
