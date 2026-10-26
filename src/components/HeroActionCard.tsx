import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, CONTACT_LINKS, BRAND_COLORS } from '../data/content';
import { ShoppingBag, ArrowRight, ExternalLink } from 'lucide-react';

interface HeroActionCardProps {
  lang: Language;
}

export const HeroActionCard: React.FC<HeroActionCardProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div id="hero-menu-card" className="w-full mb-5">
      <a
        id="link-loja-virtual"
        href={CONTACT_LINKS.shopUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full rounded-2xl bg-gradient-to-br from-white via-[#faf6f0] to-[#f4ebe0] p-4 sm:p-5 border-2 border-[#d9cfbe] shadow-sm overflow-hidden transition-all duration-300 hover:border-[#59572D] hover:shadow-md hover:-translate-y-0.5"
      >
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

        {/* Top Header - 2 Linhas Limpas e Separadas */}
        {/* Linha 1: Tag da Loja Oficial compacta */}
        <div className="flex items-center mb-1.5">
          <span
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase text-[#F8EFE3] shadow-2xs"
            style={{ backgroundColor: BRAND_COLORS.secondary }}
          >
            <span>{t.mainCta.tag}</span>
          </span>
        </div>

        {/* Linha 2: Status de Envio para todo o Brasil */}
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#59572D] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#59572D] animate-pulse"></span>
          <span>{lang === 'pt' ? 'Envio para todo o Brasil' : 'Nationwide Shipping'}</span>
        </div>

        {/* Content Section - Título 100% completo com largura total, sem esmagamento */}
        <div className="flex items-start gap-3 mt-1">
          {/* Icon Circle */}
          <div
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl shrink-0 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-300 mt-0.5"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          >
            <ShoppingBag className="w-5 h-5 text-[#F8EFE3]" />
          </div>

          {/* Text Info: Título aparece com texto todo, sem cortar */}
          <div className="flex-1 min-w-0">
            <h3 className="text-[15px] sm:text-[16.5px] font-bold text-[#4A3612] leading-snug group-hover:text-[#59572D] transition-colors break-normal">
              {t.mainCta.title}
            </h3>
            <p className="text-[12px] sm:text-[12.5px] leading-relaxed text-[#4A3612]/80 mt-1.5 font-normal">
              {t.mainCta.description}
            </p>
          </div>
        </div>

        {/* Bottom Button Bar: Apenas o botão menor, sem o nome do link escrito por extenso */}
        <div className="mt-3.5 pt-2.5 border-t border-[#e2d7c7] flex items-center justify-end">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#F8EFE3] shadow-2xs group-hover:shadow transition-all"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          >
            <span>{t.mainCta.buttonText}</span>
            <ExternalLink className="w-3 h-3 text-[#F8EFE3]" />
          </div>
        </div>
      </a>
    </div>
  );
};
