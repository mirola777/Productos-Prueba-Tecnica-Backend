import Joi from "joi";
import { ValidationStringType } from "../../../enums/validation/ValidationStringType";
import { ValidationString } from "../../../validations/builders/ValidationString";

export class JOIStringParser {
  public static parse(validation: ValidationString): Joi.Schema {
    let schema = Joi.string();

    validation.getTypes().forEach(({ type, value }) => {
      switch (type) {
        case ValidationStringType.EMAIL:
          schema = schema.email();
          break;
        case ValidationStringType.MAX:
          schema = schema.max(value!);
          break;
        case ValidationStringType.MIN:
          schema = schema.min(value!);
          break;
        case ValidationStringType.URL:
          schema = schema.uri();
          break;
        case ValidationStringType.UUID:
          schema = schema.uuid();
          break;
        case ValidationStringType.LENGTH:
          schema = schema.length(value!);
          break;
        case ValidationStringType.DATETIME:
          schema = schema.isoDate();
          break;
        case ValidationStringType.TRIM:
          schema = schema.trim();
          break;
        case ValidationStringType.TO_LOWERCASE:
          schema = schema.custom((str) => str.toLowerCase());
          break;
        case ValidationStringType.TO_UPPERCASE:
          schema = schema.custom((str) => str.toUpperCase());
          break;
        case ValidationStringType.OPTIONAL:
          schema = schema.optional();
          break;
        case ValidationStringType.IS_LOWER_CASE:
          schema = schema.custom((value, helpers) => {
            if (value !== value.toLowerCase()) {
              return helpers.error("string.lowercase");
            }

            return value;
          });
          break;
        case ValidationStringType.IS_UPPER_CASE:
          schema = schema.custom((value, helpers) => {
            if (value !== value.toUpperCase()) {
              return helpers.error("string.uppercase");
            }

            return value;
          });
          break;
        case ValidationStringType.NO_SPACES:
          schema = schema.custom((value, helpers) => {
            if (value.includes(" ")) {
              return helpers.error("string.nospaces");
            }

            return value;
          });
          break;
        case ValidationStringType.REQUIRED:
          schema = schema.required();
          break;
      }
    });

    schema = schema.messages({
      "any.required": "This field is required",
      "string.base": "Must be a string",
      "string.email": "Must be a valid email",
      "string.max": "Must be at most {#limit} characters",
      "string.min": "Must be at least {#limit} characters",
      "string.uri": "Must be a valid URL",
      "string.uuid": "Must be a valid UUID",
      "string.length": "Must be {#limit} characters",
      "string.isoDate": "Must be a valid date",
      "string.regex.base": "Must match the pattern",
      "string.lowercase": "Must be lowercase",
      "string.uppercase": "Must be uppercase",
      "string.nospaces": "Must not contain spaces",
    });

    return schema;
  }
}
