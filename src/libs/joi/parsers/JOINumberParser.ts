import Joi from "joi";
import { ValidationNumberType } from "../../../enums/validation/ValidationNumberType";
import { ValidationNumber } from "../../../validations/builders/ValidationNumber";

export class JOINumberParser {
  public static parse(validation: ValidationNumber): Joi.Schema {
    let schema = Joi.number();

    validation.getTypes().forEach(({ type, value }) => {
      switch (type) {
        case ValidationNumberType.GT:
          schema = schema.greater(value!);
          break;
        case ValidationNumberType.GTE:
          schema = schema.greater(value!);
          break;
        case ValidationNumberType.LT:
          schema = schema.less(value!);
          break;
        case ValidationNumberType.LTE:
          schema = schema.less(value!);
          break;
        case ValidationNumberType.OPTIONAL:
          schema = schema.optional();
          break;
        case ValidationNumberType.FLOAT:
          schema = schema.custom((value, helpers) => {
            if (!Number.isInteger(value)) {
              return helpers.error("number.integer");
            }

            return value;
          });
          break;
        case ValidationNumberType.REQUIRED:
          schema = schema.required();
          break;
      }
    });

    schema = schema.messages({
      "number.base": "The field must be a number",
      "number.greater": "The field must be greater than {#limit}",
      "number.less": "The field must be less than {#limit}",
      "number.integer": "The field must be an integer",
    });

    return schema;
  }
}
