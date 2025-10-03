import ProductCard from "@/components/common/ProductCard";
import FilterSortBar from "@/components/FilterSort";
import HeroSection from "@/components/hero/HeroSection";
import { useProductContext } from "@/context/ProductContext";
import { getCategoriesWithChildren } from "@/lib/getCategories";
import { Squares2X2Icon, ViewColumnsIcon } from "@heroicons/react/24/outline";
import CategoryCard from "@/components/CategoryCard";
import { GetStaticProps } from "next";
import { HomeProps } from "@/interfaces";
import { useState } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";


export default function Home({ categories }: HomeProps) {
  const { products, loading, refreshing, hasMore, error, } = useProductContext();
  const [mobileCols, setMobileCols] = useState(2);


  return (
    <ErrorBoundary>
      <main>
        <HeroSection />

        <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>

        <FilterSortBar />
        <div className="px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">PRODUCTS</h2>

            {/* Toggle buttons (only mobile) */}
            <div className="flex gap-2 sm:hidden">
              <button
                onClick={() => setMobileCols(2)}
                className={`p-1 rounded-md border ${mobileCols === 2 ? "bg-gray-200" : "bg-gray-100"
                  }`}
              >
                <Squares2X2Icon className="h-5 w-5" />
              </button>
              <button
                onClick={() => setMobileCols(1)}
                className={`p-1 rounded-md border ${mobileCols === 1 ? "bg-gray-200" : "bg-gray-100"
                  }`}
              >
                <ViewColumnsIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Handle loading */}
          {loading && products.length === 0 && <p>Loading products...</p>}

          {/* Products grid */}
          <div className={`
            grid gap-6
            ${mobileCols === 1 ? "grid-cols-1" : "grid-cols-2"}
            sm:grid-cols-3 lg:grid-cols-4
          `}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Infinite scroll feedback */}
          {loading && products.length > 0 && (
            <p className="text-center mt-6">Loading more products...</p>
          )}
          {refreshing && products.length > 0 && <p className="text-center mt-6">Refreshing products...</p>}

          {!hasMore && !loading && (
            <p className="text-center mt-6 text-gray-500">No more products</p>
          )}
          {error && <p className="text-red-500 text-center">{error}</p>}
        </div>
      </main>
    </ErrorBoundary>
  );
}


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const categories = await getCategoriesWithChildren();

  return {
    props: {
      categories,
    },
  };
};
