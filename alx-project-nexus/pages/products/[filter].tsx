import { useRouter } from "next/router";
import { useProductContext } from "@/context/ProductContext";
import ProductCard from "@/components/common/Card";

const ProductFilterPage = () => {
    const router = useRouter();
    const { filter } = router.query;

    const { products, loading, error } = useProductContext();

    // 🔎 Filter on client side
    const filteredProducts = (() => {
        if (!products) return [];

        switch (filter) {
            case "most-wanted":
                return [...products].sort((a, b) => b.review_count - a.review_count);
            case "new-arrival":
                return [...products].sort(
                    (a, b) =>
                        new Date(b.created_at ?? '').getTime() -
                        new Date(a.created_at ?? '').getTime()
                );
            case "brands":
                return [...products].sort((a, b) =>
                    (a.category_name ?? "").localeCompare(b.category_name ?? '')
                );
            default: // catalog
                return products;
        }
    })();

    if (loading) return <p className="p-8 text-center">Loading...</p>;
    if (error) return <p className="p-8 text-center text-red-600">{error}</p>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 capitalize">{filter}</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductFilterPage;
