import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, CONTACT_LINKS, BRAND_COLORS, ASSETS } from '../data/content';
import { ShoppingBag, ExternalLink, Droplets, Heart } from 'lucide-react';

interface LiquidSoapSectionProps {
  lang: Language;
}

export const LiquidSoapSection: React.FC<LiquidSoapSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const lss = t.liquidSoapSection;

  return (
    <section id="liquid-soap-section" className="w-full mb-6">
      {/* Section Header */}
      <div className="flex items-center justify-between px-1 mb-2.5">
        <div className="flex items-center gap-1.5">
          <div
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          />
          <h2 className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#4A3612] break-normal">
            {lss.title}
          </h2>
        </div>
        <span
          className="inline-flex items-center text-[11px] font-bold px-2.5 py-0.5 rounded-full text-[#F8EFE3] shadow-2xs shrink-0"
          style={{ backgroundColor: BRAND_COLORS.secondary }}
        >
          <span>{lss.badge}</span>
        </span>
      </div>

      {/* Main Card */}
      <div className="group rounded-3xl bg-white border-2 border-[#d9cfbe] hover:border-[#59572D] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
        {/* Product Photo - Clean, centered, unobscured */}
        <div className="relative w-full bg-[#FAF6F0] p-4 sm:p-5 flex items-center justify-center overflow-hidden">
          <img
            src={ASSETS.imgSaboneteLiquido}
            alt={lss.title}
            className="w-full max-h-[360px] sm:max-h-[400px] object-contain drop-shadow-xs transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 flex flex-col justify-between">
          <div>
            {/* Title */}
            <h3 className="text-base sm:text-lg font-bold text-[#4A3612] leading-snug mb-2 group-hover:text-[#59572D] transition-colors break-normal">
              {lss.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-[13px] text-[#4A3612]/85 leading-relaxed mb-4 font-normal">
              {lss.text}
            </p>

            {/* Feature Pills */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FCF8F2] border border-[#e2d7c7] mb-4 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#59572D] flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-[#59572D]" />
                {lang === 'pt' ? 'Diferenciais da Linha Líquida:' : 'Liquid Line Highlights:'}
              </span>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-white border border-[#d9cfbe] text-[#4A3612]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#59572D]" />
                  {lang === 'pt' ? 'Glicerina Vegana Hipoalergênica' : 'Hypoallergenic Vegan Glycerin'}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-white border border-[#d9cfbe] text-[#4A3612]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#59572D]" />
                  {lang === 'pt' ? 'Extrato de Aloe Vera' : 'Aloe Vera Extract'}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-white border border-[#d9cfbe] text-[#4A3612]">
                  <Heart className="w-3 h-3 text-[#59572D]" />
                  {lang === 'pt' ? '100% Vegano & Não Testado em Animais' : '100% Vegan & Cruelty-Free'}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Action */}
          <div className="pt-3 border-t border-[#F2ECE1]">
            <a
              id="btn-order-store-sabonetes-liquidos"
              href={CONTACT_LINKS.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 text-[#F8EFE3] shadow-2xs hover:shadow transition-all cursor-pointer"
              style={{ backgroundColor: BRAND_COLORS.secondary }}
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#F8EFE3]" />
              <span>{lss.cta}</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
