import { NextFunction, Request, Response } from "express";
import { ValidationProvider } from "../providers/ValidationProvider";
import { ValidationSchema } from "../types/validation";

export function ValidationMiddleware(schema: ValidationSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const service = ValidationProvider.inject();

    const result = service.validate(req.body, schema);

    if (result.ok) {
      req.body = result.body;

      return next();
    } else {
      return res.status(400).json({
        status: 400,
        errors: result.errors,
      });
    }
  };
}
