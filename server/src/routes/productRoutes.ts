import { Router } from "express";
import { getProducts, getProductById } from "../controller/productController";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);

export default router;
