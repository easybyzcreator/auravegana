import React from 'react';
import { Language } from '../types';
import { CONTACT_LINKS, TRANSLATIONS, BRAND_COLORS } from '../data/content';
import { Instagram, ShoppingBag, MessageCircle } from 'lucide-react';

interface SocialPillsProps {
  lang: Language;
}

export const SocialPills: React.FC<SocialPillsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const waUrl = `https://wa.me/${CONTACT_LINKS.whatsappNumber}?text=${encodeURIComponent(
    lang === 'pt'
      ? 'Olá! Estava navegando no link da bio da Aura Vegana e gostaria de tirar uma dúvida sobre os cosméticos!'
      : 'Hello! I was browsing the link in Aura Vegana bio and would like to ask a question!'
  )}`;

  const socials = [
    {
      id: 'social-instagram',
      name: 'Instagram',
      handle: t.socialLabels.instagramHandle,
      url: CONTACT_LINKS.instagramUrl,
      icon: Instagram,
    },
    {
      id: 'social-shop',
      name: t.socialLabels.shop,
      handle: t.socialLabels.shopHandle,
      url: CONTACT_LINKS.shopUrl,
      icon: ShoppingBag,
    },
    {
      id: 'social-whatsapp',
      name: 'WhatsApp',
      handle: CONTACT_LINKS.whatsappDisplay,
      url: waUrl,
      icon: MessageCircle,
    },
  ];

  return (
    <div id="social-icons-bar" className="w-full flex items-center justify-center gap-3.5 py-1 mb-6 sm:mb-7">
      {socials.map((item) => {
        const IconComponent = item.icon;
        return (
          <a
            key={item.id}
            id={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${item.name} - ${item.handle}`}
            className="w-11 h-11 rounded-full text-white flex items-center justify-center shadow-xs transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer border border-[#59572D]/20"
            style={{
              backgroundColor: BRAND_COLORS.primary,
            }}
          >
            <IconComponent className="w-5 h-5 text-[#F8EFE3] transition-colors hover:text-white" />
          </a>
        );
      })}
    </div>
  );
};
