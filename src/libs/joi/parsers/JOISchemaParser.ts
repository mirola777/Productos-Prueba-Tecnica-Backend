import Joi from "joi";
import { ValidationSchema } from "../../../types/validation";
import { ValidationNumber } from "../../../validations/builders/ValidationNumber";
import { ValidationString } from "../../../validations/builders/ValidationString";
import { JOINumberParser } from "./JOINumberParser";
import { JOIStringParser } from "./JOIStringParser";

export class JOISchemaParser {
  public static parse(schema: ValidationSchema): Joi.Schema {
    const keys = Object.keys(schema);

    const JOISchema = Joi.object(
      keys.reduce((acc, key) => {
        const value = schema[key];

        if (value instanceof ValidationString) {
          acc[key] = JOIStringParser.parse(value);
        } else if (value instanceof ValidationNumber) {
          acc[key] = JOINumberParser.parse(value);
        }

        return acc;
      }, {} as Record<string, Joi.Schema>)
    );

    return JOISchema;
  }
}
