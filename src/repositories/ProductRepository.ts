import { PrismaProductRepository } from "../libs/prisma/repositories/PrismaProductRepository";
import { Product } from "../models/Product";
import { RepositoryInterface } from "./RepositoryInterface";

export interface ProductRepositoryInterface
  extends RepositoryInterface<Product> {}

export const getProductRepository = (): ProductRepositoryInterface => {
  return new PrismaProductRepository();
};
