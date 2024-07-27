import { ProductDoesNotExist } from "../../errors/product/ProductDoesNotExist";
import { InvalidIDError } from "../../errors/util/InvalidIDError";
import { getProductRepository } from "../../repositories/ProductRepository";

export class DeleteProductUseCase {
  public static async execute(id: string): Promise<void> {
    const repository = getProductRepository();

    if (!id) throw new InvalidIDError();

    const exists = await repository.checkIfExists(id);

    if (!exists) throw new ProductDoesNotExist(id);

    await repository.delete(id);
  }
}
