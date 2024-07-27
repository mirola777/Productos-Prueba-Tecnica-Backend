import cookieParser from "cookie-parser";

const CookieParserMiddleware = cookieParser(process.env.COOKIE_SECRET);

export { CookieParserMiddleware };
