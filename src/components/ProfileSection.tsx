import React from 'react';
import { Language } from '../types';
import { ASSETS, TRANSLATIONS, BRAND_COLORS, CONTACT_LINKS } from '../data/content';
import { Leaf, ChevronRight, Sparkles, ShoppingBag, ExternalLink } from 'lucide-react';

interface ProfileSectionProps {
  lang: Language;
  onOpenBioModal: () => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  lang,
  onOpenBioModal,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="profile-section" className="w-full flex flex-col items-center text-center pt-2 pb-5">
      {/* Brand Avatar with Natural Olive Ring */}
      <div
        id="avatar-container"
        className="relative mb-6 sm:mb-7 group cursor-pointer"
        onClick={onOpenBioModal}
        title="Conheça a história da Aura Vegana"
      >
        <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-[#59572D] via-[#716E41] to-[#4A3612] shadow-md relative overflow-visible transition-transform duration-300 group-hover:scale-105">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#FCF8F2] flex items-center justify-center border-2 border-[#FCF8F2] shadow-inner">
            <img
              id="brand-avatar-img"
              src={ASSETS.logo}
              alt="Aura Vegana"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
        </div>

        {/* Floating Botanical Leaf Badge */}
        <div
          className="absolute bottom-0 right-1 text-white p-2.5 rounded-full border-2 border-[#FCF8F2] shadow-md flex items-center justify-center transition-transform group-hover:rotate-12"
          style={{ backgroundColor: BRAND_COLORS.primary }}
        >
          <Leaf className="w-4 h-4 text-[#F8EFE3]" />
        </div>
      </div>

      {/* Brand Title (Sem negrito pesado - elegante e delicado) */}
      <div id="brand-title-container" className="flex flex-col items-center mb-3">
        <h1
          id="brand-title"
          className="text-3xl sm:text-4xl font-normal tracking-wide text-[#4A3612] break-normal"
        >
          {t.brandName}
        </h1>

        {/* Category Concept (SABONETES ARTESANAIS VEGANOS) - Sem cortes */}
        <div className="flex items-center justify-center gap-2 mt-2 px-1 max-w-full">
          <span className="h-[1px] w-6 sm:w-8 bg-[#59572D]/30 shrink-0" />
          <span
            className="text-[10.5px] sm:text-[11.5px] font-medium tracking-[0.18em] uppercase text-[#59572D] text-center break-normal"
          >
            {t.brandConcept}
          </span>
          <span className="h-[1px] w-6 sm:w-8 bg-[#59572D]/30 shrink-0" />
        </div>
      </div>

      {/* Badges de Destaque */}
      <div className="flex flex-wrap items-center justify-center gap-2 my-3 px-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-white text-[#4A3612] border border-[#d8dfd3] shadow-2xs">
          <Sparkles className="w-3 h-3 text-[#59572D] shrink-0" />
          <span>{t.chefBadge}</span>
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-white text-[#4A3612] border border-[#d8dfd3] shadow-2xs">
          <span>{t.locationBadge}</span>
        </span>
      </div>

      {/* Frase de Apresentação */}
      <div id="top-bio-brief" className="w-full max-w-sm px-4 my-4">
        <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#4A3612]/90 italic font-normal">
          &ldquo;{t.bioIntro}&rdquo;
        </p>
      </div>

      {/* Tagline de Cuidado - Texto 100% completo, sem cortes no meio da frase */}
      <div className="w-full max-w-sm px-2 my-2.5">
        <div className="py-2 px-3.5 rounded-2xl bg-gradient-to-r from-[#59572D]/10 via-[#716E41]/10 to-[#59572D]/10 border border-[#59572D]/20 text-center">
          <div className="flex items-center justify-center gap-1.5 text-[10.5px] sm:text-[11.5px] font-medium text-[#4A3612] uppercase tracking-wider break-normal">
            <Leaf className="w-3.5 h-3.5 text-[#59572D] shrink-0" />
            <span>{t.momentTagline}</span>
          </div>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="w-full max-w-xs flex flex-col items-center gap-3 mt-4 mb-2">
        {/* Botão Primário: Loja Virtual */}
        <a
          id="btn-visitar-loja-virtual"
          href={CONTACT_LINKS.shopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 text-xs sm:text-[13px] font-bold px-6 py-3 rounded-full text-[#F8EFE3] shadow-xs hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-98 cursor-pointer"
          style={{ backgroundColor: BRAND_COLORS.secondary }}
        >
          <ShoppingBag className="w-4 h-4 text-[#F8EFE3]" />
          <span>{lang === 'pt' ? 'Fazer Pedido na Loja Virtual' : 'Order at Online Store'}</span>
          <ExternalLink className="w-3 h-3 opacity-90" />
        </a>

        {/* Botão Secundário: Conheça o Propósito */}
        <button
          id="btn-learn-more-bio"
          type="button"
          onClick={onOpenBioModal}
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 group shadow-2xs hover:shadow-xs active:scale-98 cursor-pointer bg-white text-[#4A3612] border-[#d0dacb] hover:border-[#59572D]"
        >
          <span>{t.readMore}</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#59572D] transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </section>
  );
};
