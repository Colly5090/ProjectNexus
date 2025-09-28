import { useState, useEffect } from "react";
import axios from "axios";
import { ProductProps } from "@/interfaces";
import { SortOption } from "@/interfaces";
//import wrong

export function useProducts() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [sort, setSort] = useState<SortOption>("default");
  const [search, setSearch] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [inStock, setInStock] = useState<boolean | null>(null);

  // ✅ Reset products when sort or filters changes
  useEffect(() => {
    console.log("🔄 Sort changed:", sort);
    setProducts([]);
    setPage(1);
    setHasMore(true);
    setRefreshing(true);
  }, [sort, search, minPrice, maxPrice, inStock]);

  // Debug when products change
  useEffect(() => {
    console.log("📦 Products state updated:", products);
    console.log("📦 Products count:", products.length);
  }, [products]);

  const getSorting = () => {
    switch (sort) {
      case "price_asc":
        return "price";
      case "price_desc":
        return "-price";
      case "newest":
        return "-created_at";
      case "oldest":
        return "created_at";
      case "popular":
        return "-rating";
      case "stock":
        return "-stock_quantity";
      default:
        return undefined;
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      if (!hasMore && page !== 1) return;

      setLoading(true);
      console.log(`📡 Fetching page=${page}, sort=${sort}`);
      setError(null);

      try {
        const res = await axios.get(`/api/products`, {
          params: {
            page,
            page_size: 10,
            ordering: getSorting(),
            search: search || undefined,
            price__gte: minPrice ?? undefined,
            price__lte: maxPrice ?? undefined,
            is_in_stock: inStock ?? undefined,
          },
        });

        const { results, next, total_pages, current_page } = res.data;

        console.log("📥 Raw fetched products:", results.length);

        if (results.length > 0) {
          setProducts((prev) => {
            const updated = page === 1 ? results : [...prev, ...results];
            console.log(
              "✅ First product after update:",
              updated[0]?.name,
              updated[0]?.price?.amount
            );
            return updated;
          });
        }

        // ⚡ Control infinite scroll separately
        if (!next || current_page >= total_pages) {
          console.log("⚠️ Reached the last page.");
          setHasMore(false);
        } else {
          setHasMore(true);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    };

    fetchProducts();
  }, [page, sort, search, minPrice, maxPrice, inStock]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.offsetHeight
      ) {
        if (!loading && hasMore && !refreshing) {
          setPage((prev) => prev + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, refreshing]);

  return {
    products,
    loading,
    refreshing,
    hasMore,
    error,
    setSort,
    sort,
    setSearch,
    setMinPrice,
    setMaxPrice,
    setInStock,
  };
}
