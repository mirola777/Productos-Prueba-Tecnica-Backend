import { ValidationNumberType } from "../../enums/validation/ValidationNumberType";

export class ValidationNumber {
  private types: { type: ValidationNumberType; value?: number }[] = [];

  getTypes(): { type: ValidationNumberType; value?: number }[] {
    return this.types;
  }

  gt(value: number): ValidationNumber {
    this.types.push({ type: ValidationNumberType.GT, value });

    return this;
  }

  gte(value: number): ValidationNumber {
    this.types.push({ type: ValidationNumberType.GTE, value });

    return this;
  }

  lt(value: number): ValidationNumber {
    this.types.push({ type: ValidationNumberType.LT, value });

    return this;
  }

  lte(value: number): ValidationNumber {
    this.types.push({ type: ValidationNumberType.LTE, value });

    return this;
  }

  int(): ValidationNumber {
    this.types.push({ type: ValidationNumberType.INT });

    return this;
  }

  optional(): ValidationNumber {
    this.types.push({ type: ValidationNumberType.OPTIONAL });

    return this;
  }

  float(): ValidationNumber {
    this.types.push({ type: ValidationNumberType.FLOAT });

    return this;
  }

  required(): ValidationNumber {
    this.types.push({ type: ValidationNumberType.REQUIRED });

    return this;
  }
}
