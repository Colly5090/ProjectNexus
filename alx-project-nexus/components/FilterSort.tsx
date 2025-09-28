import { FunnelIcon } from "@heroicons/react/24/outline";
import { useProductContext } from "@/context/ProductContext";
import { SortOption } from "@/interfaces";
import Overlay from "./Overlay";
import { useState } from "react";

export default function FilterSortBar() {
    const { setSort, sort, setMinPrice, setMaxPrice, setInStock } = useProductContext();
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <div className="mt-5 flex justify-between px-4 md:px-10">

            {/* Filter Button */}
            <div>
                <button onClick={() => setShowOverlay(true)}
                    className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 hover:bg-gray-200 transition">
                    <FunnelIcon className="h-5 w-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Filter</span>
                </button>
            </div>

            {/* Sort By Dropdown */}
            <div className="rounded-lg bg-gray-100 px-4 py-2">
                <label htmlFor="sort" className="mr-2 text-sm font-medium text-gray-700">
                    Sort By:
                </label>
                <select
                    id="sort"
                    value={sort}
                    className="bg-transparent text-sm text-gray-700 focus:outline-none"
                    onChange={(e) => setSort(e.target.value as SortOption)}
                >
                    <option value="default">Default</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="popular">Most Popular</option>
                    <option value="stock">Best Stocked</option>
                </select>
            </div>

            {/* Overlay */}
            {showOverlay && (
                <Overlay
                    onClose={() => setShowOverlay(false)}
                    onApply={({ minPrice, maxPrice, inStock }) => {
                        setMinPrice(minPrice);
                        setMaxPrice(maxPrice);
                        setInStock(inStock);
                    }}
                    initialFilters={{ minPrice: null, maxPrice: null, inStock: null }}
                />
            )}
        </div>
    );
}
