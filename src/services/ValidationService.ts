import { ValidationResult, ValidationSchema } from "../types/validation";

export interface ValidationService {
  validate(data: any, schema: ValidationSchema): ValidationResult;
}
