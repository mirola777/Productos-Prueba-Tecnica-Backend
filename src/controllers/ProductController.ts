import { NextFunction, Request, Response } from "express";
import { Product } from "../models/Product";
import { CreateProductUseCase } from "../use_cases/product/CreateProductUseCase";
import { DeleteProductUseCase } from "../use_cases/product/DeleteProductUseCase";
import { GetAllProductsUseCase } from "../use_cases/product/GetAllProductsUseCase";
import { GetProductUseCase } from "../use_cases/product/GetProductUseCase";
import { UpdateProductUseCase } from "../use_cases/product/UpdateProductUseCase";

export class ProductController {
  public static async getProducts(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const products = await GetAllProductsUseCase.execute();

      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }

  public static async getProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = req.params.id;

      const product = await GetProductUseCase.execute(id);

      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  public static async createProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const product = Product.fromJson(req.body);

      const createdProduct = await CreateProductUseCase.execute(product);

      res.status(201).json(createdProduct);
    } catch (error) {
      next(error);
    }
  }

  public static async updateProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = req.params.id;
      const product = Product.fromJson({ ...req.body, id });

      const updatedProduct = await UpdateProductUseCase.execute(product);

      res.status(200).json(updatedProduct);
    } catch (error) {
      next(error);
    }
  }

  public static async deleteProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = req.params.id;

      await DeleteProductUseCase.execute(id);

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
