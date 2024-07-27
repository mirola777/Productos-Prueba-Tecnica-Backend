import express from "express";

import { ProductController } from "../controllers/ProductController";

export const ProductRoutes = express.Router();

ProductRoutes.get("/", ProductController.getProducts);
ProductRoutes.post("/", ProductController.createProduct);
ProductRoutes.get("/:id", ProductController.getProduct);
ProductRoutes.put("/:id", ProductController.updateProduct);
ProductRoutes.delete("/:id", ProductController.deleteProduct);
