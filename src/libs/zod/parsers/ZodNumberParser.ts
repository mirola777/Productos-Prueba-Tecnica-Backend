import { ZodNumber, ZodTypeAny, z } from "zod";
import { ValidationNumberType } from "../../../enums/validation/ValidationNumberType";
import { ValidationNumber } from "../../../validations/builders/ValidationNumber";

export class ZodNumberParser {
  public static parse(validationNumber: ValidationNumber): ZodTypeAny {
    let schema = z.number();

    validationNumber.getTypes().forEach(({ type, value }) => {
      switch (type) {
        case ValidationNumberType.GT:
          schema = schema.gt(value!);
          break;
        case ValidationNumberType.GTE:
          schema = schema.gte(value!);
          break;
        case ValidationNumberType.LT:
          schema = schema.lt(value!);
          break;
        case ValidationNumberType.LTE:
          schema = schema.lte(value!);
          break;
        case ValidationNumberType.POSITIVE:
          schema = schema.positive();
          break;
        case ValidationNumberType.NEGATIVE:
          schema = schema.negative();
          break;
        case ValidationNumberType.NONNEGATIVE:
          schema = schema.nonnegative();
          break;
        case ValidationNumberType.NONPOSITIVE:
          schema = schema.nonpositive();
          break;
        case ValidationNumberType.MULTIPLE_OF:
          schema = schema.multipleOf(value!);
          break;
        case ValidationNumberType.FINITE:
          schema = schema.finite();
          break;
        case ValidationNumberType.OPTIONAL:
          schema = schema.optional() as unknown as ZodNumber;
          break;
        case ValidationNumberType.FLOAT:
          schema = schema.refine(
            (num) => Number(num) === num && num % 1 !== 0,
            {
              message: "Must be a float",
            }
          ) as unknown as ZodNumber;
          break;
      }
    });

    return schema;
  }
}
