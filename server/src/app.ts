import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";
import adminRoutes from "./routes/adminRoute";

export const createApp = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  // health
  app.get("/health", (_, res) => res.json({ status: "ok" }));

  // API
  app.use("/api/products", productRoutes);
  app.use("/api/orders", orderRoutes);

  // Admin routes
  app.use("/admin", adminRoutes);

  // 404
  app.use((_, res) => {
    res.status(404).json({ success: false, message: "Not Found" });
  });

  // error handler
  app.use((err: any, _: any, res: any, __: any) => {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  });

  return app;
};
