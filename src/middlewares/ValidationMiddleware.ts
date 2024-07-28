import { NextFunction, Request, Response } from "express";
import { ValidationError } from "../errors/ValidationError";
import { ValidationProvider } from "../providers/ValidationProvider";
import { ValidationSchema } from "../types/validation";

export function ValidationMiddleware(schema: ValidationSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const service = ValidationProvider.inject();

    const result = service.validate(req.body, schema);

    if (result.ok) {
      req.body = result.body;

      next();
    } else {
      const error = new ValidationError(result.errors);

      res.status(error.status).json(error.toObject());
    }
  };
}
