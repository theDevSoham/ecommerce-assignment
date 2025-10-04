import { Router, Response } from "express";
import fs from "fs";
import path from "path";
import { ProductRepository } from "../repositories/ProductRepository";
import { Order } from "../model/Order";

const router = Router();
const repo = new ProductRepository();
const ordersFilePath = path.join(__dirname, "..", "data", "orders.json");

// GET /admin/orders → List all orders
router.get("/orders", (_: any, res: Response) => {
  let orders: Order[] = [];
  if (fs.existsSync(ordersFilePath)) {
    try {
      const rawData = fs.readFileSync(ordersFilePath, "utf-8");
      orders = JSON.parse(rawData);
    } catch (err) {
      console.error("⚠ Error reading orders.json:", err);
      return res
        .status(500)
        .json({ success: false, message: "Failed to load orders" });
    }
  }
  return res.json({ success: true, data: orders });
});

// GET /admin/products → List all products
router.get("/products", (_: any, res: Response) => {
  const products = repo.getAll();
  return res.json({ success: true, data: products });
});

export default router;
