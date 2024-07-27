import { ZodString, ZodTypeAny, z } from "zod";
import { ValidationStringType } from "../../../enums/validation/ValidationStringType";
import { ValidationString } from "../../../validations/builders/ValidationString";

export class ZodStringParser {
  public static parse(validationString: ValidationString): ZodTypeAny {
    let schema = z.string();

    validationString.getTypes().forEach(({ type, value }) => {
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
          schema = schema.url();
          break;
        case ValidationStringType.UUID:
          schema = schema.uuid();
          break;
        case ValidationStringType.LENGTH:
          schema = schema.length(value!);
          break;
        case ValidationStringType.DATETIME:
          schema = schema.date();
          break;
        case ValidationStringType.TRIM:
          schema = schema.trim();
          break;
        case ValidationStringType.IS_HEX:
          schema = schema.regex(/^[0-9a-fA-F]+$/, "Must be a valid hex");
          break;
        case ValidationStringType.IS_ALPHA:
          schema = schema.regex(/^[A-Za-z]+$/, "Must be alphabetic");
          break;
        case ValidationStringType.MOBILE_PHONE:
          schema = schema.regex(
            /^\+?[1-9]\d{1,14}$/,
            "Must be a valid mobile phone number"
          );
          break;
        case ValidationStringType.TO_LOWERCASE:
          schema = schema.transform((str) =>
            str.toLowerCase()
          ) as unknown as ZodString;
          break;
        case ValidationStringType.TO_UPPERCASE:
          schema = schema.transform((str) =>
            str.toUpperCase()
          ) as unknown as ZodString;
          break;
        case ValidationStringType.OPTIONAL:
          schema = schema.optional() as unknown as ZodString;
          break;
        case ValidationStringType.IS_LOWER_CASE:
          schema = schema.refine((str) => str === str.toLowerCase(), {
            message: "Must be lowercase",
          }) as unknown as ZodString;
          break;
        case ValidationStringType.IS_UPPER_CASE:
          schema = schema.refine((str) => str === str.toUpperCase(), {
            message: "Must be uppercase",
          }) as unknown as ZodString;
          break;
        case ValidationStringType.NO_SPACES:
          schema = schema.refine((str) => !/\s/.test(str), {
            message: "Must not contain spaces",
          }) as unknown as ZodString;
          break;
      }
    });

    return schema;
  }
}
