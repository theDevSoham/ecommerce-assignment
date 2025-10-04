// src/pages/ProductsPage.tsx
import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import ProductCard from "../components/ProductCard";
import type { Product } from "../types/Product";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axiosClient.get("/api/products").then((res) => setProducts(res.data.data));
  }, []);

  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
