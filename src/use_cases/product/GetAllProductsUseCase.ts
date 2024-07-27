import { Product } from "../../models/Product";
import { getProductRepository } from "../../repositories/ProductRepository";

export class GetAllProductsUseCase {
  public static async execute(): Promise<Product[]> {
    const repository = getProductRepository();

    const products = await repository.getAll();

    return products;
  }
}
