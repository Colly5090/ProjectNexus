import React from "react";
import Image from "next/image";
import { CategoryCardProps } from "@/interfaces";
import { categoryDisplay } from "@/constants";
import { useRouter } from "next/router";

const CategoryCard: React.FC<{ category: CategoryCardProps }> = ({ category }) => {
    const router = useRouter();
    const display = categoryDisplay[category.slug];
    const title = display?.title || category.parentName;
    const ctaLabel = display?.ctaLabel || "View More";

    const handleNavigate = () => {
        router.push(`/categories/${category.id}`);
    }

    return (
        <div className="w-full mx-auto bg-white shadow-lg p-2 mb-4"
            onClick={handleNavigate}>
            {/* Title */}
            <h1 className="text-lg md:text-2xl font-medium md:font-bold mb-6">{title}</h1>

            {/* Grid of 4 children */}
            <div className="grid grid-cols-2 gap-1">
                {category.children.slice(0, 4).map((child) => (
                    <div
                        key={child.id}
                        className="flex flex-col items-center text-center p-1 hover:shadow-md transition"
                    >
                        <div className="w-full aspect-[1/1] overflow-hidden relative">
                            <Image
                                src={categoryDisplay[category.slug]?.childImages?.[child.name.trim()] || child.image || "https://picsum.photos/id/180/200/200"}
                                alt={child.name}
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>
                        <p className="mt-2 text-xs md:text-sm font-medium">{child.name}</p>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-4 flex justify-center">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate();
                    }}
                    className="px-4 py-2 text-blue-600 hover:underline hover:text-black"
                >
                    {ctaLabel}
                </button>
            </div>
        </div>
    );
};

export default CategoryCard;
