import fs from "fs";
import path from "path";
import { Product } from "../model/Product";

export class ProductRepository {
  private products: Product[] = [];

  constructor() {
    this.loadProducts();
  }

  private loadProducts() {
    const file = path.resolve(__dirname, "../data/products.json");
    try {
      const raw = fs.readFileSync(file, { encoding: "utf-8" });
      const parsed = JSON.parse(raw) as Product[];
      if (!Array.isArray(parsed)) {
        throw new Error("products.json does not contain an array");
      }
      this.products = parsed;
    } catch (err) {
      console.error("Failed to load products.json:", (err as Error).message);
      this.products = [];
    }
  }

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  findByCategory(category: string): Product[] {
    return this.products.filter((p) => p.category === category);
  }
}
