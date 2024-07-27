import { NextFunction, Request, Response } from "express";
import { HTTPError } from "../errors/HTTPError";

export function ErrorMiddleware(
  error: HTTPError,
  request: Request,
  response: Response,
  next: NextFunction
) {
  const status = error.status || 500;

  if (!error.toObject) {
    error = new HTTPError(error.message, status, error.stack);
  }

  response.status(status).send(error.toObject());
}
