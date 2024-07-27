import { HTTPError } from "../HTTPError";

export class ProductDoesNotExist extends HTTPError {
  constructor(id: string) {
    super(
      "PRODUCT_DOES_NOT_EXIST",
      404,
      `Product with id ${id} does not exist`
    );
  }
}
