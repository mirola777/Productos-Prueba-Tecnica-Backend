import { HTTPError } from "../HTTPError";

export class ProductNameAlreadyExists extends HTTPError {
  constructor(name: string) {
    super(
      "PRODUCT_NAME_ALREADY_EXISTS",
      400,
      `Product with name ${name} already exists`
    );
  }
}
