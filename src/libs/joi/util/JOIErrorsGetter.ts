import Joi from "joi";
import { ValidationErrorItem } from "../../../types/validation";

export class JOIErrorsGetter {
  public static get(
    result: {
      error: Joi.ValidationError;
      warning?: Joi.ValidationError;
      value: any;
    },
    body: any
  ): ValidationErrorItem[] {
    if (!result.error) return [];

    const errors = result.error.details.map((e) => {
      const error: ValidationErrorItem = {
        field: this.getErrorField(e.path),
        code: e.type,
        message: e.message,
        value: e.path.reduce((obj: any, key: any) => obj[key], body),
        path: e.path.length > 1 ? e.path : undefined,
      };

      if (this.forbiddenErrorFields.includes(error.field)) {
        error.value = undefined;
      }

      return error;
    });

    return errors;
  }

  private static getErrorField(path: (string | number)[]): string {
    if (path.length === 0) return "";

    const lastElement = path[path.length - 1];

    if (typeof lastElement === "string" || path.length === 1)
      return String(lastElement);

    return this.getErrorField(path.slice(0, path.length - 1));
  }

  private static forbiddenErrorFields = [
    "password",
    "token",
    "confirmPassword",
    "key",
    "newPassword",
    "currentPassword",
    "confirmNewPassword",
  ];
}
