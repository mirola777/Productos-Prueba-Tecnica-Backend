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

  positive(): ValidationNumber {
    this.types.push({ type: ValidationNumberType.POSITIVE });

    return this;
  }

  negative(): ValidationNumber {
    this.types.push({ type: ValidationNumberType.NEGATIVE });

    return this;
  }

  nonnegative(): ValidationNumber {
    this.types.push({ type: ValidationNumberType.NONNEGATIVE });

    return this;
  }

  nonpositive(): ValidationNumber {
    this.types.push({ type: ValidationNumberType.NONPOSITIVE });

    return this;
  }

  multipleOf(value: number): ValidationNumber {
    this.types.push({ type: ValidationNumberType.MULTIPLE_OF, value });

    return this;
  }

  finite(): ValidationNumber {
    this.types.push({ type: ValidationNumberType.FINITE });

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
}
