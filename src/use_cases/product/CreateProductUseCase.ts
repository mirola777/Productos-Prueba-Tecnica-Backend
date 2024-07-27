import { Product } from "../../models/Product";
import { getProductRepository } from "../../repositories/ProductRepository";

export class CreateProductUseCase {
  public static async execute(product: Product): Promise<Product> {
    const repository = getProductRepository();

    const createdProduct = await repository.create(product);

    return createdProduct;
  }
}
