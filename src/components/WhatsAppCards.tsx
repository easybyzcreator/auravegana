import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, CONTACT_LINKS, BRAND_COLORS } from '../data/content';
import { ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';

interface WhatsAppCardsProps {
  lang: Language;
}

export const WhatsAppCards: React.FC<WhatsAppCardsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="atendimento-store-section" className="w-full mb-6">
      {/* Header */}
      <div className="flex items-center justify-between px-1 mb-2.5">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: BRAND_COLORS.primary }} />
          <h2 className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#4A3612] break-normal">
            {t.whatsappSectionTitle}
          </h2>
        </div>
      </div>

      <div className="space-y-3">
        {t.whatsappOptions.map((opt) => {
          return (
            <div
              key={opt.id}
              id={`service-card-${opt.id}`}
              className="rounded-2xl bg-gradient-to-br from-white via-[#faf6f0] to-[#f4ebe0] border border-[#d9cfbe] p-4 sm:p-4.5 shadow-2xs relative overflow-hidden transition-all duration-300 hover:border-[#59572D] hover:shadow-md"
            >
              {/* Background Sparkles Watermark */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full pointer-events-none flex items-center justify-center opacity-10">
                <ShoppingBag className="w-16 h-16 text-[#59572D]" />
              </div>

              {/* Top Row */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-2xs shrink-0"
                    style={{ backgroundColor: BRAND_COLORS.primary }}
                  >
                    <Sparkles className="w-4.5 h-4.5 text-[#F8EFE3]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#4A3612] block leading-tight">
                      Aura Vegana • Loja Oficial
                    </span>
                    <span className="text-[10.5px] text-[#716E41]">
                      {t.socialLabels.shopHandle}
                    </span>
                  </div>
                </div>

                <span
                  className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#59572D]/15 text-[#4A3612] border border-[#59572D]/30 shrink-0"
                >
                  {opt.badge}
                </span>
              </div>

              {/* Title & Subtitle - 100% Completo */}
              <div className="my-2">
                <h3 className="text-xs sm:text-[13.5px] font-bold text-[#4A3612] uppercase tracking-wide break-normal leading-snug">
                  {opt.title}
                </h3>
                <p className="text-[12px] leading-relaxed text-[#4A3612]/80 mt-1 font-normal">
                  {opt.subtitle}
                </p>
              </div>

              {/* Action Button: direcionando para Loja Virtual Oficial (sem direcionar para WhatsApp) */}

              {/* Action Button: direcionando para Loja Virtual Oficial (sem direcionar para WhatsApp) */}
              <a
                id={`btn-chat-${opt.id}`}
                href={CONTACT_LINKS.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 py-2.5 px-3 rounded-xl text-[#F8EFE3] text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all group active:scale-98 cursor-pointer hover:opacity-95"
                style={{ backgroundColor: BRAND_COLORS.primary }}
              >
                <ShoppingBag className="w-4 h-4 text-[#F8EFE3]" />
                <span>{lang === 'pt' ? 'Fazer Pedido na Loja Virtual' : 'Place Order at Online Store'}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
