import { ValidationService } from "../../services/ValidationService";
import { ValidationResult, ValidationSchema } from "../../types/validation";
import { ZodSchemaParser } from "./parsers/ZodSchemaParser";
import { ZodErrorsGetter } from "./util/ZodErrorsGetter";

export class ZodValidationService implements ValidationService {
  public validate(data: any, schema: ValidationSchema): ValidationResult {
    const zodSchema = ZodSchemaParser.parse(schema);

    const result = zodSchema.safeParse(data);

    if (result.success) {
      data = result.data;

      return { ok: true, body: data };
    }

    return { ok: false, errors: ZodErrorsGetter.get(result, data) };
  }
}
