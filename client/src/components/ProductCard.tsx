// src/components/ProductCard.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "../types/Product";
import { Star } from "lucide-react"; // optional, for rating stars

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow flex flex-col"
    >
      <div className="flex justify-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-auto object-contain rounded-xl"
        />
      </div>

      <h3 className="text-lg font-semibold line-clamp-2">{product.title}</h3>
      <p className="text-gray-500 text-sm mt-1 capitalize">
        {product.category}
      </p>

      <div className="flex items-center mt-2">
        <span className="text-yellow-400 flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.round(product.rating.rate)
                  ? "fill-current"
                  : "text-gray-300"
              }`}
            />
          ))}
        </span>
        <span className="text-gray-500 text-sm ml-2">
          ({product.rating.count})
        </span>
      </div>

      <p className="text-lg font-bold mt-3">${product.price.toFixed(2)}</p>

      <Link
        to={`/products/${product.id}`}
        className="mt-4 inline-block text-center bg-blue-500 text-white py-2 rounded-xl font-medium hover:bg-blue-600 transition"
      >
        View Details
      </Link>
    </motion.div>
  );
}
