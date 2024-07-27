import { HTTPError } from "../HTTPError";

export class InvalidIDError extends HTTPError {
  constructor() {
    super("INVALID_ID", 400);
  }
}
