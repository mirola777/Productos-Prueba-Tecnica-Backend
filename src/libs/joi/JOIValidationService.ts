import { ValidationService } from "../../services/ValidationService";
import { ValidationResult, ValidationSchema } from "../../types/validation";
import { JOISchemaParser } from "./parsers/JOISchemaParser";
import { JOIErrorsGetter } from "./util/JOIErrorsGetter";

export class JOIValidationService implements ValidationService {
  public validate(data: any, schema: ValidationSchema): ValidationResult {
    const JOISchema = JOISchemaParser.parse(schema);

    const result = JOISchema.validate(data, { abortEarly: false });

    if (result.error === undefined) {
      data = result.value;

      return { ok: true, body: data };
    }

    return { ok: false, errors: JOIErrorsGetter.get(result, data) };
  }
}
