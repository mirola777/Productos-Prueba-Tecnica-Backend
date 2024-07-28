import { JOIValidationService } from "../libs/joi/JOIValidationService";
import { ValidationService } from "../services/ValidationService";

export class ValidationProvider {
  public static inject(): ValidationService {
    return new JOIValidationService();
  }
}
