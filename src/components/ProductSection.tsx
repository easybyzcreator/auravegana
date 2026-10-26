import React from 'react';
import { Language, ProductItem } from '../types';
import { TRANSLATIONS, BRAND_COLORS, CONTACT_LINKS } from '../data/content';
import { Leaf, ShoppingBag, ExternalLink, ChevronRight } from 'lucide-react';

interface ProductSectionProps {
  lang: Language;
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  lang,
  onSelectProduct,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="products-section" className="w-full mb-6">
      {/* Section Header */}
      <div className="flex items-center justify-between px-1 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: BRAND_COLORS.primary }} />
          <h2 className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#4A3612]">
            {t.productsTitle}
          </h2>
        </div>
        <span className="text-[11px] font-semibold text-[#716E41] flex items-center gap-1 shrink-0">
          <Leaf className="w-3.5 h-3.5 text-[#59572D]" />
          <span>{lang === 'pt' ? '100% Vegano' : '100% Vegan'}</span>
        </span>
      </div>

      <p className="text-[12px] text-[#716E41] px-1 mb-4 leading-relaxed">
        {t.productsSubtitle}
      </p>

      {/* The 3 Dedicated Product Cards with 100% Complete Titles and Tags (Zero truncation / Zero cutting) */}
      <div id="products-list-container" className="flex flex-col gap-5">
        {t.products.map((product) => {
          return (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="group rounded-3xl bg-white border-2 border-[#d9cfbe] overflow-hidden shadow-xs transition-all duration-300 hover:border-[#59572D] hover:shadow-md"
            >
              {/* Header Bar: Titulo da Linha e Tag 100% Visíveis e Completos, sem cortar texto pelo meio */}
              <div className="px-4 py-3 flex flex-wrap items-center justify-between gap-2 bg-[#FAF6F0] border-b border-[#EFE5D7]">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: BRAND_COLORS.primary }}
                  />
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#59572D] leading-snug">
                    {product.category}
                  </span>
                </div>

                {product.badge && (
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium text-[#F8EFE3] shadow-2xs shrink-0"
                    style={{ backgroundColor: BRAND_COLORS.secondary }}
                  >
                    <span>{product.badge}</span>
                  </span>
                )}
              </div>

              {/* Product Photo - 100% Limpa, nítida e sem tags cobrindo a foto */}
              <div
                className="relative w-full bg-[#FAF6F0] p-4 flex items-center justify-center overflow-hidden cursor-pointer"
                onClick={() => onSelectProduct(product)}
                title="Clique para ver detalhes do produto"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full max-h-[360px] sm:max-h-[400px] object-contain drop-shadow-xs transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="eager"
                />
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  {/* Título Principal do Produto - 100% Completo, quebrando palavras naturalmente sem cortar */}
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="text-base sm:text-lg font-bold text-[#4A3612] leading-snug mb-2 group-hover:text-[#59572D] transition-colors cursor-pointer break-normal"
                  >
                    {product.title}
                  </h3>

                  <p className="text-xs sm:text-[12.5px] text-[#4A3612]/80 leading-relaxed mb-4 font-normal">
                    {product.description}
                  </p>

                  {/* PRODUTOS IDENTIFICADOS NESTA FOTO - NOMES 100% COMPLETOS */}
                  {product.identifiedProducts && product.identifiedProducts.length > 0 && (
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FCF8F2] border border-[#e2d7c7] mb-4 space-y-2.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#59572D] block">
                        {lang === 'pt' ? 'Produtos identificados nesta foto:' : 'Products in this photo:'}
                      </span>
                      <ul className="space-y-2 text-xs text-[#4A3612]">
                        {product.identifiedProducts.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span
                              className="w-2.5 h-2.5 rounded-full shrink-0 mt-1"
                              style={{ backgroundColor: item.colorCode }}
                            />
                            <div className="leading-snug break-normal">
                              <span className="font-semibold text-[#4A3612] block sm:inline">
                                {item.name}
                              </span>
                              <span className="text-[11px] text-[#716E41] block sm:inline sm:ml-1">
                                — {item.scent}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTAs */}
                <div className="pt-3 border-t border-[#F2ECE1] flex flex-col sm:flex-row items-center gap-2">
                  <a
                    id={`btn-order-store-${product.id}`}
                    href={CONTACT_LINKS.shopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 text-[#F8EFE3] shadow-2xs hover:shadow transition-all cursor-pointer"
                    style={{ backgroundColor: BRAND_COLORS.secondary }}
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#F8EFE3]" />
                    <span>{lang === 'pt' ? 'Pedir na Loja Virtual' : 'Order at Store'}</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>

                  <button
                    id={`btn-view-details-${product.id}`}
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-[#FAF6F0] hover:bg-[#59572D] text-[#4A3612] hover:text-[#F8EFE3] border border-[#d9cfbe] text-xs font-bold flex items-center justify-center gap-1 transition-all shadow-2xs active:scale-98 cursor-pointer"
                  >
                    <span>{lang === 'pt' ? 'Ver Detalhes' : 'Details'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
