import express from "express";

import { ProductController } from "../controllers/ProductController";
import { ValidationMiddleware } from "../middlewares/ValidationMiddleware";
import { ValidateCreateProduct } from "../validations/product/ValidateCreateProduct";
import { ValidateUpdateProduct } from "../validations/product/ValidateUpdateProduct";

export const ProductRoutes = express.Router();

ProductRoutes.get("/", ProductController.getProducts);
ProductRoutes.post(
  "/",
  ValidationMiddleware(ValidateCreateProduct),
  ProductController.createProduct
);
ProductRoutes.get("/:id", ProductController.getProduct);
ProductRoutes.put(
  "/:id",
  ValidationMiddleware(ValidateUpdateProduct),
  ProductController.updateProduct
);
ProductRoutes.delete("/:id", ProductController.deleteProduct);
