export class HTTPError extends Error {
  status: number;
  message: string;
  stack?: string;

  constructor(message: string, status: number, stack?: string) {
    super(message);

    this.status = status;
    this.message = message;
    this.stack = stack;
  }

  public toObject(): object {
    return {
      status: this.status || 500,
      errors: [{ message: this.message || "SOMETHING_WENT_WRONG" }],
      stack: this.stack,
    };
  }
}
