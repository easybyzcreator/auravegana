import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, BRAND_COLORS, ASSETS } from '../data/content';
import { Users, Heart, Sparkles, Upload } from 'lucide-react';

interface FoundersSectionProps {
  lang: Language;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const fs = t.foundersStory;

  // Local state initialized with the founders' uploaded photos
  const [duoImage, setDuoImage] = useState<string | null>(ASSETS.imgLauraRhuana);
  const [rhuanaImage, setRhuanaImage] = useState<string | null>(ASSETS.imgRhuana);
  const [lauraImage, setLauraImage] = useState<string | null>(ASSETS.imgLaura);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (val: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setter(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="founders-story-section" className="w-full mb-6">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center px-1 mb-2.5">
        <div className="flex items-center justify-center gap-1.5 mb-1">
          <div
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          />
          <h2 className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#4A3612] break-normal">
            {fs.sectionTitle}
          </h2>
          <div
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          />
        </div>
        <div className="flex items-center justify-center gap-1 text-[11.5px] font-semibold text-[#716E41]">
          <Heart className="w-3.5 h-3.5 text-[#59572D] fill-[#59572D]/20" />
          <span>{fs.badge}</span>
        </div>
      </div>

      <p className="text-[12px] text-[#716E41] text-center px-1 mb-3.5 leading-relaxed">
        {fs.sectionSubtitle}
      </p>

      {/* Main Container */}
      <div className="rounded-3xl bg-gradient-to-br from-white via-[#FAF6F0] to-[#F4EDE3] border-2 border-[#d9cfbe] p-4 sm:p-5 shadow-xs relative overflow-hidden space-y-4">
        {/* Intro text cards */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-[#e2d7c7] shadow-2xs space-y-2.5">
          <p className="text-xs sm:text-[12.5px] text-[#4A3612] leading-relaxed">
            {fs.leadP1}
          </p>
          <p className="text-xs sm:text-[12.5px] font-semibold text-[#59572D] leading-relaxed">
            {fs.leadP2}
          </p>
        </div>

        {/* 1. ESPAÇO DE DESTAQUE: FOTO DAS 2 */}
        <div className="rounded-2xl bg-white border border-[#d9cfbe] p-3.5 sm:p-4 shadow-2xs">
          <div className="flex flex-col items-start gap-1.5 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#59572D]" />
              <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#4A3612]">
                {fs.featuredPhotoTitle}
              </h3>
            </div>
            <div>
              <span className="inline-block text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-[#59572D]/15 text-[#4A3612] border border-[#59572D]/30">
                {fs.featuredPhotoBadge}
              </span>
            </div>
          </div>

          {/* Photo Slot Container */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-[#d9cfbe] shadow-2xs bg-[#FAF6F0]">
            {duoImage ? (
              <div className="relative w-full min-h-[220px] sm:min-h-[260px] flex items-center justify-center bg-[#FAF6F0]">
                <img
                  src={duoImage}
                  alt="Laura e Rhuana"
                  className="w-full h-auto max-h-[360px] object-cover"
                />
              </div>
            ) : (
              <div className="py-8 px-4 flex flex-col items-center justify-center text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xs mb-2.5 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: BRAND_COLORS.primary }}
                >
                  <Users className="w-7 h-7 text-[#F8EFE3]" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#4A3612] mb-1">
                  {lang === 'pt' ? 'Espaço para Foto de Destaque das Duas' : 'Featured Photo Space (Both Founders)'}
                </h4>
                <p className="text-[11px] text-[#716E41] max-w-xs mb-3">
                  {lang === 'pt'
                    ? 'Clique abaixo para carregar uma foto de Laura & Rhuana ou mantenha o espaço reservado.'
                    : 'Click below to upload a photo of Laura & Rhuana.'}
                </p>
                <label className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[#F8EFE3] text-xs font-bold cursor-pointer shadow-xs hover:opacity-95 active:scale-98 transition-all" style={{ backgroundColor: BRAND_COLORS.primary }}>
                  <Upload className="w-3.5 h-3.5 text-[#F8EFE3]" />
                  <span>{lang === 'pt' ? 'Inserir Foto das 2' : 'Upload Duo Photo'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, setDuoImage)}
                  />
                </label>
              </div>
            )}
          </div>
        </div>

        {/* 2. CAMPOS MENORES COM A FOTO DE CADA UMA DELAS */}
        <div className="space-y-3.5">
          {/* Card Rhuana */}
          <div
            id="founder-card-rhuana"
            className="rounded-2xl bg-white border border-[#d9cfbe] p-3.5 sm:p-4 shadow-2xs hover:border-[#59572D] transition-all"
          >
            {/* Topo: Imagem na esquerda, identificação (nome, cargo, badge) na direita */}
            <div className="flex items-center gap-3.5 mb-3">
              {/* Foto Menor de Rhuana */}
              <div className="relative shrink-0">
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[#d9cfbe] bg-[#FAF6F0] flex items-center justify-center shadow-2xs">
                  {rhuanaImage ? (
                    <img
                      src={rhuanaImage}
                      alt="Rhuana"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-1 text-center">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white mb-1 shadow-2xs"
                        style={{ backgroundColor: BRAND_COLORS.secondary }}
                      >
                        <Sparkles className="w-4 h-4 text-[#F8EFE3]" />
                      </div>
                      <span className="text-[9.5px] font-bold text-[#59572D] leading-tight">
                        {lang === 'pt' ? 'Foto' : 'Photo'}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Informações de identificação na direita */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                  <h4 className="text-sm sm:text-base font-bold text-[#4A3612]">
                    {fs.rhuana.name}
                  </h4>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#59572D]/15 text-[#59572D]">
                    {fs.rhuana.badge}
                  </span>
                </div>
                <p className="text-[11px] font-medium text-[#716E41]">
                  {fs.rhuana.role}
                </p>
              </div>
            </div>

            {/* Texto com a descrição colocado para baixo e centralizado */}
            <div className="pt-2.5 border-t border-[#f0e7dc]">
              <p className="text-xs sm:text-[12.5px] text-[#4A3612]/90 leading-relaxed text-center font-normal">
                {fs.rhuana.story}
              </p>
            </div>
          </div>

          {/* Card Laura */}
          <div
            id="founder-card-laura"
            className="rounded-2xl bg-white border border-[#d9cfbe] p-3.5 sm:p-4 shadow-2xs hover:border-[#59572D] transition-all"
          >
            {/* Topo: Imagem na esquerda, identificação (nome, cargo, badge) na direita */}
            <div className="flex items-center gap-3.5 mb-3">
              {/* Foto Menor de Laura */}
              <div className="relative shrink-0">
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[#d9cfbe] bg-[#FAF6F0] flex items-center justify-center shadow-2xs">
                  {lauraImage ? (
                    <img
                      src={lauraImage}
                      alt="Laura"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-1 text-center">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white mb-1 shadow-2xs"
                        style={{ backgroundColor: BRAND_COLORS.secondary }}
                      >
                        <Heart className="w-4 h-4 text-[#F8EFE3]" />
                      </div>
                      <span className="text-[9.5px] font-bold text-[#59572D] leading-tight">
                        {lang === 'pt' ? 'Foto' : 'Photo'}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Informações de identificação na direita */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                  <h4 className="text-sm sm:text-base font-bold text-[#4A3612]">
                    {fs.laura.name}
                  </h4>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-[#59572D]/15 text-[#59572D] whitespace-pre-line leading-tight">
                    {fs.laura.badge}
                  </span>
                </div>
                <p className="text-[11px] font-medium text-[#716E41]">
                  {fs.laura.role}
                </p>
              </div>
            </div>

            {/* Texto com a descrição colocado para baixo e centralizado */}
            <div className="pt-2.5 border-t border-[#f0e7dc]">
              <p className="text-xs sm:text-[12.5px] text-[#4A3612]/90 leading-relaxed text-center font-normal">
                {fs.laura.story}
              </p>
            </div>
          </div>
        </div>

        {/* 3. FECHAMENTO / CITAÇÃO CONJUNTA DAS 2 FUNDADORAS */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FAF6F0] to-[#F2E8DC] border-l-4 border-[#59572D] shadow-2xs">
          <p className="text-xs sm:text-[12.5px] italic text-[#4A3612] leading-relaxed mb-2.5 font-serif-display">
            &ldquo;{fs.closingQuote}&rdquo;
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-[#e8ded0]">
            <span className="text-xs font-bold text-[#59572D]">
              {fs.closingAuthor}
            </span>
            <span className="text-[11px] text-[#716E41] font-medium">
              {fs.closingRole}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
