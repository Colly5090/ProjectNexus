import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { ProductProp } from "@/interfaces";

const ProductCard: React.FC<{ product: ProductProp }> = ({ product }) => {
  return (
    <div className="cursor-pointer bg-white p-2 shadow-sm transition rounded-lg">
      {/* Product Image */}
      <div className="relative h-48 w-full overflow-hidden rounded-md">
        <Image
          src={product.featured_image || "https://picsum.photos/300/300"}
          alt={product.name}
          width={300}
          height={300}
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="mt-3 flex items-start justify-between">
        <h3 className="line-clamp-1 font-semibold text-lg text-gray-800">
          {product.name}{" "}
          {product.is_featured && (
            <span className="text-sm text-teal-600 font-normal">Featured</span>
          )}
        </h3>

        <div className="flex items-center">
          <StarIcon className="h-4 w-4 text-yellow-400" />
          <p className="ml-1 text-sm font-medium text-gray-600">
            {Number(product.average_rating ?? 5).toFixed(1)} ({product.review_count ?? ''} reviews)
          </p>
        </div>
      </div>

      {/* Price & Stock */}
      <div className="mt-2 flex items-center justify-between">
        {product.compare_at_price && (
          <p className="text-md font-medium text-gray-500 line-through">
            {product.compare_at_price.currency}{" "}
            {Number(product.compare_at_price.amount).toFixed(2)}
          </p>
        )}
        <p className="text-lg font-medium text-gray-900">
          {product.price.currency} {Number(product.price.amount).toFixed(2)}
        </p>
        <span
          className={`text-xs px-2 py-1 rounded ${product.is_in_stock
            ? "text-gray-700 bg-gray-100"
            : "text-white bg-red-500"
            }`}
        >
          {product.is_in_stock
            ? `${product.stock_quantity} in stock`
            : "Out of stock"}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
