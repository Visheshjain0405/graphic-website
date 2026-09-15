export type PortfolioCategory =
  | "All Work"
  | "Logo Design"
  | "Brand Identity"
  | "Packaging"
  | "Product Design"
  | "Marketing Materials"
  | "Social Media"
  | "Stationery";

export interface PortfolioProject {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "All Work">;
  description: string;
  summary: string;
  year: string;
  client?: string;
  services: string[];
  coverImage: string;
  images: string[];
  featured?: boolean;
  layout?: "portrait" | "landscape" | "square" | "wide";
  colorPalette?: string[];
  typography?: string[];
  deliverables?: string[];
  isSample?: boolean;
}

export interface HeroPreviewItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
}

export interface StudioLogoItem {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface StudioPackagingItem {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface StudioSocialItem {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  isSample?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const BRAND_CLIENTS = [
  "ÆTHEL LOGOS",
  "MONUMENT IDENTITY",
  "VELORA PACKAGING",
  "NOMA EDITORIAL",
  "ORIGIN STATIONERY",
  "STUDIO NOIR CAMPAIGNS",
  "KAVYA BOTANICALS",
  "AURA JEWELRY",
];

export const STUDIO_LOGOS: StudioLogoItem[] = [
  {
    id: "logo-1",
    title: "Minimalist Emblem Marks",
    category: "Logo Design • Monogram",
    image: "https://i.pinimg.com/736x/87/1a/16/871a16d026c2e3e514940b69a9c6b098.jpg",
    year: "2025",
  },
  {
    id: "logo-2",
    title: "Geometric Brand Insignia",
    category: "Logo Design • Symbol",
    image: "https://i.pinimg.com/736x/5f/22/ee/5f22ee71d1370446152002ef65298b5a.jpg",
    year: "2025",
  },
  {
    id: "logo-3",
    title: "Luxury Monogram Suite",
    category: "Logo Design • Luxury",
    image: "https://i.pinimg.com/1200x/ce/25/b8/ce25b8e24a576a4e33a6ecad90b9b383.jpg",
    year: "2024",
  },
  {
    id: "logo-4",
    title: "Modern Minimal Logotypes",
    category: "Logo Design • Wordmark",
    image: "https://i.pinimg.com/1200x/88/36/92/883692e44c00f92eff61f309b41def2b.jpg",
    year: "2025",
  },
  {
    id: "logo-5",
    title: "Abstract Geometric Logos",
    category: "Logo Design • Abstract",
    image: "https://i.pinimg.com/1200x/be/c0/ae/bec0aed46fced5b8834fadae54889ce7.jpg",
    year: "2024",
  },
  {
    id: "logo-6",
    title: "Considered Line-Art Emblems",
    category: "Logo Design • Emblem",
    image: "https://i.pinimg.com/736x/6e/09/19/6e0919a2c3373b600b0c5380d3ddfc40.jpg",
    year: "2025",
  },
  {
    id: "logo-7",
    title: "Editorial Wordmark Architecture",
    category: "Logo Design • Editorial",
    image: "https://i.pinimg.com/1200x/9a/05/7b/9a057b6f652a42c4a89d0a988020c60f.jpg",
    year: "2024",
  },
  {
    id: "logo-8",
    title: "High-Craft Corporate Marks",
    category: "Logo Design • Corporate",
    image: "https://i.pinimg.com/1200x/97/8a/e1/978ae1525cee3a181c493bfc30d3f272.jpg",
    year: "2025",
  },
  {
    id: "logo-9",
    title: "Monochrome Symbol Systems",
    category: "Logo Design • B&W System",
    image: "https://i.pinimg.com/1200x/07/e1/73/07e173140c2c849c43b6e04724f528ba.jpg",
    year: "2024",
  },
  {
    id: "logo-10",
    title: "Signature Monograms Collection",
    category: "Logo Design • Signature",
    image: "https://i.pinimg.com/736x/2f/e8/74/2fe874108fb1c3e47fe88387587adb26.jpg",
    year: "2025",
  },
];

export const STUDIO_PACKAGING: StudioPackagingItem[] = [
  {
    id: "pkg-1",
    title: "Luxury Foil Cosmetic Boxes",
    category: "Packaging • Cosmetic Box",
    image: "https://i.pinimg.com/736x/a8/1a/58/a81a58d5ed0008afbdefff9c17e55e60.jpg",
    year: "2025",
  },
  {
    id: "pkg-2",
    title: "Tactile Product Outer Sleeve & Box",
    category: "Packaging • Box Architecture",
    image: "https://i.pinimg.com/736x/2b/d8/72/2bd87240d2daae61ed1eb7963ca9a04e.jpg",
    year: "2025",
  },
  {
    id: "pkg-3",
    title: "Amber Glass Dropper & Bottle Labels",
    category: "Packaging • Bottle & Jar Label",
    image: "https://i.pinimg.com/1200x/99/9a/5c/999a5c6846b4a5d7b9124cce8eca0b3a.jpg",
    year: "2024",
  },
  {
    id: "pkg-4",
    title: "Minimalist Retail Product Boxes",
    category: "Packaging • Retail Box",
    image: "https://i.pinimg.com/1200x/a8/8f/b2/a88fb2da6f0d07e5ee170c32ecc795ea.jpg",
    year: "2025",
  },
  {
    id: "pkg-5",
    title: "Luxury Unboxing Architecture & Pouches",
    category: "Packaging • Unboxing Experience",
    image: "https://i.pinimg.com/1200x/48/3a/29/483a297ad2770cac9d7ac063911eb288.jpg",
    year: "2024",
  },
];

export const STUDIO_SOCIAL: StudioSocialItem[] = [
  {
    id: "social-1",
    title: "Editorial Brand Carousel Post",
    category: "Social Media • Carousel",
    image: "https://i.pinimg.com/736x/73/9e/62/739e62e363fb49743538207f0a126109.jpg",
    year: "2025",
  },
  {
    id: "social-2",
    title: "Luxury Product Showcase Post",
    category: "Social Media • Product Post",
    image: "https://i.pinimg.com/736x/72/bb/86/72bb867d757a6aa34aa54b9f897dd3d6.jpg",
    year: "2025",
  },
  {
    id: "social-3",
    title: "Minimal Typographic Story Frame",
    category: "Social Media • Story Frame",
    image: "https://i.pinimg.com/736x/d2/84/e6/d284e6728d9892f643f4c6c9380044e5.jpg",
    year: "2025",
  },
  {
    id: "social-4",
    title: "Product Launch Promotional Banner",
    category: "Social Media • Launch Banner",
    image: "https://i.pinimg.com/1200x/47/9f/c8/479fc8d4a53bf563ca5fc6046e59c057.jpg",
    year: "2024",
  },
  {
    id: "social-5",
    title: "Brand Awareness Educational Grid",
    category: "Social Media • Educational Grid",
    image: "https://i.pinimg.com/1200x/2a/0c/b1/2a0cb1b6e1cf0032620ced8ad25903bb.jpg",
    year: "2025",
  },
  {
    id: "social-6",
    title: "Festival & Seasonal Offer Banner",
    category: "Social Media • Campaign Banner",
    image: "https://i.pinimg.com/1200x/44/cb/51/44cb516e941f75a6f1137e6f07d911a8.jpg",
    year: "2024",
  },
  {
    id: "social-7",
    title: "Creative Direction Feature Post",
    category: "Social Media • Editorial Post",
    image: "https://i.pinimg.com/736x/4a/11/cf/4a11cf479e0f91a0297fb799e3631fe6.jpg",
    year: "2025",
  },
  {
    id: "social-8",
    title: "High-Contrast Brand Announcement",
    category: "Social Media • Announcement",
    image: "https://i.pinimg.com/736x/e5/5a/09/e55a09cfac3736457a1a999a7ffbf8e1.jpg",
    year: "2024",
  },
  {
    id: "social-9",
    title: "Minimalist Identity Story Suite",
    category: "Social Media • Story Suite",
    image: "https://i.pinimg.com/736x/54/13/01/5413010141a3f3769c72490806f66908.jpg",
    year: "2025",
  },
  {
    id: "social-10",
    title: "Bespoke D2C Product Campaign",
    category: "Social Media • Campaign System",
    image: "https://i.pinimg.com/736x/86/8d/e5/868de5171962577c366e9f0e3e70f17f.jpg",
    year: "2025",
  },
];

export const HERO_PREVIEW_ITEMS: HeroPreviewItem[] = [
  {
    id: "preview-1",
    category: "Logo Design",
    title: "Minimalist Emblem Marks",
    subtitle: "Precision logo grid & spacing geometry",
    image: "https://i.pinimg.com/736x/87/1a/16/871a16d026c2e3e514940b69a9c6b098.jpg",
    tag: "01 • LOGO MARKS",
  },
  {
    id: "preview-2",
    category: "Packaging",
    title: "Luxury Foil Cosmetic Boxes",
    subtitle: "Tactile debossed box packaging & sleeves",
    image: "https://i.pinimg.com/736x/a8/1a/58/a81a58d5ed0008afbdefff9c17e55e60.jpg",
    tag: "02 • PRODUCT PACKAGING",
  },
  {
    id: "preview-3",
    category: "Social Media",
    title: "Editorial Brand Carousel Post",
    subtitle: "Instagram carousel grids & story frames",
    image: "https://i.pinimg.com/736x/73/9e/62/739e62e363fb49743538207f0a126109.jpg",
    tag: "03 • SOCIAL MEDIA GRAPHICS",
  },
  {
    id: "preview-4",
    category: "Packaging",
    title: "Amber Glass Bottle Labels",
    subtitle: "Bespoke bottle & jar label graphics",
    image: "https://i.pinimg.com/1200x/99/9a/5c/999a5c6846b4a5d7b9124cce8eca0b3a.jpg",
    tag: "04 • VESSEL LABELS",
  },
  {
    id: "preview-5",
    category: "Social Media",
    title: "Luxury Product Showcase Post",
    subtitle: "High-contrast promotional campaign banners",
    image: "https://i.pinimg.com/736x/72/bb/86/72bb867d757a6aa34aa54b9f897dd3d6.jpg",
    tag: "05 • PRODUCT CAMPAIGN",
  },
  {
    id: "preview-6",
    category: "Stationery",
    title: "Monument Corporate Flat-Lay",
    subtitle: "Textured paper business cards & foil envelopes",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1000&auto=format&fit=crop",
    tag: "06 • BUSINESS STATIONERY",
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "studio-social-collection-1",
    title: "Nuvora Social Media Campaign & Carousel Collection",
    category: "Social Media",
    year: "2025",
    client: "Nuvora Studio Atelier",
    summary: "Curated collection of 10 Instagram carousel posts, story frames, and product launch banners.",
    description: "A showcase of 10 social media post designs created by Nuvora Studio. Features multi-slide Instagram carousels, promotional product launch posts, story frame suites, festival offer banners, and educational brand awareness grids.",
    services: [
      "Instagram Carousel Grids",
      "Product Launch Banners",
      "Story Frame Layouts",
      "Festival & Offer Creatives",
      "Social Media Identity System"
    ],
    coverImage: "https://i.pinimg.com/736x/73/9e/62/739e62e363fb49743538207f0a126109.jpg",
    images: [
      "https://i.pinimg.com/736x/73/9e/62/739e62e363fb49743538207f0a126109.jpg",
      "https://i.pinimg.com/736x/72/bb/86/72bb867d757a6aa34aa54b9f897dd3d6.jpg",
      "https://i.pinimg.com/736x/d2/84/e6/d284e6728d9892f643f4c6c9380044e5.jpg",
      "https://i.pinimg.com/1200x/47/9f/c8/479fc8d4a53bf563ca5fc6046e59c057.jpg",
      "https://i.pinimg.com/1200x/2a/0c/b1/2a0cb1b6e1cf0032620ced8ad25903bb.jpg",
      "https://i.pinimg.com/1200x/44/cb/51/44cb516e941f75a6f1137e6f07d911a8.jpg",
      "https://i.pinimg.com/736x/4a/11/cf/4a11cf479e0f91a0297fb799e3631fe6.jpg",
      "https://i.pinimg.com/736x/e5/5a/09/e55a09cfac3736457a1a999a7ffbf8e1.jpg",
      "https://i.pinimg.com/736x/54/13/01/5413010141a3f3769c72490806f66908.jpg",
      "https://i.pinimg.com/736x/86/8d/e5/868de5171962577c366e9f0e3e70f17f.jpg",
    ],
    layout: "square",
    featured: true,
    colorPalette: ["#18181B", "#27272A", "#A1A1AA", "#E6C594", "#FAFAFA"],
    typography: ["Plus Jakarta Sans", "Cormorant Garamond"],
    isSample: false,
  },
  {
    id: "studio-packaging-collection-1",
    title: "Nuvora Product Packaging & Vessel Collection",
    category: "Packaging",
    year: "2025",
    client: "Nuvora Studio Atelier",
    summary: "Curated collection of 5 product box packaging architectures, amber glass bottle labels, and unboxing sleeves.",
    description: "A showcase of 5 product packaging designs crafted by Nuvora Studio. Features foil-stamped recycled stone paper boxes, amber glass dropper bottle labels, retail packaging dielines, and luxury unboxing sleeves.",
    services: [
      "Product Box Packaging",
      "Bottle & Jar Label Design",
      "Gold Foil & Embossing Specs",
      "Retail Box Architecture",
      "Unboxing Experience System"
    ],
    coverImage: "https://i.pinimg.com/736x/a8/1a/58/a81a58d5ed0008afbdefff9c17e55e60.jpg",
    images: [
      "https://i.pinimg.com/736x/a8/1a/58/a81a58d5ed0008afbdefff9c17e55e60.jpg",
      "https://i.pinimg.com/736x/2b/d8/72/2bd87240d2daae61ed1eb7963ca9a04e.jpg",
      "https://i.pinimg.com/1200x/99/9a/5c/999a5c6846b4a5d7b9124cce8eca0b3a.jpg",
      "https://i.pinimg.com/1200x/a8/8f/b2/a88fb2da6f0d07e5ee170c32ecc795ea.jpg",
      "https://i.pinimg.com/1200x/48/3a/29/483a297ad2770cac9d7ac063911eb288.jpg",
    ],
    layout: "square",
    featured: true,
    colorPalette: ["#1C1917", "#44403C", "#A8A29E", "#E6C594", "#F5F5F4"],
    typography: ["Cormorant Garamond", "Editorial New"],
    isSample: false,
  },
  {
    id: "studio-logo-collection-1",
    title: "Nuvora Emblem & Monogram Architecture Collection",
    category: "Logo Design",
    year: "2025",
    client: "Nuvora Studio Atelier",
    summary: "Curated collection of 10 primary brand logos, monograms, and emblem construction grids.",
    description: "A showcase of 10 custom logo designs created by Nuvora Studio. Featuring mathematical grid layouts, monogram marks, vector wordmarks, symbol construction, and black-and-white brand variations.",
    services: [
      "Primary Logo Design",
      "Monogram & Symbol Marks",
      "Logo Construction Grids",
      "Black & White Vector Specs",
      "Brand Insignia Guidelines"
    ],
    coverImage: "https://i.pinimg.com/736x/87/1a/16/871a16d026c2e3e514940b69a9c6b098.jpg",
    images: [
      "https://i.pinimg.com/736x/87/1a/16/871a16d026c2e3e514940b69a9c6b098.jpg",
      "https://i.pinimg.com/736x/5f/22/ee/5f22ee71d1370446152002ef65298b5a.jpg",
      "https://i.pinimg.com/1200x/ce/25/b8/ce25b8e24a576a4e33a6ecad90b9b383.jpg",
      "https://i.pinimg.com/1200x/88/36/92/883692e44c00f92eff61f309b41def2b.jpg",
      "https://i.pinimg.com/1200x/be/c0/ae/bec0aed46fced5b8834fadae54889ce7.jpg",
      "https://i.pinimg.com/736x/6e/09/19/6e0919a2c3373b600b0c5380d3ddfc40.jpg",
      "https://i.pinimg.com/1200x/9a/05/7b/9a057b6f652a42c4a89d0a988020c60f.jpg",
      "https://i.pinimg.com/1200x/97/8a/e1/978ae1525cee3a181c493bfc30d3f272.jpg",
      "https://i.pinimg.com/1200x/07/e1/73/07e173140c2c849c43b6e04724f528ba.jpg",
      "https://i.pinimg.com/736x/2f/e8/74/2fe874108fb1c3e47fe88387587adb26.jpg",
    ],
    layout: "portrait",
    featured: true,
    colorPalette: ["#08080A", "#111115", "#E6C594", "#B89357", "#FFFFFF"],
    typography: ["Cormorant Garamond", "Plus Jakarta Sans"],
    isSample: false,
  },
  {
    id: "aethel-logo-design",
    title: "Æthel Luxury Monogram & Logo System",
    category: "Logo Design",
    year: "2025",
    client: "Æthel Geneva & Mumbai",
    summary: "Precision logo construction, monogram iconography, and spacing grid architecture.",
    description: "A complete logo design suite for a high-end horology brand. The project includes mathematical construction grids, black-and-white vector variations, debossed metal insignia specifications, and luxury monogram marks for watch crowns.",
    services: [
      "Primary Logo Mark",
      "Monogram & Symbol",
      "Logo Construction Grid",
      "B&W Vector Variations",
      "Badge Architecture"
    ],
    coverImage: "https://i.pinimg.com/1200x/ce/25/b8/ce25b8e24a576a4e33a6ecad90b9b383.jpg",
    images: [
      "https://i.pinimg.com/1200x/ce/25/b8/ce25b8e24a576a4e33a6ecad90b9b383.jpg",
      "https://i.pinimg.com/736x/5f/22/ee/5f22ee71d1370446152002ef65298b5a.jpg",
      "https://i.pinimg.com/736x/87/1a/16/871a16d026c2e3e514940b69a9c6b098.jpg",
    ],
    layout: "portrait",
    featured: false,
    colorPalette: ["#08080A", "#111115", "#E6C594", "#B89357", "#FFFFFF"],
    typography: ["Cormorant Garamond", "Plus Jakarta Sans"],
    isSample: false,
  },
  {
    id: "monument-brand-identity",
    title: "Monument Atelier Complete Branding System",
    category: "Brand Identity",
    year: "2025",
    client: "Monument Architectural Group",
    summary: "Comprehensive brand identity guidelines, business stationery, and social media identity.",
    description: "An editorial branding case study featuring full brand color palettes, primary logotypes, business card mockups, letterheads, linen presentation folders, and brand application guidelines for an international architectural studio.",
    services: [
      "Visual Identity System",
      "Color Palette & Tokens",
      "Brand Guidelines Book",
      "Business Stationery",
      "Social Media Identity"
    ],
    coverImage: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542744094-3a31727223ec?q=80&w=1200&auto=format&fit=crop",
    ],
    layout: "wide",
    featured: false,
    colorPalette: ["#0B0C10", "#1F2833", "#C5C6C7", "#66FCF1", "#45A29E"],
    typography: ["Monument Serif", "Neue Haas Grotesk"],
    isSample: true,
  },
  {
    id: "velora-product-packaging",
    title: "Velora Botanical Cosmetic Vessels & Boxes",
    category: "Packaging",
    year: "2024",
    client: "Velora Artisanal Home",
    summary: "Gold foil debossed packaging boxes, amber glass bottle labels, and unboxing architecture.",
    description: "Tactile product packaging design featuring custom unboxing sleeves, foil-stamped recycled stone paper boxes, glass jar label graphics, and retail display packaging for luxury organic skincare.",
    services: [
      "Box Packaging Architecture",
      "Bottle & Jar Label Design",
      "Gold Foil & Embossing Specs",
      "Unboxing Architecture",
      "Retail Display Packaging"
    ],
    coverImage: "https://i.pinimg.com/736x/2b/d8/72/2bd87240d2daae61ed1eb7963ca9a04e.jpg",
    images: [
      "https://i.pinimg.com/736x/2b/d8/72/2bd87240d2daae61ed1eb7963ca9a04e.jpg",
      "https://i.pinimg.com/1200x/99/9a/5c/999a5c6846b4a5d7b9124cce8eca0b3a.jpg",
      "https://i.pinimg.com/1200x/48/3a/29/483a297ad2770cac9d7ac063911eb288.jpg",
    ],
    layout: "square",
    featured: false,
    colorPalette: ["#1C1917", "#44403C", "#A8A29E", "#E6C594", "#F5F5F4"],
    typography: ["Cormorant Garamond", "Editorial New"],
    isSample: false,
  },
  {
    id: "aura-product-photography",
    title: "Aura High Jewelry Product Photography & Renders",
    category: "Product Design",
    year: "2024",
    client: "Aura Fine Jewelry Atelier",
    summary: "E-commerce product visuals, studio macro photography, and 3D product showcase renders.",
    description: "High-craft product presentation for diamond and gemstone jewelry. Includes studio lighting direction, macro product detail shots, lifestyle compositions, and promotional hero banners for luxury e-commerce.",
    services: [
      "Commercial Product Photography",
      "E-Commerce Hero Renders",
      "Macro Detail Imagery",
      "Lifestyle Product Compositions",
      "Advertising Visual Creatives"
    ],
    coverImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
    ],
    layout: "landscape",
    featured: false,
    colorPalette: ["#09090B", "#18181B", "#D4AF37", "#F4E070", "#FAFAFA"],
    typography: ["Italiana Serif", "Plus Jakarta Sans"],
    isSample: true,
  },
  {
    id: "noma-marketing-materials",
    title: "Noma Art Biennale Posters & Catalogues",
    category: "Marketing Materials",
    year: "2024",
    client: "Noma Cultural Foundation",
    summary: "Large format art posters, exhibition catalogues, event brochures, and promotional campaign banners.",
    description: "A comprehensive print & marketing campaign for an international contemporary art biennale. Features high-contrast typographic posters, event brochures, outdoor hoardings, and sales presentation decks.",
    services: [
      "Event Poster Series",
      "Exhibition Hardcover Catalogue",
      "Outdoor Campaign Banners",
      "Promotional Flyers & Brochures",
      "Corporate Presentation Deck"
    ],
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    ],
    layout: "portrait",
    featured: false,
    colorPalette: ["#0F172A", "#1E293B", "#64748B", "#E2E8F0", "#F8FAFC"],
    typography: ["Editorial Serif", "Grotesk Sans"],
    isSample: true,
  },
  {
    id: "origin-corporate-stationery",
    title: "Origin Group Corporate Business Stationery Collection",
    category: "Stationery",
    year: "2024",
    client: "Origin Global Holdings",
    summary: "Textured paper business cards, debossed letterheads, linen folders, and corporate inserts.",
    description: "Bespoke executive stationery suite designed with heavy-grade cotton paper, copper foil edge painting, debossed logo marks, letterheads, and custom presentation envelopes.",
    services: [
      "Debossed Business Cards",
      "Corporate Letterheads",
      "Custom Foil Envelopes",
      "Linen Presentation Folders",
      "Notebooks & Corporate Inserts"
    ],
    coverImage: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542744094-3a31727223ec?q=80&w=1200&auto=format&fit=crop",
    ],
    layout: "wide",
    featured: false,
    colorPalette: ["#141414", "#2B2B2B", "#8C8C8C", "#E6C594", "#FFFFFF"],
    typography: ["Cinzel Serif", "Plus Jakarta Sans"],
    isSample: true,
  },
];

export const SERVICES: Service[] = [
  {
    id: "logo-brand-identity",
    number: "01",
    title: "Logo Design & Visual Identity",
    description: "We craft primary logos, monograms, symbol marks, logo spacing grids, and complete visual branding systems that give your business an undeniable category presence.",
    deliverables: [
      "Primary Brand Logos",
      "Monograms & Symbol Marks",
      "Logo Construction Grids",
      "Color Palettes & Typography",
      "Brand Identity Guidelines"
    ],
  },
  {
    id: "packaging-product-presentation",
    number: "02",
    title: "Product Packaging & Presentation",
    description: "Designing tactile product boxes, bottle labels, jars, pouches, cosmetic vessels, and commercial product photography compositions for retail and e-commerce.",
    deliverables: [
      "Product Box Architecture",
      "Bottle & Jar Label Design",
      "Foil Stamping & Embossing Specs",
      "Commercial Product Photos",
      "3D Product Renderings"
    ],
  },
  {
    id: "marketing-materials-print",
    number: "03",
    title: "Marketing Materials & Print Campaign",
    description: "Transforming promotional campaigns into high-impact posters, brochures, hoardings, catalogues, sales decks, and event collateral.",
    deliverables: [
      "Posters & Event Creatives",
      "Catalogues & Lookbooks",
      "Brochures & Sales Flyers",
      "Outdoor Banners & Hoardings",
      "Corporate Presentation Decks"
    ],
  },
  {
    id: "social-media-stationery",
    number: "04",
    title: "Social Media Graphics & Stationery",
    description: "Creating unified Instagram carousel systems, story frames, launch banners, together with premium executive stationery flat-lays.",
    deliverables: [
      "Instagram Carousel Grids",
      "Social Campaign Systems",
      "Debossed Business Cards",
      "Executive Letterheads & Envelopes",
      "Packaging Inserts & Notebooks"
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover & Audit",
    tagline: "Uncovering Core Brand Purpose",
    description: "We analyze your product, industry market, competitor visual landscape, and core target audience to define strategic graphic design objectives.",
  },
  {
    id: "define",
    number: "02",
    title: "Define Direction",
    tagline: "Moodboards & Typography Architecture",
    description: "We map out logo exploration sketches, color palettes, material specifications, and graphic design directions before vector production.",
  },
  {
    id: "design",
    number: "03",
    title: "Design & Render",
    tagline: "Crafting Assets & Mockups",
    description: "Our studio constructs vector logos, packaging box dielines, product photography setups, poster graphics, and realistic presentation mockups.",
  },
  {
    id: "deliver",
    number: "04",
    title: "Deliver & Systemize",
    tagline: "Flawless File Vault & Production Specs",
    description: "We package print-ready vector files (AI, EPS, SVG, WebP), CMYK color proofs, dieline PDFs, and comprehensive brand guidelines for flawless execution.",
  },
];

export const STATS: StatItem[] = [
  {
    id: "social",
    value: "10+",
    label: "Studio Social Creatives",
    sublabel: "Instagram carousels, launch banners & story suites",
  },
  {
    id: "packaging",
    value: "05",
    label: "Studio Packaging Designs",
    sublabel: "Luxury boxes, bottle labels & unboxing sleeves",
  },
  {
    id: "logos",
    value: "10+",
    label: "Studio Logo Marks",
    sublabel: "Custom logos, monograms & symbol marks",
  },
  {
    id: "craft",
    value: "100%",
    label: "Vector & Graphic Precision",
    sublabel: "Every line, grid & campaign crafted with perfection",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Nuvora Studio transformed our brand identity with an exceptional logo monogram and gold foil packaging system. Their precision in vector logo grid spacing is world-class.",
    name: "Vikramaditya Singhania",
    role: "Founder & Creative Director",
    company: "Æthel Haute Horlogerie",
    isSample: true,
  },
  {
    id: "test-2",
    quote: "The product photography compositions and packaging label design Nuvora crafted for Velora elevated our organic skincare line into luxury department stores instantly.",
    name: "Ananya Mehta",
    role: "Co-Founder",
    company: "Velora Botanicals",
    isSample: true,
  },
  {
    id: "test-3",
    quote: "Working with Nuvora felt like collaborating with a high-end European art atelier. Every social media campaign carousel and business card flat-lay was executed flawlessly.",
    name: "Elena Rostova",
    role: "Managing Principal",
    company: "Monument Architecture",
    isSample: true,
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What kind of graphic design materials does Nuvora Studio create?",
    answer: "We specialize in primary logo design, brand monograms, complete visual identity systems, product packaging (boxes, labels, bottles, jars), commercial product photography & presentation renders, marketing print materials (posters, brochures, catalogues, hoardings), social media campaign graphics, and executive corporate stationery.",
  },
  {
    id: "faq-2",
    question: "Do you deliver vector source files and print dielines?",
    answer: "Yes. All completed projects include master vector files (AI, EPS, SVG, PDF), CMYK print-ready dielines with bleed margins, Pantone color specifications, and high-resolution digital WebP/PNG assets.",
  },
  {
    id: "faq-3",
    question: "What is the typical timeline for a logo design or branding project?",
    answer: "Logo design projects typically take 2 to 4 weeks. Complete brand identity systems and complex product packaging collections range from 4 to 8 weeks depending on deliverable scope.",
  },
  {
    id: "faq-4",
    question: "Can Nuvora Studio handle product photography and 3D renders?",
    answer: "Yes. We offer commercial product photography direction, high-resolution lighting setups, e-commerce hero shots, and 3D product renders suitable for advertising campaigns and digital storefronts.",
  },
  {
    id: "faq-5",
    question: "Do you work with international clients outside India?",
    answer: "Yes. Nuvora Studio collaborates with visionary brands across India, Europe, North America, the Middle East, and Asia. All design reviews and asset handovers are managed digitally.",
  },
  {
    id: "faq-6",
    question: "Can you design custom packaging for new D2C products?",
    answer: "Absolutely. We work closely with D2C founders to design custom box dielines, foil stamping artwork, sustainable pouch graphics, and bottle label systems ready for print manufacturing.",
  },
  {
    id: "faq-7",
    question: "How are project fees determined?",
    answer: "Every graphic design project is individually scoped based on deliverables, number of logo options, packaging SKUs, and marketing campaign requirements. We provide fixed, transparent proposals following our preliminary project brief.",
  },
  {
    id: "faq-8",
    question: "Do you offer ongoing retainer support for marketing & social media graphics?",
    answer: "Yes. We offer monthly design retainers for established partner brands requiring continuous social media graphics, promotional banners, packaging extensions, and marketing campaign collateral.",
  },
];
