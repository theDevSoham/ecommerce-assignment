import { Request, Response } from "express";
import { ProductRepository } from "../repositories/ProductRepository";

const repo = new ProductRepository();

export const getProducts = (_: any, res: Response): Response => {
  const products = repo.getAll();
  return res.json({ success: true, data: products });
};

export const getProductById = (req: Request, res: Response): Response => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ success: false, message: "Invalid id" });
  }

  const product = repo.getById(id);
  if (!product) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }

  return res.json({ success: true, data: product });
};
