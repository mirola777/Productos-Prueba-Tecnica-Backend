import { ZodValidationService } from "../libs/zod/ZodValidationService";
import { ValidationService } from "../services/ValidationService";

export class ValidationProvider {
  public static inject(): ValidationService {
    return new ZodValidationService();
  }
}
