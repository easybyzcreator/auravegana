import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, BRAND_COLORS } from '../data/content';
import { Leaf, ShieldCheck, Sparkles, Heart, ChevronRight } from 'lucide-react';

interface StoryCardProps {
  lang: Language;
  onOpenBioModal: () => void;
}

export const StoryCard: React.FC<StoryCardProps> = ({
  lang,
  onOpenBioModal,
}) => {
  const t = TRANSLATIONS[lang];

  const pillarIcons: Record<string, React.ReactNode> = {
    Leaf: <Leaf className="w-3.5 h-3.5 text-[#59572D] shrink-0 mt-0.5" />,
    ShieldCheck: <ShieldCheck className="w-3.5 h-3.5 text-[#716E41] shrink-0 mt-0.5" />,
    Sparkles: <Sparkles className="w-3.5 h-3.5 text-[#4A3612] shrink-0 mt-0.5" />,
    Truck: <Heart className="w-3.5 h-3.5 text-[#59572D] shrink-0 mt-0.5" />,
  };

  return (
    <div id="story-highlight-card" className="w-full mb-6">
      <div className="rounded-2xl bg-gradient-to-br from-white via-[#FAF6F0] to-[#F4EDE3] border border-[#d9cfbe] p-4 sm:p-5 shadow-xs relative overflow-hidden">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-[#59572D]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Header Tag - 100% Completa */}
        <div className="flex items-center gap-2 mb-3">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[#F8EFE3] shadow-2xs"
            style={{ backgroundColor: BRAND_COLORS.secondary }}
          >
            <Leaf className="w-3.5 h-3.5 text-[#F8EFE3] shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-wider">
              {t.storyQuote.headline}
            </span>
          </div>
        </div>

        {/* Texto do Manifesto */}
        <p className="text-[13px] leading-relaxed text-[#4A3612]/90 mb-3.5 font-normal">
          {t.storyQuote.text}
        </p>

        {/* Feature Highlights Box */}
        <div className="p-3 sm:p-3.5 rounded-xl bg-white/95 border border-[#e2d7c7] mb-4 space-y-2 text-[12px] text-[#4A3612] shadow-2xs">
          <div className="flex items-start gap-2">
            <span className="text-[#59572D] font-bold text-xs mt-0.5 shrink-0">✦</span>
            <span>
              {lang === 'pt'
                ? 'Glicerina vegana hipoalergênica: não causa alergias, vermelhidão ou manchas.'
                : 'Hypoallergenic vegan glycerin: prevents allergies, redness and irritation.'}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#59572D] font-bold text-xs mt-0.5 shrink-0">✦</span>
            <span>
              {lang === 'pt'
                ? 'Extratos botânicos glicerinados de aloe vera e calêndula para hidratação prolongada.'
                : 'Botanical extracts of aloe vera and calendula for long-lasting skin hydration.'}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#59572D] font-bold text-xs mt-0.5 shrink-0">✦</span>
            <span className="font-semibold text-[#59572D]">
              {lang === 'pt'
                ? 'Aromas suaves de camomila, lavanda e erva-doce para sensibilidade olfativa.'
                : 'Gentle aromas of chamomile, lavender and fennel crafted for olfactory sensitivity.'}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#59572D] font-bold text-xs mt-0.5 shrink-0">✦</span>
            <span>
              {lang === 'pt'
                ? 'Elaborado considerando conhecimentos químicos.'
                : 'Crafted considering chemistry knowledge.'}
            </span>
          </div>
        </div>

        {/* 4 Pillars Grid - Títulos 100% Completos */}
        <div className="grid grid-cols-2 gap-2.5 mb-3.5">
          {t.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-2.5 sm:p-3 rounded-xl bg-white/95 border border-[#e4d9c9] flex flex-col justify-start shadow-2xs"
            >
              <div className="flex items-start gap-1.5 mb-1.5">
                {pillarIcons[pillar.icon] || <Leaf className="w-3.5 h-3.5 text-[#59572D] shrink-0 mt-0.5" />}
                <span className="text-[11.5px] font-bold text-[#4A3612] tracking-tight leading-snug break-normal">
                  {pillar.title}
                </span>
              </div>
              <p className="text-[11px] leading-snug text-[#716E41]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action to read full bio */}
        <button
          id="btn-story-full"
          type="button"
          onClick={onOpenBioModal}
          className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-[#59572D] text-[#4A3612] hover:text-[#F8EFE3] border border-[#d9cfbe] text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-2xs group cursor-pointer"
        >
          <span>{t.readMore}</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#59572D] group-hover:text-[#F8EFE3] transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};
