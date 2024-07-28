import { ValidationStringType } from "../../enums/validation/ValidationStringType";

export class ValidationString {
  private types: { type: ValidationStringType; value?: number }[] = [];

  getTypes(): { type: ValidationStringType; value?: number }[] {
    return this.types;
  }

  email(): ValidationString {
    this.types.push({ type: ValidationStringType.EMAIL });

    return this;
  }

  max(max: number): ValidationString {
    this.types.push({ type: ValidationStringType.MAX, value: max });

    return this;
  }

  min(min: number): ValidationString {
    this.types.push({ type: ValidationStringType.MIN, value: min });

    return this;
  }

  url(): ValidationString {
    this.types.push({ type: ValidationStringType.URL });

    return this;
  }

  uuid(): ValidationString {
    this.types.push({ type: ValidationStringType.UUID });

    return this;
  }

  length(length: number): ValidationString {
    this.types.push({ type: ValidationStringType.LENGTH, value: length });

    return this;
  }

  datetime(): ValidationString {
    this.types.push({ type: ValidationStringType.DATETIME });

    return this;
  }

  toLowercase(): ValidationString {
    this.types.push({ type: ValidationStringType.TO_LOWERCASE });

    return this;
  }

  toUppercase(): ValidationString {
    this.types.push({ type: ValidationStringType.TO_UPPERCASE });

    return this;
  }

  trim(): ValidationString {
    this.types.push({ type: ValidationStringType.TRIM });

    return this;
  }

  optional(): ValidationString {
    this.types.push({ type: ValidationStringType.OPTIONAL });

    return this;
  }

  isLowerCase(): ValidationString {
    this.types.push({ type: ValidationStringType.IS_LOWER_CASE });

    return this;
  }

  isUpperCase(): ValidationString {
    this.types.push({ type: ValidationStringType.IS_UPPER_CASE });

    return this;
  }

  noSpaces(): ValidationString {
    this.types.push({ type: ValidationStringType.NO_SPACES });

    return this;
  }

  required(): ValidationString {
    this.types.push({ type: ValidationStringType.REQUIRED });

    return this;
  }
}
