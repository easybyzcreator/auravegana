import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, ASSETS, CONTACT_LINKS, BRAND_COLORS } from '../data/content';
import { Heart } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const year = new Date().getFullYear();

  return (
    <footer id="app-footer" className="w-full pt-8 pb-10 flex flex-col items-center text-center">
      {/* Brand Note */}
      <div className="flex items-center justify-center gap-1.5 text-xs text-[#716E41] mb-6">
        <span>{lang === 'pt' ? 'Feito com' : 'Made with'}</span>
        <Heart className="w-3.5 h-3.5 text-[#59572D] fill-[#59572D]" />
        <span>{lang === 'pt' ? 'por' : 'by'}</span>
        <strong className="font-serif-display font-bold text-[#4A3612]">Aura Vegana</strong>
      </div>

      {/* Developed By Section */}
      <div id="developed-by-container" className="flex flex-col items-center">
        <span className="text-[10.5px] font-bold tracking-[0.25em] text-[#716E41] uppercase mb-2">
          {t.devBy}
        </span>

        <a
          id="link-easybyzcreator"
          href={CONTACT_LINKS.ebcUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Easy Byz Creator - www.easybyzcreator.com"
          className="group block p-2 rounded-2xl transition-all duration-300 hover:scale-105"
        >
          <img
            id="ebc-logo-img"
            src={ASSETS.ebcLogo}
            alt="Easy Byz Creator"
            className="w-28 sm:w-32 h-auto object-contain mx-auto transition-opacity group-hover:opacity-90 drop-shadow-xs"
          />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-[10.5px] text-[#716E41] mt-3 font-normal">
        © {year} Aura Vegana Cosméticos Naturais. Todos os direitos reservados.
      </p>
    </footer>
  );
};
