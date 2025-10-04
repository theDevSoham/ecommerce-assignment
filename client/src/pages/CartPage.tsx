// src/pages/CartPage.tsx
import { useCart } from "../context/useCart";
import { Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <motion.div
          className="flex flex-col items-center justify-center mt-20 text-gray-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg mb-4">Your cart is empty 😔</p>
          <p className="text-sm">Add some products to see them here!</p>
        </motion.div>
      ) : (
        <>
          <AnimatePresence>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  className="flex justify-between items-center border p-4 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.quantity} × ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.p
            className="font-semibold mt-6 text-right text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Total: ${total.toFixed(2)}
          </motion.p>
        </>
      )}
    </div>
  );
}
