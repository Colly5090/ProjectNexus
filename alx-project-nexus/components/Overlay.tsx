import { useState } from "react";
import { OverlayProps } from "@/interfaces";

export default function Overlay({ onClose, onApply, initialFilters }: OverlayProps) {
    const [minPrice, setMinPrice] = useState<number | null>(initialFilters.minPrice);
    const [maxPrice, setMaxPrice] = useState<number | null>(initialFilters.maxPrice);
    const [inStock, setInStock] = useState<boolean | null>(initialFilters.inStock);

    const handleApply = () => {
        onApply({ minPrice, maxPrice, inStock });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Filter Products</h2>

                {/* Min Price */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Min Price</label>
                    <input
                        type="number"
                        value={minPrice ?? ""}
                        onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : null)}
                        className="w-full border rounded px-3 py-2"
                        placeholder="e.g. 100"
                    />
                </div>

                {/* Max Price */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Max Price</label>
                    <input
                        type="number"
                        value={maxPrice ?? ""}
                        onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : null)}
                        className="w-full border rounded px-3 py-2"
                        placeholder="e.g. 500"
                    />
                </div>

                {/* In Stock */}
                <div className="mb-4 flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={inStock === true}
                        onChange={(e) => setInStock(e.target.checked ? true : null)}
                    />
                    <label className="text-sm font-medium">Only show in-stock products</label>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3">
                    <button
                        className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 rounded bg-teal-500 text-white hover:bg-teal-600"
                        onClick={handleApply}
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
}
