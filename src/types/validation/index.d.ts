import { ValidationNumber } from "../../validations/builders/ValidationNumber";
import { ValidationString } from "../../validations/builders/ValidationString";

export type ValidationSchema = {
  [key: string]: ValidationNumber | ValidationString;
};

export type ValidationResult = {
  ok: boolean;
  body?: any;
  errors?: any[];
};
