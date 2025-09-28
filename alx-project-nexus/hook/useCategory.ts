import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export function useCategory() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all categories (static)
  const fetchCategories = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/categories`);
      setCategories(res.data.results || []);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Failed to load categories");
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch a category by ID/slug (dynamic)
  const fetchCategoryById = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/categories/${id}`);
      return res.data;
    } catch (err: any) {
      setError(err.message || "Failed to fetch category");
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Load all categories on mount
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return {
    categories,
    loading,
    error,
    fetchCategories,
    fetchCategoryById,
  };
}
