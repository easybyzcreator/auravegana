import React from 'react';
import { Language, ProductItem } from '../types';
import { TRANSLATIONS, CONTACT_LINKS, BRAND_COLORS } from '../data/content';
import { X, MessageCircle, ExternalLink, ShoppingBag } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  lang: Language;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  lang,
  onClose,
}) => {
  if (!product) return null;

  const t = TRANSLATIONS[lang];
  const waUrl = `https://wa.me/${CONTACT_LINKS.whatsappNumber}?text=${encodeURIComponent(
    product.whatsappMessage || (lang === 'pt'
      ? `Olá! Estava navegando na Aura Vegana e gostaria de saber mais sobre ${product.title}!`
      : `Hello! I was browsing Aura Vegana and would like to ask a question about ${product.title}!`)
  )}`;

  return (
    <div
      id="product-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="product-detail-modal-content"
        className="relative w-full max-w-sm max-h-[92vh] overflow-y-auto no-scrollbar bg-white border-2 border-[#d9cfbe] rounded-3xl shadow-2xl text-[#4A3612]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-product-modal"
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Cover Image - 100% Limpa, sem tag cobrindo a foto */}
        <div className="relative w-full bg-[#FAF6F0] p-4 flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-h-[350px] object-contain drop-shadow-xs"
          />
        </div>

        {/* Details Content */}
        <div className="p-5">
          {/* Tag e Categoria posicionadas no corpo do modal */}
          <div className="flex items-center gap-2 mb-2.5 flex-wrap">
            <span
              className="text-xs font-bold uppercase tracking-wider text-[#59572D]"
            >
              {product.category}
            </span>
            {product.badge && (
              <span
                className="inline-flex items-center px-3 py-0.5 rounded-full text-[10.5px] font-medium text-[#F8EFE3] shadow-2xs"
                style={{ backgroundColor: BRAND_COLORS.secondary }}
              >
                <span>{product.badge}</span>
              </span>
            )}
          </div>

          <h3 className="text-lg font-bold text-[#4A3612] mb-1.5 leading-snug break-normal">
            {product.title}
          </h3>
          <p className="text-xs sm:text-[13px] leading-relaxed text-[#4A3612]/80 mb-3.5 font-normal">
            {product.description}
          </p>

          {/* Identified Products Box - Nomes 100% completos */}
          {product.identifiedProducts && product.identifiedProducts.length > 0 && (
            <div className="p-3.5 rounded-2xl bg-[#FCF8F2] border border-[#e2d7c7] mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#59572D] block mb-2">
                {lang === 'pt' ? 'Produtos presentes nesta foto:' : 'Products in this photo:'}
              </span>
              <ul className="space-y-2 text-xs text-[#4A3612]">
                {product.identifiedProducts.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0 mt-1"
                      style={{ backgroundColor: item.colorCode }}
                    />
                    <div className="leading-snug break-normal">
                      <strong className="block text-[#4A3612]">{item.name}</strong>
                      <span className="text-[11px] text-[#716E41]">{item.scent}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.tagline && (
            <div className="p-2.5 rounded-xl bg-[#FAF6F0] border border-[#e8ded0] mb-4">
              <span className="text-xs text-[#59572D] italic block text-center font-medium">
                &ldquo;{product.tagline}&rdquo;
              </span>
            </div>
          )}

          {/* Action CTAs */}
          <div className="space-y-2 pt-1">
            <a
              id="btn-order-online-modal"
              href={CONTACT_LINKS.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl text-[#F8EFE3] text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all hover:opacity-95"
              style={{ backgroundColor: BRAND_COLORS.secondary }}
            >
              <ShoppingBag className="w-4 h-4 text-[#F8EFE3]" />
              <span>{t.orderOnMenu}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#F8EFE3]" />
            </a>

            <button
              id="btn-close-product-modal-bottom"
              type="button"
              onClick={onClose}
              className="w-full py-2 px-4 rounded-xl bg-[#F4EBE0] hover:bg-[#E8DED0] text-[#716E41] hover:text-[#4A3612] text-xs font-bold flex items-center justify-center gap-1.5 border border-[#d9cfbe] transition-all cursor-pointer mt-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>{lang === 'pt' ? 'Fechar' : 'Close'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
