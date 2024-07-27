import { z } from "zod";
import { ValidationSchema } from "../../../types/validation";
import { ValidationNumber } from "../../../validations/builders/ValidationNumber";
import { ValidationString } from "../../../validations/builders/ValidationString";
import { ZodNumberParser } from "./ZodNumberParser";
import { ZodStringParser } from "./ZodStringParser";

export class ZodSchemaParser {
  public static parse(schema: ValidationSchema): z.ZodObject<any> {
    const keys = Object.keys(schema);

    const zodSchema = z.object(
      keys.reduce((acc, key) => {
        const value = schema[key];

        if (value instanceof ValidationString) {
          acc[key] = ZodStringParser.parse(value);
        } else if (value instanceof ValidationNumber) {
          acc[key] = ZodNumberParser.parse(value);
        }

        return acc;
      }, {} as Record<string, z.ZodType<any>>)
    );

    return zodSchema;
  }
}
