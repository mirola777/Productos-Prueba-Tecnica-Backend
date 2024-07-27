import { ProductNameAlreadyExists } from "../../errors/product/ProductNameAlreadyExists";
import { Product } from "../../models/Product";
import { getProductRepository } from "../../repositories/ProductRepository";

export class CreateProductUseCase {
  public static async execute(product: Product): Promise<Product> {
    const repository = getProductRepository();

    const name = product.getName();

    const productExists = await repository.checkIfExistsByName(name);

    if (productExists) throw new ProductNameAlreadyExists(name);

    const createdProduct = await repository.create(product);

    return createdProduct;
  }
}
