import {
  BodyParserJsonMiddleware,
  BodyParserUrlencodedMiddleware,
} from "./BodyParserMiddleware";
import { CookieParserMiddleware } from "./CookieMiddleware";
import { CorsMiddleware } from "./CORSMiddleware";

export const Middlewares = [
  CorsMiddleware,
  CookieParserMiddleware,
  BodyParserJsonMiddleware,
  BodyParserUrlencodedMiddleware,
];
