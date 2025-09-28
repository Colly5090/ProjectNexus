import React from "react";
import { useCategory } from "@/hook/useCategory";
import CatalogCard from "@/components/CatalogCard";

const CatalogPage: React.FC = () => {
    const { categories, loading, error } = useCategory();

    if (loading) return <p className="p-8 text-center">Loading catalog...</p>;
    if (error) return <p className="p-8 text-center text-red-600">Failed to load</p>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                Catalog
            </h1>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {categories?.map((cat) => (
                    <CatalogCard key={cat.id} category={cat} />
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;
