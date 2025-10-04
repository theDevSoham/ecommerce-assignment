// src/pages/ProductDetailsPage.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import { useCart } from "../context/useCart";
import { motion } from "framer-motion";
import { Star, Tag } from "lucide-react";
import type { Product } from "../types/Product";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axiosClient
      .get(`/api/products/${id}`)
      .then((res) => setProduct(res.data.data));
  }, [id]);

  if (!product)
    return (
      <motion.p
        className="p-6 text-center text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Loading...
      </motion.p>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 bg-white rounded-3xl shadow-xl my-10"
    >
      {/* Product Image */}
      <motion.div
        className="flex-1 flex justify-center items-center"
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-md object-contain rounded-2xl shadow-lg p-5"
        />
      </motion.div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-5">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            {product.title}
          </h1>

          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full w-max text-gray-700 text-sm">
            <Tag className="w-4 h-4" />
            {product.category}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.round(product.rating.rate)
                    ? "fill-current text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-gray-500 text-sm">
              ({product.rating.count} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          {/* Price */}
          <p className="text-3xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Add to Cart */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            addToCart({
              ...product,
              id: product.id.toString(),
              name: product.title,
              quantity: 1,
            })
          }
          className="mt-6 w-full py-4 bg-blue-600 text-white font-semibold rounded-2xl shadow hover:bg-blue-700 transition"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}
