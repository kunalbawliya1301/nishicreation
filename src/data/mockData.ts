export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'mugs' | 'wine glasses' | 'trophies' | 'corporate awards' | 'ceramics' | 'custom work';
  image: string;
  description: string;
  client?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export const services: ServiceItem[] = [
  {
    id: "sandblasting-on-glass",
    title: "Sandblasting on Glass",
    slug: "sandblasting-on-glass",
    shortDescription: "Precision abrasive carving on premium glass surfaces, creating a deep frosted texture.",
    description: "Our sandblasting technique uses highly pressurized micro-abrasives to carve directly into crystal and glassware. Unlike laser engraving which can create micro-fractures, sandblasting leaves a smooth, rich, and deeply carved frosted signature that is both durable and tactile.",
    image: "/images/sommelier_glasses.png",
    features: ["Deep texture carving", "Smooth, satin finish", "Perfect for heavy glassware", "Highly durable design"]
  },
  {
    id: "sand-etching",
    title: "Sand Etching",
    slug: "sand-etching",
    shortDescription: "Ultra-fine surface etching for complex logos and delicate typography on crystal.",
    description: "Designed for highly detailed artwork and typography, sand etching offers micro-precision without sacrificing depth. We create high-resolution photographic stencils to etch your custom brand emblems or artistic patterns with absolute consistency.",
    image: "/images/crystal_trophy.png",
    features: ["High-resolution stencils", "Ideal for fine typography", "Consistent brand replication", "Matte satin contrast"]
  },
  {
    id: "mug-engraving",
    title: "Mug Engraving",
    slug: "mug-engraving",
    shortDescription: "Bespoke engraving on classic glass and metal mugs for a personalized daily ritual.",
    description: "Elevate your morning brew or evening drink with custom engraved mugs. We utilize specialized rotary devices to carve clean lettering or geometric artwork around the circumference of clear glass mugs or insulated travel mugs.",
    image: "/images/decanter_set.png",
    features: ["Rotary circular engraving", "Glass & metal compatibility", "Dishwasher safe engraving", "Custom typography options"]
  },
  {
    id: "ceramic-mug-engraving",
    title: "Ceramic Mug Engraving",
    slug: "ceramic-mug-engraving",
    shortDescription: "Texture-revealing engravings that carve through glaze to expose the raw clay body.",
    description: "Our ceramic engraving process carves elegantly through colored outer glazes, exposing the clean raw clay or porcelain body underneath. This creates a high-contrast, dual-toned tactile product that feels extremely luxurious in the hand.",
    image: "/images/matte_mugs.png",
    features: ["High-contrast dual tone", "Raw ceramic exposure", "Ergonomic tactile designs", "Perfect for bespoke gifting"]
  },
  {
    id: "wine-glass-engraving",
    title: "Wine Glass Engraving",
    slug: "wine-glass-engraving",
    shortDescription: "Delicate, custom-tailored etching on lead-free crystal wine, champagne, and spirits glasses.",
    description: "Create memorable keepsakes for weddings, anniversaries, or corporate events. We engrave elegant lead-free crystal wine glasses, whiskey decanters, and champagne flutes with delicate scrollwork, dates, or monogram initials that capture the light.",
    image: "/images/wine_glass_luxury.png",
    features: ["Lead-free crystal safe", "Decanter & flute monogramming", "Light-refracting textures", "Luxury presentation packaging"]
  },
  {
    id: "trophy-engraving",
    title: "Trophy Engraving",
    slug: "trophy-engraving",
    shortDescription: "Classic precision text engraving on nameplates and trophy bases for milestones.",
    description: "Celebrate victories and milestones with professionally engraved plaques, shields, and trophy plates. We engrave metallic brass, silver, and wood plaques with high-precision diamond-tip cutters or fiber lasers for sharp, enduring legibility.",
    image: "/images/corporate_award.png",
    features: ["Diamond-tip metal cutting", "High-contrast metal plates", "Bespoke wood engraving", "Quick-turnaround available"]
  },
  {
    id: "glass-trophy-customization",
    title: "Glass Trophy Customization",
    slug: "glass-trophy-customization",
    shortDescription: "Custom multi-depth frosting on premium optical crystal blocks and glass awards.",
    description: "Our signature service for high-end recognitions. We utilize multi-depth sandblasting on thick optical crystal blocks. By carving different layers of the design at varying depths, we create a striking 3D holographic shadow-box effect inside the crystal itself.",
    image: "/images/corporate_award.png",
    features: ["Multi-depth carving", "3D shadow-box effect", "Premium optical crystal blocks", "Individually wooden boxed"]
  },
  {
    id: "metal-plate-engraving",
    title: "Metal Plate Engraving",
    slug: "metal-plate-engraving",
    shortDescription: "Industrial-grade precision marking on stainless steel, brass, and aluminum plates.",
    description: "Professional signage and industrial plate personalization. We provide ultra-sharp engraving on anodized aluminum, polished brass, and stainless steel plates. Ideal for corporate office nameplates, luxury desk accessories, or machine identification plates.",
    image: "/images/brass_plate.png",
    features: ["Anodized metal engraving", "Polished brass plates", "Industrial longevity", "Outdoor weather-resistant"]
  },
  {
    id: "corporate-gifting",
    title: "Corporate Gifting",
    slug: "corporate-gifting",
    shortDescription: "Tailored brand personalization on high-end custom sets and premium product packages.",
    description: "Align your corporate values with luxury craftsmanship. We help select, package, and engrave bespoke gift boxes containing personalized drinkware, keyrings, leather accessories, and notebooks, presenting your brand with premium prestige.",
    image: "/images/corporate_gifting.png",
    features: ["Complete gift-box sets", "Brand identity consultancy", "Premium client onboarding gifts", "Matte gold foil presentation boxes"]
  },
  {
    id: "custom-orders",
    title: "Custom Orders",
    slug: "custom-orders",
    shortDescription: "Bespoke commissions and one-of-a-kind art engravings on specialty materials.",
    description: "Have a unique object you want to personalize? We accept bespoke commissions. From custom stone engraving to heavy metal artifacts and vintage bottles, our master engravers consult with you to map out custom-tailored stencils and toolpaths.",
    image: "/images/custom_order.png",
    features: ["Bespoke material matching", "Master engraver consultation", "Digital vector design proofs", "One-of-a-kind craft guarantee"]
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "The Atelier Wine Chalice",
    category: "wine glasses",
    image: "/images/wine_glass_luxury.png",
    description: "Deep sandblasting custom geometric pattern on lead-free crystal wine glasses.",
    client: "Chateau Margaux Event"
  },
  {
    id: "gal-2",
    title: "Imperial Optical Trophy",
    category: "trophies",
    image: "/images/crystal_trophy.png",
    description: "Multidimensional frosted engraving inside a geometric optical crystal trophy.",
    client: "Global Tech Leadership Summit"
  },
  {
    id: "gal-3",
    title: "Minimalist Matte Mugs",
    category: "ceramics",
    image: "/images/matte_mugs.png",
    description: "Custom branding glaze-etched exposing soft clay surface underneath.",
    client: "Verdant Coffee Roasters"
  },
  {
    id: "gal-4",
    title: "Pinnacle Corporate Award",
    category: "corporate awards",
    image: "/images/corporate_award.png",
    description: "Corporate plaque made of ultra-thick tempered glass and hand-carved lettering.",
    client: "Summit Venture Group"
  },
  {
    id: "gal-5",
    title: "Custom Decanter Set",
    category: "custom work",
    image: "/images/decanter_set.png",
    description: "Engraved monogram decanter with double matching highball whiskey glasses.",
    client: "Private Wedding Anniversary"
  },
  {
    id: "gal-6",
    title: "Double-walled Artisan Mugs",
    category: "mugs",
    image: "/images/decanter_set.png",
    description: "Classic initial etching on clear double-walled borosilicate mugs.",
    client: "Sip & Savor Co."
  },
  {
    id: "gal-7",
    title: "Gold Flaked Brass Plate",
    category: "custom work",
    image: "/images/brass_plate.png",
    description: "Hand-finished brass plate detailing with sandblasted champagne gold border.",
    client: "Apex Executive Suites"
  },
  {
    id: "gal-8",
    title: "Sommelier Special Glasses",
    category: "wine glasses",
    image: "/images/sommelier_glasses.png",
    description: "Ultralight crystal wine glasses with frosted stem signatures.",
    client: "Elysian Wine Cellar"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Victoria Sterling",
    role: "Director of Communications",
    company: "Aura Capital Group",
    content: "The level of precision Nishi Creation achieved on our corporate glass awards was staggering. They don't just engrave logos; they craft physical legacies. The depth of the sandblasting is visually superior to any standard laser etch.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Arthur Pendelton",
    role: "Founder & Creative Director",
    company: "Pendelton Lifestyle",
    content: "We commissioned Nishi Creation to develop 500 bespoke ceramic mugs with glaze-relief engraving. Our clients were absolutely wowed by the tactile contrast. The champagne gold details are stunning.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Elena Rostova",
    role: "Principal Planner",
    company: "Rostova Luxury Events",
    content: "For luxury event gifting, Nishi Creation is our absolute go-to. Their custom wine glasses are incredibly delicate yet robust. The frosted detailing is so uniform and fits our high-end wedding projects beautifully.",
    rating: 5
  }
];
