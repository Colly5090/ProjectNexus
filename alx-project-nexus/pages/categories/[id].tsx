import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCategory } from "@/hook/useCategory";
import { Category } from "@/interfaces";

export default function CategoryPage() {
    const router = useRouter();
    const { id } = router.query;

    const { fetchCategoryById, loading, error } = useCategory();
    const [category, setCategory] = useState<Category | null>(null);

    useEffect(() => {
        if (!id) return;

        const loadCategory = async () => {
            const data = await fetchCategoryById(id as string);
            setCategory(data);
        };

        loadCategory();
    }, [id, fetchCategoryById]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="p-6">
            {/* Parent Name */}
            <h1 className="text-2xl font-bold mb-6">{category?.name}</h1>

            {/* List all children */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category?.children?.map((child) => (
                    <div
                        key={child.id}
                        className="border p-4 rounded-lg cursor-pointer hover:shadow-md"
                        onClick={() => router.push(`/categories/${child.id}`)} // drill-down works with hook too
                    >
                        <p className="text-lg font-medium">{child.name}</p>
                        <p className="text-sm text-gray-500">{child.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
