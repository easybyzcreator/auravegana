import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, CONTACT_LINKS, BRAND_COLORS } from '../data/content';
import { Instagram, Heart, ExternalLink, Bookmark } from 'lucide-react';

interface InstagramGridProps {
  lang: Language;
}

export const InstagramGrid: React.FC<InstagramGridProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  // Exactly the 3 Instagram posts and image links provided by user
  const instaPosts = [
    {
      id: 'post-1',
      image: 'https://i.ibb.co/WvQr8Hcf/patitour-2026-10-07-T101621-893.png',
      url: 'https://www.instagram.com/p/Dd5HzFTNCmM/',
      likes: '512',
      tag: '#AuraVegana',
    },
    {
      id: 'post-2',
      image: 'https://i.ibb.co/jZPjCK6B/patitour-2026-10-07-T101329-744.png',
      url: 'https://www.instagram.com/p/Dcb5N-eIJdD/?img_index=1',
      likes: '684',
      tag: '#CosmeticaNatural',
    },
    {
      id: 'post-3',
      image: 'https://i.ibb.co/N2jqD3NX/patitour-2026-10-07-T101713-693.png',
      url: 'https://www.instagram.com/p/Dcmm84iNDqd/',
      likes: '429',
      tag: '#SabonetesArtesanais',
    },
  ];

  return (
    <section id="instagram-showcase-section" className="w-full mb-6">
      {/* Header */}
      <div className="flex items-center justify-between px-1 mb-2.5">
        <div className="flex items-center gap-1.5">
          <Instagram className="w-4 h-4 shrink-0" style={{ color: BRAND_COLORS.primary }} />
          <h2 className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#4A3612] break-normal">
            {t.socialLabels.instagramHandle.toUpperCase()}
          </h2>
        </div>
        <a
          href={CONTACT_LINKS.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11.5px] font-bold hover:underline flex items-center gap-0.5 shrink-0"
          style={{ color: BRAND_COLORS.primary }}
        >
          <span>Instagram</span>
          <ExternalLink className="w-2.5 h-2.5 text-[#59572D]" />
        </a>
      </div>

      {/* 3 Photos Row matching user's real posts */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {instaPosts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            title="Ver publicação no Instagram"
            className="group relative aspect-square rounded-2xl overflow-hidden bg-[#FAF6F0] border border-[#d9cfbe] block shadow-2xs hover:border-[#59572D] transition-all"
          >
            <img
              src={post.image}
              alt="Aura Vegana Instagram Post"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 group-hover:opacity-100 flex flex-col justify-end p-1.5 text-white transition-opacity">
              <div className="flex items-center justify-between text-[10px] text-white/95">
                <span className="flex items-center gap-0.5 font-medium">
                  <Heart className="w-2.5 h-2.5 text-[#F8EFE3] fill-[#F8EFE3]" />
                  <span>{post.likes}</span>
                </span>
                <Bookmark className="w-2.5 h-2.5 opacity-90" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Follow Button */}
      <a
        id="btn-follow-instagram"
        href={CONTACT_LINKS.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2.5 px-4 rounded-xl text-[#F8EFE3] text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all hover:opacity-95 cursor-pointer"
        style={{ backgroundColor: BRAND_COLORS.primary }}
      >
        <Instagram className="w-4 h-4 text-[#F8EFE3]" />
        <span>{t.followButton}</span>
      </a>
    </section>
  );
};
