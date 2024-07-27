import { PrismaProductRepository } from "../libs/prisma/repositories/PrismaProductRepository";
import { Product } from "../models/Product";
import { RepositoryInterface } from "./RepositoryInterface";

export interface ProductRepositoryInterface
  extends RepositoryInterface<Product> {
  checkIfExistsByName(name: string): Promise<boolean>;
}

export const getProductRepository = (): ProductRepositoryInterface => {
  return new PrismaProductRepository();
};
