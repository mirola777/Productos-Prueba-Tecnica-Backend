export class ZodErrorsGetter {
  public static get(result: any, body: any): any[] {
    if (result.success) return [];

    const errors = result.error.issues.map((e: any) => {
      const error: any = {
        field: this.getErrorField(e.path),
        message: e.message,
        value: e.path.reduce((obj: any, key: any) => obj[key], body),
      };

      if (this.forbiddenErrorFields.includes(error.field)) {
        error.value = undefined;
      }

      if (e.path.length > 1) error.path = e.path;

      if (e.code === "too_small") error.min = e.minimum;

      if (e.code === "too_big") error.max = e.maximum;

      if (e.code === "invalid_enum_value") error.options = e.options;

      if (e.code === "not_multiple_of") error.multipleOf = e.multipleOf;

      return error;
    });

    return errors;
  }

  private static getErrorField(path: (string | number)[]): string | number {
    if (path.length === 0) return "";

    const lastElement = path[path.length - 1];

    if (typeof lastElement === "string" || path.length === 1)
      return lastElement;

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
