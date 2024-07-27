export class Parser {
  public static toDate(field: any): Date {
    return field !== undefined && field !== null
      ? typeof field === "string"
        ? new Date(field)
        : field
      : (undefined as any);
  }

  public static toNumber(field: any): number {
    return field !== undefined && field !== null
      ? typeof field === "number"
        ? field
        : Number(field)
      : (undefined as any);
  }

  public static toBoolean(field: any): boolean {
    return field !== undefined ? JSON.parse(field) : undefined;
  }

  public static toAny(field: any, parser?: any): any {
    return field !== undefined && field !== null
      ? typeof field === "string"
        ? field
        : parser
        ? parser(field)
        : field
      : undefined;
  }

  public static toAnyArray(field: any, parser?: any): any[] {
    return field !== undefined && field !== null
      ? Array.isArray(field)
        ? parser
          ? field.map(parser)
          : field
        : field
      : undefined;
  }
}
