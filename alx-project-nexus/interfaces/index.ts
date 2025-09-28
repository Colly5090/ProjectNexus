import { StaticImageData } from "next/image";

export interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category_id: number;
  rating: number;
  stock: number;
  created_at: string;
  updated_at: string;
  cursor: string;
}

export interface ProductProp {
  id: string;
  name: string;
  price: {
    amount: string;
    currency: string;
  };
  compare_at_price?: {
    amount: string;
    currency: string;
  } | null;
  review_count: number;
  featured_image?: string | StaticImageData;
  stock_quantity: number;
  is_featured: boolean;
  is_in_stock: boolean;
  average_rating?: string;
}

export interface HeroCardProps {
  image: string;
  title: string;
  description: string;
}

export type HeroItem = HeroCardProps;

export type ProductProps = ProductProp;

export type SortOption =
  | "default"
  | "price_asc"
  | "price_desc"
  | "newest"
  | "oldest"
  | "popular"
  | "stock";

export interface OverlayProps {
  onClose: () => void;
  onApply: (filters: {
    minPrice: number | null;
    maxPrice: number | null;
    inStock: boolean | null;
  }) => void;
  initialFilters: {
    minPrice: number | null;
    maxPrice: number | null;
    inStock: boolean | null;
  };
}

export interface SearchProp {
  onSearch: (query: string) => void;
}

export interface ProductContextType {
  products: ProductProps[];
  loading: boolean;
  refreshing: boolean;
  hasMore: boolean;
  error: string | null;
  sort: SortOption;
  setSort: (sort: SortOption) => void;
  setSearch: (val: string) => void;
  setMinPrice: (val: number | null) => void;
  setMaxPrice: (val: number | null) => void;
  setInStock: (val: boolean | null) => void;
}

export interface CategoryChild {
  id: number;
  name: string;
  slug?: string;
  image?: string;
}

export interface CategoryCardProps {
  id?: number;
  slug: string;
  parentName: string;
  children: CategoryChild[];
  ctaLabel?: string;
  onCTAClick?: () => void;
}

export interface HomeProps {
  categories: CategoryCardProps[];
}

export interface CatalogProps {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string | null;
  icon?: string;
  product_count?: number;
  children_count?: number;
}
