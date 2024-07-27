import { Product } from "../../../models/Product";
import { ProductRepositoryInterface } from "../../../repositories/ProductRepository";

import { prisma } from "../database/PrismaConnection";
import { PrismDataPreparer } from "../util/PrismaDataPreparer";

export class PrismaProductRepository implements ProductRepositoryInterface {
  async create(product: Product): Promise<Product> {
    const createdProduct = await prisma.product
      .create({ data: PrismDataPreparer.clear(product) })
      .then(Product.fromJson);

    return createdProduct;
  }

  async update(product: Product): Promise<Product> {
    const updatedProduct = await prisma.product
      .update({
        where: { id: product.getId() },
        data: PrismDataPreparer.clear(product),
      })
      .then(Product.fromJson);

    return updatedProduct;
  }

  async delete(id: string): Promise<void> {
    await prisma.product.delete({ where: { id } });
  }

  async get(id: string): Promise<Product> {
    const product = await prisma.product
      .findUnique({ where: { id } })
      .then(Product.fromJson);

    return product;
  }

  async getAll(): Promise<Product[]> {
    const products = await prisma.product
      .findMany()
      .then((products) => products.map(Product.fromJson));

    return products;
  }

  async checkIfExists(id: string): Promise<boolean> {
    const product = await prisma.product.findUnique({ where: { id } });

    return product !== null;
  }

  async checkIfExistsByName(name: string): Promise<boolean> {
    const product = await prisma.product.findFirst({ where: { name } });

    return product !== null;
  }
}
