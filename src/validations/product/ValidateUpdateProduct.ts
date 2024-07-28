import { ValidationSchema } from "../../types/validation";
import { ValidationNumber } from "../builders/ValidationNumber";
import { ValidationString } from "../builders/ValidationString";

export const ValidateUpdateProduct: ValidationSchema = {
  name: new ValidationString().trim().min(1).max(50).optional(),
  description: new ValidationString().trim().max(2500).optional(),
  price: new ValidationNumber().gte(0).lte(9999999999),
  image: new ValidationString().optional(),
  stock: new ValidationNumber().gte(0).lte(9999999999).optional(),
};
