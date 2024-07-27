import { ProductDoesNotExist } from "../../errors/product/ProductDoesNotExist";
import { ProductNameAlreadyExists } from "../../errors/product/ProductNameAlreadyExists";
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

    await this.checkIfAlreadyExistsByName(product);

    const updatedProduct = await repository.update(product);

    return updatedProduct;
  }

  private static async checkIfAlreadyExistsByName(
    product: Product
  ): Promise<void> {
    const repository = getProductRepository();

    const id = product.getId();

    const oldProduct = await repository.get(id);

    const name = product.getName();

    const oldName = oldProduct.getName();

    if (name !== oldName) {
      const nameExists = await repository.checkIfExistsByName(name);

      if (nameExists) throw new ProductNameAlreadyExists(name);
    }
  }
}
