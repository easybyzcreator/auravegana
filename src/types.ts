export type Language = 'pt' | 'en';

export interface IdentifiedProduct {
  name: string;
  colorName: string;
  colorCode: string;
  scent: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  description: string;
  badge?: string;
  image: string;
  tagline?: string;
  linkText?: string;
  actionUrl?: string;
  whatsappMessage?: string;
  colorTone?: 'amarelo' | 'verde' | 'roxo';
  formatType?: 'oval' | 'retangular' | 'liquido' | 'massageador' | 'redondo';
  identifiedProducts?: IdentifiedProduct[];
}

export interface SocialLink {
  id: string;
  name: string;
  icon: string;
  url: string;
  sublabel: string;
  colorClass: string;
  accentBg: string;
}

export interface PillarValue {
  title: string;
  description: string;
  icon: string;
}

export interface WhatsAppServiceOption {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  message: string;
  icon: string;
  highlightColor: string;
}
