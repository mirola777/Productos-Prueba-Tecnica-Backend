import { ValidationSchema } from "../../types/validation";
import { ValidationNumber } from "../builders/ValidationNumber";
import { ValidationString } from "../builders/ValidationString";

export const ValidateCreateProduct: ValidationSchema = {
  name: new ValidationString().trim().min(3).max(50).required(),
  description: new ValidationString().trim().max(2500).optional(),
  price: new ValidationNumber().gte(0).lte(9999999999).required(),
  image: new ValidationString().optional(),
  stock: new ValidationNumber().gte(0).lte(9999999999).required(),
};
