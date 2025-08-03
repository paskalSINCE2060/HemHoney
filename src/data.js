import WildForest from "./assets/WildForest.jpg";
import HimalayanHoney from "./assets/HimalayanHoney.jpg";
// Add these imports when you have the images
import ManukaHoney from "./assets/ManukaHoney.jpg";
import AcaciaHoney from "./assets/AcaciaHoney.jpg";
import LitchiHoney from "./assets/LitchiHoney.jpg";
import MultiflowerHoney from "./assets/MultiflowerHoney.jpg";
import HoneyComb from "./assets/HoneyComb.jpg";
import BeePollen from "./assets/BeePollen.jpg";
import Propolis from "./assets/Propolis.jpg";
import RoyalJelly from "./assets/RoyalJelly.jpg";
import CloverHoney from "./assets/CloverHoney.jpg";
import EucalyptusHoney from "./assets/EucalyptusHoney.jpg";

const products = [
  {
    id: 1,
    name: "Wild Forest Honey",
    price: 499,
    originalPrice: 599,
    image: WildForest,
    description: "Pure wild forest honey harvested by local beekeepers from diverse forest flowers.",
    category: "Raw Honey",
    weight: "500g",
    features: ["100% Natural", "Raw & Unprocessed", "Rich in Antioxidants"],
    inStock: true,
    bestseller: true,
    rating: 4.8,
    reviews: 127
  },
  {
    id: 2,
    name: "Organic Himalayan Honey",
    price: 599,
    originalPrice: 699,
    image: HimalayanHoney,
    description: "Organic and raw honey from the pristine Himalayas, harvested at high altitudes.",
    category: "Premium Honey",
    weight: "500g",
    features: ["Organic Certified", "High Altitude", "Mineral Rich"],
    inStock: true,
    bestseller: false,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Manuka Honey UMF 15+",
    price: 1299,
    originalPrice: 1499,
    image: ManukaHoney, 
    description: "Premium Manuka honey with UMF 15+ rating, known for its therapeutic properties.",
    category: "Therapeutic Honey",
    weight: "250g",
    features: ["UMF 15+ Certified", "Antibacterial", "Therapeutic Grade"],
    inStock: true,
    bestseller: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 4,
    name: "Acacia Honey",
    price: 449,
    originalPrice: 529,
    image: AcaciaHoney, 
    description: "Light, delicate acacia honey with a mild floral taste and slow crystallization.",
    category: "Floral Honey",
    weight: "500g",
    features: ["Light & Delicate", "Slow Crystallizing", "Mild Flavor"],
    inStock: true,
    bestseller: false,
    rating: 4.7,
    reviews: 98
  },
  {
    id: 5,
    name: "Litchi Honey",
    price: 379,
    originalPrice: 449,
    image: LitchiHoney, 
    description: "Exotic litchi honey with a unique fruity aroma and sweet tropical taste.",
    category: "Fruit Honey",
    weight: "500g",
    features: ["Fruity Aroma", "Tropical Taste", "Limited Edition"],
    inStock: true,
    bestseller: false,
    rating: 4.6,
    reviews: 73
  },
  {
    id: 6,
    name: "Multiflower Honey",
    price: 329,
    originalPrice: 399,
    image: MultiflowerHoney, 
    description: "Classic multiflower honey blend from various seasonal blooms across meadows.",
    category: "Classic Honey",
    weight: "500g",
    features: ["Multi-Source", "Seasonal Blend", "Perfect for Daily Use"],
    inStock: true,
    bestseller: true,
    rating: 4.5,
    reviews: 203
  },
  {
    id: 7,
    name: "Raw Honey Comb",
    price: 799,
    originalPrice: 899,
    image: HoneyComb,
    description: "Fresh honeycomb with raw honey, wax, and pollen - nature's perfect package.",
    category: "Specialty Products",
    weight: "400g",
    features: ["With Honeycomb", "Raw & Natural", "Rich in Enzymes"],
    inStock: true,
    bestseller: false,
    rating: 4.8,
    reviews: 67
  },
  {
    id: 8,
    name: "Bee Pollen Granules",
    price: 899,
    originalPrice: 1099,
    image: BeePollen,
    description: "Pure bee pollen granules packed with proteins, vitamins, and minerals.",
    category: "Bee Products",
    weight: "250g",
    features: ["Superfood", "High Protein", "Vitamin Rich"],
    inStock: true,
    bestseller: false,
    rating: 4.7,
    reviews: 54
  },
  {
    id: 9,
    name: "Propolis Extract",
    price: 1199,
    originalPrice: 1399,
    image: Propolis, 
    description: "Natural propolis extract with powerful antimicrobial and healing properties.",
    category: "Bee Products",
    weight: "30ml",
    features: ["Antimicrobial", "Natural Antibiotic", "Immune Support"],
    inStock: false,
    bestseller: false,
    rating: 4.8,
    reviews: 42
  },
  {
    id: 10,
    name: "Royal Jelly Capsules",
    price: 1599,
    originalPrice: 1799,
    image: RoyalJelly, 
    description: "Premium royal jelly capsules for enhanced nutrition and vitality.",
    category: "Bee Products",
    weight: "60 capsules",
    features: ["Premium Quality", "Enhanced Nutrition", "Energy Boost"],
    inStock: true,
    bestseller: false,
    rating: 4.6,
    reviews: 38
  },
  {
    id: 11,
    name: "Clover Honey",
    price: 299,
    originalPrice: 359,
    image: CloverHoney,
    description: "Sweet and mild clover honey, perfect for tea, baking, and everyday use.",
    category: "Classic Honey",
    weight: "500g",
    features: ["Sweet & Mild", "Versatile Use", "Great for Baking"],
    inStock: true,
    bestseller: true,
    rating: 4.4,
    reviews: 184
  },
  {
    id: 12,
    name: "Eucalyptus Honey",
    price: 549,
    originalPrice: 629,
    image: EucalyptusHoney, 
    description: "Distinctive eucalyptus honey with medicinal properties and unique herbal flavor.",
    category: "Medicinal Honey",
    weight: "500g",
    features: ["Herbal Flavor", "Medicinal Properties", "Respiratory Support"],
    inStock: true,
    bestseller: false,
    rating: 4.7,
    reviews: 91
  }
];

// Additional data arrays for better organization
export const categories = [
  "All Products",
  "Raw Honey", 
  "Premium Honey",
  "Floral Honey",
  "Fruit Honey", 
  "Classic Honey",
  "Medicinal Honey",
  "Therapeutic Honey",
  "Bee Products",
  "Specialty Products"
];

export const priceRanges = [
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹500 - ₹800", min: 500, max: 800 },
  { label: "₹800 - ₹1200", min: 800, max: 1200 },
  { label: "Above ₹1200", min: 1200, max: Infinity }
];

export const features = [
  "100% Natural",
  "Raw & Unprocessed", 
  "Organic Certified",
  "Therapeutic Grade",
  "Antibacterial",
  "High Protein",
  "Vitamin Rich",
  "Mineral Rich",
  "Superfood",
  "Immune Support"
];

// Helper functions
export const getProductsByCategory = (category) => {
  if (category === "All Products") return products;
  return products.filter(product => product.category === category);
};

export const getBestsellers = () => {
  return products.filter(product => product.bestseller);
};

export const getInStockProducts = () => {
  return products.filter(product => product.inStock);
};

export const getProductsByPriceRange = (min, max) => {
  return products.filter(product => product.price >= min && product.price <= max);
};

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
};

export default products;