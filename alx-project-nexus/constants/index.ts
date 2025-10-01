import brand_icon from "@/public/assets/icons/brand.png";
import mastercard from "@/public/assets/images/mastercard.png";
import visa from "@/public/assets/images/visa.png";
import paypal from "@/public/assets/images/paypal.png";
import { HeroItem } from "@/interfaces";
import splash_icon from "@/public/assets/icons/android-chrome-192x192.png";

export const BRAND_ICON = brand_icon;
export const SPLASH_ICON = splash_icon;
export const MASTERCARD = mastercard;
export const VISA = visa;
export const PAYPAL = paypal;

export const API_BASE: string = process.env.NEXT_PUBLIC_API_BASE || "";

export const heroItems: HeroItem[] = [
  {
    image:
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80",
    title: "Stylish Lamp",
    description: "Brighten your home with our modern lamp collection.",
    cta: "See More",
    href: "/products/most-wanted",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80",
    title: "Big Promotion",
    description:
      "Upgrade your space with our latest furniture designs. Up to 50% off!",
    cta: "Explore Deals",
    href: "/products/brands",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=600&q=80",
    title: "New Arrivals",
    description: "Step up your style with our latest sneakers.",
    cta: "Shop Now",
    href: "/products/new-arrival",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?w=600&q=80",
    title: "Shopping Spree",
    description: "Don’t miss out on our biggest promotions of the season.",
    cta: "View New In",
    href: "/products/most-wanted",
  },
];

export const categoryDisplay: Record<
  string,
  { title: string; ctaLabel: string; childImages?: Record<string, string> }
> = {
  electronics: {
    title: "Most Bought Electronics",
    ctaLabel: "Discover More",
    childImages: {
      Smartphones:
        "https://images.unsplash.com/photo-1672413514634-4781b15fd89e",
      Laptops: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
      Tablets: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9",
      Audio:
        "https://plus.unsplash.com/premium_photo-1664195074794-35beb8cd632f",
    },
  },
  "fashion-apparel": {
    title: "New Arrival Fashion & Apparel",
    ctaLabel: "Explore More",
    childImages: {
      "Men's Clothing":
        "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891",
      "Women's Clothing":
        "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5",
      Shoes: "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3",
      Accessories: "https://images.unsplash.com/3/www.madebyvadim.com.jpg",
    },
  },
  furniture: {
    title: "Best Selling Furniture",
    ctaLabel: "See More",
    childImages: {
      "Living Room":
        "https://images.unsplash.com/photo-1618220179428-22790b461013",
      Bedroom: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
      Office: "https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5",
    },
  },
  laptops: {
    title: "Top Laptops",
    ctaLabel: "Browse More",
    childImages: {
      "Gaming Laptops":
        "https://images.unsplash.com/photo-1640695257754-7e2932f9ad0f",
      "Business Laptops":
        "https://images.unsplash.com/flagged/photo-1576697011479-349e2a52bdf6",
      Ultrabooks:
        "https://plus.unsplash.com/premium_photo-1723568523234-ce1326f8fa8a",
    },
  },
};

export const productImageFallbacks: Record<string, string> = {
  "Small Appliances":
    "https://images.unsplash.com/photo-1506368249639-73a05d6f6488",
  iPhone: "https://images.unsplash.com/photo-1616410011236-7a42121dd981",
  Headphones:
    "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117",
  Basketball: "https://images.unsplash.com/photo-1519861531473-9200262188bf",
  "Living Room": "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
  "Android Tablets":
    "https://images.unsplash.com/photo-1602980760473-5160c97b0cdb",
  Sneakers: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
  Bags: "https://images.unsplash.com/photo-1597633125184-9fd7e54f0ff7",
  Camping: "https://plus.unsplash.com/premium_photo-1682390303252-4e1e31e692e4",
  iPad: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
  Plants: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  "Windows Tablets":
    "https://plus.unsplash.com/premium_photo-1681718166365-9ae0a5d208a7",
  Shoes: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
  "Basketball Accessories":
    "https://images.unsplash.com/photo-1703694741127-64f46e544971",
  Belts: "https://images.unsplash.com/photo-1631160246898-58192f971b5f",
  Boots: "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500",
  Android: "https://images.unsplash.com/photo-1514417034809-c7b296354f07",
  "Cardio Equipment":
    "https://images.unsplash.com/photo-1665315469403-fde8e923f719",
  Cookware: "https://images.unsplash.com/photo-1584990347163-2b86b71390d6",
};
