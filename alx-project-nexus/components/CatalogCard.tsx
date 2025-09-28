import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { CatalogProps } from "@/interfaces";

const CatalogCard: React.FC<{ category: CatalogProps }> = ({ category }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/categories/${category.id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition"
        >
            {/* Image or fallback */}
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden">
                {category.image ? (
                    <Image
                        src={category.image}
                        alt={category.name}
                        width={96}
                        height={96}
                        className="object-cover"
                    />
                ) : (
                    <span className="text-2xl">📦</span>
                )}
            </div>

            {/* Title */}
            <h2 className="mt-3 text-sm md:text-base font-medium text-gray-800">
                {category.name}
            </h2>

            {/* Optional: product count */}
            {category.product_count !== undefined && (
                <p className="text-xs text-gray-500">
                    {category.product_count} products
                </p>
            )}
        </div>
    );
};

export default CatalogCard;
