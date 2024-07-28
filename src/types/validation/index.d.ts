import { ValidationNumber } from "../../validations/builders/ValidationNumber";
import { ValidationString } from "../../validations/builders/ValidationString";

export type ValidationSchema = {
  [key: string]: ValidationNumber | ValidationString;
};

export type ValidationErrorItem = {
  field: string;
  message: string;
  code: string;
  value: any;
  path?: (string | number)[];
};

export type ValidationResult =
  | {
      ok: false;
      errors: ValidationErrorItem[];
    }
  | {
      ok: true;
      body: any;
    };
