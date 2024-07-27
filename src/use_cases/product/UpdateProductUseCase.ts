import { ProductDoesNotExist } from "../../errors/product/ProductDoesNotExist";
import { InvalidIDError } from "../../errors/util/InvalidIDError";
import { Product } from "../../models/Product";
import { getProductRepository } from "../../repositories/ProductRepository";

export class UpdateProductUseCase {
  public static async execute(product: Product): Promise<Product> {
    const repository = getProductRepository();

    const id = product.getId();

    if (!id) throw new InvalidIDError();

    const exists = await repository.checkIfExists(id);

    if (!exists) throw new ProductDoesNotExist(id);

    const updatedProduct = await repository.update(product);

    return updatedProduct;
  }
}
