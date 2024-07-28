import { ValidationErrorItem } from "../types/validation";

export class ValidationError extends Error {
  errors: ValidationErrorItem[];
  status: number = 400;

  constructor(errors: ValidationErrorItem[]) {
    super("VALIDATION_ERROR");

    this.errors = errors;
  }

  public toObject(): object {
    return {
      status: this.status,
      errors: this.errors,
    };
  }
}
