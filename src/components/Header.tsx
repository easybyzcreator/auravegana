import React from 'react';
import { Language } from '../types';
import { CONTACT_LINKS, BRAND_COLORS } from '../data/content';
import { ShoppingBag, ExternalLink } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenQr?: () => void;
  onShare?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
}) => {
  return (
    <header id="app-header" className="w-full flex items-center justify-end py-2 px-1 mb-2">
      {/* Fazer Pedido Tag Button linking to Online Shop */}
      <a
        id="btn-header-order-tag"
        href={CONTACT_LINKS.shopUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[#F8EFE3] text-[12px] font-bold shadow-xs hover:shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer"
        style={{ backgroundColor: BRAND_COLORS.primary }}
      >
        <ShoppingBag className="w-3.5 h-3.5 text-[#F8EFE3]" />
        <span>{lang === 'pt' ? 'Fazer Pedido' : 'Order Now'}</span>
        <ExternalLink className="w-2.5 h-2.5 opacity-80" />
      </a>
    </header>
  );
};
