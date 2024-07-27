import { ProductDoesNotExist } from "../../errors/product/ProductDoesNotExist";
import { InvalidIDError } from "../../errors/util/InvalidIDError";
import { Product } from "../../models/Product";
import { getProductRepository } from "../../repositories/ProductRepository";

export class GetProductUseCase {
  public static async execute(id: string): Promise<Product> {
    const repository = getProductRepository();

    if (!id) throw new InvalidIDError();

    const exists = await repository.checkIfExists(id);

    if (!exists) throw new ProductDoesNotExist(id);

    const product = await repository.get(id);

    return product;
  }
}
