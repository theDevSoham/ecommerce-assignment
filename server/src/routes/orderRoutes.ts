import { Router } from "express";
import { body } from "express-validator";
import { placeOrder } from "../controller/orderController";

const router = Router();

/**
 * POST /orders
 * body: { firstName, lastName, address, cart: [{ productId, quantity }], email?, phone? }
 */
router.post(
  "/",
  // Validations
  body("firstName").isString().trim().notEmpty().withMessage("First name is required"),
  body("lastName").isString().trim().notEmpty().withMessage("Last name is required"),
  body("address").isString().trim().notEmpty().withMessage("Address is required"),
  body("cart").isArray({ min: 1 }).withMessage("Cart must be a non-empty array"),
  body("cart.*.productId").isInt({ gt: 0 }).withMessage("productId must be a positive integer"),
  body("cart.*.quantity").isInt({ gt: 0 }).withMessage("quantity must be a positive integer"),
  placeOrder
);

export default router;
