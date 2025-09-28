// lib/getCategories.ts
import axios from "axios";
import { CategoryCardProps } from "@/interfaces";
import { API_BASE } from "@/constants";

export async function getCategoriesWithChildren(): Promise<
  CategoryCardProps[]
> {
  // Step 1: Get featured categories
  const { data: featured } = await axios.get(
    `${API_BASE}/products/categories?is_featured=true`
  );

  const limited = featured.results.slice(0, 4);

  // Step 2: For each featured category, fetch its children
  const categories: CategoryCardProps[] = await Promise.all(
    limited.map(async (cat: any) => {
      const { data: categoryChildren } = await axios.get(
        `${API_BASE}/products/categories/${cat.id}`
      );

      return {
        id: cat.id,
        slug: cat.slug,
        parentName: cat.name,
        children: categoryChildren.children.slice(0, 4) || [],
        ctaLabel: "View More",
      };
    })
  );

  return categories;
}
