import { Language, ProductItem, PillarValue, WhatsAppServiceOption } from '../types';

export const BRAND_COLORS = {
  primary: '#59572D',     // Verde Oliva Escuro da Marca (#59572D)
  secondary: '#4A3612',   // Marrom Terroso Nobre (#4A3612)
  accent: '#716E41',      // Verde Oliva Médio / Sálvia (#716E41)
  neutralLight: '#F8EFE3',// Fundo Beje Externo (#F8EFE3)
  canvasBeige: '#FCF8F2', // Tom mais clarinho do beje para o container principal
  cardBg: '#ffffff',      // Fundo dos cartões
  extra: '#4A3612',       // Acento terroso
};

export const ASSETS = {
  logo: 'https://i.ibb.co/NdvtP366/Whats-App-Image-2026-09-30-at-8-24-06-AM.jpg',
  avatar: 'https://i.ibb.co/NdvtP366/Whats-App-Image-2026-09-30-at-8-24-06-AM.jpg',
  pwaIcon: 'https://i.ibb.co/NdvtP366/Whats-App-Image-2026-09-30-at-8-24-06-AM.jpg',
  ebcLogo: 'https://i.ibb.co/XN3qK0f/logo-ebc-pdf.png',
  // Product images and founder photos provided by user
  imgBarraOval: 'https://i.ibb.co/Hp964jgK/patitour-2026-10-07-T095704-721.png',
  imgBarraRetangular: 'https://i.ibb.co/7Ny9ZWcF/patitour-2026-10-07-T102522-617.png',
  imgMassageadores: 'https://i.ibb.co/XfkP2G7z/patitour-2026-10-20-T081551-285.png',
  imgBarraRedondo: 'https://i.ibb.co/m5dCHKRJ/patitour-2026-10-20-T081406-431.png',
  imgSaboneteLiquido: 'https://i.ibb.co/VWv4vktP/patitour-2026-10-07-T102634-472.png',
  imgLaura: 'https://i.ibb.co/dJ0KJrJP/patitour-2026-10-14-T141721-014.png',
  imgRhuana: 'https://i.ibb.co/SYQVr8j/patitour-2026-10-14-T141839-720.png',
  imgLauraRhuana: 'https://i.ibb.co/XrcYSt7m/patitour-2026-10-15-T154205-102.png',
};

export const CONTACT_LINKS = {
  menuUrl: 'https://auravegana.lojavirtualnuvem.com.br/',
  shopUrl: 'https://auravegana.lojavirtualnuvem.com.br/',
  instagramUrl: 'https://www.instagram.com/auraveganacosmeticos/',
  whatsappNumber: '5511943936946',
  whatsappDisplay: '+55 (11) 94393-6946',
  ebcUrl: 'https://www.easybyzcreator.com',
  location: 'Sabonetes Artesanais Veganos',
};

export const TRANSLATIONS = {
  pt: {
    langLabel: 'PT',
    langName: 'Português',
    brandName: 'Aura Vegana',
    brandConcept: 'SABONETES ARTESANAIS VEGANOS',
    slogan: '',
    momentTagline: 'Seu Momento de cuidado COMEÇA AQUI!',
    subtitle: 'Sabonetes Artesanais Veganos com Aromas Suaves e Glicerina Hipoalergênica',
    chefBadge: '100% Vegano',
    locationBadge: 'Glicerina Hipoalergênica',
    deliveryBadge: 'Loja Oficial Online',
    bioIntro: 'O verdadeiro autocuidado nasce do respeito ao seu corpo e à natureza.',
    readMore: 'Conheça o Propósito & Quem Somos',
    agendarConsulta: 'Fazer Pedido na Loja Virtual',
    closeBio: 'Fechar história',
    quickActionsTitle: 'COMO PODEMOS CUIDAR DA SUA PELE HOJE?',

    // Main Hero CTA
    mainCta: {
      tag: 'LOJA VIRTUAL OFICIAL',
      title: 'Acesse Nossa Loja & Faça Seu Pedido',
      description: 'Sabonetes artesanais veganos produzidos com glicerina hipoalergênica, extratos de aloe vera e calêndula. Aromas suaves de lavanda, camomila e erva-doce para cuidar da sua pele sem agredir.',
      buttonText: 'Acessar Loja Virtual',
      url: CONTACT_LINKS.shopUrl,
    },

    // Social links bar
    socialLabels: {
      instagram: 'Instagram',
      instagramHandle: '@auraveganacosmeticos',
      shop: 'Loja Virtual',
      shopHandle: 'auravegana.lojavirtualnuvem.com.br',
      whatsapp: 'WhatsApp',
      whatsappHandle: '+55 (11) 94393-6946',
      menu: 'Loja Virtual',
      menuHandle: 'auravegana.lojavirtualnuvem.com.br',
    },

    // Section Titles
    productsTitle: 'NOSSOS SABONETES ARTESANAIS',
    productsSubtitle: 'Conheça nossas linhas exclusivas em barra',
    viewDetails: 'Ver detalhes & produtos da foto',
    orderOnWa: 'Pedir no WhatsApp',
    orderOnMenu: 'Comprar na Loja',

    // PRODUTOS EM BARRA ARTESANAIS
    products: [
      {
        id: 'combo-sabonetes-massageadores',
        title: 'Combo de Sabonetes Massageadores',
        category: 'Linha Massageadora',
        description: 'Sabonete massageador com extrato de calêndula. Coleção artesanal com nódulos anatômicos que estimulam a circulação. Base glicerinada vegetal hipoalergênica que higieniza e hidrata.',
        badge: 'Formato Massageador • 3 Aromas',
        image: ASSETS.imgMassageadores,
        tagline: 'Sabonete massageador com extrato de calêndula • Sensação relaxante',
        actionUrl: CONTACT_LINKS.shopUrl,
        whatsappMessage: 'Olá! Gostaria de pedir o Combo de Sabonetes Massageadores da Aura Vegana!',
        formatType: 'massageador',
        identifiedProducts: [
          {
            name: 'Sabonete massageador de camomila',
            colorName: 'Amarelo',
            colorCode: '#D4A017',
            scent: 'Extrato de calêndula • Aroma suave com efeito relaxante',
          },
          {
            name: 'Sabonete massageador de erva-doce',
            colorName: 'Verde',
            colorCode: '#4A6B3A',
            scent: 'Extrato de calêndula • Toque refrescante e revigorante',
          },
          {
            name: 'Sabonete massageador de lavanda',
            colorName: 'Roxo',
            colorCode: '#7E5A8D',
            scent: 'Extrato de calêndula • Alívio de tensões e sensação de paz',
          },
        ],
      },
      {
        id: 'combo-sabonetes-barra-redondo',
        title: 'Combo de Sabonetes em Barra Redondo',
        category: 'Linha em Barra Redonda',
        description: 'Sabonetes em barra redondo com extrato de calêndula. Coleção artesanal com base glicerinada vegetal hipoalergênica que higieniza e hidrata suavemente a pele.',
        badge: 'Formato Redondo • 3 Aromas',
        image: ASSETS.imgBarraRedondo,
        tagline: 'Com extrato de calêndula • Formato circular clássico e toque aveludado',
        actionUrl: CONTACT_LINKS.shopUrl,
        whatsappMessage: 'Olá! Gostaria de pedir o Combo de Sabonetes em Barra Redondo da Aura Vegana!',
        formatType: 'redondo',
        identifiedProducts: [
          {
            name: 'Sabonete redondo de camomila',
            colorName: 'Amarelo',
            colorCode: '#D4A017',
            scent: 'Extrato de calêndula • Cuidado calmante e delicado',
          },
          {
            name: 'Sabonete redondo de erva-doce',
            colorName: 'Verde',
            colorCode: '#4A6B3A',
            scent: 'Extrato de calêndula • Limpeza suave e toque aveludado',
          },
          {
            name: 'Sabonete redondo de lavanda',
            colorName: 'Roxo',
            colorCode: '#7E5A8D',
            scent: 'Extrato de calêndula • Aroma relaxante e bem-estar',
          },
        ],
      },
      {
        id: 'linha-barra-oval',
        title: 'Sabonetes em Barra Oval',
        category: 'Linha em Barra Oval',
        description: 'Coleção artesanal de sabonetes com formato oval. Base glicerinada vegetal hipoalergênica que higieniza e hidrata.',
        badge: 'Formato Oval • 3 Aromas',
        image: ASSETS.imgBarraOval,
        tagline: 'Espuma cremosa e toque aveludado',
        actionUrl: CONTACT_LINKS.shopUrl,
        whatsappMessage: 'Olá! Gostaria de encomendar os Sabonetes em Barra Oval da Aura Vegana!',
        formatType: 'oval',
        identifiedProducts: [
          {
            name: 'Sabonete de camomila em barra oval',
            colorName: 'Amarelo',
            colorCode: '#D4A017',
            scent: 'Aroma suave de camomila com extratos calmantes',
          },
          {
            name: 'Sabonete de erva-doce em barra oval',
            colorName: 'Verde',
            colorCode: '#4A6B3A',
            scent: 'Aroma fresco e revigorante de erva-doce',
          },
          {
            name: 'Sabonete de lavanda em barra oval',
            colorName: 'Roxo',
            colorCode: '#7E5A8D',
            scent: 'Aroma relaxante e tranquilizante de lavanda',
          },
        ],
      },
      {
        id: 'linha-barra-retangular',
        title: 'Sabonetes em Barra Retangular',
        category: 'Linha em Barra Retangular',
        description: 'Barras retangulares clássicas. Com extrato glicerinado de aloe vera que potencializa hidratação.',
        badge: 'Formato Retangular • 3 Aromas',
        image: ASSETS.imgBarraRetangular,
        tagline: 'Corte artesanal clássico • Durabilidade e proteção para peles sensíveis',
        actionUrl: CONTACT_LINKS.shopUrl,
        whatsappMessage: 'Olá! Gostaria de pedir os Sabonetes em Barra Retangular da Aura Vegana!',
        formatType: 'retangular',
        identifiedProducts: [
          {
            name: 'Sabonete de camomila em barra retangular',
            colorName: 'Amarelo',
            colorCode: '#D4A017',
            scent: 'Cuidado delicado',
          },
          {
            name: 'Sabonete de erva-doce em barra retangular',
            colorName: 'Verde',
            colorCode: '#4A6B3A',
            scent: 'Limpeza suave',
          },
          {
            name: 'Sabonete de lavanda em barra retangular',
            colorName: 'Roxo',
            colorCode: '#7E5A8D',
            scent: 'Propriedades relaxantes',
          },
        ],
      },
    ] as ProductItem[],

    // Atendimento / Informações section
    whatsappSectionTitle: 'ATENDIMENTO & INFORMAÇÕES',
    whatsappSectionSubtitle: 'Conheça nossos sabonetes e faça seu pedido com segurança na Loja Virtual',
    whatsappOrderNotice: 'Faça seu pedido diretamente pela nossa Loja Virtual',
    whatsappOptions: [
      {
        id: 'duvidas',
        title: 'Dúvidas, Aromas & Encomendas',
        subtitle: 'Conheça nossos sabonetes artesanais para peles sensíveis e faça seu pedido direto na loja virtual oficial.',
        badge: 'Loja Oficial',
        message: 'Aura Vegana',
        icon: 'shop',
        highlightColor: 'from-[#59572D] to-[#4A3612]',
      },
    ] as WhatsAppServiceOption[],

    // Story Highlights
    storyQuote: {
      headline: 'Sabonetes Artesanais Veganos',
      text: 'A Aura Vegana nasceu da necessidade de utilizar sabonetes que não causassem alergias na pele, que não fossem testados em animais e nem de origem animal, com aromas suaves para quem tem sensibilidade olfativa.',
      minasText: 'Desenvolvidos com conhecimentos em química pelo IFSC, glicerina vegana hipoalergênica e extratos de aloe vera e calêndula.',
    },

    // 4 Pillars
    pillars: [
      {
        title: 'Glicerina Hipoalergênica',
        description: 'Não causa alergias, vermelhidão ou manchas, sendo ideal para peles sensíveis e dermatites.',
        icon: 'ShieldCheck',
      },
      {
        title: '100% Vegano',
        description: 'Zero ingredientes de origem animal e absolutamente nenhum teste em animais.',
        icon: 'Leaf',
      },
      {
        title: 'Aromas Suaves & Naturais',
        description: 'Com essência de lavanda, camomila e erva-doce para pessoas com sensibilidade olfativa.',
        icon: 'Sparkles',
      },
      {
        title: 'Aloe Vera & Calêndula',
        description: 'Extratos glicerinados que potencializam a hidratação e o cuidado diário da pele.',
        icon: 'Truck',
      },
    ] as PillarValue[],

    // Social follow section
    followInstagramTitle: 'SIGA NO INSTAGRAM',
    followInstagramSubtitle: 'Acompanhe a produção dos sabonetes, novidades e bastidores da marca',
    followButton: 'Seguir @auraveganacosmeticos',

    // Modal full bio & Quem Somos
    bioModal: {
      title: 'Quem Somos • Aura Vegana',
      subtitle: 'Fundada por Rhuana e Laura',
      p1: 'A Aura vegana surgiu a partir da necessidade de utilizar sabonetes que não causassem alergias na pele, que não fossem testados em animais e nem de origem animal. Além disso, existia a busca por produtos com aromas suaves, para evitar desconforto em pessoas com sensibilidade olfativa.',
      p2: 'A Rhuana, uma das fundadoras, estava incomodada com a irritação na pele e com aromas fortes dos cosméticos. Ela já tinha conhecimentos básicos sobre produção de sabonetes artesanais e conhecimentos em química, então buscou formas de desenvolver seu próprio sabonete atendendo as suas necessidades de sensibilidade na pele e olfativa.',
      p3: 'A Laura, também fundadora da marca, tinha o objetivo de criar uma marca de cosméticos veganos, considerando a preocupação com o tratamento e uso dos animais nas indústrias. Além disso, ela também possui conhecimentos em edição de vídeo. Juntas, as duas uniram as necessidades e conhecimentos para fundar a Aura vegana.',
      p4: 'Nossos sabonetes são produzidos considerando os conhecimentos em química — uma das fundadoras é formada em Licenciatura em Química pelo Instituto Federal de Santa Catarina (IFSC).',
      quoteHighlight: 'A Aura vegana tem o propósito de oferecer sabonetes veganos com aromas suaves!',
      section1Title: 'Origem & Nossas Fundadoras',
      section1Subtitle: 'A união entre ciência, sensibilidade e respeito aos animais.',
      section1Paragraphs: [
        'A Aura vegana surgiu a partir da necessidade de utilizar sabonetes que não causassem alergias na pele, que não fossem testados em animais e nem de origem animal.',
        'Existia também a busca por produtos com aromas suaves, para evitar desconforto em pessoas com sensibilidade olfativa.',
        'A Rhuana, incomodada com irritações e aromas fortes, aliou seus conhecimentos em química para formular sabonetes gentis e eficazes.',
        'A Laura fortaleceu o propósito com seu compromisso inegociável pelo bem-estar animal e comunicação visual da marca.',
        'Juntas, fundaram a Aura Vegana para oferecer produtos que realmente cuidam da saúde da pele sem agredir.',
      ],
      section2Title: 'Nossa Composição & Benefícios',
      section2Paragraphs: [
        'Desenvolvemos sabonetes artesanais com ingredientes selecionados para quem tem sensibilidade de pele e/ou olfativa e busca cosméticos veganos não testados em animais.',
        'Elaborado considerando conhecimentos químicos.',
        'Ao utilizar glicerina vegana hipoalergênica, oferecemos sabonetes que não causam alergias, vermelhidão ou manchas, e inclusive podem ajudar com dermatites.',
        'Os aromas da lavanda, camomila e erva-doce são suaves e apresentam características relaxantes, calmantes e refrescantes.',
        'Também utilizamos na composição extratos glicerinados de aloe vera e calêndula, que potencializam a hidratação e proteção da pele.',
      ],
      manifestoTitle: '🌿 Propósito da Aura Vegana:',
      manifestoLines: [
        'Oferecer sabonetes veganos artesanais com aromas suaves.',
        'Glicerina hipoalergênica que protege e acolhe peles sensíveis.',
        'Zero crueldade animal e respeito absoluto à natureza.',
      ],
      manifestoPillars: [
        'Aromas suaves.',
        'Elaborado considerando conhecimentos químicos.',
        '100% Vegano.',
      ],
    },

    featuresList: [
      'AURA VEGANA • SABONETES ARTESANAIS',
      'Ingredientes selecionados',
      'Glicerina vegana hipoalergênica',
      'Extratos glicerinados de aloe vera e calêndula',
      'Aromas suaves: Lavanda, Camomila e Erva-Doce',
      'Opções em barra massageadora, redonda, oval e retangular',
      'Elaborado considerando conhecimentos químicos',
      '100% Vegano e Livre de Testes em Animais',
    ],

    foundersStory: {
      sectionTitle: 'QUEM SOMOS • NOSSAS FUNDADORAS',
      sectionSubtitle: 'A história por trás da criação da marca e o propósito das irmãs Laura e Rhuana',
      badge: 'Irmãs & Fundadoras',
      leadP1: 'A Aura vegana surgiu a partir da necessidade de utilizar sabonetes que não causassem alergias na pele, que não fossem testados em animais e nem de origem animal. Além disso, existia a busca por produtos com aromas suaves, para evitar desconforto em pessoas com sensibilidade olfativa.',
      leadP2: 'Assim, as irmãs, Laura e Rhuana, juntaram seus conhecimentos e necessidades para fundar a Aura vegana.',
      featuredPhotoTitle: 'Laura & Rhuana',
      featuredPhotoBadge: 'Fundadoras da Aura Vegana',
      featuredPhotoHint: 'Foto de destaque das irmãs',
      rhuana: {
        name: 'Rhuana',
        role: 'Co-fundadora • Conhecimentos em Química',
        badge: 'Sensibilidade na Pele & Olfativa',
        story: 'A Rhuana, diagnosticada com autismo, estava incomodada com a irritação na pele e com aromas de alguns cosméticos, ela já tinha conhecimentos básicos sobre produção de sabonetes artesanais, e conhecimentos em química, então buscou formas de desenvolver seu próprio sabonete atendendo às suas necessidades de sensibilidade na pele e olfativa.',
      },
      laura: {
        name: 'Laura',
        role: 'Co-fundadora • Defesa Animal & Edição',
        badge: 'Cosméticos Veganos\nEdição de Vídeos',
        story: 'A Laura, também fundadora da marca, tinha objetivo de criar uma marca de cosméticos veganos, considerando a preocupação com o tratamento e uso dos animais nas indústrias. Além disso, ela também possui conhecimentos em edição de vídeo.',
      },
      closingQuote: 'Nós, Laura e Rhuana, desenvolvemos sabonetes artesanais, com ingredientes selecionados considerando nossos objetivos em consumir e oferecer soluções para quem também tem sensibilidade seja de pele e/ou olfativa e busca por cosméticos de origem vegana e não testados em animais.',
      closingAuthor: 'Laura & Rhuana',
      closingRole: 'Fundadoras da Aura Vegana',
    },

    liquidSoapSection: {
      badge: 'LINHA LÍQUIDA VEGANA',
      title: 'Também produzimos sabonetes líquidos',
      text: 'Nessa mesma proposta dos sabonetes em barra, com glicerina vegana hipoalergênica e extrato de aloe vera, visando consumir e oferecer outras soluções em cosméticos veganos.',
      tag: 'Glicerina Vegana Hipoalergênica • Extrato de Aloe Vera',
      cta: 'Ver Sabonetes Líquidos na Loja',
    },

    share: 'Compartilhar',
    copiedToast: 'Link copiado para a área de transferência!',
    qrCodeTitle: 'QR Code Aura Vegana',
    qrCodeSubtitle: 'Aponte a câmera do celular para abrir o perfil',
    devBy: 'DESENVOLVIDO POR',
  },

  en: {
    langLabel: 'EN',
    langName: 'English',
    brandName: 'Aura Vegana',
    brandConcept: 'HANDMADE VEGAN SOAPS',
    slogan: 'Gentleness and care for your skin',
    momentTagline: 'Your Care Moment BEGINS HERE!',
    subtitle: 'Artisan Vegan Soaps with Gentle Scents & Hypoallergenic Glycerin',
    chefBadge: '100% Vegan',
    locationBadge: 'Hypoallergenic Glycerin',
    deliveryBadge: 'Official Online Store',
    bioIntro: 'True self-care is born from deep respect for your body and the Earth.',
    readMore: 'Discover Our Story & Purpose',
    agendarConsulta: 'Order at Online Store',
    closeBio: 'Close Story',
    quickActionsTitle: 'HOW CAN WE CARE FOR YOUR SKIN TODAY?',

    mainCta: {
      tag: 'OFFICIAL ONLINE STORE',
      title: 'Visit Our Store & Order Online',
      description: 'Artisan vegan soaps produced with hypoallergenic glycerin, aloe vera, and calendula extracts. Gentle soothing scents of lavender, chamomile, and fennel crafted for sensitive skin.',
      buttonText: 'Open Online Store',
      url: CONTACT_LINKS.shopUrl,
    },

    socialLabels: {
      instagram: 'Instagram',
      instagramHandle: '@auraveganacosmeticos',
      shop: 'Online Store',
      shopHandle: 'auravegana.lojavirtualnuvem.com.br',
      whatsapp: 'WhatsApp',
      whatsappHandle: '+55 (11) 94393-6946',
      menu: 'Online Store',
      menuHandle: 'auravegana.lojavirtualnuvem.com.br',
    },

    productsTitle: 'OUR ARTISAN SOAPS',
    productsSubtitle: 'Explore our exclusive artisan bar soap collections',
    viewDetails: 'View details & products in photo',
    orderOnWa: 'Inquire on WhatsApp',
    orderOnMenu: 'Shop in Store',

    products: [
      {
        id: 'combo-sabonetes-massageadores',
        title: 'Massage Soap Bars Combo',
        category: 'Massage Bar Line',
        description: 'Massage soap with calendula extract. Artisan collection featuring anatomical nodules that stimulate circulation and soothe the body. Hypoallergenic vegetable glycerin base that cleanses and hydrates.',
        badge: 'Massage Format • 3 Scents',
        image: ASSETS.imgMassageadores,
        tagline: 'Massage soap with calendula extract • Invigorating nodules and relaxation',
        actionUrl: CONTACT_LINKS.shopUrl,
        whatsappMessage: 'Hello! I would like to order the Massage Soap Bars Combo from Aura Vegana!',
        formatType: 'massageador',
        identifiedProducts: [
          {
            name: 'Chamomile massage soap',
            colorName: 'Yellow',
            colorCode: '#D4A017',
            scent: 'Calendula extract • Gentle chamomile scent with soothing effect',
          },
          {
            name: 'Fennel massage soap',
            colorName: 'Green',
            colorCode: '#4A6B3A',
            scent: 'Calendula extract • Fresh, revitalizing herbal touch',
          },
          {
            name: 'Lavender massage soap',
            colorName: 'Purple',
            colorCode: '#7E5A8D',
            scent: 'Calendula extract • Relieves tension with calming aroma',
          },
        ],
      },
      {
        id: 'combo-sabonetes-barra-redondo',
        title: 'Round Bar Soaps Combo',
        category: 'Round Bar Line',
        description: 'Round bar soaps with calendula extract. Artisan collection with hypoallergenic vegetable glycerin base that gently cleanses and moisturizes the skin.',
        badge: 'Round Format • 3 Scents',
        image: ASSETS.imgBarraRedondo,
        tagline: 'With calendula extract • Classic circular shape and velvety lather',
        actionUrl: CONTACT_LINKS.shopUrl,
        whatsappMessage: 'Hello! I would like to order the Round Bar Soaps Combo from Aura Vegana!',
        formatType: 'redondo',
        identifiedProducts: [
          {
            name: 'Chamomile round soap',
            colorName: 'Yellow',
            colorCode: '#D4A017',
            scent: 'Calendula extract • Calming and delicate skin care',
          },
          {
            name: 'Fennel round soap',
            colorName: 'Green',
            colorCode: '#4A6B3A',
            scent: 'Calendula extract • Soft cleanse and velvety touch',
          },
          {
            name: 'Lavender round soap',
            colorName: 'Purple',
            colorCode: '#7E5A8D',
            scent: 'Calendula extract • Relaxing scent and daily wellness',
          },
        ],
      },
      {
        id: 'linha-barra-oval',
        title: 'Oval Bar Soaps',
        category: 'Bar Soap Line • Oval Shape',
        description: 'Artisan collection of oval bar soaps. Hypoallergenic vegetable glycerin base that gently cleanses and hydrates.',
        badge: 'Oval Shape • 3 Scents',
        image: ASSETS.imgBarraOval,
        tagline: 'Creamy lather and silky touch',
        actionUrl: CONTACT_LINKS.shopUrl,
        whatsappMessage: 'Hello! I would like to order the Oval Bar Soaps from Aura Vegana!',
        formatType: 'oval',
        identifiedProducts: [
          {
            name: 'Chamomile soap in oval bar',
            colorName: 'Yellow',
            colorCode: '#D4A017',
            scent: 'Gentle chamomile scent with soothing extracts',
          },
          {
            name: 'Fennel soap in oval bar',
            colorName: 'Green',
            colorCode: '#4A6B3A',
            scent: 'Fresh, revitalizing herbal fennel scent',
          },
          {
            name: 'Lavender soap in oval bar',
            colorName: 'Purple',
            colorCode: '#7E5A8D',
            scent: 'Calming and relaxing lavender notes',
          },
        ],
      },
      {
        id: 'linha-barra-retangular',
        title: 'Rectangular Bar Soaps',
        category: 'Bar Soap Line • Rectangular Shape',
        description: 'Classic rectangular bars. With glycerin extract of aloe vera that enhances hydration.',
        badge: 'Rectangular Shape • 3 Scents',
        image: ASSETS.imgBarraRetangular,
        tagline: 'Classic artisan cut • Longevity and skin barrier shield',
        actionUrl: CONTACT_LINKS.shopUrl,
        whatsappMessage: 'Hello! I would like to order the Rectangular Bar Soaps from Aura Vegana!',
        formatType: 'retangular',
        identifiedProducts: [
          {
            name: 'Chamomile soap in rectangular bar',
            colorName: 'Yellow',
            colorCode: '#D4A017',
            scent: 'Delicate care',
          },
          {
            name: 'Fennel soap in rectangular bar',
            colorName: 'Green',
            colorCode: '#4A6B3A',
            scent: 'Soft cleanse',
          },
          {
            name: 'Lavender soap in rectangular bar',
            colorName: 'Purple',
            colorCode: '#7E5A8D',
            scent: 'Relaxing properties',
          },
        ],
      },
    ] as ProductItem[],

    whatsappSectionTitle: 'CUSTOMER CARE & STORE ORDERS',
    whatsappSectionSubtitle: 'Learn more about artisan soaps and place your orders securely at our Online Store',
    whatsappOrderNotice: 'Orders are placed directly via our Official Online Store',
    whatsappOptions: [
      {
        id: 'duvidas',
        title: 'Inquiries, Scents & Custom Orders',
        subtitle: 'Discover our artisan hypoallergenic soaps and place your orders securely in our official online store.',
        badge: 'Official Store',
        message: 'Aura Vegana',
        icon: 'shop',
        highlightColor: 'from-[#59572D] to-[#4A3612]',
      },
    ] as WhatsAppServiceOption[],

    storyQuote: {
      headline: 'Handmade Vegan Soaps',
      text: 'Aura Vegana was created to craft artisan soaps that cause zero skin allergy or irritation, free from animal testing and animal ingredients, with gentle scents for sensitive noses.',
      minasText: 'Crafted with chemical science knowledge from IFSC, hypoallergenic vegan glycerin, aloe vera, and calendula.',
    },

    pillars: [
      {
        title: 'Hypoallergenic Glycerin',
        description: 'Zero redness or irritation, ideal for sensitive skin and dermatitis.',
        icon: 'ShieldCheck',
      },
      {
        title: '100% Vegan',
        description: 'Zero animal testing and zero animal-derived ingredients.',
        icon: 'Leaf',
      },
      {
        title: 'Gentle Scents',
        description: 'With essence of lavender, chamomile and fennel for people with olfactory sensitivity.',
        icon: 'Sparkles',
      },
      {
        title: 'Aloe Vera & Calendula',
        description: 'Glycerinated botanical extracts boosting deep natural skin hydration.',
        icon: 'Truck',
      },
    ] as PillarValue[],

    followInstagramTitle: 'FOLLOW ON INSTAGRAM',
    followInstagramSubtitle: 'Follow soap making, behind the scenes and brand updates',
    followButton: 'Follow @auraveganacosmeticos',

    bioModal: {
      title: 'About Us • Aura Vegana',
      subtitle: 'Founded by Rhuana and Laura • Gentleness and care for your skin',
      p1: 'Aura Vegana arose from the necessity for soaps that would not trigger skin allergies, were never tested on animals, and contained no animal-derived components, along with gentle aromas suited for olfactory sensitivities.',
      p2: 'Rhuana, one of the founders, suffered from skin irritation and harsh cosmetic aromas. With knowledge in soap crafting and chemistry, she developed custom recipes answering skin and scent sensitivities.',
      p3: 'Laura, co-founder, aimed to build a vegan brand committed to ethical treatment of animals and creative media. Together they united their passions to launch Aura Vegana.',
      p4: 'Our soaps are crafted with scientific chemical grounding — one of our founders holds a Chemistry Degree from the Federal Institute of Santa Catarina (IFSC).',
      quoteHighlight: 'Aura Vegana’s purpose is to offer vegan soaps with gentle aromas, providing gentleness and care for your skin!',
    },

    featuresList: [
      'AURA VEGANA • ARTISAN SOAPS',
      'Gentleness and care for your skin',
      'Hypoallergenic vegan glycerin base',
      'Aloe vera & calendula botanical extracts',
      'Gentle scents: Lavender, Chamomile, and Fennel',
      'Available in massage, round, oval, and rectangular bar options',
      'Formulated with chemistry expertise from IFSC',
      '100% Vegan and Cruelty-Free',
    ],

    foundersStory: {
      sectionTitle: 'ABOUT US • OUR FOUNDERS',
      sectionSubtitle: 'The story behind the brand and the mission of sisters Laura & Rhuana',
      badge: 'Sisters & Founders',
      leadP1: 'Aura Vegana was born from the necessity to craft soaps that would not trigger skin allergies, were never tested on animals, and contained no animal-derived ingredients, alongside gentle aromas to prevent discomfort for individuals with olfactory sensitivities.',
      leadP2: 'Thus, sisters Laura and Rhuana joined their knowledge and needs to establish Aura Vegana.',
      featuredPhotoTitle: 'Laura & Rhuana',
      featuredPhotoBadge: 'Founders of Aura Vegana',
      featuredPhotoHint: 'Featured photograph of the two founders',
      rhuana: {
        name: 'Rhuana',
        role: 'Co-Founder • Chemistry & Formulation',
        badge: 'Skin & Olfactory Sensitivity',
        story: 'Rhuana, diagnosed with autism, felt frustrated with skin irritation and intense cosmetics scents. With foundational knowledge in handcrafted soap making and chemistry, she sought ways to formulate soaps meeting her skin and olfactory sensitivity needs.',
      },
      laura: {
        name: 'Laura',
        role: 'Co-Founder • Animal Welfare & Media',
        badge: 'Vegan Ethics\nVideo Editing',
        story: 'Laura, co-founder, aimed to establish a vegan cosmetic brand driven by deep concern for ethical treatment of animals in industry. She also brings skills in creative video editing.',
      },
      closingQuote: 'We, Laura and Rhuana, handcraft artisan soaps using selected ingredients aligned with our mission to offer solutions for anyone with sensitive skin or olfactory sensitivity who seeks vegan and cruelty-free cosmetics.',
      closingAuthor: 'Laura & Rhuana',
      closingRole: 'Founders of Aura Vegana',
    },

    liquidSoapSection: {
      badge: 'VEGAN LIQUID LINE',
      title: 'We also produce liquid soaps',
      text: 'With the same concept as our bar soaps, formulated with hypoallergenic vegan glycerin and aloe vera extract, aiming to offer and enjoy mindful solutions in vegan cosmetics.',
      tag: 'Hypoallergenic Vegan Glycerin • Aloe Vera',
      cta: 'View Liquid Soaps in Store',
    },

    share: 'Share',
    copiedToast: 'Link copied to clipboard!',
    qrCodeTitle: 'Aura Vegana QR Code',
    qrCodeSubtitle: 'Scan with your smartphone camera to open profile',
    devBy: 'DEVELOPED BY',
  },
};
