// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/useCart";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/products" className="text-xl font-bold">
        ShopEase
      </Link>
      <div className="flex gap-4 items-center">
        <Link to="/products" className="hover:text-blue-500">
          Products
        </Link>
        <Link to="/cart" className="relative">
          <ShoppingCart className="w-6 h-6" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
