import { Product } from "./Product";

export interface CartItem {
  productId: number;
  quantity: number;
}

export interface OrderRequest {
  firstName: string;
  lastName: string;
  address: string;
  cart: CartItem[];
  email?: string;
  phone?: string;
}

export interface Order {
  id: string;
  createdAt: string;
  customer: {
    firstName: string;
    lastName: string;
    address: string;
    email?: string;
    phone?: string;
  };
  items: Array<{
    product: Product;
    quantity: number;
    lineTotal: number;
  }>;
  total: number;
}
