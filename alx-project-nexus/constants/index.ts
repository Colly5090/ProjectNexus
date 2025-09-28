import brand_icon from "@/public/assets/icons/brand.png";
import mastercard from "@/public/assets/images/mastercard.png";
import visa from "@/public/assets/images/visa.png";
import paypal from "@/public/assets/images/paypal.png";
import { HeroItem } from "@/interfaces";

export const BRAND_ICON = brand_icon;
export const MASTERCARD = mastercard;
export const VISA = visa;
export const PAYPAL = paypal;

export const API_BASE =
  "https://project-nexus-backend-q5ai.onrender.com/api/v1";

export const heroItems: HeroItem[] = [
  {
    image: "https://picsum.photos/seed/lamp/400/400",
    title: "Stylish Lamp",
    description: "Brighten your home with our modern lamp collection.",
  },
  {
    image: "https://picsum.photos/seed/promo/400/400",
    title: "Big Promotion",
    description: "Up to 50% off on selected items. Don’t miss out!",
  },
  {
    image: "https://picsum.photos/seed/new/400/400",
    title: "New Arrivals",
    description: "Check out the latest additions to our catalog.",
  },
];

export const categoryDisplay: Record<
  string,
  { title: string; ctaLabel: string }
> = {
  electronics: { title: "Most Bought Electronics", ctaLabel: "Discover More" },
  "fashion-apparel": {
    title: "New Arrival Fashion & Apparel",
    ctaLabel: "Explore More",
  },
  furniture: { title: "Best Selling Furniture", ctaLabel: "See More" },
  laptops: { title: "Top Laptops", ctaLabel: "Browse More" },
};
