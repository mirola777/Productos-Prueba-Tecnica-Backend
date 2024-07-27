import bodyParser from "body-parser";
import { Request, Response } from "express";

const rawBodySaver = function (
  req: Request,
  res: Response,
  buf: Buffer,
  encoding: BufferEncoding
) {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || "utf8");
  }
};

const BodyParserJsonMiddleware = bodyParser.json({ verify: rawBodySaver });
const BodyParserUrlencodedMiddleware = bodyParser.urlencoded({
  extended: true,
  verify: rawBodySaver,
});
const BodyParserRawMiddleware = bodyParser.raw({
  verify: rawBodySaver,
  type: "*/*",
});

export {
  BodyParserJsonMiddleware,
  BodyParserRawMiddleware,
  BodyParserUrlencodedMiddleware,
};
