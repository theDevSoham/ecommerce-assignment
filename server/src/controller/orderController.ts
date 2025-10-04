import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { ProductRepository } from "../repositories/ProductRepository";
import { Order, OrderRequest } from "../model/Order";
import crypto from "crypto";
import fs from "fs";
import path from "path";

const repo = new ProductRepository();

// Path to orders.json file
const ordersFilePath = path.join(__dirname, "..", "data", "orders.json");

// Load existing orders into memory
let orders: Order[] = [];
if (fs.existsSync(ordersFilePath)) {
  try {
    const rawData = fs.readFileSync(ordersFilePath, "utf-8");
    orders = JSON.parse(rawData);
  } catch (err) {
    console.error("⚠ Error reading orders.json:", err);
    orders = [];
  }
}

export const placeOrder = (req: Request, res: Response) => {
  // validationResult from express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const body = req.body as OrderRequest;

  // Build order items and total; validate product IDs and quantities
  const items: Order["items"] = [];
  let total = 0;

  for (const c of body.cart) {
    const product = repo.getById(c.productId);
    if (!product) {
      return res.status(400).json({
        success: false,
        message: `Product id ${c.productId} not found`,
      });
    }
    if (!Number.isInteger(c.quantity) || c.quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: `Invalid quantity for product ${c.productId}`,
      });
    }
    const lineTotal = Number((product.price * c.quantity).toFixed(2));
    total += lineTotal;
    items.push({
      product,
      quantity: c.quantity,
      lineTotal,
    });
  }

  const order: Order = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    customer: {
      firstName: body.firstName as string,
      lastName: body.lastName as string,
      address: body.address as string,
      email: body.email as string,
      phone: body.phone as string,
    },
    items,
    total: Number(total.toFixed(2)),
  };

  // Add new order to memory
  orders.push(order);

  // Persist to file
  try {
    fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2), "utf-8");
  } catch (err) {
    console.error("⚠ Error writing to orders.json:", err);
    return res
      .status(500)
      .json({ success: false, message: "Failed to save order" });
  }

  // Respond success
  return res.status(201).json({
    success: true,
    message: "Order placed successfully",
    data: { orderId: order.id },
  });
};
