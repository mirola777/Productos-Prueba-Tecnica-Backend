import { HTTPError } from "../HTTPError";

export class CORSError extends HTTPError {
  constructor() {
    super("CORS_ERROR", 400);
  }
}
